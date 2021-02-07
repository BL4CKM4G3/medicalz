<template>
  <v-card class="text-center mt-3" shaped elevation="10">
    <v-col md="12">
      <v-row justify="center">
        <v-col md="2">
          <v-list-item-avatar
            size="10"
            color="cyan darken-1"
          ></v-list-item-avatar>
        </v-col>
        <v-col md="3">
          <v-list-item-title class="ml-n2">Active</v-list-item-title>
        </v-col>
        <v-col md="6">
          <v-list-item-subtitle class="ml-n2">10 Sec</v-list-item-subtitle>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="4">
          <v-list-item-title class="cyan--text text--darken-1"
            >Sun</v-list-item-title
          >
        </v-col>
        <v-col md="4">
          <v-list-item-title class="cyan--text text--darken-1"
            >Wed</v-list-item-title
          >
        </v-col>
        <v-col md="4">
          <v-list-item-title class="cyan--text text--darken-1"
            >Fri</v-list-item-title
          >
        </v-col>
      </v-row>
      <v-row justify="center mb-1">
        <v-list-item-subtitle
          >2 times in a day before food!</v-list-item-subtitle
        >
      </v-row>
      <v-divider></v-divider>
    </v-col>
    <v-col md="12">
      <v-row justify="center">
        <v-row justify="center">
          <v-col md="4" align-self="center">
            <v-img
              width="40"
              style="border-radius: 50px"
              height="40"
              src="../assets/doctor.jpg"
            ></v-img>
          </v-col>
          <v-col md="6" align-self="center">
            <v-list-item-content class="ml-n5">
              <v-list-item-title>Dr. John Dee</v-list-item-title>
              <v-list-item-subtitle
                >California Hospital Medical</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
    <v-col class="mt-n5">
      <v-row class="mb-1 mt-1">
        <v-col md="6">
          <v-list-item-title>Surgeon</v-list-item-title>
        </v-col>
        <v-col md="6">
          <v-list-item-subtitle>spinal pain</v-list-item-subtitle>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="mt-n8">
      <v-row justify="center">
        <v-col md="6">
          <v-list-item-title class="cyan--text text--darken-1"
            >Date</v-list-item-title
          >
        </v-col>
        <v-col md="6">
          <v-list-item-title class="cyan--text text--darken-1"
            >Time</v-list-item-title
          >
        </v-col>
      </v-row>
      <v-row class="pb-8">
        <v-col md="6">
          <v-list-item-subtitle>26 Aug 2019</v-list-item-subtitle>
        </v-col>
        <v-col md="6">
          <v-list-item-subtitle>12:38</v-list-item-subtitle>
        </v-col>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>