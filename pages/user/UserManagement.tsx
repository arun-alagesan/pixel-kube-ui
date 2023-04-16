import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Layout from "../../components/Layout";
import OrganizationService from "../../services/organization.service";
import UsermanagementService from "../../services/usermanagement.service";
import Organization from "../../models/spacemgmt/organization";
import UserList from "../../models/usermgmt/UserList";
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

const UserManagement = () => {
   
    const [userlistdata, setuser] = useState<UserList[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    useEffect(() => {
        fetchMyApi();
    }, []);

    async function fetchMyApi() {
        setLoader(true);
        var response = await UsermanagementService.getuserlist();
        setuser(response);
        // if (response.status == true) {
        //     setuser(response.data);
        // }
        setLoader(false);
        console.log("organizations", userlistdata);
    }

    // const openModel = (component: any, props?: any) => {
    //     console.log("open clicked");
    //     ModalService.open(component, props);
    // };

    let breadcrumbPaths = [{ 'name': 'Home', 'path': '/' }, { 'name': 'User Management', 'path': '/user' }];

    // function deleteOrganization(id: number) {
    //     openModel(DeleteAlert, {
    //         "onDelete": async () => {
    //             setLoader(true);
    //             var result = await OrganizationService.deleteOrg(id);
    //             console.log("delete result" + result);
    //             if (result.status == true) {
    //                 await fetchMyApi();
    //             }
    //             setLoader(false);
    //         }
    //     });
    // }

    // async function editOrganization(org: Organization) {
    //     openModel(CreateOrganization, { "organization": org, "submittedCallback": fetchMyApi });
    // }

    const actionBodyTemplate = (rowData: UserList) => {
        return (
            <div className="flex">
                <Button>
                    <EditIcon></EditIcon>
                </Button>
                <Button color="error" >
                    <DeleteIcon></DeleteIcon>
                </Button>
            </div>
        );
    }

    return (
        <>
            <Layout>
                <h2 className="text-xl font-bold">User Management</h2>
                <Breadcrumbs currentPage={"User Management"} routes={breadcrumbPaths} />
                {
                    loader == true ?
                        <div className="text-center">Loading Data...</div>
                        :
                        <div>
                            {
                               <div className='col-12'>
                                        <div className="row mb-3">
                                            <div className="col-12 text-right">
                                                <div className="mt-5">
                                                    <Button variant="contained" type="submit">Add User</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <DataTable value={userlistdata} dataKey="id" responsiveLayout="scroll" scrollable={true} paginator rows={5} className="pk-master-table">
                                                    <Column field="name" header="Name" sortable={true} ></Column>
                                                    <Column field="email" header="Email" sortable={true} ></Column>
                                                    <Column field="roles" header="Roles" sortable={true} ></Column>
                                                    <Column field="Joined" header="Joined" sortable={true} ></Column>
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

export default UserManagement;