<template>
  <div>
    <h1 class="text-center mb-4" v-show="movies.length">Resultados</h1>
    <v-row>
      <v-col
        class="pa-2"
        v-for="movie in movies"
        :key="movie.imdbID"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <CardMovie :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardMovie from "./CardMovie.vue";
import { mapGetters } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Result",
  components: { CardMovie },
  computed: {
    ...mapGetters(["movies"]),
  },
};
</script>
