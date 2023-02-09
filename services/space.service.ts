import http from "./http-common";
import ApiResponse from "../models/ApiResponse";


const getSpaceList = () => {
    return http.post<ApiResponse>("api/temp/space/list")
        .then(res => res.data);
}

const getAll = () => {
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

const SpaceService = {
    getSpaceList,
    getAll,
    getLocationList,
    getBuildingList,
    getFloorList
}

export default SpaceService;
