import { useState } from "react";
import EditUserModal from "./EditUserModal";

export const TableUsers = ({ usersState, setUsers }) => {
  const [userSelect, setUserSelect] = useState(null);
  const [modalEdit, setEditModal] = useState(false);

  function handleMenu(e) {
    const modalOptionUser = document.querySelectorAll(".user-menu-modal");

    const modalMenu = e.target.parentNode.lastElementChild;
    const clases = modalMenu.className;

    modalOptionUser.forEach((modal) => {
      modal.classList.remove("user-menu-modal-active");
    });

    modalMenu.classList.toggle("user-menu-modal-active");

    setTimeout(()=>{
      modalMenu.classList.remove("user-menu-modal-active");
    },3000)
  }

  function handleDeleteUser(id) {
    const deleteUser = usersState.filter((user) => user.id != id);
    setUsers(deleteUser);
    localStorage.setItem("users", JSON.stringify(deleteUser));
  }

  function handleUserEdit(id) {
    const userSelectEdit = usersState.filter((user) => user.id == id);

    setUserSelect(userSelectEdit);
    setEditModal(!modalEdit);
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
                  <td>
                    {user.nombre} {user.apellido}
                  </td>
                  <td className="table-user-mail">{user.email}</td>
                  <td>{user.rol}</td>
                  <td>
                    <p
                      className={`estado-user ${
                        user.active ? "user-active" : ""
                      }`}
                    >
                      {user.active ? "Activo" : "Inactivo"}
                    </p>
                  </td>
                  <td className="users-menu">
                    <button
                      onClick={(e) => {
                        handleMenu(e);
                      }}
                    >
                      ---
                    </button>
                    <div className="user-menu-modal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="M10 17V7l5 5z"></path>
                      </svg>
                      <ul>
                        <li className="edit-user">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M92.69 208H48v-44.69l88-88L180.69 120ZM192 108.69L147.32 64l24-24L216 84.69Z"
                            />
                          </svg>

                          <button onClick={() => handleUserEdit(user.id)}>
                            Editar
                          </button>
                        </li>
                        <li className="delete-user">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 256 256"
                          >
                            <path
                              fill="currentColor"
                              d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"
                            />
                          </svg>
                          <button onClick={() => handleDeleteUser(user.id)}>
                            Borrar
                          </button>
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
