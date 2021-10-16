import React, { useContext } from 'react';
import './App.css';
import AuthRoute from './backend/auth';
import CButton from './components/atoms/Button';
import CTextField from './components/atoms/TextField';
import logo from './logo.svg';
import { User } from './models/Auth';
import { context } from './utils/context';

function App() {
  const store = useContext(context);

  React.useEffect(() => {
    AuthRoute.currentUser().then((user) => {
      store.setUser(user as User);
    }).catch(() => {
      console.log("no user available")
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CTextField mb="1rem" />

        <CButton props={{ mb: "1rem" }} variant="solid" colorScheme="primary" onClick={() => {
          AuthRoute.signUp("ewere", "password")
        }}>Sign in</CButton>

        <CButton props={{ mb: "1rem", }} onClick={() => {
          AuthRoute.signOut()
        }}>Signout</CButton>

        <CButton variant="solid" colorScheme="primary" onClick={() => {
          AuthRoute.currentUser()
        }}>Current User</CButton>
      </header>
    </div>
  );
}

export default App;
