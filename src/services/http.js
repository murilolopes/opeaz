import axios from "axios";

const axiosIns = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}?apikey=${
    import.meta.env.VITE_API_KEY
  }&`,
});

export default axiosIns;
