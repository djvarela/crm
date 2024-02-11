import {  useRef } from "react";

import { useNavigate } from "react-router-dom";

export const AtenderCliente = () => {
  const navigation = useNavigate();
  const mensajeRef = useRef();
  const emailRef = useRef();
  const wpRef = useRef();
  const rrssRef = useRef();

  const newLeadSubmit = (e) => {

    e.preventDefault();

    const localLeads = JSON.parse(localStorage.getItem("leads")) || [];

    const canales = [
      {
        email: emailRef.current.checked,
        whatsApp: wpRef.current.checked,
        rrss: rrssRef.current.checked,
      },
    ];

    const canal = canales.map((item) => {
      if (item.email) {
        return "email";
      } else if (item.whatsApp) {
        return "whatsApp";
      } else {
        return "rrss";
      }
    });

    const lead = {
      id: atender.id,
      canal: canal[0],
      mensaje: mensajeRef.current.value,
    };

    localLeads.push(lead);

    localStorage.setItem("leads", JSON.stringify(localLeads));

    navigation('/home');

  };

  return (
    <div className="atenderUser">
      <h2>Atender user</h2>

      <form onSubmit={newLeadSubmit}>
        <span>
          <p>{`${atender.nombre} ${atender.apellido} `} </p>
        </span>

        <div className="canal-recibo">
          <span>
            <label htmlFor="email">Email</label>
            <input type="radio" name="canal" ref={emailRef} id="email" />
          </span>
          <span>
            <label htmlFor="rrss">RRSS</label>
            <input type="radio" id="rrss" ref={rrssRef} name="canal" />
          </span>

          <span>
            <label htmlFor="wp">WhatsApp</label>
            <input type="radio" id="wp" ref={wpRef} name="canal" />
          </span>
        </div>
        <span>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" ref={mensajeRef}></textarea>
        </span>
        <button>Guardar</button>
      </form>
    </div>
  );
};
