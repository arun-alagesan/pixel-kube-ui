import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Layout from "../../components/Layout";
import OrganizationService from "../../services/organization.service";
import Organization from "../../models/spacemgmt/organization";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Button from "@mui/material/Button";
import ModalService from "../../components/lib/modalPopup/services/ModalService";
import CreateOrganization from "../../components/features/SpaceManagement/Organization/CreateOrganization";
import ModalRoot from "../../components/lib/modalPopup/components/ModalRoot";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import DeleteAlert from "../../components/common/deleteAlert";

const OrganizationManagement = () => {


    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loader, setLoader] = useState<boolean>(true);
    useEffect(() => {
        fetchMyApi();
    }, []);

    async function fetchMyApi() {
        setLoader(true);
        var response = await OrganizationService.getList();

        if (response.status == true) {
            setOrganizations(response.data);
        }
        setLoader(false);
        console.log("organizations", organizations);
    }

    const openModel = (component: any, props?: any) => {
        console.log("open clicked");
        ModalService.open(component, props);
    };

    let breadcrumbPaths = [{ 'name': 'Home', 'path': '/' }, { 'name': 'Space Management', 'path': '/space' }];

    function deleteOrganization(id: number) {
        openModel(DeleteAlert, {
            "onDelete": async () => {
                setLoader(true);
                var result = await OrganizationService.deleteOrg(id);
                console.log("delete result" + result);
                if (result.status == true) {
                    await fetchMyApi();
                }
                setLoader(false);
            }
        });
    }

    async function editOrganization(org: Organization) {
        openModel(CreateOrganization, { "organization": org, "submittedCallback": fetchMyApi });
    }

    const actionBodyTemplate = (rowData: Organization) => {
        return (
            <div className="flex">
                <Button onClick={() => editOrganization(rowData)} >
                    <EditIcon></EditIcon>
                </Button>
                <Button onClick={() => deleteOrganization(rowData.orgId)} color="error" >
                    <DeleteIcon></DeleteIcon>
                </Button>
            </div>
        );
    }

    return (
        <>
            <Layout>
                <h2 className="text-xl font-bold">Organization Management</h2>
                <Breadcrumbs currentPage={"Organization Management"} routes={breadcrumbPaths} />
                {
                    loader == true ?
                        <div className="text-center">Loading Data...</div>
                        :
                        <div>
                            {
                                organizations.length == 0 ?
                                    <div className="text-center">
                                        <div className="mb-4 mt-4">
                                            <img src={"../assets/images/not_found.png"} alt="not found" className="m-auto" />
                                        </div>
                                        <div className="h4 fw-bold">No Record Found</div>
                                        <div className="">Looks like you haven&apos;t setup any Organization yet</div>

                                        <div className="mt-5">
                                            <Button variant="contained" type="submit" onClick={() => openModel(CreateOrganization, { "submittedCallback": fetchMyApi })}>Add Organization</Button>
                                        </div>
                                    </div>
                                    :
                                    <div className='col-12'>
                                        <div className="row mb-3">
                                            <div className="col-12 text-right">
                                                <div className="mt-5">
                                                    <Button variant="contained" type="submit" onClick={() => openModel(CreateOrganization, { "submittedCallback": fetchMyApi })}>Add Organization</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <DataTable value={organizations} dataKey="id" responsiveLayout="scroll" scrollable={true} paginator rows={5} className="pk-master-table">
                                                    <Column field="orgName" header="Name" sortable={true} ></Column>
                                                    <Column field="phoneNumber" header="Phone" sortable={true} ></Column>
                                                    <Column field="email" header="Email" sortable={true} ></Column>
                                                    <Column field="buildingName" header="Building" sortable={true} ></Column>
                                                    <Column field="cityName" header="City" sortable={true} ></Column>
                                                    <Column field="stateName" header="State" sortable={true} ></Column>
                                                    <Column field="countryName" header="Country" sortable={true} ></Column>
                                                    <Column field="zipcode" header="Zipcode" sortable={true}></Column>
                                                    <Column header="Actions" body={actionBodyTemplate} exportable={false} align="center" ></Column>
                                                </DataTable>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                }

            </Layout>

            <ModalRoot />
        </>
    );


}

export default OrganizationManagement;