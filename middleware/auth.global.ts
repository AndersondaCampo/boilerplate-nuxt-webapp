export default defineNuxtRouteMiddleware((to, from) => {
  const publicRoutes = ['/auth']

  if (publicRoutes.includes(to.path)) {
    return
  }

  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    to.meta.auth = true
    to.meta.redirect = '/auth'
  }
})
