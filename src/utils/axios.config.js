import axios from "axios";

let URL;
switch (process.env.local) {
    case "DEVELOPMENT":
        URL = "https://moon-tech-server-two.vercel.app/"
        break;
    case "production":
        URL = "productionserver";
        break;
        default:URL = "https://moon-tech-server-two.vercel.app/"
}

const instance = axios.create({
    baseURL:"https://moon-tech-server-two.vercel.app/"
})
export default instance