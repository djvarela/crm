import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const getClientsFormSearch = (searchState) => {

 
  const location = useLocation();
 const get = location.search.slice(3);
  const SearchValue = searchState ? searchState : get;

  const localCustomer = JSON.parse(localStorage.getItem("customers")) || [];

  return  localCustomer.filter((search) => search.name.toLowerCase().includes( SearchValue.toLowerCase()  ))
  
};
