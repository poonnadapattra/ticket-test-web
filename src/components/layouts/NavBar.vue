<template>
  <v-app-bar 
    elevation="0" 
    scroll-behavior="hide"
    height="90"
    class="bg-indigo-lighten-5">
    
      <v-spacer></v-spacer>
      <!-- <v-app-bar-title 
        class="text-left font-italic font-weight-medium header">Introduce</v-app-bar-title> -->

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
  </v-app-bar>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.header {
  font-size: 18pt;
}
</style>