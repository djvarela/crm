import { useContext, useRef } from "react";


export const FormsNuevoCliente = () => {

  const nameRef = useRef();
  const apellidoRef = useRef();
  const emailRef = useRef();
  const telefonoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      nombre: nameRef.current.value,
      apellido: apellidoRef.current.value,
      telefono: telefonoRef.current.value,
      email: emailRef.current.value,
      status: false,  
      user : '',
      date: new Date()
    };

    const localClients = JSON.parse(localStorage.getItem("clients")) || [];

    setNewClient([...newClient, newUser]);
    localClients.push(newUser);

    localStorage.setItem("clients", JSON.stringify(localClients));
    nameRef.current.value = "";
    
  };

  return (
    <div className="newUser">
      <h2>Agregar</h2>
      <form onSubmit={handleSubmit}>
        <span>
          <label htmlFor="">Nombre:</label>
          <input type="text" name="nombre" ref={nameRef} />
        </span>
        <span>
          <label htmlFor="">Apellido:</label>
          <input type="text" name="apellido" ref={apellidoRef} />
        </span>

        <span>
          <label htmlFor="">Tel:</label>
          <input type="text" ref={telefonoRef} />
        </span>
        <span>
          <label htmlFor="">Email:</label>
          <input type="text" ref={emailRef} />
        </span>

        <button>Cargar</button>
      </form>
    </div>
  );
};
