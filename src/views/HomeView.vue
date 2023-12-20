<template>
  <main>
    home page
    <search @setMovies="setMovies" />
    <result :items="movies" />
  </main>
</template>

<script>
import Search from "@/components/Search.vue";
import Result from "@/components/Result.vue";

export default {
  name: "HomeView",
  components: {
    Result,
    Search,
  },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    setMovies(data) {
      this.movies = data;
    },
  },
};
</script>
