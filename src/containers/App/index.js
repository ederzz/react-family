import React, { Component } from 'react'
import { 
    Route,
    Link
 } from 'react-router-dom'
import {
    Icon,
    Layout
} from 'antd'
import classnames from 'classnames'
import ReactAplayer from 'react-aplayer'

import Home from '../Home'
import XssFinder from '../XssFinder'
import DataView from '../DataView'
import Form from '../Form'
import HoverAnimation from '../../components/HoverAnimation'
import SiderBar from '../../components/SiderBar'
import iconSrc from '../../static/dun.svg'
import './style.less'

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

    onPlay = () => {
        console.log('on play')
    }

    onPause = () => {
        console.log('on pause')
    }

    // example of access aplayer instance
    onInit = ap => {
        this.ap = ap
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

        const props = {
            theme: '#F57F17',
            lrcType: 3,
            fixed: true,
            mini: true,
            listFolded: true, // 播放列表折叠
            audio: [
                {
                    name: '光るなら',
                    artist: 'Goose house',
                    url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
                    cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
                    lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
                    theme: '#ebd0c2'
                },
                {
                    name: '光なら',
                    artist: 'Goose house',
                    url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
                    cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
                    lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
                    theme: '#ebd0c2'
                },
            ]
        }

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
                                <Link to="/xssIndex">Xss Platform</Link>
                            </div>
                        </Header>
                        <Content className="app-content">
                            <Route path='/' component={ Home } exact={true} />
                            <Route path='/xss' component={ XssFinder } exact={true} />
                            <Route path='/chart' component={ DataView } exact={true} />
                            <Route path='/hover' component={ HoverAnimation } exact={true} />
                            <Route path='/form' component={ Form } exact={true} />
                        </Content>
                        <ReactAplayer
                            {...props}
                            onInit={this.onInit}
                            onPlay={this.onPlay}
                            onPause={this.onPause}
                            />
                    </Layout>
                </Layout>
            </div>
        )
    }
}
