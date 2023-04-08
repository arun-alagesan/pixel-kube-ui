import axios from "axios";

export default axios.create({
    baseURL: "https://localhost/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const ConnectionMgmtEndPoint = axios.create({
    baseURL: "https://localhost/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const config = { headers: { "Content-type": "application/json" },
connectionManagement:{
    baseURL: "http://3.94.231.14:3002/",
    AddCalender:"api/connector/addcalendar",
    CreateConnectionFromFile:"api/admin/createconnectionfromfile",
    GetAllConnectors:"api/connector/getall",
    createConnector:"api/connector/create",
}
};
