angular.module('xxt', ['ui.tms']).
controller('ctrlMain', ['$scope', 'http2', function($scope, http2) {
    var t = (new Date()).getTime();
    $scope.create = function() {
        var url = '/rest/pl/fe/site/create?_=' + t;;
        http2.get(url, function(rsp) {
            location.href = '/rest/pl/fe/site?site=' + rsp.data.id;
        });
    };
    $scope.list = function() {
        var url = '/rest/pl/fe/site/list?_=' + t;
        http2.get(url, function(rsp) {
            var sites = rsp.data;
            /*如果用户没有站点，自动创建一个站点；如果用户只有一个站点，自动进入这个站点*/
            if (sites.length === 0) {
                $scope.create();
            } else if (sites.length === 1) {
                $scope.open(null, sites[0]);
            } else {
                $scope.sites = sites;
            }
        });
    };
    $scope.open = function(event, site) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        location.href = '/rest/pl/fe/site?site=' + site.id + '&_=' + t;
    };
    $scope.remove = function(event, site) {
        event.preventDefault();
        event.stopPropagation();
        var url = '/rest/pl/fe/site/remove';
        url += '?site=' + site.id + '&_=' + t;
        http2.get(url, function(rsp) {
            var i = $scope.sites.indexOf(site);
            $scope.sites.splice(i, 1);
        });
    };
    $scope.list();
}]);