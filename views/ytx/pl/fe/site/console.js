var ngApp = angular.module('app', ['ngRoute', 'ui.tms']);
ngApp.config(['$locationProvider', function($lp) {
    $lp.html5Mode(true);
}]);
ngApp.controller('ctrlSite', ['$scope', '$location', 'http2', function($scope, $location, http2) {
    $scope.siteId = $location.search().site;
    http2.get('/rest/pl/fe/site/get?site=' + $scope.siteId, function(rsp) {
        $scope.site = rsp.data;
    });
}]);
ngApp.controller('ctrlConsole', ['$scope', 'http2', function($scope, http2) {
    $scope.selectedMission = null;
    $scope.chooseMission = function(m, changeState) {
        changeState && (m._selected = !m._selected);
        if ($scope.selectedMission !== null && m !== $scope.selectedMission) {
            $scope.selectedMission._selected = false;
        }
        $scope.selectedMission = m._selected ? m : null;
    };
}]);
ngApp.controller('ctrlMission', ['$scope', 'http2', function($scope, http2) {
    var searchMissions = function(append) {
        var url = '/rest/pl/fe/matter/mission/list?site=' + $scope.siteId + $scope.page.j();
        url += '&_=' + (new Date()).getTime();
        http2.get(url, function(rsp) {
            if (append) {
                $scope.missions = $scope.missions.concat(rsp.data.missions);
            } else {
                $scope.missions = rsp.data.missions;
            }
        });
    };
    $scope.open = function(evt, mission) {
        evt.stopPropagation();
        location.href = '/rest/pl/fe/matter/mission?id=' + mission.mission_id + '&site=' + $scope.siteId;
    };
    $scope.page = {
        at: 1,
        size: 20,
        j: function() {
            return '&page=' + this.at + '&size=' + this.size;
        }
    };
    $scope.moreMissions = function() {
        $scope.page.at++;
        searchMissions(true);
    };
    $scope.addMission = function() {
        http2.get('/rest/pl/fe/matter/mission/create?site=' + $scope.siteId, function(rsp) {
            location.href = '/rest/pl/fe/matter/mission?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    searchMissions(false);
}]);
ngApp.controller('ctrlMatters', ['$scope', 'http2', function($scope, http2) {
    var indicators = {
        registration: {
            title: '在线报名',
            handler: function() {
                $scope.addEnroll('registration');
            }
        },
        signin: {
            title: '签到',
            handler: function() {
                $scope.addSignin();
            }
        },
        group: {
            title: '分组',
            handler: function() {
                $scope.addGroup();
            }
        },
        voting: {
            title: '评价',
            handler: function() {
                $scope.addEnroll('voting');
            }
        },
        article: {
            title: '项目资料',
            handler: function() {
                $scope.addArticle();
            }
        }
    };
    $scope.matterType = 'recent';
    $scope.open = function(matter) {
        var type = (matter.matter_type || $scope.matterType),
            id = (matter.matter_id || matter.id);
        switch (type) {
            case 'article':
            case 'enroll':
            case 'signin':
            case 'group':
            case 'lottery':
                location.href = '/rest/pl/fe/matter/' + type + '?id=' + id + '&site=' + $scope.siteId;
                break;
        }
    };
    $scope.removeMatter = function(evt, matter) {
        var type = (matter.matter_type || $scope.matterType),
            id = (matter.matter_id || matter.id),
            title = (matter.title || matter.matter_title),
            url = '/rest/pl/fe/matter/';

        evt.stopPropagation();
        if (window.confirm('确定删除：' + title + '？')) {
            switch (type) {
                case 'article':
                    url += type + '/remove?id=' + id + '&site=' + $scope.siteId;
                    break;
                case 'enroll':
                case 'signin':
                case 'group':
                    url += type + '/remove?app=' + id + '&site=' + $scope.siteId;
                    break;
            }
            http2.get(url, function(rsp) {
                $scope.matters.splice($scope.matters.indexOf(matter), 1);
            });
        }
    };
    $scope.copyMatter = function(evt, matter) {
        var type = (matter.matter_type || $scope.matterType),
            id = (matter.matter_id || matter.id),
            url = '/rest/pl/fe/matter/';

        evt.stopPropagation();
        switch (type) {
            case 'article':
                url += type + '/copy?id=' + id + '&site=' + $scope.siteId;
                break;
            case 'enroll':
            case 'signin':
            case 'group':
                url += type + '/copy?app=' + id + '&site=' + $scope.siteId;
                break;
        }
        http2.get(url, function(rsp) {
            location.href = '/rest/pl/fe/matter/' + type + '?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.page = {
        at: 1,
        size: 20,
        j: function() {
            return '&page=' + this.at + '&size=' + this.size;
        }
    };
    var searchMatters = function(append) {
        var url = '/rest/pl/fe/matter/',
            matterType, scenario;
        if (/registration|voting/.test($scope.matterType)) {
            matterType = 'enroll';
            scenario = $scope.matterType;
        } else {
            matterType = $scope.matterType;
        }
        url += matterType;
        url += '/list?site=' + $scope.siteId;
        $scope.selectedMission && (url += '&mission=' + $scope.selectedMission.mission_id);
        scenario && (url += '&scenario=' + scenario);
        url += $scope.page.j();
        url += '&_=' + (new Date() * 1);
        http2.get(url, function(rsp) {
            $scope.indicators = [];
            if (/article/.test(matterType)) {
                if (append) {
                    $scope.matters = $scope.matters.concat(rsp.data.articles);
                } else {
                    $scope.matters = rsp.data.articles;
                }
                $scope.page.total = rsp.data.total;
                if (rsp.data.total == 0) {
                    indicators.article && $scope.indicators.push(indicators.article);
                }
            } else if (/enroll|signin|group/.test(matterType)) {
                if (append) {
                    $scope.matters = $scope.matters.concat(rsp.data.apps);
                } else {
                    $scope.matters = rsp.data.apps;
                }
                $scope.page.total = rsp.data.total;
                if (rsp.data.total == 0) {
                    indicators[$scope.matterType] && $scope.indicators.push(indicators[$scope.matterType]);
                }
            } else {
                $scope.matters = rsp.data;
            }
        });
    };
    var searchRecent = function() {
        var url = '/rest/pl/fe/site/console/recent';
        url += '?site=' + $scope.siteId;
        url += '&exclude=mission'
        url += '&_=' + (new Date() * 1);
        http2.get(url, function(rsp) {
            var matters = rsp.data.matters,
                typeCount = {};
            angular.forEach(matters, function(matter) {
                matter._operator = matter.modifier_name || matter.creater_name;
                matter._operateAt = matter.modifiy_at || matter.create_at;
                if (matter.matter_type === 'enroll') {
                    typeCount[matter.matter_scenario] ? typeCount[matter.matter_scenario]++ : (typeCount[matter.matter_scenario] = 1);
                } else {
                    typeCount[matter.mtter_type] ? typeCount[matter.matter_type]++ : (typeCount[matter.matter_type] = 1);
                }
            });
            $scope.indicators = [];
            !typeCount.registration && $scope.indicators.push(indicators.registration);
            !typeCount.signin && $scope.indicators.push(indicators.signin);
            !typeCount.group && $scope.indicators.push(indicators.group);
            !typeCount.voting && $scope.indicators.push(indicators.voting);

            $scope.matters = matters;
        });
    };
    var searchByMission = function(mission) {
        http2.get('/rest/pl/fe/matter/mission/matter/list?site=' + $scope.siteId + '&id=' + mission.mission_id + '&_=' + (new Date() * 1), function(rsp) {
            var typeCount = {};
            angular.forEach(rsp.data, function(matter) {
                matter._operator = matter.modifier_name || matter.creater_name;
                matter._operateAt = matter.modifiy_at || matter.create_at;
                if (matter.type === 'enroll') {
                    typeCount[matter.scenario] ? typeCount[matter.scenario]++ : (typeCount[matter.scenario] = 1);
                } else {
                    typeCount[matter.type] ? typeCount[matter.type]++ : (typeCount[matter.type] = 1);
                }
            });
            $scope.matters = rsp.data;
            $scope.indicators = [];
            !typeCount.registration && $scope.indicators.push(indicators.registration);
            !typeCount.signin && $scope.indicators.push(indicators.signin);
            !typeCount.group && $scope.indicators.push(indicators.group);
            !typeCount.voting && $scope.indicators.push(indicators.voting);
        });
    };
    $scope.moreMatters = function() {
        $scope.page.at++;
        searchMatters(true);
    };
    $scope.chooseMatterType = function(matterType) {
        $scope.matterType = matterType;
        if (matterType === 'recent') {
            searchRecent();
        } else {
            $scope.page.at = 1;
            $scope.page.total = 0;
            searchMatters(false);
        }
    };
    $scope.addMatter = function() {
        switch ($scope.matterType) {
            case 'article':
                $scope.addArticle();
                break;
            case 'signin':
                $scope.addSignin();
                break;
            case 'group':
                $scope.addGroup();
                break;
            case 'registration':
            case 'voting':
                $scope.addEnroll($scope.matterType);
                break;
        }
    };
    $scope.addArticle = function() {
        var url = '/rest/pl/fe/matter/article/create?site=' + $scope.siteId,
            config = {
                proto: {
                    title: '资料'
                }
            };
        http2.post(url, config, function(rsp) {
            location.href = '/rest/pl/fe/matter/article?site=' + $scope.siteId + '&id=' + rsp.data;
        });
    };
    $scope.addEnroll = function(assignedScenario) {
        var url, config;
        url = '/rest/pl/fe/matter/enroll/create?site=' + $scope.siteId;
        if (assignedScenario === 'registration') {
            config = {
                proto: {
                    title: '在线报名'
                }
            };
            url += '&scenario=registration';
            url += '&template=simple';
        } else if (assignedScenario === 'voting') {
            config = {
                proto: {
                    title: '评价'
                }
            };
            url += '&scenario=voting';
            url += '&template=simple';
        }
        http2.post(url, config, function(rsp) {
            location.href = '/rest/pl/fe/matter/enroll?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.addSignin = function() {
        var url = '/rest/pl/fe/matter/signin/create?site=' + $scope.siteId,
            config = {
                proto: {
                    title: '签到'
                }
            };
        http2.post(url, config, function(rsp) {
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
        http2.post(url, config, function(rsp) {
            location.href = '/rest/pl/fe/matter/group?site=' + $scope.siteId + '&id=' + rsp.data.id;
        });
    };
    $scope.addByIndicator = function(indicator) {
        indicator.handler()
    };
    $scope.$watch('selectedMission', function(mission) {
        if ($scope.matterType === 'recent') {
            if (mission) {
                searchByMission(mission);
            } else {
                searchRecent();
            }
        } else {
            $scope.page.at = 1;
            $scope.page.total = 0;
            searchMatters(false);
        }
    });
}]);