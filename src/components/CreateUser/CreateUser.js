import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Auth";
import GlobalLinks from "../../assets/js/GlobalLinks";
import Villages from "../../assets/js/Villages";
import {
  CreateUserContainer,
  CreateUserWrapper,
  CreateUserTitle,
  CreateUserTitleSpan,
  CreateUserForm,
  CreateUserInput,
  CreateUserLabel,
  CreateUserSelect,
  CreateUserOption,
  CreateUserCheckbox,
  CreateUserSubmit,
  InputsRow,
  CheckBoxRow,
  MessageSentAlert,
} from "./CreateUserStyles";

export default function CreateUserForm1() {
  const loginAuthUser = useContext(AuthContext);
  const role = loginAuthUser.user
    ? loginAuthUser.user["sub"].split("_")[1]
    : "Not Authenticated";
  const village = loginAuthUser?.user
    ? loginAuthUser.user["sub"].split("_")[2] +
      (loginAuthUser.user["sub"].split("_")[3]
        ? " " + loginAuthUser.user["sub"].split("_")[3]
        : "")
    : "Not Authenticated";

  const [aadhaarNo, setAadhaarNo] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("user");
  const [userVillage, setUserVillage] = useState(village.split(" ").join("_"));

  const handleAadhaarChange = (e) => {
    setAadhaarNo(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserRoleChange = (e) => {
    setUserRole(e.target.value);
  };
  const handleUserVillageChange = (e) => {
    setUserVillage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("create-user-page-button").disabled = true;
    document.getElementById("create-user-page-button").innerHTML =
      "Creating User...";

    const settings = {
      method: "POST",
      body: JSON.stringify({
        AADHAR_NO: aadhaarNo,
        password: password,
        village_name: userVillage,
        role: userRole,
      }),
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    console.log(settings);

    let newURL = "https://ubaformapi.vercel.app/auth/signup";
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    document.getElementById("create-user-page-button").disabled = false;
    document.getElementById("create-user-page-button").innerHTML =
      "Create User";
    console.log(data);
    if (data?.status === "success") {
      document.getElementById("create-user-alert").style.display = "block";
      document.getElementById("create-user-alert").innerHTML =
        "User Created Successfully!";
      document.getElementById("create-user-alert").style.backgroundColor =
        "#6eca46";
      setTimeout(function () {
        document.getElementById("create-user-alert").style.display = "none";
      }, 4000);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      document.getElementById("create-user-alert").style.display = "block";
      document.getElementById("create-user-alert").style.backgroundColor =
        "#f44336";
      document.getElementById("create-user-alert").innerHTML =
        "Error Creating User, Please Try Again!";
      setTimeout(function () {
        document.getElementById("create-user-alert").style.display = "none";
      }, 4000);
      console.log(data);
    }
  };
  return (
    <CreateUserContainer>
      <CreateUserWrapper>
        <CreateUserTitle>
          <CreateUserTitleSpan>
            Create <span style={{ color: "#231bbc" }}>User</span>
          </CreateUserTitleSpan>
        </CreateUserTitle>
        <CreateUserForm onSubmit={handleSubmit}>
          <CreateUserInput
            onChange={handleAadhaarChange}
            type="text"
            placeholder="Aadhaar No."
            name="AADHAR_NO"
            minLength={12}
            maxLength={12}
            required
          />
          <CreateUserInput
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
            name="password"
            minLength={5}
            maxLength={24}
            required
          />
          <InputsRow className="row">
            <div className="col-md-5 form-group mt-3">
              <CreateUserLabel htmlFor="Role">Role:</CreateUserLabel>
            </div>
            <div className="col-md-5 form-group mt-3">
              {role === "GOVTOff" ? (
                <CreateUserSelect name="role" onChange={handleUserRoleChange}>
                  <CreateUserOption defaultValue="None">None</CreateUserOption>
                  <CreateUserOption value="admin">Admin</CreateUserOption>
                  <CreateUserOption value="user">User</CreateUserOption>
                </CreateUserSelect>
              ) : role === "admin" ? (
                <CreateUserSelect
                  name="role"
                  disabled
                  onChange={handleUserRoleChange}
                >
                  <CreateUserOption defaultValue="user">User</CreateUserOption>
                </CreateUserSelect>
              ) : (
                <CreateUserSelect
                  name="role"
                  disabled
                  onChange={handleUserRoleChange}
                >
                  <CreateUserOption defaultValue="user">User</CreateUserOption>
                </CreateUserSelect>
              )}
            </div>
          </InputsRow>
          <InputsRow className="row">
            <div className="col-md-5 form-group mt-3">
              <CreateUserLabel htmlFor="Village">Village:</CreateUserLabel>
            </div>
            <div className="col-md-5 form-group mt-3">
              {role === "GOVTOff" ? (
                <CreateUserSelect
                  name="villname"
                  onChange={handleUserVillageChange}
                >
                  <CreateUserOption defaultValue="None">None</CreateUserOption>
                  <CreateUserOption value="Sehore">Sehore</CreateUserOption>
                  {Villages.map((village, index) => (
                    <CreateUserOption value={village.DB_Name} key={index}>
                      {village.title}
                    </CreateUserOption>
                  ))}
                </CreateUserSelect>
              ) : (
                <CreateUserSelect
                  name="villname"
                  disabled
                  onChange={handleUserVillageChange}
                >
                  <CreateUserOption defaultValue={village}>
                    {village}
                  </CreateUserOption>
                </CreateUserSelect>
              )}
            </div>
          </InputsRow>
          <CheckBoxRow className="row">
            <CreateUserLabel htmlFor="agreement" style={{ fontSize: "1rem" }}>
              <CreateUserCheckbox type="checkbox" name="agreement" required />I
              agree to the <Link to={GlobalLinks.TnC}>Terms & Conditions</Link>
            </CreateUserLabel>
          </CheckBoxRow>

          <MessageSentAlert id="create-user-alert" className="alert_style">
            User Created Successfully
          </MessageSentAlert>

          <CreateUserSubmit type="submit" id="create-user-page-button">
            Create User
          </CreateUserSubmit>
        </CreateUserForm>
      </CreateUserWrapper>
    </CreateUserContainer>
  );
}
