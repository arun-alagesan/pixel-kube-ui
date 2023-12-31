
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";



const createOrgGeneralDetails = (request: any) => {
    console.log("request ", request)

    // let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.post<ApiResponse>("api/SMSService/Organizations/create", request)
        .then(res => res.data);
}

const updateOrgGeneralDetails = (request: any) => {
    console.log("request ", request)

    // let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.put<ApiResponse>("api/SMSService/Organizations/update", request)
        .then(res => res.data);
}

const getList = () => {
    return http.get<ApiResponse>("api/SMSService/Organizations/getList")
        .then(res => res.data);
}

const deleteOrg = (id: number) => {
    return http.delete<ApiResponse>("api/SMSService/Organizations/" + id)
        .then(res => res.data);
}





const OrganizationService = {
    createOrgGeneralDetails,
    updateOrgGeneralDetails,
    getList,
    deleteOrg
}

export default OrganizationService