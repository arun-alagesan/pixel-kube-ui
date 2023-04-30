import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7177/",
    // baseURL: "https://localhost:3001/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const ConnectionMgmtEndPoint = axios.create({
    baseURL: "https://localhost:7177/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const config = { headers: { "Content-type": "application/json" },

connectionManagement:{
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
    baseURL: "https://localhost:7022/",
    AddCalender:"api/connector/addcalendar",
    CreateConnectionFromFile:"api/connector/createconnectionfromfile",
    GetAllConnectors:"api/connector/getall"
}
};