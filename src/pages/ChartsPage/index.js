import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import WeaknessList from '../../containers/WeaknessList';
import EventFacts from '../../components/EventFacts';
import VisualHeader from './components/VisualHeader';
import LevelPieChart from '../../components/LevelPieChart';
import XssNumber from '../../components/XssNumber';
import ScrollTable from '../../components/ScrollTable';
import LineChart from '../../components/LineChart';
import {
    eventFacts,
    header
} from './config';
import './style.less';
import * as PlatformActions from './actions'

export class ChartsPage extends React.Component {
    static propTypes = {
        xssFinder: PropTypes.object.isRequired,
        visualPlatform: PropTypes.object.isRequired,
        platformActions: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const { platformActions } = this.props
        platformActions.getWeaknessList()
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
            {value: levelSites.high, name:'高危页面'},
            {value: levelSites.medium, name:'中危页面'},
            {value: levelSites.low, name:'低危页面'}
        ].filter(d => d.value)
    }

    _getXssNumber = sites => {
        const xssSite = sites.filter(site => site.weakness)
        return {
            axisData: xssSite.map((site, i) => `site${i}(${site.url})`),
            seriesData: xssSite.map(site => site.weakness)
        }
    }

    _getLineChartData = sites => ({
        axisData: sites.map((site, i) => `site${i}(${site.url})`),
        seriesData: sites.map(site => site.weakness)
    })

    _getSafeData = sites => sites.filter(site => site.weakness === 0).map(site => site.url)

    render() {
        const { filterWeaknessList } = this.props.platformActions
        const { sites } = this.props.xssFinder.toJS()
        const { weaknessList } = this.props.visualPlatform.toJS()
        const levelSites = this._getLevelSites(sites)
        const xssNumber = this._getXssNumber(sites)
        const lineChartData = this._getLineChartData(sites)
        const safeSites = this._getSafeData(sites)

        return (
            <div className="charts-page">
                <VisualHeader 
                    className="chart-header"
                    title={header.title}
                    subTitle={header.subTitle}
                    />
                <section className="chart-wrapper">
                    <div className="mid-list">
                        <WeaknessList 
                            onSearch={ filterWeaknessList }
                            xss={ weaknessList } />
                    </div>
                    <div className="mid-chart">
                        <LineChart 
                            className='threate-level'
                            data={lineChartData}
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
                            data={xssNumber}
                            title='xss数量'
                            className='xss-nubmer-chart'
                            />
                        <ScrollTable 
                            className='safe-site'
                            title='安全站点'
                            data={safeSites}
                            />
                </section>
            </div>
        );
    }
}

export default connect(
    ({
        xssFinder,
        visualPlatform
    }) => ({
        xssFinder,
        visualPlatform
    }),
    dispatch => ({
        platformActions: bindActionCreators(PlatformActions, dispatch)
    })
)(ChartsPage)