import React from 'react';
import {
    Row,
    Col,
    Tooltip,
    Icon
} from 'antd';
import {
    ChartCard,
    MiniBar,
    Field
} from 'ant-design-pro/lib/Charts';
import './style.less';

const visitData = [
    {
      x: "2017-09-01",
      y: 100
    },
    {
      x: "2017-09-02",
      y: 120
    },
    {
      x: "2017-09-03",
      y: 88
    },
    {
      x: "2017-09-04",
      y: 65
    }
  ];
  
class A extends React.Component {
    render() {
        return (
            <div>sdsdss</div>
        );
    }
}
export default class LayoutTest extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={10}>
                    <Col className="zz" xl={6} lg={6} md={8} sm={12} xs={24}>
                    <div>
                        <MiniBar
                        height={46}
                        data={visitData}
                        />
                        </div>
                    </Col>
                    <Col className="zz" xl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className="zzz">col</div>
                    </Col>
                    <Col className="zz" xl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className="zzz">col</div>
                    </Col>
                    <Col className="zz" xl={6} lg={6} md={8} sm={12} xs={24}>
                        <div className="zzz">col</div>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" gutter={10}>
                    <Col><div className="zzz">col</div></Col>
                    <Col><div className="zzz">col</div></Col>
                    <Col><div className="zzz">col</div></Col>
                    <Col><div className="zzz">col</div></Col>
                </Row>
            </div>
        );
    }
}