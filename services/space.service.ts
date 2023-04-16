import http from "./http-common";
import ApiResponse from "../models/ApiResponse";
import roomData from "../pages/bookSpaces/data/bookRoomData.json"
import searchResult from "../pages/bookSpaces/data/searchResult.json"

const GetSpaceById = (id: string) => {
    return http.get<ApiResponse>("api/Spaces")
        .then(res => res.data);
}

const getSpaceList = () => {
    return http.post<ApiResponse>("api/Spaces")
        .then(res => res.data);
}

const updateSpace = (id: any, request: any) => {
    return http.put<ApiResponse>("api/spaces/" + id, request)
        .then(res => res.data);
}
const createSpace = (request: any) => {
    return http.post<ApiResponse>("api/spaces", request)
        .then(res => res.data);
}

const getAll = () => {
    return http.get<ApiResponse>("api/Spaces")
        .then(res => res.data);
}

const getOrgList = () => {
    return http.get<ApiResponse>("api/Organizations/getList")
        .then(res => res.data);
}
const getLocationList = () => {
    return http.get<ApiResponse>("api/Countries")
        .then(res => res.data);
}
const getBuildingList = () => {
    return http.get<ApiResponse>("api/Buildings/getListOfBuildings")
        .then(res => res.data);

}
const getFloorList = () => {
    return http.get<ApiResponse>("api/Floors")
        .then(res => res.data);
}
const getRemainderList = () => {
    return http.post<ApiResponse>("api/floor/list")
        .then(res => res.data);
}

const createBuilding = (buildingData: any) => {
    return http.post<ApiResponse>("api/Buildings/CreateBuilding", buildingData)
        .then(res => res.data);

}
const updateBuilding = (buildingData: any) => {
    return http.put<ApiResponse>("api/Buildings", buildingData)
        .then(res => res.data);

}
const getBasicFormDetails = () => {
    // return http.post<ApiResponse>("api/temp/floor/list")
    // .then(res => res.data);
    let res = {
        ...roomData
    }
    return res;
}

const onSearch = () => {
    return searchResult;
}


const deleteSpace = (id: number) => {
    return http.delete<ApiResponse>("api/Spaces/" + id)
        .then(res => res.data);
}



const SpaceService = {
    GetSpaceById,
    getSpaceList,
    getOrgList,
    getAll,
    getLocationList,
    getBuildingList,
    getFloorList,
    getRemainderList,
    getBasicFormDetails,
    deleteSpace,
    onSearch,
    createBuilding,
    updateBuilding,
    createSpace,
    updateSpace,
}

export default SpaceService;
