import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import CreateOrganization from "../../components/features/SpaceManagement/Organization/CreateOrganization";
import Layout from "../../components/Layout";
import ModalService from "../../components/lib/modalPopup/services/ModalService";
import Organization from "../../models/spacemgmt/organization";
import OrganizationService from "../../services/organization.service";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ModalRoot from "../../components/lib/modalPopup/components/ModalRoot";
import Building from "../../models/spacemgmt/building";
import BuildingService from "../../services/building.service";
import Space from "../../models/spacemgmt/space";
import SpaceService from "../../services/space.service";
import CreateSpace from "../../components/features/SpaceManagement/Space/CreateSpace";
import DeleteAlert from "../../components/common/deleteAlert";

const RoomManagement = () => {

    const [spaces, setSpaces] = useState<Space[]>([]);
    const [loader, setLoader] = useState<boolean>(true);
    useEffect(() => {
        fetchMyApi();
    }, []);

    async function fetchMyApi() {
        setLoader(true);
        var response = await SpaceService.getAll();

        if (response.status == true) {
            setSpaces(response.data);
        }
        setLoader(false);
        console.log("spaces", spaces);
    }



    const openModel = (component: any, props?: any) => {
        console.log("open clicked");
        ModalService.open(component, props);
    };

    let breadcrumbPaths = [{ 'name': 'Home', 'path': '/' }, { 'name': 'Space Management', 'path': '/space' }];

    async function deleteOrganization(id: number) {

    }

    async function invokeDelete(id: number) {
        try {
            setLoader(true);
            var result = await SpaceService.deleteSpace(id);
            console.log("delete result" + result);
            if (result.status == true) {
                await fetchMyApi();
            }
        } catch (error) {
            console.log(error);
        }
        setLoader(false);
    }

    async function deleteSpace(id: number) {
        openModel(DeleteAlert, { "onDelete": () => invokeDelete(id) });
    }


    async function editOrganization(org: Space) {
        openModel(CreateSpace, { "organization": org, "submittedCallback": fetchMyApi });
    }

    const actionBodyTemplate = (rowData: Space) => {
        return (
            <div>
                <Button onClick={() => editOrganization(rowData)} >
                    <EditIcon></EditIcon>
                </Button>
                <Button onClick={() => deleteSpace(rowData.spaceId)} color="error" >
                    <DeleteIcon></DeleteIcon>
                </Button>
            </div>
        );
    }

    return (
        <Layout>
            <h2 className="text-xl font-bold">Space Management</h2>
            <Breadcrumbs currentPage={"Space Management"} routes={breadcrumbPaths} />
            {
                loader == true ?
                    <div className="text-center">Loading Data...</div>
                    :
                    <div>
                        {
                            spaces.length == 0 ?
                                <div className="text-center">
                                    <div className="mb-4 mt-4">
                                        <img src={"../assets/images/not_found.png"} alt="not found" className="m-auto" />
                                    </div>
                                    <div className="h4 fw-bold">No Record Found</div>
                                    <div className="">Looks like you haven't setup any Buildings yet</div>

                                    <div className="mt-5">
                                        <Button variant="contained" type="submit" onClick={() => openModel(CreateSpace, { "submittedCallback": fetchMyApi })}>Add Space</Button>
                                    </div>
                                </div>
                                :
                                <div className='col-12'>
                                    <div className="row mb-3">
                                        <div className="col-12 text-right">
                                            <div className="mt-5">
                                                <Button variant="contained" type="submit" onClick={() => openModel(CreateSpace, { "submittedCallback": fetchMyApi })}>Add Space</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <DataTable value={spaces} dataKey="spaceId" responsiveLayout="scroll" className="pk-master-table">
                                                <Column field="spaceType" header="Type" sortable={true} ></Column>
                                                <Column field="organization.orgName" header="Organization Name" sortable={true} ></Column>
                                                <Column field="building.buildingName" header="Building Name" sortable={true} ></Column>
                                                <Column header="Actions" body={actionBodyTemplate} exportable={false} align="center" ></Column>
                                            </DataTable>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
            }

            <ModalRoot />
        </Layout>
    );


}

export default RoomManagement;