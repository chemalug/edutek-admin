import React from "react";
import { db, firebase } from "fire/firebase";

const isempty = require("is-empty");
//https://chemalug.github.io
const AddProfesor = (props) => {
  const buildPassword = () => {
    let password = "",
      allChars = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&?¿*-";
    for (let ma = 0; ma < 8; ma++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    return password;
  };
  const [profesor, setProfesor] = React.useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
    status: "activo",
    creado: "no",
    password: buildPassword(),
    fecha_alta: firebase.database.ServerValue.TIMESTAMP,
    role: "profesor",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setProfesor({ ...profesor, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      isempty(profesor.nombres) ||
      isempty(profesor.apellidos) ||
      isempty(profesor.email)
    ) {
      alert("Falta información");
      return;
    }

    const requestOptions = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profesor),
    };
    fetch("http://localhost:5000/users", requestOptions).then(
      async (response) => {
        const data = await response.json();
        if (response.ok) {
          db.ref("/profesores/" + data.uid).set(profesor, (error) => {
            db.ref("/users/" + data.uid).set(profesor);
            if (error) {
              alert("Data could not be saved " + error);
            } else {
              alert("Data saved succesfully");
            }
          });
        } else {
          alert(data.error.message);
        }
      }
    );

    //console.log(profesor);
  };

  return (
    <div className="col s12 m8 l8">
      <div
        id="form-with-validation"
        className="card card card-default scrollspy"
      >
        <div className="card-content">
          <h4 className="card-title">Agregar datos nuevos</h4>
          <form noValidate onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field col m6 s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  placeholder="Nombres"
                  type="text"
                  className="validate"
                  onChange={onChange}
                  value={profesor.nombres}
                  name="nombres"
                  id="nombres"
                />
                <label htmlFor="nombres" className="active">
                  Nombres
                </label>
              </div>
              <div className="input-field col m6 s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  placeholder="Apellidos"
                  type="text"
                  className="validate"
                  onChange={onChange}
                  value={profesor.apellidos}
                  name="apellidos"
                  id="apellidos"
                />
                <label htmlFor="apellidos" className="active">
                  Apellidos
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col m6 s6">
                <i className="material-icons prefix">mail</i>
                <input
                  placeholder="Email"
                  type="email"
                  className="validate"
                  onChange={onChange}
                  value={profesor.email}
                  name="email"
                  id="email"
                />
                <label htmlFor="email" className="active">
                  Email
                </label>
              </div>
              <div className="input-field col m6 s6">
                <i className="material-icons prefix">phone</i>
                <input
                  placeholder="Telefono"
                  type="text"
                  className="validate"
                  onChange={onChange}
                  value={profesor.telefono}
                  name="telefono"
                  id="telefono"
                />
                <label htmlFor="telefono" className="active">
                  Teléfono
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <p>
                  Al momento de guardar los datos del profesor, se estará
                  creando su usuario y contraseña para acceso a la plataforma.
                  firebase{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col m2"></div>
              <div className="input-field col m4 s12">
                <div className="input-field col s12">
                  <button
                    className="btn cyan waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    <i className="material-icons left">save</i> Guardar
                  </button>
                </div>
              </div>
              <div className="input-field col m4 s12">
                <div className="input-field col s12">
                  <button
                    className="btn red waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    <i className="material-icons left">close</i> Cancelar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfesor;
