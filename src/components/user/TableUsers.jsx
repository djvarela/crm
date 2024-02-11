import { useState } from "react";
import EditUserModal from "./EditUserModal";

export const TableUsers = ({ usersState,setUsers }) => {

const [userSelect, setUserSelect ] = useState(null); 
const [modalEdit,setEditModal] = useState(false);


function handleMenu(e) {

    const modalOptionUser = document.querySelectorAll(".user-menu-modal");

    const modalMenu = e.target.parentNode.lastElementChild;
    const clases = modalMenu.className;
    console.log(clases);

    modalOptionUser.forEach((modal) => {

      modal.classList.remove("user-menu-modal-active");

    });

    modalMenu.classList.toggle("user-menu-modal-active");

    setTimeout(()=>{
      modalMenu.classList.remove("user-menu-modal-active");
    },3000)
}


function handleUserEdit(id){



const userSelectEdit = usersState.filter(user => user.id == id);

setUserSelect(userSelectEdit)
setEditModal(!modalEdit)
}



  return (
    <>
      <div className="table-users">
        <table>
          <thead>
            <tr>
              <th>AVATAR</th>
              <th>NOMBRE</th>
              <th>EMAIL</th>
              <th>ROL</th>
              <th>ESTADO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usersState.map((user) => {
              return (
                <tr key={user.id}>
                  <td><img src={user.avatar} width={"40"} alt="img avatar" /></td>
                  <td>{user.nombre} {user.apellido}</td>
                  <td className="table-user-mail">{user.email}</td>
                  <td>{user.rol}</td>
                  <td><p className={user.active ? "user-active" : ""}>{user.active ? "Activo" : "Inactivo"}</p></td>
                  <td className="users-menu">
                    <button
                      onClick={(e) => {
                        handleMenu(e);
                      }}
                    >
                      ---
                    </button>
                    <div className="user-menu-modal">
                      <ul>
                        <li>
                          <button
                          onClick={()=> handleUserEdit(user.id)}
                          >Editar</button>
                        </li>
                        <li>
                          <button>Borrar</button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    { modalEdit  && 
      <EditUserModal
      userSelect={userSelect}
      setUsers={setUsers}
      
      usersState={usersState}

      modalEdit={modalEdit} 
      setEditModal={setEditModal}/>
      }
    </>
  );
};
