"use client";

import authCheck from "@/components/HOC/authCheck";
import { useContext, useState, useRef } from "react";
import AuthContext from "@/Utils/Auth";
import { ViewForm } from "@/components";
import { useReactToPrint } from "react-to-print";

const ViewFormPage = () => {
  const { authData } = useContext(AuthContext);
  const [famdata, setFamdata] = useState({});
  const [aadhaar, setAadhaar] = useState("");
  const request_info_btn = document.getElementById("request_info_btn");
  const request_error_alert = document.getElementById("request_error_alert");

  const handleSubmit = async (e) => {
    e.preventDefault();

    request_info_btn.disabled = true;
    request_info_btn.innerHTML = "Requesting...";
    const fetchResponse = await fetch(
      `${process.env.NEXT_PUBLIC_UBA_FORM_API}/api/get_familydata?respondents_id=${aadhaar}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + authData.access_token,
          "Content-Type": "application/json",
        },
      }
    ).catch((err) => {
      request_info_btn.disabled = false;
      request_info_btn.innerHTML = "Request Information";
      request_error_alert.classList.remove("hidden");
      request_error_alert.innerHTML = "Error fetching data. Please try again.";
      setTimeout(() => {
        request_error_alert.classList.add("hidden");
      }, 5000);
    });

    const data = await fetchResponse.json();

    if (fetchResponse.status === 200) {
      request_info_btn.disabled = false;
      request_info_btn.innerHTML = "Request Information";
      setFamdata(data.data);
    } else if (fetchResponse.status === 401) {
      request_info_btn.disabled = false;
      request_info_btn.innerHTML = "Request Information";
      request_error_alert.classList.remove("hidden");
      request_error_alert.innerHTML =
        "Not Authorized. Please check Respondent's ID and try again.";
      setTimeout(() => {
        request_error_alert.classList.add("hidden");
      }, 5000);
    } else {
      request_info_btn.disabled = false;
      request_info_btn.innerHTML = "Request Information";
      request_error_alert.classList.remove("hidden");
      request_error_alert.innerHTML = "Error fetching data. Please try again.";
      setTimeout(() => {
        request_error_alert.classList.add("hidden");
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setAadhaar(e.target.value);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: 8.8in 12in;  margin: 0.3in; }",
    documentTitle: `Annexture VI_${famdata?.respondent_prof}`,
  });
  return (
    <div className="min-h-[65vh] flex flex-col items-center justify-start">
      {famdata?.respondent_prof && (
        <>
          <div ref={componentRef}>
            <ViewForm formData={famdata} />
          </div>
          <div className="w-full flex items-center justify-end px-5 mb-3">
            <button className="orange_btn w-max" onClick={handlePrint}>
              Print Form
            </button>
          </div>
        </>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-4/5 flex flex-col sm:flex-row items-center justify-center my-4 p-4"
      >
        <input
          placeholder="Enter Respondent's ID no."
          className="w-full sm:w-2/3 p-2 border border-gray-200 rounded-md"
          onChange={handleChange}
          required
          type="text"
        />
        <button
          className="orange_btn w-full sm:w-1/3 m-0 sm:ml-2"
          type="submit"
          id="request_info_btn"
        >
          Request Information
        </button>
      </form>
      <p
        id="request_error_alert"
        className="w-4/5 p-2 text-white bg-red-600 text-center rounded-lg hidden mb-3"
      ></p>
    </div>
  );
};

export default authCheck(ViewFormPage);
