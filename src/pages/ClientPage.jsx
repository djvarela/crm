import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Button } from "../components";

export const ClientPage = () => {

  const { storeValue, editLocal, deleteValueLocal } = useLocalStorage('customers')
  const [customer, setCustomer] = useState()

  //
  const onSubmitEdit = (e) => {
    e.preventDefault();

    const updatedValues = {
      name: e.target.nombre.value,
      tel: e.target.tel.value,
      email: e.target.email.value,
      empresa: e.target.empresa.value
    };

    editLocal(customer.id, updatedValues);
    setCustomer(null);
  };


  //
  const handleEditCustomer = (id) => {


    const customer = storeValue.filter((data) => data.id === id).at()
    setCustomer(customer)
  }

  //
  const handleDelete = (id) => {


    deleteValueLocal(id)

  }




  return (

    <section className="customer-page">

      <h2>Clientes</h2>

      <div className="customer-table">

        <table>
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>EMAIL</th>
              <th>TELEFONO</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {storeValue.map(customer => (
              <tr key={customer.id} >
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.tel}</td>
                <td>
                  <Button
                    type={'icon'}
                    onClick={() => handleEditCustomer(customer.id)}
                  ><img src="/icons/edit.svg" alt="button edit" width={20} />
                  </Button>
                  <Button
                    type={'icon'}
                    onClick={() => handleDelete(customer.id)}
                  ><img src="/icons/trash.svg" alt="button delete" width={20} />
                  </Button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* moda edit */}


      {customer && (


        <div className="modal-edit">

          <Button label={'X'} type="secondary" onClick={() => setCustomer(null)} />
          <form onSubmit={onSubmitEdit} autoComplete="off">

            <span>
              <label htmlFor="">Nombre: </label>
              <input type="text" name="nombre" defaultValue={customer.name} />
            </span>
            <span>
              <label htmlFor="empresa">Razon social:</label>
              <input type="text" name='empresa' defaultValue={ customer.empresa }/>
            </span>

            <span>
              <label htmlFor="">Tel: </label>
              <input type="text" name="tel" defaultValue={customer.tel} />
            </span>
            <span>
              <label htmlFor="">Email: </label>
              <input type="text" name='email' defaultValue={customer.email} />
            </span>


            <Button label={'Guardar'} type="primary" />

          </form>

        </div>
      )}



    </section>
  )
}
