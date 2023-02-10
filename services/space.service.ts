import http from "./http-common";
import ApiResponse from "../models/ApiResponse";
import roomData from "../pages/data/bookRoomData.json"


const getSpaceList = () => {
    return http.post<ApiResponse>("api/temp/space/list")
        .then(res => res.data);
}

const getOrgList = () => {
    return http.post<ApiResponse>("api/temp/org/list")
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
const getRemainderList =()=>{
    return http.post<ApiResponse>("api/temp/floor/list")
    .then(res => res.data);
}
const getBasicFormDetails =()=>{
    // return http.post<ApiResponse>("api/temp/floor/list")
    // .then(res => res.data);
    let res ={
        ...roomData

    }
    return res;
}


const SpaceService = {
    getSpaceList,
    getOrgList,
    getLocationList,
    getBuildingList,
    getFloorList,
    getRemainderList,
    getBasicFormDetails

}

export default SpaceService;
