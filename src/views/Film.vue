<template>
  <div v-if="film">
    <form-film :film="film" title="Update film"/>
  </div>
</template>

<script>
import Vue from 'vue'
import formFilm from '../components/form-film.vue'
import services from '../services'

export default Vue.extend({
  name: 'Film',
  components: {
    formFilm
  },
  props:{
    filmid:String
  },
  data(){
    return{
      film:''
    }
  },
  async created() {
    let response = await services.readFilm(this.filmid);
    console.log(response.data);
    if(typeof(response.data)!==String){
      this.film = response.data;
    }
  },
});
</script>