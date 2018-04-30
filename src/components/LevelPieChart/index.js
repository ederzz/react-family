import React from 'react';
import echarts from 'echarts';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import _cloneDeep from 'lodash/cloneDeep';

import './style.less';
import { 
    option,
    data
 } from './config';

export default class MiniPieChart extends React.Component {
    static defaultProps = {
        className: null,
        title: '这是标题',
        showLegend: true,
        data
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        data: PropTypes.array,
        showLegend: PropTypes.bool
    }

    _generateChartData = () => {
        const {
            data
        } = this.props;
        const pieceVal = 0.8 / data.length;
        return data.sort((a, b) => a.value - b.value).map((d, i) => {
            d.itemStyle = {
                color: `rgba(32, 160, 220, ${1 - pieceVal * i})`
            }
            return d
        })
    }

    componentDidMount() {
        const {
            showLegend
        } = this.props;

        this.options = _cloneDeep(option);
        this.options.series[0].data = this._generateChartData();
        this.options.legend.show = showLegend;
        this.graph = echarts.init(this.chartDom);
        this.graph.setOption(this.options);
    }

    componentWillReceiveProps(nextProps) {
        const { showLegend } = nextProps;
        
        this.options.series[0].data = this._generateChartData();
        this.options.legend.show = showLegend;
        this.graph.setOption(this.options);
    }

    render() {
        const {
            className,
            title,
        } = this.props;
        return (
            <div className={classnames("pie-chart-container", className)}>
                <header className="chart-title">{ title }</header>
                <div 
                    className="level-piechart" 
                    ref={d => {
                        this.chartDom = d
                    }}
                    />
            </div>
        );
    }
}