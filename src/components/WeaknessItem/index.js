import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

const WeaknessItem = ({
    url,
    count,
    time,
    className
}) => (
        <div className={classnames("weakness-item", className)}>
            <div
                title={url} 
                className="url"
                >{ url }</div>
            <div className="count">xss漏洞个数 { count } 个</div>
            <div className="time">{ time }</div>
        </div>
    );

WeaknessItem.defaultProps = {
    className: null
}

WeaknessItem.propTypes = {
    url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default WeaknessItem;
