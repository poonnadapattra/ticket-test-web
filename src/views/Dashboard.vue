<template>
  <div>
    <v-row>
      <v-col class="text-left">
        <p class="text-h3">Management Tickets</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="end">
        <v-btn
          variant="outlined"
          color="primary"
          @click="createTicketDialog = true" >
          <v-icon start icon="mdi-plus"></v-icon>
          Create Ticket
        </v-btn>
      </v-col>
    </v-row>
    <v-row align="end" class="mt-0">
      <v-col v-for="data, i in ticketStatusList" :key="i">
        <v-sheet @click="selectTicketStatus(data.status)">
          <status-card 
            :data="data" 
            :cardDetail="cardDetail[data.status]"
            :selected="data.status == selectedStatus"/>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row no-gutters>
            <v-col>
              <v-table hover>
                <thead>
                  <tr>
                    <th class="text-left">Created Date</th>
                    <th class="text-left">Updated Date</th>
                    <th class="text-left">Titile</th>
                    <th class="text-left">Description</th>
                    <th class="text-left">Contact</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in ticketList.data"
                    :key="item.id"
                  >
                    <td class="text-left">{{ moment(item.created_date).format('DD-MM-YYYY hh:mm:ss') }}</td>
                    <td class="text-left">{{ moment(item.updated_date).format('DD-MM-YYYY hh:mm:ss') }} </td>
                    <td class="text-left">{{ item.title }}</td>
                    <td class="text-left">{{ item.description }}</td>
                    <td class="text-left">{{ item.contact }}</td>
                    <td cols="1" class="text-center">
                      <v-menu>
                        <template v-slot:activator="{ props }">
                          <v-btn
                            :color="cardDetail[item.status].color"
                            v-bind="props"
                            size="small"
                            rounded="xl"
                          >
                            {{ item.status }}
                          </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(s) in statusList"
                              :key="s"
                              :value="s"
                              @click="selectStatus(item.id, s)"
                              v-show="s != item.status">
                              <v-list-item-title>
                                <span :class="'text-'+cardDetail[s].color">{{ s }}</span>
                              </v-list-item-title>
                            </v-list-item>
                        </v-list>
                      </v-menu>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="d-flex flex-row-reverse">
              <v-pagination 
                v-model="page" 
                :length="totalTicket" 
                :total-visible="4" 
                @first="changePage"
                @last="changePage"
                @prev="changePage"
                @next="changePage"
                size="small"></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-fade-transition v-show="showEditTicketForm">
        <v-col cols="3">
          <v-card>{{moment().format('MMMM Do YYYY, h:mm:ss a')}}</v-card>
        </v-col>
      </v-fade-transition>
    </v-row>

    <v-dialog
      v-model="createTicketDialog"
      width="auto"
    >
      <create-ticket-form
        @submit="submitCreateTicket"
        @close="closeCreateTicketDialog" />
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'
import _ from 'lodash'
import StatusCard from '../components/StatusCard.vue'
import CreateTicketForm from '../components/Form/CreateTicketForm.vue'

export default {
  components: {
    StatusCard,
    CreateTicketForm
  },
  data() {
    return {
      moment: moment,
      page: 1,
      size: 10,
      headers: [
        {
          title: 'title',
          align: 'start',
          sortable: false,
          key: 'title',
        },
        { title: 'Description', key: 'description' },
        { title: 'Status', key: 'status' },
      ],
      showEditTicketForm: false,
      createTicketDialog: false,
      selectedStatus: 'all'
    }
  },
  watch: {
    page(newValue) {
      this.getTicket({page: newValue, size: this.size})
    }
  },
  computed: {
    ...mapGetters('tickets', [
      'ticketStatusList',
      'ticketList',
      'statusList',
      'cardDetail'
    ]),
    totalTicket() {
      return _.get(this.ticketList, ['pagging', 'total_page'], 1)
    }
  },
  mounted() {
    this.getTicketStatus()
    this.getTicket({page: 1, size: 10})
  },
  methods: {
    ...mapActions('tickets', [
      'getTicketStatus',
      'getTicketList',
      'updateTicket',
      'createTicket'
    ]),
    getTicket(params) {
      this.getTicketList(params)
    },
    selectStatus(id, status) {
      this.updateTicket({id, status}).then(() => {
        this.getTicket({page: this.page, size: this.size})
      })
    },
    submitCreateTicket(data) {
      this.createTicket(data)
    },
    closeCreateTicketDialog() {
      this.createTicketDialog = false
    },
    selectTicketStatus(status) {
      this.selectedStatus = status
      const payload = {page: 1, size: this.size, status}
      console.log('payload:', payload)
      this.getTicket(payload)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>