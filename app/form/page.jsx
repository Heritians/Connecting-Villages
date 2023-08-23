"use client";

import { FormHeader } from "@/components";
import { useState, useContext } from "react";
import AuthContext from "@/Utils/Auth";
import authCheck from "@/components/HOC/authCheck";

const FillFormPage = () => {
  const { authData } = useContext(AuthContext);
  const [fillFormData, setFillFormData] = useState({
    //Table1*****************************
    respondents_name: "",
    respondents_gender: "",
    respondents_age: "",
    relation_w_hoh: "",
    respondents_contact: "",
    id_type: "",
    id_no: "",

    //Table2 ******************************
    ho_id: "",
    hoh_name: "",
    hoh_gender: "",
    category: "",
    pov_status: "",
    own_house: "",
    house_type: "",
    toilet: "",
    drainage_status: "",
    waste_collection_sys: "",
    compost_pit: "",
    biogas_plant: "",
    annual_income: "0",

    //Table3******************************

    fam_info: [
      {
        name: "",
        age: "0",
        sex: "",
        marital_status: "",
        education: "",
        schooling_status: "",
        AADHAR_No: "",
        has_bank_acc: "",
        is_computer_literate: "",
        has_SSP: "",
        health_prob: "",
        has_MNREGA: "",
        SHG: "",
        occupations: "",
      },
    ],

    //Table4*********************************

    are_migrants: "",
    num_migrants: "0",
    migration_period_months: "0",
    years_since_migration: "0",

    //Table5*********************************

    PM_jan_dhan_yojana: "0",
    PM_ujjawala_yojana: "0",
    PM_awas_yojana: "0",
    sukanya_samriddhi_yojana: "0",
    mudra_yojana: "0",
    PM_jivan_jyoti_yojana: "0",
    PM_suraksha_bima_yojana: "0",
    atal_pension_yojana: "0",
    fasal_bima_yojana: "0",
    kaushal_vikas_yojana: "0",
    krishi_sinchai_yojana: "0",
    jan_aushadhi_yojana: "0",
    SBM_toilet: "0",
    soil_health_card: "0",
    ladli_lakshmi_yojana: "0",
    janni_suraksha_yojana: "0",
    kisan_credit_card: "0",

    //Table6*********************************

    piped_water2: "",
    piped_water3: "0",

    hand_pump2: "",
    hand_pump3: "0",

    comm_water2: "",
    comm_water3: "0",

    open_well2: "",
    open_well3: "0",
    mode_of_water_storage: "",
    other_water_source: "NA",

    //Table7*********************************

    electricity_conn: "",
    elec_avail_perday_hour: "0",
    lighting1: "",
    cooking1: "",
    cook_chullah: "",

    appliances: [{ appliance_name: "", appliance_nos: "", appliance_dur: "" }],

    //Table8*********************************

    total_land: "0",
    irrigated_area: "0",
    barren_or_wasteland: "0",
    cultivable_area: "0",
    unirrigated_area: "0",
    uncultivable_area: "0",

    //Table9*********************************

    is_chemical_fertilizer_used2: "",
    is_chemical_fertilizer_used3: "0",
    is_chemical_insecticide_used2: "",
    is_chemical_insecticide_used3: "0",
    is_chemical_weedice_used2: "",
    is_chemical_weedice_used3: "0",
    is_chemical_organic_manures2: "",
    is_chemical_organic_manures3: "0",
    irrigation: "",
    irrigation_sys: "",

    //Table10*********************************

    agri_products: [
      {
        crop_name: "",
        crop_area_prev_yr_acre: "",
        productivity_in_quintals_per_acre: "",
      },
    ],

    //Table11*********************************

    cows: "0",
    buffalo: "0",
    goats_and_sheeps: "0",
    calves: "0",
    bullocks: "0",
    poultry_and_ducks: "0",
    livestock_shelter2: "",
    avg_daily_milk_prod_litres: "0",
    animal_waste_or_cow_dung_kgs: "0",

    //Table12*********************************

    major_problems: [{ problems: "", Suggestions_by_villagers: "" }],
  });

  const form_submit_alert = document.getElementById("form_submit_alert");
  const form_submit_button = document.getElementById("form_submit_button");

  /* 3. Family Information */

  const handleFamMemberChange = (idx) => (e) => {
    const { name, value } = e.target;
    const fam_info = fillFormData.fam_info;
    fam_info[idx][name] = value;
    setFillFormData({ ...fillFormData, fam_info });
  };
  const handleAddFamMemberRow = () => {
    const item = {
      name: "",
      age: "",
      sex: "",
      marital_status: "",
      education: "",
      schooling_status: "",
      AADHAR_No: "",
      has_bank_acc: "",
      is_computer_literate: "",
      has_SSP: "",
      health_prob: "",
      has_MNREGA: "",
      SHG: "",
      occupations: "",
    };
    setFillFormData({
      ...fillFormData,
      fam_info: [...fillFormData.fam_info, item],
    });
  };
  const handleRemoveFamMemberRow = () => {
    setFillFormData({
      ...fillFormData,
      fam_info: fillFormData.fam_info.slice(0, -1),
    });
  };

  /* 7. Source of Energy and Power */

  const handleAppliancesChange = (idx) => (e) => {
    const { name, value } = e.target;
    const appliances = fillFormData.appliances;
    appliances[idx][name] = value;
    setFillFormData({ ...fillFormData, appliances });
  };
  const handleAddAppliancesRow = () => {
    const item = {
      appliance_name: "",
      appliance_nos: "",
      appliance_dur: "",
    };
    setFillFormData({
      ...fillFormData,
      appliances: [...fillFormData.appliances, item],
    });
  };
  const handleRemoveAppliancesRow = () => {
    setFillFormData({
      ...fillFormData,
      appliances: fillFormData.appliances.slice(0, -1),
    });
  };

  /* 8. Landholding Information*/
  const handleLandAreaChange = (e) => {
    setFillFormData({ ...fillFormData, [e.target.name]: e.target.value });

    setTimeout(() => {
      setFillFormData({
        ...fillFormData,
        total_land:
          parseFloat(fillFormData.irrigated_area) +
          parseFloat(fillFormData.barren_or_wasteland) +
          parseFloat(fillFormData.cultivable_area) +
          parseFloat(fillFormData.unirrigated_area) +
          parseFloat(fillFormData.uncultivable_area),
      });
    }, 200);
  };

  /* 10. Agricultural produce */

  const handleProduceChange = (idx) => (e) => {
    const { name, value } = e.target;
    const agri_products = fillFormData.agri_products;
    agri_products[idx][name] = value;
    setFillFormData({ ...fillFormData, agri_products });
  };
  const handleAddProduceRow = () => {
    const item = {
      crop_name: "",
      crop_area_prev_yr_acre: "",
      productivity_in_quintals_per_acre: "",
    };
    setFillFormData({
      ...fillFormData,
      agri_products: [...fillFormData.agri_products, item],
    });
  };
  const handleRemoveProduceRow = () => {
    setFillFormData({
      ...fillFormData,
      agri_products: fillFormData.agri_products.slice(0, -1),
    });
  };

  /* 12. Major Problems table */

  const handleProblemsChange = (idx) => (e) => {
    const { name, value } = e.target;
    const major_problems = fillFormData.major_problems;
    major_problems[idx][name] = value;
    setFillFormData({ ...fillFormData, major_problems });
  };
  const handleAddProblemsRow = () => {
    const item = {
      problems: "",
      Suggestions_by_villagers: "",
    };
    setFillFormData({
      ...fillFormData,
      major_problems: [...fillFormData.major_problems, item],
    });
  };
  const handleRemoveProblemsRow = () => {
    setFillFormData({
      ...fillFormData,
      major_problems: fillFormData.major_problems.slice(0, -1),
    });
  };

  const getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFillFormData({ ...fillFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    form_submit_button.disabled = true;
    form_submit_button.innerHTML = "Submitting...";

    //Table12**************************************************
    const problems = [];
    const Suggestions_by_villagers = [];

    // eslint-disable-next-line array-callback-return
    fillFormData.major_problems.map((item, index) => {
      problems.push(item.problems);
      Suggestions_by_villagers.push(item.Suggestions_by_villagers);
    });

    const postData = {
      static_vars: {
        village_name: authData.village_name.split(" ").join("_"),
        grampanchyat_name: "bhairaghad",
        ward_no: "7",
        block: "141",
        district: "kothri-kalan",
        state: "Madhya Pradesh",
      },
      //Table1**************************************************
      respondent_prof: {
        respondents_name: fillFormData.respondents_name,
        respondents_age: parseInt(fillFormData.respondents_age),
        relation_w_hoh: fillFormData.relation_w_hoh,
        respondents_contact: fillFormData.respondents_contact,
        id_type: fillFormData.id_type,
        id_no: fillFormData.id_no,
      },
      //Table2**************************************************
      gen_ho_info: {
        ho_id: fillFormData.ho_id,
        hoh_name:
          fillFormData.relation_w_hoh === "Self"
            ? fillFormData.respondents_name
            : fillFormData.hoh_name,
        hoh_gender: fillFormData.hoh_gender,
        category: fillFormData.category,
        pov_status: fillFormData.pov_status,
        own_house: fillFormData.own_house,
        house_type: fillFormData.house_type,
        toilet: fillFormData.toilet,
        drainage_status: fillFormData.drainage_status,
        waste_collection_sys: fillFormData.waste_collection_sys,
        compost_pit: fillFormData.compost_pit,
        biogas_plant: fillFormData.biogas_plant,
        annual_income: parseInt(fillFormData.annual_income),
      },
      //Table3**************************************************
      fam_info: fillFormData.fam_info,
      //Table4**************************************************
      mig_status: {
        are_migrants: fillFormData.are_migrants === "Yes" ? true : false,
        num_migrants: parseInt(fillFormData.num_migrants),
        migration_period_months: parseInt(fillFormData.migration_period_months),
        years_since_migration: parseInt(fillFormData.years_since_migration),
      },
      //Table5**************************************************
      govt_schemes: {
        PM_jan_dhan_yojana: parseInt(fillFormData.PM_jan_dhan_yojana),
        PM_ujjawala_yojana: parseInt(fillFormData.PM_ujjawala_yojana),
        PM_awas_yojana: parseInt(fillFormData.PM_awas_yojana),
        sukanya_samriddhi_yojana: parseInt(
          fillFormData.sukanya_samriddhi_yojana
        ),
        mudra_yojana: parseInt(fillFormData.mudra_yojana),
        PM_jivan_jyoti_yojana: parseInt(fillFormData.PM_jivan_jyoti_yojana),
        PM_suraksha_bima_yojana: parseInt(fillFormData.PM_suraksha_bima_yojana),
        atal_pension_yojana: parseInt(fillFormData.atal_pension_yojana),
        fasal_bima_yojana: parseInt(fillFormData.fasal_bima_yojana),
        kaushal_vikas_yojana: parseInt(fillFormData.kaushal_vikas_yojana),
        krishi_sinchai_yojana: parseInt(fillFormData.krishi_sinchai_yojana),
        jan_aushadhi_yojana: parseInt(fillFormData.jan_aushadhi_yojana),
        SBM_toilet: parseInt(fillFormData.SBM_toilet),
        soil_health_card: parseInt(fillFormData.soil_health_card),
        ladli_lakshmi_yojana: parseInt(fillFormData.ladli_lakshmi_yojana),
        janni_suraksha_yojana: parseInt(fillFormData.janni_suraksha_yojana),
        kisan_credit_card: parseInt(fillFormData.kisan_credit_card),
      },
      //Table6**************************************************
      water_source: {
        piped_water: [
          fillFormData.piped_water2 === "Yes" ? true : false,
          parseFloat(fillFormData.piped_water3),
        ],
        hand_pump: [
          fillFormData.hand_pump2 === "Yes" ? true : false,
          parseFloat(fillFormData.hand_pump3),
        ],
        comm_water: [
          fillFormData.comm_water2 === "Yes" ? true : false,
          parseFloat(fillFormData.comm_water3),
        ],
        open_well: [
          fillFormData.open_well2 === "Yes" ? true : false,
          parseFloat(fillFormData.open_well3),
        ],
        mode_of_water_storage: fillFormData.mode_of_water_storage,
        other_water_source: fillFormData.other_water_source,
      },
      //Table7**************************************************
      source_of_energy: {
        electricity_conn:
          fillFormData.electricity_conn === "Yes" ? true : false,
        elec_avail_perday_hour: parseInt(fillFormData.elec_avail_perday_hour),
        lighting: [fillFormData.lighting1],
        cooking: [fillFormData.cooking1],
        cook_chullah: fillFormData.cook_chullah,
        appliances: fillFormData.appliances,
      },
      //Table8**************************************************
      land_holding_info: {
        total_land: parseFloat(fillFormData.total_land),
        irrigated_area: parseFloat(fillFormData.irrigated_area),
        barren_or_wasteland: parseFloat(fillFormData.barren_or_wasteland),
        cultivable_area: parseFloat(fillFormData.cultivable_area),
        unirrigated_area: parseFloat(fillFormData.unirrigated_area),
        uncultivable_area: parseFloat(fillFormData.uncultivable_area),
      },
      //Table9**************************************************
      agri_inputs: {
        is_chemical_fertilizer_used: [
          fillFormData.is_chemical_fertilizer_used2 === "Yes" ? 1 : 0,
          parseFloat(fillFormData.is_chemical_fertilizer_used3),
        ],
        is_chemical_insecticide_used: [
          fillFormData.is_chemical_insecticide_used2 === "Yes" ? 1 : 0,
          parseFloat(fillFormData.is_chemical_insecticide_used3),
        ],
        is_chemical_weedicide_used: [
          fillFormData.is_chemical_weedice_used2 === "Yes" ? 1 : 0,
          parseFloat(fillFormData.is_chemical_weedice_used3),
        ],
        is_chemical_organic_manures: [
          fillFormData.is_chemical_organic_manures2 === "Yes" ? 1 : 0,
          parseFloat(fillFormData.is_chemical_organic_manures3),
        ],
        irrigation: fillFormData.irrigation,
        irrigation_sys: fillFormData.irrigation_sys,
      },
      //Table10**************************************************
      agri_products: fillFormData.agri_products,
      //Table11**************************************************
      livestock_nos: {
        cows: parseInt(fillFormData.cows),
        buffalo: parseInt(fillFormData.buffalo),
        goats_and_sheeps: parseInt(fillFormData.goats_and_sheeps),
        calves: parseInt(fillFormData.calves),
        bullocks: parseInt(fillFormData.bullocks),
        poultry_and_ducks: parseInt(fillFormData.poultry_and_ducks),
        livestock_shelter: [fillFormData.livestock_shelter2],
        avg_daily_milk_prod_litres: parseFloat(
          fillFormData.avg_daily_milk_prod_litres
        ),
        animal_waste_or_cow_dung_kgs: parseFloat(
          fillFormData.animal_waste_or_cow_dung_kgs
        ),
      },
      //Table12**************************************************
      major_problems: {
        problems: problems,
        Suggestions_by_villagers: Suggestions_by_villagers,
      },
    };

    try {
      const fetchResponse = await fetch(
        `${process.env.NEXT_PUBLIC_UBA_FORM_API}/api/post_data`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + authData.access_token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      const data = await fetchResponse.json();
      if (data?.status === "success") {
        form_submit_alert.classList.remove("hidden");
        form_submit_alert.classList.add("bg-green-500");
        form_submit_alert.innerHTML = "Form Submitted Successfully";
        setTimeout(() => {
          form_submit_button.disabled = false;
          form_submit_button.innerHTML = "Submit";
          form_submit_alert.classList.add("hidden");
          form_submit_alert.classList.remove("bg-green-500");
          window.location.reload();
        }, 4000);
      } else {
        form_submit_alert.classList.remove("hidden");
        form_submit_alert.classList.add("bg-red-500");
        form_submit_alert.innerHTML = "Form Submission Failed";
        setTimeout(() => {
          form_submit_button.disabled = false;
          form_submit_button.innerHTML = "Submit";
          form_submit_alert.classList.add("hidden");
          form_submit_alert.classList.remove("bg-red-500");
        }, 4000);
      }
    } catch (error) {
      console.log(error);
      form_submit_alert.classList.remove("hidden");
        form_submit_alert.classList.add("bg-red-500");
        form_submit_alert.innerHTML = "Form Submission Failed";
        setTimeout(() => {
          form_submit_button.disabled = false;
          form_submit_button.innerHTML = "Submit";
          form_submit_alert.classList.add("hidden");
          form_submit_alert.classList.remove("bg-red-500");
        }, 4000);
    }
  };

  return (
    <>
      <div>
        <FormHeader />
        <form onSubmit={handleSubmit}>
          {/* ------------------- 1. Respondent's Profile ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Respondent Profile</h1>
            <div className="form_table_container">
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Name:</p>
                      <input
                        className="form_input"
                        type="text"
                        required
                        name="respondents_name"
                        onChange={getValue}
                        placeholder="Full Name"
                      />
                    </td>
                    <td className="form_table_data" colSpan={1}>
                      <p className="form_input_label">Age:</p>
                      <input
                        className="form_input"
                        type="number"
                        required
                        min={0}
                        maxLength={3}
                        onChange={getValue}
                        name="respondents_age"
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">
                        Relationship with head of household:
                      </p>
                      <input
                        className="form_input"
                        type="text"
                        required
                        name="relation_w_hoh"
                        onChange={getValue}
                        placeholder="Self/Son/Father etc."
                      />
                    </td>
                    <td className="form_table_data" colSpan={1}>
                      <p className="form_input_label">Contact Number:</p>
                      <input
                        className="form_input"
                        type="number"
                        required
                        name="respondents_contact"
                        minLength={10}
                        maxLength={10}
                        onChange={getValue}
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={1}>
                      <p className="form_input_label">Identity Card Type:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        name="id_type"
                        onChange={getValue}
                        required
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="aadhaar">Aadhaar Card</option>
                        <option value="voterId">Voter ID</option>
                        <option value="DL">Driving License</option>
                        <option value="panCard">Pan Card</option>
                      </select>
                    </td>
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Identity Card Number:</p>
                      <input
                        className="form_input"
                        type="text"
                        onChange={getValue}
                        name="id_no"
                        disabled={
                          fillFormData.id_type === "select" ? true : false
                        }
                        minLength={
                          fillFormData.id_type === "aadhaar"
                            ? 12
                            : fillFormData.id_type === "panCard"
                            ? 10
                            : 7
                        }
                        maxLength={
                          fillFormData.id_type === "aadhaar"
                            ? 12
                            : fillFormData.id_type === "panCard"
                            ? 10
                            : 18
                        }
                        placeholder={
                          fillFormData.id_type === "aadhaar"
                            ? "1234 1234 1234"
                            : fillFormData.id_type === "panCard"
                            ? "ABCDE1234F"
                            : fillFormData.id_type === "voterId"
                            ? "ABC1234567"
                            : fillFormData.id_type === "DL"
                            ? "DL12 1234123412"
                            : "Select ID Type"
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 2. General Household Information ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">General Household Information</h1>
            <div className="form_table_container">
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">Household ID:</p>
                      <input
                        className="form_input"
                        required
                        type="text"
                        onChange={getValue}
                        name="ho_id"
                      />
                    </td>
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">
                        Name of the Head(Household):
                      </p>
                      <input
                        className="form_input"
                        required={
                          fillFormData.relation_w_hoh === "Self" ? false : true
                        }
                        disabled={
                          fillFormData.relation_w_hoh === "Self" ? true : false
                        }
                        placeholder={
                          fillFormData.relation_w_hoh === "Self"
                            ? fillFormData.respondents_name
                            : "Head of Household"
                        }
                        type="text"
                        onChange={getValue}
                        name="hoh_name"
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Gender</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="hoh_gender"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Category:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="category"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="OBC">OBC</option>
                        <option value="General">General</option>
                      </select>
                    </td>
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Poverty Status:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="pov_status"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="APL">APL</option>
                        <option value="BPL">BPL</option>
                      </select>
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">Own House:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="own_house"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Type of House:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="house_type"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Kutcha">Kutcha</option>
                        <option value="Semi Pucca">Semi Pucca</option>
                        <option value="Pucca">Pucca</option>
                        <option value="Homeless">Homeless</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Toilet:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="toilet"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Private">Private</option>
                        <option value="Community">Community</option>
                        <option value="Open Defecation">Open Defecation</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Drainage linked to House:
                      </p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="drainage_status"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Covered">Covered</option>
                        <option value="Open">Open</option>
                        <option value="None">None</option>
                      </select>
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">
                        Waste Collection System:
                      </p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="waste_collection_sys"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Door Step">Door Step</option>
                        <option value="Common Point">Common Point</option>
                        <option value="No Collection System">
                          No Collection System
                        </option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Compost Pit:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="compost_pit"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Individual">Individual</option>
                        <option value="Group">Group</option>
                        <option value="None">None</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Biogas Plant:</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="biogas_plant"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Individual">Individual</option>
                        <option value="Group">Group</option>
                        <option value="Community">Community</option>
                        <option value="None">None</option>
                      </select>
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={4}>
                      <p className="form_input_label">
                        Annual Income from all Sources (Approx.):
                      </p>
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="annual_income"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 3. Family Member Information ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Family Member Information</h1>
            <div className="form_table_container">
              <table className="form_table">
                <thead>
                  <tr className="form_table_row">
                    <th className="form_table_heading">S. No.</th>
                    <th
                      className="form_table_heading"
                      style={{ width: "10rem" }}
                    >
                      Name
                    </th>
                    <th
                      className="form_table_heading"
                      style={{ width: "3.5rem" }}
                    >
                      Age
                    </th>
                    <th
                      className="form_table_heading"
                      style={{ width: "4rem" }}
                    >
                      Sex
                    </th>
                    <th className="form_table_heading">Marital Status</th>
                    <th className="form_table_heading">Level of Education</th>
                    <th className="form_table_heading">
                      Going to AWC/ School/ College
                    </th>
                    <th className="form_table_heading">Aadhaar Card</th>
                    <th
                      className="form_table_heading"
                      style={{ width: "4rem" }}
                    >
                      Bank A/C
                    </th>
                    <th className="form_table_heading">Computer Literate</th>
                    <th className="form_table_heading">
                      Social Security Pension
                    </th>
                    <th className="form_table_heading">
                      Major Health Problems
                    </th>
                    <th className="form_table_heading">MNREGA Job Card</th>
                    <th className="form_table_heading">Self Help Groups</th>
                    <th className="form_table_heading">Occupations</th>
                  </tr>
                </thead>
                <tbody>
                  {fillFormData.fam_info.map((fam, index) => (
                    <tr className="form_table_row" key={index}>
                      <td
                        className="form_table_data"
                        style={{ textAlign: "center" }}
                      >
                        {index}
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type={"text"}
                          name="name"
                          value={fillFormData.fam_info[index].name}
                          onChange={handleFamMemberChange(index)}
                        />
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type={"number"}
                          name="age"
                          min={0}
                          value={fillFormData.fam_info[index].age}
                          onChange={handleFamMemberChange(index)}
                        />
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="sex"
                          value={fillFormData.fam_info[index].sex}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="marital_status"
                          value={fillFormData.fam_info[index].marital_status}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Not Married">Not Married</option>
                          <option value="Married">Married</option>
                          <option value="Widowed">Widowed</option>
                          <option value="Divorced/Separated">
                            Divorced/Separated
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="education"
                          value={fillFormData.fam_info[index].education}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Not Literate">Not Literate</option>
                          <option value="Literate">Literate</option>
                          <option value="Completed Class 5th">
                            Completed Class 5th
                          </option>
                          <option value="Completed Class 8th">
                            Completed Class 8th
                          </option>
                          <option value="Completed Class 10th">
                            Completed Class 10th
                          </option>
                          <option value="Completed Class 12th">
                            Completed Class 12th
                          </option>
                          <option value="ITI Diploma">ITI Diploma</option>
                          <option value="Graduate">Graduate</option>
                          <option value="Post Graduate/Professional">
                            Post Graduate/Professional
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="schooling_status"
                          value={fillFormData.fam_info[index].schooling_status}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="AWC">AWC</option>
                          <option value="School">School</option>
                          <option value="College">College</option>
                          <option value="Not Going">Not Going</option>
                          <option value="Not Applicable">Not Applicable</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          type={"text"}
                          name="AADHAR_No"
                          minLength={12}
                          maxLength={12}
                          value={fillFormData.fam_info[index].AADHAR_No}
                          onChange={handleFamMemberChange(index)}
                        />
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="has_bank_acc"
                          value={fillFormData.fam_info[index].has_bank_acc}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="is_computer_literate"
                          value={
                            fillFormData.fam_info[index].is_computer_literate
                          }
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="has_SSP"
                          value={fillFormData.fam_info[index].has_SSP}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="No Pension">No Pension</option>
                          <option value="Old Age Pension">
                            Old Age Pension
                          </option>
                          <option value="Widow Pension">Widow Pension</option>
                          <option value="Disability Pension">
                            Disability Pension
                          </option>
                          <option value="Other Pension">Other Pension</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type={"text"}
                          name="health_prob"
                          value={fillFormData.fam_info[index].health_prob}
                          onChange={handleFamMemberChange(index)}
                        />
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="has_MNREGA"
                          value={fillFormData.fam_info[index].has_MNREGA}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="SHG"
                          value={fillFormData.fam_info[index].SHG}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td className="form_table_data">
                        <select
                          className="form_input_select"
                          required
                          name="occupations"
                          value={fillFormData.fam_info[index].occupations}
                          onChange={handleFamMemberChange(index)}
                        >
                          <option value="None">Select</option>
                          <option value="Farming on own Land">
                            Farming on own Land
                          </option>
                          <option value="Sharecropping/Farming Leased Land">
                            Sharecropping/ Farming Leased Land
                          </option>
                          <option value="Animal Husbandry">
                            Animal Husbandry
                          </option>
                          <option value="Pisci-culture/Poultry">
                            Pisci-culture/ Poultry
                          </option>
                          <option value="Fishing">Fishing</option>
                          <option value="Skilled Wage Worker">
                            Skilled Wage Worker
                          </option>
                          <option value="Unskilled Wage Worker">
                            Unskilled Wage Worker
                          </option>
                          <option value="Salaried Employment in Government">
                            Salaried Employment in Government
                          </option>
                          <option value="Salaried Employment in Private Sector">
                            Salaried Employment in Private Sector
                          </option>
                          <option value="Weaving">Weaving</option>
                          <option value="Other Artisian">Other Artisian</option>
                          <option value="Other Trade & Business">
                            Other Trade & Business
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="form_add_row_btn_container">
              {fillFormData.fam_info.length < 15 ? (
                <button
                  className="form_add_row_btn"
                  onClick={handleAddFamMemberRow}
                >
                  Add row
                </button>
              ) : null}
              {fillFormData.fam_info.length > 1 ? (
                <button
                  className="form_remove_row_btn"
                  onClick={handleRemoveFamMemberRow}
                >
                  Remove Row
                </button>
              ) : null}
            </div>
          </div>

          {/* ------------------- 4. Migration Status ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Migration Status</h1>
            <div className="form_table_container">
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Does any member of the household migrate for work?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="are_migrants"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        If Yes, How many members of the family migrated?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="num_migrants"
                        disabled={
                          fillFormData.are_migrants === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Family migrates for how many days/months?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="migration_period_months"
                        disabled={
                          fillFormData.are_migrants === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Since how many years the migration is taking place?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="years_since_migration"
                        disabled={
                          fillFormData.are_migrants === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 5. Information of Government Schemes ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">
              Information of Government Schemes
            </h1>
            <div className="form_table_container">
              <table className="form_table">
                <thead>
                  <tr className="form_table_row">
                    <th className="form_table_heading">S. No.</th>
                    <th className="form_table_heading">Name</th>
                    <th className="form_table_heading">
                      Persons Benefitted(in Numbers)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      1
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">PM Jan Dhan Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="PM_jan_dhan_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      2
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">PM Ujjawala Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="PM_ujjawala_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      3
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">PM Awas Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="PM_awas_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      4
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Sukanya Samridhi Yojana
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="sukanya_samriddhi_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      5
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Mudra Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="mudra_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      6
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        PM Jivan Jyoti Bima Yojana
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="PM_jivan_jyoti_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      7
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        PM Suraksha Bima Yojana
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="PM_suraksha_bima_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      8
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Atal pension Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="atal_pension_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      9
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Fasal Bima Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="fasal_bima_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      10
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Kaushal Vikas Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="kaushal_vikas_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      11
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Krishi Sinchai Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="krishi_sinchai_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      12
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Jan Aushadi Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="jan_aushadhi_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      13
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Swachh Bharat Mission Toilet
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="SBM_toilet"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      14
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Soil Health Card</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="soil_health_card"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      15
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Ladli Lakshmi Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="ladli_lakshmi_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      16
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Janani Suraksha Yojana</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="janni_suraksha_yojana"
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      17
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Kisan Credit Card</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="kisan_credit_card"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 6. Source of Water ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Source of Water</h1>
            <div className="form_table_container">
              <table className="form_table">
                <thead>
                  <tr className="form_table_row">
                    <th className="form_table_heading" colSpan={3}>
                      Source of Water
                    </th>
                    <th className="form_table_heading">
                      Distance{" "}
                      <span style={{ fontWeight: 400 }}>(in meters)</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Piped Water at Home</p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="piped_water2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="piped_water3"
                        required={
                          fillFormData.piped_water2 === "Yes" ? true : false
                        }
                        disabled={
                          fillFormData.piped_water2 === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Community Water Tap</p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="comm_water2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="comm_water3"
                        required={
                          fillFormData.comm_water2 === "Yes" ? true : false
                        }
                        disabled={
                          fillFormData.comm_water2 === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Hand Pump</p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="hand_pump2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="hand_pump3"
                        required={
                          fillFormData.hand_pump2 === "Yes" ? true : false
                        }
                        disabled={
                          fillFormData.hand_pump2 === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">Open Well</p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="open_well2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="open_well3"
                        required={
                          fillFormData.open_well2 === "Yes" ? true : false
                        }
                        disabled={
                          fillFormData.open_well2 === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={4}>
                      <p className="form_input_label">Mode of Water Storage</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="mode_of_water_storage"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Community">Community</option>
                        <option value="Individual">Individual</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={4}>
                      <p className="form_input_label">
                        Any other source(mention)
                      </p>
                      <input
                        className="form_input"
                        type={"text"}
                        onChange={getValue}
                        name="other_water_source"
                        disabled={true}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 7. Source of Energy and Power ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Source of Energy and Power</h1>
            <div className="form_table_container">
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Electricity Connection to Household
                      </p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="electricity_conn"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Electricity Availability per day (hours)
                      </p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        max="24"
                        onChange={getValue}
                        name="elec_avail_perday_hour"
                        disabled={
                          fillFormData.electricity_conn === "Yes" ? false : true
                        }
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">Lighting</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="lighting1"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Electricity">Electricity</option>
                        <option value="Kerosene">Kerosene</option>
                        <option value="Solar Power">Solar Power</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Mention if Any Other:</p>
                      <input
                        className="form_input"
                        type="text"
                        onChange={getValue}
                        name="lighting1"
                        disabled={
                          fillFormData.lighting1 === "Other" ? false : true
                        }
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">Cooking</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="cooking1"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="LPG">LPG</option>
                        <option value="Biogas">Biogas</option>
                        <option value="Kerosene">Kerosene</option>
                        <option value="Wood">Wood</option>
                        <option value="Cow Dung">Cow Dung</option>
                        <option value="Agro-Residues">Biogas</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Other">Other</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Mention if Any Other:</p>
                      <input
                        className="form_input"
                        type="text"
                        onChange={getValue}
                        name="cooking1"
                        disabled={
                          fillFormData.cooking1 === "Other" ? false : true
                        }
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={2}>
                      <p className="form_input_label">If cooking in Chullah</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        onChange={getValue}
                        name="cook_chullah"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Normal">Normal</option>
                        <option value="Smokeless">Smokeless</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <th className="form_table_heading">S. No.</th>
                    <th className="form_table_heading">Appliances</th>
                    <th className="form_table_heading">Nos.</th>
                    <th className="form_table_heading">
                      Duration/day (in hrs)
                    </th>
                  </tr>

                  {fillFormData.appliances.map((item, idx) => (
                    <tr className="form_table_row" key={idx}>
                      <td
                        className="form_table_data"
                        style={{ textAlign: "center" }}
                      >
                        {idx}
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type="text"
                          name="appliance_name"
                          value={fillFormData.appliances[idx].appliance_name}
                          onChange={handleAppliancesChange(idx)}
                        />
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type="number"
                          name="appliance_nos"
                          value={fillFormData.appliances[idx].appliance_nos}
                          onChange={handleAppliancesChange(idx)}
                        />
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type="number"
                          min="0"
                          max="24"
                          name="appliance_dur"
                          value={fillFormData.appliances[idx].appliance_dur}
                          onChange={handleAppliancesChange(idx)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="form_add_row_btn_container">
                {fillFormData.appliances.length < 5 ? (
                  <button
                    className="form_add_row_btn"
                    onClick={handleAddAppliancesRow}
                  >
                    Add row
                  </button>
                ) : null}
                {fillFormData.appliances.length > 1 ? (
                  <button
                    className="form_remove_row_btn"
                    onClick={handleRemoveAppliancesRow}
                  >
                    Remove Row
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* ------------------- 8. Landholding Information ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">
              Landholding Information{" "}
              <span style={{ fontSize: "1rem" }}>(in Acres)</span>
            </h1>
            <div className="form_table_container">
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">1. Cultivable Area</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={handleLandAreaChange}
                        name="cultivable_area"
                        step={0.01}
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">2. Irrigated Area</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={handleLandAreaChange}
                        name="irrigated_area"
                        step={0.01}
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">3. Un Irrigated Area</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={handleLandAreaChange}
                        name="unirrigated_area"
                        step={0.01}
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">
                        4. Barren/Waste land area
                      </p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={handleLandAreaChange}
                        name="barren_or_wasteland"
                        step={0.01}
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">5. Uncultivable Area</p>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        required
                        type="number"
                        min="0"
                        onChange={handleLandAreaChange}
                        name="uncultivable_area"
                        step={0.01}
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Total Area</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {fillFormData.total_land}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 9. Agricultural Inputs ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Agricultural Inputs</h1>
            <div className="form_table_container">
              <table className="form_table">
                <thead>
                  <tr className="form_table_row">
                    <th className="form_table_heading" colSpan={2}>
                      Particulars
                    </th>
                    <th className="form_table_heading">
                      If Yes, Fertilizer Use(Kg/Acre)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Do you use Chemical Fertilizers?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="is_chemical_fertilizer_used2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        step={0.01}
                        onChange={getValue}
                        name="is_chemical_fertilizer_used3"
                        disabled={
                          fillFormData.is_chemical_fertilizer_used2 === "Yes"
                            ? false
                            : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Do you use Chemical Insecticides?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="is_chemical_insecticide_used2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        step={0.01}
                        onChange={getValue}
                        name="is_chemical_insecticide_used3"
                        disabled={
                          fillFormData.is_chemical_insecticide_used2 === "Yes"
                            ? false
                            : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Do you use Chemical Weedicide?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="is_chemical_weedice_used2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        step={0.01}
                        onChange={getValue}
                        name="is_chemical_weedice_used3"
                        disabled={
                          fillFormData.is_chemical_weedice_used2 === "Yes"
                            ? false
                            : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">
                        Do you use Organic Manures?
                      </p>
                    </td>
                    <td className="form_table_data">
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="is_chemical_organic_manures2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="form_table_data">
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        step={0.01}
                        onChange={getValue}
                        name="is_chemical_organic_manures3"
                        disabled={
                          fillFormData.is_chemical_organic_manures2 === "Yes"
                            ? false
                            : true
                        }
                      />
                    </td>
                  </tr>

                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={3}>
                      <p className="form_input_label">Irrigation</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="irrigation"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Canal">Canal</option>
                        <option value="Tank">Tank</option>
                        <option value="Borewell">Borewell</option>
                        <option value="River">River</option>
                        <option value="Other">Other</option>
                        <option value="None">None</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={3}>
                      <p className="form_input_label">Irrigation System</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="irrigation_sys"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Drip">Drip</option>
                        <option value="Sprinkler">Sprinkler</option>
                        <option value="Flooding">Flooding</option>
                        <option value="None">None</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 10. Agricultural Produce ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">
              Agricultural Produce in a normal year{" "}
              <span style={{ fontSize: "1rem" }}>(Top 5)</span>
            </h1>
            <div className="form_table_container">
              <table className="form_table">
                <thead>
                  <tr className="form_table_row">
                    <th className="form_table_heading">S. No.</th>
                    <th className="form_table_heading">Crop</th>
                    <th className="form_table_heading">
                      Area under the crop in prev. year (Acre)
                    </th>
                    <th className="form_table_heading">
                      Productivity(in quintals per Acre)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {fillFormData.agri_products.map((item, index) => (
                    <tr className="form_table_row" key={index}>
                      <td
                        className="form_table_data"
                        style={{ textAlign: "center" }}
                      >
                        {index}
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type={"text"}
                          name="crop_name"
                          value={fillFormData.agri_products[index].crop_name}
                          onChange={handleProduceChange(index)}
                        />
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type={"number"}
                          step={0.01}
                          name="crop_area_prev_yr_acre"
                          value={
                            fillFormData.agri_products[index]
                              .crop_area_prev_yr_acre
                          }
                          onChange={handleProduceChange(index)}
                        />
                      </td>
                      <td className="form_table_data">
                        <input
                          className="form_input"
                          required
                          type={"number"}
                          step={0.01}
                          name="productivity_in_quintals_per_acre"
                          value={
                            fillFormData.agri_products[index]
                              .productivity_in_quintals_per_acre
                          }
                          onChange={handleProduceChange(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="form_add_row_btn_container">
                {fillFormData.agri_products.length < 5 ? (
                  <button
                    className="form_add_row_btn"
                    onClick={handleAddProduceRow}
                  >
                    Add row
                  </button>
                ) : null}
                {fillFormData.agri_products.length > 1 ? (
                  <button
                    className="form_remove_row_btn"
                    onClick={handleRemoveProduceRow}
                  >
                    Remove Row
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* ------------------- 11. Livestock Numbers ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">Livestock Numbers</h1>
            <div className="form_table_container">
              <table className="form_table">
                <tbody>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">Cows</p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        required
                        onChange={getValue}
                        name="cows"
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Buffalo</p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="buffalo"
                        required
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Goats/Sheep</p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="goats_and_sheeps"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data">
                      <p className="form_input_label">Calves</p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="calves"
                        required
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Bullocks</p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="bullocks"
                        required
                      />
                    </td>
                    <td className="form_table_data">
                      <p className="form_input_label">Poultry/Ducks</p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="poultry_and_ducks"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={3}>
                      <p className="form_input_label">Shelter for Livestock</p>
                      <select
                        className="form_input_select"
                        defaultValue="None"
                        required
                        onChange={getValue}
                        name="livestock_shelter2"
                      >
                        <option value="None" disabled>
                          Select
                        </option>
                        <option value="Pucca">Pucca</option>
                        <option value="Kutcha">Kutcha</option>
                        <option value="Open">Open</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={3}>
                      <p className="form_input_label">
                        Average Daily Production of Milk(Litres)
                      </p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="avg_daily_milk_prod_litres"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="form_table_row">
                    <td className="form_table_data" colSpan={3}>
                      <p className="form_input_label">
                        Animal Waste/Cow Dung (in Kg.)
                      </p>
                      <input
                        className="form_input"
                        type="number"
                        min="0"
                        onChange={getValue}
                        name="animal_waste_or_cow_dung_kgs"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ------------------- 12. Major Problems in village, if any ---------------------------------------------------------------*/}

          <div className="form_section_container">
            <h1 className="form_table_title">
              Major Problems in village, if any{" "}
              <span style={{ fontSize: "1rem" }}>(Top 3)</span>
            </h1>
            <div className="form_table_container">
              <table className="form_table">
                <thead>
                  <tr className="form_table_row">
                    <th className="form_table_heading" colSpan={1}>
                      S. No.
                    </th>
                    <th className="form_table_heading" colSpan={2}>
                      Problems
                    </th>
                    <th className="form_table_heading" colSpan={2}>
                      Possible Solutions by villagers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fillFormData.major_problems.map((item, idx) => (
                    <tr className="form_table_row" key={idx}>
                      <td
                        className="form_table_data"
                        colSpan={1}
                        style={{ textAlign: "center" }}
                      >
                        {idx}
                      </td>
                      <td className="form_table_data" colSpan={2}>
                        <textarea
                          className="form_text_area"
                          required
                          rows={4}
                          name="problems"
                          value={fillFormData.major_problems[idx].problems}
                          onChange={handleProblemsChange(idx)}
                        />
                      </td>
                      <td className="form_table_data" colSpan={2}>
                        <textarea
                          className="form_text_area"
                          required
                          rows={4}
                          name="Suggestions_by_villagers"
                          value={
                            fillFormData.major_problems[idx]
                              .Suggestions_by_villagers
                          }
                          onChange={handleProblemsChange(idx)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="form_add_row_btn_container">
                {fillFormData.major_problems.length < 3 ? (
                  <button
                    className="form_add_row_btn"
                    onClick={handleAddProblemsRow}
                  >
                    Add row
                  </button>
                ) : null}
                {fillFormData.major_problems.length > 1 ? (
                  <button
                    className="form_remove_row_btn"
                    onClick={handleRemoveProblemsRow}
                  >
                    Remove Row
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* ------------------- Submit Button ---------------------------------------------------------------*/}

          <div className="w-full flex flex-col justify-center items-center p-5 mb-3">
            <p
              id="form_submit_alert"
              className="w-full text-center mb-3 rounded-lg p-2 hidden"
            ></p>
            <button
              id="form_submit_button"
              type="submit"
              className="orange_btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default authCheck(FillFormPage);
