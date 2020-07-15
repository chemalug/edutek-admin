import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { db } from "fire/firebase";

class ProfesorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Nombre", field: "nombres" },
        { title: "Apellidos", field: "apellidos" },
        { title: "Teléfono", field: "telefono", type: "numeric" },
        { title: "Dirección", field: "direccion" },
        { title: "Email", field: "email", editable: "never" },
        { title: "uid", field: "uid", hidden: true },
      ],
      rows: [],
    };
  }

  detailPanel() {
    return [
      {
        tooltip: "Mostrar colegios",
        render: (rowData) => {
          return <div>hh</div>;
        },
      },
    ];
  }

  componentDidMount() {
    let datos = [];
    db.ref("/profesores").on("value", (snapShot) => {
      this.setState((prevState) => {
        return { rows: [] };
      });
      datos = [];
      if (snapShot.exists()) {
        snapShot.forEach((child) => {
          let a = child.val();
          let aux = {
            nombres: a.nombres,
            apellidos: a.apellidos,
            telefono: a.telefono,
            direccion: a.direccion,
            email: a.email,
            uid: child.key,
          };
          datos.push(aux);
        });
        this.setState((prevState) => {
          return { rows: [...prevState.rows, ...datos] };
        });
      }
    });
  }
  render() {
    return (
      <div className="col s12">
        <div className="container">
          <div className="section">
            <div className="card">
              <div className="card-content">
                <div className="card-title right-align-md">
                  <Link
                    className="waves-effect waves-light btn green"
                    to={`${this.props.location.pathname}/addProfesor`}
                  >
                    Agregar profesor
                  </Link>
                </div>
                <div className="row">
                  <MaterialTable
                    title="Listado de profesores"
                    columns={this.state.columns}
                    detailPanel={this.detailPanel}
                    data={this.state.rows}
                    editable={{
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            if (oldData) {
                              db.ref(`/profesores/${oldData.uid}`).set(newData);
                              db.ref(`/users/${oldData.uid}`).set(newData);
                            }
                          }, 600);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            db.ref(`/profesores/${oldData.uid}`).remove();
                            db.ref(`/users/${oldData.uid}`).remove();
                          }, 600);
                        }),
                    }}
                    options={{ actionsColumnIndex: -1 }}
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

export default ProfesorPage;
