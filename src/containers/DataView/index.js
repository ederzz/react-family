import React from 'react';
import {
    Row,
    Col,
    Table
} from 'antd';
import { connect } from 'react-redux';
import MiniBarChart from '../../components/MiniBarChart';
import MiniLineChart from '../../components/MiniLineChart';
import MiniPieChart from '../../components/MiniPieChart';
import MiniGuageChart from '../../components/MiniGuageChart';

import { columns } from './template';
import { tsSiteStatus } from '../../utils';
import './style.less';

const mapStateToProps = ({ xssFinder }) => ({ xssFinder });

/**最后主动注入后台数据进去 */
class DataView extends React.Component {

    constructor() {
        super();
        this.state = {
            dataSource: [],
            loading: true,
        }
    }

    componentDidMount() {
        const { sites } = this.props.xssFinder.toJS();
        const dataSource = sites.map((site, index) => ({
            key: index,
            url: site.url,
            ifChecked: site.url === 'not-sure' && '未检测' || '已检测',
            status: tsSiteStatus(site.status),
            time: new Date(site.time).toISOString
        }));

        this.setState({
            dataSource,
            loading: false
        });
    }

    render() {
        const { 
            dataSource,
            loading
         } = this.state;

        return (
            <div className="data-view">
                <Row gutter={8}>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <MiniBarChart 
                            title='xss扫描次数'
                            count={1222}
                            footerTitle='日平均'
                            footerCount={1234}
                            />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <MiniLineChart 
                            title='xss扫描次数'
                            count={1222}
                            footerTitle='日平均'
                            footerCount={1234}
                            />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <MiniPieChart 
                            title='xss扫描次数'
                            count={1222}
                            footerTitle='日平均'
                            footerCount={1234}
                            />
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                        <MiniGuageChart
                            title='xss扫描次数'
                            count={1222}
                            footerTitle='日平均'
                            footerCount={1234}
                            />
                    </Col>
                </Row>
                <section className="list-container">
                    <Table 
                        className='site-list'
                        dataSource={ dataSource } 
                        columns={ columns } 
                        loading={ loading }
                        pagination={{ pageSize: 6 }}
                        />
                </section>

            </div>
        );
    }
}

export default connect(mapStateToProps, null)(DataView);