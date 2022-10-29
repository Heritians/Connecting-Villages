import React from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import './table.css';

export const Table11=()=>{
    const data=[
        {"Cows": 6, "Buffalo": 4, "Goats/Sheep": 9, "Calves": 3, "Bullocks":2, "Poultry/ Ducks": 15, "Shelter": "open", "Milk": 120, "Waste": 35}
]

const actionButton=(params)=>{
  console.log(params);
  alert(`${params.data.make} ${params.value}`)
}    

const columns= [
    {
        Header: 'Cows',
        field: 'Cows',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>,
      suppressSizeToFit: true
    },
    {
        Header: 'Buffalo',
        field: 'Buffalo',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    
    },
    {
        Header: 'Goats/ Sheep',
        field: 'Goats/Sheep',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    },
    {
        Header: 'Calves',
        field: 'Calves',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    
    },
    {
        Header: 'Bullocks',
        field: 'Bullocks',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    },
    {
        Header: 'Poultry/ Ducks',
        field: 'Poultry/ Ducks',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    },
    {
        Header: 'Shelter for Livestock',
        field: 'Shelter for Livestock',
        cellRendererFramework:(params)=><div>
          <form>
            <select>
              <option value="Pucca">Pucca</option>
              <option value="Kuchha">Kuchha</option>
              <option value="Open">Open</option>
            </select>
          </form>
        </div>
    },
    {
        Header: 'Average Daily Production of Milk (liters)',
        field: 'Average Daily Production of Milk (liters)',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    },
    {
        Header: 'Animal Waste/ Cow Dung (in Kgs.)',
        field: 'Animal Waste/ Cow Dung (in Kgs.)',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    },

]

const rowHeight = 47;

const defaultColDef = {
    flex: 1,
    resizable: true,
    wrapHeaderText: true,
};

    return(
        <div className="ag-theme-alpine" style={{height: 110, width: '100%'}}>
           <AgGridReact 
                rowData={data}
                columnDefs={columns}
                rowHeight={rowHeight} 
                defaultColDef={defaultColDef} 
                
                />
        </div>
    )
}




















