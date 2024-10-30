import { useRef } from "react";

import { useNavigate } from "react-router-dom";

export const AtenderCliente = ({ atender }) => {
  const canales = JSON.parse(localStorage.getItem("chanelAction")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const localLeads = JSON.parse(localStorage.getItem("leads")) || [];

  const navigation = useNavigate();

  const mensajeRef = useRef();

  const newLeadSubmit = (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.elements.canal);

    const canal = inputs.filter( (input) => input.checked.at());




    const lead = {
      id: crypto.randomUUID(),
      id_customer: atender[0].id,
      canal: canal.value,
      mensaje: mensajeRef.current.value,
      date: new Date(),
      assigned_user: e.target.usuario.value,
      status: false,
      status_info: [],
    };

    localLeads.push(lead);

    localStorage.setItem("leads", JSON.stringify(localLeads));

    navigation("/home");
  };

  return (
    <div className="atenderUser">
      <h2>Atender</h2>

      <form onSubmit={newLeadSubmit}>
        <span>
          <p>{`${atender[0].name}`} </p>
        </span>

        <div className="canal-recibo">
          {canales.map((canal) => (
            <span key={canal.id}>
              <input
                type="radio"
                name="canal"
                value={canal.name}
                id={canal.name.toLowerCase()}
              />
              <label htmlFor={canal.name.toLowerCase()}>{canal.name}</label>
            </span>
          ))}
     
        </div>
        <span>
          <label htmlFor="">Asignar usuario:</label>
          <select name="usuario" id="">
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.nombre} {user.apellido}
              </option>
            ))}
          </select>
        </span>
        <span>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" ref={mensajeRef} required></textarea>
        </span>
        <button>Guardar</button>
      </form>
    </div>
  );
};
