<template>
  <main>
    <input type="text" v-model="query" />
    <button @click="search">Buscar</button>
  </main>
</template>

<script>
import Imdb from "@/services/imdb";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      query: "avengers",
    };
  },
  methods: {
    async search() {
      try {
        const { data } = await Imdb.fetch(this.query);
        this.$emit("setMovies", data.Search);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
