/* 定义应用常量 */
define("cstApp", {
    matterNames: {
        doc: {
            'article': '项目资料',
            'channel': '频道',
        },
        docOrder: ['article', 'channel'],
        app: {
            'enroll': '登记',
            'signin': '签到',
            'group': '分组',
        },
        appOrder: ['enroll', 'signin', 'group'],
        'site': '团队',
        'mission': '项目',
    },
});
var _oRawScripts;
_oRawScripts = {
    js: {
        "frame": '/views/default/pl/fe/console/frame',
        "mainCtrl": '/views/default/pl/fe/console/main',
        "usersCtrl": '/views/default/pl/fe/console/users',
    },
    html: {
        "main": '/views/default/pl/fe/console/main',
        "users": '/views/default/pl/fe/console/users',
    }
}

function _fnConfigRequire(oScriptTimes) {
    var oPaths = {
        "domReady": '/static/js/domReady'
    };
    for (var p in _oRawScripts.js) {
        oPaths[p] = _oRawScripts.js[p];
    }
    require.config({
        waitSeconds: 0,
        paths: oPaths,
        urlArgs: function(id, url) {
            return oScriptTimes.js[id] ? ('?bust=' + oScriptTimes.js[id].time) : '';
        }
    });
    for (var n in _oRawScripts.html) {
        if (oScriptTimes.html && oScriptTimes.html[n]) {
            oScriptTimes.html[n].path = _oRawScripts.html[n] + '';
        }
    }
    window.ScriptTimes = oScriptTimes;
    require(['frame']);
}
/* 获得要加载文件的修改时间 */
angular.injector(['ng']).invoke(function($http) {
    $http.post('/rest/script/time', _oRawScripts, { 'headers': { 'accept': 'application/json' } }).success(function(rsp) {
        _fnConfigRequire(rsp.data);
    });
});