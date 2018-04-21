
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import App from './containers/App';
import ChartsPage from './pages/ChartsPage';
import DataAnalysis from './containers/DataAnalysis';
import ScrollTable from './components/ScrollTable';

const routes = (
    <HashRouter>
        <Switch className="main">
            <Route path="/view" component={ ChartsPage } exact />
            <Route path="/analysis" component={ DataAnalysis } exact />
            <Route path="/scroll" component={ ScrollTable } exact />
            <Route path="/" component={ App } />
        </Switch>
    </HashRouter>
);

export default routes;