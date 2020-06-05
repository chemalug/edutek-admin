import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const RegisterPage = (props) => {
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: authData.name,
      email: authData.email,
      password: authData.password,
      password2: authData.password2,
    };

    //this.props.registerUser(newUser, this.props.history);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4 className="white-text">
              <b>Registrar</b> a continuación
            </h4>
            <p className="grey-text text-lighten-3">
              ¿Ya tienes una cuenta? <Link to="/login">Ingresar</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={authData.name}
                id="name"
                name="name"
                type="text"
              />
              <label htmlFor="name">Nombre</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={authData.email}
                id="email"
                name="email"
                type="email"
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
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={authData.password2}
                id="password2"
                name="password2"
                type="password"
              />
              <label htmlFor="password2">Confirmar Password</label>
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
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegisterPage);
