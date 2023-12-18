<template>
  <main>
    <input type="text" />
    <button @click="search">Buscar</button>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  methods: {
    search() {
      console.log("searching...");
    },
  },
};
</script>
