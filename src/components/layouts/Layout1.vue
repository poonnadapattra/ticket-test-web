<template>
  <div id="layout-1">
    <v-layout class="bg-indigo-lighten-5">
      <side-bar></side-bar>
      <v-main class="pt-20 pb-20">
        <nav-bar></nav-bar>
        <slot></slot>

        <div class="h-10"></div>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
import NavBar from './NavBar.vue'

export default {
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
</style>