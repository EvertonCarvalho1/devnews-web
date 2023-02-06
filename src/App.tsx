import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import RoutesApp from "./routes";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesApp />
      </BrowserRouter>
    </>
  );
};
export default App;
