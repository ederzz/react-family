import React from 'react'
import { HashRouter } from 'react-router-dom'
import { route } from 'react-router'

import App from './containers/App'
import Route from 'react-router/Route';

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory();


const routes = (
    <HashRouter>
        <Route path="/" component={ App } />
    </HashRouter>
);

export default routes;