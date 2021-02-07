<template>
    <v-navigation-drawer
      v-model="drawer"
      dark
      mini-variant
      mini-variant-width="100"
      class="cyan darken-1"
    >
      <v-list>
        <v-list-item class="mb-12">
          <v-list-item-action>

          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item router to="/">
          <v-list-item-content>
            <v-icon class="mb-2">{{ icons.dashboard }}</v-icon>
            <v-list-item-subtitle align="center">Dashboard</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import * as Icons from "../constants/icons";

export default {
  name: "Sidebar",
  props: {
    drawer: Boolean
  },
  data: () => ({
    icons: {
      dashboard: Icons.ICON_DASHBOARD
    }
  }),
  methods: {

  }
}
</script>

<style>

</style>