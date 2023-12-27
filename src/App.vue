<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link.name" :to="link.name">
          {{ link.label }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: [
      { label: "Home", name: "/" },
      { label: "Favoritos", name: "favoritos" },
    ],
  }),
};
</script>
<style>
#app {
  grid-template-columns: none !important;
}
</style>
