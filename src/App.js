import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "utils/AuthProvider";
import PrivateRoute from "utils/PrivateRoute";

import AuthNavbar from "components/Navbars/AuthNavbar";
import LandingPage from "views/Landing/LandingPage";
import LoginPage from "views/auth/Login";
import RegisterPage from "views/auth/Register";
import Dashboard from "views/dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AuthNavbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
/*

<Switch
        <PrivateRoute exact path="/dashboard" component{RoutePage}>
        </Switch>
*/
