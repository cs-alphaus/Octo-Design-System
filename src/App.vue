<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar color="surface" elevation="1" height="64">
      <template v-slot:prepend>
        <div class="d-flex align-center ml-6">
          <v-icon size="24" class="mr-3" color="primary">mdi-triangle</v-icon>
          <span class="text-h6 font-weight-bold">Octo Design System</span>
        </div>
      </template>

      <v-spacer />

      <template v-slot:append>
        <div class="d-flex align-center mr-6">
          <v-text-field
            placeholder="Search Octo"
            variant="outlined"
            density="compact"
            prepend-inner-icon="mdi-magnify"
            hide-details
            style="max-width: 300px;"
            class="mr-4"
          />

          <!-- Universal Theme Toggle -->
          <v-btn
            :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="text"
            size="small"
            @click="toggleTheme"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          />
        </div>
      </template>
    </v-app-bar>

    <!-- Navigation Sidebar -->
    <v-navigation-drawer
      permanent
      :width="280"
      color="surface"
      border="0"
      class="design-system-nav"
    >

      <!-- Navigation Menu -->
      <v-list nav density="compact" class="px-4 pt-4">
        <!-- Foundations Section -->
        <v-list-subheader class="text-uppercase text-caption font-weight-bold text-medium-emphasis mb-2">
          Foundations
        </v-list-subheader>

        <v-list-item
          v-for="item in foundationsItems"
          :key="item.path"
          :to="item.path"
          :title="item.title"
          class="mb-1 rounded-lg"
          color="primary"
        />

        <!-- Resources Section -->
        <v-list-subheader class="text-uppercase text-caption font-weight-bold text-medium-emphasis mb-2 mt-6">
          Resources
        </v-list-subheader>

        <v-list-item
          v-for="item in resourceItems"
          :key="item.path"
          :title="item.title"
          :prepend-icon="item.icon"
          class="mb-1 rounded-lg"
          color="primary"
          @click="item.action"
        />

        <!-- Components Section -->
        <v-list-subheader class="text-uppercase text-caption font-weight-bold text-medium-emphasis mb-2 mt-6">
          Components
        </v-list-subheader>

        <v-list-item
          v-for="item in componentItems"
          :key="item.path"
          :to="item.path"
          :title="item.title"
          class="mb-1 rounded-lg"
          color="primary"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <div class="main-content">
        <router-view />
      </div>
    </v-main>

    <!-- Snackbar for notifications -->
    <v-snackbar v-model="snackbar" :timeout="2000">
      {{ snackbarText }}
    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const snackbar = ref(false)
const snackbarText = ref('')

// Navigation items
const foundationsItems = [
  { title: 'Introduction', path: '/foundations/introduction' },
  { title: 'Colors', path: '/foundations/colors' },
  { title: 'Typography', path: '/foundations/typography' },
  { title: 'Spacing', path: '/foundations/spacing' }
]

const resourceItems = [
  {
    title: 'Octo UI Repository',
    icon: 'mdi-github',
    action: () => window.open('https://github.com/alphauslabs/octo-ui', '_blank')
  }
]

const componentItems = [
  { title: 'Avatar', path: '/components/avatar' },
  { title: 'Breadcrumbs', path: '/components/breadcrumbs' },
  { title: 'Button', path: '/components/button' },
  { title: 'Calendar', path: '/components/calendar' },
  { title: 'Chip', path: '/components/chip' },
  { title: 'Color Card', path: '/components/color-card' },
  { title: 'Copy Button', path: '/components/copy-button' },
  { title: 'Dialog', path: '/components/dialog' },
  { title: 'Empty State', path: '/components/empty-state' },
  { title: 'Icon Button', path: '/components/icon-button' },
  { title: 'Info Card', path: '/components/info-card' },
  { title: 'Label Value', path: '/components/label-value' },
  { title: 'Loading Overlay', path: '/components/loading-overlay' },
  { title: 'Menu', path: '/components/menu' },
  { title: 'Search Input', path: '/components/search-input' },
  { title: 'Title', path: '/components/title' }
]

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

// Global notification function
window.showNotification = (message: string) => {
  snackbarText.value = message
  snackbar.value = true
}
</script>

<style scoped>
.design-system-nav {
  border-right: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
}

:deep(.v-list-item) {
  border-radius: 8px !important;
}

:deep(.v-list-item--active) {
  background: rgba(var(--v-theme-primary), 0.1) !important;
}

:deep(.v-list-item__prepend > .v-icon) {
  opacity: 0.6;
}
</style>