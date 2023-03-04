import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ViewFormPage from "./pages/ViewForm/ViewFormPage";
import { AuthProvider } from "./components/context/Auth";
import VillagesList from "./pages/VillagesList/VillagesList";
import RouteAuth from "./components/context/RouteAuth";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/instructions" element={<GettingStartedPage />} />
          <Route path="/adminform" element={<FormPage />} />
          <Route
            path="/login"
            element={
              localStorage.getItem("authTokens") ? (
                <Navigate to={"/"} />
              ) : (
                <LoginPage />
              )
            }
          />
          {localStorage.getItem("authTokens") ? (
            <>
              <Route element={<RouteAuth allowedRoles={["GOVTOff"]} />}>
                <Route path="/villages" element={<VillagesList />} />
              </Route>
              <Route
                element={<RouteAuth allowedRoles={["admin", "GOVTOff"]} />}
              >
                <Route path="/createuser" element={<CreateUserPage />} />
              </Route>
              <Route element={<RouteAuth allowedRoles={["admin"]} />}>
                <Route path="/bulkuser" element={<BulkUserPage />} />
              </Route>
              <Route element={<RouteAuth allowedRoles={["admin"]} />}>
                <Route path="/viewform" element={<ViewFormPage />} />
              </Route>
              <Route element={<RouteAuth allowedRoles={["admin", "user"]} />}>
                <Route path="/form" element={<FormPage />} />
              </Route>
            </>
          ) : null}
          <Route path="/unauthorized" element={<h1>Not Authorized</h1>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
