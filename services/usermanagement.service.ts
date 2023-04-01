
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";

const getuserlist = () => {
    // return http.get<ApiResponse>("api/Organizations/getList")
    //     .then(res => res.data);
        return UserList;
}

const getroleslist = (id: number) => {
    return http.delete<ApiResponse>("api/Organizations/" + id)
        .then(res => res.data);
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
export default UsermanagementService