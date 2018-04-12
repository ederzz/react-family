import React from 'react';
import WeaknessList from '../../containers/WeaknessList';
import EventFacts from '../../components/EventFacts';
import {
    eventFacts,
    weakness
} from './config';
import './style.less';

export default class ChartsPage extends React.Component {

    componentWillMount() {
        console.log(this.props.location, this.props.history);
        
    }

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
                    <div className="mid-list">
                        <WeaknessList xss={ weakness } />
                    </div>
                    <div className="mid-chart">charts</div>
                </section>
                <section className="footer-list-wrapper">
                    <div className="first-list footer-list">
                        <EventFacts 
                            title={eventFacts.title}
                            subTitle={eventFacts.subTitle}
                            facts={eventFacts.facts}
                            />
                    </div>
                    <div className="second-list footer-list">列表2</div>
                    <div className="third-list footer-list">列表3</div>
                    <div className="fourth-list footer-list">列表4</div>
                </section>
            </div>
        );
    }
}