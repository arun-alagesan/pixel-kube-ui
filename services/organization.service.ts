
import http from "./http-common";
import ApiResponse from "../models/ApiResponse";



const postGeneralDetails = (request: FormData) => {
    console.log("request ", request)

    let customConfig = { headers: { 'Content-Type': 'multipart/form-data' } };
    return http.post<ApiResponse>("api/Organization/create/generalDetails", request, customConfig)
        .then(res => res.data);
}




const OrganizationService = {
    postGeneralDetails,

}

export default OrganizationService