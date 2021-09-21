<template>
  <div>
  <b-card bg-variant="light">
    <b-form @submit="onSubmit">
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
          <b-form-input type="number" v-model="form._id" id="nested-id"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Size:"
          label-for="nested-size"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input v-model="form.size" id="nested-size"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Place:"
          label-for="nested-place"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input v-model="form.place" id="nested-place"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Year:"
          label-for="nested-year"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input v-model="form.year" type="number" id="nested-year"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Description:"
          label-for="nested-description"
          label-cols-sm="3"
          label-align-sm="right"
          class="mb-0"
        >
          <b-form-input v-model="form.description" type="number" id="nested-description"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Photo Cover:"
          label-for="nested-photoCover"
          label-cols-sm="3"
          label-align-sm="right"
          class="mb-0"
        >
          <b-form-input v-model="form.photoCover" type="number" id="nested-photoCover"></b-form-input>
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
            <b-form-input v-model="form.tags.brand" type="text" id="nested-brand"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Type:"
            label-for="nested-type"
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
          >
            <b-form-input v-model="form.tags.type" type="text" id="nested-type"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Iso:"
            label-for="nested-iso"
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
          >
            <b-form-input v-model="form.tags.iso" type="text" id="nested-iso"></b-form-input>
          </b-form-group>
        </b-form-group>
        <div v-for="(photo, index) in form.photos" :key="index">
          <form-photo :photo="updatePhotoIndex" :title="'Create photo'+index" />
        </div>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    {{form}}
  </b-card>
</div>
</template>

<script>
import Vue from 'vue'
import formPhoto from './form-photo.vue'
export default Vue.extend( {
  name:'FormFilm',
  components:{
    formPhoto
  },
  props:{
    film:Object,
    title:String
  },
  data(){
    return{
      form:{
        _id:'',
        size:'',
        year:'',
        place:'',
        description:'',
        tags:{
          brand:'',
          type:'',
          iso:''
        },
        photoCover:'',
        photos:Array.from({length: 5}, (v, i) => i)
      }
    }
  },
  methods:{
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
    },
    updatePhotoIndex(photo, index){
      photo.index=index;
      return photo;
    },
    submitPhotoToFilm(){
      this.$emit("photoSubmited", this.form);
    }
  },
  mounted(){
    if(this.film){
      this.form=this.film;
    }
  },
  updated:{
    updateArrayPhotos(){
      this.form.photos.fill({
        index:'',
        title:'',
        description:'',
        film:'',
        relevance:''
      },0, this.form.size)
      
    }
  }
  

});
</script>

<style>

</style>