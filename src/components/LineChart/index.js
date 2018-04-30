import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import echarts from 'echarts'
import _cloneDeep from 'lodash/cloneDeep'

import './style.less'
import { options } from './config'

export default class LineChart extends React.Component {
  static defaultProps = {
    className: null
  }

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.options = _cloneDeep(options);
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
    this.options.xAxis.data = data.axisData;
    this.options.series.data = data.seriesData;
  }

  render() {
    const {
      className
    } = this.props;

    return (
      <div 
        ref={ele => { this.chartDom = ele }}
        className={classnames('line-chart-wrapper', className)} />
    )
  }
}