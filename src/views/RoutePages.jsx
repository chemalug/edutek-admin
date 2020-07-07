import React, { useContext, useState } from "react";
import { Switch } from "react-router-dom";
import { AuthContext } from "utils/AuthProvider";

import { db, auth } from "fire/firebase";
//import Dashboard from "views/dashboard/Dashboard";
import PrivateRoute from "utils/PrivateRoute";
import AdminDashboard from "views/dashboard/admin/admin.dashboard";

import M from "materialize-css";

const RoutePages = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useContext(AuthContext);

  M.AutoInit();

  if (currentUser.emailVerified) {
    db.ref(`/users/${currentUser.uid}`).once("value", (user) => {
      setIsAdmin(user.val().info.role);
    });
    if (isAdmin === "admin") {
      return (
        <div>
          <Switch>
            <PrivateRoute path="/dashboard" component={AdminDashboard} />
          </Switch>
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    props.history.push("/login");
    return <div>Email no se ha verificado</div>;
  }
};

export default RoutePages;
