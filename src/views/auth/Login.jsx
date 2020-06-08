import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "fire/firebase";
import { AuthContext } from "utils/AuthProvider";
const LoginPage = (props) => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    errors: {},
  });
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(authData.email, authData.password);
  };

  return (
    <div className="login-bg">
      <div className="row">
        <div className="col s12">
          <div className="container">
            <div id="login-page" className="row">
              <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                <form className="login-form" noValidate onSubmit={onSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <h5 className="ml-4">Ingreso</h5>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">
                        person_outline
                      </i>
                      <input
                        onChange={onChange}
                        value={authData.email}
                        id="email"
                        name="email"
                        type="email"
                      />
                      <label htmlFor="username" className="center-align">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">lock_outline</i>
                      <input
                        onChange={onChange}
                        value={authData.password}
                        id="password"
                        name="password"
                        type="password"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  {/*<div className="row">
                  <div className="col s12 m12 l12 ml-2 mt-1">
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>Remember Me</span>
                      </label>
                    </p>
                  </div>
                </div>*/}
                  <div className="row">
                    <div className="input-field col s12">
                      <button
                        type="submit"
                        className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m6 l6">
                      <p className="margin medium-small">
                        <a href="user-register.html">Registrarme ahora!</a>
                      </p>
                    </div>
                    <div className="input-field col s6 m6 l6">
                      <p className="margin right-align medium-small">
                        <a href="user-forgot-password.html">
                          Olvidaste tu password ?
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="content-overlay" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
