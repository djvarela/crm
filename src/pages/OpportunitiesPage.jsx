
const OpportunitiesPage = () => {

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const leads = JSON.parse(localStorage.getItem('leads')) || [];
  const customers  = JSON.parse(localStorage.getItem('customers')) || [];
  


console.log({users})
console.log({leads})
const data = leads.map((lead, i) => {

    if( lead.id == customers[i].id  ){  
      
    const usuario = users.filter((user)=> user.id == lead.assigned_user)

    let date = new Date(lead.date)
   
   return {

    id_lead: lead.id,
    cliente: customers[i].name,
    contacto: lead.canal,
    consulta: lead.mensaje,
    date: date.toLocaleString(),
    responsable: `${usuario[0].nombre} ${usuario[0].apellido}`,
    estado: lead.status ? 'Completado' : 'En espera'
   }
  
  }else{
    return lead
  }

})

console.log({data})


  return (
  <section className='opportunities-page'>
      <h2>Oportunidades en curso</h2>

      <div className="opportunities-table">
        <table>
          <thead>

          <tr>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Consulta</th>
              <th>Date</th>
              <th>R. Asignado</th>
              <th>Estado</th>
          </tr>
          </thead>
          <tbody>
            {
              data.map((lead) => (
                <tr key={lead.id_lead}>
                  <td>{lead.cliente}</td>
                  <td>{lead.contacto}</td>
                  <td>{lead.consulta}</td>
                  <td>{lead.date}</td>
                  <td>{lead.responsable}</td>
                  <td>{lead.estado}</td>
                </tr>
              ))

            }
          </tbody>
        </table>


      </div>
    
  </section>
  )
}

export default OpportunitiesPage
