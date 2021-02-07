<template>
  <v-container class="rounded-lg px-4">
    <v-row>
      <v-col md="3">
        <v-row justify="center">
          <card-profile></card-profile>
        </v-row>
        <v-row class="ml-1" justify="center">
          <v-col md="6">
            <v-list-item-title class="cyan--text text--darken-1"
              >Notifications</v-list-item-title
            >
          </v-col>
          <v-col md="6">
            <v-list-item-subtitle>26 Aug 2020</v-list-item-subtitle>
          </v-col>
        </v-row>
        <v-row justify="center">
          <card-notifications></card-notifications>
        </v-row>
        <v-row justify="center">
          <card-payment></card-payment>
        </v-row>
      </v-col>
      <v-col align-self="flex-start" md="9">
        <v-card
          class="rounded-lg mt-0"
          elevation="10"
          :color="$vuetify.theme.themes.dark.background"
        >
          <v-container>
            <v-col>
              <v-row justify="flex-start" align="center">
                <v-col md="2">
                  <v-list-item-title class="cyan--text text--darken-1"
                    >Examinations</v-list-item-title
                  >
                </v-col>
                <v-col md="4" align-self="start">
                  <v-list-item-action
                    ><v-btn class="m-0" color="cyan darken-1 white--text"
                      ><v-icon class="mr-2">{{ icons.notifications }}</v-icon
                      >See All</v-btn
                    ></v-list-item-action
                  >
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="12px" color="green"></v-card>
                    </v-col>
                    <v-col align-self="center" cols="12" md="10">
                      <v-row>
                        <v-list-item-subtitle
                          >21 Jul, 2020</v-list-item-subtitle
                        >
                      </v-row>
                      <v-row>
                        <v-list-item-title
                          >Hypertensive Crysis</v-list-item-title
                        >
                      </v-row>
                      <v-row>
                        <v-list-item-subtitle
                          >Ongoing treatment</v-list-item-subtitle
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="12px" color="red"></v-card>
                    </v-col>
                    <v-col align-self="center" cols="12" md="10">
                      <v-row>
                        <v-list-item-subtitle
                          >21 Jul, 2020</v-list-item-subtitle
                        >
                      </v-row>
                      <v-row>
                        <v-list-item-title>Osteoporosis</v-list-item-title>
                      </v-row>
                      <v-row>
                        <v-list-item-subtitle>Incurable</v-list-item-subtitle>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" md="4">
                  <v-row>
                    <v-col cols="12" md="2">
                      <v-card height="80px" width="12px" color="grey"></v-card>
                    </v-col>
                    <v-col align-self="center" cols="12" md="10">
                      <v-row>
                        <v-list-item-subtitle
                          >21 Jul, 2020</v-list-item-subtitle
                        >
                      </v-row>
                      <v-row>
                        <v-list-item-title
                          >Hypertensive Crysis</v-list-item-title
                        >
                      </v-row>
                      <v-row>
                        <v-list-item-subtitle
                          >Examinations</v-list-item-subtitle
                        >
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row align-content="center" class="mt-4" no-gutters>
                <v-col cols="12" md="4">
                  <v-list-item-title class="cyan--text text--darken-1"
                    >Health Curve</v-list-item-title
                  >
                </v-col>
                <v-col cols="12" md="5">
                  <v-btn>D</v-btn>
                  <v-btn>W</v-btn>
                  <v-btn>M</v-btn>
                  <v-btn>Y</v-btn>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="mt-4" cols="12" md="6">
                  <v-sparkline
                    :value="value"
                    :gradient="gradient"
                    :smooth="radius || false"
                    :padding="padding"
                    :line-width="width"
                    :stroke-linCap="lineCap"
                    :gradient-direction="gradientDirection"
                    :fill="fill"
                    :type="type"
                    :auto-line-width="autoLineWidth"
                    auto-draw
                  ></v-sparkline>
                  <v-row align-content="center" justify="center">
                    <v-col cols="12" md="4">
                      <v-row align-content="center">
                        <v-col cols="12" md="1">
                          <v-list-item-avatar
                            color="cyan darken-1"
                            size="20px"
                          ></v-list-item-avatar>
                        </v-col>
                        <v-col align-self="center" cols="12" md="8">
                          <v-list-item-title>My Data</v-list-item-title>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-row align-content="center">
                        <v-col cols="12" md="1">
                          <v-list-item-avatar
                            color="cyan darken-1"
                            size="20px"
                          ></v-list-item-avatar>
                        </v-col>
                        <v-col align-self="center" cols="12" md="8">
                          <v-list-item-title>My Data</v-list-item-title>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col align-self="center" class="ml-8 mt-4" cols="12" md="5">
                  <v-row align-content="center" justify="center">
                    <v-list-item-title class="ml-12 cyan--text text--darken-1"
                      >Nearest Treatment & Advice</v-list-item-title
                    >
                  </v-row>
                  <v-row>
                    <v-date-picker
                      v-model="date2"
                      :event-color="(date) => (date[9] % 2 ? 'red' : 'yellow')"
                      :events="functionEvents"
                      color="cyan darken-1"
                    ></v-date-picker>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardNotifications from "../components/CardNotifications.vue";
import CardPayment from "../components/CardPayment.vue";
import CardProfile from "../components/CardProfile.vue";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#80c6ff", "#f0f", "#ff0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

import * as Icons from "../constants/icons";

export default {
  name: "Home",
  components: { CardProfile, CardNotifications, CardPayment },
  data: () => ({
    width: 2,
    radious: 10,
    padding: 10,
    lineCap: "round",
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    gradient: gradients[5],
    fill: false,
    type: "trend",
    autoLineWidth: false,
    arrayEvents: null,
    date2: new Date().toISOString().substr(0, 10),
    icons: {
      notifications: Icons.ICON_NOTIFICATIONS,
    },
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  mounted() {
    this.arrayEvents = [
      ...Array(6).map(() => {
        const day = Math.floor(Math.random() * 30);
        const d = new Date();
        d.setDate(day);
        return d.toISOString().substr(0, 10);
      }),
    ];
  },
  methods: {
    functionEvents(date) {
      const [, , day] = date.split("-");
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 10))) return ["red", "#00f"];
      return false;
    },
  },
};
</script>

<style scoped>
/* .rounded {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
} */
</style>