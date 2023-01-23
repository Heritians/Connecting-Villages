import React, { useState, useEffect, useRef , useContext} from "react";
import './CreateAccount.css';


function CreateAccount(props) {

  const [isDisabled, setIsDisabled] = useState(false);
  const [isOwner, setOwner] = useState(false);
  const [isAdmin,setAdmin] = useState(true)
  const [Village, setVillage] = useState("Lasudiya Khas")
 

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
          {isOwner&& <div>
          <label>
            Role:
            
            <select required name="role">
              <option defaultValue="None">None</option>
              <option value="GOVTOff">Owner</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </label> </div>}
          {isAdmin&& <div>
          <label>
          Role:
          <select required name="role">
            <option defaultValue="None">None</option>
            <option value="User">User</option>
          </select>
        </label>
          </div>}

          {isOwner&& <div>
          <label>
          Village Name:
          <select name="villname">
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
          </div>}
          
        {isAdmin&& <div> 
          <label>
            Village Name:
            <input value = {Village} disabled={true}/>
          </label>
          <br />
          <label>
            <input type="checkbox" />I have read
            <a href={"https://vtop.vitbhopal.ac.in/vtop/initialProcess"}>
              the agreement
            </a>
          </label>
          </div>}
          <br />

          <input type="submit" value="Create Account" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
