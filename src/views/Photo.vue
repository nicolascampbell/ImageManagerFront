<template>
  <div v-if="photo">
    <form-photo :photo="photo" title="Update Photo"/>
  </div>
</template>

<script>
import Vue from 'vue'
import formPhoto from '../components/form-photo.vue'
import services from '../services'

export default Vue.extend({
  name: 'Photo',
  components: {
    formPhoto
  },
  props:{
    photoid:String
  },
  data(){
    return{
      photo:''
    }
  },
  async created() {
    let response = await services.readPhoto(this.photoid);
    console.log(response.data);
    this.photo = response.data;
  },
});
</script>
