<template>
  <div>
    <h1 class="text-center mb-4">Favoritos</h1>
    <v-row>
      <v-col
        class="pa-2"
        v-for="item in movies"
        :key="item.id"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
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
      return this.$store.getters.favoritedMovies;
    },
  },
};
</script>
