import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import routes from './routes'
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';

const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // 使用chrome redux工具
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), reduxDev)
);

ReactDOM.render(
    <Provider store={store}>
        { routes }
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
