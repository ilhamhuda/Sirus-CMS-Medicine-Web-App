<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import order from './components/Order.vue'
import invoice from './components/invoice.vue'
export default {
  components: {
    order,
    invoice
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
