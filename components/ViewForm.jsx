import { FormHeader } from ".";

const ViewForm = ({ formData }) => {
  return (
    <>
      <div>
        <FormHeader />
        {/* ------------------- 1. Respondent's Profile ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">Respondent Profile</h1>
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Name:</p>
                    <p className="form_output_label">
                      {formData.respondent_prof.respondents_name}
                    </p>
                  </td>
                  <td className="form_table_data" colSpan={1}>
                    <p className="form_input_label">Age:</p>
                    <p className="form_output_label">
                      {formData.respondent_prof.respondents_age}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">
                      Relationship with head of household:
                    </p>
                    <p className="form_output_label">
                      {formData.respondent_prof.relation_w_hoh}
                    </p>
                  </td>
                  <td className="form_table_data" colSpan={1}>
                    <p className="form_input_label">Contact Number:</p>
                    <p className="form_output_label">
                      {formData.respondent_prof.respondents_contact}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={1}>
                    <p className="form_input_label">Indentity Card Type:</p>
                    <p className="form_output_label">
                      {formData.respondent_prof.id_type}
                    </p>
                  </td>
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Indentity Card Number:</p>
                    <p className="form_output_label">
                      {formData.respondent_prof.id_no}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 2. General Household Information ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">General Household Information</h1>
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">Household ID:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.ho_id}
                    </p>
                  </td>
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">
                      Name of the Head(Household):
                    </p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.hoh_name}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label" htmlFor="gender">
                      Gender
                    </p>
                    <p className="form_output_label" htmlFor="gender">
                      {formData.gen_ho_info.hoh_gender}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Category:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.category}
                    </p>
                  </td>
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Poverty Status:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.pov_status}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">Own House:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.own_house === true ? "Yes" : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Type of House:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.house_type}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Toilet:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.toilet}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Drainage linked to House:
                    </p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.drainage_status}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Waste Collection System:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.waste_collection_sys}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Compost Pit:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.compost_pit}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Biogas Plant:</p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.biogas_plant}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={4}>
                    <p className="form_input_label">
                      Annual Income from all Sources (Approx.):
                    </p>
                    <p className="form_output_label">
                      {formData.gen_ho_info.annual_income}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 3. Family Member Information ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">Family Member Information</h1>
          <div>
            <table className="form_table">
              <thead>
                <tr className="form_table_row">
                  <th className="form_table_heading">S. No.</th>
                  <th className="form_table_heading" style={{ width: "15rem" }}>
                    Name
                  </th>
                  <th
                    className="form_table_heading"
                    style={{ width: "3.5rem" }}
                  >
                    Age
                  </th>
                  <th className="form_table_heading" style={{ width: "4rem" }}>
                    Sex
                  </th>
                  <th className="form_table_heading">Marital Status</th>
                  <th className="form_table_heading">Level of Education</th>
                  <th className="form_table_heading">
                    Going to AWC/ School/ College
                  </th>
                  <th className="form_table_heading">Aadhaar Card</th>
                  <th className="form_table_heading" style={{ width: "4rem" }}>
                    Bank A/C
                  </th>
                  <th className="form_table_heading">Computer Literate</th>
                  <th className="form_table_heading">
                    Social Security Pension
                  </th>
                  <th className="form_table_heading">Major Health Problems</th>
                  <th className="form_table_heading">MNREGA Job Card</th>
                  <th className="form_table_heading">Self Help Groups</th>
                  <th className="form_table_heading">Occupations</th>
                </tr>
              </thead>
              <tbody>
                {formData.fam_info.map((item, index) => (
                  <tr className="form_table_row" key={index + 1}>
                    <td className="form_table_data">
                      <p className="form_output_label">{index + 1}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.name}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.age}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.sex}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.marital_status}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.education}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.schooling_status}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.AADHAR_No}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.has_bank_acc === true ? "Yes" : "No"}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.is_computer_literate === true ? "Yes" : "No"}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.has_SSP === true ? "Yes" : "No"}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.health_prob}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.has_MNREGA === true ? "Yes" : "No"}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.SHG === true ? "Yes" : "No"}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.occupations}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 4. Migration Status ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">Migration Status</h1>
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Does any member of the household migrate for work?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.mig_status.are_migrants === true ? "Yes" : "No"}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      If Yes, How many members of the family migrated?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.mig_status.num_migrants}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Family migrates for how many days/months?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.mig_status.migration_period_months}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Since how many years the migration is taking place?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.mig_status.years_since_migration}
                    </p>
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
          <div>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.PM_jan_dhan_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.PM_ujjawala_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.PM_awas_yojana}
                    </p>
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
                    <p className="form_input_label">Sukanya Samridhi Yojana</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.govt_schemes.sukanya_samriddhi_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.mudra_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.PM_jivan_jyoti_yojana}
                    </p>
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
                    <p className="form_input_label">PM Suraksha Bima Yojana</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.govt_schemes.PM_suraksha_bima_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.atal_pension_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.fasal_bima_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.kaushal_vikas_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.krishi_sinchai_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.jan_aushadhi_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.SBM_toilet}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.soil_health_card}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.ladli_lakshmi_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.janni_suraksha_yojana}
                    </p>
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
                    <p className="form_output_label">
                      {formData.govt_schemes.kisan_credit_card}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 6. Source of Water ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">Source of Water</h1>
          <div>
            <table className="form_table">
              <thead>
                <tr className="form_table_row">
                  <th className="form_table_heading" colSpan={3}>
                    Source of Water
                  </th>
                  <th className="form_table_heading">Distance</th>
                </tr>
              </thead>

              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Piped Water at Home</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.piped_water === true
                        ? "Yes"
                        : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.piped_water[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Community Water Tap</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.comm_water === true ? "Yes" : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.comm_water[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Hand Pump</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.hand_pump === true ? "Yes" : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.hand_pump[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">Open Well</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.open_well === true ? "Yes" : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.water_source.open_well[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={4}>
                    <p className="form_input_label">Mode of Water Storage</p>
                    <p className="form_output_label">
                      {formData.water_source.mode_of_water_storage}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={4}>
                    <p className="form_input_label">
                      Any other source(mention)
                    </p>
                    <p className="form_output_label">
                      {formData.water_source.other_water_source}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 7. Source of Energy and Power ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">Source of Energy and Power</h1>
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Electricity Connection to Household
                    </p>
                    <p className="form_output_label">
                      {formData.source_of_energy.electricity_conn === true
                        ? "Yes"
                        : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Electicity Availability per day (hours)
                    </p>
                    <p className="form_output_label">
                      {formData.source_of_energy.elec_avail_perday_hour}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">Lighting</p>
                    <p className="form_output_label">
                      {formData.source_of_energy.lighting.map((item, index) => {
                        return (
                          <span key={index}>
                            {item}
                            {", "}
                          </span>
                        );
                      })}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Cooking</p>
                    <p className="form_output_label">
                      {formData.source_of_energy.cooking.map((item, index) => {
                        return (
                          <span key={index}>
                            {item}
                            {", "}
                          </span>
                        );
                      })}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={2}>
                    <p className="form_input_label">If cooking in Chullah</p>
                    <p className="form_output_label">
                      {formData.source_of_energy.cook_chullah}
                    </p>
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
                  <th className="form_table_heading">Duration/day (in hrs)</th>
                </tr>

                {formData.source_of_energy.appliances.map((item, index) => (
                  <tr className="form_table_row" key={index + 1}>
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      {index + 1}
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.appliance_name}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.appliance_nos}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.appliance_dur}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 8. Landholding Information ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">
            Landholding Information{" "}
            <span style={{ fontSize: "1rem" }}>(in Acres)</span>
          </h1>
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">1. Cultivable Area</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.land_holding_info.cultivable_area}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">2. Irrigated Area</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.land_holding_info.irrigated_area}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">3. Un Irrigated Area</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.land_holding_info.unirrigated_area}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">
                      4. Barren/Waste land area
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.land_holding_info.barren_or_wasteland}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">5. Uncultivable Area</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.land_holding_info.uncultivable_area}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Total Area</p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.land_holding_info.total_land}
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
          <div>
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
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_fertilizer_used === true
                        ? "Yes"
                        : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_fertilizer_used[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Do you use Chemical Insecticides?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_insecticide_used ===
                      true
                        ? "Yes"
                        : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_insecticide_used[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Do you use Chemical Weedicide?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_weedicide_used === true
                        ? "Yes"
                        : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_weedicide_used[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">
                      Do you use Organic Manures?
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_organic_manures === true
                        ? "Yes"
                        : "No"}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_output_label">
                      {formData.agri_inputs.is_chemical_organic_manures[1]}
                    </p>
                  </td>
                </tr>

                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={3}>
                    <p className="form_input_label">Irrigation</p>
                    <p className="form_output_label">
                      {formData.agri_inputs.irrigation}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={3}>
                    <p className="form_input_label">Irrigation System</p>
                    <p className="form_output_label">
                      {formData.agri_inputs.irrigation_sys}
                    </p>
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
          <div>
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
                {formData.agri_products.map((item, index) => (
                  <tr className="form_table_row" key={index}>
                    <td
                      className="form_table_data"
                      style={{ textAlign: "center" }}
                    >
                      {index + 1}
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">{item.crop_name}</p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.crop_area_prev_yr_acre}
                      </p>
                    </td>
                    <td className="form_table_data">
                      <p className="form_output_label">
                        {item.productivity_in_quintals_per_acre}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------- 11. Livestock Numbers ---------------------------------------------------------------*/}
        <div className="form_section_container">
          <h1 className="form_table_title">Livestock Numbers</h1>
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">Cows</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.cows}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Buffalo</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.buffalo}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Goats/Sheep</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.goats_and_sheeps}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data">
                    <p className="form_input_label">Calves</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.calves}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Bullocks</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.bullocks}
                    </p>
                  </td>
                  <td className="form_table_data">
                    <p className="form_input_label">Poultry/Ducks</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.poultry_and_ducks}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={3}>
                    <p className="form_input_label">Shelter for Livestock</p>
                    <p className="form_output_label">
                      {formData.livestock_nos.livestock_shelter}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={3}>
                    <p className="form_input_label">
                      Average Daily Production of Milk(Litres)
                    </p>
                    <p className="form_output_label">
                      {formData.livestock_nos.avg_daily_milk_prod_litres}
                    </p>
                  </td>
                </tr>
                <tr className="form_table_row">
                  <td className="form_table_data" colSpan={3}>
                    <p className="form_input_label">
                      Animal Waste/Cow Dung (in Kg.)
                    </p>
                    <p className="form_output_label">
                      {formData.livestock_nos.animal_waste_or_cow_dung_kgs}
                    </p>
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
          <div>
            <table className="form_table">
              <tbody>
                <tr className="form_table_row">
                  <td
                    className="form_table_data"
                    style={{ maxWidth: "max-content" }}
                  >
                    <p className="form_input_label">Problems</p>
                  </td>
                  {formData.major_problems.problems.map((item, index) => (
                    <td
                      className="form_table_data"
                      key={index}
                      style={{ textAlign: "center" }}
                    >
                      <p className="form_output_label">{item}</p>
                    </td>
                  ))}
                </tr>
                <tr className="form_table_row">
                  <td
                    className="form_table_data"
                    style={{ maxWidth: "max-content" }}
                  >
                    <p className="form_input_label">Suggestions by Villagers</p>
                  </td>
                  {formData.major_problems.Suggestions_by_villagers.map(
                    (item, index) => (
                      <td
                        className="form_table_data"
                        key={index}
                        style={{ textAlign: "center" }}
                      >
                        <p className="form_output_label">{item}</p>
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewForm;
