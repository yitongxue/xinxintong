requirejs(['/static/js/tms.bootstrap.js'], function (tms) {
    /* 定义应用常量 */
    define("frame/const", {
        matterNames: {
            doc: {
                'article': '项目资料',
                'channel': '频道',
            },
            docOrder: ['article', 'channel'],
            app: {
                'enroll': '记录',
                'signin': '签到',
                'group': '分组',
            },
            appOrder: ['enroll', 'signin', 'group'],
            'site': '团队',
            'mission': '项目',
        },
        notifyMatter: [{
            value: 'tmplmsg',
            title: '模板消息',
            url: '/rest/pl/fe/matter'
        }, {
            value: 'article',
            title: '项目资料',
            url: '/rest/pl/fe/matter'
        }, {
            value: 'channel',
            title: '频道',
            url: '/rest/pl/fe/matter'
        }, {
            value: 'enroll',
            title: '记录活动',
            url: '/rest/pl/fe/matter'
        }]
    });
    var _oRawPathes;
    _oRawPathes = {
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
    tms.bootstrap(_oRawPathes);
});