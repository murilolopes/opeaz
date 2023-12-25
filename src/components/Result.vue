<template>
  <div>
    <h1 class="text-center mb-4" v-show="movies.length">Resultados</h1>
    <v-row no-gutters>
      <v-col v-for="item in movies" :key="item.id" cols="3" class="pa-2">
        <CardMovie :movie="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardMovie from "./CardMovie.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Result",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: { CardMovie },
  computed: {
    movies() {
      let newMoviesArray = [];

      this.items.filter((item) => {
        if (this.$store.getters.favoritedMovies.includes(item.imdbID)) {
          item.favorited = true;
          item.rating = 0;
        } else {
          item.favorited = false;
          item.rating = 0;
        }
        newMoviesArray.push(item);
      });

      return newMoviesArray;
    },
  },
};
</script>
