import { useState } from "react"

export const ClientPage = () => {

  const LocalCustomer = JSON.parse(localStorage.getItem('customers')) || [];
  const [customerState, setCustomerState] = useState(LocalCustomer);

function handleSubmit(e){
  e.preventDefault()
  

const addCustomer ={
  id: crypto.randomUUID(),
  name: e.target.nombre.value,
  email: e.target.email.value,
  tel: e.target.tel.value,
  registered: new Date()

}

setCustomerState([...customerState, addCustomer])

LocalCustomer.push(addCustomer);

localStorage.setItem('customers',  JSON.stringify(LocalCustomer))



console.log(customerState)
}


return (

<section className="customer-page">
  
<h2>Clientes</h2>
  <section className="add-customer">
  <h2>Agregar cliente</h2>
    <form onSubmit={handleSubmit} autoComplete="off">

      <label htmlFor="">Nombre:</label>
      <input type="text" name='nombre' />

      <label htmlFor="">Email:</label>
      <input type="text" name='email' />
      
      <label htmlFor="">Tel:</label>
      <input type="text" name='tel' />

   

      <button>Agregar</button>


    </form>
  </section>


  <div className="customer-table">

      <table>
          <thead>
              <tr>
                  <td>NOMBRE</td>
                  <td>EMAIL</td>
                  <td>TELEFONO</td>
              </tr>
          </thead>
          <tbody>
        {customerState.map(customer =>(
          <tr key={customer.id} >
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.tel}</td>
          </tr>
        ))}

          </tbody>
      </table>
  </div>
    </section>
  )
}
