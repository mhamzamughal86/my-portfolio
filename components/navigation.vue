<template>
  <div>
    <v-menu v-if="menu" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="primary" dark v-bind="attrs" v-on="on">
          mdi-menu
        </v-icon>
      </template>
      <v-list dense>
        <v-list-item
          v-for="(nav, index) in navigation"
          :key="index"
          shrink
          v-scroll-to="`#${nav.id}`"
        >
          <v-list-item-title>{{ nav.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-layout v-else row wrap justify-center>
      <v-flex v-for="(nav, index) in navigation" :key="index" shrink>
        <a
          href="#"
          class="text-decoration-none body-1 font-weight-bold"
          v-scroll-to="`#${nav.id}`"
          >{{ nav.name }}</a
        >
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { navigation } from '~/plugins/collection.js'

export default {
  props: {
    menu: false,
  },
  computed: {
    navigation() {
      return navigation
    },
  },
}
</script>

<style>
</style>