<template>
  <div>
    <img :src="movie.Poster" :alt="movie.Title" />
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <button @click="favorite">Favoritar</button>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favorite() {
      this.$store.dispatch("favoriteMovie", this.movie);
    },
  },
};
</script>
