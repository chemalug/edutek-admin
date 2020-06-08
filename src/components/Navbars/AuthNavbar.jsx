import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand } from "reactstrap";
import { AuthContext } from "utils/AuthProvider";

const AuthNavbar = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <></>;
  }
  return (
    <Navbar className="navbar-fixed login-bg">
      <Nav className="z-depth-0 ">
        <div className="nav-wrapper">
          <Link
            to="/"
            style={{
              fontFamily: "monospace",
            }}
            className="col s5 brand-logo center"
          >
            <i className="material-icons">code</i>
            Edutek
          </Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default AuthNavbar;

/*

*/
