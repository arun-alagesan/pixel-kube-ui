
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

const getAll = () => {
    return http.get<ApiResponse>("api/Buildings/getListOfBuildings")
        .then(res => res.data);
}

const deleteBuilding = (id: number) => {
    return http.delete<ApiResponse>("api/Buildings/" + id)
        .then(res => res.data);
}





const BuildingService = {
    createOrgGeneralDetails,
    updateOrgGeneralDetails,
    getAll,
    deleteBuilding
}

export default BuildingService