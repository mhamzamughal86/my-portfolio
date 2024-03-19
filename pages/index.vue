<template>
  <v-layout column>
    <v-flex>
      <v-card outlined>
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
                  <v-chip :key="index" small class="secondary">
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
    <v-flex class="my-1">
      <!-- Navigation -->
      <v-layout row wrap justify-center>
        <v-flex
          shrink
          v-for="(nav, index) in portfolio.navigation"
          :key="index"
        >
          <!-- <v-btn
            text
            small
            color="primary"
            class="font-weight-bold body-2"
            @canplay="$scrollTo(`#${nav}`)"
          >
            {{ nav }}
          </v-btn> -->
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem quaerat hic animi, tempore possimus corrupti maiores
            reiciendis obcaecati, architecto suscipit optio earum repellat,
            numquam adipisci magnam. Recusandae, enim voluptatem.
          </div>
        </v-card-text>
        <v-card-text id="Experience">
          <h1>Experience</h1>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            voluptatem quaerat hic animi, tempore possimus corrupti maiores
            reiciendis obcaecati, architecto suscipit optio earum repellat,
            numquam adipisci magnam. Recusandae, enim voluptatem.
          </div>
        </v-card-text>
        <v-card-text id="Projects">
          <h1>Projects</h1>
          <div>
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
