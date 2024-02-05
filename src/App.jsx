
import "./assets/css/normalize.css";
import "./App.css";

import { AppRouter } from "./router";
import { AuthProvider } from "./auth/context/AuthProvider";





export function App() {


  return (
    <AuthProvider>
     
        <AppRouter />
     
    </AuthProvider>
  );
}

