import React from 'react';
import echarts from 'echarts';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.less';

import { option } from './config';

export default class MiniBarChart extends React.Component{
    static defaultProps = {
        className: null
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
    }

    componentDidMount() {
        this.graph = echarts.init(this.chartDom);
        this.graph.setOption(option);
    }

    render() {
        const {
            className,
            title,
            count
        } = this.props;

        return (
            <div className="chart-container">
                <div className="chart-top">
                    <div className="title">{ title }</div>
                    <div className="total">{ count }</div>
                </div>
                <div 
                    className={classnames("mini-barchart", className)}
                    ref={d => { this.chartDom = d }}
                    >

                </div>
                <div className="chart-bot">
                    <span>日访问量</span>
                    <span>1,234</span>
                </div>
            </div>
            
        );
    }
}