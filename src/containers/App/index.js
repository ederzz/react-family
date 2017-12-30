import React, { Component } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducer from '../../reducer'
import Sider from '../../components/Sider'

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // 使用chrome redux工具
const store = createStore(
    reducer,
    reduxDev
);

export default class App extends Component {
    render() {
        return (
            <div>
                <Sider />
            </div>
        )
    }
}
