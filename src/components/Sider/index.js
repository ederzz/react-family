import React from 'react';
import { connect } from 'react-redux'

import { Menu, Icon, Button, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const mapStateToProps = ({AppReducer}) => ({
    AppReducer
})

export class Sider extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            theme: 'dark',
            current: 1
        }
    }

    changeTheme = (val) => {
        this.setState({
            theme: val ? 'dark' : 'light',
        });
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {
        const { AppReducer } = this.props;
        console.log(AppReducer.toJS());

        return (
            <div>
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
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(Sider)