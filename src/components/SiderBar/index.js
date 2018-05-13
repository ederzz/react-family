import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { menu as allMenu } from '../../constants';
import './style.less';
const SubMenu = Menu.SubMenu;


export class SiderBar extends React.Component {
    static defaultProps = {
        className: null
    }

    static propTypes = {
        className: PropTypes.string,
        collapsed: PropTypes.bool.isRequired
    }

    constructor() {
        super();
        this.state = {
            theme: 'dark',
            current: 1,
        };
    }

    // 待处理
    changeTheme = (val) => {
        this.setState({
            theme: val ? 'dark' : 'light',
        });
    }

    render() {
        const { className, collapsed } = this.props;

        return (
            <div className={classnames("side-bar", className)}>
                {/* <Switch 
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    /> */}
                <Menu
                    theme={this.state.theme}
                    defaultSelectedKeys={['home']}
                    defaultOpenKeys={['demos']}
                    mode='inline'
                    inlineCollapsed={collapsed}
                >
                    {
                        allMenu.map(menu => {
                            if(menu.childrens && menu.childrens.length) {
                                return (
                                    <SubMenu key={menu.key} title={<span><Icon type={ menu.icon } /><span>{ menu.name }</span></span>}>
                                        {
                                            menu.childrens.map(child => (
                                                <Menu.Item key={child.key}>
                                                    <Link to={`/${child.url}`}>{ child.name }</Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </SubMenu>
                                )
                            }

                            return (
                                <Menu.Item key={menu.key}>
                                    <Link to={`/${menu.url}`}>
                                        <Icon type={ menu.icon } /><span>{ menu.name }</span>
                                    </Link>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        );
    }
}
export default SiderBar