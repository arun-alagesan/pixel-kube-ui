import { DataTable } from 'primereact/datatable';
import { Button } from "primereact/button"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Column, ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const Facilities: React.FC = () => {
  

    //Material UI Data Grid
    var data:GridRowsProp = [
        {
            "id": 1,
            "facility": "IT Infrastructure",
            "email": "it@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "it@esc.com",
            "notifyFacility": true,
            "notifyOrganizer": true
        },
        {
            "id": 2,
            "facility": "Front Desk",
            "email": "fd@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "fd@esc.com",
            "notifyFacility": false,
            "notifyOrganizer": true
        },
        {
            "id": 3,
            "facility": "Catering",
            "email": "icat@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "cat@esc.com",
            "notifyFacility": true,
            "notifyOrganizer": true
        }
    ];

    //PrimeReact Data Grid
   var data2 = [
        {
            "id": 1,
            "facility": "IT Infrastructure",
            "email": "it@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "it@esc.com",
            "notifyFacility": true,
            "notifyOrganizer": true
        },
        {
            "id": 2,
            "facility": "Front Desk",
            "email": "fd@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "fd@esc.com",
            "notifyFacility": false,
            "notifyOrganizer": true
        },
        {
            "id": 3,
            "facility": "Catering",
            "email": "icat@abc.com",
            "escalationPeriod": "1 Day",
            "escalationEmail": "cat@esc.com",
            "notifyFacility": true,
            "notifyOrganizer": true
        }
    ];

    // const rows: GridRowsProp = [
    //     { id: 1, col1: 'Hello', col2: 'World' },
    //     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    //     { id: 3, col1: 'MUI', col2: 'is Amazing' },
    // ];

    const columns: GridColDef[] = [
        { field: 'facility', headerName: 'facility', editable: true,flex: 1, },
        { field: 'email', headerName: 'email', editable: true ,flex: 1,},
        { field: 'escalationPeriod', headerName: 'escalationPeriod', editable: true,flex: 1, },
        { field: 'escalationEmail', headerName: 'escalationEmail', editable: true,flex: 1, },
        { field: 'notifyFacility', headerName: 'notifyFacility', editable: true,flex: 1, },
        { field: 'notifyOrganizer', headerName: 'notifyOrganizer', editable: true ,flex: 1,},
    ];


    return (
        <div className='row mt-3'>
            {/* Material UI Data Grid */}
            {/* <div className='col-12 mb-5' style={{height:"400px"}}>
                <DataGrid rows={data} columns={columns} editMode="row" />
            </div> */}

            {/* PrimeReact Data Grid */}
            {<div className='col-12'>
                <DataTable value={data2} editMode="row" dataKey="id" responsiveLayout="scroll" size="small" footer={footer} >
                    <Column field="facility" header="Facilities Group" editor={(options) => textEditor(options)} ></Column>
                    <Column field="email" header="Email" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationPeriod" header="Escalation Period" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationEmail" header="Escalation Email" editor={(options) => textEditor(options)}></Column>
                    <Column field="notifyFacility" header="Notify Facilities" body={(data) => switchBox(data.notifyFacility)} editor={(options) => switchEditor(options)} ></Column>
                    <Column field="notifyOrganizer" header="Notify Organizer" body={(data) => switchBox(data.notifyOrganizer)} editor={(options) => switchEditor(options)} ></Column>
                    <Column rowEditor bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>}
            
            <div className='col-12 mt-3 text-center'>
                <Button label="Submit" className="p-button-info custom_btn" onClick={() => console.log('submitted')} />
            </div>
        </div>
    );
}

const footer = (
    <button className='btn text-primary small p-0 border-0 ' style={{ 'fontSize': '15px' }} ><i className='pi pi-plus-circle' style={{ 'fontSize': '14px' }}></i> Add More</button>
);
function textEditor(options: ColumnEditorOptions) {
    console.log("option", options);
    return (
        <span className="p-float-label">
            <InputText type="text" className="p-inputtext-sm block" value={options.value} onChange={(e) => options.editorCallback!(e.target.value)} />
            <label>{options.column.props.header?.toString()}</label>
        </span>);
}

function switchBox(value: boolean) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" disabled checked={value} />
        </div>
    );
}

function switchEditor(options: ColumnEditorOptions) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" checked={options.value} onChange={(e) => options.editorCallback!(e.target.value)} />
        </div>
    );
    // return <InputSwitch checked={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
}
export default Facilities;