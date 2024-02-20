

const InfoOpportunities = ({data}) => {
  
  console.log(data[0])
  
  return (
    <section className="op-info">
    <h2>Descripcion de la oportunidad</h2>

      <section className="customer-info">
        <h2>{data[0].cliente}</h2>
        <div className="custormer-dates">
          <ul>
            <li>Correo: <strong>{data[0].email}</strong></li>
            <li>Telefono: <strong>{data[0].tel}</strong></li>

          </ul>

        </div>

      </section>
    
    
    </section>
  )
}

export default InfoOpportunities
