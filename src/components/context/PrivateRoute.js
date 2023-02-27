import { Route, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./Auth";

const PrivateRoute = ({ children, ...rest }) => {
  let loginAuthUser = useContext(AuthContext);
  return (
    <Route {...rest}>
      {!loginAuthUser ? <Navigate replace to="/login" /> : <Outlet />}
    </Route>
  );
};

export default PrivateRoute;
