import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import AppProvider from './hooks/index'
import Routes from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from './styles/global';


export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

