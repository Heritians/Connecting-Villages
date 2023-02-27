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
import {
  InputContainer,
  InputLabel,
  OutputLabel,
  SectionContainer,
  SectionTitle,
  Table,
  TableData,
  TableRow,
} from "../../components/Form/FormStyles";

import { useReactToPrint } from "react-to-print";
import HeadSection from "../../components/Form/HeadSection/HeadSection";

export default function ViewFormPage() {
  const [famdata, setFamdata] = useState({});
  const [aadhaar, setAadhaar] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("req-button").disabled = true;
    document.getElementById("req-button").innerHTML = "Requesting...";
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
    document.getElementById("req-button").disabled = false;
    document.getElementById("req-button").innerHTML = "Request Information";
    document.getElementById("aadhaarno").value = "";

    // console.log(data.data);

    setFamdata(data.data);
  };

  const handleChange = (e) => {
    setAadhaar(e.target.value);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: 8.8in 12in;  margin: 0.3in; }",
  });

  return (
    <>
      <Helmet>
        <title>View Form | Heritians</title>
      </Helmet>
      <Header />

      {famdata?.gen_ho_info && (
        <>
          <div ref={componentRef}>
            <HeadSection />
            <ViewForm formdata={famdata} />
          </div>

          {/* ------------------- Form filled by details ---------------------------------------------------------------*/}

          <div className="container">
            <div className="container">
              <SectionContainer>
                <SectionTitle style={{ fontSize: "1rem" }}>
                  Form filled by
                </SectionTitle>
                <InputContainer>
                  <Table>
                    <tbody>
                      <TableRow>
                        <TableData>
                          <InputLabel
                            style={{ fontWeight: "normal", width: "30%" }}
                          >
                            Aadhaar No:
                          </InputLabel>
                          <OutputLabel
                            style={{ fontWeight: "normal", width: "70%" }}
                          >
                            {famdata["filled_by"] !== null
                              ? famdata["filled_by"]
                              : "Cannot be displayed"}
                          </OutputLabel>
                        </TableData>
                        <TableData>
                          <InputLabel
                            style={{ fontWeight: "normal", width: "30%" }}
                          >
                            Date Filled:
                          </InputLabel>
                          <OutputLabel
                            style={{ fontWeight: "normal", width: "70%" }}
                          >
                            {famdata["filled_time"] !== null
                              ? famdata["filled_time"].split("T")[0] +
                                " " +
                                famdata["filled_time"].split("T")[1].slice(0, 8)
                              : "Cannot be displayed"}
                          </OutputLabel>
                        </TableData>
                      </TableRow>
                    </tbody>
                  </Table>
                </InputContainer>
              </SectionContainer>
            </div>
          </div>
          <ButtonRow>
            <PrintButton onClick={handlePrint}>Print this out!</PrintButton>
          </ButtonRow>
        </>
      )}

      <div className="container">
        <RequestSection className="row">
          <form>
            <Input
              type="text"
              id="aadhaarno"
              name="aadhaar"
              onChange={handleChange}
              placeholder="Enter Respondent's Aadhaar no."
            />
            <Button id="req-button" onClick={handleSubmit}>
              Request Information
            </Button>
          </form>
        </RequestSection>
      </div>

      <BackHome />
      <Footer />
      <BackToTopButton />
    </>
  );
}
