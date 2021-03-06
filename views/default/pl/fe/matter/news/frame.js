ngApp = angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.tms', 'ui.xxt', 'http.ui.xxt', 'notice.ui.xxt', 'service.matter']);
ngApp.config(['$routeProvider', '$locationProvider', 'srvTagProvider', 'srvSiteProvider', function($routeProvider, $locationProvider, srvTagProvider, srvSiteProvider) {
    $routeProvider.when('/rest/pl/fe/matter/news', {
        templateUrl: '/views/default/pl/fe/matter/news/setting.html?_=2',
        controller: 'ctrlSetting',
    }).otherwise({
        templateUrl: '/views/default/pl/fe/matter/news/setting.html?_=2',
        controller: 'ctrlSetting'
    });
    $locationProvider.html5Mode(true);
    //设置服务参数
    (function() {
        var ls, siteId;
        ls = location.search;
        siteId = ls.match(/[\?&]site=([^&]*)/)[1];
        //
        srvTagProvider.config(siteId);
        srvSiteProvider.config(siteId);
    })();
}]);
ngApp.directive('sortable', function() {
    return {
        link: function(scope, el, attrs) {
            el.sortable({
                revert: 50
            });
            el.disableSelection();
            el.on("sortdeactivate", function(event, ui) {
                var from = angular.element(ui.item).scope().$index;
                var to = el.children('li').index(ui.item);
                if (to >= 0) {
                    scope.$apply(function() {
                        if (from >= 0) {
                            scope.$emit('my-sorted', {
                                from: from,
                                to: to
                            });
                        }
                    });
                }
            });
        }
    };
});
ngApp.controller('ctrlNews', ['$scope', '$location', 'http2', function($scope, $location, http2) {
    var ls = $location.search();
    $scope.id = ls.id;
    $scope.siteId = ls.site;
    http2.get('/rest/pl/fe/matter/tag/listTags?site=' + $scope.siteId).then(function(rsp) {
        $scope.oTag = rsp.data;
    });
    http2.get('/rest/pl/fe/matter/news/get?site=' + $scope.siteId + '&id=' + $scope.id).then(function(rsp) {
        if (rsp.data.matter_mg_tag !== '') {
            rsp.data.matter_mg_tag.forEach(function(cTag, index) {
                $scope.oTag.forEach(function(oTag) {
                    if (oTag.id === cTag) {
                        rsp.data.matter_mg_tag[index] = oTag;
                    }
                });
            });
        }
        $scope.editing = rsp.data;
        $scope.entryUrl = location.protocol + '//' + location.host + '/rest/site/fe/matter?site=' + $scope.siteId + '&id=' + $scope.id + '&type=news';
    });
}]);
ngApp.controller('ctrlSetting', ['$scope', 'http2', 'srvSite', '$uibModal', 'srvTag', function($scope, http2, srvSite, $uibModal, srvTag) {
    var modifiedData = {};
    $scope.modified = false;
    $scope.matterTypes = [{
        value: 'article',
        title: '单图文',
        url: '/rest/pl/fe/matter'
    }, {
        value: 'news',
        title: '多图文',
        url: '/rest/pl/fe/matter'
    }, {
        value: 'channel',
        title: '频道',
        url: '/rest/pl/fe/matter'
    }, {
        value: 'link',
        title: '链接',
        url: '/rest/pl/fe/matter'
    }, {
        value: 'enroll',
        title: '记录活动',
        url: '/rest/pl/fe/matter'
    }];
    var updateMatters = function() {
        http2.post('/rest/pl/fe/matter/news/updateMatter?site=' + $scope.siteId + '&id=' + $scope.editing.id, $scope.editing.matters);
    };
    $scope.submit = function() {
        http2.post('/rest/pl/fe/matter/news/update?site=' + $scope.siteId + '&id=' + $scope.id, modifiedData).then(function() {
            modifiedData = {};
            $scope.modified = false;
        });
    };
    $scope.update = function(name) {
        $scope.modified = true;
        modifiedData[name] = $scope.editing[name];
    };
    $scope.assign = function() {
        srvSite.openGallery({
            matterTypes: $scope.matterTypes,
            hasParent: false,
            singleMatter: false
        }).then(function(result) {
            for (var i in result.matters) {
                result.matters[i].type = result.type;
            }
            $scope.editing.matters = $scope.editing.matters.concat(result.matters);
            updateMatters();
        });
    };
    $scope.removeMatter = function(index) {
        $scope.editing.matters.splice(index, 1);
        updateMatters();
    };
    $scope.setEmptyReply = function() {
        srvSite.openGallery({
            matterTypes: $scope.matterTypes,
            hasParent: false,
            singleMatter: true
        }).then(function(result) {
            var matters = result.matters,
                type = result.type;
            if (matters.length === 1) {
                var p = {
                    mt: type,
                    mid: matters[0].id
                };
                http2.post('/rest/pl/fe/matter/news/setEmptyReply?site=' + $scope.siteId + '&id=' + $scope.editing.id, p).then(function(rsp) {
                    $scope.editing.emptyReply = matters[0];
                });
            }
        });
    };
    $scope.removeEmptyReply = function() {
        var p = {
            mt: '',
            mid: ''
        };
        http2.post('/rest/pl/fe/matter/news/setEmptyReply?site=' + $scope.siteId + '&id=' + $scope.editing.id, p).then(function(rsp) {
            $scope.editing.emptyReply = null;
        });
    };
    $scope.$on('my-sorted', function(ev, val) {
        // rearrange $scope.items
        $scope.editing.matters.splice(val.to, 0, $scope.editing.matters.splice(val.from, 1)[0]);
        for (var i = 0; i < $scope.editing.matters.length; i++) {
            $scope.editing.matters.seq = i;
        }
        updateMatters();
    });
    $scope.tagMatter = function(subType) {
        var oTags = $scope.oTag;
        srvTag._tagMatter($scope.editing, oTags, subType);
    };
}]);