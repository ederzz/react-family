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
        title: PropTypes.string
    }

    componentDidMount() {
        this.options = _cloneDeep(option);
        this.graph = echarts.init(this.chartDom);
        this.graph.setOption(this.options);
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