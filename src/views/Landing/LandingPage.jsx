import React from "react";
import { Link } from "react-router-dom";
require("assets/css/pages/login.css");
const LandingPage = () => {
  return (
    <div className="login-bg ">
      <div className="row">
        <div className="col s12 center-align">
          <div id="login-page" className="row">
            <div className="container">
              <h4 className="white-text">
                <b>Edutek</b> plataforma Elearning
              </h4>
              <p className="flow-text white-text">
                Accede a los recursos pedagógicos, con tus credenciales
                asignadas.
              </p>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                  }}
                  className="btn btn-large waves-effect waves-light hoverable orange accent-3"
                >
                  Registro
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                  }}
                  className="btn btn-large waves-effect waves-light hoverable green accent-3"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

/*

<div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4 className="white-text">
            <b>Edutek</b> plataforma Elearning
          </h4>
          <p className="flow-text grey-text text-darken-1">
            Accede a los recursos pedagógicos, con tus credenciales asignadas.
          </p>
          <br />
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable orange accent-3"
            >
              Registro
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable green accent-3"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
*/
