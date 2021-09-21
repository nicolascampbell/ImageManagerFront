<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="1" >
        <b-button-toolbar  aria-label="Toolbar with button group">
          <b-button-group >
            <b-button  v-b-modal.createPhoto variant="outline-dark">New</b-button>
          </b-button-group>
        </b-button-toolbar>
        <b-modal id="createPhoto">
          <form-photo title="Create Photo" />
        </b-modal>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <list-photo/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import listPhoto from '../components/list-photo.vue'
import formPhoto from '../components/form-photo.vue'

export default Vue.extend({
  name: 'photos',
  components: {
    listPhoto,
    formPhoto
  }
});
</script>
<style scoped>

</style>