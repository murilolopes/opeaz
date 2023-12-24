<template>
  <main>
    <input type="text" v-model="query" />
    <button @click="search">Buscar</button>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Imdb from "@/services/imdb";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      query: "avengers",
      movies: [],
    };
  },
  methods: {
    async search() {
      try {
        const { data } = await Imdb.fetch(this.query);
        data.Search.filter((item) => {
          item.favorited = false;
        });
        this.movies = data.Search;
        this.setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    },
    setMovies(movies) {
      this.$emit("setMovies", movies);
    },
  },
  computed: {
    ...mapGetters(["favoritedMovies"]),
  },
};
</script>
