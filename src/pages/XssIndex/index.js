import React from 'react';
import XssHeader from './components/XssHeader';
import './style.less';

export default class XssIndex extends React.Component {
    render() {
        return (
            <div className="xss-index">
                <XssHeader />
            </div>
        );
    }
}