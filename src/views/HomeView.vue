<template>
  <div>
    <search />
    <result />
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Result from "@/components/Result.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    Result,
    Search,
  },
  mounted() {
    this.clearMovies();
  },
  methods: {
    ...mapActions(["clearMovies"]),
  },
};
</script>
