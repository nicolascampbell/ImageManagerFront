<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="1" >
        <b-button-toolbar  aria-label="Toolbar with button group">
          <b-button-group >
            <b-button v-b-modal.createFilm variant="outline-dark">New</b-button>
          </b-button-group>
        </b-button-toolbar>
        <b-modal v-if="films.length!=0" id="createFilm" size="xl">
          <form-film title="Create Film" :filmId="films[films.length-1]._id+1" />
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <list-film :films="films"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import listFilm from '../components/list-film.vue'
import formFilm from '../components/form-film.vue'
import services from '../services'

export default Vue.extend({
  name: 'Films',
  components: {
    listFilm,
    formFilm
  },
  data(){
    return{
      films:[]
    }
  },
  async created() {
    let response = await services.getFilms();
    console.log(response.data);
    this.films = response.data;
  },
});
</script>
