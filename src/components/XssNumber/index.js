import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import echarts from 'echarts';
import _cloneDeep from 'lodash/cloneDeep';
import './style.less';
import {
    option
} from './config';

export default class XssNumber extends React.Component {

    static defaultProps = {
        className: null,
        title: '这是标题'
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        data: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.options = _cloneDeep(option);
        this.graph = echarts.init(this.chartDom);
        this._setSeriesData();
        this.graph.setOption(this.options);
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this._setSeriesData(data);
        this.graph.setOption(this.options);
    }

    _setSeriesData = (data = this.props.data) => {
        this.options.xAxis[0].data = data.axisData;
        this.options.series[0].data = data.seriesData;
    }

    render() {
        const {
            className,
            title
        } = this.props;

        return (
            <div className={classnames('xss-number-container', className)}>
                <header className="chart-title">{ title }</header>
                <section
                    className='bar-chart'
                    ref={dom => {
                        this.chartDom = dom;
                    }}
                    >
                </section>
            </div>
        );
    }
}