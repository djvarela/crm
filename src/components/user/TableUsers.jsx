import { useState } from "react";
import EditUserModal from "./EditUserModal";
import ActionUsersModal from "../modals/ActionUsersModal";

export const TableUsers = ({ usersState, setUsers }) => {
  const [userSelect, setUserSelect] = useState(null);
  const [modalEdit, setEditModal] = useState(false);

  function handleMenu(e) {
    const modalOptionUser = document.querySelectorAll(".user-menu-modal");

    const modalMenu = e.target.parentNode.lastElementChild;


    modalOptionUser.forEach((modal) => {
      modal.classList.remove("user-menu-modal-active");
    });

    modalMenu.classList.toggle("user-menu-modal-active");

    setTimeout(()=>{
      modalMenu.classList.remove("user-menu-modal-active");
    },3000)
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
                  <td>
                    <img src={user.avatar} width={"40"} alt="img avatar" />
                  </td>
                  <td>{user.nombre} {user.apellido}</td>
                  <td className="table-user-mail">{user.email}</td>
                  <td>{user.rol}</td>
                  <td>
                    <p className={`estado-user ${  user.active ? "user-active" : ""}`}>
                      {user.active ? "Activo" : "Inactivo"}
                    </p>
                  </td>
                  <td className="users-menu">
                    <button onClick={(e)=>{handleMenu(e)}} > --- </button>

                    <ActionUsersModal 
                     userSelect={userSelect}
                    usersState={usersState}
                    user={user}
                    modalEdit={modalEdit}
                    setEditModal={setEditModal}
                    setUserSelect={setUserSelect}
                    setUsers={setUsers}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {modalEdit && (
        <EditUserModal
          userSelect={userSelect}
          setUsers={setUsers}
          usersState={usersState}
          modalEdit={modalEdit}
          setEditModal={setEditModal}
        />
      )}
    </>
  );
};
