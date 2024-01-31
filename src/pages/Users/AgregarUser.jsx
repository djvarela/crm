export const AgregarUser = () => {

  function onSubmit(e) {
    e.preventDefault();
   

    const users = {
      id: crypto.randomUUID,
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      rol: e.target.rol.value,
      email: e.target.email.value,
    };

    const locationUsers = JSON.parse(localStorage.getItem("users")) || [];

    locationUsers.push(users)

    localStorage.setItem("users", JSON.stringify(locationUsers));





    e.target.nombre.value=''
    e.target.apellido.value='',
    e.target.rol.value='',
    e.target.email.value='';


    //TODO:  notificar que fue guardado el usuario
  }

  return (
    <section className="add-user">
      <h2>Agregar Nuevo usuario</h2>

      <div className="form-Aad-User">
        <form onSubmit={onSubmit} autoComplete="off">
          <label htmlFor="nombe">Nombre</label>
          <input type="text" name="nombre" id="nombre" />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" name="apellido" id="apellido" />

          <label htmlFor="rol">Rol:</label>
          <input type="text" name="rol" id="rol" />

          <label htmlFor="mail">Email:</label>
          <input type="text" id="email" name="email" />

          <button>Guardar</button>
        </form>
      </div>
    </section>
  );
};
