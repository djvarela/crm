import React, { useState } from "react";
import { FormsConfig } from "./forms/FormsConfig";
import { useLocalStorage } from "../../hooks";
import { FormsEdit } from "./forms/FormsEdit";
import { Button } from "../../components";

export const ChannelToLead = () => {
  const { setLocal, editLocal, storeValue, deleteValueLocal } =
    useLocalStorage("chanelAction");

  const [editChannel, setEditChannel] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  function handleEditAction(e) {
    let id = e;

    const edit = storeValue.filter((option) => option.id == id).at();

    setEditChannel(edit);
  }

  function handleDeleteAction(id) {
    if (window.confirm("¿Estás seguro de borrar esta opcion?")) {
      deleteValueLocal(id);
    }
  }
  const action = {
    editLocal: editLocal,
    setStatus: setEditChannel,
    dataEdit: editChannel,
  };

  function handleModalAdd() {
    setModalAdd(!modalAdd);
  }

  return (
    <div className="entry-chanel">
      <h2>Canal de Ingreso</h2>

      <Button onClick={handleModalAdd} label={"+"} />

      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {storeValue.map((channel) => (
            <tr key={channel.id}>
              <td>{channel.name}</td>

              <td>
                <Button
                  type={"icon"}
                  onClick={() => handleEditAction(channel.id)}
                >
                  <img src="/icons/edit.svg" width={20} alt="" />
                </Button>

                <Button
                  type={"icon"}
                  onClick={() => handleDeleteAction(channel.id)}
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
          <FormsConfig setLocal={setLocal} title={"Agregar Canal de Ingreso"} />
        </section>
      )}

      {editChannel && (
        <div className="modal-edit-action">
       
          <Button onClick={() => setEditChannel()} type={"secondary"} label={"x"} />
    
          <FormsEdit action={action} title={"Editar canal a realizar"} />
        </div>
      )}
    </div>
  );
};
