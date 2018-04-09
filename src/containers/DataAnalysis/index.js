import React from 'react';
import { 
    Upload, 
    Button, 
    Icon 
} from 'antd';
import echarts from 'echarts';

import './style.less';
import {
    props,
    data,
    option
} from './config.js';

export default class DataAnalysis extends React.Component {

    componentDidMount() {
        this.graph = echarts.init(this.chartDom);
        this.graph.setOption(option);
    }

    render() {
        return (
            <div className="data-analysis">
                <div className="analysis-container">
                    <section className="file-upload">
                        <div className="title">上传文件:</div>
                        <div className="upload-container">
                            <Upload {...props}>
                                <Button>
                                <Icon type="upload" /> Click to Upload
                                </Button>
                            </Upload>
                            <Button className="analysis-btn">
                                分析
                            </Button>
                        </div>
                    </section>
                    <section className="data-arr">
                        <div className="title">数据分簇结果:</div>
                        <div className="data-show">
                            {
                                data.map((d, i) => (
                                    <p className="data-item">{`${i + 1}簇：${ d.join(', ') }`}</p>
                                ))
                            }
                        </div>
                    </section>
                    <section className="chart-panel">
                        <div className="title">算法仿真：</div>
                        <div 
                            ref={ d => { this.chartDom = d } }
                            className="bar-chart" 
                            />
                    </section>
                </div>
            </div>
        );
    }
}