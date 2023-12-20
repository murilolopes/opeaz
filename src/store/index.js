import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app: {
      state: {
        favoritedMovies: [],
      },
      mutations: {
        favoriteMovie(state, payload) {
          state.favoritedMovies.push(payload);
        },
        unfavoritedMovie(state, payload) {
          state.favoritedMovies = state.favoritedMovies.filter(
            (movie) => movie.imdbID !== payload.imdbID
          );
        },
      },
      actions: {
        favoriteMovie(context, payload) {
          const isFavorited = context.state.favoritedMovies.some(
            (movie) => movie.imdbID === payload.imdbID
          );
          const action = isFavorited ? "unfavoritedMovie" : "favoriteMovie";
          context.commit(action, payload);
        },
      },
    },
  },
  strict: import.meta.env.DEV,
});

export default store;
