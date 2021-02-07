<template>
  <div id="app">
    <v-app>
      <sidebar :drawer="drawer"></sidebar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Header,
  },
  data: () => ({
    drawer: true,
  }),
  methods: {
    drawerToggle(event) {
      this.drawer = event;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index";
</style>
};
</script>
