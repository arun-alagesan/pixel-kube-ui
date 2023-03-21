import { DataTable } from 'primereact/datatable';


import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Column, ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import FacilityService from '../../../../services/facility.service';
import { Facility } from '../../../../models/spacemgmt/facility/FacilityModel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ModalService from '../../../lib/modalPopup/services/ModalService';
import DeleteAlert from '../../../common/deleteAlert';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

type props = { orgId: number, onClose: any, changeStep: any };
const Facilities = ({ orgId, onClose, changeStep }: props) => {

    const [facilities, setFacilities] = useState<Facility[]>([]);
    const [isChildModalOpen, setChildModalOpen] = useState(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    useEffect(() => {

        fetchMyApi();

    }, []);
    async function fetchMyApi() {
        var response = await FacilityService.getByOrgId(orgId);
        if (response.status === true) {
            setFacilities(response.data);
        }
    }

    async function cloneFacility(facility: Facility) {
        await FacilityService.create(facility)
        await fetchMyApi();
    }
    function deleteFacility(facilityId: number) {
        setChildModalOpen(true);

        // ModalService.open(DeleteAlert, {
        //     "onDelete": async () => {
        //         setLoader(true);
        //         var result = await OrganizationService.deleteOrg(id);
        //         console.log("delete result" + result);
        //         if (result.status == true) {
        //             await fetchMyApi();
        //         }
        //         setLoader(false);
        //     }
        // });

        // await FacilityService.deleteByFacilityId(orgId);
        // fetchMyApi();

    }
    const actionBodyTemplate = (rowData: Facility) => {
        return (
            <div>
                <Button onClick={() => cloneFacility(rowData)} >
                    <FileCopyIcon></FileCopyIcon>
                </Button>
                <Button onClick={() => deleteFacility(rowData.facilityId)} color="error" >
                    <DeleteIcon></DeleteIcon>
                </Button>
            </div>
        );
    }

    const onRowEditComplete = async (e: any) => {
        e.newData.notifyFacilities = e.newData?.notifyFacilities == "on" ? true : false;
        e.newData.notifyOrganizer = e.newData?.notifyOrganizer == "on" ? true : false;
        if (e.newData?.facilityId > 0 && e.newData?.orgId > 0) {

            await FacilityService.update(e.newData)

        } else {

            e.newData.orgId = orgId;
            await fetchMyApi();
            await FacilityService.create(e.newData)
        }
        //debugger;
        await fetchMyApi();

    }

    const footer = (
        <button className='btn text-primary small p-0 border-0 ' style={{ 'fontSize': '15px' }} onClick={addRow}><i className='pi pi-plus-circle' style={{ 'fontSize': '14px' }}></i> Add More</button>
    );

    return (
        <div className='row mt-3'>
            {/* Material UI Data Grid */}
            {/* <div className='col-12 mb-5' style={{height:"400px"}}>
                <DataGrid rows={data} columns={columns} editMode="row" />
            </div> */}

            {/* PrimeReact Data Grid */}
            {<div className='col-12'>
                <DataTable value={facilities} editMode="row" dataKey="facilityId" onRowEditComplete={onRowEditComplete} responsiveLayout="scroll" size="small" footer={footer} >
                    <Column field="facilityName" header="Facilities Group" editor={(options) => textEditor(options)} ></Column>
                    <Column field="email" header="Email" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationPeriod" header="Escalation Period" editor={(options) => textEditor(options)} ></Column>
                    <Column field="escalationEmail" header="Escalation Email" editor={(options) => textEditor(options)}></Column>
                    <Column field="notifyFacilities" header="Notify Facilities" body={(data) => switchBox(data.notifyFacilities)} editor={(options) => switchEditor(options)} ></Column>
                    <Column field="notifyOrganizer" header="Notify Organizer" body={(data) => switchBox(data.notifyOrganizer)} editor={(options) => switchEditor(options)} ></Column>
                    <Column rowEditor bodyStyle={{ textAlign: 'center' }} ></Column>
                    <Column header="Actions" body={actionBodyTemplate} exportable={false} align="center" ></Column>
                </DataTable>
                <Modal
                    open={isChildModalOpen}
                    // onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description">

                    <Box sx={{ ...style }}>
                        <DeleteAlert close={() => setChildModalOpen(false)} onDelete={() => { }}></DeleteAlert>
                    </Box>

                </Modal>
            </div>}


            <div className='col-12 mt-3 text-center'>
                <Button variant="contained" type="submit" onClick={(e) => changeStep(3)} >Submit</Button>
            </div>
        </div >
    );

    function addRow() {
        let facility: Facility = {} as Facility;
        var faclities = facilities.concat(facility);
        setFacilities(faclities);
    }
}


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