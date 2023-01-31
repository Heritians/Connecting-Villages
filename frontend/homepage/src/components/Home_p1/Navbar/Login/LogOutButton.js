import { useContext } from "react";
import './LogOutButton.css';

import AuthContext from "../../../context/AuthContext";



function LogOutButton() {
  const loginAuthUser = useContext(AuthContext);
    return (
      <a href="/">
        <button 
        className="btn" 
        onClick={loginAuthUser.logoutUser}>
            LOG OUT
      </button>
      </a>
    );
  }
  export default LogOutButton;