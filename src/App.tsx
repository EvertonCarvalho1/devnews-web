import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import AppProvider from './hooks/index'
import Routes from "./routes";


export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </>
  );
};

