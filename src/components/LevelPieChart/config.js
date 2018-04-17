const option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: 10,
        top: 10,
        textStyle: {
            color: '#fff'
        }
    },
    series : [
        {
            name:'威胁等级',
            type:'pie',
            radius : '70%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'高危站点'},
                {value:310, name:'中危站点'},
                {value:274, name:'低危站点'},
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: '#fff'
            },
            labelLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    color: '#2997d8',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

const data = [
    {value:335, name:'高危站点'},
    {value:310, name:'中危站点'},
    {value:274, name:'低危站点'},
];

export {
    option,
    data
}