
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'

import App from './containers/App';
import ChartsPage from './pages/ChartsPage';

const routes = (
    <HashRouter>
        <div className="main">
            <Route path="/" component={ App } exact={ true } />
            <Route path="/view" component={ ChartsPage } exact={ true } />
        </div>
    </HashRouter>
);

export default routes;