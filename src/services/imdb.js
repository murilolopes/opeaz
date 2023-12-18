import axios from "./axios";

class Imdb {
  fetch(payload) {
    return axios.get("", {
      params: {
        s: payload,
      },
    });
  }
}

export default new Imdb();
