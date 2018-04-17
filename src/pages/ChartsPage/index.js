import React from 'react';
import WeaknessList from '../../containers/WeaknessList';
import EventFacts from '../../components/EventFacts';
import VisualHeader from '../../components/VisualHeader';
import LevelPieChart from '../../components/LevelPieChart';
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
                    <div className="second-list footer-list">
                        <LevelPieChart 
                            className='level-chart'
                            title='威胁等级分布'
                            />
                    </div>
                    <div className="third-list footer-list">列表3</div>
                    <div className="fourth-list footer-list">列表4</div>
                </section>
            </div>
        );
    }
}