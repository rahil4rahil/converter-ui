import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#e27d60',
    secondary: '#85dcb',
    accent: '#e8a87c',
    error: '#c38d9e',
    info: '#41b3a3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  options: {
    customProperties: true
  },
  iconfont: 'fa',
})
