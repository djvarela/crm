
import { useState } from "react";
import { TableUsers } from "../components/user/TableUsers";
import { AgregarUser } from "./Users/AgregarUser";

export const UserPage = () => {

  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const [usersState, setUsers] = useState(usersLocal)
  const [addUser, setAddUser] = useState(false)

  

  return (
    <section className="user-page">
      <h2>Usuarios</h2>
      <span>

        <button
        onClick={()=>setAddUser(!addUser)}
        ><img src="/public/icons/add-user.svg" alt="" />
       AGREGAR</button>
        </span>
      
     {addUser && <AgregarUser 
     setAddUser={setAddUser}
      setUsers={setUsers} 
      usersState={usersState}/>
    }

      <TableUsers usersState={usersState} 
      setUsers={setUsers}/>


    
    </section>
  );
};
