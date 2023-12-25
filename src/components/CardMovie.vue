<template>
  <v-card class="d-flex flex-column">
    <div class="d-relative position-relative">
      <v-img :src="movie.Poster" :alt="movie.Title" :height="400">
        <v-btn
          icon
          class="mt-2 mr-2"
          style="position: absolute; top: 0; right: 0"
          @click="favoriteMovie(movie.imdbID)"
        >
          <v-icon
            :color="
              movie.favorited === true ? 'yellow darken-3' : 'white darken-3'
            "
            >mdi-star</v-icon
          >
        </v-btn>
      </v-img>
    </div>

    <h2 class="text-center">{{ movie.Title }}</h2>
    <p class="text-center">{{ movie.Year }}</p>
  </v-card>
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

<style>
.position-relative {
  position: relative;
}
</style>
