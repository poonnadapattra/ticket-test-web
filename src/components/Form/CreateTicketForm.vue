<template>
  <v-card min-width="500">
    <v-card-title class="pl-8 pt-5">
      <h3>Create Ticket</h3>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" fast-fail>
        <v-text-field
          v-model="dataTicket.title"
          label="Title"
          :rules="validation.title"
        ></v-text-field>

        <v-text-field
          v-model="dataTicket.description"
          label="Descroption"
          :rules="validation.description"
        ></v-text-field>

        <v-select
          label="Status"
          v-model="dataTicket.status"
          :items="statusList"
          :bg-color="(cardDetail[dataTicket.status]||{}).color"
          :rules="validation.status"
        ></v-select>

        <v-select
          label="Contact"
          v-model="dataTicket.contact_id"
          :items="contactList"
          item-title="name"
          item-value="ID"
          :rules="validation.contact_id"
        ></v-select>
      </v-form>
    </v-card-text>
    <v-card-actions class="pl-8 pr-8 pt-0 d-flex justify-end">
      <v-btn @click="close">
        Cancel
      </v-btn>
      <v-btn variant="flat" color="primary" @click="validate">
        Create
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    dataTicket: {
      title: '',
      description: '',
      status: 'pending',
      contact_id: '',
    },
  }),
  computed: {
    ...mapGetters('tickets', [
      'statusList',
      'cardDetail'
    ]),
    ...mapGetters('contacts', [
      'contactList',
    ]),
    validation() {
      return {
        title: [
          value => this.isNotEmpty(value),
        ],
        description: [
          value => this.isNotEmpty(value),
        ],
        status: [
          value => this.isNotEmpty(value),
        ],
        contact_id: [
          value => this.isNotEmpty(value),
        ],
      }
    }
  },
  methods: {
    isNotEmpty(value) {
      if (value != '') return true
      return 'This field is required.'
    },
    async validate() {
      const { valid } = await this.$refs.form.validate()
      if (valid) {
        this.$emit('submit', this.dataTicket)
        this.reset()
        this.resetValidation()
        this.close()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    close() {
      this.$emit('close', null)
    }
  },
}
</script>

<style>

</style>