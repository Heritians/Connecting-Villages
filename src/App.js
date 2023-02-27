import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import NoPage from "./pages/Error404/NoPage";
import GettingStartedPage from "./pages/Instructions/InstructionsPage";
import LoginPage from "./pages/Login/LoginPage";
import TeamPage from "./pages/Team/TeamPage";
import CreateUserPage from "./pages/CreateUser/CreateUserPage";
import BulkUserPage from "./pages/BulkUser/BulkUserPage";
import FormPage from "./pages/Form/FormPage";
import FormTest from "./components/Form/FormTest";
import ViewFormPage from "./pages/ViewForm/ViewFormPage";
import {
  // AuthContext,
  AuthProvider,
} from "./components/context/Auth";
import VillagesList from "./pages/VillagesList/VillagesList";
// import { useContext } from "react";

export default function App() {
  // const loginAuthUser = useContext(AuthContext);
  // const role = loginAuthUser?.user
  //   ? loginAuthUser.user["sub"].split("_")[1]
  //   : "Not Authenticated";
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/instructions" element={<GettingStartedPage />} />
          <Route
            path="/login"
            element={
              localStorage.getItem("authTokens") ? <HomePage /> : <LoginPage />
            }
          />
          <Route
            path="/villages"
            element={
              localStorage.getItem("authTokens") ? (
                <VillagesList />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/createuser"
            element={
              localStorage.getItem("authTokens") ? (
                <CreateUserPage />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/bulkuser"
            element={
              localStorage.getItem("authTokens") ? (
                <BulkUserPage />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/viewform"
            element={
              localStorage.getItem("authTokens") ? (
                <ViewFormPage />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="/form"
            element={
              localStorage.getItem("authTokens") ? <FormPage /> : <LoginPage />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
