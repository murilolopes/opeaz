<template>
  <div>
    <h1>Resultados</h1>
    <div v-for="item in movies" :key="item.id">
      <CardMovie :movie="item" />
    </div>
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
        if (this.$store.getters.favoritedMovies.includes(item.imdbID))
          item.favorited = true;
        else item.favorited = false;
        newMoviesArray.push(item);
      });

      return newMoviesArray;
    },
  },
};
</script>
