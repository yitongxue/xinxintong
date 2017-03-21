window.loading = {
    finish: function() {
        var eleLoading, eleStyle;
        eleLoading = document.querySelector('.loading');
        eleLoading.parentNode.removeChild(eleLoading);
    },
    load: function() {
        var timestamp, minutes;
        timestamp = new Date();
        minutes = timestamp.getMinutes();
        minutes = Math.floor(minutes / 5) * 5;
        timestamp.setMinutes(minutes);
        timestamp.setMilliseconds(0);
        timestamp.setSeconds(0);
        require.config({
            waitSeconds: 0,
            paths: {
                "jquery": '/static/js/jquery.min',
                "bootstrap": '/static/js/bootstrap.min',
                "domReady": '/static/js/domReady',
                "angular": "/static/js/angular.min",
                "angular-sanitize": '/static/js/angular-sanitize.min',
                "ui-bootstrap": '/static/js/ui-bootstrap-tpls.min',
                "ui-tms": '/static/js/ui-tms',
                "ui-xxt": '/static/js/xxt.ui',
                "util.site": "/views/default/site/util",
                "service.matter": '/views/default/pl/fe/_module/matter.service',
                "enrollService": '/views/default/pl/fe/matter/enroll/lib/enroll.service',
                "page": '/views/default/pl/fe/matter/enroll/lib/page',
                "schema": '/views/default/pl/fe/matter/enroll/lib/schema',
                "wrap": '/views/default/pl/fe/matter/enroll/lib/wrap',
            },
            shim: {
                "angular": {
                    exports: "angular"
                },
                "enrollService": {
                    exprots: "service.enroll",
                    deps: ['service.matter']
                }
            },
            urlArgs: function(id, url) {
                if (/jquery|bootstrap|domReady|angular/.test(id)) {
                    return '';
                }
                if (/xxt|tms/.test(id)) {
                    return "?_=1";
                }
                return "?bust=" + (timestamp * 1);
            },
        });
        require(['jquery'], function() {
            require(['bootstrap'], function() {
                require(['angular'], function() {
                    require(['angular-sanitize'], function() {
                        require(['ui-bootstrap'], function() {
                            require(['ui-tms'], function() {
                                require(['ui-xxt'], function() {
                                    requirejs(['/views/default/site/op/matter/enroll/console.js']);
                                });
                            });
                        });
                    });
                });
            });
        });
    }
};
window.loading.load();
