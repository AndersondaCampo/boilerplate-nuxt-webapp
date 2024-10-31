<template>
  <v-container class="flex w-full h-full justify-center items-center">
    <!-- glass effect transparent background -->
    <v-card class="w-full max-w-lg p-4">
      <v-card-title>
        <v-icon>mdi-account-circle</v-icon>
        <span class="ml-2">{{ isLogin ? 'Login' : 'Register' }}</span>
      </v-card-title>
      <v-card-text class="flex flex-col space-y-4">
        <AuthLoginForm v-if="isLogin" />
        <AuthRegisterForm v-else />
      </v-card-text>
      <v-card-actions class="justify-center space-x-4">
        <v-btn v-if="!isLogin" @click="isLogin = true">Já tem uma conta?</v-btn>
        <v-btn v-else @click="isLogin = false">Ainda não tem uma conta?</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>

definePageMeta({
  title: 'Auth',
  layout: 'guest-only'
});

const isLogin = ref(true);

</script>

<style>

</style>