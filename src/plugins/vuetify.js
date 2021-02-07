import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';
import pt from 'vuetify/lib/locale/pt';
Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
  theme: {
    themes: {
      light: {
        background: colors.grey.lighten2,
      },
      dark: {
        background: colors.shades.white
      }
    }
  }
});