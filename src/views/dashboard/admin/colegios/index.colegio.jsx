import React from "react";
import MaterialTable from "material-table";

import { db } from "fire/firebase";

import { Link } from "react-router-dom";
import BrandHeader from "components/Headers/BrandHeader.admin";

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
        {
          title: "Status",
          field: "status",
          lookup: {
            activo: "activo",
            inactivo: "inactivo",
            cancelado: "cancelado",
          },
        },
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
    console.log(this.props);

    return (
      <div>
        <BrandHeader brandText={"Administración de instituciones"} />
        <div className="col s12">
          <div className="container">
            <div className="section">
              <div className="card">
                <div className="card-content">
                  <div className="card-title right-align-md">
                    <Link
                      className="waves-effect waves-light btn green "
                      to="/dashboard/schools/addSchool"
                    >
                      Agregar colegio
                    </Link>
                  </div>
                  {/* Aqui va el contenido */}
                  <MaterialTable
                    title="Listado de colegios"
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
