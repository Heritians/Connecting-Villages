import React from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import './table.css';

export const Table12=()=>{
    const data=[
        {"Problems": "", "Suggestions": ""},
        {"Problems": "", "Suggestions": ""},
        {"Problems": "", "Suggestions": ""}

]
const actionButton=(params)=>{
    console.log(params);
    alert(`${params.data.make} ${params.value}`)
  }    
const columns= [
    {
        Header: 'Problems',
        field: 'Problems',
        cellRendererFramework:(params)=><div>
        <form><input></input></form></div>,
    },
    {
        Header: 'Possible Suggestions by villagers',
        field: 'Possible Suggestions by villagers',
        cellRendererFramework:(params)=><div>
      <form class= "t-form"><input></input></form></div>
    
    }
]

const rowHeight = 47;

const defaultColDef = {
    flex: 1
};

    return(
        <div className="ag-theme-alpine" style={{height: 210, width: '100%'}}>
           <AgGridReact 
                rowData={data}
                columnDefs={columns}
                rowHeight={rowHeight} 
                defaultColDef={defaultColDef} 
                />
        </div>
    )
}




















