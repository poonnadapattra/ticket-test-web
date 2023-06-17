<template>
  <div>
    <!-- <layout-1>
      <div class="pa-10">
        <router-view/>
      </div>
    </layout-1> -->
    <layout-2>
      <div class="pa-10">
        <router-view/>
      </div>
    </layout-2>
  </div>
</template>

<script>
// import Layout1 from './components/layouts/Layout1.vue'
import Layout2 from './components/layouts/layout2/Layout2.vue'

export default {
  components: {
    // Layout1,
    Layout2
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
