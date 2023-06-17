<template>
  <div class="home">
    <v-row>
      <v-col>
        
        <div class="mb-10 text-left">
          <h1>Hello, I'm Poonnada.</h1>
          <v-text>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</v-text>
        </div>

        <v-card class="rounded-xl">
          <h3 v-for="i in 20" :key="i" class="mt-10 pa-0">HOME PAGE</h3>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="rounded-xl h-100 bg-indigo-darken-1 pa-5">
          <div class="pl-5 pr-5 pt-5 d-flex justify-center">
            <!-- <v-sheet class="rounded-xl d-flex justify-center"> -->
              <v-img
                :src="require('../assets/cat.png')"
                max-width="220"
                cover></v-img>
            <!-- </v-sheet> -->
          </div>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
