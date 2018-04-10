
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import App from './containers/App';
import ChartsPage from './pages/ChartsPage';
import ScrollTable from './components/ScrollTable';
import WeaknessList from './containers/WeaknessList';
import DataAnalysis from './containers/DataAnalysis';

const routes = (
    <HashRouter>
        <Switch className="main">
            <Route path="/" component={ App } exact />
            <Route path="/view" component={ ChartsPage } exact />
            <Route path="/scroll" component={ ScrollTable } exact />
            <Route path="/analysis" component={ DataAnalysis } exact />
        </Switch>
    </HashRouter>
);

export default routes;