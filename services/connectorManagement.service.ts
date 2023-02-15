import http from "./http-common";
import ApiResponse from "../models/ApiResponse";
import Meeting from "../models/connector/meeting";
import AuditLogs from "../models/connector/AuditLogs";


const getCalenderInstances = (id: number, startTime: string, endTime: string) => {
    return http.get<Meeting[]>("api/event/getinstances?calendarId=" + id + "&startTime=" + startTime + "&endTime=" + endTime)
        .then(res => res.data);
}
const getSourceCalenders = (connectorName: string) => {
    return http.get<any[]>("api/connector/getsourcecalendars?connectorName=" + connectorName)
        .then(res => res.data);
}
const getAuditAndLogs = (connectorName: string) => {
    return http.get<AuditLogs>("api/connector/get?name=" + connectorName)
        .then(res => res.data);
}


const ConnectorManagementService = {
    getCalenderInstances,
    getSourceCalenders,
    getAuditAndLogs
}

export default ConnectorManagementService;
