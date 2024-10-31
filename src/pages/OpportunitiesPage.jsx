import { useState, useEffect } from "react";
import InfoOpportunities from "../components/modals/InfoOpportunities";

const OpportunitiesPage = () => {
  const [viewOp, setViewOp] = useState(false);
  const [opportunitiesState, setOpportunities] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const leads = JSON.parse(localStorage.getItem("leads")) || [];
      const customers = JSON.parse(localStorage.getItem("customers")) || [];
      console.log({ leads });
      const newData = leads.map((lead, i) => {
        const usuario =
          users.find((user) => user.id === lead.assigned_user) || {};

        const cliente =
          customers.find((customer) => customer.id === lead.id_customer) || {};

        const date = new Date(lead.date).toLocaleString();

        return {
          id: crypto.randomUUID(),
          id_lead: lead.id,
          cliente: cliente.name || "",
          contacto: lead.canal || "",
          consulta: lead.mensaje || "",
          date,
          responsable: `${usuario.nombre || ""} ${usuario.apellido || ""}`,
          estado: lead.status ? "Completado" : "En espera",
        };
      });

      setData(newData);
    };

    fetchData();
  }, []);

  const handleViewLead = (id) => {
    setViewOp(!viewOp);
    
    const info = data.filter((data) => data.id_lead === id);
    setOpportunities(info);
  };

  return (
    <section className="opportunities-page">
      <h2>Oportunidades en curso</h2>
      <div className="opportunities-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Consulta</th>
              <th>Date</th>
              <th>R. Asignado</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((lead) => (
              <tr key={lead.id_lead}>
                <td>
                  <button onClick={() => handleViewLead(lead.id_lead)}>
                    👁
                  </button>
                </td>
                <td>{lead.cliente}</td>
                <td>{lead.contacto}</td>
                <td>{lead.consulta}</td>
                <td>{lead.date}</td>
                <td>{lead.responsable}</td>
                <td>{lead.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {viewOp && <InfoOpportunities data={opportunitiesState}  modal={setViewOp} />}
    </section>
  );
};

export default OpportunitiesPage;
