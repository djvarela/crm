import React from "react";

const EditUserModal = ({
  userSelect,
  setUsers,
  usersState,
  modalEdit,
  setEditModal,
}) => {

  const Reader = new FileReader();
  const localUsers = JSON.parse(localStorage.getItem('users')) || [];

  function onAvatar(e) {

    const fileAvatar = document.getElementById("fileAvatarEdit");
    const avatar = document.getElementById("avatarEdit");

    Reader.onload = (e) => {
      avatar.src = e.target.result;
    };
    Reader.readAsDataURL(fileAvatar.files[0]);
  }



  function handleEditSubit(e) {

    e.preventDefault();
    console.log(e.target.estado.value)

    const estado = e.target.estado.value == 'Activo' ? true : false;

    const avatar = document.getElementById("avatarEdit");

    Reader.onload = (e) => {
      fileAvatar.src = e.target.result;
    };

    const img = avatar.src;

    const newLocal = localUsers.map((localUser) => {

      if (localUser.id == userSelect[0].id) {

        return {
          ...localUser,

          nombre: e.target.nombre.value,
          apellido: e.target.apellido.value,
          rol: e.target.rol.value,
          email: e.target.email.value,
          password: 1234,
          avatar: img,
          active: estado

        }
      } else {
        return localUser
      }


    })

    const newValues = usersState.map((user) => {
      if (user.id == userSelect[0].id) {
        return {
          ...userSelect[0],

          nombre: e.target.nombre.value,
          apellido: e.target.apellido.value,
          rol: e.target.rol.value,
          email: e.target.email.value,
          password: 1234,
          avatar: img,
          active: estado
        };
      } else {
        return user;
      }
    });


    setUsers(newValues);
    localStorage.setItem('users', JSON.stringify(newLocal))

    setEditModal(!modalEdit)
  }




  return (
    <>
      <div className="menu-edit-modal">
        <div className="edit-container">
          <button
            onClick={() => {
              setEditModal(!modalEdit);
            }}
          >X</button>

          <form onSubmit={handleEditSubit} autoComplete="off"
            encType="multipart/form-data"  >
            <img src={userSelect[0].avatar} width={200} alt="Avatar preview" id='avatarEdit' />

            <label htmlFor="">Avatar</label>
            <input type="file" name="avatar" id="fileAvatarEdit"

              onChange={(e) => { onAvatar(e) }}
            />

            <label htmlFor="">Nombre:</label>
            <input
              type="text"
              name="nombre"
              defaultValue={userSelect[0].nombre}
            />

            <label htmlFor="">Apellido:</label>
            <input type="text" name="apellido" defaultValue={userSelect[0].apellido} />

            <label htmlFor="">Email:</label>
            <input type="text" name="email" defaultValue={userSelect[0].email} />

            <label htmlFor="">Rol:</label>
            <input type="text" name='rol' defaultValue={userSelect[0].rol} />

            <label htmlFor="estado">Estado:</label>

            <select name="estado" id="estado" defaultValue={userSelect[0].active ? 'Activo' : 'Inactivo'} >
              <option value="">---</option>
              <option value='Activo' >Activo</option>
              <option value='Inactivo' >Inactivo</option>
            </select>

            <button>Guardar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
