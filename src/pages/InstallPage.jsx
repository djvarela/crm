import { useState } from "react";
import "../assets/css/install.css";

export const InstallPage = () => {
  const [baseTest, setBaseTest] = useState();

  function installBaseTestConfig() {
    const users = localStorage.getItem("users");

    const usersModel = [{
      id: self.crypto.randomUUID(),
      nombre: "Admin",
      apellido: "Admin",
      rol: "Administrador",
      email: "admin@admin.com",
      avatar: "img",
      active: true,
      password: 1234,
    }];

    if (!users) {
      
   
      localStorage.setItem("users", JSON.stringify(usersModel));
    }

 
  }

  return (
    <section className="install-container">
      <h2>Installar configuracion de prueba</h2>

      <section className="btn-install">
        <button onClick={installBaseTestConfig}>Installar</button>
      </section>
    </section>
  );
};
