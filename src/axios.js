import axios from "axios";

// base url untuk request ke database movie
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;