'use strict';
require('./event.css');

var ngApp = require('./main.js');
ngApp.filter('filterTime', function() {
    return function(e) {
        var result, h, m, s, time = e * 1;
        h = Math.floor(time / 3600);
        m = Math.floor((time / 60 % 6));
        s = Math.floor((time % 60));
        return result = h + ":" + m + ":" + s;
    }
});
ngApp.service('EnlRound', ['http2', '$q', 'tmsLocation', function(http2, $q, LS) {
    var oPage;
    oPage = {
        at: 1,
        size: 12,
        j: function() {
            return '&page=' + this.at + '&size=' + this.size;
        }
    };
    this.list = function() {
        var deferred = $q.defer(),
            url;
        url = LS.j('round/list', 'site', 'app');
        url += oPage.j();
        http2.get(url).then(function(rsp) {
            oPage.total = rsp.data.total;
            deferred.resolve(rsp.data);
        });
        return deferred.promise;
    };
}]);
ngApp.controller('ctrlAction', ['$scope', '$q', 'tmsLocation', 'http2', 'EnlRound', function($scope, $q, LS, http2, EnlRound) {
    function fnCloseNotice(oNotice) {
        var url, defer;
        defer = $q.defer();
        url = LS.j('notice/close', 'site', 'app');
        url += '&notice=' + oNotice.id;
        http2.get(url).then(function(rsp) {
            $scope.notices.splice($scope.notices.indexOf(oNotice), 1);
            defer.resolve();
        });
        return defer.promise;
    }

    function fnGetKanban(rid) {
        var url, defer;
        url = LS.j('user/kanban', 'site', 'app');
        if (rid) url += '&rid=' + rid;
        http2.get(url).then(function(rsp) {
            var oUndoneByUserid = {};
            if (rsp.data.users && rsp.data.users.length) {
                if (rsp.data.undone && rsp.data.undone.length) {
                    rsp.data.undone.forEach(function(oUndone) {
                        oUndoneByUserid[oUndone.userid] = oUndone;
                    });
                }
                rsp.data.users.forEach(function(oUser) {
                    if (oUndoneByUserid[oUser.userid]) {
                        if (oUndoneByUserid[oUser.userid].tasks) {
                            oUser.undone = oUndoneByUserid[oUser.userid].tasks;
                        }
                        delete oUndoneByUserid[oUser.userid];
                    }
                });
            }
            $scope.kanban.users = rsp.data.users;
            $scope.kanban.undone = oUndoneByUserid;
        });
    }
    var _oApp, _aLogs, _oPage, _oFilter;
    $scope.page = _oPage = {
        at: 1,
        size: 30,
        j: function() {
            return 'page=' + this.at + '&size=' + this.size;
        }
    };
    $scope.subView = 'timeline.html';
    $scope.filter = _oFilter = { scope: 'N' };
    $scope.searchEvent = function(pageAt) {
        var url, defer;
        pageAt && (_oPage.at = pageAt);
        defer = $q.defer();
        url = LS.j('event/timeline', 'site', 'app');
        url += '&scope=' + _oFilter.scope || 'A';
        url += '&' + _oPage.j();
        http2.get(url).then(function(rsp) {
            $scope.logs = _aLogs = rsp.data.logs;
            _oPage.total = rsp.data.total;
            defer.resolve(rsp.data);
        });
        return defer.promise;
    };
    $scope.searchNotice = function(pageAt) {
        var url, defer;
        pageAt && (_oPage.at = pageAt);
        defer = $q.defer();
        url = LS.j('notice/list', 'site', 'app');
        url += '&' + _oPage.j();
        http2.get(url).then(function(rsp) {
            $scope.notices = rsp.data.notices;
            _oPage.total = rsp.data.total;
            defer.resolve(rsp.data);
        });
        return defer.promise;
    };
    $scope.closeNotice = function(oNotice, bGotoCowork) {
        fnCloseNotice(oNotice).then(function() {
            if (bGotoCowork) {
                $scope.gotoCowork(oNotice.enroll_key);
            }
        });
    };
    $scope.gotoCowork = function(ek) {
        var url;
        if (ek) {
            url = LS.j('', 'site', 'app');
            url += '&ek=' + ek;
            url += '&page=cowork';
            location.href = url;
        }
    };
    $scope.shiftRound = function(oRound) {
        fnGetKanban(oRound ? oRound.rid : '');
    };
    $scope.kanban = {};
    $scope.$watch('filter', function(nv, ov) {
        if (nv && nv !== ov) {
            if (/N/.test(nv.scope)) {
                $scope.subView = 'timeline.html';
                $scope.searchNotice(1);
            } else if (/kanban/.test(nv.scope)) {
                $scope.subView = 'kanban.html';
                fnGetKanban();
            } else {
                $scope.subView = 'timeline.html';
                $scope.searchEvent(1);
            }
        }
    }, true)
    $scope.$on('xxt.app.enroll.ready', function(event, params) {
        _oApp = params.app;
        /* 活动任务 */
        if (_oApp.actionRule) {
            /* 设置活动任务提示 */
            var tasks = [];
            http2.get(LS.j('event/task', 'site', 'app')).then(function(rsp) {
                if (rsp.data && rsp.data.length) {
                    rsp.data.forEach(function(oRule) {
                        if (!oRule._ok) {
                            tasks.push({ type: 'info', msg: oRule.desc, id: oRule.id, gap: oRule._no ? oRule._no[0] : 0, coin: oRule.coin ? oRule.coin : 0 });
                        }
                    });
                }
            });
            $scope.tasks = tasks;
        }
        /*设置页面导航*/
        var oAppNavs = { length: 0 };
        if (_oApp.scenarioConfig) {
            if (_oApp.scenarioConfig.can_repos === 'Y') {
                oAppNavs.repos = {};
                oAppNavs.length++;
            }
            if (_oApp.scenarioConfig.can_rank === 'Y') {
                oAppNavs.rank = {};
                oAppNavs.length++;
            }
        }
        if (Object.keys(oAppNavs)) {
            $scope.appNavs = oAppNavs;
        }
        EnlRound.list().then(function(result) {
            $scope.rounds = result.rounds;
        });
        $scope.searchNotice(1).then(function(data) {
            if (data.total === 0) {
                $scope.filter.scope = 'A';
            }
        });
    });
}]);