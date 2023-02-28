import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [formData, setFormData] = useState({
    AADHAR_NO: "",
    password: "",
    village_name: "",
    role: "",
  });

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  let [village, setVillage] = useState("");
  let [loading, setLoading] = useState(true);

  const history = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    setVillage(e.target.villname.value);
    document.getElementById("login-page-button").disabled = true;
    document.getElementById("login-page-button").innerHTML = "Logging in...";

    console.log("inside login user");
    setFormData({
      AADHAR_NO: e.target.AN.value,
      password: e.target.pwd.value,
      village_name: e.target.villname.value,
      role: e.target.role.value,
    });
    const settings = {
      method: "POST",
      body: "",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    let newURL =
      "https://ubaformapi.vercel.app/auth/login" +
      "?" +
      "AADHAR_NO=" +
      e.target.AN.value +
      "&" +
      "password=" +
      e.target.pwd.value +
      "&" +
      "village_name=" +
      e.target.villname.value +
      "&" +
      "role=" +
      e.target.role.value;
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();

    document.getElementById("login-page-button").disabled = false;
    document.getElementById("login-page-button").innerHTML = "Login";

    // console.log(data);

    if (data?.status === "login successful") {
      if (data.hasOwnProperty("role")) {
        delete data.role;
      }
      if (data.hasOwnProperty("status")) {
        delete data.status;
      }

      localStorage.setItem("authTokens", JSON.stringify(data));

      setAuthTokens(data);
      // console.log(authTokens);
      setUser(jwt_decode(data.access_token));
      // console.log(user);
      if (window.location.pathname === "/login") {
        navigate("/");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      } else {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
      console.log("Login Successful");
    } else {
      document.getElementById("login-user-alert").style.display = "block";
      document.getElementById("login-user-alert").style.backgroundColor =
        "#f44336";
      document.getElementById("login-user-alert").innerHTML =
        "Error Logging in, Please Try Again!";
      setTimeout(function () {
        document.getElementById("login-user-alert").style.display = "none";
      }, 4000);
    }
    // console.log(e.target.villname.value);
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    console.log("after remove localstrg");
    history("/");
  };

  let updateToken = async () => {
    // console.log("updating token", localStorage.getItem("authTokens"));
    // console.log("refresh token", authTokens?.refresh_token)

    const settings = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_access_token: JSON.parse(localStorage.getItem("authTokens"))
          .refresh_token,
      }),
    };
    // console.log(localStorage.getItem('access_token'));
    let newURL = "https://ubaformapi.vercel.app/auth/use_refresh_token";
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();

    if (data?.status === "login successful") {
      if (data.hasOwnProperty("role")) {
        delete data.role;
      }
      if (data.hasOwnProperty("status")) {
        delete data.status;
      }

      localStorage.setItem("authTokens", JSON.stringify(data));

      setAuthTokens(data);
      setUser(jwt_decode(data.access_token));
      //   history.push("/login");
      console.log("token updated");
    } else {
      logoutUser();
      // alert("Invalid Credentials");
      console.log("Invalid Credentials");
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    village: village,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 25;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {/* {loading ? null : children} */}
      {children}
    </AuthContext.Provider>
  );
};
