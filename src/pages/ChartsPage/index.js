import React from 'react';
import WeaknessList from '../../containers/WeaknessList';
import EventFacts from '../../components/EventFacts';
import VisualHeader from '../../components/VisualHeader';
import LevelPieChart from '../../components/LevelPieChart';
import XssNumber from '../../components/XssNumber';
import ScrollTable from '../../components/ScrollTable';
import LineChart from '../../components/LineChart';
import {
    eventFacts,
    weakness,
    header
} from './config';
import './style.less';

export default class ChartsPage extends React.Component {

    componentWillMount() {
        console.log(this.props.location, this.props.history);
        
    }

    render() {
        return (
            <div className="charts-page">
                <VisualHeader 
                    className="chart-header"
                    title={header.title}
                    subTitle={header.subTitle}
                    />
                <section className="chart-wrapper">
                    <div className="mid-list">
                        <WeaknessList xss={ weakness } />
                    </div>
                    <div className="mid-chart">
                        <LineChart 
                            className='threate-level'
                            data={{
                                axisData: ['site1(www.baidu.com)', 'site1(www.baidu.com)', 'site1(www.baidu.com)', 'site1(www.baidu.com)'],
                                seriesData: [1, 2, 3, 4]
                            }}
                            />
                    </div>
                </section>
                <section className="footer-list-wrapper">
                    <div className="first-list footer-list">
                        <EventFacts 
                            title={eventFacts.title}
                            subTitle={eventFacts.subTitle}
                            facts={eventFacts.facts}
                            />
                    </div>
                    <div className="second-list footer-list">
                        <LevelPieChart 
                            className='level-chart'
                            title='威胁等级分布'
                            />
                    </div>
                    <div className="third-list footer-list">
                        <XssNumber 
                            data={{
                                axisData: ['site1', 'site1', 'site1', 'site1'],
                                seriesData: [11, 22, 31, 43]
                            }}
                            className='xss-nubmer-chart'
                            />
                    </div>
                    <div className="fourth-list footer-list">
                        <ScrollTable 
                            className='safe-site'
                            title='安全站点'
                            />
                    </div>
                </section>
            </div>
        );
    }
}