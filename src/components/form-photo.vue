<template>
  <div>
    <b-card bg-variant="light">
      <b-form>
        <b-form-group
          label-cols-lg="3"
          :label="'Photo ' + photo.index"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="Index:"
            label-for="nested-index"
            label-cols-sm="3"
            label-align-sm="right"
          >
            {{ form.index }}
          </b-form-group>

          <b-form-group
            label="Title:"
            label-for="nested-title"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input v-model="form.title" id="nested-title"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Description:"
            label-for="nested-description"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input
              v-model="form.description"
              id="nested-description"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Film:"
            label-for="nested-film"
            label-cols-sm="3"
            label-align-sm="right"
          >
            {{form.film}}
          </b-form-group>

          <b-form-group
            label="Relevance:"
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              class="pt-2"
              v-model="form.relevance"
              :options="[0, 1, 2, 3, 4]"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue"
export default Vue.extend({
  name: "FormPhoto",
  props: {
    photo: Object,
  },
  data() {
    return {
      form: {
        index: "",
        title: "",
        description: "",
        film: "",
        relevance: "",
      },
    }
  },
  mounted() {
    if (this.photo) {
      this.form = this.photo
    }
  },
})
</script>

<style>
</style>