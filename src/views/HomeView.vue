<template>
  <main>
    home page
    <search />
  </main>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
  name: "HomeView",
  components: {
    Search,
  },
};
</script>
