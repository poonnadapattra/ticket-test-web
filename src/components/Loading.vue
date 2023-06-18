<template>
  <v-overlay
      :model-value="show"
      class="align-center justify-center"
    >
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('baseDialog', {show: 'showLoading'})
  }, 
  // methods: {
  //   ...mapActions('baseDialog', ['setShowLoading'])
  // }
}
</script>

<style>

</style>