import React, { useContext, useState } from "react";
import { Switch } from "react-router-dom";
import { AuthContext } from "utils/AuthProvider";

import { db } from "fire/firebase";
//import Dashboard from "views/dashboard/Dashboard";
import PrivateRoute from "utils/PrivateRoute";
import AdminDashboard from "views/dashboard/admin/admin.dashboard";

const RoutePages = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    db.ref(`/users/${currentUser.uid}`).once("value", (user) => {
      setIsAdmin(user.val().info.role.isAdmin);
    });
    if (isAdmin) {
      return (
        <div>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={AdminDashboard} />
          </Switch>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
};

export default RoutePages;
