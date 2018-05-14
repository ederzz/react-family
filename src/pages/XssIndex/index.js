import React from 'react'
import { Progress } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import XssHeader from './components/XssHeader'
import SearchBar from './components/SearchBar'
import SiteBar from '../../components/SiteBar'
import './style.less'
import iconSrc from '../../static/dun.svg'
import * as XssActions from './actions'

export class XssIndex extends React.Component {

    static propTypes = {
        xssFinder: PropTypes.object.isRequired,
        xssActions: PropTypes.object.isRequired
    }

    state = {
        loading: false,
        percent: 0
    }

    componentWillReceiveProps(nextProps) {
        const {
            sites
        } = nextProps.xssFinder.toJS();

        if(sites) {
            clearInterval(this.timer);
            this.setState({
                percent: 100
            });

            setTimeout(() => {
                this.setState({
                    loading: false
                });
            }, 2000);
        }
    }

    handleSearch = e => {
        if(e.keyCode === 13) {
            this.props.xssActions.fetchAllSites(e.target.value);
            this.setState({
                percent: 0,
                loading: true
            });
            this.timer = setInterval(() => {
                if(this.state.percent === 100) {
                    return ;
                }
                let newPercent = Math.floor(this.state.percent + Math.random() * 3 + 1);
                newPercent = newPercent > 95 ? 95 : newPercent;
                this.setState({
                    percent: newPercent
                });
            }, 500);
        }
    }

    render() {

        const {
            xssActions
        } = this.props;

        const {
            sites
        } = this.props.xssFinder.toJS();

        let completedStatus = false
        if(sites && sites.length !== 0) {
            completedStatus = sites.reduce((status, site) => status && site.updated, true)
        }

        return (
            <div className="xss-index">
                <XssHeader completedStatus={completedStatus}/>
                <div className="xss-icon">
                    <img src={iconSrc} alt="xss" />
                </div>
                <SearchBar onSearch={ this.handleSearch } />
                <div className={classnames("loading", {
                    visible: this.state.loading,
                    hide: !this.state.loading
                })}>
                    <Progress 
                        className="progress-bar"
                        percent={this.state.percent} />
                </div>
                <div className="site-container">
                    {
                        sites.map(site => (
                            <SiteBar 
                                key={site.id}
                                status={site.status}
                                url={site.url}
                                handleClick={ () => {
                                    xssActions.updateSiteStatus(site.url, site.id);
                                } }
                                />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    ({ xssFinder }) => ({ xssFinder }),
    dispatch => ({
        xssActions: bindActionCreators(XssActions, dispatch)
    })
)(XssIndex)