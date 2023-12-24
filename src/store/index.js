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
          const index = state.favoritedMovies.indexOf(payload);
          state.favoritedMovies.splice(index, 1);
        },
      },
      actions: {
        favoriteMovie(context, payload) {
          const isFavorited = context.state.favoritedMovies.some(
            (movie) => movie === payload
          );

          const action = isFavorited ? "unfavoritedMovie" : "favoriteMovie";
          console.log(1, isFavorited, action, payload);
          context.commit(action, payload);
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
