import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { Table10 } from './components/Table10';
// import { Table11 } from './components/Table11';
// import { Table12 } from './components/Table12';
// import { Table9 } from './components/Table9';

function App() {





  //table1 details
  const actionButton1 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }


  const t1Col1 = [
    {
      headerName: "Name",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Gender",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Sex" name="Sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
        </form>
      </div>
    },

    {
      headerName: "age",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Relationship with head of household",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Contact Number",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Identity Card Type",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Identity Card Number",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

  ]
  const t1Row1 = [{}]





  //table2 details




  const actionButton2 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t2Col1 = [
    {
      headerName: "HouseHold",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Name of the HouseHold",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Gender",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Sex" name="Sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
        </form>
      </div>
    },

    {
      headerName: "Category",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="category" name="category">
            <option value="Gen">Gen</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
          </select>
        </form>
      </div>
    },


    {
      headerName: "Poverty Status",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="status" name="status">
            <option value="APL">APL</option>
            <option value="BPL">BPL</option>
          </select>
        </form>
      </div>
    },

    {
      headerName: "Own House",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="house" name="house">
            <option value="Yes">Yes</option>
            <option value="BPL">No</option>
          </select>
        </form>
      </div>
    },

    {
      headerName: "Type of House",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="house-type" name="house-type">
            <option value="Kutcha">Kutcha</option>
            <option value="Semi">Semi Pucca</option>
            <option value="Pucca">Pucca</option>
            <option value="Homeless">Homeless</option>
          </select>
        </form>
      </div>
    },

    {
      headerName: "Toilet",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="toilet" name="toilet">
            <option value="private">Private</option>
            <option value="Community">Community</option>
            <option value="Open Defecation">Open Defecation</option>
          </select>
        </form>
      </div>
    },

  ]
  const t2Row1 = [{}]

  const t2Col2 = [
    {
      headerName: "Drainage Linked to House",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="drainage" name="drainage">
            <option value="covered">Covered</option>
            <option value="Open">Open</option>
            <option value="None">None</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Waste Collection System",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="waste" name="waste">
            <option value="Door Step">Door Step</option>
            <option value="Common Point">Common Point</option>
            <option value="None">None</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Compose Pit",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="compose" name="compose">
            <option value="Individual">Door Step</option>
            <option value="Group">Common Point</option>
            <option value="None">None</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Biogas Plant",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="biogas" name="biogas">
            <option value="Individual">Individual</option>
            <option value="Group">Group</option>
            <option value="Community">Community</option>
            <option value="None">None</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Annual Income from all sources",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },
  ]
  const t2Row2 = [{}]




  //table3 details





  const actionButton3 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t3Row1 = [{}]

  const t3Col1 = [
    { headerName: "Sno.", field: "sno", filter: true },
    {
      headerName: "Name",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Age",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Sex",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Sex" name="Sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Others">Others</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Martial Status Code",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Level of Education Code",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Going to AWC/School/College Code",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Aadhar Card",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Card" name="Card">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Bank Account",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Bank" name="Bank">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Computer Literacy",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Computer" name="computer">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Social Secuirty Pension",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Major Health Problems",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="Health" name="Health">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "MNREGA Job Card",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Self Help Groups",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Occupation Code",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
  ]


  const t3Row2 = [{ sno: 1, name: "PM Jan Dhan Yojana" },
  { sno: 2 },
  { sno: 3 },
  { sno: 4 },
  { sno: 5 },
  { sno: 6 },
  { sno: 7 },
  { sno: 8 },
  { sno: 9 },
  { sno: 10 },
  { sno: 11 },
  { sno: 12 },]





  //table4 details






  const actionButton4 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t4Col1 = [
    {
      headerName: "Does any member migrate for work?",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="migration" name="migration">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },

    {
      headerName: "If yes how many members migrate?",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Family migrates for how many months?",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

    {
      headerName: "Since how many years family migrates?",
      cellRendererFramework: (params) => <div>
        <form>
          <form><input></input></form>
        </form>
      </div>
    },

  ]
  const t4Row1 = [{}]

  // table 5 details
  const actionButton = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t5Col = [
    { headerName: "Sno.", field: "sno", filter: true },
    { headerName: "Name", field: "name", filter: true },
    {
      headerName: "Persons Benefitted (In Numbers)",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    }
  ]

  const t5Row = [
    { sno: 1, name: "PM Jan Dhan Yojana" },
    { sno: 2, name: "PM Ujjwala Yojana" },
    { sno: 3, name: "PM Awas Yojana" },
    { sno: 4, name: "Sukanya Samridhi Yojana" },
    { sno: 5, name: "Mudra Yojana" },
    { sno: 6, name: "PM Jivan Jyoti Bima Yojana" },
    { sno: 7, name: "PM Suraksha Bima Yojana" },
    { sno: 8, name: "Atal Pension Yojana" },
    { sno: 9, name: "Fasal Bima Yojana" },
    { sno: 10, name: "Kaushal Vikas Yojana" },
    { sno: 11, name: "Krishi Sinchai Yojana" },
    { sno: 12, name: "Jan Aushadi Yojana" },
    { sno: 13, name: "Swacch Bharat Mission Toilet" },
    { sno: 14, name: "Soil Health Card" },
    { sno: 15, name: "Ladli Lakshmi Yojana" },
    { sno: 16, name: "Janani Suraksha Yojana" },
    { sno: 17, name: "Kisan Credit Card" }]


  //table6 details
  const actionButton6 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t6Col1 = [
    { headerName: "Sources of Water", field: "sow", filter: true },
    {
      headerName: "Public/Private",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Yes/No",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Distance (in Km)",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    }
  ]

  const t6Row1 = [
    { sow: "Piped Water at Home", },
    { sow: "Community Water Tap", },
    { sow: "Hand Pump", },
    { sow: "Open Well", },]

  const t6Col2 = [
    {
      headerName: "Mode of Water Storage",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="Community">Community</option>
            <option value="Individual">Individual</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Any Other Source (Mention)",
      cellRendererFramework: (params) => <div>
        <form><textarea rows="2" cols="50"></textarea></form>
      </div>
    }
  ]

  const t6Row2 = [
    { sow: "Piped Water at Home", name: "PM Jan Dhan Yojana" },]

  //table7 details

  const actionButton7 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t7Col1 = [
    {
      headerName: "Electricity Connection to Household",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Electricity Availability per day (hours):",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Lighting:",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="Electricity">Electricity</option>
            <option value="Kerosene">Kerosene</option>
            <option value="Power">Power</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Lighting (mention if any other source):",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Cooking:",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="LPG">LPG</option>
            <option value="Biogas">Biogas</option>
            <option value="Kerosene">Kerosene</option>
            <option value="Wood">Wood</option>
            <option value="Cow Dung">Cow Dung</option>
            <option value="Agro-Residues">Agro-Residues</option>
            <option value="Electricity">Electricity</option>
          </select>
        </form>
      </div>
    },
    {
      headerName: "Cooking (mention if any other source):",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "If Cooking in Chullah:",
      cellRendererFramework: (params) => <div>
        <form>
          <select id="cars" name="cars">
            <option value="Normal">Normal</option>
            <option value="Smokeless">Smokeless</option>
          </select>
        </form>
      </div>
    }

  ]
  const t7Row1 = [{}]

  const t7Col2 = [
    { headerName: "Sno.", field: "sno", filter: true },
    {
      headerName: "Application",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Nos.",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "Duration per Day (In Hours)",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    }]

  const t7Row2 = [{ sno: 1, name: "PM Jan Dhan Yojana" },
  { sno: 2 },
  { sno: 3 },
  { sno: 4 },
  { sno: 5 },
  { sno: 6 },
  { sno: 7 },
  { sno: 8 },
  { sno: 9 },
  { sno: 10 }]

  //table8 details

  const actionButton8 = (params) => {
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t8Col1 = [
    {
      headerName: "1.Total:",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "2.Cultivable Area:",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "3.Irrigated Area:",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },
    {
      headerName: "4.Unirrigated Area:",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },

    {
      headerName: "5.Barren/Wasteland Area:",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    },

    {
      headerName: "6.Uncultivable Area:",
      cellRendererFramework: (params) => <div>
        <form><input></input></form>
      </div>
    }

  ]
  const t8Row1 = [{}]



  return (
    <div className="App">



      <h1 align="center">1. Respondent's Profile</h1>
      <div className="ag-theme-alpine" style={{ height: '120px' }}>
        <AgGridReact
          columnDefs={t1Col1}
          rowData={t1Row1}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>


      <h1 align="center">2. General HouseHold Information</h1>
      <div className="ag-theme-alpine" style={{ height: '120px' }}>
        <AgGridReact
          columnDefs={t2Col1}
          rowData={t2Row1}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>



      <div className="ag-theme-alpine" style={{ height: '120px' }}>
        <AgGridReact
          columnDefs={t2Col2}
          rowData={t2Row2}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>





      <h1 align="center">3. Family Member Information</h1>
      <div className="ag-theme-alpine" style={{ height: '500px' }}>
        <AgGridReact
          columnDefs={t3Col1}
          rowData={t3Row2}
          defaultColDef={{ flex: 1 }}
          style={{ height: '240px' }}>
        </AgGridReact>
      </div>




      <h1 align="center">4.Migration Status in Family</h1>
      <div className="ag-theme-alpine" style={{ height: '100px' }}>
        <AgGridReact
          columnDefs={t4Col1}
          rowData={t4Row1}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>



      <h1 align="center">5. Information of Goverment Schemes</h1>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          columnDefs={t5Col}
          rowData={t5Row}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>


      <h1 align="center">6. Source of Water</h1>
      <div className="ag-theme-alpine" style={{ height: '240px' }}>
        <AgGridReact
          columnDefs={t6Col1}
          rowData={t6Row1}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>
      <div className="ag-theme-alpine" style={{ height: '150px' }}>
        <AgGridReact
          columnDefs={t6Col2}
          rowData={t6Row2}
          defaultColDef={{ flex: 1 }}
          style={{ height: '240px' }}>
        </AgGridReact>
      </div>


      <h1 align="center">7. Source of Energy and Power</h1>
      <div className="ag-theme-alpine" style={{ height: '110px' }}>
        <AgGridReact
          columnDefs={t7Col1}
          rowData={t7Row1}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>
      <div className="ag-theme-alpine" style={{ height: '500px' }}>
        <AgGridReact
          columnDefs={t7Col2}
          rowData={t7Row2}
          defaultColDef={{ flex: 1 }}
          style={{ height: '240px' }}>
        </AgGridReact>
      </div>



      <h1 align="center">8. Lanholding Information (in Acres)</h1>
      <div className="ag-theme-alpine" style={{ height: '200px' }}>
        <AgGridReact
          columnDefs={t8Col1}
          rowData={t8Row1}
          defaultColDef={{ flex: 1 }}>
        </AgGridReact>
      </div>

      {/* <h2 align="center">9. Landholding Information (in acres)</h2>
      <Table9 />
      <h1 align="center">10. Agricultural Produce in a normal year (Top 5)</h1>
      <Table10 />
      <h1 align="center">11. Livestock Numbers (in numbers)</h1>
      <Table11 />
      <h1 align="center">12. Major Problems in village, if any (Top 3)</h1>
      <Table12 /> */}


    </div>


  );
}

export default App;