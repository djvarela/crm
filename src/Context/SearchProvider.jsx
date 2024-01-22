import { useState } from "react";
import { SearchContext } from "./SearchContext";

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState();
  const [newClient, setNewClient] = useState([]);
  const [atender, setAtender] = useState({});

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        newClient,
        setNewClient,
        atender,
        setAtender,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
