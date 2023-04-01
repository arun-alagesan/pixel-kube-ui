import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import Layout from "../../components/Layout";
import RolesandPermissionList from "../../models/usermgmt/RoleList";
import UsermanagementService from "../../services/usermanagement.service";
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

const RolesandPermission = () => {

    const [Roleslistdata, setRoles] = useState<RolesandPermissionList[]>([]);
    useEffect(() => {
        fetchMyApi();
    }, []);

    async function fetchMyApi() {
        setLoader(true);
        var response = await UsermanagementService.getroleslist();
        setRoles(response);
        setLoader(false);
        console.log("organizations", Roleslistdata);
    }
    const [loader, setLoader] = useState<boolean>(false);
    let breadcrumbPaths = [{ 'name': 'Home', 'path': '/' }, { 'name': 'Roles & Permissions', 'path': '/user' }];
    const actionBodyTemplate = (rowData: RolesandPermissionList) => {
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
                <h2 className="text-xl font-bold">Roles & Permissions</h2>
                <Breadcrumbs currentPage={"Roles & Permissions"} routes={breadcrumbPaths} />
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
                                                    <Button variant="contained" type="submit">Add Role</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                               <DataTable />
                                                <DataTable value={Roleslistdata} dataKey="id" responsiveLayout="scroll" scrollable={true} paginator rows={5} className="pk-master-table">
                                                    <Column field="role" header="Role" sortable={true} ></Column>
                                                    <Column field="rolebase" header="Role Base" sortable={true} ></Column>
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

export default RolesandPermission;