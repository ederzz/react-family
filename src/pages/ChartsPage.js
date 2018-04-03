import React from 'react';
import WeaknessList from '../containers/WeaknessList';
import './style.less';

export default class ChartsPage extends React.Component {

    render() {
        const xss = [
            {
                url: 'www.baidu.com',
                count: 3,
                time: '2017-03-02 14:11:11'
            },
            {
                url: 'www.baidu.com',
                count: 3,
                time: '2017-03-02 14:11:11'
            },
            {
                url: 'www.baidu.com',
                count: 3,
                time: '2017-03-02 14:11:11'
            },
            {
                url: 'www.baidu.com',
                count: 3,
                time: '2017-03-02 14:11:11'
            },
            {
                url: 'www.baidu.com',
                count: 3,
                time: '2017-03-02 14:11:11'
            },
            {
                url: 'www.baidu.com',
                count: 3,
                time: '2017-03-02 14:11:11'
            },
        ];

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
                    <div className="mid-list">
                        <WeaknessList xss={ xss } />
                    </div>
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