import React, { useState, useEffect, useRef , useContext} from "react";
import './CreateAccount.css';


function CreateAccount(props) {

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
    <div className="CreateAccount">
      <div className="CreateAccount-inner">
      <a href="/">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        </a>
        {/* {props.children} */}
        <form >
          <label>
            Adhaar No.:
            <input type="text" name="AN" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="pwd" />
          </label>
          <br />
          <label>
            Role:
            <select onChange={IsOwner} required name="role">
              <option defaultValue="None">None</option>
              <option value="GOVTOff">Owner</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </label>
          <br />

          <label>
            Village Name:
            <select disabled={isDisabled} name="villname">
              <option value="Lasudiya Khas">Lasudiya Khas</option>
              <option value="Gawa Kheda">Gawa Kheda</option>
              <option value="Mana Khedi">Mana Khedi</option>
              <option value="Nipaniya Kalan">Nipaniya Kalan</option>
              <option value="Beda Khedi">Beda Khedi</option>
              <option value="Sehore" selected disabled hidden>
                None
              </option>
            </select>
          </label>
          <br />
          <label>
            <input type="checkbox" />I have read
            <a href={"https://vtop.vitbhopal.ac.in/vtop/initialProcess"}>
              the agreement
            </a>
          </label>
          <br />

          <input type="submit" value="Create Account" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
