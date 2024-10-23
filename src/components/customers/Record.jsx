import { useEffect, useState } from "react";

const Record = ({ result, setViewProfile }) => {
  const [recordState, setRecord] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const leads = JSON.parse(localStorage.getItem("leads")) || [];
      const leadUser = leads.filter(
        (data) => data.id_customer === result[0].id
      );

      console.log({ leadUser });
      const newDate = leadUser.map((data) => {
        let fecha = new Date(data.date);
        const usuario =
          users.find((user) => user.id === data.assigned_user) || {};

        return {
          id: crypto.randomUUID(),
          canal: data.canal,
          agente: `${usuario.nombre} ${usuario.apellido}`,
          estado: data.status ? "Completado" : "En espera",
          mensaje: data.mensaje,
          info: data.status_info,
          fecha: fecha.toLocaleString(),
        };
      });

      setRecord(newDate);
    };

    fetchData();
  }, []);
  let fecha = new Date(result[0]?.registered);

  return (
    <section className="viewProfile">
      <button onClick={() => setViewProfile(false)}>CERRAR</button>

      <div className="date-profiles">
        <div className="info-profile">
          <h2>{result[0].name}</h2>
        </div>

        <div className="info">
          <ul>
            <li>
              Email: <strong>{result[0].email}</strong>
            </li>
            <li>
              Tel: <strong>{result[0].tel}</strong>
            </li>
            <li>
              Registrado : <strong>{fecha?.toLocaleString()}</strong>
            </li>
          </ul>

          <ul>
            <li>sAS</li>
          </ul>
        </div>
      </div>

      <div className="op-seguimiento">
        <h3>Oportunidades realacionadas</h3>
        <ul>
          {recordState.map((date) => (
            <li key={date.id}>
              <section className="row">
                <h2>{date.estado}</h2>
                <p>{date.fecha}</p>
                <p>{date.agente}</p>
              </section>
              <span className="row-info">
                <p>{date.mensaje}</p>
              </span>

              {date.info.map((info) => (
                
                <div className="action-info" key={info.id}>
                  <span>
                    <p><strong>Accion realizada:</strong> {info.proximaAccion}</p>
                      
                    <div className="action-info-message">

                      <p><em>{info.mensaje}</em></p>
                      <p>{(info.date)}</p>

                    </div>
                  
                  </span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Record;
