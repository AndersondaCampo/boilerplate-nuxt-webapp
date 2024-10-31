import { resolve } from "node:path"
import { md3 } from 'vuetify/blueprints'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'RTLW',
      titleTemplate: '%s | RTLW',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
    },
  },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  components: {
    dirs: [
      '~/components',
    ],
    global: true
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#1976D2',
              secondary: '#424242',
              accent: '#82B1FF',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107'
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: '#2196F3',
              secondary: '#424242',
              accent: '#FF4081',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107'
            },
          },
        }
      },
      blueprint: md3,
      defaults: {
        global: {
          ripple: false
        },
        VTextField: {
          variant: 'outlined',
          density: 'compact',
        },
        VTextarea: {
          variant: 'solo',
        },
        VDataTable: {
          dense: true,
          noDataText: 'Nenhum registro para exibir',
        },
        VSelect: {
          variant: 'solo',
          noDataText: 'Nenhum registro para exibir',
        },
      },
      icons: {
        defaultSet: 'mdi'
      }
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL || 'http://localhost:3000'
    }
  },
  experimental: {
    viewTransition: true,
    componentIslands: true
  },
})
