import Vue from "vue";
import axios from "axios";

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
