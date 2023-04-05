import './App.css';
import React from "react";
import proposal from "./pages/proposal";
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const  App= () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path = '/proposal' component={proposal}/>
        </Switch>
      </Router>
      <Header title="Main"/>

    </React.StrictMode>
  
  );
}

export default App;
