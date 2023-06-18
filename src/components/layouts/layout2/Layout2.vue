<template>
  <div>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://cdn2.vectorstock.com/i/1000x1000/98/46/yellow-ticket-vector-1269846.jpg"
          title="THE TICKETS"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" class="text-left" active-class="primary" nav>
          <v-list-item prepend-icon="mdi-view-dashboard-edit-outline" title="Dashboard" value="dashboard" :active="true"></v-list-item>
          <!-- <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item> -->
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <slot></slot>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>

<style>

</style>