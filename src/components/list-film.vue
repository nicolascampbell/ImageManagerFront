<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="7">
        <div v-if="films">
          <b-table
            striped
            hover
            selectable
            select-mode="single"
            @row-selected="onRowSelected"
            :items="films">
          </b-table>
        </div>
      </b-col>
    </b-row>
  </b-container>
  
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name:'ListFilm',
  components:{
  },
  props:{
    films:Array
  },
  methods:{
    onRowSelected(item){
      console.log(item[0])
      this.$router.push({name:'Film', params:{filmid:item[0]._id}})
    }
  },
  

});
</script>

<style>

</style>