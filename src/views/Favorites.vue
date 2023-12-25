<template>
  <div>
    <h1 class="text-center mb-4">Favoritos</h1>
    <v-row>
      <v-col v-for="item in movies" :key="item.id" cols="3" class="pa-2">
        <CardMovie :movie="item" rating />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardMovie from "../components/CardMovie.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Favorited",
  components: { CardMovie },
  computed: {
    movies() {
      let newMoviesArray = [];

      this.$store.getters.favoritedMoviesIDs.forEach((id) => {
        newMoviesArray.push(
          this.$store.getters.favoritedMovies.find(
            (movie) => movie.imdbID === id
          )
        );
      });

      return newMoviesArray;
    },
  },
};
</script>
