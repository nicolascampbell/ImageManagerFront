<template>
  <div>
    <b-button v-b-toggle.sidebar-backdrop>Menu</b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Menu"
      variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-button-group vertical id="buttonGroup">
          <b-button  variant="dark" to="/">Home</b-button>
          <b-button  variant="light" to="/films">Films</b-button>
          <b-button   variant="dark" to="/photos">Photos</b-button>
        </b-button-group>
        
      </div>
    </b-sidebar>
  </div>
</template>
<style scoped>
#buttonGroup{
  width:100%
}
#buttonGroup>*{
  margin-top:20px;
}
</style>