var ngApp = angular.module('app', ['ngRoute', 'ui.tms', 'ui.xxt', 'http.ui.xxt', 'tmplshop.ui.xxt']);
ngApp.config(['$locationProvider', '$uibTooltipProvider', function($lp, $uibTooltipProvider) {
    $lp.html5Mode(true);
    $uibTooltipProvider.setTriggers({
        'show': 'hide'
    });
}]);
ngApp.controller('ctrlSite', ['$scope', '$location', 'http2', function($scope, $location, http2) {
    $scope.siteId = $location.search().site;
    http2.get('/rest/pl/fe/site/get?site=' + $scope.siteId).then(function(rsp) {
        $scope.site = rsp.data;
    });
}]);
ngApp.controller('ctrlConsole', ['$scope', '$uibModal', 'http2', 'templateShop', function($scope, $uibModal, http2, templateShop) {
    function searchMatters(append) {
        var url;
        if ($scope.matterType === 'addressbook') {
            url = '/rest/pl/fe/matter/' + $scope.matterType + '/get?site=' + $scope.siteId + page.j();
        } else if ('enroll' === $scope.matterType) {
            url = '/rest/pl/fe/matter/enroll/list?site=' + $scope.siteId + '&scenario=' + page.j();
        } else if (/registration|voting|quiz|score_sheet|common/.test($scope.matterType)) {
            url = '/rest/pl/fe/matter/enroll/list?site=' + $scope.siteId + '&scenario=' + $scope.matterType + page.j();
        } else {
            url = '/rest/pl/fe/matter/' + $scope.matterType + '/list?site=' + $scope.siteId + page.j();
        }
        url += '&_=' + (new Date() * 1);
        switch ($scope.matterType) {
            case 'channel':
                url += '&cascade=N';
                break;
        }
        if (/mission/.test($scope.matterType)) {
            http2.post(url, filter2).then(function(rsp) {
                if (append) {
                    $scope.matters = $scope.matters.concat(rsp.data.missions);
                } else {
                    $scope.matters = rsp.data.missions;
                }
                page.total = rsp.data.total;
            });
        } else {
            http2.get(url).then(function(rsp) {
                if (/article/.test($scope.matterType)) {
                    if (append) {
                        $scope.matters = $scope.matters.concat(rsp.data.articles);
                    } else {
                        $scope.matters = rsp.data.articles;
                    }
                    page.total = rsp.data.total;
                } else if (/enroll|registration|voting|quiz|score_sheet|common|signin|group|contribute/.test($scope.matterType)) {
                    if (append) {
                        $scope.matters = $scope.matters.concat(rsp.data.apps);
                    } else {
                        $scope.matters = rsp.data.apps;
                    }
                    page.total = rsp.data.total;
                } else if (/custom/.test($scope.matterType)) {
                    if (append) {
                        $scope.matters = $scope.matters.concat(rsp.data.customs);
                    } else {
                        $scope.matters = rsp.data.customs;
                    }
                    page.total = rsp.data.total;
                } else {
                    $scope.matters = rsp.data;
                }
            });
        }
    };
    var filter2, page;
    $scope.matterType = 'recent';
    $scope.filter2 = filter2 = {};
    $scope.page = page = {
        at: 1,
        size: 21,
        j: function() {
            return '&page=' + this.at + '&size=' + this.size;
        }
    };
    $scope.open = function(matter, subView) {
        var url = '/rest/pl/fe/matter/',
            type = $scope.matterType === 'recent' ? matter.matter_type : (matter.type || $scope.matterType),
            id = (matter.matter_id || matter.id);

        url += type;
        if (subView) {
            url += '/' + subView;
        }
        switch (type) {
            case 'article':
            case 'enroll':
            case 'signin':
            case 'group':
            case 'channel':
            case 'link':
                location.href = url + '?id=' + id + '&site=' + $scope.siteId;
                break;
            case 'mission':
                location.href = url + '?id=' + (matter.mission_id || id) + '&site=' + matter.siteid;
                break;
        }
    };
    $scope.doFilter = function() {
        page.at = 1;
        page.total = 0;
        searchMatters();
        $('body').click();
    };
    $scope.cleanFilter = function() {
        filter2.byTitle = '';
        page.at = 1;
        page.total = 0;
        searchMatters();
        $('body').click();
    };
    $scope.moreMatters = function() {
        $scope.page.at++;
        searchMatters(true);
    };
    $scope.chooseMatterType = function(matterType) {
        matterType && ($scope.matterType = matterType);
        if ($scope.matterType === 'recent') {
            http2.get('/rest/pl/fe/site/console/recent?site=' + $scope.siteId + '&_=' + (new Date() * 1)).then(function(rsp) {
                $scope.matters = rsp.data.matters;
            });
        } else if ($scope.matterType === 'recycle') {
            http2.get('/rest/pl/fe/site/console/recycle?site=' + $scope.siteId + '&_=' + (new Date() * 1)).then(function(rsp) {
                $scope.matters = rsp.data.matters;
            });
        } else {
            $scope.page.at = 1;
            $scope.page.total = 0;
            searchMatters(false);
        }
    };
    $scope.removeMatter = function(evt, matter) {
        var type = (matter.matter_type || matter.type || $scope.matterType),
            id = (matter.matter_id || matter.id),
            title = (matter.title || matter.matter_title),
            url = '/rest/pl/fe/matter/';

        evt.stopPropagation();
        if (window.confirm('确定删除：' + title + '？')) {
            switch (type) {
                case 'article':
                case 'addressbook':
                    url += type + '/remove?id=' + id + '&site=' + $scope.siteId;
                    break;
                case 'enroll':
                case 'signin':
                case 'group':
                    url += type + '/remove?app=' + id + '&site=' + $scope.siteId;
                    break;
                case 'news':
                case 'channel':
                    url += type + '/delete?site=' + $scope.siteId + '&id=' + id;
            }
            http2.get(url).then(function(rsp) {
                $scope.matters.splice($scope.matters.indexOf(matter), 1);
            });
        }
    };
    $scope.copyMatter = function(evt, matter) {
        var type = (matter.matter_type || matter.type || $scope.matterType),
            id = (matter.matter_id || matter.id),
            url = '/rest/pl/fe/matter/';

        evt.stopPropagation();
        switch (type) {
            case 'article':
                url += type + '/copy?id=' + id + '&site=' + $scope.siteId;
                break;
            case 'enroll':
                url += 'enroll/copy?app=' + id + '&site=' + $scope.siteId;
                break;
            case 'signin':
            case 'group':
                url += type + '/copy?app=' + id + '&site=' + $scope.siteId;
                break;
            default:
                alert('程序错误');
                return;
        }
        http2.get(url).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/' + type + '?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.restoreMatter = function(matter) {
        var url = '/rest/pl/fe/matter/' + matter.matter_type + '/restore' + '?site=' + $scope.siteId + '&id=' + matter.matter_id;
        http2.get(url).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/' + matter.matter_type + '?site=' + $scope.siteId + '&id=' + matter.matter_id;
        });
    };
    $scope.addArticle = function() {
        var url = '/rest/pl/fe/matter/article/create?site=' + $scope.siteId,
            config = {
                proto: {
                    title: '资料'
                }
            };

        if ($scope.selectedMission) {
            url += '&mission=' + $scope.selectedMission.mission_id;
            config.proto.title = $scope.selectedMission.title + '-' + config.proto.title;
        }
        http2.post(url, config).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/article?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.addChannel = function() {
        http2.get('/rest/pl/fe/matter/channel/create?site=' + $scope.siteId).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/channel?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.addEnrollByTemplate = function(assignedScenario) {
        $('body').trigger('click');
        templateShop.choose($scope.siteId, 'enroll', assignedScenario).then(function(choice) {
            var url = '/rest/pl/fe/matter/enroll/',
                title,
                config = {
                    proto: {}
                };

            if (assignedScenario === 'registration') {
                title = '在线报名';
            } else if (assignedScenario === 'voting') {
                title = '评价';
            } else if (assignedScenario === 'quiz') {
                title = '测验';
            } else if (assignedScenario === 'score_sheet') {
                title = '记分表';
            } else {
                title = '通用登记';
            }
            if (choice) {
                var data = choice.data;
                if (choice.source === 'share') {
                    url += 'createByOther?site=' + $scope.siteId + '&template=' + data.id;
                } else if (choice.source === 'platform') {
                    url += 'create?site=' + $scope.siteId;
                    url += '&scenario=' + data.scenario.name;
                    url += '&template=' + data.template.name;
                    if (data.simpleSchema && data.simpleSchema.length) {
                        config.simpleSchema = data.simpleSchema;
                    }
                } else if (choice.source === 'file') {
                    var url, data = choice.data;
                    url = '/rest/pl/fe/matter/enroll/createByFile?site=' + $scope.siteId;
                    http2.post(url, data).then(function(rsp) {
                        location.href = '/rest/pl/fe/matter/enroll?site=' + $scope.siteId + '&id=' + rsp.data.id;
                    });
                    return;
                }
            } else {
                // blank
                url += 'create?site=' + $scope.siteId;
            }
            if ($scope.selectedMission) {
                url += '&mission=' + $scope.selectedMission.mission_id;
                title = $scope.selectedMission.title + '-' + title;
            }
            config.proto.title = title;
            http2.post(url, config).then(function(rsp) {
                location.href = '/rest/pl/fe/matter/enroll?site=' + $scope.siteId + '&id=' + rsp.data.id;
            });
        });
    };
    $scope.addSignin = function() {
        var url = '/rest/pl/fe/matter/signin/create?site=' + $scope.siteId,
            config = {
                proto: {
                    title: '签到'
                }
            };

        if ($scope.selectedMission) {
            url += '&mission=' + $scope.selectedMission.mission_id;
            config.proto.title = $scope.selectedMission.title + '-' + config.proto.title;
        }
        http2.post(url, config).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/signin?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.addGroup = function() {
        var url = '/rest/pl/fe/matter/group/create?site=' + $scope.siteId + '&scenario=split',
            config = {
                proto: {
                    title: '分组'
                }
            };

        if ($scope.selectedMission) {
            url += '&mission=' + $scope.selectedMission.mission_id;
            config.proto.title = $scope.selectedMission.title + '-' + config.proto.title;
        }
        http2.post(url, config).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/group/main?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.addMission = function() {
        http2.get('/rest/pl/fe/matter/mission/create?site=' + $scope.siteId).then(function(rsp) {
            location.href = '/rest/pl/fe/matter/mission?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    http2.get('/rest/pl/fe/site/console/recent?site=' + $scope.siteId + '&_=' + (new Date() * 1)).then(function(rsp) {
        $scope.matters = rsp.data.matters;
    });
}]);