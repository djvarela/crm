import { useState } from "react"

export const ClientPage = () => {

  const LocalCustomer = JSON.parse(localStorage.getItem('customers')) || [];
  const [customerState, setCustomerState] = useState(LocalCustomer);
//TAREA: corregir, xq estos state se utilizan tmb FormsNuevoCliente

return (

<section className="customer-page">
  
<h2>Clientes</h2>
  


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
