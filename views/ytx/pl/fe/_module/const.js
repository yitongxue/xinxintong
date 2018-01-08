angular.module('pl.const', []).
constant('CstNaming', {
    matter: {
        doc: {
            'article': '项目资料',
            'link': '链接',
            'channel': '频道',
        },
        docOrder: ['article', 'link', 'channel'],
        app: {
            'enroll': '登记',
            'signin': '签到',
            'group': '分组',
            'plan': '计划任务',
            'memberschema': '通讯录',
        },
        appOrder: ['enroll', 'signin', 'group', 'plan', 'memberschema']
    },
    scenario: {
        enroll: {
            'common': '通用登记',
            'registration': '报名',
            'voting': '评价',
            'quiz': '测验',
            'discuss': '萃取记录',
            'score_sheet': '记分表',
        },
        enrollIndex: ['common', 'registration', 'voting', 'quiz', 'discuss', 'score_sheet'],
        group: {
            'split': '分组',
            'extract': '抓阄'
        },
        groupIndex: ['split', 'extract']
    },
    mission: { 'phase': '课程期数' }
});