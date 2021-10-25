<template>
  <div>
    <b-card bg-variant="light">
      <b-form >
        <b-row no-gutters>
          <b-col md="6">
            <b-card-body :title="title">
              <b-form-group
                label-cols-lg="3"
                :label="title"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-group
                  label="Id:"
                  label-for="nested-id"
                  label-cols-sm="3"
                  label-align-sm="right"
                >
                  <b-form-input
                    type="number"
                    v-model="form._id"
                    id="nested-id"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Size:"
                  label-for="nested-size"
                  label-cols-sm="3"
                  label-align-sm="right"
                >
                  <b-form-input type="number" v-model="size" id="nested-size"></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Place:"
                  label-for="nested-place"
                  label-cols-sm="3"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model="form.place"
                    id="nested-place"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Year:"
                  label-for="nested-year"
                  label-cols-sm="3"
                  label-align-sm="right"
                >
                  <b-form-input
                    v-model="form.year"
                    type="number"
                    id="nested-year"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Description:"
                  label-for="nested-description"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-0"
                >
                  <b-form-input
                    v-model="form.description"
                    id="nested-description"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Photo Cover:"
                  label-for="nested-photoCover"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-0"
                >
                  <b-form-input
                    v-model="form.photoCover"
                    type="number"
                    id="nested-photoCover"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Tags:"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-0"
                >
                  <b-form-group
                    label="Brand:"
                    label-for="nested-brand"
                    label-cols-sm="3"
                    label-align-sm="right"
                    class="mb-0"
                  >
                    <b-form-input
                      v-model="form.tags.brand"
                      type="text"
                      id="nested-brand"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Type:"
                    label-for="nested-type"
                    label-cols-sm="3"
                    label-align-sm="right"
                    class="mb-0"
                  >
                    <b-form-input
                      v-model="form.tags.type"
                      type="text"
                      id="nested-type"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Iso:"
                    label-for="nested-iso"
                    label-cols-sm="3"
                    label-align-sm="right"
                    class="mb-0"
                  >
                    <b-form-input
                      v-model="form.tags.iso"
                      type="text"
                      id="nested-iso"
                    ></b-form-input>
                  </b-form-group>
                </b-form-group>
              </b-form-group>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <div v-for="(photo, index) in form.photos" :key="index">
              <form-photo :photo="updatePhotoIndex(photo, index)" />
            </div>
            <b-button @click="addPhoto()"></b-button>
          </b-col>
        </b-row>
        <b-button @click="onSubmit" variant="primary">Submit</b-button>
      </b-form>
      {{ form }}
    </b-card>
  </div>
</template>

<script>
import Vue from "vue"
import formPhoto from "./form-photo.vue"
import services from '../services'

export default Vue.extend({
  name: "FormFilm",
  components: {
    formPhoto,
  },
  props: {
    film: Object,
    title: String,
    filmId: Number,
  },
  data() {
    return {
      size: 0,
      form: {
        _id: this.filmId,
        size: 0,
        year: 2020,
        place: "Barcelona",
        description: "Hoals",
        tags: {
          brand: "kodak",
          type: "bw",
          iso: "400",
        },
        photoCover: 1,
        photos: [],
      },
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log('Starting to send to api from form component')
      let response = await services.createFilm(this.form) ;
      console.log(response.data);
    },
    updatePhotoIndex(photo, index) {
      photo.index = index + 1
      return photo
    },
    addPhoto() {
      this.form.photos.push({
        index: this.form.photos.length,
        title: "",
        description: "",
        relevance: 0,
        film: this.form._id,
      })
      this.size++
    },
  },
  mounted() {
    if (this.film) {
      this.form = this.film
    }
  },
  watch: {
    size: function (newSize, oldSize) {
      if (newSize != oldSize) {
        this.form.size = parseInt(newSize);
        let newPhotos = new Array(newSize)
        for (let i = 0; i < newSize; i++) {
          if (i < oldSize) {
            newPhotos[i] = this.form.photos[i]
          } else {
            newPhotos[i] = {
              index: i + 1,
              title: "",
              description: "",
              relevance: 0,
              film: this.form._id,
            }
          }
        }
        this.form.photos = newPhotos
      }
    },
  },
})
</script>

<style>
</style>