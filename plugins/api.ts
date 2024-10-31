export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    credentials: 'include',
    baseURL: config.public.apiUrl,
  });

  return {
    provide: {
      api
    }
  }
});