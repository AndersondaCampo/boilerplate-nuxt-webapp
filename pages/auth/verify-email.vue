<template>
  <div>
    <h1 class="text-2xl font-bold text-black text-center">Validando email...</h1>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  title: 'Validating email',
  layout: 'guest-only'
});


const route = useRoute();
const router = useRouter();

const token = route.query.token as string;
const email = route.query.email as string;
const loading = ref(true);
const authStore = useAuthStore();
authStore.validateToken({ email, token }).then(() => {
  router.push('/');
}).catch(() => {
  router.push({ name: 'login' });
}).finally(() => {
  loading.value = false;
});

</script>

<style>

</style>