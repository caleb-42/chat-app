import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRoute from '../backend/auth';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setAuth } from '../redux/slices/auth.slice';
import PrivateRoute from '../utils/privateRoute';
import PublicRoute from '../utils/publicRoute';
import AuthPage from './Auth';
import ChatPage from './Chat';
import HomePage from './Home';
import LoadPage from './LoadPage';

export const Routes = () => {
	const { user } = useAppSelector(({ auth }) => auth)
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (user) return;
		AuthRoute.currentUser().then(
			(res) => {
				dispatch(setAuth(res));
			},
			(err) => {
				dispatch(setAuth(null));
			}
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch])
	return (user === undefined ? <LoadPage /> : <Router>
		<Switch>
			<PublicRoute exact path="/auth" component={AuthPage} />
			<PrivateRoute path="/chat" component={ChatPage} />
			<PrivateRoute path="/" component={HomePage} />
		</Switch>
	</Router>);
};