import React, { Component } from 'react';
import { 
    Route,
    Link
 } from 'react-router-dom';
import {
    Icon,
    Layout
} from 'antd';
import classnames from 'classnames';
import SiderBar from '../../components/SiderBar';
import './style.less'

import Home from '../Home';
import XssFinder from '../XssFinder';
import DataView from '../DataView';
import iconSrc from '../../static/dun.svg';
import HoverAnimation from '../../components/HoverAnimation';

const {
    Header,
    Sider,
    Content
} = Layout;

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        if(this.state.collapsed) {
            this.setState({
                collapsed: false
            });
        } else {
            this.setState({
                collapsed: true
            });
        }
    }

    render() {
        const {
            collapsed
        } = this.state;

        return (
            <div className="app">

                <Layout>
                    <Sider collapsed={collapsed}>
                        <img
                            className={classnames('xss-icon', {
                                "sys-icon-collapsed" : collapsed,
                                "sys-icon-uncollapsed": !collapsed
                            })} 
                            alt='icon'
                            src={iconSrc} />
                        <SiderBar 
                            className="side-menu"
                            collapsed={this.state.collapsed}
                            />
                    </Sider>
                    <Layout className="content">
                        <Header>
                            <Icon 
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} 
                                onClick={this.toggle}
                                style={{ lineHeight: '64px' }}
                                />
                            <div className="entry">
                                <Link to="/view">Xss Platform</Link>
                            </div>
                        </Header>
                        <Content className="app-content">
                            <Route path='/' component={ Home } exact={true} />
                            <Route path='/xss' component={ XssFinder } exact={true} />
                            <Route path='/chart' component={ DataView } exact={true} />
                            <Route path='/hover' component={ HoverAnimation } exact={true} />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
