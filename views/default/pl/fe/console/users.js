define(['frame'], function(ngApp) {
    'use strict';
    ngApp.provider.controller('ctrlUsers', ['$scope', function($scope) {}]);
    ngApp.provider.controller('ctrlMember', ['$scope', '$location', '$sce', '$uibModal', 'http2', 'noticebox', 'pushnotify', 'facListFilter', 'tmsSchema', 'cstApp', function($scope, $location, $sce, $uibModal, http2, noticebox, pushnotify, facListFilter, tmsSchema, cstApp) {
        function listInvite(oSchema) {
            http2.get('/rest/pl/fe/site/member/invite/list?schema=' + oSchema.id).then(function(rsp) {
                $scope.invites = rsp.data.invites;
            });
        }
        var _oMschema, _oCriteria, _oSelected;
        _oCriteria = {
            filter: { by: '', keyword: '' }
        };
        $scope.filter = facListFilter.init(function() {
            $scope.doSearch(1);
        }, _oCriteria.filter);
        $scope.selected = _oSelected = {
            mschema: null
        };
        $scope.createMschema = function() {
            var url;
            if ($scope.frameState.sid) {
                url = '/rest/pl/fe/site/member/schema/create?site=' + $scope.frameState.sid;
                http2.post(url, { valid: 'Y' }).then(function(rsp) {
                    location.href = '/rest/pl/fe/site/mschema?site=' + $scope.frameState.sid + '#' + rsp.data.id;
                });
            }
        };
        $scope.notify = function(isBatch) {
            var rows = isBatch ? $scope.rows : null;
            var oOptions = {
                matterTypes: cstApp.notifyMatter,
                sender: 'schema:' + _oSelected.mschema.id
            };
            pushnotify.open(_oSelected.mschema.siteid, function(notify) {
                var url, targetAndMsg = {};
                if (notify.matters.length) {
                    if (rows) {
                        targetAndMsg.users = [];
                        Object.keys(rows.selected).forEach(function(key) {
                            if (rows.selected[key] === true) {
                                var rec = $scope.members[key];
                                targetAndMsg.users.push({ id: rec.id, userid: rec.userid });
                            }
                        });
                    }
                    targetAndMsg.message = notify.message;

                    url = '/rest/pl/fe/site/member/notice/send?site=' + _oSelected.mschema.siteid;
                    targetAndMsg.schema = _oSelected.mschema.id;
                    targetAndMsg.tmplmsg = notify.tmplmsg.id;

                    http2.post(url, targetAndMsg).then(function(data) {
                        noticebox.success('发送完成');
                    });
                }
            }, oOptions);
        };
        $scope.$watch('frameState.sid', function(siteId) {
            if (siteId) {
                http2.get('/rest/pl/fe/site/member/schema/list?site=' + siteId + '&valid=Y').then(function(rsp) {
                    $scope.mschemas = rsp.data;
                    if ($scope.mschemas.length) {
                        if ($location.search().mschema) {
                            for (var i in $scope.mschemas) {
                                if ($scope.mschemas[i].id == $location.search().mschema) {
                                    _oSelected.mschema = $scope.mschemas[i];
                                    break;
                                }
                            }
                        } else {
                            _oSelected.mschema = $scope.mschemas[0];
                        }
                    }
                });
            } else {
                $scope.mschemas = [];
                _oSelected.mschema = null;
            }
        });
        $scope.$watch('selected.mschema', function(oMschema) {
            if (oMschema) {
                $scope.page = {
                    at: 1,
                    size: 30,
                };
                $scope.rows = {
                    allSelected: 'N',
                    selected: {},
                    count: 0,
                    change: function(index) {
                        this.selected[index] ? this.count++ : this.count--;
                    },
                    reset: function() {
                        this.allSelected = 'N';
                        this.selected = {};
                        this.count = 0;
                    }
                };
                $scope.mschema = _oMschema = oMschema;
                $scope.doSearch(1);
                listInvite(oMschema);
            }
        });
        $scope.doSearch = function(pageAt) {
            var url, filter = '';
            pageAt && ($scope.page.at = pageAt);
            if (_oCriteria.filter.by && _oCriteria.filter.keyword) {
                filter = '&kw=' + _oCriteria.filter.keyword;
                filter += '&by=' + _oCriteria.filter.by;
            }
            url = '/rest/pl/fe/site/member/list?site=' + $scope.frameState.sid + '&schema=' + _oMschema.id;
            url += filter
            url += '&contain=total';
            http2.get(url, { page: $scope.page }).then(function(rsp) {
                var members = rsp.data.members;
                if (members.length) {
                    if (_oMschema.extAttrs.length) {
                        members.forEach(function(oMember) {
                            oMember._extattr = tmsSchema.member.getExtattrsUIValue(_oMschema.extAttrs, oMember);
                        });
                    }
                }
                $scope.members = members;
            });
        };
        $scope.editMember = function(oMember) {
            $uibModal.open({
                templateUrl: '/views/default/pl/fe/_module/memberEditor.html?_=1',
                backdrop: 'static',
                controller: ['$uibModalInstance', '$scope', function($mi, $scope2) {
                    $scope2.schema = _oMschema;
                    $scope2.member = angular.copy(oMember);
                    $scope2.canShow = function(name) {
                        return _oMschema && _oMschema['attr_' + name].charAt(0) === '0';
                    };
                    $scope2.close = function() {
                        $mi.dismiss();
                    };
                    $scope2.ok = function() {
                        $mi.close({
                            action: 'update',
                            data: $scope2.member
                        });
                    };
                    $scope2.remove = function() {
                        $mi.close({
                            action: 'remove'
                        });
                    };
                }]
            }).result.then(function(rst) {
                if (rst.action === 'update') {
                    var data = rst.data,
                        newData = {
                            verified: data.verified,
                            name: data.name,
                            mobile: data.mobile,
                            email: data.email,
                            email_verified: data.email_verified,
                            extattr: data.extattr
                        };
                    http2.post('/rest/pl/fe/site/member/update?site=' + $scope.frameState.sid + '&id=' + oMember.id, newData).then(function(rsp) {
                        angular.extend(oMember, newData);
                        oMember._extattr = tmsSchema.member.getExtattrsUIValue(_oMschema.extAttrs, oMember);
                    });
                } else if (rst.action === 'remove') {
                    http2.get('/rest/pl/fe/site/member/remove?site=' + $scope.frameState.sid + '&id=' + oMember.id).then(function() {
                        $scope.members.splice($scope.members.indexOf(oMember), 1);
                    });
                }
            });
        };
        $scope.$watch('rows.allSelected', function(nv) {
            var index = 0;
            if (nv == 'Y') {
                while (index < $scope.members.length) {
                    $scope.rows.selected[index++] = true;
                }
                $scope.rows.count = $scope.members.length;
            } else if (nv == 'N') {
                $scope.rows.reset();
            }
        });
    }]);
    ngApp.provider.controller('ctrlSiteAccount', ['$scope', '$uibModal', 'http2', 'facListFilter', 'srvSite', function($scope, $uibModal, http2, facListFilter, srvSite) {
        var _oFilter, _oPage, _oQuery;
        _oFilter = {};
        $scope.page = _oPage = { size: 30 };
        $scope.query = _oQuery = {};
        $scope.filter = facListFilter.init(function() {
            $scope.doSearch(1);
        }, _oFilter);
        $scope.doSearch = function(pageAt) {
            var url, data;
            pageAt && ($scope.page.at = pageAt);
            url = '/rest/pl/fe/site/user/account/list?site=' + $scope.frameState.sid;
            data = angular.extend($scope.query);
            if (_oFilter.by === 'nickname' && _oFilter.keyword) {
                data.nickname = _oFilter.keyword;
            }
            http2.post(url, data, { page: _oPage }).then(function(rsp) {
                $scope.users = rsp.data.users;
                _oPage.total = rsp.data.total;
            });
        };
        $scope.$watch('query', function() {
            $scope.doSearch(1);
        }, true);
        $scope.$watch('frameState.sid', function(sid) {
            if (sid) {
                $scope.doSearch(1);
                srvSite.snsList(sid).then(function(aSns) {
                    $scope.sns = aSns;
                });
            }
        });
    }]);
    ngApp.provider.controller('ctrlSiteSubscribe', ['$scope', '$uibModal', 'http2', 'facListFilter', function($scope, $uibModal, http2, facListFilter) {
        var _oFilter, _oPage;
        _oFilter = {};
        $scope.page = _oPage = {
            at: 1,
            size: 30,
        };
        $scope.filter = facListFilter.init(function() {
            $scope.doSearch(1);
        }, _oFilter);
        $scope.doSearch = function(pageAt) {
            var url, data;
            pageAt && ($scope.page.at = pageAt);
            url = '/rest/pl/fe/site/subscriberList';
            url += '?site=' + $scope.frameState.sid;
            url += '&category=client';
            data = {};
            if (_oFilter.by === 'nickname' && _oFilter.keyword) {
                data.nickname = _oFilter.keyword;
            }
            http2.post(url, data, { page: _oPage }).then(function(rsp) {
                $scope.users = rsp.data.subscribers;
                _oPage.total = rsp.data.total;
            });
        };
        $scope.$watch('frameState.sid', function(sid) {
            if (sid) {
                $scope.doSearch(1);
            }
        });
        $scope.$on('site.user.refresh', function() {
            $scope.doSearch();
        });
    }]);
    ngApp.provider.controller('ctrlRecycle', ['$scope', 'http2', 'facListFilter', function($scope, http2, facListFilter) {
        var _oFilter, t = (new Date * 1);
        _oFilter = {};
        $scope.filter = facListFilter.init(function() {
            $scope.list();
        }, _oFilter);
        $scope.list = function() {
            if ($scope.frameState.sid) {
                var url, data;
                url = '/rest/pl/fe/site/console/recycle?site=' + $scope.frameState.sid + '&_=' + t;
                data = {};
                if (_oFilter.by === 'title' && _oFilter.keyword) {
                    data.byTitle = _oFilter.keyword;
                }
                http2.post(url, data).then(function(rsp) {
                    $scope.matters = rsp.data.matters;
                });
            }
        };
        $scope.restoreSite = function(site) {
            //恢复删除的站点
            var url = '/rest/pl/fe/site/recover?site=' + site.id;
            http2.get(url).then(function(rsp) {
                location.href = '/rest/pl/fe/site?site=' + site.id;
            })
        };
        $scope.restoreMatter = function(oMatter) {
            var url;
            if (oMatter.matter_type === 'memberschema') {
                url = '/rest/pl/fe/site/member/schema/restore' + '?site=' + oMatter.siteid + '&id=' + oMatter.matter_id;
                http2.get(url).then(function(rsp) {
                    location.href = '/rest/pl/fe/site/mschema?site=' + oMatter.siteid + '#' + oMatter.matter_id;
                });
            } else {
                url = '/rest/pl/fe/matter/' + oMatter.matter_type + '/restore' + '?site=' + oMatter.siteid + '&id=' + oMatter.matter_id;
                http2.get(url).then(function(rsp) {
                    location.href = '/rest/pl/fe/matter/' + oMatter.matter_type + '?site=' + oMatter.siteid + '&id=' + oMatter.matter_id;
                });
            }
        };
        $scope.list();
    }]);
});