import "./Forms.css";
import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.min.css";

export class Forms extends Component {
  state = {
    //Table1*****************************
    respondents_name: "0",
    respondents_gender: "Male",
    respondents_age: "0",
    relation_w_hoh: "0",
    respondents_contact: "0",
    id_type: "Adhaar Card",
    id_no: "0",

    //Table2 ******************************
    ho_id: "0",
    hoh_name: "0",
    hoh_gender: "Male",
    category: "Gen",
    pov_status: "APL",
    own_house: "Yes",
    house_type: "Kutcha",
    toilet: "Private",
    drainage_status: "Covered",
    waste_collection_sys: "Door Step",
    compost_pit: "Individual",
    biogas_plant: "Individual",
    annual_income: "0",

    //Table3******************************
    name: "0",
    age: "0",
    sex: "Male",
    marital_status: "Not Married",
    education: "Not Literate",
    schooling_status: "Going to AWC",
    AADHAR_No: "0",
    has_bank_acc: "Yes",
    is_computer_literate: "Yes",
    has_SSP: "No Pension",
    // has_SSP: "Yes",
    health_prob: "None",
    has_MNREGA: "Yes",
    SHG: "Yes",
    occupations: "Farming on own Land",
    fam_info: [],

    //Table4*********************************

    are_migrants: "Yes",
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

    piped_water2: "Yes",
    piped_water3: "0",

    hand_pump2: "Yes",
    hand_pump3: "0",

    comm_water2: "Yes",
    comm_water3: "0",

    open_well2: "Yes",
    open_well3: "0",
    mode_of_water_storage: "Yes",
    other_water_source: "0",

    //Table7*********************************

    electricity_conn: "Yes",
    elec_avail_perday_hour: "0",
    lighting1: "Electricity",
    cooking1: "LPG",
    cook_chullah: "Normal",

    appliances: [],
    appliance_name: "0",
    appliance_nos: "0",
    appliance_dur: "0",

    //Table8*********************************

    total_land: "0",
    irrigated_area: "0",
    barren_or_wasteland: "0",
    cultivable_area: "0",
    unirrigated_area: "0",
    uncultivable_area: "0",

    //Table9*********************************

    is_chemical_fertilizer_used2: "Yes",
    is_chemical_fertilizer_used3: "0",
    is_chemical_insecticide_used2: "Yes",
    is_chemical_insecticide_used3: "0",
    is_chemical_weedice_used2: "Yes",
    is_chemical_weedice_used3: "0",
    is_chemical_organic_manuevers2: "Yes",
    is_chemical_organic_manuevers3: "0",
    irrigation: "Canal",
    irrigation_sys: "Drip",

    //Table10*********************************

    crop_name: "0",
    crop_area_prev_yr_acre: "0",
    productivity_in_quintals_per_acre: "0",
    agri_products: [],

    //Table11*********************************

    cows: "0",
    buffalo: "0",
    goats_and_sheeps: "0",
    calves: "0",
    bullocks: "0",
    poultry_and_ducks: "0",
    livestock_shelter2: "Pucca",
    avg_daily_milk_prod_litres: "0",
    animal_waste_or_cow_dung_kgs: "0",

    //Table12*********************************

    problems1: "0",
    Suggestions_by_villagers1: "0",
    major_problems: [],
  };

  getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  addNew3() {
    this.setState({
      name: "0",
      age: "0",
      sex: "Male",
      marital_status: "Not Married",
      education: "Not Literate",
      schooling_status: "Going to AWC",
      AADHAR_No: "0",
      has_bank_acc: "Yes",
      is_computer_literate: "Yes",
      has_SSP: "No Pension",
      // has_SSP: "Yes",
      health_prob: "0",
      has_MNREGA: "Yes",
      SHG: "Yes",
      occupations: "Farming on own Land",
    });

    const name = this.state.name;
    const age = this.state.age;
    const sex = this.state.sex;
    const marital_status = this.state.marital_status;
    const education = this.state.education;
    const schooling_status = this.state.schooling_status;
    const AADHAR_No = this.state.AADHAR_No;
    const has_bank_acc = this.state.has_bank_acc;
    const is_computer_literate = this.state.is_computer_literate;
    const has_SSP = this.state.has_SSP;
    const health_prob = this.state.health_prob;
    const has_MNREGA = this.state.has_MNREGA;
    const SHG = this.state.SHG;
    const occupations = this.state.occupations;

    const fam_dict = {};

    fam_dict["name"] = name;
    fam_dict["age"] = parseInt(age);
    fam_dict["sex"] = sex;
    fam_dict["marital_status"] = marital_status;
    fam_dict["education"] = education;
    fam_dict["schooling_status"] = schooling_status;
    fam_dict["AADHAR_No"] = parseInt(AADHAR_No);
    fam_dict["has_bank_acc"] = has_bank_acc == "Yes" ? true : false;
    fam_dict["is_computer_literate"] =
      is_computer_literate == "Yes" ? true : false;
    fam_dict["has_SSP"] = has_SSP;
    // fam_dict["has_SSP"] = has_SSP == "Yes" ? true : false;
    fam_dict["health_prob"] = health_prob;
    fam_dict["has_MNREGA"] = has_MNREGA == "Yes" ? true : false;
    fam_dict["SHG"] = SHG == "Yes" ? true : false;
    fam_dict["occupations"] = occupations;

    const fam_info = this.state.fam_info;
    fam_info.push(fam_dict);
    this.setState({ fam_info });
  }

  addNew7() {
    this.setState({
      appliance_name: "0",
      appliance_nos: "0",
      appliance_dur: "0",
    });

    const appliance_name = this.state.appliance_name;
    const appliance_nos = this.state.appliance_nos;
    const appliance_dur = this.state.appliance_dur;

    const appliances_dict = {};
    appliances_dict["appliance_name"] = appliance_name;
    appliances_dict["appliance_nos"] = parseInt(appliance_nos);
    appliances_dict["appliance_dur"] = parseInt(appliance_dur);

    const appliances = this.state.appliances;
    appliances.push(appliances_dict);
    this.setState({ appliances_dict });
  }

  addNew10() {
    this.setState({
      crop_name: "0",
      crop_area_prev_yr_acre: "0",
      productivity_in_quintals_per_acre: "0",
    });

    const crop_name = this.state.crop_name;
    const crop_area_prev_yr_acre = this.state.crop_area_prev_yr_acre;
    const productivity_in_quintals_per_acre =
      this.state.productivity_in_quintals_per_acre;

    const agri_products_dict = {};
    agri_products_dict["crop_name"] = crop_name;
    agri_products_dict["crop_area_prev_yr_acre"] = parseInt(
      crop_area_prev_yr_acre
    );
    agri_products_dict["productivity_in_quintals_per_acre"] = parseInt(
      productivity_in_quintals_per_acre
    );

    const agri_products = this.state.agri_products;
    agri_products.push(agri_products_dict);
    this.setState({ agri_products });
  }

  addNew12() {
    this.setState({
      problems1: "0",
      Suggestions_by_villagers1: "0",
    });

    const problems1 = this.state.problems1;
    const problems = [];
    problems.push(problems1);

    const Suggestions_by_villagers1 = this.state.Suggestions_by_villagers1;
    const Suggestions_by_villagers = [];
    Suggestions_by_villagers.push(Suggestions_by_villagers1);

    const major_problems_dict = {};
    major_problems_dict["problems"] = problems;
    major_problems_dict["Suggestions_by_villagers"] = Suggestions_by_villagers;

    const major_problems = this.state.major_problems;
    major_problems.push(major_problems_dict);
    this.setState({ major_problems });
  }

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
    gen_ho_info["own_house"] = own_house == "Yes" ? true : false;
    gen_ho_info["house_type"] = house_type;
    gen_ho_info["toilet"] = toilet;
    gen_ho_info["drainage_status"] = drainage_status;
    gen_ho_info["waste_collection_sys"] = waste_collection_sys;
    gen_ho_info["compost_pit"] = compost_pit;
    gen_ho_info["biogas_plant"] = biogas_plant;
    gen_ho_info["annual_income"] = parseInt(annual_income);

    console.log("gen_ho_info", gen_ho_info);
    //Table3*****************************************************************

    const name = this.state.name;
    const age = this.state.age;
    const sex = this.state.sex;
    const marital_status = this.state.marital_status;
    const education = this.state.education;
    const schooling_status = this.state.schooling_status;
    const AADHAR_No = this.state.AADHAR_No;
    const has_bank_acc = this.state.has_bank_acc;
    const is_computer_literate = this.state.is_computer_literate;
    const has_SSP = this.state.has_SSP;
    const health_prob = this.state.health_prob;
    const has_MNREGA = this.state.has_MNREGA;
    const SHG = this.state.SHG;
    const occupations = this.state.occupations;

    const fam_dict = {};

    fam_dict["name"] = name;
    fam_dict["age"] = parseInt(age);
    fam_dict["sex"] = sex;
    fam_dict["marital_status"] = marital_status;
    fam_dict["education"] = education;
    fam_dict["schooling_status"] = schooling_status;
    fam_dict["AADHAR_No"] = parseInt(AADHAR_No);
    fam_dict["has_bank_acc"] = has_bank_acc == "Yes" ? true : false;
    fam_dict["is_computer_literate"] = is_computer_literate == "Yes" ? true : false;
    fam_dict["has_SSP"] = has_SSP;
    // fam_dict["has_SSP"] = has_SSP == "Yes" ? true : false;
    fam_dict["health_prob"] = health_prob;
    fam_dict["has_MNREGA"] = has_MNREGA == "Yes" ? true : false;
    fam_dict["SHG"] = SHG == "Yes" ? true : false;
    fam_dict["occupations"] = occupations;

    const fam_info = this.state.fam_info;
    fam_info.push(fam_dict);
    this.setState({ fam_info });
    console.log("fam_info", fam_info);
    // table4**************************************************

    const are_migrants = this.state.are_migrants;
    const num_migrants = this.state.num_migrants;
    const migration_period_months = this.state.migration_period_months;
    const years_since_migration = this.state.years_since_migration;

    const mig_status = {};
    mig_status["are_migrants"] = are_migrants == "Yes" ? true : false;
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
    const piped_water2 = parseInt(this.state.piped_water2);
    const piped_water3 = parseInt(this.state.piped_water3);

    const hand_pump = [];
    const hand_pump2 = parseInt(this.state.hand_pump2);
    const hand_pump3 = parseInt(this.state.hand_pump3);

    const comm_water = [];
    const comm_water2 = parseInt(this.state.comm_water2);
    const comm_water3 = parseInt(this.state.comm_water3);

    const open_well = [];
    const open_well2 = parseInt(this.state.open_well2);
    const open_well3 = parseInt(this.state.open_well3);

    const mode_of_water_storage = this.state.mode_of_water_storage;
    const other_water_source = this.state.other_water_source;

    piped_water.push(piped_water2 == "Yes" ? true : false, piped_water3);
    hand_pump.push(hand_pump2 == "Yes" ? true : false, hand_pump3);
    comm_water.push(comm_water2 == "Yes" ? true : false, comm_water3);
    open_well.push(open_well2 == "Yes" ? true : false, open_well3);

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
    const appliance_name = this.state.appliance_name;
    const appliance_nos = this.state.appliance_nos;
    const appliance_dur = this.state.appliance_dur;

    lighting.push(lighting1);
    cooking.push(cooking1);

    const appliances_dict = {};
    appliances_dict["appliance_name"] = appliance_name;
    appliances_dict["appliance_nos"] = appliance_nos;
    appliances_dict["appliance_dur"] = appliance_dur;

    const appliances = this.state.appliances;
    appliances.push(appliances_dict);
    this.setState({ appliances_dict });

    const source_of_energy = {};
    source_of_energy["electricity_conn"] =
      electricity_conn == "Yes" ? true : false;
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
    const is_chemical_organic_manuevers2 =
      this.state.is_chemical_organic_manuevers2;
    const is_chemical_organic_manuevers3 =
      this.state.is_chemical_organic_manuevers3;
    const irrigation = this.state.irrigation;
    const irrigation_sys = this.state.irrigation_sys;

    const is_chemical_fertilizer_used = [];
    const is_chemical_insecticide_used = [];
    const is_chemical_weedice_used = [];
    const is_chemical_organic_manuevers = [];

    is_chemical_fertilizer_used.push(
      is_chemical_fertilizer_used2 == "Yes" ? 1 : 0,
      parseInt(is_chemical_fertilizer_used3)
    );
    is_chemical_insecticide_used.push(
      is_chemical_insecticide_used2 == "Yes" ? 1 : 0,
      parseInt(is_chemical_insecticide_used3)
    );
    is_chemical_weedice_used.push(
      is_chemical_weedice_used2 == "Yes" ? 1 : 0,
      parseInt(is_chemical_weedice_used3)
    );
    is_chemical_organic_manuevers.push(
      is_chemical_organic_manuevers2 == "Yes" ? 1 : 0,
      parseInt(is_chemical_organic_manuevers3)
    );
    const agri_inputs = {};

    agri_inputs["is_chemical_fertilizer_used"] = is_chemical_fertilizer_used;
    agri_inputs["is_chemical_insecticide_used"] = is_chemical_insecticide_used;
    agri_inputs["is_chemical_weedice_used"] = is_chemical_weedice_used;
    agri_inputs["is_chemical_organic_manuevers"] =
      is_chemical_organic_manuevers;
    agri_inputs["irrigation"] = this.state.irrigation;
    agri_inputs["irrigation_sys"] = this.state.irrigation_sys;

    console.log("agri_inputs", agri_inputs);
    // table10**************************************************

    const crop_name = this.state.crop_name;
    const crop_area_prev_yr_acre = this.state.crop_area_prev_yr_acre;
    const productivity_in_quintals_per_acre =
      this.state.productivity_in_quintals_per_acre;

    const agri_products_dict = {};
    agri_products_dict["crop_name"] = crop_name;
    agri_products_dict["crop_area_prev_yr_acre"] = parseInt(
      crop_area_prev_yr_acre
    );
    agri_products_dict["productivity_in_quintals_per_acre"] = parseInt(
      productivity_in_quintals_per_acre
    );

    const agri_products = this.state.agri_products;
    agri_products.push(agri_products_dict);
    this.setState({ agri_products });

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

    const problems1 = this.state.problems1;
    const problems = [];
    problems.push(problems1);

    const Suggestions_by_villagers1 = this.state.Suggestions_by_villagers1;
    const Suggestions_by_villagers = [];
    Suggestions_by_villagers.push(Suggestions_by_villagers1);

    const major_problems = {};
    major_problems["problems"] = problems;
    major_problems["Suggestions_by_villagers"] = Suggestions_by_villagers;

    // const major_problems = this.state.major_problems;
    // major_problems.push(major_problems_dict);
    this.setState({ major_problems });

    // console.log("major_problems", major_problems);
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
      body: JSON.stringify(
        postData,
      ),
    };
    let newURL =
      "https://ubaformapi-git-prod-fastapis-build.vercel.app/api/post_data";
    const fetchResponse = await fetch(newURL, settings);
    const data = await fetchResponse.json();

    if (data?.status === "login successful") {
      console.log("data", data);
      alert("Form Submitted Successfully.");
    } else {
      console.log("data", data);
      alert("Form Submission Failed, Try Again.");
    }

    // var filename = "data.json";

    // var fileToSave = new Blob([JSON.stringify(postData)], {
    //   type: "application/json",
    // });

    // saveAs(fileToSave, filename);
  };

  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }

  render() {
    // console.log("state:", this.state);
    return (
      <div className="vform">
        {/* ************************** TABLE 1 *********************************/}

        <div className="table1">
          <Form >
            
          <h2 className="h2title" >1. Respondent's Profile</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <Form.Label>
                  <p>
                    Name
                    <br />
                  </p>
                </Form.Label>
                <Form.Control
                  onChange={this.getValue}
                  name="respondents_name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_age">
                <Form.Label>
                  <p>
                    Age
                    <br />
                  </p>
                </Form.Label>
                <Form.Control
                  type="number"
                  maxLength = "3" onInput={this.maxLengthCheck}
                  min="0"
                  onChange={this.getValue}
                  name="respondents_age"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="relation_w_hoh">
                <Form.Label>Relationship with Head of Household</Form.Label>
                <br/>
                <Form.Control
                  placeholder="Self/Son/Father etc."
                  onChange={this.getValue}
                  name="relation_w_hoh"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_contact">
                <Form.Label>
                  <p>
                    Contact Number
                    <br />
                  </p>
                </Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="respondents_contact"
                  maxLength = "10" onInput={this.maxLengthCheck}
                />
              </Form.Group>
              
              <Form.Group as={Col} controlId="id_type">
                <Form.Label>
                  <p>
                    Identity Card Type
                    <br />
                  </p>
                </Form.Label>
                <Form.Select onChange={this.getValue} name="id_type" className="id_type">
                  <option>Adhaar Card</option>
                  <option>Driving License</option>
                  <option>PAN Card</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="id_no">
                <Form.Label>
                  <p>
                    Identity Card Number
                    <br />
                  </p>
                </Form.Label>
                <Form.Control onChange={this.getValue} name="id_no" maxlength="15" placeholder="Without Spaces"/>
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/* *************************** TABLE 2 ********************************************* */}

        <div>
          <Form>
          
          <h2 className="h2title" >2. General Household Information</h2>
            <Row className="mb-3">
            <div>
              <Form.Group as={Col} controlId="">
                <Form.Label>Household ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <Form.Control onChange={this.getValue} name="ho_id" />
              </Form.Group>

              <Form.Group as={Col} controlId="" >
                <Form.Label>Name of Household &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <Form.Control onChange={this.getValue} name="hoh_name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="hoh_gender">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Category &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="category">
                  <option>Gen</option>
                  <option>SC</option>
                  <option>ST</option>
                  <option>OBC</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Poverty Status &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="pov_status">
                  <option>APL</option>
                  <option>BPL</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Own House &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="own_house">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Type of House &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="house_type">
                  <option>Kutcha</option>
                  <option>Semi Pucca</option>
                  <option>Pucca</option>
                  <option>Homeless</option>
                </Form.Select>
              </Form.Group>
              </div>
              <div>
              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Label>Toilet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <Form.Select onChange={this.getValue} name="toilet" className="gov_schemes_inp">
                  <option>Private</option>
                  <option>Community</option>
                  <option>Open Defecation</option>
                </Form.Select>
              </Form.Group>
            {/* </Row>

            <Row className="mb-3"> */}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Dainage Linked to house</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="drainage_status">
                  <option>Covered</option>
                  <option>Open</option>
                  <option>None</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="">
                <Form.Label>Waste Collection System</Form.Label> 
                <span className="narrow"></span>
                <Form.Select
                  onChange={this.getValue}
                  name="waste_collection_sys"
                >
                  <option>Door Step</option>
                  <option>Common Point</option>
                  <option>No Collection System</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="">
                <Form.Label>Compost Pit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="compost_pit">
                  <option>Individual</option>
                  <option>Group</option>
                  <option>None</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="">
                <Form.Label>Biogas Plant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label> 
                <span className="narrow"></span>
                <Form.Select onChange={this.getValue} name="biogas_plant">
                  <option>Individual</option>
                  <option>Group</option>
                  <option>Community</option>
                  <option>None</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="">
                <Form.Label>
                  Annual Income from all Sources (Approx.):{" "}
                </Form.Label> 
                <span className="narrow"></span>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="annual_income"
                />
              </Form.Group>
              </div>
            </Row>
          </Form><hr/>
        </div>

        {/********************** TABLE 3 ******************************************************** */}

        <div>
          <Form>
            <h2 className="h2title" >3. Family Member Information</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Name <span class="narrow"></span>(Family Members)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
                <Form.Control onChange={this.getValue} name="name" className="gov_schemes_inp"/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Age (Yrs.)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
                <Form.Control
                  type="number"
                  maxLength = "3" onInput={this.maxLengthCheck}
                  min="0"
                  onChange={this.getValue}
                  name="age"
                  className="gov_schemes_inp"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Sex (M/F/O)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="sex" className="gov_schemes_inp">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Marital Status</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="marital_status" className="gov_schemes_inp">
                  <option>Not Married</option>
                  <option>Married</option>
                  <option>Widowed</option>
                  <option>Divorced/Seperated</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Level of Education<span class="narrow"></span> (in Yrs)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="education" className="gov_schemes_inp">
                  <option>Not Literate</option>
                  <option>Literate</option>
                  <option>Completed Class 5th</option>
                  <option>Completed Class 8th</option>
                  <option>Completed Class 10th</option>
                  <option>Completed Class 12th</option>
                  <option>ITI Diploma</option>
                  <option>Graduate</option>
                  <option>Post Graduate/ Professional</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Going to AWC/ <span class="narrow"></span>School/ College</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="schooling_status" className="gov_schemes_inp">
                  <option>Going to AWC</option>
                  <option>School</option>
                  <option>College</option>
                  <option>Not Going</option>
                  <option>Not Applicable</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Aadhar Card <span class="narrow"></span>Number</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Control
                  type="number"
                  maxLength = "12" onInput={this.maxLengthCheck}
                  min="0"
                  onChange={this.getValue}
                  name="AADHAR_No"
                  className="gov_schemes_inp"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Bank A/C <span class="narrow"></span>(Yes/No)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="has_bank_acc" className="gov_schemes_inp">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Computer Literate <span class="narrow"></span>(Yes/ No)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Select
                  onChange={this.getValue}
                  name="is_computer_literate"
                  className="gov_schemes_inp"
                >
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Social Security <span class="narrow"></span>Pension</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
                <Form.Select disabled="true" onChange={this.getValue} name="has_SSP" className="gov_schemes_inp">
                  <option>No Pension</option>
                  <option>Old Age Pension</option>
                  <option>Widow Pension</option>
                  <option>Disability Pension</option>
                  <option>Other Pension</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Major Health <span class="narrow"></span>Problems </p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState" className="gov_schemes">
                <Form.Control placeholder="(mention if Any)" onChange={this.getValue} 
                name="health_prob" className="gov_schemes_inp"/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>MNREGA Job Card <span class="narrow"></span>(Yes/ No)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="has_MNREGA" className="gov_schemes_inp">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Self Help Groups</p>
                <p> (Select 'Yes' if involved)</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
                <Form.Select onChange={this.getValue} name="SHG" className="gov_schemes_inp">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <p>Occupation</p>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name" className="gov_schemes">
              <Form.Select onChange={this.getValue} name="occupations" className="gov_schemes_inp">
                  <option>Farming on own Land</option>
                  <option>Sharecropping /Farming Leased Land</option>
                  <option>Animal Husbandry</option>
                  <option>Pisci-culture/Poultry</option>
                  <option>Fishing</option>
                  <option>Skilled Wage Worker</option>
                  <option>Unskilled Wage Worker</option>
                  <option>Salaried Employment in Government</option>
                  <option>Salaried Employment in Private Sector</option>
                  <option>Weaving</option>
                  <option>Other Artisan</option>
                  <option>Other Trade & Business</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button
            className="btns"
              variant="secondary"
              type="reset"
              onClick={() => {
                if (this.state.respondents_name === "") {
                  alert("nope.");
                } else {
                  this.addNew3();
                }
              }}
            >
              Add New
            </Button>
          </Form><hr/>
        </div>

        {/* ***************************** TABLE 4 **************************************** */}

        <div>
          <Form>
          
          <h2 className="h2title" >4. Migration Status in Family</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Does any member migrate for work?</Form.Label><br/>
                <Form.Select
                  defaultValue=" "
                  onChange={this.getValue}
                  name="are_migrants"
                >
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <Form.Label>If yes, how many members migrate?</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="num_migrants"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Family migrate for how many months?</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="migration_period_months"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Since how many years family migrates?</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="years_since_migration"
                />
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/* ***************************** TABLE 5 **************************************** */}
        <div>
          <Form>
          
          <h2 className="h2title" >5. Information of Government Schemes</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <h4>Sno.</h4>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <h4>Name</h4>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <h4>Persons Benefitted<span class="narrow"></span> (in numbers)</h4>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>1.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>PM Jan Dhan <span class="narrow"></span>Yojana</p>
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes">
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="PM_jan_dhan_yojana"
                  className="gov_schemes_inp"  
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>2.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>PM Ujjwala <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="PM_ujjawala_yojana"                  
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>3.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>PM Awas <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="PM_awas_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>4.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Sukanya Samridhi <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="sukanya_samriddhi_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>5.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Mudra <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="mudra_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState" >
                <p>6.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>PM Jivan Jyoti <span class="narrow"></span> Bima Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="PM_jivan_jyoti_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>7.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>PM Suraksha <span class="narrow"></span> Bima Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="PM_suraksha_bima_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState" >
                <p>8.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Atal Pension <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="atal_pension_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>9.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Fasal Bima <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="fasal_bima_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>10.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Kaushal Vikas <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="kaushal_vikas_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>11.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Krishi Sinchai <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="krishi_sinchai_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>12.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Jan Aushadi <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="jan_aushadhi_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>13.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Swacch Bharat <span class="narrow"></span>Mission Toilet</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes">
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="SBM_toilet"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>14.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Soil Health <span class="narrow"></span>Card</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="soil_health_card"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>15.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Ladli Lakshmi <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="ladli_lakshmi_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>16.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Janani Suraksha <span class="narrow"></span>Yojana</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="janni_suraksha_yojana"
                  className="gov_schemes_inp" 
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>17.</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <p>Kisan Credit <span class="narrow"></span>Card</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity" className="gov_schemes" >
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="kisan_credit_card"
                  className="gov_schemes_inp"
                />
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/* ***************************** TABLE 6 **************************************** */}

        <div>
          <Form>
          
          <h2 className="h2title" >6. Source of Water</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <h4>Sources of water</h4>
              </Form.Group>
              {/* 
            <Form.Group as={Col} controlId="respondents_name">
              <h4>Public/Private</h4>
            </Form.Group> */}

              <Form.Group as={Col} controlId="respondents_name">
                <h4>Yes/No</h4>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <h4>Distance (in Km)</h4>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>Piped water at home &nbsp;&nbsp;</p>
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridState">
              <Form.Select  onChange={this.getValue} name='piped_water'>
                <option>   </option>
                <option>Public</option>
                <option>Private</option>
              </Form.Select>
            </Form.Group> */}

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select onChange={this.getValue} name="piped_water2">
                  <option> </option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="piped_water3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>Community water tap</p>
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridState">
              <Form.Select   onChange={this.getValue} name='comm_water'>
                <option>   </option>
                <option>Public</option>
                <option>Private</option>
              </Form.Select>
            </Form.Group> */}

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select onChange={this.getValue} name="comm_water2">
                  <option> </option>
                      <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="comm_water3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>Hand pump &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridState">
              <Form.Select   onChange={this.getValue} name='hand_pump'>
                <option>   </option>
                <option>Public</option>
                <option>Private</option>
              </Form.Select>
            </Form.Group> */}

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select onChange={this.getValue} name="hand_pump2">
                  <option> </option>
                      <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="hand_pump3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>Open Well &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </Form.Group>

              {/* <Form.Group as={Col} controlId="formGridState">
              <Form.Select   onChange={this.getValue} name='open_well'>
                <option>   </option>
               <option>Public</option>
                <option>Private</option>
              </Form.Select>
            </Form.Group> */}

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select onChange={this.getValue} name="open_well2">
                  <option> </option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="open_well3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <h4>Method of water storage</h4>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <h4>Any other source (mention)</h4>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select
                  onChange={this.getValue}
                  name="mode_of_water_storage"
                >
                  <option> </option>
                  <option>Community</option>
                  <option>Individual</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <Form.Control
                  onChange={this.getValue}
                  name="other_water_source"
                />
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/**************TABLE 7***************/}

        <div>
          <div>
            <Form>
            
            <h2 className="h2title" >7. Sources of Energy and Power</h2>
              <Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Electricity Connection to household</Form.Label>
                  <Form.Select
                    defaultValue="Community"
                    onChange={this.getValue}
                    name="electricity_conn"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="respondents_name">
                  <Form.Label>
                    Electricity Available per day (hours):
                  </Form.Label>
                  <Form.Control
                    type="number"
                  min="0"
                    onChange={this.getValue}
                    name="elec_avail_perday_hour"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>
                    <p>
                      Lighting: <br />{" "}
                    </p>
                  </Form.Label>
                  <Form.Select
                    defaultValue="Community"
                    onChange={this.getValue}
                    name="lighting1"
                  >
                    <option>Electricity</option>
                    <option>Kerosene</option>
                    <option>Power</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>
                    <p>
                      Cooking: <br />
                    </p>
                  </Form.Label>
                  <Form.Select
                    defaultValue="Community"
                    onChange={this.getValue}
                    name="cooking1"
                  >
                    <option>LPG</option>
                    <option>Biogas</option>
                    <option>Kerosene</option>
                    <option>Solar Power</option>
                    <option>Wood</option>
                    <option>Cow Dung</option>
                    <option>Agro-Residues</option>
                    <option>Electricity</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>
                    <p>
                      If Cooking in Chullah: <br />
                    </p>
                  </Form.Label>
                  <Form.Select
                    defaultValue="Normal"
                    onChange={this.getValue}
                    name="cook_chullah"
                  >
                    <option>Normal</option>
                    <option>Smokeless</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Form><hr/>
          </div>
          <br />
          <div>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="">
                  <h4>Appliance Name</h4>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    onChange={this.getValue}
                    name="appliance_name"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="respondents_name">
                  <h4>Nos. </h4>
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    type="number"
                  min="0"
                    onChange={this.getValue}
                    name="appliance_nos"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="respondents_name">
                  <h4>Duration per day  <span className="narrow"></span>(in Hours)</h4>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    type="number"
                  min="0"
                    onChange={this.getValue}
                    name="appliance_dur"
                  />
                </Form.Group>
              </Row>

              <Button
              className="btns"
                variant="secondary"
                type="reset"
                onClick={() => {
                  if (this.state.respondents_name === "") {
                    alert("nope.");
                  } else {
                    this.addNew7();
                  }
                }}
              >
                Add New
              </Button>
            </Form><hr/>
          </div>
        </div>

        {/**************TABLE 8***************/}
        <div>
          <Form>
          
          <h2 className="h2title" >8. Landholding Information (In Acres)</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <Form.Label>Total:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="total_land"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Irrigated Area:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="irrigated_area"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Barren/Wasteland Area:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="barren_or_wasteland"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cultivable Area:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="cultivable_area"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Unirrigated Area:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="unirrigated_area"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Uncultivable Area:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="uncultivable_area"
                />
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/**************TABLE 9***************/}
        <div>
          <Form className="table9">
          
          <h2 className="h2title" >9. Agricultural Inputs</h2>
            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                
              </Form.Group>
            </Row> */}
            
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
               <h4>Particulars</h4><br/>
                
                <div className="invidiv">
                <p>Do you use Chemical Fertilisers ?</p>
                <p className="invi"> .....</p>
              </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
              <h4>Yes/No</h4><br/>
                <Form.Select
                  onChange={this.getValue}
                  name="is_chemical_fertilizer_used2"
                >
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
               <h4 className="invi"> .</h4><br/>
                <Form.Control
                  placeholder="If Yes, Fertiliser used (kg/acre)"
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="is_chemical_fertilizer_used3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>Do you use Chemical Insecticides ?</p>
                
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select
                  onChange={this.getValue}
                  name="is_chemical_insecticide_used2"
                >
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                placeholder="If Yes, Fertiliser used (kg/acre)"
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="is_chemical_insecticide_used3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <p>Do you use Chemical Weedicides ?</p>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select
                  onChange={this.getValue}
                  name="is_chemical_weedice_used2"
                >
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                placeholder="If Yes, Fertiliser used (kg/acre)"
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="is_chemical_weedice_used3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
              <div className="invidiv">
                <p>Do you use Manure ?</p>
                <p className="invi"> ..............................</p>
              </div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select
                  onChange={this.getValue}
                  name="is_chemical_organic_manuevers2"
                >
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                placeholder="If Yes, Fertiliser used (kg/acre)"
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="is_chemical_organic_manuevers3"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <h4>Irrigation</h4>
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
                <h4>Irrigation System</h4>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select onChange={this.getValue} name="irrigation">
                  <option>Canal</option>
                  <option>Tank</option>
                  <option>Borewell</option>
                  <option>River</option>
                  <option>Other</option>
                  <option>None</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Select onChange={this.getValue} name="irrigation_sys">
                  <option>Drip</option>
                  <option>Sprinkler</option>
                  <option>Flooding</option>
                  <option>None</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/**************TABLE 10***************/}

        <div>
          <Form>
          
          <h2 className="h2title" >10. Agricultural Produce in a normal year (Top 5)</h2>
            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                
              </Form.Group>

              <Form.Group as={Col} controlId="respondents_name">
              </Form.Group>
              <Form.Group as={Col} controlId="respondents_name">
                
              </Form.Group>
            </Row> */}

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Crop Name</Form.Label><br/>
                <Form.Control onChange={this.getValue} name="crop_name" />
              </Form.Group>
              
              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Persons Benefitted (in numbers)</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="crop_area_prev_yr_acre"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Productivity (in quintals per acre)</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="productivity_in_quintals_per_acre"
                />
              </Form.Group>
            </Row>

            <Button
              className="btns"
              variant="secondary"
              type="reset"
              onClick={() => {
                if (this.state.respondents_name === "") {
                  alert("nope.");
                } else {
                  this.addNew10();
                }
              }}
            >
              Add New
            </Button>
          </Form><hr/>
        </div>

        {/**************TABLE 11***************/}

        <div>
          <Form>
          
          <h2 className="h2title" >11.Livestock Numbers (in numbers)</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <Form.Label>Cows:</Form.Label><br/>
                <Form.Control onChange={this.getValue} name="cows" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Buffalo:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="buffalo"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Goat/Sheep:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="goats_and_sheeps"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Calves:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="calves"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Bullocks:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="bullocks"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Poultry/ Ducks:</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="poultry_and_ducks"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Shelters for Livestocks</Form.Label><br/>
                <Form.Select onChange={this.getValue} name="livestock_shelter2">
                  <option>Pucca</option>
                  <option>Kutcha</option>
                  <option>Open</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Average Daily Milk Produce (liters):</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="avg_daily_milk_prod_litres"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Animal Waste/Cow Dung (in kgs):</Form.Label><br/>
                <Form.Control
                  type="number"
                  min="0"
                  onChange={this.getValue}
                  name="animal_waste_or_cow_dung_kgs"
                />
              </Form.Group>
            </Row>
          </Form><hr/>
        </div>

        {/**************TABLE 12***************/}
        <div>
          <Form>
          
          <h2 className="h2title" >12. Major Problems in Village, If Any (Top 3)</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="respondents_name">
                <h4>Problems</h4>
              </Form.Group>
              <Form.Group as={Col} controlId="respondents_name">
                <h4>Problems Suggestions by Villagers</h4>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control onChange={this.getValue} name="problems1" maxlength="200" 
                  placeholder="200 words limit"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  onChange={this.getValue}
                  name="Suggestions_by_villagers1"
                  maxlength="200"
                  placeholder="200 words limit"
                />
              </Form.Group>
            </Row>

            <Button
              className="btns"
              variant="secondary"
              type="reset"
              onClick={() => {
                if (this.state.respondents_name === "") {
                  alert("nope.");
                } else {
                  this.addNew12();
                }
              }}
            >
              Add New
            </Button>
          </Form><hr/>
        </div>

        <br />

        <Button className="btns submitt-btn" variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit Form
        </Button>
      </div>
    );
  }
}

export default Forms;
