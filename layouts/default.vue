<template>
  <v-app>
    <!-- <v-app-bar fixed app height="40"> </v-app-bar> -->
    <v-main>
      <v-container grid-list-lg class="mt-10">
        <v-layout row wrap justify-center>
          <v-flex sm12 lg10 xl7>
            <Nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>

    <v-footer app elevation="8">
      <v-container grid-list-lg class="pa-0">
        <app-footer />
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import AppFooter from '~/components/appFooter.vue'
export default {
  components: { AppFooter },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
