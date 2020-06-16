import React from "react";
import MaterialTable from "material-table";

import { db } from "fire/firebase";
import AddColegio from "./add.colegio";

class ColegiosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isEdit: false,
      columns: [
        { title: "Nombre", field: "nombre" },
        { title: "Email", field: "email" },
        { title: "Teléfono", field: "telefono", type: "numeric" },
        { title: "Dirección", field: "direccion" },
        { title: "Status", field: "status" },
        { title: "uid", field: "uid", hidden: true },
      ],
      rows: [],
      estado: [],
    };
  }

  componentDidMount() {
    let data = [];
    db.ref("/schools").on("value", (snapShot) => {
      this.setState((prevState) => {
        return { rows: [] };
      });
      data = [];
      if (snapShot.exists()) {
        snapShot.forEach((child) => {
          let a = child.val();
          let aux = {
            nombre: a.nombre,
            email: a.email,
            telefono: a.telefono,
            direccion: a.direccion,
            status: a.status,
            uid: child.key,
          };
          data.push(aux);
        });
        this.setState((prevState) => {
          return { rows: [...prevState.rows, ...data] };
        });
      }
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <div
          id="breadcrumbs-wrapper"
          style={{
            backgroundImage:
              "url(" + require("assets/images/gallery/breadcrumb-bg.jpg") + ")",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col s12 m6 l6">
                <h5 className="breadcrumbs-title mt-0 mb-0 white-text">
                  <span> Administración de colegios</span>
                </h5>
              </div>
              <div className="col s12 m6 l6 right-align-md">
                <ol className="breadcrumbs mb-0">
                  <li className="breadcrumb-item active">
                    <button
                      className="waves-effect waves-light btn gradient-45deg-purple-deep-orange "
                      onClick={this.toggle}
                    >
                      {!this.state.modal ? null : (
                        <AddColegio
                          modal={this.state.modal}
                          toggle={this.toggle}
                        />
                      )}
                      Agregar colegio
                    </button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12">
          <div className="container">
            <div className="section">
              <div className="card">
                <div className="card-content">
                  {/* Aqui va el contenido */}
                  <MaterialTable
                    title="Listado de colegioss"
                    columns={this.state.columns}
                    data={this.state.rows}
                    editable={{
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            if (oldData) {
                              db.ref(`/schools/${oldData.uid}`).set(newData);
                            }
                          }, 600);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            db.ref(`/schools/${oldData.uid}`).remove();
                          }, 600);
                        }),
                    }}
                    options={{
                      actionsColumnIndex: -1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColegiosPage;
