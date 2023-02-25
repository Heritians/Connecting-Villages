import { Component } from "react";
import {
  InputContainer,
  InputLabel,
  OutputLabel,
  SectionContainer,
  SectionTitle,
  Table,
  TableData,
  TableHeading,
  TableRow,
} from "./ViewFormStyles";

export default class ViewForm extends Component {
  render() {
    return (
      <div className="container">
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
                      <OutputLabel>
                        {
                          this.props.formdata.respondent_prof[0]
                            .respondents_name
                        }
                      </OutputLabel>
                    </TableData>
                    <TableData colSpan={1}>
                      <InputLabel>Age:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.respondent_prof[0].respondents_age}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>
                        Relationship with head of household:
                      </InputLabel>
                      <OutputLabel>
                        {this.props.formdata.respondent_prof[0].relation_w_hoh}
                      </OutputLabel>
                    </TableData>
                    <TableData colSpan={1}>
                      <InputLabel>Contact Number:</InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.respondent_prof[0]
                            .respondents_contact
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={1}>
                      <InputLabel>Indentity Card Type:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.respondent_prof[0].id_type}
                      </OutputLabel>
                    </TableData>
                    <TableData colSpan={2}>
                      <InputLabel>Indentity Card Number:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.respondent_prof[0].id_no}
                      </OutputLabel>
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
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].ho_id}
                      </OutputLabel>
                    </TableData>
                    <TableData colSpan={2}>
                      <InputLabel>Name of the Head(Household):</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].hoh_name}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel htmlFor="gender">Gender</InputLabel>
                      <OutputLabel htmlFor="gender">
                        {this.props.formdata.gen_ho_info[0].hoh_gender}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>Category:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].category}
                      </OutputLabel>
                    </TableData>
                    <TableData colSpan={2}>
                      <InputLabel>Poverty Status:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].pov_status}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>
                      <InputLabel>Own House:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].own_house === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Type of House:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].house_type}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Toilet:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].toilet}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Drainage linked to House:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].drainage_status}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>Waste Collection System:</InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.gen_ho_info[0]
                            .waste_collection_sys
                        }
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Compost Pit:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].compost_pit}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Biogas Plant:</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].biogas_plant}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={4}>
                      <InputLabel>
                        Annual Income from all Sources (Approx.):
                      </InputLabel>
                      <OutputLabel>
                        {this.props.formdata.gen_ho_info[0].annual_income}
                      </OutputLabel>
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
                    <TableHeading style={{ width: "15rem" }}>Name</TableHeading>
                    <TableHeading style={{ width: "3.5rem" }}>Age</TableHeading>
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
                  {this.props.formdata.fam_info.map((item, index) => (
                    <TableRow key={index + 1}>
                      <TableData>
                        <OutputLabel>{index + 1}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.name}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.age}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.sex}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.marital_status}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.education}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.schooling_status}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.AADHAR_No}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>
                          {item.has_bank_acc === true ? "Yes" : "No"}
                        </OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>
                          {item.is_computer_literate === true ? "Yes" : "No"}
                        </OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>
                          {item.has_SSP === true ? "Yes" : "No"}
                        </OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.health_prob}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>
                          {item.has_MNREGA === true ? "Yes" : "No"}
                        </OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>
                          {item.SHG === true ? "Yes" : "No"}
                        </OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.occupations}</OutputLabel>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
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
                      <OutputLabel>
                        {this.props.formdata.mig_status[0].are_migrants === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>
                      <InputLabel>
                        If Yes, How many members of the family migrated?
                      </InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.mig_status[0].num_migrants}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>
                      <InputLabel>
                        Family migrates for how many days/months?
                      </InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.mig_status[0]
                            .migration_period_months
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>
                      <InputLabel>
                        Since how many years the migration is taking place?
                      </InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.mig_status[0]
                            .years_since_migration
                        }
                      </OutputLabel>
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
                    <TableHeading>Persons Benefitted(in Numbers)</TableHeading>
                  </TableRow>
                </thead>

                <tbody>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>1</TableData>
                    <TableData>
                      <InputLabel>PM Jan Dhan Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].PM_jan_dhan_yojana}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>2</TableData>
                    <TableData>
                      <InputLabel>PM Ujjawala Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].PM_ujjawala_yojana}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>3</TableData>
                    <TableData>
                      <InputLabel>PM Awas Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].PM_awas_yojana}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>4</TableData>
                    <TableData>
                      <InputLabel>Sukanya Samridhi Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .sukanya_samriddhi_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>5</TableData>
                    <TableData>
                      <InputLabel>Mudra Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].mudra_yojana}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>6</TableData>
                    <TableData>
                      <InputLabel>PM Jivan Jyoti Bima Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .PM_jivan_jyoti_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>7</TableData>
                    <TableData>
                      <InputLabel>PM Suraksha Bima Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .PM_suraksha_bima_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>8</TableData>
                    <TableData>
                      <InputLabel>Atal pension Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .atal_pension_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>9</TableData>
                    <TableData>
                      <InputLabel>Fasal Bima Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].fasal_bima_yojana}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>10</TableData>
                    <TableData>
                      <InputLabel>Kaushal Vikas Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .kaushal_vikas_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>11</TableData>
                    <TableData>
                      <InputLabel>Krishi Sinchai Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .krishi_sinchai_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>12</TableData>
                    <TableData>
                      <InputLabel>Jan Aushadi Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .jan_aushadhi_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>13</TableData>
                    <TableData>
                      <InputLabel>Swachh Bharat Mission Toilet</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].SBM_toilet}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>14</TableData>
                    <TableData>
                      <InputLabel>Soil Health Card</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].soil_health_card}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>15</TableData>
                    <TableData>
                      <InputLabel>Ladli Lakshmi Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .ladli_lakshmi_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>16</TableData>
                    <TableData>
                      <InputLabel>Janani Suraksha Yojana</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.govt_schemes[0]
                            .janni_suraksha_yojana
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData style={{ textAlign: "center" }}>17</TableData>
                    <TableData>
                      <InputLabel>Kisan Credit Card</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.govt_schemes[0].kisan_credit_card}
                      </OutputLabel>
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
                      <OutputLabel>
                        {this.props.formdata.water_source[0].piped_water[0] ===
                        true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].piped_water[1]}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>Community Water Tap</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].comm_water[0] ===
                        true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].comm_water[1]}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>Hand Pump</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].hand_pump[0] ===
                        true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].hand_pump[1]}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>Open Well</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].open_well[0] ===
                        true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].open_well[1]}
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={4}>
                      <InputLabel>Mode of Water Storage</InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.water_source[0]
                            .mode_of_water_storage
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData colSpan={4}>
                      <InputLabel>Any other source(mention)</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.water_source[0].other_water_source}
                      </OutputLabel>
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
                      <OutputLabel>
                        {this.props.formdata.source_of_energy[0]
                          .electricity_conn === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>
                        Electicity Availability per day (hours)
                      </InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.source_of_energy[0]
                            .elec_avail_perday_hour
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>
                      <InputLabel>Lighting</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.source_of_energy[0].lighting.map(
                          (item, index) => {
                            return (
                              <div key={index}>
                                {item}
                                {", "}
                              </div>
                            );
                          }
                        )}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Cooking</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.source_of_energy[0].cooking.map(
                          (item, index) => {
                            return (
                              <div key={index}>
                                {item}
                                {", "}
                              </div>
                            );
                          }
                        )}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData colSpan={2}>
                      <InputLabel>If cooking in Chullah</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.source_of_energy[0].cook_chullah}
                      </OutputLabel>
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

                  {this.props.formdata.source_of_energy[0].appliances.map(
                    (item, index) => (
                      <TableRow key={index + 1}>
                        <TableData style={{ textAlign: "center" }}>
                          {index + 1}
                        </TableData>
                        <TableData>
                          <OutputLabel>{item.appliance_name}</OutputLabel>
                        </TableData>
                        <TableData>
                          <OutputLabel>{item.appliance_nos}</OutputLabel>
                        </TableData>
                        <TableData>
                          <OutputLabel>{item.appliance_dur}</OutputLabel>
                        </TableData>
                      </TableRow>
                    )
                  )}
                </tbody>
              </Table>
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
                      <OutputLabel>
                        {
                          this.props.formdata.land_holding_info[0]
                            .cultivable_area
                        }
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>2. Irrigated Area</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.land_holding_info[0]
                            .irrigated_area
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>
                      <InputLabel>3. Un Irrigated Area</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.land_holding_info[0]
                            .unirrigated_area
                        }
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>4. Barren/Waste land area</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.land_holding_info[0]
                            .barren_or_wasteland
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>
                      <InputLabel>5. Uncultivable Area</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.land_holding_info[0]
                            .uncultivable_area
                        }
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Total Area</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.land_holding_info[0].total_land}
                      </OutputLabel>
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
                    <TableHeading>If Yes, Fertilizer Use(Kg/Acre)</TableHeading>
                  </TableRow>
                </thead>

                <tbody>
                  <TableRow>
                    <TableData>
                      <InputLabel>Do you use Chemical Fertilizers?</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.agri_inputs[0]
                          .is_chemical_fertilizer_used[0] === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.agri_inputs[0]
                            .is_chemical_fertilizer_used[1]
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>
                      <InputLabel>Do you use Chemical Insecticides?</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.agri_inputs[0]
                          .is_chemical_insecticide_used[0] === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.agri_inputs[0]
                            .is_chemical_insecticide_used[1]
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>
                      <InputLabel>Do you use Chemical Weedicide?</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.agri_inputs[0]
                          .is_chemical_weedicide_used[0] === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.agri_inputs[0]
                            .is_chemical_weedicide_used[1]
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData>
                      <InputLabel>Do you use Organic Manures?</InputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {this.props.formdata.agri_inputs[0]
                          .is_chemical_organic_manures[0] === true
                          ? "Yes"
                          : "No"}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <OutputLabel>
                        {
                          this.props.formdata.agri_inputs[0]
                            .is_chemical_organic_manures[1]
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>

                  <TableRow>
                    <TableData colSpan={3}>
                      <InputLabel>Irrigation</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.agri_inputs[0].irrigation}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData colSpan={3}>
                      <InputLabel>Irrigation System</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.agri_inputs[0].irrigation_sys}
                      </OutputLabel>
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
                  {this.props.formdata.agri_products.map((item, index) => (
                    <TableRow key={index}>
                      <TableData style={{ textAlign: "center" }}>
                        {index + 1}
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.crop_name}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>{item.crop_area_prev_yr_acre}</OutputLabel>
                      </TableData>
                      <TableData>
                        <OutputLabel>
                          {item.productivity_in_quintals_per_acre}
                        </OutputLabel>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
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
                      <OutputLabel>
                        {this.props.formdata.livestock_nos[0].cows}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Buffalo</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.livestock_nos[0].buffalo}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Goats/Sheep</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.livestock_nos[0].goats_and_sheeps}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData>
                      <InputLabel>Calves</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.livestock_nos[0].calves}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Bullocks</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.livestock_nos[0].bullocks}
                      </OutputLabel>
                    </TableData>
                    <TableData>
                      <InputLabel>Poultry/Ducks</InputLabel>
                      <OutputLabel>
                        {this.props.formdata.livestock_nos[0].poultry_and_ducks}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData colSpan={3}>
                      <InputLabel>Shelter for Livestock</InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.livestock_nos[0]
                            .livestock_shelter[0]
                        }
                        {/* {this.props.formdata.livestock_nos[0].livestock_shelter.map(
                              (item, index) => {
                                <div key={index}>
                                  {item}
                                  {", "}
                                </div>;
                              }
                            )} */}
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData colSpan={3}>
                      <InputLabel>
                        Average Daily Production of Milk(Litres)
                      </InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.livestock_nos[0]
                            .avg_daily_milk_prod_litres
                        }
                      </OutputLabel>
                    </TableData>
                  </TableRow>
                  <TableRow>
                    <TableData colSpan={3}>
                      <InputLabel>Animal Waste/Cow Dung (in Kg.)</InputLabel>
                      <OutputLabel>
                        {
                          this.props.formdata.livestock_nos[0]
                            .animal_waste_or_cow_dung_kgs
                        }
                      </OutputLabel>
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
                <tbody>
                  <TableRow>
                    <TableData style={{ maxWidth: "max-content" }}>
                      <InputLabel>Problems</InputLabel>
                    </TableData>
                    {this.props.formdata.major_problems[0].problems.map(
                      (item, index) => (
                        <TableData key={index} style={{ textAlign: "center" }}>
                          <OutputLabel>{item}</OutputLabel>
                        </TableData>
                      )
                    )}
                  </TableRow>
                  <TableRow>
                    <TableData style={{ maxWidth: "max-content" }}>
                      <InputLabel>Suggestions by Villagers</InputLabel>
                    </TableData>
                    {this.props.formdata.major_problems[0].Suggestions_by_villagers.map(
                      (item, index) => (
                        <TableData key={index} style={{ textAlign: "center" }}>
                          <OutputLabel>{item}</OutputLabel>
                        </TableData>
                      )
                    )}
                  </TableRow>
                </tbody>
              </Table>
            </InputContainer>
          </SectionContainer>
        </div>

        {/* ------------------- Form filled by details ---------------------------------------------------------------*/}

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
                        {this.props.formdata["filled_by"] !== null
                          ? this.props.formdata["filled_by"]
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
                        {this.props.formdata["filled_time"] !== null
                          ? this.props.formdata["filled_time"].split("T")[0] +
                            " " +
                            this.props.formdata["filled_time"]
                              .split("T")[1]
                              .slice(0, 8)
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
    );
  }
}
