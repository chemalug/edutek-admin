import React from "react";

class ColegiosPage extends React.Component {
  render() {
    console.log("entrp");

    return (
      <div
        id="breadcrumbs-wrapper"
        data-image={require("assets/images/gallery/breadcrumb-bg.jpg")}
      >
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l6">
              <h5 className="breadcrumbs-title mt-0 mb-0">
                <span> Administración de colegios</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColegiosPage;
