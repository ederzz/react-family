/**
 * 路由
 * @authors Your Name (you@example.org)
 * @date    2017-12-11 14:19:01
 * @version $Id$
 */

import React from 'react'
import {
	Router,
	Route
} from 'react-router'
import HomePage from '../pages/HomePage.js';
import ChartsPage from '../pages/ChartsPage.js';


const routes = (
		<Router>
			<Route path="/" component={ HomePage } />
			<Route path="/view" component={ ChartsPage } />
		</Router>
	);
export default routes;