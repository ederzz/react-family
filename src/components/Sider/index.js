import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button, Switch } from 'antd';
import classnames from 'classnames';

import { menu as allMenu } from '../../constants';
import './style.less';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const mapStateToProps = ({AppReducer}) => ({
    AppReducer
})

export class Sider extends React.Component {
    static defaultProps = {}

    static propTypes = {}

    constructor() {
        super();
        this.state = {
            collapsed: false,
            theme: 'dark',
            current: 1,
            mode: 'vertical' 
        }
    }

    changeTheme = (val) => {
        this.setState({
            theme: val ? 'dark' : 'light',
        });
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: this.state.collapsed ? 'inline' : 'vertical'
        });
    }

    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {
        const { AppReducer, className } = this.props;
        console.log(AppReducer.toJS());

        return (
            <div className={classnames("side-bar", className)}>
                <Switch 
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    />
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={this.state.mode}
                    inlineCollapsed={this.state.collapsed}
                >
                    {
                        allMenu.map(menu => {
                            if(menu.childrens && menu.childrens.length) {
                                return (
                                    <SubMenu key={menu.url} title={<span><Icon type={ menu.icon } /><span>{ menu.name }</span></span>}>
                                        {
                                            menu.childrens.map(child => (
                                                <Menu.Item key={child.url}>
                                                    <Link to={`/${child.url}`}>{ child.name }</Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </SubMenu>
                                )
                            }

                            return (
                                <Menu.Item key={menu.url}>
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

export default connect(mapStateToProps, null)(Sider)