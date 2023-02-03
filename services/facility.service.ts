import { UpdateFacilityRequest } from './../models/spacemgmt/facility/updateFacilityRequest';
import { CreateFacilityRequest } from './../models/spacemgmt/facility/createFacilityRequest';
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";

const create = (request: CreateFacilityRequest) => {
    return http.post<ApiResponse>("api/facilities", request)
        .then(res => res.data);
}

const update = (request: UpdateFacilityRequest) => {
    return http.put<ApiResponse>("api/facilities", request)
        .then(res => res.data);
}

const get = (id: number) => {
    return http.get<ApiResponse>("api/facilities/" + id)
        .then(res => res.data);
}

const getByOrgId = (orgId: number) => {
    return http.get<ApiResponse>("api/facilities/getByOrganization/" + orgId)
        .then(res => res.data);
}

const FacilityService = {
    create,
    update,
    get,
    getByOrgId
}

export default FacilityService