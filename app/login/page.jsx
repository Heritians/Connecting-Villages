"use client";

import { useState, useContext } from "react";
import AuthContext from "@/Utils/Auth";
import { GlobalLinks } from "@/assets";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const { loginUser, villages_list } = useContext(AuthContext);

  const [isVillageDisabled, setIsVillageDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleRoleChange = (e) => {
    if (e.target.value === "GOVTOff" || e.target.value === "None") {
      setIsVillageDisabled(true);
      document.getElementById("login_village").value = "None";
    } else {
      setIsVillageDisabled(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={loginUser}
        className="w-full sm:w-1/3 bg-white rounded-xl p-4 flex flex-col items-center justify-center h-max mx-4 my-20"
      >
        <h2 className="text-4xl py-3 font-semibold text-primary-orange">
          Log<span className="text-primary-blue">in</span>
        </h2>

        <div className="w-full flex flex-col items-center justify-center mt-5">
          <input
            className="login_create_input my-2"
            type="text"
            placeholder="Aadhaar Number"
            name="login_aadhaar_no"
            id="login_aadhaar_no"
            minLength={12}
            maxLength={12}
            required
          />
          <div className="w-full relative">
            <input
              className="login_create_input my-2"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              name="login_password"
              id="login_password"
              minLength={6}
              maxLength={24}
              required
            />
            <button
              className="absolute inset-y-0 right-3 text-black/50"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-start mt-5">
          <label className="w-2/3">Role:</label>
          <select
            className="login_create_input my-2 ml-2"
            name="login_role"
            id="login_role"
            required
            defaultValue="None"
            onChange={handleRoleChange}
          >
            <option value="None" disabled>
              Select Role
            </option>
            <option value="GOVTOff">Owner</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="w-full flex flex-row items-center justify-start">
          <label className="w-2/3">Village:</label>
          <select
            className="login_create_input my-2 ml-2"
            name="login_village"
            id="login_village"
            required={!isVillageDisabled}
            defaultValue="None"
            disabled={isVillageDisabled}
          >
            <option value="None" disabled>
              Select Village
            </option>
            {villages_list.map((village) => (
              <option value={village} key={village}>
                {village.split("_").join(" ")}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex flex-row items-center justify-start mt-5">
          <input type="checkbox" name="terms" required />
          <label className="ml-2">
            I agree to the{" "}
            <a href={GlobalLinks.TnC} className="underline text-blue-600">
              Terms & Conditions
            </a>
          </label>
        </div>

        <p
          id="login_error_alert"
          className="w-full text-center p-1 my-1 text-white rounded-lg hidden"
        ></p>

        <button className="orange_btn mt-3" id="login_page_button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
