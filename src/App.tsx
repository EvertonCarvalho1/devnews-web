import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import RoutesApp from "./routes";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesApp />
      </BrowserRouter>
    </>
  );
};

