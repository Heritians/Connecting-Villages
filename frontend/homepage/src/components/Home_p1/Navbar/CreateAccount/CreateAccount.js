import React, { useState, useEffect, useRef , useContext} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext, {AuthProvider} from "../../../context/AuthContext";


import './CreateAccount.css';


function CreateAccount(props) {

  const loginAuthUser = useContext(AuthContext);

  const [isDisabled, setIsDisabled] = useState(false);
  // const [isOwner, setOwner] = useState(true);
  // const [isAdmin,setAdmin] = useState(false)
  // const [Village, setVillage] = useState("Lasudiya Khas")
  const Village=loginAuthUser.village;
  const role=loginAuthUser.user?loginAuthUser.user["sub"].split('_')[1]:"Not Authenticated"
  const history = useNavigate(); 
  const [formData, setFormData] = useState({
    AADHAR_NO: "",
    password: "",
    village_name: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      AADHAR_NO: e.target.AN.value,
      password: e.target.pwd.value,
      village_name: e.target.villname.value,
      role: e.target.role.value,
    });  
    console.log(formData);
    const settings = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("authTokens")).access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    
    let newURL =
      "https://ubaformapi-git-prod-fastapis-build.vercel.app/auth/signup"
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    
    if (data?.status==="success"){
        history("/") 
    
    }else{
        console.log("error")
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
        <form onSubmit={handleSubmit}>
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
          {role=="GOVTOff"?<div>
          <label>
            Role:
            
            <select required name="role">
              <option defaultValue="None">None</option>
              {/* <option value="GOVTOff">Owner</option> */}
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label> </div>
          :
          <div>
          <label>
          Role:
          <select required name="role">
            <option defaultValue="None">None</option>
            <option value="user">User</option>
          </select>
        </label>
          </div>
          }

          {role=="GOVTOff" ? <div>
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
          </div>
        :
        <div> 
          <label>
            Village Name:
            <input value = {Village} disabled={true} name="villname"/>
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
