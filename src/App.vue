<template>
  <div id="app">
    <v-app>
      <sidebar :drawer="drawer"></sidebar>
      <v-main>
        <v-container class="pt-6">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
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
html::-webkit-scrollbar {
  width: 6px;
  background: #00ACC1;
}

html::-webkit-scrollbar-thumb {
  width: 6px;
  background: #005661;
  filter: hue-rotate(0deg);
  transition: filter 1s ease-out;
  &:hover {
    transition: filter 1s ease-in;
    filter: hue-rotate(90deg);
  }
}
</style>
