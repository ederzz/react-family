import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sider from '../../components/Sider/index.js';
import './style.less'

import Home from '../Home';
import XssFinder from '../XssFinder';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Sider className="side-menu" />
                <div className="app-content">
                    <Route path='/' component={ Home } exact={true} />
                    <Route path='/xss' component={ XssFinder } exact={true} />
                </div>
            </div>
        )
    }
}
