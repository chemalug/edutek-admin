import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Sidebar from "components/Sidebars/Sidebar";

import routes from "routes/admin.routes";
import HeaderAdmin from "components/Headers/Header.admin";

const AdminDashboard = (props) => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
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
      <Sidebar/>
    </div>
  );
};

export default AdminDashboard;
