import { config } from './http-common';
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";

const getIndustries = () => {
    return http.get<ApiResponse>("/api/Industries", config).then(res => res.data);
}

const getCountries = () => {
    return http.get<ApiResponse>("/api/Countries", config).then(res => res.data);
}


const getStates = (countryId: number) => {
    return http.get<ApiResponse>(`/api/States/getByCountry/${countryId}`, config).then(res => res.data);
}

const getCities = (stateId: number) => {
    return http.get<ApiResponse>(`/api/cities/getByState/${stateId}`, config).then(res => res.data);
}


const MasterService = {
    getIndustries,
    getCountries,
    getStates,
    getCities
}

export default MasterService