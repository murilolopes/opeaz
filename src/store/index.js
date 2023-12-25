import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app: {
      state: {
        favoritedMovies: [],
        ratedMovies: [],
      },
      mutations: {
        favoriteMovie(state, payload) {
          state.favoritedMovies.push(payload);
        },
        unfavoritedMovie(state, payload) {
          const index = state.favoritedMovies.indexOf(payload);
          state.favoritedMovies.splice(index, 1);
          state.ratedMovies.splice(index, 1);
        },
        rateMovie(state, payload) {
          const index = state.favoritedMovies.indexOf(payload.id);
          state.ratedMovies[index] = payload.rating;
        },
      },
      actions: {
        favoriteMovie(context, payload) {
          const isFavorited = context.state.favoritedMovies.some(
            (movie) => movie === payload
          );

          const action = isFavorited ? "unfavoritedMovie" : "favoriteMovie";
          context.commit(action, payload);
        },
        ratingMovie(context, payload) {
          const isFavorited = context.state.favoritedMovies.some(
            (movie) => movie === payload.id
          );

          if (isFavorited) context.commit("rateMovie", payload);
        },
      },
      getters: {
        favoritedMovies(state) {
          return state.favoritedMovies;
        },
      },
    },
  },
  strict: import.meta.env.DEV,
});

export default store;
