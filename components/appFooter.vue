<template>
  <v-layout
    :class="breakpoint.smAndDown ? 'column' : 'row wrap'"
    justify-space-between
    align-center
  >
    <v-flex shrink>
      <div class="caption grey--text">
        {{ $moment().format('dddd, MMM DD YYYY') }}
      </div>
    </v-flex>
    <v-flex shrink v-if="links">
      <template v-for="(link, index) in links">
        <v-btn
          x-small
          text
          color="primary "
          class="caption mx-2"
          v-bind:key="index"
        >
          <v-icon left>{{ link.icon }}</v-icon>

          {{ link.name }}
        </v-btn>
      </template>
    </v-flex>
    <v-flex shrink>
      <div class="d-flex align-center">
        <v-icon left size="18" color="grey">mdi-git</v-icon>
        <a
          href="https://github.com/mhamzamughal86/my-portfolio"
          class="caption text-decoration-none grey--text"
          >Template code</a
        >
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import portfolioData from '~/plugins/data.js'
export default {
  computed: {
    links() {
      return portfolioData.links
    },
    breakpoint() {
      return this.$vuetify.breakpoint
    },
  },
}
</script>

<style>
</style>