import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'antd';

import './style.less';
import { statusTS } from './constants';

export default class SiteBar extends React.Component {
    static defaultProps = {
        className: null
    }

    static propTypes = {
        className: PropTypes.string,
        url: PropTypes.string.isRequired
    }

    render() {
        const {
            className,
            url,
            status
        } = this.props;

        return (
            <div className={classnames('site-bar', className)}>
                <div className={classnames("site-status", {
                    "safe": status === 'safe',
                    "danger": status === 'threate',
                    "not-sure": status === 'not-sure' 
                })}>{ statusTS[status] }</div>
                <div className="site-url">{ url }</div>
                <div className="check-bh">
                    <Icon type="search" />
                </div>
                <div className="delete-bh">
                    <Icon type="close" />
                </div>
            </div>
        );
    }
}