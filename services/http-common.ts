import axios from "axios";

export default axios.create({
    baseURL: "http://3.94.231.14:3001/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const ConnectionMgmtEndPoint = axios.create({
    baseURL: "http://3.94.231.14:3002/",
    //baseURL: "https://roombookingappus-vftldv7jma-uc.a.run.app/",
});
export const config = { headers: { "Content-type": "application/json" } };
