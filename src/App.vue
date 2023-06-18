<template>
  <div>
    
    <layout-2>
      <div class="pa-10">
        <router-view/>
      </div>
    </layout-2>
    
    <loading />
    <message-dialog />
    
  </div>
</template>

<script>
import Layout2 from './components/layouts/layout2/Layout2.vue'
import Loading from './components/Loading.vue'
import MessageDialog from './components/MessageDialog.vue'

export default {
  data: () => ({
    overlay: true
  }),
  components: {
    Layout2,
    Loading,
    MessageDialog
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
