
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";

const getuserlist = () => {
    // return http.get<ApiResponse>("api/Organizations/getList")
    //     .then(res => res.data);
        return UserList;
}

const getroleslist = () => {
    // return http.delete<ApiResponse>("api/Organizations/" + id)
    //     .then(res => res.data);
    return RolesandPermissionList;
}

const UsermanagementService = {
    getuserlist,
    getroleslist
}
export const UserList = [
    {
        name: "John Doe",
        email: "dinesh.indermull@gmail.com",
        roles :"admin",
        Joined :"20/06/23"
    }
]

export const RolesandPermissionList = [
    {
        role: "Admin",
        rolebase: "Features & Functions",
    }
]
export default UsermanagementService