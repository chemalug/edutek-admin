import React from "react";
import { Switch } from "react-router-dom";

import Sidebar from "components/Sidebars/Sidebar";

import routes from "routes/admin.routes";
import HeaderAdmin from "components/Headers/Header.admin";

import PrivateRoute from "utils/PrivateRoute";

const AdminDashboard = (props) => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <PrivateRoute
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Dashboard";
  };

  return (
    <div>
      <HeaderAdmin />
      <Sidebar routes={routes} />
      <div id="main">
        <div className="row">
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
