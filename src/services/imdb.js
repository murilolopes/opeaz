import http from "./http";

class Imdb {
  fetch(payload) {
    return http.get("", {
      params: {
        s: payload,
      },
    });
  }
}

export default new Imdb();
