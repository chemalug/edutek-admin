import React from "react";
import { db, firebase } from "fire/firebase";
import BrandHeader from "components/Headers/BrandHeader.admin";
import { Link } from "react-router-dom";

const isempty = require("is-empty");

const AddColegio = (props) => {
  const [colegio, setColegio] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    status: "activo",
    fecha_alta: firebase.database.ServerValue.TIMESTAMP,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setColegio({ ...colegio, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    if (isempty(colegio.nombre)) {
      alert("Falta información");
      return;
    }
    db.ref("/schools")
      .push()
      .set(colegio, (error) => {
        if (error) {
          alert("Data could not be saved " + error);
        } else {
          alert("Data saved succesfully");
        }
      });
  };

  const close = () => {
    console.log(props);
  };
  return (
    <div>
      <BrandHeader brandText={"Agregar institución"} />
      <div className="row">
        <div className="col s12 m3 l3"></div>
        <div className="col s12 m6 l6">
          <div id="validation" className="card card card-default">
            <div className="card-content">
              <div className="row">
                <h4 className="card-title"> Agregar institución</h4>
              </div>
              <form noValidate onSubmit={onSubmit}>
                <div className="row">
                  <div className="input-field col s11">
                    <i className="material-icons prefix">edit</i>
                    <input
                      onChange={onChange}
                      value={colegio.nombre}
                      id="nombre"
                      name="nombre"
                      type="text"
                      className="validate"
                      placeholder="Nombre de la institución"
                    />
                    <label htmlFor="Nombre" className="active">
                      Nombre
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s11">
                    <i className="material-icons prefix">email</i>
                    <input
                      onChange={onChange}
                      value={colegio.email}
                      id="email"
                      name="email"
                      type="email"
                      className="validate"
                      placeholder="Email de la institución"
                    />
                    <label htmlFor="Email" className="active">
                      Email
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s11">
                    <i className="material-icons prefix">phone</i>
                    <input
                      onChange={onChange}
                      value={colegio.telefono}
                      id="telefono"
                      name="telefono"
                      type="number"
                      className="validate"
                      placeholder="Teléfono de la institución"
                    />
                    <label htmlFor="telefono" className="active">
                      Teléfono
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s11">
                    <i className="material-icons prefix">edit_location</i>
                    <textarea
                      onChange={onChange}
                      value={colegio.direccion}
                      id="direccion"
                      name="direccion"
                      className="materialize-textarea"
                      placeholder="Dirección de la institución"
                    ></textarea>
                    <label htmlFor="direccion" className="active">
                      Dirección
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col-s12">
                    <button
                      className="btn cyan waves-effect waves-light"
                      type="submit"
                    >
                      Enviar <i className="material-icons right">send</i>
                    </button>{" "}
                    {"   "}
                    <button
                      className="btn red waves-effect waves-light"
                      type="button"
                      onClick={props.history.goBack}
                    >
                      Cancelar <i className="material-icons right">close</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddColegio;
