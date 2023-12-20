<template>
  <div>
    <h1>Resultados</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <img :src="item.Poster" :alt="item.Title" />
        <h2>{{ item.Title }}</h2>
        <p>{{ item.Year }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Result",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
