import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
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

    auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((user) => {
        console.log(user);
      });
  };

  return (
    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4 className="white-text">
              <b>Inicia sesión</b> a continuación
            </h4>
            <p className="grey-text text-darken-1">
              ¿No tienes una cuenta? <Link to="/register">Registrarme</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={authData.email}
                id="email"
                name="email"
                type="email"
                className="white-text"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={authData.password}
                id="password"
                name="password"
                type="password"
                className="white-text"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable green accent-3"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
