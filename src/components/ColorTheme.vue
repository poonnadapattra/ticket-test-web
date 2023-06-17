<template>
  <div class="mb-5">
    <v-row>
      <v-card v-for="data, i in colors" :key="i" :color="'#'+data.hex" class="pl-3 pr-3 pt-2 pb-2 mr-3">
        {{ data.name }} <br/>
        {{ data.hex }}
      </v-card>
    </v-row>
    <v-row>
      <v-card v-for="data in defaultColor" :key="data" :color="data" class="pl-3 pr-3 pt-2 pb-2 mr-3">
        {{ data }}
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        {"name":"Neon blue","hex":"6366FA"},
        {"name":"Lavender (web)","hex":"F1EEFF"},
        {"name":"Lavender blush","hex":"F5E4ED"},
        {"name":"Pale azure","hex":"74D6FB"},
        {"name":"Sunset","hex":"FED081"},
        {"name":"Persian pink","hex":"FF8EC2"}],
      defaultColor: [
        'deep-purple-accent-2', 'cyan-lighten-3', 'light-blue-lighten-3', 'green-lighten-1', 'orange-lighten-3', 'pink-lighten-2'
      ]
    }
  }
}
</script>

<style>

</style>