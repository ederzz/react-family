const options = {
    grid: {
        top: 40,
        left: 40,
        right: 120,
        bottom: 40
    },
    tooltip: {
        trigger: 'axis',
        formatter: params => {
            const [
                data
            ] = params;
            const siteName = data.axisValue.match(/^[\s\S]+\(([\s\S]+)\)$/)[1];
            return `
                <div>
                    <div>${siteName}</div>
                    <div>
                        ${data.marker}
                        <span>漏洞数量：</span>
                        <span>${data.value}</span>
                    </div>
                </div>
            `
        }
    },
    xAxis: {
        data: ['site1(www.baidu.com)', 'site1(www.baidu.com)', 'site1(www.baidu.com)', 'site1(www.baidu.com)'],
        axisLine: {
            lineStyle: {
                color: '#fff'
            },
            symbol: ['none', 'arrow']
        },
        axisTick: {
            show: false 
        },
        axisLabel: {
            formatter: val => val.split('(')[0]
        },
        type: 'category',
        boundaryGap: false,
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            },
            symbol: ['none', 'arrow']
        },
        axisTick: {
            show: false 
        },
    },
    visualMap: {
        top: 10,
        right: 10,
        textStyle: {
            color: '#fff'
        },
        formatter: (val1, val2) => {
            if(val1 === 0) {
                return '安全';
            }
            if(val1 === 1) {
                return '低危';
            }
            if(val1 === 2) {
                return '中危';
            }
            if(val1 === 3) {
                return '高危';
            }
        },
        pieces: [{
            gte: 0,
            lt: 1,
            color: '#096'
        }, {
            gte: 1,
            lt: 2,
            color: '#ffde33'
        }, {
            gte: 2,
            lt: 3,
            color: '#ff9933'
        }, {
            gte: 3,
            color: '#cc0033'
        }],
    },
    series: {
        name: '漏洞级别',
        type: 'line',
        data: [1, 2, 3, 4],
        markLine: {
            silent: true,
            data: [{
                yAxis: 1
            }, {
                yAxis: 2
            }, {
                yAxis: 3
            }],
            lineStyle: {
                color: '#fff'
            }
        },
        lineStyle: {
            smooth: true
        }
    }
}

export {
    options
}