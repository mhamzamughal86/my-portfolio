<template>
  <v-layout column>
    <v-flex>
      <v-card>
        <v-card-text class="pa-6">
          <profile :compact="false" :extend="true">
            <template v-slot:extension>
              <div class="text-justify body-2">
                {{ portfolio.summary }}
              </div>
            </template>
          </profile>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex class="my-1">
      <!-- Navigation -->
      <navigation />
    </v-flex>
    <v-flex v-for="(nav, index) in navigation" :key="index">
      <component :is="nav.component" :id="nav.id" />
    </v-flex>
  </v-layout>
</template>

<script>
import profile from '~/components/profile.vue'
import portfolioData from '~/plugins/data.js'
import { navigation } from '~/plugins/collection.js'
import Navigation from '~/components/navigation.vue'
export default {
  components: { profile, Navigation },
  props: { scrollHeight: null },
  data: {
    summary: '',
  },
  computed: {
    portfolio() {
      return portfolioData
    },
    navigation() {
      return navigation
    },
  },
  created() {
    console.log(navigation)
  },
}
</script>
