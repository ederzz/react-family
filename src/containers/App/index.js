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

                    <Slider />
                </div>
            </div>
        )
    }
}
