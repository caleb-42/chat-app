import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import AuthRoute from '../backend/auth';
import { useAppSelector } from '../redux/hooks';

export default function PrivateRoute(props: any) {
  const { user } = useAppSelector(({ auth }) => auth)

  const Router = useHistory();

  React.useEffect(() => {
    AuthRoute.win = window;
    if (!user) Router.replace('/auth');
  }, [user, Router]);

  return <Route {...props} />;
}
