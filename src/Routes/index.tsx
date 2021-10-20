import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRoute from '../backend/auth';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setAuth } from '../redux/slices/auth.slice';
import PrivateRoute from '../utils/privateRoute';
import PublicRoute from '../utils/publicRoute';
import LoadPage from './LoadPage';

const AuthPage = lazy(() => import('./Auth'));
const ChatPage = lazy(() => import('./Chat'));
const HomePage = lazy(() => import('./Home'));

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
		<Suspense fallback={<LoadPage />}>
			<Switch>
				<PublicRoute exact path="/auth" component={AuthPage} />
				<PrivateRoute path="/chat" component={ChatPage} />
				<PrivateRoute path="/" component={HomePage} />
			</Switch>
		</Suspense>
	</Router>);
};