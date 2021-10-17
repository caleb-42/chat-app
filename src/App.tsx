import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector } from './redux/hooks';
import { Routes } from './Routes';
import './utils/app.css';

function App() {

  const { socket } = useAppSelector(({ tool }) => tool)

  useEffect(() => {
    return () => {
      console.log('ask')
      socket?.disconnect()
    }
  }, [socket])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
