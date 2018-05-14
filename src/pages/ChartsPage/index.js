import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import WeaknessList from '../../containers/WeaknessList';
import EventFacts from '../../components/EventFacts';
import VisualHeader from './components/VisualHeader';
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

export class ChartsPage extends React.Component {
    static propTypes = {
        xssFinder: PropTypes.object.isRequired
    }

    _getLevelSites = sites => {
        const levelSites = sites.reduce((level, site) => {
            if(site.weakness === 1) {
                level.low += 1
            }
            if(site.weakness === 2) {
                level.medium += 1
            }
            if(site.weakness >= 3) {
                level.high += 1
            }
            return level
        }, {
            high: 0,
            medium: 0,
            low: 0,
        })
    
        return [
            {value: levelSites.high, name:'高危站点'},
            {value: levelSites.medium, name:'中危站点'},
            {value: levelSites.low, name:'低危站点'}
        ].filter(d => d.value)
    }

    render() {
        const { sites } = this.props.xssFinder.toJS()
        const levelSites = this._getLevelSites(sites)
        console.log(levelSites)

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
                        <EventFacts 
                            title={eventFacts.title}
                            subTitle={eventFacts.subTitle}
                            facts={eventFacts.facts}
                            />
                        <LevelPieChart 
                            className='level-chart'
                            title='威胁等级分布'
                            data={levelSites}
                            />
                        <XssNumber 
                            data={{
                                axisData: ['site1', 'site1', 'site1', 'site1'],
                                seriesData: [11, 22, 31, 43]
                            }}
                            className='xss-nubmer-chart'
                            />
                        <ScrollTable 
                            className='safe-site'
                            title='安全站点'
                            />
                </section>
            </div>
        );
    }
}

export default connect(
    ({
        xssFinder
    }) => ({
        xssFinder
    }),
    null
)(ChartsPage)