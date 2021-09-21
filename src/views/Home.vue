<template>
    <b-container >
      <b-row align-h="center" align-v="center">
        <b-col cols="3"><h1>Image Manager</h1></b-col>
      </b-row>
      <b-row style="min-height:500px;" align-v="center" align-h="center">
        <b-col cols="2">
          <div>
            <ol b-if="statistics">
              <li>Films:{{ statistics.film_count }}</li>
              <li>Photos:{{ statistics.photo_count }}</li>
            </ol>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
