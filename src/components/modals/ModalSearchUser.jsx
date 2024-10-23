import { useState } from "react";
import { FormsCliente } from "../FormsCliente";
import { AtenderUser } from "../AtenderUser";

export const ModalSearchUser = ({ search, closeModal, setUser, users }) => {
  const [newUser, setNewUser] = useState(false);
  const [atenderUser, setAtenderUser]  = useState(false)

  return (
    <>
      <div className="searchUserModal">
        <button onClick={closeModal}>x</button>

        <div className="userContent">
          <ul>
            {search.map((li) => (
              <li key={li.id}>
                <div className="userModal">
                  {li.nombre}

                  <div className="userDates">
                    <small>{li.telefono}</small>
                    <small>{li.email}</small>
                  </div>

                  <button
                    onClick={()=> setAtenderUser(!atenderUser)}
                  >Atender</button>

                  {
                    atenderUser && (
                    <AtenderUser user={li} />
                    )
                  }
                </div>
              </li>
            ))}
          </ul>

          <div className="newUser">
            <button onClick={() => setNewUser(!newUser)}>CARGAR NUEVO </button>

            {newUser && <FormsCliente setUser={setUser} users={users} />}
          </div>
        </div>
      </div>
    </>
  );
};
