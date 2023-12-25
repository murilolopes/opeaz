import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
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
          state.favoritedMovies.push({
            ...payload,
            rating: 0,
            favorited: true,
          });
          state.ratedMovies.push(0);
        },
        unfavoriteMovie(state, payload) {
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
          state.favoritedMovies[payload.index].rating = payload.rating;
        },
      },
      actions: {
        favoriteMovie(context, payload) {
          const isFavorited = context.state.favoritedMoviesIDs.some(
            (id) => id === payload.imdbID
          );

          const action = isFavorited ? "unfavoriteMovie" : "favoriteMovie";
          context.commit(action, payload);
        },
        ratingMovie(context, payload) {
          const index = context.getters.favoritedMovies.findIndex(
            (movie) => movie.imdbID === payload.id
          );

          context.commit("rateMovie", { index, rating: payload.rating });
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
