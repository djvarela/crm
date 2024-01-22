import "./App.css";
import SearchProvider from "./Context/SearchProvider";
import { NavBar } from "./components";
import AppRouter from "./router/AppRouter";

function App() {


  return (
    <SearchProvider>

      <NavBar/>
      <AppRouter/>
    
    </SearchProvider>
  );
}

export default App;
