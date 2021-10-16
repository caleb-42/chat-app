import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseApp from './backend/firebase';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ContextProvider } from "./utils/context";

FirebaseApp();

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

