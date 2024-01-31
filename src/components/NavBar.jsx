import { Link, useNavigate } from "react-router-dom";
import FormsSearch from "./FormsSearch";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const NavBar = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

function onLogout() {

    logout();

    navigate("/login");
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/usuarios/agregar">Agregar usuarios</Link>{" "}
        </li>
        <li>
          <FormsSearch />
        </li>
        <li>
          <button onClick={onLogout}>Salir</button>
        </li>
      </ul>
    </nav>
  );
};
