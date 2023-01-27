import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7177/",
});

export const config = { headers: { "Content-type": "application/json" } };