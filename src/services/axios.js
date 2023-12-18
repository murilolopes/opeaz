import Vue from "vue";
import axios from "axios";

const axiosIns = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}?apikey=${process.env.VUE_APP_API_KEY}&`,
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
