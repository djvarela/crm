

const InfoOpportunities = ({data}) => {
  
console.log({data})
  
  return (
    <section className="op-info">
    <h2>Descripcion de la oportunidad</h2>

      <section className="customer-info">
        <h2>{data[0].cliente}</h2>
        <div className="custormer-dates">
          <p>{data[0].consulta}</p>
        </div>

      </section>
    
    
    </section>
  )
}

export default InfoOpportunities
