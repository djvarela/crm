export const AgregarUser = ({ setUsers, usersState }) => {
  const Reader = new FileReader();

  function onAvatar(e) {
    const fileAvatar = document.getElementById("fileAvatar");
    const avatar = document.getElementById("avatar");

    Reader.onload = (e) => {
      avatar.src = e.target.result;
    };
    Reader.readAsDataURL(fileAvatar.files[0]);
  }

  function onSubmit(e) {
    e.preventDefault();
    const avatarImg = document.getElementById("avatar");
    Reader.onload = (e) => {
      fileAvatar.src = e.target.result;
    };
    const img = Reader.result;

    const usersModel = {
      id: self.crypto.randomUUID(),
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      rol: e.target.rol.value,
      email: e.target.email.value,
      avatar: img,
      active: true,
      password: 1234,
    };

    setUsers([...usersState, usersModel]);

    const locationUsers = JSON.parse(localStorage.getItem("users")) || [];
    locationUsers.push(usersModel);

    localStorage.setItem("users", JSON.stringify(locationUsers));

    avatarImg.src = "";

    e.target.reset();

    //TODO:  notificar que fue guardado el usuario
  }

  return (
    <section className="add-user">
      <h2>Agregar Nuevo usuario</h2>

      <div className="form-Aad-User">
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <span>
            <img src="" width={"100px"} alt="" id="avatar" />
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              name="avatar"
              id="fileAvatar"
              required
              onChange={(e) => {
                onAvatar(e);
              }}
            />
          </span>

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
