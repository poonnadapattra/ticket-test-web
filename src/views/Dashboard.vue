<template>
  <div class="">
    <!-- <color-theme></color-theme> -->
    <v-row>
      <v-col class="text-left">
        <p class="text-h3">Management Tickets</p>
      </v-col>
    </v-row>
    <v-row>
      
      <v-col v-for="data, i in ticketStatusList" :key="i">
        <status-card :data="data" :cardDetail="cardDetail[data.status]"/>
      </v-col>
    </v-row>
    <v-btn @click="() => showEditTicketForm = !showEditTicketForm">toggle</v-btn>
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
                    <th class="text-left"></th>
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
                    <td>
                      <v-btn variant="text" icon="mdi-pencil" size="small"></v-btn>
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'
import _ from 'lodash'
import StatusCard from '../components/StatusCard.vue'

export default {
  components: {
    StatusCard,
  },
  data() {
    return {
      moment: moment,
      page: 1,
      size: 10,
      statusList: ['pending', 'accepted', 'resolved', 'rejected'],
      cardDetail: {
        all: {
          color: 'deep-purple-accent-2'
        },
        pending: {
          color: 'orange-lighten-1'
        },
        accepted: {
          color: 'green-lighten-1'
        },
        resolved: {
          color: 'cyan-lighten-3'
        },
        rejected: {
          color: 'pink-lighten-2'
        },
      },
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
      itemsPerPage: 5,
      showEditTicketForm: false
    }
  },
  watch: {
    page(newValue) {
      this.getTicket(newValue, this.size)
    }
  },
  computed: {
    ...mapGetters('tickets', [
      'ticketStatusList',
      'ticketList'
    ]),
    totalTicket() {
      return _.get(this.ticketList, ['pagging', 'total_page'], 1)
    }
  },
  mounted() {
    this.getTicketStatus()
    this.getTicket(1, 10)
  },
  methods: {
    ...mapActions('tickets', [
      'getTicketStatus',
      'getTicketList',
      'updateTicket'
    ]),
    getTicket(page, size) {
      this.getTicketList({page, size})
    },
    selectStatus(id, status) {
      this.updateTicket({id, status}).then(() => {
        this.getTicket(this.page, this.size)
      })
    },
    changePage(v) {
      console.log(v)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>