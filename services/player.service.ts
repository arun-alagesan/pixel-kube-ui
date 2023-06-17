import http from "./http-common";
import ApiResponse from "../models/ApiResponse";

const getPlayerList = () => {
    return http.get<ApiResponse>("api/PlayerManagement/")
        .then(res => res.data);
}

const addPlayer = (request: any) => {
    console.log("request ", request)
    return http.post<ApiResponse>("api/PlayerManagement/", request)
        .then(res => res.data);
}

const deletePlayer = (id: string) => {
    return http.delete<ApiResponse>("api/PlayerManagement/" + id)
        .then(res => res.data);
}

const PlayerManagementService = {
    getPlayerList,
    addPlayer,
    deletePlayer
}


export default PlayerManagementService