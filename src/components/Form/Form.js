import { Component } from "react";
import {
  InputContainer,
  Input,
  InputLabel,
  InputOption,
  InputSelect,
  InputTextArea,
  SectionContainer,
  SectionTitle,
  Table,
  TableData,
  TableHeading,
  TableRow,
  SubmitButton,
  ButtonRow,
  RemoveRowButton,
  AddRowButton,
  SubmitButtonRow,
  MessageSentAlert,
  OutputLabel,
} from "./FormStyles";

export default class Form extends Component {
  state = {
    //Table1*****************************
    respondents_name: "",
    respondents_gender: "",
    respondents_age: "0",
    relation_w_hoh: "",
    respondents_contact: "0",
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
        AADHAR_No: "0",
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
  };

  /* 3. Family Information */

  handleFamMemberChange = (idx) => (e) => {
    const { name, value } = e.target;
    const fam_info = this.state.fam_info;
    fam_info[idx][name] = value;
    this.setState({
      fam_info,
    });
  };
  handleAddFamMemberRow = () => {
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
    this.setState({
      fam_info: [...this.state.fam_info, item],
    });
  };
  handleRemoveFamMemberRow = () => {
    this.setState({
      fam_info: this.state.fam_info.slice(0, -1),
    });
  };

  /* 7. Source of Energy and Power */

  handleAppliancesChange = (idx) => (e) => {
    const { name, value } = e.target;
    const appliances = this.state.appliances;
    appliances[idx][name] = value;
    this.setState({
      appliances,
    });
  };
  handleAddAppliancesRow = () => {
    const item = {
      appliance_name: "",
      appliance_nos: "",
      appliance_dur: "",
    };
    this.setState({
      appliances: [...this.state.appliances, item],
    });
  };
  handleRemoveAppliancesRow = () => {
    this.setState({
      appliances: this.state.appliances.slice(0, -1),
    });
  };

  /* 8. Landholding Information*/
  handleLandAreaChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    setTimeout(() => {
      this.setState({
        total_land:
          parseInt(this.state.irrigated_area) +
          parseInt(this.state.barren_or_wasteland) +
          parseInt(this.state.cultivable_area) +
          parseInt(this.state.unirrigated_area) +
          parseInt(this.state.uncultivable_area),
      });
    }, 200);
  };

  /* 10. Agricultural produce */

  handleProduceChange = (idx) => (e) => {
    const { name, value } = e.target;
    const agri_products = this.state.agri_products;
    agri_products[idx][name] = value;
    this.setState({
      agri_products,
    });
  };
  handleAddProduceRow = () => {
    const item = {
      crop_name: "",
      crop_area_prev_yr_acre: "",
      productivity_in_quintals_per_acre: "",
    };
    this.setState({
      agri_products: [...this.state.agri_products, item],
    });
  };
  handleRemoveProduceRow = () => {
    this.setState({
      agri_products: this.state.agri_products.slice(0, -1),
    });
  };

  /* 12. Major Problems table */

  handleProblemsChange = (idx) => (e) => {
    const { name, value } = e.target;
    const major_problems = this.state.major_problems;
    major_problems[idx][name] = value;
    this.setState({
      major_problems,
    });
  };
  handleAddProblemsRow = () => {
    const item = {
      problems: "",
      Suggestions_by_villagers: "",
    };
    // this.state.major_problems.push(item);
    this.setState({
      major_problems: [...this.state.major_problems, item],
    });
  };
  handleRemoveProblemsRow = () => {
    this.setState({
      major_problems: this.state.major_problems.slice(0, -1),
    });
  };

  getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    //TABLE1******************************************************
    const respondents_name = this.state.respondents_name;
    const respondents_age = this.state.respondents_age;
    const relation_w_hoh = this.state.relation_w_hoh;
    const respondents_contact = this.state.respondents_contact;
    const id_type = this.state.id_type;
    const id_no = this.state.id_no;

    const respondent_prof = {};
    respondent_prof["respondents_name"] = respondents_name;
    respondent_prof["respondents_age"] = parseInt(respondents_age);
    respondent_prof["relation_w_hoh"] = relation_w_hoh;
    respondent_prof["respondents_contact"] = respondents_contact;
    respondent_prof["id_type"] = id_type;
    respondent_prof["id_no"] = id_no;

    console.log("respondent_prof", respondent_prof);
    //TABLE2*******************************************************
    const ho_id = this.state.ho_id;
    const hoh_name = this.state.hoh_name;
    const hoh_gender = this.state.hoh_gender;
    const category = this.state.category;
    const pov_status = this.state.pov_status;
    const own_house = this.state.own_house;
    const house_type = this.state.house_type;
    const toilet = this.state.toilet;
    const drainage_status = this.state.drainage_status;
    const waste_collection_sys = this.state.waste_collection_sys;
    const compost_pit = this.state.compost_pit;
    const biogas_plant = this.state.biogas_plant;
    const annual_income = this.state.annual_income;

    const gen_ho_info = {};
    gen_ho_info["ho_id"] = ho_id;
    gen_ho_info["hoh_name"] = hoh_name;
    gen_ho_info["hoh_gender"] = hoh_gender;
    gen_ho_info["category"] = category;
    gen_ho_info["pov_status"] = pov_status;
    gen_ho_info["own_house"] = own_house === "Yes" ? true : false;
    gen_ho_info["house_type"] = house_type;
    gen_ho_info["toilet"] = toilet;
    gen_ho_info["drainage_status"] = drainage_status;
    gen_ho_info["waste_collection_sys"] = waste_collection_sys;
    gen_ho_info["compost_pit"] = compost_pit;
    gen_ho_info["biogas_plant"] = biogas_plant;
    gen_ho_info["annual_income"] = parseInt(annual_income);

    console.log("gen_ho_info", gen_ho_info);
    //Table3*****************************************************************

    const fam_info = this.state.fam_info;

    console.log("fam_info", fam_info);
    // table4**************************************************

    const are_migrants = this.state.are_migrants;
    const num_migrants = this.state.num_migrants;
    const migration_period_months = this.state.migration_period_months;
    const years_since_migration = this.state.years_since_migration;

    const mig_status = {};
    mig_status["are_migrants"] = are_migrants === "Yes" ? true : false;
    mig_status["num_migrants"] = parseInt(num_migrants);
    mig_status["migration_period_months"] = parseInt(migration_period_months);
    mig_status["years_since_migration"] = parseInt(years_since_migration);

    console.log("mig_status", mig_status);
    // table5**************************************************

    const PM_jan_dhan_yojana = this.state.PM_jan_dhan_yojana;
    const PM_ujjawala_yojana = this.state.PM_ujjawala_yojana;
    const PM_awas_yojana = this.state.PM_awas_yojana;
    const sukanya_samriddhi_yojana = this.state.sukanya_samriddhi_yojana;
    const mudra_yojana = this.state.mudra_yojana;
    const PM_jivan_jyoti_yojana = this.state.PM_jivan_jyoti_yojana;
    const PM_suraksha_bima_yojana = this.state.PM_suraksha_bima_yojana;
    const atal_pension_yojana = this.state.atal_pension_yojana;
    const fasal_bima_yojana = this.state.fasal_bima_yojana;
    const kaushal_vikas_yojana = this.state.kaushal_vikas_yojana;
    const krishi_sinchai_yojana = this.state.krishi_sinchai_yojana;
    const jan_aushadhi_yojana = this.state.jan_aushadhi_yojana;
    const SBM_toilet = this.state.SBM_toilet;
    const soil_health_card = this.state.soil_health_card;
    const ladli_lakshmi_yojana = this.state.ladli_lakshmi_yojana;
    const janni_suraksha_yojana = this.state.janni_suraksha_yojana;
    const kisan_credit_card = this.state.kisan_credit_card;

    const govt_schemes = {};
    govt_schemes["PM_jan_dhan_yojana"] = parseInt(PM_jan_dhan_yojana);
    govt_schemes["PM_ujjawala_yojana"] = parseInt(PM_ujjawala_yojana);
    govt_schemes["PM_awas_yojana"] = parseInt(PM_awas_yojana);
    govt_schemes["sukanya_samriddhi_yojana"] = parseInt(
      sukanya_samriddhi_yojana
    );
    govt_schemes["mudra_yojana"] = parseInt(mudra_yojana);
    govt_schemes["PM_jivan_jyoti_yojana"] = parseInt(PM_jivan_jyoti_yojana);
    govt_schemes["PM_suraksha_bima_yojana"] = parseInt(PM_suraksha_bima_yojana);
    govt_schemes["atal_pension_yojana"] = parseInt(atal_pension_yojana);
    govt_schemes["fasal_bima_yojana"] = parseInt(fasal_bima_yojana);
    govt_schemes["kaushal_vikas_yojana"] = parseInt(kaushal_vikas_yojana);
    govt_schemes["krishi_sinchai_yojana"] = parseInt(krishi_sinchai_yojana);
    govt_schemes["jan_aushadhi_yojana"] = parseInt(jan_aushadhi_yojana);
    govt_schemes["SBM_toilet"] = parseInt(SBM_toilet);
    govt_schemes["soil_health_card"] = parseInt(soil_health_card);
    govt_schemes["ladli_lakshmi_yojana"] = parseInt(ladli_lakshmi_yojana);
    govt_schemes["janni_suraksha_yojana"] = parseInt(janni_suraksha_yojana);
    govt_schemes["kisan_credit_card"] = parseInt(kisan_credit_card);

    console.log("govt_schemes", govt_schemes);
    // table6**************************************************

    const piped_water = [];
    const piped_water2 = this.state.piped_water2;
    const piped_water3 = parseInt(this.state.piped_water3);

    const hand_pump = [];
    const hand_pump2 = this.state.hand_pump2;
    const hand_pump3 = parseInt(this.state.hand_pump3);

    const comm_water = [];
    const comm_water2 = this.state.comm_water2;
    const comm_water3 = parseInt(this.state.comm_water3);

    const open_well = [];
    const open_well2 = this.state.open_well2;
    const open_well3 = parseInt(this.state.open_well3);

    const mode_of_water_storage = this.state.mode_of_water_storage;
    const other_water_source = this.state.other_water_source;

    piped_water.push(piped_water2 === "Yes" ? true : false, piped_water3);
    hand_pump.push(hand_pump2 === "Yes" ? true : false, hand_pump3);
    comm_water.push(comm_water2 === "Yes" ? true : false, comm_water3);
    open_well.push(open_well2 === "Yes" ? true : false, open_well3);

    const water_source = {};
    water_source["piped_water"] = piped_water;
    water_source["hand_pump"] = hand_pump;
    water_source["comm_water"] = comm_water;
    water_source["open_well"] = open_well;
    water_source["mode_of_water_storage"] = mode_of_water_storage;
    water_source["other_water_source"] = other_water_source;

    console.log("water_source", water_source);
    // table7**************************************************

    const electricity_conn = this.state.electricity_conn;
    const elec_avail_perday_hour = this.state.elec_avail_perday_hour;
    const lighting1 = this.state.lighting1;
    const lighting = [];
    const cooking1 = this.state.cooking1;
    const cooking = [];
    const cook_chullah = this.state.cook_chullah;

    lighting.push(lighting1);
    cooking.push(cooking1);
    const appliances = this.state.appliances;

    const source_of_energy = {};
    source_of_energy["electricity_conn"] =
      electricity_conn === "Yes" ? true : false;
    source_of_energy["elec_avail_perday_hour"] = parseInt(
      elec_avail_perday_hour
    );
    source_of_energy["lighting"] = lighting;
    source_of_energy["cooking"] = cooking;
    source_of_energy["cook_chullah"] = cook_chullah;
    source_of_energy["appliances"] = appliances;

    console.log("source_of_energy", source_of_energy);
    // table8**************************************************

    const total_land = this.state.total_land;
    const irrigated_area = this.state.irrigated_area;
    const barren_or_wasteland = this.state.barren_or_wasteland;
    const cultivable_area = this.state.cultivable_area;
    const unirrigated_area = this.state.unirrigated_area;
    const uncultivable_area = this.state.uncultivable_area;

    const land_holding_info = {};

    land_holding_info["total_land"] = parseInt(total_land);
    land_holding_info["irrigated_area"] = parseInt(irrigated_area);
    land_holding_info["barren_or_wasteland"] = parseInt(barren_or_wasteland);
    land_holding_info["cultivable_area"] = parseInt(cultivable_area);
    land_holding_info["unirrigated_area"] = parseInt(unirrigated_area);
    land_holding_info["uncultivable_area"] = parseInt(uncultivable_area);

    console.log("land_holding_info", land_holding_info);
    // table9**************************************************

    const is_chemical_fertilizer_used2 =
      this.state.is_chemical_fertilizer_used2;
    const is_chemical_fertilizer_used3 =
      this.state.is_chemical_fertilizer_used3;
    const is_chemical_insecticide_used2 =
      this.state.is_chemical_insecticide_used2;
    const is_chemical_insecticide_used3 =
      this.state.is_chemical_insecticide_used3;
    const is_chemical_weedice_used2 = this.state.is_chemical_weedice_used2;
    const is_chemical_weedice_used3 = this.state.is_chemical_weedice_used3;
    const is_chemical_organic_manures2 =
      this.state.is_chemical_organic_manures2;
    const is_chemical_organic_manures3 =
      this.state.is_chemical_organic_manures3;
    const irrigation = this.state.irrigation;
    const irrigation_sys = this.state.irrigation_sys;

    const is_chemical_fertilizer_used = [];
    const is_chemical_insecticide_used = [];
    const is_chemical_weedice_used = [];
    const is_chemical_organic_manures = [];

    is_chemical_fertilizer_used.push(
      is_chemical_fertilizer_used2 === "Yes" ? 1 : 0,
      parseInt(is_chemical_fertilizer_used3)
    );
    is_chemical_insecticide_used.push(
      is_chemical_insecticide_used2 === "Yes" ? 1 : 0,
      parseInt(is_chemical_insecticide_used3)
    );
    is_chemical_weedice_used.push(
      is_chemical_weedice_used2 === "Yes" ? 1 : 0,
      parseInt(is_chemical_weedice_used3)
    );
    is_chemical_organic_manures.push(
      is_chemical_organic_manures2 === "Yes" ? 1 : 0,
      parseInt(is_chemical_organic_manures3)
    );
    const agri_inputs = {};

    agri_inputs["is_chemical_fertilizer_used"] = is_chemical_fertilizer_used;
    agri_inputs["is_chemical_insecticide_used"] = is_chemical_insecticide_used;
    agri_inputs["is_chemical_weedicide_used"] = is_chemical_weedice_used;
    agri_inputs["is_chemical_organic_manures"] = is_chemical_organic_manures;
    agri_inputs["irrigation"] = irrigation;
    agri_inputs["irrigation_sys"] = irrigation_sys;

    console.log("agri_inputs", agri_inputs);
    // table10**************************************************

    const agri_products = this.state.agri_products;

    console.log("agri_products", agri_products);
    //table11**************************************************

    const cows = this.state.cows;
    const buffalo = this.state.buffalo;
    const goats_and_sheeps = this.state.goats_and_sheeps;
    const calves = this.state.calves;
    const bullocks = this.state.bullocks;
    const poultry_and_ducks = this.state.poultry_and_ducks;
    const livestock_shelter2 = this.state.livestock_shelter2;
    const avg_daily_milk_prod_litres = this.state.avg_daily_milk_prod_litres;
    const animal_waste_or_cow_dung_kgs =
      this.state.animal_waste_or_cow_dung_kgs;

    const livestock_shelter = [];
    livestock_shelter.push(livestock_shelter2);

    const livestock_nos = {};
    livestock_nos["cows"] = parseInt(cows);
    livestock_nos["buffalo"] = parseInt(buffalo);
    livestock_nos["goats_and_sheeps"] = parseInt(goats_and_sheeps);
    livestock_nos["calves"] = parseInt(calves);
    livestock_nos["bullocks"] = parseInt(bullocks);
    livestock_nos["poultry_and_ducks"] = parseInt(poultry_and_ducks);
    livestock_nos["livestock_shelter"] = livestock_shelter;
    livestock_nos["avg_daily_milk_prod_litres"] = parseInt(
      avg_daily_milk_prod_litres
    );
    livestock_nos["animal_waste_or_cow_dung_kgs"] = parseInt(
      animal_waste_or_cow_dung_kgs
    );

    console.log("livestock_nos", livestock_nos);
    //Table12**************************************************

    const problems = [];
    const Suggestions_by_villagers = [];

    this.state.major_problems.map((item, index) => {
      problems.push(item.problems);
      Suggestions_by_villagers.push(item.Suggestions_by_villagers);
    });

    const major_problems = {};
    major_problems["problems"] = problems;
    major_problems["Suggestions_by_villagers"] = Suggestions_by_villagers;

    console.log("major_problems", major_problems);

    const postData = {
      static_vars: {
        village_name: "Sehore",
        grampanchyat_name: "bhairaghad",
        ward_no: "7",
        block: "141",
        district: "kothri-kalan",
        state: "Madhya Pradesh",
      },
      respondent_prof: respondent_prof,
      gen_ho_info: gen_ho_info,
      fam_info: fam_info,
      mig_status: mig_status,
      govt_schemes: govt_schemes,
      water_source: water_source,
      source_of_energy: source_of_energy,
      land_holding_info: land_holding_info,
      agri_inputs: agri_inputs,
      agri_products: agri_products,
      livestock_nos: livestock_nos,
      major_problems: major_problems,
    };
    console.log("postData", JSON.stringify(postData));

    const settings = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("authTokens")).access_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    let newURL = "https://ubaformapi.vercel.app/api/post_data";
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();
    console.log("data", data.status);
    if (data?.status === "success") {
      console.log("data", data);
      document.getElementById("alert").innerHTML =
        "Form Submitted Successfully";
      document.getElementById("alert").style.display = "block";
      setTimeout(function () {
        document.getElementById("alert").style.display = "none";
      }, 4000);
      window.location.reload();
    } else if (data?.status === "abort") {
      console.log("data", data);
      document.querySelector(".alert_style").style.display = "block";
      document.querySelector(".alert_style").style.backgroundColor = "#f44336";
      document.getElementById("alert").innerHTML =
        "Respondent with this ID already exists, Please try again!";
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    } else {
      console.log("data", data);
      document.querySelector(".alert_style").style.display = "block";
      document.querySelector(".alert_style").style.backgroundColor = "#f44336";
      document.getElementById("alert").innerHTML =
        "Form Submission Failed, Please Try Again.";

      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    }

    // var filename = "data.json";

    // var fileToSave = new Blob([JSON.stringify(postData)], {
    //   type: "application/json",
    // });

    // saveAs(fileToSave, filename);
  };

  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/* ------------------- 1. Respondent's Profile ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Respondent Profile</SectionTitle>
              <InputContainer>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Name:</InputLabel>
                        <Input
                          type="text"
                          required
                          name="respondents_name"
                          onChange={this.getValue}
                          placeholder="Full Name"
                        />
                      </TableData>
                      <TableData colSpan={1}>
                        <InputLabel>Age:</InputLabel>
                        <Input
                          type="number"
                          required
                          min={0}
                          maxLength={3}
                          onInput={this.maxLengthCheck}
                          onChange={this.getValue}
                          name="respondents_age"
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>
                          Relationship with head of household:
                        </InputLabel>
                        <Input
                          type="text"
                          required
                          name="relation_w_hoh"
                          onChange={this.getValue}
                          placeholder="Self/Son/Father etc."
                        />
                      </TableData>
                      <TableData colSpan={1}>
                        <InputLabel>Contact Number:</InputLabel>
                        <Input
                          type="number"
                          required
                          name="respondents_contact"
                          min={0}
                          maxLength={10}
                          onInput={this.maxLengthCheck}
                          onChange={this.getValue}
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={1}>
                        <InputLabel>Indentity Card Type:</InputLabel>
                        <InputSelect
                          name="id_type"
                          onChange={this.getValue}
                          required
                        >
                          <InputOption defaultValue="select">
                            Select
                          </InputOption>
                          <InputOption value="aadhaar">
                            Aadhaar Card
                          </InputOption>
                          <InputOption value="voterId">Voter ID</InputOption>
                          <InputOption value="DL">Driving License</InputOption>
                          <InputOption value="panCard">Pan Card</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData colSpan={2}>
                        <InputLabel>Indentity Card Number:</InputLabel>
                        <Input
                          // required={this.state.id_type !== "select"}
                          type="text"
                          onChange={this.getValue}
                          name="id_no"
                          disabled={
                            this.state.id_type === "select" ? true : false
                          }
                          minLength={
                            this.state.id_type === "aadhaar"
                              ? "12"
                              : this.state.id_type === "panCard"
                              ? "10"
                              : "7"
                          }
                          maxLength={
                            this.state.id_type === "aadhaar"
                              ? "12"
                              : this.state.id_type === "panCard"
                              ? "10"
                              : "18"
                          }
                          placeholder={
                            this.state.id_type === "aadhaar"
                              ? "1234 1234 1234"
                              : this.state.id_type === "panCard"
                              ? "ABCDE1234F"
                              : this.state.id_type === "voterId"
                              ? "ABC1234567"
                              : this.state.id_type === "DL"
                              ? "DL12 1234123412"
                              : "Select ID Type"
                          }
                        />
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 2. General Household Information ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>General Household Information</SectionTitle>
              <InputContainer>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableData>
                        <InputLabel>Household ID:</InputLabel>
                        <Input
                          required
                          type="text"
                          onChange={this.getValue}
                          name="ho_id"
                        />
                      </TableData>
                      <TableData colSpan={2}>
                        <InputLabel>Name of the Head(Household):</InputLabel>
                        <Input
                          required
                          type="text"
                          onChange={this.getValue}
                          name="hoh_name"
                        />
                      </TableData>
                      <TableData>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="hoh_gender"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="male">Male</InputOption>
                          <InputOption value="female">Female</InputOption>
                          <InputOption value="other">Other</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Category:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="category"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="SC">SC</InputOption>
                          <InputOption value="ST">ST</InputOption>
                          <InputOption value="OBC">OBC</InputOption>
                          <InputOption value="General">General</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData colSpan={2}>
                        <InputLabel>Poverty Status:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="pov_status"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="APL">APL</InputOption>
                          <InputOption value="BPL">BPL</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData>
                        <InputLabel>Own House:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="own_house"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Type of House:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="house_type"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Kutcha">Kutcha</InputOption>
                          <InputOption value="Semi Pucca">
                            Semi Pucca
                          </InputOption>
                          <InputOption value="Pucca">Pucca</InputOption>
                          <InputOption value="Homeless">Homeless</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Toilet:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="toilet"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Private">Private</InputOption>
                          <InputOption value="Community">Community</InputOption>
                          <InputOption value="Open Defecation">
                            Open Defecation
                          </InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Drainage linked to House:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="drainage_status"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Covered">Covered</InputOption>
                          <InputOption value="Open">Open</InputOption>
                          <InputOption value="None">None</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Waste Collection System:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="waste_collection_sys"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Door Step">Door Step</InputOption>
                          <InputOption value="Common Point">
                            Common Point
                          </InputOption>
                          <InputOption value="No Collection System">
                            No Collection System
                          </InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Compost Pit:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="compost_pit"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Individual">
                            Individual
                          </InputOption>
                          <InputOption value="Group">Group</InputOption>
                          <InputOption value="None">None</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Biogas Plant:</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="biogas_plant"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Individual">
                            Individual
                          </InputOption>
                          <InputOption value="Group">Group</InputOption>
                          <InputOption value="Community">Community</InputOption>
                          <InputOption value="None">None</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={4}>
                        <InputLabel>
                          Annual Income from all Sources (Approx.):
                        </InputLabel>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="annual_income"
                        />
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 3. Family Member Information ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Family Member Information</SectionTitle>
              <InputContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading>S. No.</TableHeading>
                      <TableHeading style={{ width: "10rem" }}>
                        Name
                      </TableHeading>
                      <TableHeading style={{ width: "3.5rem" }}>
                        Age
                      </TableHeading>
                      <TableHeading style={{ width: "4rem" }}>Sex</TableHeading>
                      <TableHeading>Marital Status</TableHeading>
                      <TableHeading>Level of Education</TableHeading>
                      <TableHeading>Going to AWC/ School/ College</TableHeading>
                      <TableHeading>Aadhaar Card</TableHeading>
                      <TableHeading style={{ width: "4rem" }}>
                        Bank A/C
                      </TableHeading>
                      <TableHeading>Computer Literate</TableHeading>
                      <TableHeading>Social Security Pension</TableHeading>
                      <TableHeading>Major Health Problems</TableHeading>
                      <TableHeading>MNREGA Job Card</TableHeading>
                      <TableHeading>Self Help Groups</TableHeading>
                      <TableHeading>Occupations</TableHeading>
                    </TableRow>
                  </thead>
                  <tbody>
                    {this.state.fam_info.map((fam, index) => (
                      <TableRow key={index}>
                        <TableData style={{ textAlign: "center" }}>
                          {index}
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"text"}
                            name="name"
                            value={this.state.fam_info[index].name}
                            onChange={this.handleFamMemberChange(index)}
                          />
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"number"}
                            name="age"
                            value={this.state.fam_info[index].age}
                            onChange={this.handleFamMemberChange(index)}
                          />
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="sex"
                            value={this.state.fam_info[index].sex}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Male">Male</InputOption>
                            <InputOption value="Female">Female</InputOption>
                            <InputOption value="Other">Other</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="marital_status"
                            value={this.state.fam_info[index].marital_status}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Not Married">
                              Not Married
                            </InputOption>
                            <InputOption value="Married">Married</InputOption>
                            <InputOption value="Widowed">Widowed</InputOption>
                            <InputOption value="Divorced/Separated">
                              Divorced/Separated
                            </InputOption>
                            <InputOption value="Other">Other</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="education"
                            value={this.state.fam_info[index].education}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Not Literate">
                              Not Literate
                            </InputOption>
                            <InputOption value="Literate">Literate</InputOption>
                            <InputOption value="Completed Class 5th">
                              Completed Class 5th
                            </InputOption>
                            <InputOption value="Completed Class 8th">
                              Completed Class 8th
                            </InputOption>
                            <InputOption value="Completed Class 10th">
                              Completed Class 10th
                            </InputOption>
                            <InputOption value="Completed Class 12th">
                              Completed Class 12th
                            </InputOption>
                            <InputOption value="ITI Diploma">
                              ITI Diploma
                            </InputOption>
                            <InputOption value="Graduate">Graduate</InputOption>
                            <InputOption value="Post Graduate/Professional">
                              Post Graduate/Professional
                            </InputOption>
                            <InputOption value="Other">Other</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="schooling_status"
                            value={this.state.fam_info[index].schooling_status}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="AWC">AWC</InputOption>
                            <InputOption value="School">School</InputOption>
                            <InputOption value="College">College</InputOption>
                            <InputOption value="Not Going">
                              Not Going
                            </InputOption>
                            <InputOption value="Not Applicable">
                              Not Applicable
                            </InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"text"}
                            name="AADHAR_No"
                            minLength={12}
                            maxLength={12}
                            value={this.state.fam_info[index].AADHAR_No}
                            onChange={this.handleFamMemberChange(index)}
                          />
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="has_bank_acc"
                            value={this.state.fam_info[index].has_bank_acc}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Yes">Yes</InputOption>
                            <InputOption value="No">No</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="is_computer_literate"
                            value={
                              this.state.fam_info[index].is_computer_literate
                            }
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Yes">Yes</InputOption>
                            <InputOption value="No">No</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="has_SSP"
                            value={this.state.fam_info[index].has_SSP}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="No Pension">
                              No Pension
                            </InputOption>
                            <InputOption value="Old Age Pension">
                              Old Age Pension
                            </InputOption>
                            <InputOption value="Widow Pension">
                              Widow Pension
                            </InputOption>
                            <InputOption value="Disability Pension">
                              Disability Pension
                            </InputOption>
                            <InputOption value="Other Pension">
                              Other Pension
                            </InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"text"}
                            name="health_prob"
                            value={this.state.fam_info[index].health_prob}
                            onChange={this.handleFamMemberChange(index)}
                          />
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="has_MNREGA"
                            value={this.state.fam_info[index].has_MNREGA}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Yes">Yes</InputOption>
                            <InputOption value="No">No</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="SHG"
                            value={this.state.fam_info[index].SHG}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Yes">Yes</InputOption>
                            <InputOption value="No">No</InputOption>
                          </InputSelect>
                        </TableData>
                        <TableData>
                          <InputSelect
                            required
                            name="occupations"
                            value={this.state.fam_info[index].occupations}
                            onChange={this.handleFamMemberChange(index)}
                          >
                            <InputOption defaultValue="Select">
                              Select
                            </InputOption>
                            <InputOption value="Farming on own Land">
                              Farming on own Land
                            </InputOption>
                            <InputOption value="Sharecropping/Farming Leased Land">
                              Sharecropping/Farming Leased Land
                            </InputOption>
                            <InputOption value="Animal Husbandry">
                              Animal Husbandry
                            </InputOption>
                            <InputOption value="Pisci-culture/Poultry">
                              Pisci-culture/Poultry
                            </InputOption>
                            <InputOption value="Fishing">Fishing</InputOption>
                            <InputOption value="Skilled Wage Worker">
                              Skilled Wage Worker
                            </InputOption>
                            <InputOption value="Unskilled Wage Worker">
                              Unskilled Wage Worker
                            </InputOption>
                            <InputOption value="Salaried Employment in Government">
                              Salaried Employment in Government
                            </InputOption>
                            <InputOption value="Salaried Employment in Private Sector">
                              Salaried Employment in Private Sector
                            </InputOption>
                            <InputOption value="Weaving">Weaving</InputOption>
                            <InputOption value="Other Artisian">
                              Other Artisian
                            </InputOption>
                            <InputOption value="Other Trade & Business">
                              Other Trade & Business
                            </InputOption>
                          </InputSelect>
                        </TableData>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <ButtonRow>
                  {this.state.fam_info.length < 15 ? (
                    <AddRowButton onClick={this.handleAddFamMemberRow}>
                      Add row
                    </AddRowButton>
                  ) : null}
                  {this.state.fam_info.length > 1 ? (
                    <RemoveRowButton onClick={this.handleRemoveFamMemberRow}>
                      Remove Row
                    </RemoveRowButton>
                  ) : null}
                </ButtonRow>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 4. Migration Status ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Migration Status</SectionTitle>
              <InputContainer>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableData>
                        <InputLabel>
                          Does any member of the household migrate for work?
                        </InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="are_migrants"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <InputLabel>
                          If Yes, How many members of the family migrated?
                        </InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="num_migrants"
                          disabled={
                            this.state.are_migrants === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <InputLabel>
                          Family migrates for how many days/months?
                        </InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="migration_period_months"
                          disabled={
                            this.state.are_migrants === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <InputLabel>
                          Since how many years the migration is taking place?
                        </InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="years_since_migration"
                          disabled={
                            this.state.are_migrants === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 5. Information of Government Schemes ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Information of Government Schemes</SectionTitle>
              <InputContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading>S. No.</TableHeading>
                      <TableHeading>Name</TableHeading>
                      <TableHeading>
                        Persons Benefitted(in Numbers)
                      </TableHeading>
                    </TableRow>
                  </thead>

                  <tbody>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>1</TableData>
                      <TableData>
                        <InputLabel>PM Jan Dhan Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="PM_jan_dhan_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>2</TableData>
                      <TableData>
                        <InputLabel>PM Ujjawala Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="PM_ujjawala_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>3</TableData>
                      <TableData>
                        <InputLabel>PM Awas Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="PM_awas_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>4</TableData>
                      <TableData>
                        <InputLabel>Sukanya Samridhi Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="sukanya_samriddhi_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>5</TableData>
                      <TableData>
                        <InputLabel>Mudra Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="mudra_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>6</TableData>
                      <TableData>
                        <InputLabel>PM Jivan Jyoti Bima Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="PM_jivan_jyoti_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>7</TableData>
                      <TableData>
                        <InputLabel>PM Suraksha Bima Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="PM_suraksha_bima_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>8</TableData>
                      <TableData>
                        <InputLabel>Atal pension Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="atal_pension_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>9</TableData>
                      <TableData>
                        <InputLabel>Fasal Bima Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="fasal_bima_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>10</TableData>
                      <TableData>
                        <InputLabel>Kaushal Vikas Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="kaushal_vikas_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>11</TableData>
                      <TableData>
                        <InputLabel>Krishi Sinchai Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="krishi_sinchai_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>12</TableData>
                      <TableData>
                        <InputLabel>Jan Aushadi Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="jan_aushadhi_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>13</TableData>
                      <TableData>
                        <InputLabel>Swachh Bharat Mission Toilet</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="SBM_toilet"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>14</TableData>
                      <TableData>
                        <InputLabel>Soil Health Card</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="soil_health_card"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>15</TableData>
                      <TableData>
                        <InputLabel>Ladli Lakshmi Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="ladli_lakshmi_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>16</TableData>
                      <TableData>
                        <InputLabel>Janani Suraksha Yojana</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="janni_suraksha_yojana"
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData style={{ textAlign: "center" }}>17</TableData>
                      <TableData>
                        <InputLabel>Kisan Credit Card</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="kisan_credit_card"
                        />
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 6. Source of Water ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Source of Water</SectionTitle>
              <InputContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading colSpan={3}>Source of Water</TableHeading>
                      <TableHeading>Distance</TableHeading>
                    </TableRow>
                  </thead>

                  <tbody>
                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Piped Water at Home</InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="piped_water2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="piped_water3"
                          disabled={
                            this.state.piped_water2 === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Community Water Tap</InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="comm_water2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="comm_water3"
                          disabled={
                            this.state.comm_water2 === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Hand Pump</InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="hand_pump2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="hand_pump3"
                          disabled={
                            this.state.hand_pump2 === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>Open Well</InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="open_well2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="open_well3"
                          disabled={
                            this.state.open_well2 === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={4}>
                        <InputLabel>Mode of Water Storage</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="mode_of_water_storage"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Community">Community</InputOption>
                          <InputOption value="Individual">
                            Individual
                          </InputOption>
                          <InputOption value="Other">Other</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData colSpan={4}>
                        <InputLabel>Any other source(mention)</InputLabel>
                        <Input
                          type={"text"}
                          onChange={this.getValue}
                          name="other_water_source"
                          disabled={
                            this.state.mode_of_water_storage === "Other"
                              ? false
                              : true
                          }
                        />
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 7. Source of Energy and Power ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Source of Energy and Power</SectionTitle>
              <InputContainer>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableData>
                        <InputLabel>
                          Electricity Connection to Household
                        </InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="electricity_conn"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>
                          Electicity Availability per day (hours)
                        </InputLabel>
                        <Input
                          type="number"
                          min="0"
                          max="24"
                          onChange={this.getValue}
                          name="elec_avail_perday_hour"
                          disabled={
                            this.state.electricity_conn === "Yes" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <InputLabel>Lighting</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="lighting1"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Electicity">
                            Electicity
                          </InputOption>
                          <InputOption value="Kerosene">Kerosene</InputOption>
                          <InputOption value="Solar Power">
                            Solar Power
                          </InputOption>
                          <InputOption value="Other">Other</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Mention if Any Other:</InputLabel>
                        <Input
                          type="text"
                          onChange={this.getValue}
                          name="lighting1"
                          disabled={
                            this.state.lighting1 === "Other" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <InputLabel>Cooking</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="cooking1"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="LPG">LPG</InputOption>
                          <InputOption value="Biogas">Biogas</InputOption>
                          <InputOption value="Kerosene">Kerosene</InputOption>
                          <InputOption value="Wood">Wood</InputOption>
                          <InputOption value="Cow Dung">Cow Dung</InputOption>
                          <InputOption value="Agro-Residues">
                            Biogas
                          </InputOption>
                          <InputOption value="Electricity">
                            Electricity
                          </InputOption>
                          <InputOption value="Other">Other</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <InputLabel>Mention if Any Other:</InputLabel>
                        <Input
                          type="text"
                          onChange={this.getValue}
                          name="cooking1"
                          disabled={
                            this.state.cooking1 === "Other" ? false : true
                          }
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData colSpan={2}>
                        <InputLabel>If cooking in Chullah</InputLabel>
                        <InputSelect
                          onChange={this.getValue}
                          name="cook_chullah"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Normal">Normal</InputOption>
                          <InputOption value="Smokeless">Smokeless</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableHeading>S. No.</TableHeading>
                      <TableHeading>Appliances</TableHeading>
                      <TableHeading>Nos.</TableHeading>
                      <TableHeading>Duration/day (in hrs)</TableHeading>
                    </TableRow>

                    {this.state.appliances.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableData style={{ textAlign: "center" }}>
                          {idx}
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type="text"
                            name="appliance_name"
                            value={this.state.appliances[idx].appliance_name}
                            onChange={this.handleAppliancesChange(idx)}
                          />
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type="number"
                            name="appliance_nos"
                            value={this.state.appliances[idx].appliance_nos}
                            onChange={this.handleAppliancesChange(idx)}
                          />
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type="number"
                            min="0"
                            max="24"
                            name="appliance_dur"
                            value={this.state.appliances[idx].appliance_dur}
                            onChange={this.handleAppliancesChange(idx)}
                          />
                        </TableData>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <ButtonRow>
                  {this.state.appliances.length < 5 ? (
                    <AddRowButton onClick={this.handleAddAppliancesRow}>
                      Add row
                    </AddRowButton>
                  ) : null}
                  {this.state.appliances.length > 1 ? (
                    <RemoveRowButton onClick={this.handleRemoveAppliancesRow}>
                      Remove Row
                    </RemoveRowButton>
                  ) : null}
                </ButtonRow>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 8. Landholding Information ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>
                Landholding Information{" "}
                <span style={{ fontSize: "1rem" }}>(in Acres)</span>
              </SectionTitle>
              <InputContainer>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableData>
                        <InputLabel>1. Cultivable Area</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.handleLandAreaChange}
                          name="cultivable_area"
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>2. Irrigated Area</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.handleLandAreaChange}
                          name="irrigated_area"
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData>
                        <InputLabel>3. Un Irrigated Area</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.handleLandAreaChange}
                          name="unirrigated_area"
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>4. Barren/Waste land area</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.handleLandAreaChange}
                          name="barren_or_wasteland"
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData>
                        <InputLabel>5. Uncultivable Area</InputLabel>
                      </TableData>
                      <TableData>
                        <Input
                          required
                          type="number"
                          min="0"
                          onChange={this.handleLandAreaChange}
                          name="uncultivable_area"
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>Total Area</InputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{this.state.total_land}</OutputLabel>
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 9. Agricultural Inputs ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Agricultural Inputs</SectionTitle>
              <InputContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading colSpan={2}>Particulars</TableHeading>
                      <TableHeading>
                        If Yes, Fertilizer Use(Kg/Acre)
                      </TableHeading>
                    </TableRow>
                  </thead>

                  <tbody>
                    <TableRow>
                      <TableData>
                        <InputLabel>
                          Do you use Chemical Fertilizers?
                        </InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="is_chemical_fertilizer_used2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="is_chemical_fertilizer_used3"
                          disabled={
                            this.state.is_chemical_fertilizer_used2 === "Yes"
                              ? false
                              : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData>
                        <InputLabel>
                          Do you use Chemical Insecticides?
                        </InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="is_chemical_insecticide_used2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="is_chemical_insecticide_used3"
                          disabled={
                            this.state.is_chemical_insecticide_used2 === "Yes"
                              ? false
                              : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData>
                        <InputLabel>Do you use Chemical Weedicide?</InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="is_chemical_weedice_used2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="is_chemical_weedice_used3"
                          disabled={
                            this.state.is_chemical_weedice_used2 === "Yes"
                              ? false
                              : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData>
                        <InputLabel>Do you use Organic Manures?</InputLabel>
                      </TableData>
                      <TableData>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="is_chemical_organic_manures2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Yes">Yes</InputOption>
                          <InputOption value="No">No</InputOption>
                        </InputSelect>
                      </TableData>
                      <TableData>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="is_chemical_organic_manures3"
                          disabled={
                            this.state.is_chemical_organic_manures2 === "Yes"
                              ? false
                              : true
                          }
                        />
                      </TableData>
                    </TableRow>

                    <TableRow>
                      <TableData colSpan={3}>
                        <InputLabel>Irrigation</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="irrigation"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Canal">Canal</InputOption>
                          <InputOption value="Tank">Tank</InputOption>
                          <InputOption value="Borewell">Borewell</InputOption>
                          <InputOption value="River">River</InputOption>
                          <InputOption value="Other">Other</InputOption>
                          <InputOption value="None">None</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData colSpan={3}>
                        <InputLabel>Irrigation System</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="irrigation_sys"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Drip">Drip</InputOption>
                          <InputOption value="Sprinkler">Sprinkler</InputOption>
                          <InputOption value="Flooding">Flooding</InputOption>
                          <InputOption value="None">None</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 10. Agricultural Produce ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>
                Agricultural Produce in a normal year{" "}
                <span style={{ fontSize: "1rem" }}>(Top 5)</span>
              </SectionTitle>
              <InputContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading>S. No.</TableHeading>
                      <TableHeading>Crop</TableHeading>
                      <TableHeading>
                        Area under the crop in prev. year (Acre)
                      </TableHeading>
                      <TableHeading>
                        Productivity(in quintals per Acre)
                      </TableHeading>
                    </TableRow>
                  </thead>

                  <tbody>
                    {this.state.agri_products.map((item, index) => (
                      <TableRow key={index}>
                        <TableData style={{ textAlign: "center" }}>
                          {index}
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"text"}
                            name="crop_name"
                            value={this.state.agri_products[index].crop_name}
                            onChange={this.handleProduceChange(index)}
                          />
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"number"}
                            name="crop_area_prev_yr_acre"
                            value={
                              this.state.agri_products[index]
                                .crop_area_prev_yr_acre
                            }
                            onChange={this.handleProduceChange(index)}
                          />
                        </TableData>
                        <TableData>
                          <Input
                            required
                            type={"number"}
                            name="productivity_in_quintals_per_acre"
                            value={
                              this.state.agri_products[index]
                                .productivity_in_quintals_per_acre
                            }
                            onChange={this.handleProduceChange(index)}
                          />
                        </TableData>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <ButtonRow>
                  {this.state.agri_products.length < 5 ? (
                    <AddRowButton onClick={this.handleAddProduceRow}>
                      Add row
                    </AddRowButton>
                  ) : null}
                  {this.state.agri_products.length > 1 ? (
                    <RemoveRowButton onClick={this.handleRemoveProduceRow}>
                      Remove Row
                    </RemoveRowButton>
                  ) : null}
                </ButtonRow>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 11. Livestock Numbers ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>Livestock Numbers</SectionTitle>
              <InputContainer>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableData>
                        <InputLabel>Cows</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          required
                          onChange={this.getValue}
                          name="cows"
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>Buffalo</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="buffalo"
                          required
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>Goats/Sheep</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="goats_and_sheeps"
                          required
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <InputLabel>Calves</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="calves"
                          required
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>Bullocks</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="bullocks"
                          required
                        />
                      </TableData>
                      <TableData>
                        <InputLabel>Poultry/Ducks</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="poultry_and_ducks"
                          required
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData colSpan={3}>
                        <InputLabel>Shelter for Livestock</InputLabel>
                        <InputSelect
                          required
                          onChange={this.getValue}
                          name="livestock_shelter2"
                        >
                          <InputOption defaultValue="Select">
                            Select
                          </InputOption>
                          <InputOption value="Pucca">Pucca</InputOption>
                          <InputOption value="Kutcha">Kutcha</InputOption>
                          <InputOption value="Open">Open</InputOption>
                        </InputSelect>
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData colSpan={3}>
                        <InputLabel>
                          Average Daily Production of Milk(Litres)
                        </InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="avg_daily_milk_prod_litres"
                          required
                        />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData colSpan={3}>
                        <InputLabel>Animal Waste/Cow Dung (in Kg.)</InputLabel>
                        <Input
                          type="number"
                          min="0"
                          onChange={this.getValue}
                          name="animal_waste_or_cow_dung_kgs"
                          required
                        />
                      </TableData>
                    </TableRow>
                  </tbody>
                </Table>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- 12. Major Problems in village, if any ---------------------------------------------------------------*/}

          <div className="container">
            <SectionContainer>
              <SectionTitle>
                Major Problems in village, if any{" "}
                <span style={{ fontSize: "1rem" }}>(Top 3)</span>
              </SectionTitle>
              <InputContainer>
                <Table>
                  <thead>
                    <TableRow>
                      <TableHeading>S. No.</TableHeading>
                      <TableHeading>Problems</TableHeading>
                      <TableHeading>
                        Possible Solutions by villagers
                      </TableHeading>
                    </TableRow>
                  </thead>
                  <tbody>
                    {this.state.major_problems.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableData style={{ textAlign: "center" }}>
                          {idx}
                        </TableData>
                        <TableData>
                          <InputTextArea
                            required
                            name="problems"
                            value={this.state.major_problems[idx].problems}
                            onChange={this.handleProblemsChange(idx)}
                          />
                        </TableData>
                        <TableData>
                          <InputTextArea
                            required
                            name="Suggestions_by_villagers"
                            value={
                              this.state.major_problems[idx]
                                .Suggestions_by_villagers
                            }
                            onChange={this.handleProblemsChange(idx)}
                          />
                        </TableData>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
                <ButtonRow>
                  {this.state.major_problems.length < 3 ? (
                    <AddRowButton onClick={this.handleAddProblemsRow}>
                      Add row
                    </AddRowButton>
                  ) : null}
                  {this.state.major_problems.length > 1 ? (
                    <RemoveRowButton onClick={this.handleRemoveProblemsRow}>
                      Remove Row
                    </RemoveRowButton>
                  ) : null}
                </ButtonRow>
              </InputContainer>
            </SectionContainer>
          </div>

          {/* ------------------- Submit Button ---------------------------------------------------------------*/}

          <div className="container">
            <MessageSentAlert id="alert" className="alert_style">
              Form Submitted
            </MessageSentAlert>
            <SubmitButtonRow>
              <SubmitButton type="submit">Submit Form</SubmitButton>
            </SubmitButtonRow>
          </div>
        </form>
      </>
    );
  }
}
