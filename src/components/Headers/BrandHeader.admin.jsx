import React from "react";
import { Link } from "react-router-dom";

const BrandHeader = (props) => {
  const { brandText } = props;
  return (
    <div
      id="breadcrumbs-wrapper"
      style={{
        backgroundImage:
          "url(" + require("assets/images/gallery/breadcrumb-bg.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l6">
            <h5 className="breadcrumbs-title mt-0 mb-0 white-text">
              <span> brandText </span>
            </h5>
          </div>
          <div className="col s12 m6 l6 right-align-md">
            <ol className="breadcrumbs mb-0">
              <li className="breadcrumb-item active">
                <Link
                  className="waves-effect waves-light btn green "
                  to="/dashboard/schools/addSchool"
                >
                  Agregar colegio
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
