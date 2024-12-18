import React from "react";
import { Button } from "../../../components";

export const FormsEdit = ({ action, title }) => {
  const { editLocal, setStatus, dataEdit } = action;

  function onSubmitEditOrigin(e) {
    e.preventDefault();
    const id = e.target[0].dataset.id;
    const inputValue = e.target[0].value.trim();

    if (!inputValue) {
      alert("El nombre no puede estar vacío");
      return;
    }

    editLocal(id, inputValue);

    setStatus();
  }

  return (
    <form className="forms" onSubmit={onSubmitEditOrigin} autoComplete="off">
      <h2>{title}</h2>
      <span>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          data-id={dataEdit?.id}
          defaultValue={dataEdit?.name}
        />
     
        <Button type={'submit'} label={'Guardar'}  />
      </span>
    </form>
  );
};
