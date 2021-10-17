import React, { useContext } from 'react';
import './App.css';
import AuthRoute from './backend/auth';
import { Routes } from './Routes';
import LoadPage from './Routes/LoadPage';
import './utils/app.css';
import { ACTIONS, context } from './utils/context';

function App() {
  const store = useContext(context);

  const { user, dispatch, socket } = store;

  React.useEffect(() => {
    if (user) return;
    AuthRoute.currentUser().then(
      (res) => {
        dispatch(ACTIONS.SET_USER, res);
      },
      (err) => {
        dispatch(ACTIONS.SET_USER, null);
      }
    )
    /* return () => {
      socket?.disconnect();
    } */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <div className="App">
      {user === undefined ? <LoadPage /> : <Routes />}
    </div>
  );
}

export default App;
