<template>
  <v-card :color="cardDetail.color" class="pa-3">
    <v-row no-gutters>
      <v-col>
        <p class="text-h5">
          {{ data.status.toUpperCase() }}   
        </p>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <p class="text-h4">{{ data.count }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    cardDetail: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>