angular.module('app', ['ui.tms', 'ui.bootstrap', 'tmplshop.ui.xxt']).
config(['$uibTooltipProvider', function($uibTooltipProvider) {
    $uibTooltipProvider.setTriggers({
        'show': 'hide'
    });
}]).
controller('ctrlMain', ['$scope', 'http2', function($scope, http2) {
    var url = '/rest/pl/fe/user/get?_=' + (new Date() * 1);
    http2.get(url, function(rsp) {
        $scope.loginUser = rsp.data;
    });
}]).controller('ctrlRecent', ['$scope', '$uibModal', 'http2', 'templateShop', function($scope, $uibModal, http2, templateShop) {
    var _fns = {
        createSite: function() {
            var defer = $q.defer(),
                url = '/rest/pl/fe/site/create?_=' + (new Date() * 1);

            http2.get(url, function(rsp) {
                defer.resolve(rsp.data);
            });
            return defer.promise;
        },
        //研究项目-单图文
        addArticle: function(site) {
            http2.get('/rest/pl/fe/matter/article/create?site=' + site.id, function(rsp) {
                location.href = '/rest/pl/fe/matter/article?site=' + site.id + '&id=' + rsp.data;
            });
        },
        addChannel: function(site) {
            http2.get('/rest/pl/fe/matter/channel/create?site=' + site.id, function(rsp) {
                location.href = '/rest/pl/fe/matter/channel?site=' + site.id + '&id=' + rsp.data.id;
            });
        },
        //研究项目-登记活动
        addEnroll: function(site, scenario) {
            $('body').trigger('click');
            templateShop.choose(site.id, 'enroll', scenario).then(function(choice) {
                var url = '/rest/pl/fe/matter/enroll/',
                    title,
                    config = {
                        proto: {}
                    };

                if (scenario === 'registration') {
                    title = '在线报名';
                } else if (scenario === 'voting') {
                    title = '评价';
                } else {
                    title = '通用登记';
                }
                if (choice) {
                    var data = choice.data;
                    if (choice.source === 'share') {
                        url += 'createByOther?site=' + site.id + '&template=' + data.id;
                    } else if (choice.source === 'platform') {
                        url += 'create?site=' + site.id;
                        if (data) {
                            url += '&scenario=' + data.scenario.name;
                            url += '&template=' + data.template.name;
                            if (data.simpleSchema && data.simpleSchema.length) {
                                config.simpleSchema = data.simpleSchema;
                            }
                        }
                    } else if (choice.source === 'file') {
                        url += 'createByFile?site=' + site.id;
                        http2.post(url, data, function(rsp) {
                            location.href = '/rest/pl/fe/matter/enroll?site=' + site.id + '&id=' + rsp.data.id;
                        });
                        return;
                    }
                } else {
                    url += 'create?site=' + site.id;
                    scenario && (url += '&scenario=' + scenario);
                }
                config.proto.title = title;
                http2.post(url, config, function(rsp) {
                    location.href = '/rest/pl/fe/matter/enroll?site=' + site.id + '&id=' + rsp.data.id;
                });
            });
        },
        addSignin: function(site) {
            http2.get('/rest/pl/fe/matter/signin/create?site=' + site.id, function(rsp) {
                location.href = '/rest/pl/fe/matter/signin?site=' + site.id + '&id=' + rsp.data.id;
            });
        },
        addGroup: function(site) {
            http2.get('/rest/pl/fe/matter/group/create?site=' + site.id + '&scenario=split', function(rsp) {
                location.href = '/rest/pl/fe/matter/group/main?site=' + site.id + '&id=' + rsp.data.id;
            });
        },
        addMission: function(site) {
            http2.get('/rest/pl/fe/matter/mission/create?site=' + site.id, function(rsp) {
                location.href = '/rest/pl/fe/matter/mission?site=' + site.id + '&id=' + rsp.data.id;
            });
        },
    };

    function addMatter(site, matterType, scenario) {
        var fnName = 'add' + matterType[0].toUpperCase() + matterType.substr(1);
        _fns[fnName].call(_fns, site, scenario);
    }

    var url, page;
    $scope.page = page = {
        at: 1,
        size: 12,
        j: function() {
            return 'page=' + this.at + '&size=' + this.size;
        }
    };
    $scope.matterType = '';
    $scope.list = function(pageAt) {
        var url = '/rest/pl/fe/recent?' + page.j();
        if (pageAt) {
            page.at = pageAt;
        }
        if ($scope.matterType) {
            if (['registration', 'voting']) {
                url += '&matterType=enroll&scenario=' + $scope.matterType;
            } else if ($scope.matterType === 'enroll') {
                url += '&matterType=enroll&scenario=';
            } else {
                url += '&matterType=' + $scope.matterType;
            }
        }
        http2.get(url, function(rsp) {
            $scope.matters = rsp.data.matters;
            $scope.page.total = rsp.data.total;
        });
    };
    $scope.open = function(matter, subView) {
        var url = '/rest/pl/fe/matter/' + matter.matter_type;
        if (subView) {
            url += '/' + subView;
        }
        url += '?id=' + matter.matter_id + '&site=' + matter.siteid;
        location.href = url;
    };
    $scope.popoverAddMatter = function() {
        var target = $('#popoverAddMatter');
        if (target.data('popover') === 'Y') {
            target.trigger('hide').data('popover', 'N');
        } else {
            target.trigger('show').data('popover', 'Y');
        }
    };
    $scope.addMatter = function(matterType, scenario) {
        var url = '/rest/pl/fe/site/list?_=' + (new Date() * 1);
        $('#popoverAddMatter').trigger('hide');
        http2.get(url, function(rsp) {
            var sites = rsp.data;
            if (sites.length === 1) {
                addMatter(sites[0], matterType, scenario);
            } else if (sites.length === 0) {
                createSite().then(function(site) {
                    addMatter(site, matterType, scenario);
                });
            } else {
                $uibModal.open({
                    templateUrl: 'addMatterSite.html',
                    dropback: 'static',
                    controller: ['$scope', '$uibModalInstance', function($scope2, $mi) {
                        var data;
                        $scope2.mySites = sites;
                        $scope2.data = data = {};
                        $scope2.ok = function() {
                            if (data.index !== undefined) {
                                $mi.close(sites[data.index]);
                            } else {
                                $mi.dismiss();
                            }
                        };
                        $scope2.cancel = function() {
                            $mi.dismiss();
                        };
                    }]
                }).result.then(function(site) {
                    addMatter(site, matterType, scenario);
                });
            }
        });
    };
    $scope.list(1);
}]).controller('ctrlSite', ['$scope', 'http2', function($scope, http2) {
    var t = (new Date() * 1);
    $scope.create = function() {
        var url = '/rest/pl/fe/site/create?_=' + t;;
        http2.get(url, function(rsp) {
            location.href = '/rest/pl/fe/site/setting?site=' + rsp.data.id;
        });
    };
    $scope.list = function() {
        var url = '/rest/pl/fe/site/list?_=' + t;
        http2.get(url, function(rsp) {
            $scope.sites = rsp.data;
        });
    };
    $scope.openHome = function(site) {
        location.href = '/rest/site/home?site=' + site.id;
    };
    $scope.openConsole = function(site) {
        location.href = '/rest/pl/fe/site?site=' + site.id;
    };
    $scope.list();
}]).controller('ctrlMission', ['$scope', 'http2', function($scope, http2) {
    var page, filter, filter2, t = (new Date() * 1);
    $scope.page = page = {
        at: 1,
        size: 12,
        j: function() {
            return 'page=' + this.at + '&size=' + this.size;
        }
    };
    $scope.filter = filter = {};
    $scope.filter2 = filter2 = {};
    $scope.open = function(mission, subView) {
        var url = '/rest/pl/fe/matter/mission/' + subView + '?site=' + mission.siteid + '&id=' + mission.mission_id;
        console.log(url);
        location.href = url;
    };
    $scope.listSite = function() {
        var url = '/rest/pl/fe/matter/mission/listSite?_=' + t;
        http2.get(url, function(rsp) {
            $scope.missionSites = rsp.data.sites;
        });
    };
    $scope.list = function() {
        var url = '/rest/pl/fe/matter/mission/listByUser?_=' + t + '&' + page.j();
        http2.post(url, filter, function(rsp) {
            $scope.missions = rsp.data.missions;
            $scope.page.total = rsp.data.total;
        });
    };
    $scope.doFilter = function() {
        angular.extend(filter, filter2);
        $('body').click();
    };
    $scope.cleanFilter = function() {
        filter.byTitle = '';
        $('body').click();
    };
    $scope.$watch('filter', function(nv) {
        if (!nv) return;
        $scope.list();
    }, true);
    $scope.listSite();
}]).controller('ctrlTrend', ['$scope', 'http2', function($scope, http2) {
    var t = (new Date() * 1);
    $scope.list = function() {
        var url = '/rest/pl/fe/trends?_=' + t;
        http2.get(url, function(rsp) {
            $scope.trends = rsp.data.trends;
        });
    };
    $scope.list();
}]);
