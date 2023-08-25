"use client";

import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [villages_list, setVillagesList] = useState([]);
  const router = useRouter();

  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const localAuthTokens = JSON.parse(localStorage.getItem("authTokens"));
    const localUserData = localAuthTokens
      ? jwt_decode(localAuthTokens.access_token).sub.split("_")
      : null;

    setAuthData(() =>
      localAuthTokens
        ? {
            access_token: localAuthTokens ? localAuthTokens.access_token : null,
            refresh_token: localAuthTokens
              ? localAuthTokens.refresh_token
              : null,
            aadhaar_no: localUserData ? localUserData[0] : null,
            role: localUserData ? localUserData[1] : null,
            village_name: localUserData
              ? localUserData[2] +
                (localUserData[3] ? " " + localUserData[3] : "") +
                (localUserData[4] ? " " + localUserData[4] : "")
              : null,
          }
        : null
    );

    getVillagesList();

    if (loading) {
      updateToken();
    }

    setInterval(() => {
      if (authData) {
        updateToken();
      }
    }, 4 * 60 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const getVillagesList = async () => {
    try {
      const fetchResponse = await fetch(
        `${process.env.NEXT_PUBLIC_UBA_FORM_API}/api/get_village_list`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const new_villages_list = await fetchResponse.json();
      setVillagesList(new_villages_list.data.village_names);
    } catch (error) {
      console.log("error getting villages list", error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const LoginPageButton = document.getElementById("login_page_button");
    const login_error_alert = document.getElementById("login_error_alert");

    LoginPageButton.disabled = true;
    LoginPageButton.innerHTML = "Logging In...";

    const fetchResponse = await fetch(
      `${process.env.NEXT_PUBLIC_UBA_FORM_API}/auth/login`,
      {
        method: "POST",
        body: "",
        body: JSON.stringify({
          AADHAR_NO: e.target.login_aadhaar_no.value,
          password: e.target.login_password.value,
          village_name: e.target.login_village.value,
          role: e.target.login_role.value,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).catch((error) => {
      LoginPageButton.disabled = false;
      LoginPageButton.innerHTML = "Login";
      login_error_alert.classList.remove("hidden");
      login_error_alert.classList.add("bg-red-600");
      login_error_alert.innerHTML = "Error Logging In! Please try again.";
      setTimeout(() => {
        login_error_alert.classList.add("hidden");
      }, 3000);
    });

    const login_response = await fetchResponse.json();

    if (fetchResponse.status === 200) {
      window.localStorage.setItem(
        "authTokens",
        JSON.stringify({
          access_token: login_response.access_token,
          refresh_token: login_response.refresh_token,
        })
      );
      const userData = jwt_decode(login_response.access_token).sub.split("_");
      setAuthData({
        access_token: login_response.access_token,
        refresh_token: login_response.refresh_token,
        aadhaar_no: userData[0],
        role: userData[1],
        village_name:
          userData[2] +
          (userData[3] ? " " + userData[3] : "") +
          (userData[4] ? " " + userData[4] : ""),
      });
      LoginPageButton.disabled = false;
      LoginPageButton.innerHTML = "Login";
      if (window.location.pathname === "/login") {
        router.push("/");
      }
    } else {
      LoginPageButton.disabled = false;
      LoginPageButton.innerHTML = "Login";
      login_error_alert.classList.remove("hidden");
      login_error_alert.classList.add("bg-red-600");
      login_error_alert.innerHTML = "Error Logging In! Please try again.";
      setTimeout(() => {
        login_error_alert.classList.add("hidden");
      }, 3000);
    }
  };

  let logoutUser = () => {
    try {
      setAuthData(null);
      localStorage.removeItem("authTokens");
      router.push("/");
    } catch (error) {
      console.log("error logging out", error);
    }
  };

  const updateToken = async () => {
    try {
      const fetchResponse = await fetch(
        `${process.env.NEXT_PUBLIC_UBA_FORM_API}/auth/use_refresh_token`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + authData.access_token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh_access_token: authData.refresh_token,
          }),
        }
      );
      const data = await fetchResponse.json();

      if (data?.status === "login successful") {
        localStorage.setItem(
          "authTokens",
          JSON.stringify({
            access_token: data.access_token,
            refresh_token: data.refresh_token,
          })
        );
        const userData = jwt_decode(data.access_token).sub.split("_");
        setAuthData({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          aadhaar_no: userData[0],
          role: userData[1],
          village_name:
            userData[2] +
            (userData[3] ? " " + userData[3] : "") +
            (userData[4] ? " " + userData[4] : ""),
        });
      } else {
        setAuthData(null);
        localStorage.removeItem("authTokens");
        document
          .getElementById("session_expired_alert")
          .classList.remove("hidden");

        setTimeout(() => {
          document
            .getElementById("session_expired_alert")
            .classList.add("hidden");
          router.push("/");
        }, 3000);
      }

      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      if (authData) {
        setAuthData(null);
        localStorage.removeItem("authTokens");
        document
          .getElementById("session_expired_alert")
          .classList.remove("hidden");

        setTimeout(() => {
          document
            .getElementById("session_expired_alert")
            .classList.add("hidden");
          router.push("/");
        }, 3000);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        loginUser,
        logoutUser,
        villages_list: villages_list,
      }}
    >
      {/* {loading ? null : children} */}
      {children}
    </AuthContext.Provider>
  );
};
