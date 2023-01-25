import React, { useState, useEffect, useRef , useContext} from "react";
import AuthContext, {AuthProvider} from "../../../context/AuthContext";
import './Popup.css';


function Popup(props) {

  const loginAuthUser = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOwner, setOwner] = useState(true);

  const IsOwner = (event) => {
    if (event.target.value === "GOVTOff") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };
  return (
    <div className="popup">
      <div className="popup-inner">
      <a href="/">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
         Close
        </button>
        </a>
        {/* {props.children} */}
        <form onSubmit={loginAuthUser.loginUser}>
          <label>
            Adhaar No.:
            <input className="inpt-adhaar" type="text" name="AN" />
          </label>
          <br />
          <label>
            Password:
            <input className="inpt-password" type="password" name="pwd" />
          </label>
          <br />
          <label>
            Role:
            <select className="select-role" onChange={IsOwner} required name="role">
              <option defaultValue="None">None</option>
              <option value="GOVTOff">Owner</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
          <br />

          <label>
            Village Name:
            <select className="select-village"disabled={isDisabled} name="villname">
              <option value="Lasudiya Khas">Lasudiya Khas</option>
              <option value="Gawa Kheda">Gawa Kheda</option>
              <option value="Mana Khedi">Mana Khedi</option>
              <option value="Nipaniya Kalan">Nipaniya Kalan</option>
              <option value="Sehore">Sehore</option>
              <option value="Sehore" selected disabled hidden>
                None
              </option>
            </select>
          </label>
          <br />
          <label>
            <input className = "inpt " type="checkbox" /> I have read 
            <a className="agree-link" href={"https://vtop.vitbhopal.ac.in/vtop/initialProcess"}>
              the agreement
            </a>
          </label>
          <br />

          <input className=" inpt submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Popup;
