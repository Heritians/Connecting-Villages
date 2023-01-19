import { useContext } from "react";


import AuthContext from "../../../context/AuthContext";

function LogOutButton() {
  const loginAuthUser = useContext(AuthContext);
    return (
        <button onClick={loginAuthUser.logoutUser}>
            LOG OUT
      </button>
    );
  }
  export default LogOutButton;