import { Link } from "react-router-dom";
import FormsSearch from "./FormsSearch";


export const NavBar = () => {


  return (
    <nav>
      <ul>
           
        <li>
          <FormsSearch />
        </li>
       
      </ul>
    </nav>
  );
};
