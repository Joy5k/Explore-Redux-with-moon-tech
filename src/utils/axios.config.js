import axios from "axios";

let URL;
switch (process.env.local) {
    case "DEVELOPMENT":
        URL = "http://localhost:5000/"
        break;
    case "production":
        URL = "productionserver";
        break;
        default:URL = "http://localhost:5000/"
}

const instance = axios.create({
    baseURL:"http://localhost:5000/"
})
export default instance