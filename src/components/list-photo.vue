<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="7">
        <div v-if="photos">
          <b-table
            striped
            hover
            selectable
            select-mode="single"
            @row-selected="onRowSelected"
            :items="photos">
          </b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
  
</template>
<script>
import Vue from 'vue'

import services from '../services'
export default Vue.extend({
  name:'ListPhoto',
  components:{
  },
  data(){
    return{
      photos:'',
    }
  },
  methods:{
    onRowSelected(item){
      console.log(item[0])
      this.$router.push({name:'Photo', params:{photoid:item[0]._id}})
    }
  },
  async created() {
    let response = await services.getPhotos();
    console.log(response.data);
    this.photos = response.data;
  },

});
</script>

<style>

</style>