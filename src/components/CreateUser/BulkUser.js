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
import Papa from "papaparse";

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
  const villageValue = loginAuthUser?.user
    ? loginAuthUser.user["sub"].split("_")[2] +
      (loginAuthUser.user["sub"].split("_")[3]
        ? "_" + loginAuthUser.user["sub"].split("_")[3]
        : "")
    : "Not Authenticated";

  const [aadhaarPassword, setAadhaarPassword] = useState();

  const handleFileChange = (e) => {
    Papa.parse(e.target.files[0], {
      complete: function (results) {
        setAadhaarPassword(() => {
          let chunks = [];

          while (results.data.length > 0) {
            chunks.push(results.data.splice(0, 10));
          }

          let chunkedAadhaar = [];
          let chunkedPassword = [];

          chunks.forEach((chunk) => {
            let aadhaar = [];
            let pass = [];
            chunk.forEach((chun) => {
              aadhaar.push(chun[0]);
              pass.push(chun[1]);
            });
            chunkedAadhaar.push(aadhaar);
            chunkedPassword.push(pass);
          });

          const newaadhaarPassword = chunkedAadhaar.map((aadhaar, index) => {
            return [aadhaar, chunkedPassword[index]];
          });

          return newaadhaarPassword;
        });
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("create-user-page-button").disabled = true;
    document.getElementById("create-user-page-button").innerHTML =
      "Creating Users...";

    aadhaarPassword.forEach(async (datapass) => {
      const postingdata = JSON.stringify({
        AADHAR_NOS: datapass[0],
        passwords: datapass[1],
        village_name: villageValue,
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

      const fetchResponse = await fetch(
        "https://ubaformapi.vercel.app/auth/signup",
        settings
      );
      const data = await fetchResponse.json();
      console.log(data);
    });
    document.getElementById("create-user-page-button").disabled = false;
    document.getElementById("create-user-page-button").innerHTML =
      "Create User";
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
            onChange={handleFileChange}
            type="file"
            placeholder="Upload CSV File"
            name="file"
            required
            accept=".csv"
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
                  <CreateUserOption defaultValue={villageValue}>
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
