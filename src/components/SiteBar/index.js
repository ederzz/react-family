import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'antd';

import './style.less';
import { statusTS } from './constants';
import load from '../../static/load.svg';
import done from '../../static/done.svg';

export default class SiteBar extends React.Component {
    static defaultProps = {
        className: null
    }

    static propTypes = {
        className: PropTypes.string,
        url: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            loading: true,
            request: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const {
            status
        } = nextProps;
        if(status !== 'not-sure') {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {
            className,
            url,
            status,
            handleClick
        } = this.props;

        const {
            loading,
            request
        } = this.state;

        return (
            <div className={classnames("site-bar-container", className)}>
                <img className={classnames('progress', {
                        show: request,
                        hide: !request
                    })} 
                    src={ loading ? load : done } 
                    />
                <div className={classnames("site-bar", {
                    "safe": status === 'safe',
                    "danger": status === 'danger',
                    "not-sure": status === 'not-sure' 
                })}>
                    <div 
                        className="site-status"
                        title='安全状态'
                        >{ statusTS[status] }</div>
                    <div 
                        className="site-url"
                        title={ url }
                        >{ url }</div>
                    <div 
                        title='扫描'
                        className="check-bh"
                        onClick={() => {
                            this.setState({
                                request: true
                            });
                            handleClick();
                        }}
                        >
                        <Icon type="search" />
                    </div>
                    <div 
                        title='删除'
                        className="delete-bh"
                        >
                        <Icon type="close" />
                    </div>
                </div>
            </div>
        );
    }
}