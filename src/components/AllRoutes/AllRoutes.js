import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Home/Home";
import ThankYou from "../ThankYou/ThankYou";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute path="/thank-you" component={ThankYou} />
    </Switch>
  );
}
