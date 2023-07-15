import axios from "axios";

export default axios.create({
    baseURL: "http://3.94.231.14:3001/",
    //baseURL: "https://localhost:7177/",
    // baseURL: "https://localhost:3001/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const ConnectionMgmtEndPoint = axios.create({
    baseURL: "http://3.94.231.14:3002/",
    //baseURL: "https://localhost:7177/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const config = { headers: { "Content-type": "application/json" },

connectionManagement:{
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
    baseURL: "http://3.94.231.14:3002/",
    //baseURL: "https://localhost:7022/",
    AddCalender:"api/pixconnectors/connector/addcalendar",
    CreateConnectionFromFile:"api/pixconnectors/connector/createconnectionfromfile",
    CreateConnector:"api/pixconnectors/connector/create",
    GetAllConnectors:"api/pixconnectors/connector/getall",
    GetConnectorByName:"api/pixconnectors/connector/getallbyname",
    deleteConnector:"api/pixconnectors/connector/delete"
}
};