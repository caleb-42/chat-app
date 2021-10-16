import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import AuthRoute from '../backend/auth';
import { context } from './context';

export default function PublicRoute(props: any) {
  const store = useContext(context);

  const Router = useHistory();
  React.useEffect(() => {
    AuthRoute.win = window;
    if (store.user) Router.replace('/');
  }, [store.user, Router]);

  return <Route {...props} />;
}
