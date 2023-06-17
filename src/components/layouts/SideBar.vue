<template>
  <div id="sidebar">
    <v-navigation-drawer
      class="bg-indigo-lighten-5"
      floating
      permanent>
      <v-list :lines="false" class="pl-5 pr-5">
        <v-icon icon="$vuetify" size="x-large" class="mt-5 mb-5"></v-icon>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
        >
          <v-list-item>{{ item.text }}</v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebar {
  height: 100vh;
}
.sidebar {
  top: 11px;
  left: 10px;
  height: 100%;
  width: 200px;
  background: transparent;
  
  .v-list {
    position: fixed;
    width: 200px;
    background: transparent;
  }
}
</style>