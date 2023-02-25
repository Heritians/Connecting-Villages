import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import ViewForm from "../../components/ViewForm/ViewForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BackHome from "../../components/BackHome/BackHome";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import {
  Button,
  RequestSection,
  Input,
  PrintButton,
  ButtonRow,
} from "./ViewFormPageStyles";
import { useReactToPrint } from "react-to-print";

export default function ViewFormPage() {
  const [famdata, setFamdata] = useState({});
  const [aadhaar, setAadhaar] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const settings = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        "Content-Type": "application/json",
      },
    };

    let newURL =
      "https://ubaformapi.vercel.app/api/get_familydata" +
      "?" +
      "respondents_id=" +
      aadhaar;

    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    // console.log(data.data);

    setFamdata(data.data);
  };

  const handleChange = (e) => {
    setAadhaar(e.target.value);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Helmet>
        <title>View Form | Heritians</title>
      </Helmet>
      <Header />
      <div className="container">
        <RequestSection className="row">
          <form onSubmit={handleSubmit}>
            <Input
              name="aadhaar"
              onChange={handleChange}
              placeholder="Enter Respondent's Aadhaar no."
            />
            <Button type="submit">Request Information</Button>
          </form>
        </RequestSection>
      </div>

      {famdata?.gen_ho_info && (
        <>
          <ViewForm formdata={famdata} ref={componentRef} />
          <ButtonRow>
            <PrintButton onClick={handlePrint}>Print this out!</PrintButton>
          </ButtonRow>
        </>
      )}
      <BackHome />
      <Footer />
      <BackToTopButton />
    </>
  );
}
