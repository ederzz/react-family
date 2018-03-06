import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import { option } from './config';
import './style.less';

export default class MiniGuageChart extends React.Component {
    static defaultProps = {
        className: null
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        footerTitle: PropTypes.string.isRequired,
        footerCount: PropTypes.number.isRequired,
    }

    componentDidMount() {
        this.graph = echarts.init(this.chartDom);
        this.graph.setOption(option);
    }

    render() {
        const {
            className,
            title,
            count,
            footerTitle,
            footerCount
        } = this.props;
        return (
            <div className={classnames('guage-chart-container', className)}>
                <div className="chart-top">
                    <div className="title">{ title }</div>
                    <div className="total">{ count }</div>
                </div>
                <div 
                    className="mini-guagechart" 
                    ref={ d => { this.chartDom = d } }
                    />
                <div className="chart-bot">
                    <span>{ footerTitle }</span>
                    <span>{ footerCount }</span>
                </div>
            </div>
        );
    }
}