import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './style.less'

const XssHeader = ({
     className
}) => (
        <header className={classnames('xss-topbar', className)}>
            <div className='topbar-title'>
                <span className="sub-title">INDEX</span>
                <span className="title">XSS漏洞检测器</span>
            </div>
            <div className='topbar-share'>
                <div className='anquan'>
                    为了更好地互联网
                    <a 
                        href='http://http://www.anquan.us/' 
                        target='_blank' 
                        rel='noopener noreferer'
                        >for better internet.</a>
                </div>
            </div>
        </header>
    )

XssHeader.defaultProps = {
    className: null
}

XssHeader.propTypes = {
    className: PropTypes.string
}

export default XssHeader