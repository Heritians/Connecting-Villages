import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Auth";
import GlobalLinks from "../../assets/js/GlobalLinks";
import Villages from "../../assets/js/Villages";
import {
  LoginContainer,
  LoginWrapper,
  LoginTitle,
  LoginTitleSpan,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginSelect,
  LoginOption,
  LoginCheckbox,
  LoginSubmit,
  InputsRow,
  CheckBoxRow,
  MessageSentAlert,
} from "./LoginStyles";

export default function LoginForm1() {
  const loginAuthUser = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(true);

  const IsOwner = (event) => {
    if (event.target.value === "GOVTOff" || event.target.value === "None") {
      setIsDisabled(true);
      document.getElementById("Village").value = "None";
    } else {
      setIsDisabled(false);
    }
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>
          <LoginTitleSpan>
            Log<span style={{ color: "#231bbc" }}>in</span>
          </LoginTitleSpan>
        </LoginTitle>
        <LoginForm onSubmit={loginAuthUser.loginUser}>
          <LoginInput
            type="text"
            placeholder="Aadhaar No."
            name="AN"
            required
          />
          <LoginInput
            type="password"
            placeholder="Password"
            name="pwd"
            required
          />
          <InputsRow className="row">
            <div className="col-md-4 form-group mt-3">
              <LoginLabel htmlFor="Role">Role:</LoginLabel>
            </div>
            <div className="col-md-5 form-group mt-3">
              <LoginSelect
                name="role"
                onChange={IsOwner}
                required
              >
                <LoginOption defaultValue="None">None</LoginOption>
                <LoginOption value="GOVTOff">Owner</LoginOption>
                <LoginOption value="admin">Admin</LoginOption>
                <LoginOption value="user">User</LoginOption>
              </LoginSelect>
            </div>
          </InputsRow>
          <InputsRow className="row">
            <div className="col-md-4 form-group mt-3">
              <LoginLabel htmlFor="Village">Village:</LoginLabel>
            </div>
            <div className="col-md-5 form-group mt-3">
              <LoginSelect
                name="villname"
                id="Village"
                disabled={isDisabled}
              >
                <LoginOption defaultValue="None">None</LoginOption>
                <LoginOption value="Sehore">Sehore</LoginOption>
                {Villages.map((village, index) => (
                  <LoginOption value={village.DB_Name} key={index}>
                    {village.title}
                  </LoginOption>
                ))}
              </LoginSelect>
            </div>
          </InputsRow>
          <CheckBoxRow className="row">
            <LoginLabel htmlFor="agreement" style={{ fontSize: "1rem" }}>
              <LoginCheckbox type="checkbox" name="agreement" required />I agree
              to the <Link to={GlobalLinks.TnC}>Terms & Conditions</Link>
            </LoginLabel>
          </CheckBoxRow>

          <MessageSentAlert id="login-user-alert" className="alert_style">
            Error Logging in
          </MessageSentAlert>

          <LoginSubmit id="login-page-button" type="submit">
            Login
          </LoginSubmit>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
}
