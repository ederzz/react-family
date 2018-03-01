import React from 'react';
import {
    Row,
    Col
} from 'antd';
import MiniBarChart from '../../components/MiniBarChart';
import MiniLineChart from '../../components/MiniLineChart';
import MiniPieChart from '../../components/MiniPieChart';

/**最后主动注入后台数据进去 */
export default class DataView extends React.Component {
    render() {
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
                    asa
                </Col>
            </Row>
            </div>
        );
    }
}