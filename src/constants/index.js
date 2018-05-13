export const menu = [
    {
        name: '首页',
        url: '',
        key: 'home',
        icon: 'home'
    },
    {
        name: 'xss检测',
        url: 'xss',
        key: 'xss',
        icon: 'search'
    },
    {
        name: 'chart',
        url: 'chart',
        key: 'chart',
        icon: 'pie-chart'
    },
    {
        name: 'taste demos',
        icon: 'rocket',   // 没有icon
        key: 'demos',
        childrens: [
            {
                name: 'hover animation',
                url: 'hover',
                key: 'hover',
                icon: 'search'
            }
        ]
    }
];

export const SITE_STATUS_MAP = {
    'safe': '安全',
    'danger': '危险',
    'not-sure': '未知'
};