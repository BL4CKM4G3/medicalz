<template>
  <div id="app">
    <v-app :style="{ background: $vuetify.theme.themes.light.background }">
      <v-container class="px-0 fill-height pb-10 pt-0 fill-width">
        <sidebar :drawer="drawer"></sidebar>
        <v-main>
          <v-container class="px-4 py-0 pt-2 fill-height" fluid>
            <v-row class="fill-height">
              <v-col>
                <transition name="fade">
                  <router-view />
                </transition>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar";

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
