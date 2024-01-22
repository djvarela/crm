import { useLocation } from "react-router-dom";

export const getClientsFormSearch = (search) => {
  const location = useLocation();
  const get = location.search.slice(3);
  const SearchValue = search ? search : get;

  const localClients = JSON.parse(localStorage.getItem("clients")) || [];

  return localClients.filter((result) =>
    result.nombre.toLowerCase().includes(SearchValue.toLowerCase())
  );
};
