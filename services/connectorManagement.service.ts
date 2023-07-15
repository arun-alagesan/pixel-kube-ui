import { ConnectionMgmtEndPoint as http } from "./http-common";
import ApiResponse from "../models/ApiResponse";
import Meeting from "../models/connector/meeting";
import ConnectionDetails from "../models/connector/connectionDetails";


const getCalenderInstances = (id: number, startTime: string, endTime: string) => {
    return http.get<Meeting[]>("api/pixconnectors/event/getinstances?calendarId=" + id + "&startTime=" + startTime + "&endTime=" + endTime)
        .then(res => res.data);
}
const getSourceCalenders = (connectorName: string) => {
    return http.get<any[]>("api/pixconnectors/connector/getcalendars?connectorName=" + connectorName)
        .then(res => res.data);
}
const getAuditAndLogs = (connectorName: string) => {
    return http.get<ConnectionDetails>("api/pixconnectors/connector/get?name=" + connectorName)
        .then(res => res.data);
}
const saveSettings = (connDetails: ConnectionDetails | undefined) => {
    return http.put<any>("api/pixconnectors/connector/update", connDetails)
        .then(res => res.data);
}

const ConnectorManagementService = {
    getCalenderInstances,
    getSourceCalenders,
    getAuditAndLogs,
    saveSettings
}

export default ConnectorManagementService;
