import { Route, Routes } from "react-router-dom";
import { CrmRoutes } from "../routes/CrmRoutes";
import { LoginPage } from "../pages";
import { PublicRoutes } from "../routes/PublicRoutes";
import { PrivateRoutes } from "../routes/PrivateRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*"
          element={

            <PublicRoutes>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoutes>

          }
        />

        <Route path="/*"
          element={ 
            <PrivateRoutes>
              <CrmRoutes />
            </PrivateRoutes>
            
          }
        />
      </Routes>
    </>
  );
};
