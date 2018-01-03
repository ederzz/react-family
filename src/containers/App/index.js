import React, { Component } from 'react'
import echarts from 'echarts'
import Sider from '../../components/Sider/index.js'
import Slider from '../../components/Slider'
import template from './config/template'
import './style.less'

export default class App extends Component {
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
            // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
            dataZoomIndex: 0,
            // 开始位置的百分比，0 - 100
            start: 0,
            // 结束位置的百分比，0 - 100
            end: end,
            // 开始位置的数值
        });
    }

    render() {
        return (
            <div className="app">
                <Sider />
                <div>
                    <div 
                        className="chart-demo" 
                        ref={ d => {
                            this.chartDom = d
                        } }
                        />

                    <Slider 
                        chunkMove={ this.onChunkMove }
                        />
                        
                </div>
            </div>
        )
    }
}
