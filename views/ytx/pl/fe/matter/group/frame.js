define(['require'], function() {
    'use strict';
    var ngApp = angular.module('app', ['ngRoute', 'ui.tms', 'ui.xxt', 'service.matter', 'service.group']);
    ngApp.constant('cstApp', {
        notifyMatter: [{
            value: 'tmplmsg',
            title: '模板消息',
            url: '/rest/pl/fe/matter'
        }, {
            value: 'article',
            title: '项目资料',
            url: '/rest/pl/fe/matter'
        }, {
            value: 'enroll',
            title: '登记活动',
            url: '/rest/pl/fe/matter'
        }],
        innerlink: [{
            value: 'article',
            title: '项目资料',
            url: '/rest/pl/fe/matter'
        }],
        alertMsg: {
            'schema.duplicated': '不允许重复添加登记项',
            'require.mission.phase': '请先指定项目的阶段'
        },
        importSource: [
            { v: 'mschema', l: '通讯录联系人' },
            { v: 'registration', l: '报名' },
            { v: 'signin', l: '签到' },
        ],
        naming: { 'mission_phase': '课程期数' }
    });
    ngApp.config(['$controllerProvider', '$routeProvider', '$locationProvider', '$compileProvider', 'srvQuickEntryProvider', 'srvSiteProvider', 'srvGroupAppProvider', 'srvGroupRoundProvider', 'srvTagProvider', function($controllerProvider, $routeProvider, $locationProvider, $compileProvider, srvQuickEntryProvider, srvSiteProvider, srvGroupAppProvider, srvGroupRoundProvider, srvTagProvider) {
        var RouteParam = function(name, htmlBase, jsBase) {
            var baseURL = '/views/default/pl/fe/matter/group/';
            this.templateUrl = (htmlBase || baseURL) + name + '.html?_=' + (new Date * 1);
            this.controller = 'ctrl' + name[0].toUpperCase() + name.substr(1);
            this.reloadOnSearch = false;
            this.resolve = {
                load: function($q) {
                    var defer = $q.defer();
                    require([(jsBase || baseURL) + name + '.js'], function() {
                        defer.resolve();
                    });
                    return defer.promise;
                }
            };
        };
        ngApp.provider = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive
        };
        $routeProvider
            .when('/rest/pl/fe/matter/group/main', new RouteParam('main'))
            .when('/rest/pl/fe/matter/group/round', new RouteParam('round'))
            .when('/rest/pl/fe/matter/group/user', new RouteParam('user'))
            .when('/rest/pl/fe/matter/group/notice', new RouteParam('notice'))
            .otherwise(new RouteParam('user'));

        $locationProvider.html5Mode(true);
        //设置服务参数
        (function() {
            var ls, siteId, appId;
            ls = location.search;
            siteId = ls.match(/[\?&]site=([^&]*)/)[1];
            appId = ls.match(/[\?&]id=([^&]*)/)[1];
            //
            srvSiteProvider.config(siteId);
            srvTagProvider.config(siteId);
            srvGroupAppProvider.config(siteId, appId);
            srvGroupRoundProvider.config(siteId, appId);
            srvQuickEntryProvider.setSiteId(siteId);
        })();
    }]);
    ngApp.controller('ctrlApp', ['$scope', 'cstApp', 'srvSite', 'srvGroupApp', '$location', function($scope, cstApp, srvSite, srvGroupApp, $location) {
        $scope.cstApp = cstApp;
        $scope.opened = '';
        $scope.$on('$locationChangeSuccess', function(event, currentRoute) {
            var subView = currentRoute.match(/([^\/]+?)\?/);
            $scope.subView = subView[1] === 'group' ? 'user' : subView[1];
            switch ($scope.subView) {
                case 'main':
                case 'round':
                    $scope.opened = 'edit';
                    break;
                case 'user':
                    $scope.opened = 'data';
                    break;
                case 'notice':
                    $scope.opened = 'other';
                    break;
                default:
                    $scope.opened = '';
            }
        });
        $scope.switchTo = function(subView) {
            var url = '/rest/pl/fe/matter/group/' + subView;
            $location.path(url);
        };
        srvSite.get().then(function(oSite) {
            $scope.site = oSite;
        });
        srvSite.tagList().then(function(oTag) {
            $scope.oTag = oTag;
        });
        srvGroupApp.get().then(function(app) {
            if (app.matter_mg_tag !== '') {
                app.matter_mg_tag.forEach(function(cTag, index) {
                    $scope.oTag.forEach(function(oTag) {
                        if (oTag.id === cTag) {
                            app.matter_mg_tag[index] = oTag;
                        }
                    });
                });
            }
            $scope.app = app;
        });
        $scope.importByApp = function() {
            srvGroupApp.importByApp(cstApp.importSource).then(function() {});
        };
        $scope.cancelSourceApp = function() {
            srvGroupApp.cancelSourceApp();
        };
        $scope.gotoSourceApp = function() {
            var oSourceApp;
            if ($scope.app.sourceApp) {
                oSourceApp = $scope.app.sourceApp;
                switch (oSourceApp.type) {
                    case 'enroll':
                        location.href = '/rest/pl/fe/matter/enroll?site=' + oSourceApp.siteid + '&id=' + oSourceApp.id;
                        break;
                    case 'signin':
                        location.href = '/rest/pl/fe/matter/signin?site=' + oSourceApp.siteid + '&id=' + oSourceApp.id;
                        break;
                }
            }
        };
    }]);
    /***/
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ["app"]);
    });
    /***/
    return ngApp;
});