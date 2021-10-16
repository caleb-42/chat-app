import React, { useContext } from 'react';
import './App.css';
import AuthRoute from './backend/auth';
import { Routes } from './Routes';
import LoadPage from './Routes/LoadPage';
import './utils/app.css';
import { context } from './utils/context';

function App() {
  const store = useContext(context);

  React.useEffect(() => {
    if(store.user !== undefined) return;
    AuthRoute.currentUser().then(
      (res) => {
        store.setUser(res);
      },
      (err) => {
        store.setUser(null);
      }
    );
  }, [store])

  return (
    <div className="App">
      {store.user === undefined ? <LoadPage /> : <Routes />}
    </div>
  );
}

export default App;
