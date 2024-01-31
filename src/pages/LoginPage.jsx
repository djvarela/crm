import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const LoginPage = () => {
  const {login }= useContext(AuthContext) 
  console.log(login)
  const navigation = useNavigate();

  function onLogin(e) {


    
    e.preventDefault();

     const email = e.target.email.value.toLowerCase().trim();

     login(email);


    // const localUser = JSON.parse(localStorage.getItem("users")) || [];

    // const userLog = localUser.filter(
    //   (user) => user.email.toLowerCase() === email
    // );

    // if (userLog.length < 1) return {};

    // const log = {
    //   id_user: (userLog[0].id = ""),
    //   nombre: userLog[0].nombre,
    //   apellido: userLog[0].apellido,
    //   rol: userLog[0].rol,
    //   email: userLog[0].email,
    //   date: new Date(),
    // };

    // localStorage.setItem("log", JSON.stringify(log)); 


   
    navigation("/home");
  }

  return (
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={onLogin}>
        <label htmlFor="email ">Email:</label>
        <input type="text" name="email" id="email" />

        <button>Ingresar</button>
      </form>
    </div>
    </>
  );
};

