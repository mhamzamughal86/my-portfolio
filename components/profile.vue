<template>
  <v-container grid-list-lg>
    <v-layout row align-center>
      <v-flex sm12 v-if="compact">
        <!-- SmAndDown -->
        <v-layout row wrap align-center>
          <v-flex shrink>
            <v-avatar :size="$vuetify.breakpoint.smAndDown ? 48 : 68">
              <v-img src="https://picsum.photos/200" contain></v-img>
            </v-avatar>
          </v-flex>
          <v-flex xs9>
            <div
              class="font-weight-bold primary--text"
              :class="$vuetify.breakpoint.smAndDown ? 'body-1' : 'title'"
            >
              {{ portfolio.fullName }}
            </div>
            <div class="caption grey--text text-no-wrap text-truncate">
              {{ portfolio.headline }}
            </div>
          </v-flex>
          <v-flex
            :class="$vuetify.breakpoint.smAndDown ? 'shrink' : 'xs12'"
            v-if="extend"
          >
            <slot name="extension"></slot>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex v-else>
        <v-layout
          :class="
            $vuetify.breakpoint.smAndDown ? 'column align-center' : 'row wrap'
          "
          align-center
        >
          <v-flex shrink>
            <v-avatar :size="110">
              <v-img src="https://picsum.photos/200" contain></v-img>
            </v-avatar>
          </v-flex>
          <v-flex
            xs9
            :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''"
          >
            <div
              class="font-weight-bold primary--text"
              :class="$vuetify.breakpoint.smAndDown ? 'title' : 'display-1'"
            >
              {{ portfolio.fullName }}
            </div>
            <div
              class="grey--text text-no-wrap text-truncate"
              :class="$vuetify.breakpoint.smAndDown ? 'caption' : 'body-2 mt-2'"
            >
              {{ portfolio.headline }}
            </div>
          </v-flex>
          <v-flex
            :class="$vuetify.breakpoint.smAndDown ? 'shrink' : 'xs12'"
            v-if="extend"
          >
            <slot name="extension"></slot>
          </v-flex>
        </v-layout>
      </v-flex>
      <!-- <v-flex sm2>
        <v-avatar :size="compact ? 62 : 120">
          <v-img src="https://picsum.photos/200" contain></v-img>
        </v-avatar>
      </v-flex> -->
      <!-- <v-flex sm10>
        <div class="text-xl-h6">{{ portfolio.fullName }}</div>
        <div>{{ portfolio.headline }}</div>
      </v-flex> -->

      <!-- <v-flex v-if="extend" sm12>
        <slot name="extension"></slot>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import portfolioData from '~/plugins/data.js'

export default {
  props: {
    compact: {
      type: Boolean,
      default: true,
    },
    extend: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    portfolio() {
      return portfolioData
    },
  },
}
</script>

<style>
</style>