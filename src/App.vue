<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app>
        <p>
          <router-link to="/">Pesanan</router-link>
        </p>
        <p>
          <router-link to="/orders">Create Order</router-link>
        </p>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>
