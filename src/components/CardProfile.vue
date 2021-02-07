<template>
  <v-card class="text-center ml-1 mt-3" shaped elevation="10">
    <v-avatar class="mt-n7" size="60" elevation="10">
      <v-img
        src="../assets/profile_photo.jpg"
        alt=""
        height="60"
        width="60"
      ></v-img>
    </v-avatar>
    <v-card-title class="layout justify-center">Alvz</v-card-title>
    <v-card-subtitle>25 year, Campos dos Goytacazes</v-card-subtitle>
    <v-list class="mt-n5">
      <v-list-item>
        <v-list-item-title class="cyan--text text--darken-1"
          >Blood</v-list-item-title
        >
        <v-list-item-title class="cyan--text text--darken-1"
          >Height</v-list-item-title
        >
        <v-list-item-title class="cyan--text text--darken-1"
          >Weight</v-list-item-title
        >
      </v-list-item>
      <v-list-item class="mt-n5">
        <v-list-item-subtitle>O+</v-list-item-subtitle>
        <v-list-item-subtitle>1.83</v-list-item-subtitle>
        <v-list-item-subtitle>80 Kg</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>