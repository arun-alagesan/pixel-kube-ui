import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7031/",  
});

export const config = { headers: {  "Content-type": "application/json" } };