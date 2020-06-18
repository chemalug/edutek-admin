import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

export const ProfesorPage = (props) => {
  const columns = [
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
  ];
  /*useEffect = () => {
    
  };*/
  console.log(columns);
  return (
    <div className="col s12">
      <div className="container">
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="card-title right-align-md">
                <Link
                  className="waves-effect waves-light btn green"
                  to={`${props.location.pathname}/addProfesor`}
                >
                  Agregar profesor
                </Link>
              </div>
              <div className="row">
                {/*<MaterialTable
                  title="Listado de profesores"
                  columns={null}
                  data={null}
                />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
