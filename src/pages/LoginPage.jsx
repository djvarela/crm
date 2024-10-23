import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import "../assets/css/normalize.css";
import "../assets/css/login.css";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigation = useNavigate();

  function onLogin(e) {
    e.preventDefault();

    const localUsers = JSON.parse(localStorage.getItem("users")) || [];

    const email = e.target.email.value.toLowerCase().trim();

   

    const userLog = localUsers.filter(
      (user) => user.email.toLowerCase() === email
    );

     if (userLog.length < 1) return {};

     const log = {
    id_user: (userLog[0].id =crypto.randomUUID()),
     nombre: userLog[0].nombre,
      apellido: userLog[0].apellido,
      rol: userLog[0].rol,
      email: userLog[0].email,
      date: new Date(),
      avatar: userLog[0].avatar
    };

    // localStorage.setItem("log", JSON.stringify(log));


    login(log);

    navigation("/home");
  }

  return (
    <>
      <section className="login-page">

        <div className="login-container">
          <div className="forms-container">
            <h2>Login</h2>
            <form onSubmit={onLogin}>
              <span>
                <label htmlFor="email ">Email:</label>
                <input type="text" name="email" id="email" />

                <label htmlFor="clave">Clave:</label>
                <input type="text" name="clave" id="clave" />
              </span>

              <button>Ingresar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
