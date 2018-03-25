import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Progress } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SiteBar from '../../components/SiteBar';
import './style.less';
import * as actions from './actions';

const mapStateToProps = ({ xssFinder }) => ({ xssFinder });
const mapDispatchToProps = dispatch => ({
    xssActions: bindActionCreators(actions, dispatch)
});

class XssFinder extends React.Component {

    static defaultProps = {}

    static propTypes = {
        xssFinder: PropTypes.object.isRequired,
        xssActions: PropTypes.object.isRequired
    }

    constructor() {
        super();
        this.state = {
            loading: false,
            percent: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        const {
            sites
        } = nextProps.xssFinder.toJS();
        if(sites.length > 0) {
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
        return true;
    }

    handleSearch = e => {
        if(e.keyCode === 13) {
            this.props.xssActions.fetchAllSites();
            this.setState({
                percent: 0,
                loading: true
            });
            this.timer = setInterval(() => {
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
            xssFinder,
            xssActions
        } = this.props;

        const {
            sites
        } = xssFinder.toJS();

        return (
            <section className="xss-container">
                <h1> 
                    为了更好地互联网 
                    <a href="http://http://www.anquan.us/" target="_blank" rel="noopener noreferrer"> 
                        for better internet.
                    </a> 
                </h1>

                <div className="search">
                    <input 
                        type="text"
                        onKeyDown={this.handleSearch}
                        />    
                    <div className="close">
                        <span className="front"></span>
                        <span className="back"></span>
                    </div> 
                </div>
                <div className={classnames("loading", {
                    visible: this.state.loading,
                    hide: !this.state.loading
                })}>
                    <Progress percent={this.state.percent} />
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
                <div className="btn-container">
                    <button className="build-chart">一键生成可视化图表</button>
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XssFinder);