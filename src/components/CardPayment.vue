<template>
  <v-card class="text-center mt-3" shaped elevation="10">
    <v-col>
      <v-row justify="center" align-content="center">
        <v-col md="8">
          <v-row>
            <v-list-item-title class="mt-2 ml-2 headline mb-1">
              <v-icon>{{ icons.card }}</v-icon>
            </v-list-item-title>
          </v-row>
          <v-row justify="center">
            <v-list-item-subtitle>1234 5678 9012 3456</v-list-item-subtitle>
          </v-row>
        </v-col>
        <v-col md="3" class="mr-3">
          <v-btn class="mt-1" color="cyan darken-1" small height="50" rounded>
            <v-icon color="white" icon>{{ icons.plus }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
import * as Icons from "../constants/icons";

export default {
  data: () => ({
    icons: {
      card: Icons.ICON_CARD,
      plus: Icons.ICON_PLUS
    }
  })
};
</script>

<style>
</style>