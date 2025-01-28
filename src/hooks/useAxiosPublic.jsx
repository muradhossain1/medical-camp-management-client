import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://medical-camp-management-server-sooty.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;