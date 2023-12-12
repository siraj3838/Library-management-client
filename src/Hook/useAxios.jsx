import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://library-server-side.vercel.app',
    baseURL: 'http://localhost:5005',
    withCredentials: true,
  });

const useAxios = () => {
    return instance;
};

export default useAxios;