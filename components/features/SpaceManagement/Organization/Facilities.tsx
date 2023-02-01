import { DataTable } from 'primereact/datatable';
import { Button } from "primereact/button"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Column, ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import FacilityService from '../../../../services/facility.service';
import { Facility } from '../../../../models/spacemgmt/facility/FacilityModel';


type props = { orgId: number };
const Facilities = ({ orgId }: props) => {

    const [facilities, setFacilities] = useState<Facility[]>([]);

    useEffect(() => {
        async function fetchMyApi() {
            var response = await FacilityService.getByOrgId(orgId);
            if (response.status === true) {
                setFacilities(response.data);
            }
        }
        fetchMyApi();

    }, [])




    return (
        <div className='row mt-3'>
            {/* Material UI Data Grid */}
            {/* <div className='col-12 mb-5' style={{height:"400px"}}>
                <DataGrid rows={data} columns={columns} editMode="row" />
            </div> */}

            {/* PrimeReact Data Grid */}
            {<div className='col-12'>
                <DataTable value={facilities} editMode="row" dataKey="facilityId" responsiveLayout="scroll" size="small" footer={footer} >
                    <Column field="facilityName" header="Facilities Group" editor={(options) => textEditor(options)} ></Column>
                    <Column field="email" header="Email" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationPeriod" header="Escalation Period" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationEmail" header="Escalation Email" editor={(options) => textEditor(options)}></Column>
                    <Column field="notifyFacilities" header="Notify Facilities" body={(data) => switchBox(data.notifyFacility)} editor={(options) => switchEditor(options)} ></Column>
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