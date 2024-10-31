import { useCookie } from 'nuxt/app';
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useCookie('token').value ?? null,
    refreshToken: useCookie('refreshToken').value ?? null,
    user: useCookie('user').value ?? null,
  }),
  getters: {
    isAuthenticated(): boolean {
      return !!this.token
    },
    isRefreshTokenExpired() {
      if (!this.refreshToken) return true
      try {
        const { exp } = JSON.parse(atob(this.refreshToken.split('.')[1]))
        return Date.now() >= exp * 1000
      } catch (e) {
        return true
      }
    },
  },
  actions: {
    async sendMagicLink({ email }: { email: string }) {
      try {
        const res = await useAPI<any>('/auth/send-magic-link', {
          method: 'POST',
          body: { email },
        });

        console.log(res)
        if (res.status.value !== 'success') {
          return false;
        }

        return true;
      } catch (e) {
        console.error(e)
      }
    },
    async validateToken({ email, token }: { email: string, token: string }) {
      try {
        const res = await useAPI<any>('/auth/validate-token', {
          method: 'POST',
          body: { email, token },
        });

        console.log(res)
        if (res.status.value !== 'success') {
          return false;
        }

        return true;
      } catch (e) {
        console.error(e)
      }
    }
  },
})