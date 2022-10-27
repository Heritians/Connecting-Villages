import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function App() {
  
// table 5 details
  const actionButton=(params)=>{
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }
  const t5Col= [
    { headerName: "Sno.", field: "sno" , filter:true},
    { headerName: "Name", field: "name", filter:true },
    {headerName: "Persons Benefitted (In Numbers)",
    cellRendererFramework:(params)=><div>
      <form><input></input></form>
    </div>}
    ]

  const t5Row = [
    {sno:1, name:"PM Jan Dhan Yojana"},
    {sno:2, name:"PM Ujjwala Yojana"},
    {sno:3, name:"PM Awas Yojana"},
    {sno:4, name:"Sukanya Samridhi Yojana"},
    {sno:5, name:"Mudra Yojana"},
    {sno:6, name:"PM Jivan Jyoti Bima Yojana"},
    {sno:7, name:"PM Suraksha Bima Yojana"},
    {sno:8, name:"Atal Pension Yojana"},
    {sno:9, name:"Fasal Bima Yojana"},
    {sno:10, name:"Kaushal Vikas Yojana"},
    {sno:11, name:"Krishi Sinchai Yojana"},
    {sno:12, name:"Jan Aushadi Yojana"},
    {sno:13, name:"Swacch Bharat Mission Toilet"},
    {sno:14, name:"Soil Health Card"},
    {sno:15, name:"Ladli Lakshmi Yojana"},
    {sno:16, name:"Janani Suraksha Yojana"},
    {sno:17, name:"Kisan Credit Card"}]


//table6 details
    const actionButton2=(params)=>{
      console.log(params);
      alert(`${params.data.make} ${params.value}`)
    }
    const t6Col1= [
      { headerName: "Sources of Water", field: "sow" , filter:true},
      { headerName: "Public/Private", 
      cellRendererFramework:(params)=><div>
      <form>
        <select id="cars" name="cars">
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </form>
    </div> },
      { headerName: "Yes/No", 
      cellRendererFramework:(params)=><div>
      <form>
        <select id="cars" name="cars">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </form>
    </div>  },
      {headerName: "Distance (in Km)",
      cellRendererFramework:(params)=><div>
        <form><input></input></form>
      </div>}
      ]
  
    const t6Row1= [
      {sow: "Piped Water at Home",},
      {sow: "Community Water Tap", },
      {sow: "Hand Pump", },
      {sow: "Open Well", },]

      const t6Col2= [
        { headerName: "Mode of Water Storage", 
        cellRendererFramework:(params)=><div>
        <form>
          <select id="cars" name="cars">
            <option value="Community">Community</option>
            <option value="Individual">Individual</option>
          </select>
        </form>
      </div>},
        {headerName: "Any Other Source (Mention)",
        cellRendererFramework:(params)=><div>
          <form><textarea rows="2" cols="50"></textarea></form>
        </div>}
        ]
    
      const t6Row2= [
        {sow: "Piped Water at Home", name:"PM Jan Dhan Yojana"},]

    //table7 details

    const actionButton3=(params)=>{
      console.log(params);
      alert(`${params.data.make} ${params.value}`)
    }
    const t7Col1= [
      { headerName: "Electricity Connection to Household", 
      cellRendererFramework:(params)=><div>
      <form>
        <select id="cars" name="cars">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </form>
    </div> },
      { headerName: "Electricity Availability per day (hours):", 
      cellRendererFramework:(params)=><div>
        <form><input></input></form>
      </div>},
      {headerName: "Lighting:",
      cellRendererFramework:(params)=><div>
      <form>
        <select id="cars" name="cars">
          <option value="Electricity">Electricity</option>
          <option value="Kerosene">Kerosene</option>
          <option value="Power">Power</option>
        </select>
      </form>
    </div> },
    { headerName: "Lighting (mention if any other source):", 
    cellRendererFramework:(params)=><div>
      <form><input></input></form> 
    </div>},
    {headerName: "Cooking:",
    cellRendererFramework:(params)=><div>
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
  </div> },
  { headerName: "Cooking (mention if any other source):", 
  cellRendererFramework:(params)=><div>
    <form><input></input></form>
  </div>},
  {headerName: "If Cooking in Chullah:",
  cellRendererFramework:(params)=><div>
  <form>
    <select id="cars" name="cars">
      <option value="Normal">Normal</option>
      <option value="Smokeless">Smokeless</option>
    </select>
  </form>
</div> }
    
  ]
    const t7Row1= [{}]

      const t7Col2= [
        { headerName: "Sno.", field: "sno" , filter:true},
      { headerName: "Application", 
      cellRendererFramework:(params)=><div>
      <form><input></input></form>
      </div>},
      { headerName: "Nos.", 
      cellRendererFramework:(params)=><div>
      <form><input></input></form>
      </div>},
      {headerName: "Duration per Day (In Hours)",
      cellRendererFramework:(params)=><div>
        <form><input></input></form>
      </div>}]

      const t7Row2= [{sno:1, name:"PM Jan Dhan Yojana"},
      {sno:2},
      {sno:3},
      {sno:4},
      {sno:5},
      {sno:6},
      {sno:7},
      {sno:8},
      {sno:9},
      {sno:10}]

//table8 details

const actionButton4=(params)=>{
  console.log(params);
  alert(`${params.data.make} ${params.value}`)
}
const t8Col1= [
  { headerName: "1.Total:", 
  cellRendererFramework:(params)=><div>
    <form><input></input></form>
  </div>},
{ headerName: "2.Cultivable Area:", 
cellRendererFramework:(params)=><div>
  <form><input></input></form> 
</div>},
{ headerName: "3.Irrigated Area:", 
cellRendererFramework:(params)=><div>
<form><input></input></form>
</div>},
{headerName: "4.Unirrigated Area:",
cellRendererFramework:(params)=><div>
<form><input></input></form>
</div>},

{headerName: "5.Barren/Wasteland Area:",
cellRendererFramework:(params)=><div>
<form><input></input></form>
</div>},

{headerName: "6.Uncultivable Area:",
cellRendererFramework:(params)=><div>
<form><input></input></form>
</div>}

]
const t8Row1= [{}]


  return (
    <div className="App">
      <h1 align="center">5. Information of Goverment Schemes</h1>
      <div className="ag-theme-alpine" style={ {height: '400px'} }>
        <AgGridReact
            columnDefs={t5Col}
            rowData={t5Row}
            defaultColDef={{flex:1}}>
        </AgGridReact>
      </div>


      <h1 align="center">6. Source of Water</h1>
      <div className="ag-theme-alpine" style={ {height: '240px'} }>
        <AgGridReact
            columnDefs={t6Col1}
            rowData={t6Row1}
            defaultColDef={{flex:1}}>
        </AgGridReact>
        </div>
        <div className="ag-theme-alpine" style={ {height: '150px'} }>
        <AgGridReact
            columnDefs={t6Col2}
            rowData={t6Row2}
            defaultColDef={{flex:1}}
            style={ {height: '240px'} }>
        </AgGridReact>
      </div>
      

      <h1 align="center">7. Source of Energy and Power</h1>
      <div className="ag-theme-alpine" style={ {height: '110px'} }>
        <AgGridReact
            columnDefs={t7Col1}
            rowData={t7Row1}
            defaultColDef={{flex:1}}>
        </AgGridReact>
        </div>
        <div className="ag-theme-alpine" style={ {height: '500px'} }>
        <AgGridReact
            columnDefs={t7Col2}
            rowData={t7Row2}
            defaultColDef={{flex:1}}
            style={ {height: '240px'} }>
        </AgGridReact>
      </div>

      <h1 align="center">8. Lanholding Information (in Acres)</h1>
      <div className="ag-theme-alpine" style={ {height: '200px'} }>
        <AgGridReact
            columnDefs={t8Col1}
            rowData={t8Row1}
            defaultColDef={{flex:1}}>
        </AgGridReact>
        </div>

    </div>
  );
}

export default App;