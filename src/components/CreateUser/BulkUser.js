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

export default function BulkUserForm() {
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

  const handleAadhaarChange = (e) => {
    setAadhaarNo(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("create-user-page-button").disabled = true;
    document.getElementById("create-user-page-button").innerHTML =
      "Creating User...";

    const newaadhaarnos = aadhaarNo.split(" ");
    const newpasswords = password.split(" ");
    const postingdata = JSON.stringify({
      AADHAR_NOS: newaadhaarnos,
      passwords: newpasswords,
      village_name: "Lasudiya_Khas",
      role: "user",
    });
    const settings = {
      method: "POST",
      body: postingdata,
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    let newURL = "https://ubaformapi.vercel.app/auth/signup";
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    document.getElementById("create-user-page-button").disabled = false;
    document.getElementById("create-user-page-button").innerHTML =
      "Create User";
    console.log(data);
    if (data?.status === "success") {
      document.getElementById("create-user-alert").style.display = "block";
      if (data?.message[1].length > 61) {
        document.getElementById(
          "create-user-alert"
        ).innerHTML = `Users Created Successfully!`;
        document.getElementById("create-user-alert-new").style.display =
          "block";
        document.getElementById(
          "create-user-alert-new"
        ).innerHTML = `${data?.message[1]}`;
        document.getElementById("create-user-alert-new").style.backgroundColor =
          "#f44336";
      } else {
        // document.getElementById(
        //   "create-user-alert"
        // ).innerHTML = `Users Created Successfully!`;
      }
      document.getElementById("create-user-alert").style.backgroundColor =
        "#6eca46";
      setTimeout(function () {
        document.getElementById("create-user-alert").style.display = "none";
      }, 8000);
      setTimeout(() => {
        window.location.reload();
      }, 8000);
    } else {
      document.getElementById("create-user-alert").style.display = "block";
      document.getElementById("create-user-alert-new").style.display = "block";
      document.getElementById("create-user-alert").style.backgroundColor =
        "#f44336";
      document.getElementById("create-user-alert-new").style.backgroundColor =
        "#f44336";
      document.getElementById(
        "create-user-alert"
      ).innerHTML = `Error Creating Users, Please Try Again!`;
      // document.getElementById("create-user-alert-new").innerHTML =
      //   data?.message[1];
      setTimeout(function () {
        document.getElementById("create-user-alert").style.display = "none";
        document.getElementById("create-user-alert-new").style.display = "none";
      }, 8000);
    }
  };

  return (
    <CreateUserContainer>
      <CreateUserWrapper>
        <CreateUserTitle>
          <CreateUserTitleSpan>
            Create <span style={{ color: "#231bbc" }}>Bulk Users</span>
          </CreateUserTitleSpan>
        </CreateUserTitle>
        <CreateUserForm onSubmit={handleSubmit}>
          <CreateUserInput
            onChange={handleAadhaarChange}
            type="text"
            placeholder="Enter Aadhaar Nos."
            name="AADHAR_NO"
            required
          />
          <CreateUserInput
            onChange={handlePasswordChange}
            type="text"
            placeholder="Enter Passwords"
            name="password"
            required
          />
          <InputsRow className="row">
            <div className="col-md-5 form-group mt-3">
              <CreateUserLabel htmlFor="Role">Role:</CreateUserLabel>
            </div>
            <div className="col-md-5 form-group mt-3">
              {role === "GOVTOff" ? (
                <CreateUserSelect name="role">
                  <CreateUserOption defaultValue="None">None</CreateUserOption>
                  <CreateUserOption value="admin">Admin</CreateUserOption>
                  <CreateUserOption value="user">User</CreateUserOption>
                </CreateUserSelect>
              ) : role === "admin" ? (
                <CreateUserSelect name="role" disabled>
                  <CreateUserOption defaultValue="user">User</CreateUserOption>
                </CreateUserSelect>
              ) : (
                <CreateUserSelect name="role" disabled>
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
                <CreateUserSelect name="villname">
                  <CreateUserOption defaultValue="None">None</CreateUserOption>
                  <CreateUserOption value="Sehore">Sehore</CreateUserOption>
                  {Villages.map((village, index) => (
                    <CreateUserOption value={village.DB_Name} key={index}>
                      {village.title}
                    </CreateUserOption>
                  ))}
                </CreateUserSelect>
              ) : (
                <CreateUserSelect name="villname" disabled>
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
            Users Created Successfully
          </MessageSentAlert>
          <MessageSentAlert id="create-user-alert-new" className="alert_style">
            Users Created Successfully
          </MessageSentAlert>

          <CreateUserSubmit type="submit" id="create-user-page-button">
            Create Users
          </CreateUserSubmit>
        </CreateUserForm>
      </CreateUserWrapper>
    </CreateUserContainer>
  );
}
