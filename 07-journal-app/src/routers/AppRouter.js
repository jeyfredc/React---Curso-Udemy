import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { Authrouter } from "./Authrouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route 
          path="/auth" 
          component={Authrouter} 
          />

          <Route 
          exact path="/" 
          component={JournalScreen} 
          />

        <Redirect to="/auth/login"/>

        </Switch>
      </div>
    </Router>
  );
};
