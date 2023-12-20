<template>
  <div>
    <h1>Resultados</h1>
    <div v-for="item in items" :key="item.id">
      <CardMovie :movie="item" />
    </div>
  </div>
</template>

<script>
import CardMovie from "./CardMovie.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Result",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: { CardMovie },
};
</script>
