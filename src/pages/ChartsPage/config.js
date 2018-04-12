const eventFacts = {
    title: 'xss漏洞概览',
    subTitle: '跨站脚本攻击 - Cross Site Scripting',
    facts: '跨站脚本攻击(Cross Site Scripting)，为了不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS。恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。',
}

const weakness = [
    {
        url: 'www.baidu.com',
        count: 3,
        time: '2017-03-02 14:11:11'
    },
    {
        url: 'www.baidu.com',
        count: 3,
        time: '2017-03-02 14:11:11'
    },
    {
        url: 'www.baidu.com',
        count: 3,
        time: '2017-03-02 14:11:11'
    },
    {
        url: 'www.baidu.com',
        count: 3,
        time: '2017-03-02 14:11:11'
    },
    {
        url: 'www.baidu.com',
        count: 3,
        time: '2017-03-02 14:11:11'
    },
    {
        url: 'www.baidu.com',
        count: 3,
        time: '2017-03-02 14:11:11'
    },
];

export {
    eventFacts,
    weakness
}