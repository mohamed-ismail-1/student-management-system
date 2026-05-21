import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:8080/api/students"
    baseURL: import.meta.env.VITE_API_URL
});

export default API;