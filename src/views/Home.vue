<template>
  <v-app>
    <v-container fill-height pa-0 >
      <v-row align-content="center" justify="center" dense>
        <v-col cols="3"><h1>Image Manager</h1></v-col>
      </v-row>
      <v-row justify="center" no-gutters dense>
        <v-col cols="2">
          <div>
            <ol v-if="statistics">
              <li>Films:{{ statistics.film_count }}</li>
              <li>Photos:{{ statistics.photo_count }}</li>
            </ol>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Vue from "vue"
import services from "../services"

export default Vue.extend({
  name: "Home",
  components: {},
  data() {
    return {
      statistics: "",
    }
  },
  async created() {
    let response = await services.getHome()
    this.statistics = response.data
  },
})
</script>
