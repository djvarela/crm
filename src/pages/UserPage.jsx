
import { useState } from "react";
import { TableUsers } from "../components/user/TableUsers";
import { AgregarUser } from "./Users/AgregarUser";

export const UserPage = () => {

  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  const [usersState, setUsers] = useState(usersLocal)

  

  return (
    <section className="user-page">
      <AgregarUser setUsers={setUsers} 
      usersState={usersState}/>


      <TableUsers usersState={usersState} 
      setUsers={setUsers}/>


    
    </section>
  );
};
