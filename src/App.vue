<template>
  <v-app>
  <v-navigation-drawer app permanent >
    <!-- -->
  </v-navigation-drawer>
  
  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid no-gutters pa-0>
      <router-view></router-view>
    </v-container>
  </v-main>

</v-app>

</template>

<script>


export default {
  name: 'App',
  components: {
  },

  data(){
    return{

    }
  },
};
</script>
