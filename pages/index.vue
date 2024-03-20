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
      <v-layout row wrap justify-center>
        <v-flex
          shrink
          v-for="(nav, index) in portfolio.navigation"
          :key="index"
        >
          <a
            href="#"
            v-scroll-to="`#${nav}`"
            class="font-weight-bold body-2 text-decoration-none body-2 text-uppercas"
            >{{ nav }}</a
          >
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex>
      <v-card outlined>
        <!-- Navigation -->
        <v-card-text id="Skills">
          <h1>Skills</h1>
          <div v-for="x in 20" :key="x">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem quaerat hic animi, tempore possimus corrupti maiores
            reiciendis obcaecati, architecto suscipit optio earum repellat,
            numquam adipisci magnam. Recusandae, enim voluptatem.
          </div>
        </v-card-text>
        <v-card-text id="Experience">
          <h1>Experience {{ scrollHeight }}</h1>
          <div v-for="x in 20" :key="x">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem quaerat hic animi, tempore possimus corrupti maiores
            reiciendis obcaecati, architecto suscipit optio earum repellat,
            numquam adipisci magnam. Recusandae, enim voluptatem.
          </div>
        </v-card-text>
        <v-card-text id="Projects">
          <h1>Projects</h1>
          <div v-for="x in 20" :key="x">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem quaerat hic animi, tempore possimus corrupti maiores
            reiciendis obcaecati, architecto suscipit optio earum repellat,
            numquam adipisci magnam. Recusandae, enim voluptatem.
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import profile from '~/components/profile.vue'
import portfolioData from '~/plugins/data.js'
export default {
  components: { profile },
  props: { scrollHeight: null },
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
