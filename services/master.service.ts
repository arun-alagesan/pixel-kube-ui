import { config } from './http-common';
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";

const getIndustries = () => {
    return http.get<ApiResponse>("/api/masters/industry", config).then(res => res.data);

}

const getCountries = () => {
    return http.get<ApiResponse>("/api/masters/country", config).then(res => res.data);
}


const getStates = (countryId: number) => {
    return http.get<ApiResponse>(`/api/masters/state/${countryId}`, config).then(res => res.data);
}

const getCities = (countryId: number, stateId: number) => {
    return http.get<ApiResponse>(`/api/masters/city/${countryId}/${stateId}`, config).then(res => res.data);
}


const MasterService = {
    getIndustries,
    getCountries,
    getStates,
    getCities
}

export default MasterService