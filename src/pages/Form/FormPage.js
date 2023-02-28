import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import AuthContext from "../../components/context/Auth";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import HeadSection from "../../components/Form/HeadSection/HeadSection";
import Form from "../../components/Form/Form";

export default function FormPage() {
  const loginAuthUser = useContext(AuthContext);
  const userVillage = loginAuthUser?.user
    ? loginAuthUser.user["sub"].split("_")[2] +
      "_" +
      (loginAuthUser.user["sub"].split("_")[3]
        ? loginAuthUser.user["sub"].split("_")[3]
        : "")
    : "Not Authenticated";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToTop();
  return (
    <>
      <Helmet>
        <title>Baseline Household Survey Form | Heritians</title>
      </Helmet>
      <Header />
      <HeadSection />
      <Form usersVillage={userVillage} />
      <BackHome />
      <Footer />
      <BackToTopButton />
    </>
  );
}
