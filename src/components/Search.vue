<template>
  <div class="d-flex justify-space-between align-center">
    <v-text-field color="success" v-model="query" :loading="loading" />
    <v-btn @click="search" :disabled="loading">Buscar</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Imdb from "@/services/imdb";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      loading: false,
      query: "avengers",
      movies: [],
    };
  },
  methods: {
    ...mapActions(["fillMovies"]),
    async search() {
      try {
        this.loading = true;
        const { data } = await Imdb.fetch(this.query);
        data.Search.filter((item) => (item.favorited = false));
        this.fillMovies(data.Search);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
