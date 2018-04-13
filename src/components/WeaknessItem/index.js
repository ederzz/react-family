import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

export default class WeaknessItem extends React.Component {

    static defaultProps = {
        className: null
    }

    static propTypes = {
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        className: PropTypes.string
    }

    render() {
        const {
            url,
            count,
            time,
            className
        } = this.props;

        return (
            <div className={classnames("weakness-item", className)}>
                <div
                    title={url} 
                    className="url"
                    >{ url }</div>
                <div className="count">xss漏洞个数 { count } 个</div>
                <div className="time">{ time }</div>
            </div>
        );
    }
}