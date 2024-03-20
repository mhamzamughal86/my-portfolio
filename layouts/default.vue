<template>
  <v-app>
    <!-- hide-on-scroll inverted-scroll scroll-threshold="200" -->
    <v-app-bar
      fixed
      app
      :height="$vuetify.breakpoint.smAndDown ? 100 : 120"
      color="white"
      hide-on-scroll
      inverted-scroll
      scroll-threshold="200"
      elevation="2"
    >
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex sm12 lg10 xl7>
            <profile :extend="true">
              <template v-slot:extension>
                <v-layout
                  v-if="$vuetify.breakpoint.mdAndUp"
                  row
                  wrap
                  justify-center
                >
                  <v-flex shrink> Links </v-flex>
                </v-layout>
                <v-icon v-else color="">mdi-menu</v-icon>
              </template>
            </profile>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container grid-list-lg class="mt-4">
        <v-layout row wrap justify-center>
          <v-flex sm12 lg10 xl7>
            <Nuxt :scrollHeight="scrollHeight" />
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
import Profile from '~/components/profile.vue'

export default {
  components: { AppFooter, Profile },
  name: 'DefaultLayout',
  data: () => ({
    scrollHeight: 100,
  }),

  created() {
    window.addEventListener('scroll', this.onWindowScroll)
  },
  methods: {
    onWindowScroll(scroll) {
      // this.scrollHeight = window.scrollY
    },
  },
}
</script>
