import { useState } from "react";
import { useLocalStorage } from "../../hooks";
import { FormsConfig, FormsEdit } from "../Configpage";

export const OriginToLead = () => {
  const { storeValue, setLocal, editLocal, deleteValueLocal } =
    useLocalStorage("originLead");
  const [modalAdd, setModalAdd] = useState(false);

  const [orignEdit, setOriginEdit] = useState(false);

  const action = {
    editLocal: editLocal,
    setStatus: setOriginEdit,
    dataEdit: orignEdit,
  };

  function handleEditAction(e) {
    let id = e;

    const edit = storeValue.filter((option) => option.id == id).at();

    setOriginEdit(edit);
  }

  function handleDeleteAction(id) {
    if (window.confirm("¿Estás seguro de borrar esta opcion?")) {
      deleteValueLocal(id);
    }
  }

  function handleModalAdd() {
    setModalAdd(!modalAdd);
  }

  return (
    <div className="lead-origin">
      <h2>Origenes de consulta</h2>
      <button onClick={handleModalAdd}>+</button>

      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>ESTADO</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {storeValue.map((origin) => (
            <tr key={origin.id}>
              <td>{origin.name}</td>
              <td>{origin.status}</td>
              <td>
                <button onClick={() => handleEditAction(origin.id)}>
                  Editar
                </button>
                <button onClick={() => handleDeleteAction(origin.id)}>
                  eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalAdd && (
        <section className="modal-add">
          <button onClick={handleModalAdd}>x</button>
          <FormsConfig setLocal={setLocal} title={"Agregar Origen"} />)
        </section>
      )}

      {orignEdit && (
        <div className="modal-edit-action">
          <button onClick={() => setOriginEdit()}>x</button>

          <FormsEdit action={action} title={"Editar Origen"} />
        </div>
      )}
    </div>
  );
};
