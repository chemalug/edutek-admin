import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { db, firebase } from "fire/firebase";

const AddColegio = (props) => {
  const { toggle, modal } = props;
  const [colegio, setColegio] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    status: "activo",
    fecha_alta: firebase.database.ServerValue.TIMESTAMP,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setColegio({ ...colegio, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    db.ref("/schools")
      .push()
      .set(colegio, (error) => {
        if (error) {
          alert("Data could not be saved " + error);
        } else {
          alert("Data saved succesfully");
        }
      });
    toggle();
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <span>
            <h2>Datos del colegio</h2>
          </span>
        </ModalHeader>
        <form className="col s12">
          <ModalBody>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">First Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate" />
                <label htmlFor="icon_telephone">Telephone</label>
              </div>
            </div>
          </ModalBody>
        </form>
      </Modal>
    </div>
  );
};

export default AddColegio;
