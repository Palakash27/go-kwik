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
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/thank-you" component={ThankYou} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
