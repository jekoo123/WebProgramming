import "./App.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

//import const component
import Header from "./Component/Header";
//import pages
import Proposal from "./Pages/Proposal";
import Main from "./Pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/proposal" element={<Proposal />} />
        {/* <Route exact path="/team" element={<Team />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
