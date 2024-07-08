import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormsNuevoCliente = () => {
  const LocalCustomer = JSON.parse(localStorage.getItem("customers")) || [];
  const [customerState, setCustomerState] = useState(LocalCustomer);

  const navitation = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    const addCustomer = {
      id: crypto.randomUUID(),
      name: e.target.nombre.value,
      email: e.target.email.value,
      tel: e.target.tel.value,
      registered: new Date(),
    };

    setCustomerState([...customerState, addCustomer]);

    LocalCustomer.push(addCustomer);

    localStorage.setItem("customers", JSON.stringify(LocalCustomer));

    navitation('/clients')
  }
  return (
    <section className="add-customer">
      <h2>Agregar cliente</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="">Nombre:</label>
        <input type="text" name="nombre" />

        <label htmlFor="">Email:</label>
        <input type="text" name="email" />

        <label htmlFor="">Tel:</label>
        <input type="text" name="tel" />

        <button>Agregar</button>
      </form>
    </section>
  );
};
