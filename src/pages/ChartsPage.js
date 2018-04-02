import React from 'react';
import './style.less';

export default class ChartsPage extends React.Component {

    render() {
        return (
            <div className="charts-page">
                <header className="header-bar">
                    <div className="header-title">
                        <span className="title">XSS漏洞检测器</span>
                        <span className="sub-title">可视化平台</span>
                    </div>
                    <div className="header-time">
                        2015-03-12
                    </div>
                </header>
                <section className="chart-wrapper">
                    <div className="mid-list">事件列表</div>
                    <div className="mid-chart">charts</div>
                </section>
                <section className="footer-list-wrapper">
                    <div className="first-list footer-list">列表1</div>
                    <div className="second-list footer-list">列表2</div>
                    <div className="third-list footer-list">列表3</div>
                    <div className="fourth-list footer-list">列表4</div>
                </section>
            </div>
        );
    }
}