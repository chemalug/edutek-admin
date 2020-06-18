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
              <span> {brandText} </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
