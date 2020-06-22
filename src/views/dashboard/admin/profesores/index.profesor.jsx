import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

export const ProfesorPage = (props) => {
  const columns = [
    { title: "Nombre", field: "nombres" },
    { title: "Apellidos", field: "apellidos" },
    { title: "Teléfono", field: "telefono", type: "numeric" },
    { title: "Dirección", field: "direccion" },
    { title: "Email", field: "email" },
    { title: "uid", field: "uid", hidden: true },
  ];

  const detailPanel = [
    {
      tooltip: "Mostrar colegios",
      render: (rowData) => {
        return (
          <div className="row">
            <div className="col s12 m12 l12">
              <div
                id="responsive-table"
                className="card card card-default scrollspy"
              >
                <div className="card-content">
                  <h4 className="card-title">Responsive Table</h4>
                  <p className="mb-2">
                    Add{" "}
                    <code className="  language-markup">
                      class="responsive-table"
                    </code>{" "}
                    to the table tag to make the table horizontally scrollable
                    on smaller screen widths.
                  </p>
                  <div className="row">
                    <div className="col s12"></div>
                    <div className="col s12">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th data-field="id">Name</th>
                            <th data-field="name">Item Name</th>
                            <th data-field="price">Item Price</th>
                            <th data-field="total">Total</th>
                            <th data-field="status">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                            <td>$1.87</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                            <td>$10.87</td>
                            <td>No</td>
                          </tr>
                          <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                            <td>$12.87</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Shannon</td>
                            <td>KitKat</td>
                            <td>$9.99</td>
                            <td>$14.87</td>
                            <td>No</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  /*useEffect = () => {
    
  };*/

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
                <MaterialTable
                  title="Listado de profesores"
                  columns={columns}
                  detailPanel={detailPanel}
                  data={[
                    {
                      nombres: "Mehmet",
                      apellidos: "Baran",
                      telefono: 1987,
                      direccion: 63,
                    },
                    {
                      nombres: "Mehmet",
                      apellidos: "Baran",
                      telefono: 1987,
                      direccion: 63,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
