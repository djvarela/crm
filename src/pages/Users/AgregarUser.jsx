export const AgregarUser = ({ setUsers, usersState,setAddUser }) => {
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
    const imgResult = Reader.result;
 
  const  img = imgResult == null ? avatarImg.src : img 

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

    setAddUser(false)
    //TODO:  notificar que fue guardado el usuario
  }

  return (
    <section className="add-user">
      <div className="form-add-user">
        <h2>Agregar nuevo usuario</h2>
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="avatar-add-container">
            <img
              src="/icons/avatar-user.svg"
              width={"100px"}
              alt=""
              id="avatar"
            />
            <label htmlFor="fileAvatar">+</label>
            <input
              type="file"
              name="avatar"
              id="fileAvatar"
              hidden
            
              onChange={(e) => {
                onAvatar(e);
              }}
            />
          </div>

          <div className="info-add-container">
            <span>
              <label htmlFor="nombe">Nombre:</label>
              <input type="text" name="nombre" id="nombre" required/>
            </span>
            <span>
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" name="apellido" id="apellido" />
            </span>
            <span>
              <label htmlFor="rol">Rol:</label>
              <input type="text" name="rol" id="rol" required/>
            </span>
            <span>
              <label htmlFor="mail">Email:</label>
              <input type="text" id="email" name="email" required/>
            </span>

            <span className="buttons-add-user">

            <button>Guardar</button>
            <button
            className="cancel-add-user"
            onClick={()=>{setAddUser(false)}}
            >Cancelar</button>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
