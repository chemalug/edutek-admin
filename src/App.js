import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "utils/AuthProvider";
import PrivateRoute from "utils/PrivateRoute";

import AuthNavbar from "components/Navbars/AuthNavbar";
import LandingPage from "views/Landing/LandingPage";
import LoginPage from "views/auth/Login";
import RegisterPage from "views/auth/Register";

import RoutePages from "views/RoutePages";
//import ColegiosPage from "./views/dashboard/admin/colegios/index.colegio";
//import AdminDashboard from "./views/dashboard/admin/admin.dashboard";

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
            <PrivateRoute path="/dashboard" component={RoutePages} />
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
