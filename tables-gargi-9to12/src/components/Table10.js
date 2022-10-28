import React from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import './table.css';

export const Table10=()=>{
    const data=[
    {"sno":1},
    {"sno":2},
    {"sno":3},
    {"sno":4},
    {"sno":5}
]

const actionButton=(params)=>{
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }    
    
const columns= [
    {
        Header: 'S.No.',
        field: 'sno'
    },
    {
        Header: 'Crops',
        field: 'Crops',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    
    },
    {
        Header: 'Area under the Crop in Prev. Year(Acre)',
        field: 'Area under Crop in Prev. Year(Acre)',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    },
    {
        Header: 'Productivity (in quintals/ acre)',
        field: 'Productivity (in quintals/ acre)',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    
    }
]

const rowHeight = 47;

const defaultColDef = {
    flex: 1
};

    return(
        <div className="ag-theme-alpine" style={{height: 300, width: '100%'}}>
           <AgGridReact 
                rowData={data}
                columnDefs={columns}
                rowHeight={rowHeight} 
                defaultColDef={defaultColDef} 
                />
        </div>
    )
}




















