
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'

import App from './containers/App'

const routes = (
    <HashRouter>
        <Route path="/" component={ App } />
    </HashRouter>
);

export default routes;