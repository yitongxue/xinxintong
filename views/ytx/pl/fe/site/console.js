var app = angular.module('app', ['ngRoute', 'ui.tms', 'matters.xxt']);
app.config(['$locationProvider', function($lp) {
    $lp.html5Mode(true);
}]);
app.controller('ctrlSite', ['$scope', '$location', 'http2', function($scope, $location, http2) {
    $scope.siteId = $location.search().site;
    http2.get('/rest/pl/fe/site/get?site=' + $scope.siteId, function(rsp) {
        $scope.site = rsp.data;
    });
}]);
app.controller('ctrlConsole', ['$scope', 'http2', function($scope, http2) {}]);
app.controller('ctrlMatters', ['$scope', 'http2', function($scope, http2) {
    $scope.matterType = 'recent';
    $scope.open = function(matter) {
        var type = (matter.matter_type || $scope.matterType),
            id = (matter.matter_id || matter.id);
        switch (type) {
            case 'article':
            case 'enroll':
            case 'group':
            case 'lottery':
                location.href = '/rest/pl/fe/matter/' + type + '?id=' + id + '&site=' + $scope.siteId;
                break;
        }
    };
    $scope.page = {
        at: 1,
        size: 20,
        j: function() {
            return '&page=' + this.at + '&size=' + this.size;
        }
    };
    var searchMatters = function(append) {
        var url = '/rest/pl/fe/matter/' + $scope.matterType + '/list?site=' + $scope.siteId + $scope.page.j();
        url += '&_=' + (new Date()).getTime();
        http2.get(url, function(rsp) {
            if (/article/.test($scope.matterType)) {
                if (append) {
                    $scope.matters = $scope.matters.concat(rsp.data.articles);
                } else {
                    $scope.matters = rsp.data.articles;
                }
                $scope.page.total = rsp.data.total;
            } else if (/enroll|group/.test($scope.matterType)) {
                if (append) {
                    $scope.matters = $scope.matters.concat(rsp.data.apps);
                } else {
                    $scope.matters = rsp.data.apps;
                }
                $scope.page.total = rsp.data.total;
            } else {
                $scope.matters = rsp.data;
            }
        });
    };
    var searchRecent = function() {
        var url = '/rest/pl/fe/site/console/recent';
        url += '?site=' + $scope.siteId;
        url += '&exclude=mission'
        url += '&_=' + (new Date()).getTime();
        http2.get(url, function(rsp) {
            $scope.matters = rsp.data.matters;
        });
    };
    $scope.moreMatters = function() {
        $scope.page.at++;
        searchMatters(true);
    };
    $scope.chooseMatterType = function() {
        if ($scope.matterType === 'recent') {
            searchRecent();
        } else {
            $scope.page.at = 1;
            $scope.page.total = 0;
            searchMatters(false);
        }
    };
    searchRecent();
}]);
app.controller('ctrlMission', ['$scope', 'http2', function($scope, http2) {
    $scope.open = function(mission) {
        location.href = '/rest/pl/fe/matter/mission?id=' + mission.id + '&site=' + $scope.siteId;
    };
    $scope.page = {
        at: 1,
        size: 20,
        j: function() {
            return '&page=' + this.at + '&size=' + this.size;
        }
    };
    var searchMissions = function(append) {
        var url = '/rest/pl/fe/matter/mission/list?site=' + $scope.siteId + $scope.page.j();
        url += '&_=' + (new Date()).getTime();
        http2.get(url, function(rsp) {
            if (append) {
                $scope.matters = $scope.matters.concat(rsp.data.missions);
            } else {
                $scope.matters = rsp.data.missions;
            }
        });
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