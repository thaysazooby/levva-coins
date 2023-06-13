import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Login } from "./pages/Login";
import { NewAccount } from "./pages/NewAccount";
import { Home } from "./pages/Home";
import { UnprotectedRoutes } from "./UnprotectedRoutes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route element={<UnprotectedRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-account" element={<NewAccount />} />
      </Route>
      <Route>
        <Route path="/home" element={<Home />}/>
      </Route>
    </>
  )
);
