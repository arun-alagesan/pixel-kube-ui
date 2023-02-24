import http from "./http-common";
import ApiResponse from "../models/ApiResponse";
import roomData from "../pages/bookSpaces/data/bookRoomData.json"
import searchResult from "../pages/bookSpaces/data/searchResult.json"


const getSpaceList = () => {
    return http.post<ApiResponse>("api/temp/space/list")
        .then(res => res.data);
}

const getAll = () => {
    return http.get<ApiResponse>("api/Spaces")
        .then(res => res.data);
}

const getOrgList = () => {
    return http.get<ApiResponse>("api/Spaces")
        .then(res => res.data);
}
const getLocationList = () => {
    return http.post<ApiResponse>("api/temp/location/list")
        .then(res => res.data);
}
const getBuildingList = () => {
    return http.post<ApiResponse>("api/temp/building/list")
        .then(res => res.data);

}
const getFloorList = () => {
    return http.post<ApiResponse>("api/temp/floor/list")
        .then(res => res.data);
}
const getRemainderList = () => {
    return http.post<ApiResponse>("api/temp/floor/list")
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

const onSearch  = () => {   
    return searchResult;
}


const deleteSpace = (id: number) => {
    return http.delete<ApiResponse>("api/Spaces/" + id)
        .then(res => res.data);
}



const SpaceService = {
    getSpaceList,
    getOrgList,
    getAll,
    getLocationList,
    getBuildingList,
    getFloorList,
    getRemainderList,
    getBasicFormDetails,
    deleteSpace,
    onSearch
}

export default SpaceService;
