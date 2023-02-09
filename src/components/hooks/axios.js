import axios from "axios";

const instance = axios.create({
    baseURL: "https://animechan.vercel.app/api",
    maxContentLength: 200
});

export default instance;