
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";



const createOrgGeneralDetails = (request: FormData) => {
    console.log("request ", request)

    let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.post<ApiResponse>("api/SMSService/SMSService/Organizations/create", request, customConfig)
        .then(res => res.data);
}

const updateOrgGeneralDetails = (request: FormData) => {
    console.log("request ", request)

    let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.put<ApiResponse>("api/SMSService/Organizations/update", request, customConfig)
        .then(res => res.data);
}

const getAll = () => {
    return http.get<ApiResponse>("api/SMSService/Buildings/getListOfBuildings")
        .then(res => res.data);
}

const getBuildingsbyOrgId = (id: string) => {
    return http.get<ApiResponse>("api/SMSService/Buildings/getBuildingsbyOrg?id=" + id)
        .then(res => res.data);
}

const GetFloorByBuilding = (id: string) => {
    return http.get<ApiResponse>("api/SMSService/Floors/GetFloorByBuilding?id=" + id)
        .then(res => res.data);
}


const deleteBuilding = (id: number) => {
    return http.delete<ApiResponse>("api/SMSService/Buildings/" + id)
        .then(res => res.data);
}





const BuildingService = {
    createOrgGeneralDetails,
    updateOrgGeneralDetails,
    getAll,
    deleteBuilding,
    getBuildingsbyOrgId,
    GetFloorByBuilding
}

export default BuildingService