import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Route, Switch } from "react-router";
import ThankYou from "./components/ThankYou/ThankYou";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/go-kwik/" component={Home} />
          <ProtectedRoute
            exact
            path="/go-kwik/thank-you"
            component={ThankYou}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
