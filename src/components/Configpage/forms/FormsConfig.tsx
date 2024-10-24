import React from "react";


export const FormsConfig = ({ setLocal, title }) => {
  function onSubmit(e) {
    e.preventDefault();

    const inputValue = e.target[0].value.trim();

    let info = {
      id: crypto.randomUUID(),
      name: inputValue,
    };

    if (!inputValue) {
      alert("El nombre no puede estar vacío");
      return;
    }

    setLocal(info);

    e.target[0].value = "";
  }

  return (
    <section className="modal-add">
      <h2>{title}</h2>

      <form onSubmit={onSubmit} autoComplete="off">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" />
        <button>Agregar</button>
      </form>
    </section>
  );
};
