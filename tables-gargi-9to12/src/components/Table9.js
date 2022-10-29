import React from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import './table.css';

export const Table9=()=>{
    const data=[
        {"Particulars": "Do you use Chemical Fertilizers?", "Yes/ No": "Yes"},
        {"Particulars": "Do you use Chemical Insecticides?", "Yes/ No": "No"},
        {"Particulars": "Do you use Chemical Weedicide?", "Yes/ No": "Yes"},
        {"Particulars": "Do you use Manure?", "Yes/ No": "Yes"}

]
const data2=[
    {"irr":"Canal", "irr sys": "None"}
]
   
const columns1= [
    {
        headerName: 'Particulars',
        field: 'Particulars',
       
    },
    {
        headerName: 'Yes/ No',
        field: 'Yes/ No',
        cellRendererFramework:(params)=><div>
            <form>
                <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </form>
        </div>
    },
    {
        headerName: 'If Yes, Fertiliser used(kg/ acre)',
        field: 'If Yes, Fertiliser used(kg/ acre)',
        cellRendererFramework:(params)=><div>
        <form><input></input></form></div>,
    }
]

const columns2= [
    {
        headerName: "Irrigation",
        field: 'irr',
        cellRendererFramework:(params)=><div>
            <form>
                <select>
                    <option value="canal">Canal</option>
                    <option value="tank">Tank</option>
                    <option value="borewell">Borewell</option>
                    <option value="river">River</option>
                    <option value="other">Other</option>
                    <option value="none">None</option>
                </select>
            </form>
        </div>
    },
    {
        headerName: "Irrigation System",
        field: "irr sys",
        cellRendererFramework:(params)=><div>
            <form>
                <select>
                    <option value="drip">Drip</option>
                    <option value="sprinkler">Sprinkler</option>
                    <option value="flooding">Flooding</option>
                    <option value="none">None</option>
                </select>
            </form>
        </div>
    }
]

const rowHeight = 47;

const defaultColDef = {
    flex: 1
};

    return(
    <div>
        <div className="ag-theme-alpine" style={{height: 239, width: '100%'}}>
           <AgGridReact 
                rowData={data}
                columnDefs={columns1}
                rowHeight={rowHeight} 
                defaultColDef={defaultColDef} 
                />
        </div>
        <div className="ag-theme-alpine" style={{height: 110, width: '100%'}}>
           <AgGridReact
            rowData={data2}
            columnDefs={columns2}
            rowHeight={rowHeight} 
            defaultColDef={defaultColDef}
           />

        </div>
    </div>
    )
}