import React, { Component } from 'react';
import echarts from 'echarts';
// import Slider from '../../components/Slider';
import template from './config/template';
import './style.less';

export default class Home extends Component {
    constructor() {
        super();
        this.chartDom = document.createElement('div');
    }

    componentDidMount() {
        this.graph = echarts.init(this.chartDom);
        this.graph.setOption(template.option);
    }

    onChunkMove = (end) => {
        this.graph.dispatchAction({
            type: 'dataZoom',
            dataZoomIndex: 0,
            start: 0,
            end: end,
        });
    }

    render() {
        return (
            <div className="Home">
                {/* <div 
                    className="chart-demo" 
                    ref={ d => {
                        this.chartDom = d
                    } }
                    />
                <Slider 
                    className="aaa"
                    chunkMove={ this.onChunkMove }
                    /> */}
                    欢迎来到xss漏洞检测器
            </div>
        )
    }
}
