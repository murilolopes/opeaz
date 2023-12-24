<template>
  <div>
    <img :src="movie.Poster" :alt="movie.Title" />
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <button @click="favoriteMovie(movie.imdbID)">
      {{ movie.favorited === true ? "Desfavoritar" : "Favoritar" }}
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CardMovie",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["favoriteMovie"]),
  },
};
</script>
