import React from "react";
import { Switch, Link } from "react-router-dom";

import Sidebar from "components/Sidebars/Sidebar";

import routes from "routes/admin.routes";
import HeaderAdmin from "components/Headers/Header.admin";

import PrivateRoute from "utils/PrivateRoute";
import BrandHeader from "components/Headers/BrandHeader.admin";

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
      if (path === routes[i].layout + routes[i].path) {
        return routes[i].name;
      }
      /*if (path.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }*/
    }
    return "Dashboard";
  };

  return (
    <div>
      <HeaderAdmin />
      <Sidebar
        routes={routes}
        location={props.location}
        brandText={getBrandText(props.location.pathname)}
      />
      <div id="main">
        <div className="row">
          <BrandHeader brandText={getBrandText(props.location.pathname)} />

          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
