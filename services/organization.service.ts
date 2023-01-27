
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";



const createOrgGeneralDetails = (request: FormData) => {
    console.log("request ", request)

    let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.post<ApiResponse>("api/Organizations/create", request, customConfig)
        .then(res => res.data);
}

const updateOrgGeneralDetails = (request: FormData) => {
    console.log("request ", request)

    let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.put<ApiResponse>("api/Organizations/update", request, customConfig)
        .then(res => res.data);
}

const getList = () => {
    return http.get<ApiResponse>("api/Organizations/getList")
        .then(res => res.data);
}

const deleteOrg = (id: number) => {
    return http.delete<ApiResponse>("api/Organizations/" + id)
        .then(res => res.data);
}





const OrganizationService = {
    createOrgGeneralDetails,
    updateOrgGeneralDetails,
    getList,
    deleteOrg
}

export default OrganizationService