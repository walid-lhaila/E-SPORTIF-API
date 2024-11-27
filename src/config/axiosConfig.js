import axios from "axios";



const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_API_EXPRESS_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer',
    },
});

export default axiosInstance;