<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="1" >
        <b-button-toolbar  aria-label="Toolbar with button group">
          <b-button-group >
            <b-button v-b-modal.createFilm variant="outline-dark">New</b-button>
          </b-button-group>
        </b-button-toolbar>
        <b-modal id="createFilm">
          <form-film title="Create Film" />
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <list-film/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import listFilm from '../components/list-film.vue'
import formFilm from '../components/form-film.vue'
export default Vue.extend({
  name: 'Films',
  components: {
    listFilm,
    formFilm
  }
});
</script>
