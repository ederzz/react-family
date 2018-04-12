import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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

        /**增加下侧设计栏 将搜索框和图标和列表整合 */
        return (
            <div className="app">

                <Layout>
                    <Sider collapsed={collapsed}>
                        <img
                            className={classnames('xss-icon', {
                                "sys-icon-collapsed" : collapsed,
                                "sys-icon-uncollapsed": !collapsed
                            })} 
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
                            <div className="user">
                            <Icon type='user' />
                                <span>神以灵</span>
                            </div>
                        </Header>
                        <Content className="app-content">
                            <Route path='/' component={ Home } exact={true} />
                            <Route path='/xss' component={ XssFinder } exact={true} />
                            <Route path='/chart' component={ DataView } exact={true} />
                        </Content>
                    </Layout>
                </Layout>
                
                {/* <div className="content">
                    <header>
                        
                    </header>
                    <div className="app-content">
                        
                    </div>
                </div> */}
            </div>
        )
    }
}
