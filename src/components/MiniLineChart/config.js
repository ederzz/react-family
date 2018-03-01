const option = {
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        // showSymbol: false,
        itemStyle: {
            color: '#2997d8'
        },
        lineStyle: {
            width: 4
        },
        areaStyle: {
            color: '#4de5f5',
            opacity: .3
        }
    }]
};

/**tooltip还需要定制下 */
export {
    option
}