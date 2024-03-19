<template>
  <v-layout column>
    <v-flex>
      <v-card>
        <v-card-text class="pa-8">
          <v-layout row wrap justify-center>
            <v-flex sm12 lg2 class="d-flex align-center">
              <v-avatar size="120">
                <v-img src="https://picsum.photos/200" contain></v-img>
              </v-avatar>
            </v-flex>
            <v-flex sm12 lg10 align-self-center>
              <div class="display-1 primary--text font-weight-bold">
                Muhammad Hamza Saeed
              </div>
              <div class="title font-weight-bold">Frontend Developer</div>
              <v-layout row wrap>
                <v-flex
                  shrink
                  v-for="(skill, index) in portfolio.skills"
                  :key="index"
                >
                  <v-chip :key="index" small>
                    {{ skill }}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex sm12>
              <div class="mt-4 text-justify">
                {{ portfolio.summary }}
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card>
        <v-card-text>
          <h1>Navigations</h1>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex>
      <v-card>
        <v-card-text>
          <h1>Details</h1>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import portfolioData from '~/plugins/data.js'
export default {
  data: {
    summary: '',
  },
  computed: {
    portfolio() {
      return portfolioData
    },
  },
}
</script>
