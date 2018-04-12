import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default class WeaknessItem extends React.Component {

    static defaultProps = {}

    static propTypes = {
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired
    }

    render() {
        const {
            url,
            count,
            time
        } = this.props;

        return (
            <div className="weakness-item">
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