<template>
  <v-navigation-drawer
    v-model="mini"
    dark
    app
    :mini-variant.sync="mini"
    mini-variant-width="100"
    class="sidebar cyan darken-1"
  >
    <v-list>
      <v-list-item class="mb-12">
        <v-list-item-action> </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list flat>
      <v-list-item router to="/">
        <v-list-item-content>
          <v-icon class="mb-2">{{ icons.dashboard }}</v-icon>
          <v-list-item-subtitle align="center">Dashboard</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item router to="/">
        <v-list-item-content>
          <v-icon class="mb-2">{{ icons.doctor }}</v-icon>
          <v-list-item-subtitle align="center">Doctor</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item router to="/">
        <v-list-item-content>
          <v-icon class="mb-2">{{ icons.contact }}</v-icon>
          <v-list-item-subtitle align="center">Contact</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item router to="/">
        <v-list-item-content>
          <v-icon class="mb-2">{{ icons.chart }}</v-icon>
          <v-list-item-subtitle align="center">Tracker</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list style="position: absolute; bottom: 0" :class="parseIndent">
      <v-list-item router to="/">
        <v-list-item-content>
          <v-icon>{{ icons.logout }}</v-icon>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import * as Icons from "../constants/icons";

export default {
  name: "Sidebar",
  computed: {
    ...mapState({
      mini: state => state.layout.mini
    }),
    parseIndent() {
      if (this.drawer) return "ml-12"
      return "ml-6"
    }
  },
  data: () => ({
    icons: {
      dashboard: Icons.ICON_DASHBOARD,
      doctor: Icons.ICON_MEDICAL,
      contact: Icons.ICON_CONTACT,
      chart: Icons.ICON_CHART,
      logout: Icons.ICON_LOGOUT,
    },
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
#default-drawer {
  .v-list-item {
    margin-bottom: 8px;
  }
  .v-list-item::before,
  .v-list-item::after {
    display: none;
  }
  .v-list-group__header__prepend-icon,
  .v-list-item__icon {
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 4px;
  }
  &.v-navigation-drawer--mini-variant {
    .v-list-item {
      justify-content: flex-start !important;
    }
  }
}
</style>