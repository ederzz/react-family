import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

export default class XssHeader extends React.Component {

    render() {
        return (
            <header className='xss-topbar'>
                <div className='topbar-title'>XSS漏洞检测器</div>
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
        );
    }
}