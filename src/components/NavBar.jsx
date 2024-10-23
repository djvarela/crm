import { Link } from "react-router-dom";
import FormsSearch from "./FormsSearch";
import { UserLogin } from "./user/UserLogin";


export const NavBar = () => {


  return (
    <nav>
      <ul>
           
        <li>
          <FormsSearch />
      
        </li>
        <li>  <UserLogin /></li>
       
      </ul>
    </nav>
  );
};
