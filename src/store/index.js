import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app: {
      state: {
        favoritedMovies: [],
        favoritedMoviesIDs: [],
        ratedMovies: [],
      },
      mutations: {
        favoriteMovie(state, payload) {
          state.favoritedMoviesIDs.push(payload.imdbID);
          state.favoritedMovies.push({ ...payload });
          state.ratedMovies.push(0);
        },
        unfavoritedMovie(state, payload) {
          const index = state.favoritedMoviesIDs.indexOf(payload.imdbID);
          state.favoritedMoviesIDs.splice(index, 1);
          state.ratedMovies.splice(index, 1);

          const toRemove = state.favoritedMovies.find(
            (movie) => movie.imdbID === payload.imdbID
          );

          state.favoritedMovies.splice(
            state.favoritedMovies.indexOf(toRemove),
            1
          );
        },
        rateMovie(state, payload) {
          const index = state.favoritedMoviesIDs.indexOf(payload.id);
          state.ratedMovies[index] = payload.rating;
        },
      },
      actions: {
        favoriteMovie(context, payload) {
          const isFavorited = context.state.favoritedMoviesIDs.some(
            (id) => id === payload.imdbID
          );

          const action = isFavorited ? "unfavoritedMovie" : "favoriteMovie";
          context.commit(action, payload);
        },
        ratingMovie(context, payload) {
          const isFavorited = context.state.favoritedMoviesIDs.some(
            (movie) => movie === payload.id
          );

          if (isFavorited) context.commit("rateMovie", payload);
        },
      },
      getters: {
        favoritedMoviesIDs(state) {
          return state.favoritedMoviesIDs;
        },
        favoritedMovies(state) {
          return state.favoritedMovies;
        },
      },
    },
  },
  strict: import.meta.env.DEV,
});

export default store;
