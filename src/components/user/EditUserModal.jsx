import React from "react";

const EditUserModal = ({ userSelect, setUsers,usersState, modalEdit, setEditModal }) => {
  function handleEditSubit(e) {
    e.preventDefault();

  const newValues = usersState.map(user=>{

    if(user.id == userSelect[0].id){
        return {...userSelect[0],
        nombre:'Diegote'}
    }else{

      return user
    }


  })
  setUsers(newValues)
  console.log(newValues)

  }
  return (
    <>
      <div className="menu-edit-modal">
        <div className="edit-container">
          <button
            onClick={() => { setEditModal(!modalEdit) }}
          > x </button>

          <form onSubmit={handleEditSubit} autoComplete="off">
            <img src={userSelect[0].avatar} width={200} alt="" />
            <label htmlFor="">Avatar</label>
            <input type="file" />

            <label htmlFor="">Nombre:</label>
            <input
              type="text"
              name="nombre"
              defaultValue={userSelect[0].nombre}
            />

            <label htmlFor="">Apellido:</label>
            <input type="text" defaultValue={userSelect[0].apellido} />

            <label htmlFor="">Email:</label>
            <input type="text" defaultValue={userSelect[0].email} />

            <label htmlFor="">Rol:</label>
            <input type="text" defaultValue={userSelect[0].rol} />

            <button>Guardar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
