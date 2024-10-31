<template>
  <v-app>
    <v-theme-provider with-background>
      <v-app-bar color="primary" elevation="1" title="RTLW" app>
        <v-btn icon @click="toggleTheme">
          <v-icon class="transition-all" :color="theme.global.current.value.dark ? 'yellow' : 'black'">
            {{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
          </v-icon>
        </v-btn>
      </v-app-bar>
      <!-- <NavigationDrawer /> -->
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-theme-provider>
  </v-app>
</template>

<script lang="ts" setup>
// import NavigationDrawer from '~/components/navigation-drawer.vue';

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
};

</script>