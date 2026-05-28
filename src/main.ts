import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// Vendor Icons
import IconAws from './components/icons/IconAws.vue'
import IconGcp from './components/icons/IconGcp.vue'
import IconAzure from './components/icons/IconAzure.vue'

// Global design system styles
import './assets/design-system.css'

// Design tokens - using Octo's exact color system
import { allColors } from './tokens'

// Custom typography system
import { injectTypographyStyles } from './plugins/vuetifyCustomTypography'

// Blueprint
import { md3 } from 'vuetify/blueprints'

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: allColors.light },
      dark: { dark: true, colors: allColors.dark }
    }
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi
    },
    aliases: {
      ...aliases,
      aws: IconAws,
      gcp: IconGcp,
      azure: IconAzure,
      azureea: IconAzure
    }
  },
  defaults: {
    VBtn: {
      color: 'secondary',
      variant: 'tonal',
      elevation: 0,
      class: 'text-none'
    },
    VChip: {
      color: 'primary',
      variant: 'tonal'
    },
    VAvatar: { color: 'grey' },
    VTextField: { color: 'primary', variant: 'outlined' },
    VTextarea: { color: 'primary', variant: 'outlined', noResize: true },
    VSelect: { variant: 'outlined', density: 'comfortable', hideDetails: true },
    VAutocomplete: {
      variant: 'outlined',
      density: 'compact',
      hideDetails: true
    },
    VOverlay: { scrim: 'surface' }
  }
})

// Inject custom typography styles
injectTypographyStyles()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')