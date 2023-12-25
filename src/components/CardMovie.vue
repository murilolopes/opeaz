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

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <h2 class="text-center truncate" v-bind="attrs" v-on="on">
          {{ movie.Title }}
        </h2>
      </template>
      <span>{{ movie.Title }}</span>
    </v-tooltip>

    <p class="text-center">{{ movie.Year }}</p>

    <v-rating
      v-if="movie.favorited"
      class="mx-auto"
      empty-icon="mdi-star-outline"
      half-icon="mdi-star-half-full"
      full-icon="mdi-star"
      hover
      length="5"
      size="22"
      :value="movie.rating"
      @input="ratingMovie({ id: movie.imdbID, rating: $event })"
    />
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
    ...mapActions(["favoriteMovie", "ratingMovie"]),
  },
};
</script>

<style>
.position-relative {
  position: relative;
}

.truncate {
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
