import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from '../utils/privateRoute';
import PublicRoute from '../utils/publicRoute';
import AuthPage from './Auth';
import ChatPage from './Chat';
import HomePage from './Home';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<PublicRoute exact path="/auth" component={AuthPage} />
				<PrivateRoute path="/chat" component={ChatPage} />
				<PrivateRoute path="/" component={HomePage} />
			</Switch>
		</Router>
	);
};