import { useState } from "react";
import { useLocalStorage } from "../../hooks";
import { FormsConfig, FormsEdit } from "../Configpage";
import { Button } from "../../components";

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
 
      <Button onClick={handleModalAdd} label={'+'}/>

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
              <Button
                  type={"icon"}
                  onClick={() => handleEditAction(origin.id)}
                >
                  <img src="/icons/edit.svg" width={20} alt="" />
                </Button>

                <Button
                  type={"icon"}
                  onClick={() => handleDeleteAction(origin.id)}
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
          <Button onClick={handleModalAdd} type={'secondary'} label={'x'}  />
          <FormsConfig setLocal={setLocal} title={"Agregar Origen"} />)
        </section>
      )}

      {orignEdit && (
        <div className="modal-edit-action">
   
          <Button onClick={() => setOriginEdit()} type={'secondary'} label={'x'}  />

          <FormsEdit action={action} title={"Editar Origen"} />
        </div>
      )}
    </div>
  );
};
