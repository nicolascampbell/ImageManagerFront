<template>
  <div>
    <side-bar id="sidebar"/>
    <router-view id="view"></router-view>
  </div>
      
</template>

<script>
import sideBar from './components/side-bar.vue'

export default {
  name: 'App',
  components: {
    sideBar
  },

  data(){
    return{

    }
  },
};
</script>
<style scoped>

</style>