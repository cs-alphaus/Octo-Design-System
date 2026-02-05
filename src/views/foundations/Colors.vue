<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Colors</h1>
      <p class="text-body-1 mb-6">
        Octo's complete color system with Material Design 3 integration and automatic light/dark theme support.
        These colors are extracted directly from the working Octo UI application.
      </p>
    </div>

    <!-- Primary Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Primary Colors</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Primary brand colors used throughout the application for key actions and brand identity.
      </p>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <ColorCard
            color="primary"
            title="Primary"
            description="Main brand color for primary actions and emphasis"
            :show-variations="true"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <ColorCard
            color="secondary"
            title="Secondary"
            description="Secondary brand color for supporting actions"
            :show-variations="true"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Semantic Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Semantic Colors</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Semantic colors that convey meaning and status across the application.
      </p>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="color in semanticColors" :key="color.name">
          <ColorCard
            :color="color.name"
            :title="color.title"
            :description="color.description"
            :show-variations="true"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Surface Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Surface Colors</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Background and surface colors that adapt automatically between light and dark themes.
      </p>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="surface in surfaceColors" :key="surface.name">
          <ColorCard
            :color="surface.name"
            :title="surface.title"
            :description="surface.description"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Usage Guidelines -->
    <v-card class="mb-8">
      <v-card-title>Usage Guidelines</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-3">Color Usage Principles</h3>
            <ul class="text-body-2">
              <li><strong>Primary:</strong> Use for main actions, links, and key brand elements</li>
              <li><strong>Secondary:</strong> Use for secondary actions and accents</li>
              <li><strong>Error:</strong> Use for destructive actions, errors, and warnings</li>
              <li><strong>Success:</strong> Use for positive actions and success states</li>
              <li><strong>Warning:</strong> Use for caution and pending states</li>
              <li><strong>Info:</strong> Use for informational content and neutral actions</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-3">Implementation</h3>
            <pre class="text-caption pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ implementationCode }}</pre>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Theme Toggle Demo -->
    <v-card>
      <v-card-title>
        Theme Support
        <v-spacer />
        <v-btn
          :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="text"
          @click="toggleTheme"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        />
      </v-card-title>
      <v-card-text>
        <p class="text-body-2 mb-4">
          All colors automatically adapt between light and dark themes. Toggle the theme to see the colors change dynamically.
        </p>
        <v-row>
          <v-col cols="12" md="6" lg="3" v-for="demo in themeDemoColors" :key="demo">
            <v-chip :color="demo" variant="tonal" class="mb-2 mr-2">{{ demo }}</v-chip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

const semanticColors = [
  {
    name: 'success',
    title: 'Success',
    description: 'Positive actions, confirmations, and success states'
  },
  {
    name: 'warning',
    title: 'Warning',
    description: 'Caution, pending states, and attention-needed items'
  },
  {
    name: 'error',
    title: 'Error',
    description: 'Destructive actions, errors, and critical alerts'
  },
  {
    name: 'info',
    title: 'Info',
    description: 'Informational content and neutral messaging'
  }
]

const surfaceColors = [
  {
    name: 'background',
    title: 'Background',
    description: 'Main application background'
  },
  {
    name: 'surface',
    title: 'Surface',
    description: 'Card and component backgrounds'
  },
  {
    name: 'surface-variant',
    title: 'Surface Variant',
    description: 'Alternative surface for differentiation'
  }
]

const themeDemoColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info']

const implementationCode = `// Using theme colors in components
<v-btn color="primary">Primary Action</v-btn>
<v-chip color="success" variant="tonal">Success</v-chip>
<v-card color="surface">Content</v-card>

// Accessing theme colors programmatically
import { useTheme } from 'vuetify'
const theme = useTheme()
const primaryColor = theme.current.value.colors.primary`
</script>

<script>
// Simple ColorCard component defined inline
const ColorCard = {
  props: {
    color: String,
    title: String,
    description: String,
    showVariations: Boolean
  },
  template: `
    <v-card class="h-100">
      <div class="pa-4">
        <div
          class="color-swatch mb-3 rounded"
          :style="{ backgroundColor: 'rgb(var(--v-theme-' + color + '))' }"
        ></div>
        <h3 class="text-h6 mb-2">{{ title }}</h3>
        <p class="text-body-2 text-medium-emphasis mb-3">{{ description }}</p>
        <v-chip :color="color" variant="tonal" size="small">{{ color }}</v-chip>
      </div>
    </v-card>
  `,
  style: `
    .color-swatch {
      height: 80px;
      width: 100%;
    }
  `
}

export default {
  components: {
    ColorCard
  }
}
</script>

<style scoped>
:deep(.color-swatch) {
  height: 80px;
  width: 100%;
}
</style>