
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'

import App from './containers/App';
import ChartsPage from './pages/ChartsPage';
import ScrollTable from './components/ScrollTable';
import WeaknessList from './containers/WeaknessList';
import DataAnalysis from './containers/DataAnalysis';

const routes = (
    <HashRouter>
        <div className="main">
            <Route path="/" component={ App } exact={ true } />
            <Route path="/view" component={ ChartsPage } exact={ true } />
            <Route path="/scroll" component={ ScrollTable } exact={ true } />
            <Route path="/analysis" component={ DataAnalysis } exact={ true } />
        </div>
    </HashRouter>
);

export default routes;