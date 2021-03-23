import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute(props) {
  const { component: Component, ...allProps } = props;
  return (
    <Route
      {...allProps}
      render={(props) =>
        localStorage.getItem("isSubmitted") === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
