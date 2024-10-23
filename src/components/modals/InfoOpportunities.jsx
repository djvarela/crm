import { useState } from "react";

const InfoOpportunities = ({ data }) => {
  const leads = JSON.parse(localStorage.getItem("leads")) || [];
  const lead = leads.filter((lead) => lead.id === data[0].id_lead);
  const [status, setStatus] = useState(lead);
  const actionAction = JSON.parse(localStorage.getItem("optionAction"));

  function handleSubmit(e) {
    e.preventDefault();

    const getStatus = [...status];

    const fecha = new Date().toLocaleString();

    const newAction = {
      id: crypto.randomUUID(),
      date: fecha,
      proximaAccion: e.target.proxAccion.value,
      mensaje: e.target.mensaje.value,
    };

    getStatus[0].status_info.push(newAction);

    setStatus(getStatus);

    const updatedLeads = leads.map((lead) => {
      if (lead.id === data[0].id_lead) {
        return {
          ...lead,
          status_info: getStatus[0].status_info,
        };
      } else {
        return lead;
      }
    });

    localStorage.setItem("leads", JSON.stringify(updatedLeads));
    e.target.reset();
  }

  return (
    <section className="op-info">
      <h2>Descripcion de la oportunidad</h2>

      <section className="customer-info">
        <h2>{data[0].cliente}</h2>
        <div className="custormer-dates">
          <p>{data[0].consulta}</p>
        </div>
      </section>

      <div className="atenderOportunidad">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Accion realizada:</label>
          <select name="proxAccion" id="" required>
            <option value="">---</option>

            {actionAction.map((action) => (
              <option value={action.name} key={action.id}>
                {action.name}
              </option>
            ))}
          </select>

          <label htmlFor="">Comentario:</label>
          <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default InfoOpportunities;
