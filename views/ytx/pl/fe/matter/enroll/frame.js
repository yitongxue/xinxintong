define(['require', 'enrollService'], function(require) {
    'use strict';
    var ngApp = angular.module('app', ['ngRoute', 'frapontillo.bootstrap-switch', 'ui.tms', 'tmplshop.ui.xxt', 'service.matter', 'service.enroll', 'tinymce.enroll', 'ui.xxt']);
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
            'schema.duplicated': '不允许重复添加题目',
            'require.mission.phase': '请先指定项目的课程期数'
        }
    });
    ngApp.config(['$controllerProvider', '$routeProvider', '$locationProvider', '$compileProvider', '$uibTooltipProvider', 'srvSiteProvider', 'srvQuickEntryProvider', 'srvEnrollAppProvider', 'srvEnrollRoundProvider', 'srvEnrollPageProvider', 'srvEnrollRecordProvider', function($controllerProvider, $routeProvider, $locationProvider, $compileProvider, $uibTooltipProvider, srvSiteProvider, srvQuickEntryProvider, srvEnrollAppProvider, srvEnrollRoundProvider, srvEnrollPageProvider, srvEnrollRecordProvider) {
        var RouteParam = function(name, htmlBase, jsBase) {
            var baseURL = '/views/default/pl/fe/matter/enroll/';
            this.templateUrl = (htmlBase || baseURL) + name + '.html?_=' + (new Date() * 1);
            this.controller = 'ctrl' + name[0].toUpperCase() + name.substr(1);
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
            .when('/rest/pl/fe/matter/enroll/main', new RouteParam('main', '/views/ytx/pl/fe/matter/enroll/'))
            .when('/rest/pl/fe/matter/enroll/publish', new RouteParam('publish', '/views/ytx/pl/fe/matter/enroll/'))
            .when('/rest/pl/fe/matter/enroll/schema', new RouteParam('schema', '/views/ytx/pl/fe/matter/enroll/'))
            .when('/rest/pl/fe/matter/enroll/page', new RouteParam('page', '/views/ytx/pl/fe/matter/enroll/'))
            .when('/rest/pl/fe/matter/enroll/record', new RouteParam('record'))
            .when('/rest/pl/fe/matter/enroll/editor', new RouteParam('editor'))
            .when('/rest/pl/fe/matter/enroll/recycle', new RouteParam('recycle'))
            .when('/rest/pl/fe/matter/enroll/stat', new RouteParam('stat'))
            .when('/rest/pl/fe/matter/enroll/log', new RouteParam('log'))
            .when('/rest/pl/fe/matter/enroll/coin', new RouteParam('coin'))
            .when('/rest/pl/fe/matter/enroll/notice', new RouteParam('notice'))
            .when('/rest/pl/fe/matter/enroll/discuss', new RouteParam('discuss', '/views/default/pl/fe/_module/', '/views/default/pl/fe/_module/'))
            .otherwise(new RouteParam('publish', '/views/ytx/pl/fe/matter/enroll/'));

        $locationProvider.html5Mode(true);

        $uibTooltipProvider.setTriggers({
            'show': 'hide'
        });

        (function() {
            var ls, siteId, appId;
            ls = location.search;
            siteId = ls.match(/[\?&]site=([^&]*)/)[1];
            appId = ls.match(/[\?&]id=([^&]*)/)[1];
            //
            srvSiteProvider.config(siteId);
            srvEnrollAppProvider.config(siteId, appId);
            srvEnrollRoundProvider.config(siteId, appId);
            srvEnrollPageProvider.config(siteId, appId);
            srvEnrollRecordProvider.config(siteId, appId);
            srvQuickEntryProvider.setSiteId(siteId);
        })();
    }]);
    ngApp.controller('ctrlFrame', ['$scope', 'srvSite', 'srvEnrollApp', 'templateShop', '$location', function($scope, srvSite, srvEnrollApp, templateShop, $location) {
        $scope.scenarioNames = {
            'common': '通用登记',
            'registration': '报名',
            'voting': '评价',
            'quiz': '测验',
        };
        $scope.opened = '';
        $scope.$on('$locationChangeSuccess', function(event, currentRoute) {
            var subView = currentRoute.match(/([^\/]+?)\?/);
            $scope.subView = subView[1] === 'enroll' ? 'publish' : subView[1];
            switch ($scope.subView) {
                case 'main':
                case 'page':
                case 'schema':
                    $scope.opened = 'edit';
                    break;
                case 'record':
                case 'stat':
                    $scope.opened = 'data';
                    break;
                case 'recycle':
                case 'log':
                case 'coin':
                case 'notice':
                    $scope.opened = 'other';
                    break;
                default:
                    $scope.opened = '';
            }
        });
        $scope.switchTo = function(subView) {
            var url = '/rest/pl/fe/matter/enroll/' + subView;
            $location.path(url);
        };
        $scope.update = function(name) {
            srvEnrollApp.update(name);
        };
        $scope.shareAsTemplate = function() {
            templateShop.share($scope.app.siteid, $scope.app).then(function(template) {
                location.href = '/rest/pl/fe/template/enroll?site=' + template.siteid + '&id=' + template.id;
            });
        };

        srvSite.get().then(function(oSite) {
            $scope.site = oSite;
        });
        srvSite.snsList().then(function(aSns) {
            $scope.sns = aSns;
        });
        srvSite.memberSchemaList().then(function(aMemberSchemas) {
            $scope.memberSchemas = aMemberSchemas;
        });
        srvEnrollApp.get().then(function(app) {
            $scope.app = app;
            app.__schemasOrderConsistent = 'Y'; //页面上登记项显示顺序与定义顺序一致
        });
    }]);
    /***/
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ["app"]);
    });
    /***/
    return ngApp;
});
