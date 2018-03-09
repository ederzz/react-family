import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

    handleSearch = e => {
        if(e.keyCode === 13) {
            this.props.xssActions.fetchAllSites();
        }
    }

    render() {
        const {
            xssFinder,
            xssActions
        } = this.props;

        console.log(xssFinder.toJS(), xssActions);

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
                <div className="site-container">
                    <SiteBar 
                        status="safe"
                        url="www.baidu.com"
                        />
                </div>
                
            </section>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XssFinder);