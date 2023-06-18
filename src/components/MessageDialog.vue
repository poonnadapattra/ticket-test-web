<template>
    <v-fade-transition hide-on-leave>
      <v-card
        v-if="show"
        class="mx-auto"
        elevation="16"
        max-width="300"
      >
        <div class="py-3 pt-5 text-center">
          <v-icon
            v-if="msgType == 'success'"
            class="mb-3"
            color="success"
            icon="mdi-check-circle-outline"
            size="100"
          ></v-icon>
          <v-icon
            v-else-if="msgType == 'error'"
            class="mb-3"
            color="success"
            icon="mdi-alert-circle-outline"
            size="100"
          ></v-icon>

          <div class="text-h4 font-weight-bold">{{ msg }}</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="close"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('baseDialog', {show: 'showMsgDialog', msgType: 'msgType', msg: 'message'})
  }, 
  methods: {
    ...mapActions('baseDialog', ['setShowMsgDialog']),
    close() {
      this.setShowMsgDialog({
        show: false
      })
    }
  }
}
</script>

<style>

</style>