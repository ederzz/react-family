import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import './style.less'

const HoverAnimation = ({
    className
}) => (
    <div className={classnames('hover-animation', className)}>
        <div className="hover-item">HOVER ITEMS</div>
        <div className="hover-item">HOVER ITEMS</div>
        <div className="hover-item">HOVER ITEMS</div>
        <div className="hover-item">HOVER ITEMS</div>
        <div className="hover-item">HOVER ITEMS</div>
        <div className="hover-item">HOVER ITEMS</div>
    </div>
)

HoverAnimation.defaultProps = {
    className: null
}

HoverAnimation.propTypes = {
    className: PropTypes.string
}

export default HoverAnimation;