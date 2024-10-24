import { useState } from "react";
import { useLocalStorage } from "../../hooks";
import { FormsConfig, FormsEdit } from "../Configpage";

export const ActionToLead = () => {
  const { setLocal, editLocal, storeValue, deleteValueLocal } =
    useLocalStorage("optionAction");

  const [editAction, setEditAction] = useState(false);

  const action = {
    editLocal: editLocal,
    setStatus: setEditAction,
    dataEdit: editAction,
  };

  function handleEditAction(e) {
    let id = e;

    const edit = storeValue.filter((option) => option.id == id).at();

    setEditAction(edit);
  }

  function handleDeleteAction(id) {
    if (window.confirm("¿Estás seguro de borrar esta opcion?")) {
      deleteValueLocal(id);
    }
  }

  return (
    <div className="lead-action">
      <h2>Acciones a realizar</h2>
      <button>+</button>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>

            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {storeValue.map((action) => (
            <tr key={action.id}>
              <td>{action.name}</td>
              <td>
                <button onClick={() => handleEditAction(action.id)}>
                  Editar
                </button>
                <button onClick={() => handleDeleteAction(action.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <FormsConfig setLocal={setLocal} title={"Agregar acción"} />

      {editAction && (
        <div className="modal-edit-action">
          <button onClick={() => setEditAction()}>x</button>

          <FormsEdit action={action} title={"Editar accion a realizar"} />
        </div>
      )}
    </div>
  );
};
