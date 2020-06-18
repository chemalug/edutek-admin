import React from "react";
import { Link } from "react-router-dom";

const MenuDashboard = (props) => {
  return (
    <div className="col s12">
      <div className="container">
        <div id="cards-extended">
          <div className="card">
            <div className="card-content">
              <div>
                <h4 className="card-title">
                  Gradient Card &amp; Gradient Card With Analytics
                </h4>
                <p>
                  Here is the gradient card with flat image for all gradient
                  classes please check
                  <a href="css-color.html" target="_blank">
                    {"{"}" "{"}"}
                    css-color.html
                  </a>
                  .
                </p>
                <div className="row">
                  <div className="col s12 m3">
                    <Link to="/dashboard/schools">
                      <div className="card gradient-shadow gradient-45deg-light-blue-cyan border-radius-3">
                        <div className="card-content center">
                          <img
                            src={require("assets/images/icon/school.png")}
                            alt="images"
                            className="width-40"
                          />
                          <h5 className="white-text lighten-4">Colegios</h5>
                          <p className="white-text lighten-4">
                            Administrar colegios
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m3">
                    <Link to="/dashboard/profesor">
                      <div className="card gradient-shadow gradient-45deg-amber-amber border-radius-3">
                        <div className="card-content center">
                          <img
                            src={require("assets/images/icon/professor.png")}
                            alt="images"
                            className="width-40"
                          />
                          <h5 className="white-text lighten-4">Profesores</h5>
                          <p className="white-text lighten-4">
                            Administrar profesores
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col s12 m3">
                    <div className="card gradient-shadow gradient-45deg-red-pink border-radius-3">
                      <div className="card-content center">
                        <img
                          src="../../../app-assets/images/icon/laptop.png"
                          alt="images"
                          className="width-40"
                        />
                        <h5 className="white-text lighten-4">40% Off</h5>
                        <p className="white-text lighten-4">On apple macbook</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m3">
                    <div className="card gradient-shadow gradient-45deg-green-teal border-radius-3">
                      <div className="card-content center">
                        <img
                          src="../../../app-assets/images/icon/bowling.png"
                          alt="images"
                          className="width-40"
                        />
                        <h5 className="white-text lighten-4">60% Off</h5>
                        <p className="white-text lighten-4">
                          On any video game
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDashboard;