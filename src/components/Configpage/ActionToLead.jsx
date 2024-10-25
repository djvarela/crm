import { useState } from "react";
import { useLocalStorage } from "../../hooks";
import { FormsConfig, FormsEdit } from "../Configpage";
import { Button } from "../../components";

export const ActionToLead = () => {
  const { setLocal, editLocal, storeValue, deleteValueLocal } =
    useLocalStorage("optionAction");

  const [editAction, setEditAction] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

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
  function handleModalAdd() {
    setModalAdd(!modalAdd);
  }

  return (
    <div className="lead-action">
      <h2>Acciones a realizar</h2>

      <Button onClick={handleModalAdd} label={"x"} />

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
                <Button
                  type={"icon"}
                  onClick={() => handleEditAction(action.id)}
                >
                  <img src="/icons/edit.svg" width={20} alt="" />
                </Button>

                <Button
                  type={"icon"}
                  onClick={() => handleDeleteAction(action.id)}
                >
                  <img src="/icons/trash.svg" width={20} alt="" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalAdd && (
        <section className="modal-add">
          <Button onClick={handleModalAdd} type={"secondary"} label={"x"} />

          <FormsConfig setLocal={setLocal} title={"Agregar acción"} />
        </section>
      )}

      {editAction && (
        <div className="modal-edit-action">
          <Button onClick={() => setEditAction()} type={"secondary"} label={"x"} />

          <FormsEdit action={action} title={"Editar accion a realizar"} />
        </div>
      )}
    </div>
  );
};
