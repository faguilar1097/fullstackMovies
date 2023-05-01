import axios from "axios";

export default axios.create({
    baseURL: "https://0e7e-2806-2f0-51c1-c26a-22-2677-ab4-5f81.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning":"true",
    "Access-Control-Allow-Origin": "*"}
});