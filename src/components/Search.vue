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
      query: "",
    };
  },
  methods: {
    search() {
      Imdb.fetch(this.query).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
