<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Loading Overlay</h1>
      <p class="text-h6 text-medium-emphasis">
        Full-screen or contained loading overlay with spinner and optional text.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple loading overlay with customizable size and color.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="position-relative" style="height: 200px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
            <div class="pa-4">
              <h4 class="text-h6 mb-2">Content Area</h4>
              <p class="text-body-2 mb-4">This content will be covered by the loading overlay.</p>
              <v-btn @click="basicLoading = true" color="primary" variant="flat">
                Show Loading
              </v-btn>
            </div>

            <LoadingOverlay v-model="basicLoading" />
          </div>

          <!-- Auto-hide after 3 seconds -->
          <div v-if="basicLoading" class="text-caption text-medium-emphasis mt-2">
            Loading will automatically hide after 3 seconds...
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;div class="position-relative"&gt;
  &lt;!-- Your content --&gt;
  &lt;div class="pa-4"&gt;
    &lt;h4&gt;Content Area&lt;/h4&gt;
    &lt;v-btn @click="showLoading"&gt;Show Loading&lt;/v-btn&gt;
  &lt;/div&gt;

  &lt;!-- Loading overlay --&gt;
  &lt;LoadingOverlay v-model="loading" /&gt;
&lt;/div&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different spinner sizes for various contexts.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4">
            <div
              v-for="size in sizes"
              :key="size.value"
              class="position-relative flex-1"
              style="height: 150px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;"
            >
              <div class="pa-3 text-center">
                <p class="text-body-2 mb-2">{{ size.label }}</p>
                <v-btn size="small" @click="showSizeDemo(size.value)" variant="outlined">
                  Demo
                </v-btn>
              </div>

              <LoadingOverlay v-model="sizeLoading[size.value]" :size="size.value" />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LoadingOverlay v-model="loading" size="32" /&gt;
&lt;LoadingOverlay v-model="loading" size="64" /&gt;
&lt;LoadingOverlay v-model="loading" size="96" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- With Text Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">With Text</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Add descriptive text below the spinner.
      </p>

      <!-- Text Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="position-relative" style="height: 200px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
            <div class="pa-4">
              <h4 class="text-h6 mb-2">Processing Data</h4>
              <p class="text-body-2 mb-4">Click below to see loading with text.</p>
              <v-btn @click="textLoading = true" color="success" variant="flat">
                Process Data
              </v-btn>
            </div>

            <LoadingOverlay v-model="textLoading" text="Processing your data..." />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LoadingOverlay
  v-model="loading"
  text="Processing your data..."
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Colors</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different colors to match your application theme.
      </p>

      <!-- Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-3 flex-wrap">
            <div
              v-for="color in colors"
              :key="color.name"
              class="position-relative"
              style="width: 120px; height: 120px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;"
            >
              <div class="pa-2 text-center">
                <p class="text-caption mb-1">{{ color.name }}</p>
                <v-btn size="x-small" @click="showColorDemo(color.value)" variant="text">
                  Demo
                </v-btn>
              </div>

              <LoadingOverlay v-model="colorLoading[color.value]" :color="color.value" size="40" />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LoadingOverlay v-model="loading" color="primary" /&gt;
&lt;LoadingOverlay v-model="loading" color="success" /&gt;
&lt;LoadingOverlay v-model="loading" color="warning" /&gt;
&lt;LoadingOverlay v-model="loading" color="error" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Full Screen Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Full Screen</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Global loading overlay that covers the entire viewport.
      </p>

      <!-- Full Screen Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4 align-center">
            <v-btn @click="fullScreenLoading = true" color="info" variant="flat">
              Show Full Screen Loading
            </v-btn>
            <span class="text-body-2 text-medium-emphasis">
              (Will auto-hide after 3 seconds)
            </span>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LoadingOverlay
  v-model="loading"
  :contained="false"
  text="Loading application..."
  size="80"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Common Use Cases</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Real-world scenarios where loading overlays are most effective.
      </p>

      <!-- Use Cases Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <!-- Form Submission -->
            <div class="position-relative pa-4" style="border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
              <h4 class="text-h6 mb-3">Form Submission</h4>
              <div class="d-flex gap-3 align-center">
                <v-text-field
                  label="Email"
                  variant="outlined"
                  density="compact"
                  style="max-width: 250px;"
                />
                <v-btn @click="formLoading = true" :disabled="formLoading" color="primary">
                  {{ formLoading ? 'Saving...' : 'Save' }}
                </v-btn>
              </div>

              <LoadingOverlay v-model="formLoading" text="Saving your changes..." size="48" />
            </div>

            <!-- Data Loading -->
            <div class="position-relative pa-4" style="border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
              <h4 class="text-h6 mb-3">Data Table</h4>
              <div class="d-flex justify-space-between align-center mb-3">
                <span class="text-body-2">User Management</span>
                <v-btn @click="dataLoading = true" size="small" variant="outlined" :disabled="dataLoading">
                  {{ dataLoading ? 'Loading...' : 'Refresh Data' }}
                </v-btn>
              </div>
              <div class="text-body-2 text-medium-emphasis">
                Table content would be here...
              </div>

              <LoadingOverlay v-model="dataLoading" text="Loading user data..." />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Form Submission --&gt;
&lt;div class="position-relative"&gt;
  &lt;form @submit="handleSubmit"&gt;
    &lt;!-- Form fields --&gt;
  &lt;/form&gt;

  &lt;LoadingOverlay
    v-model="submitting"
    text="Saving your changes..."
    size="48"
  /&gt;
&lt;/div&gt;

&lt;!-- Data Loading --&gt;
&lt;div class="position-relative"&gt;
  &lt;data-table :items="users" /&gt;

  &lt;LoadingOverlay
    v-model="loading"
    text="Loading user data..."
  /&gt;
&lt;/div&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-12">
      <h2 class="text-h4 mb-6">API Reference</h2>

      <!-- Props Table -->
      <div class="api-section">
        <h3 class="text-h5 mb-4">Props</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Prop</div>
            <div class="api-col">Type</div>
            <div class="api-col">Default</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="prop in loadingOverlayProps" :key="prop.name">
            <div class="api-col">
              <code>{{ prop.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ prop.type }}</span>
            </div>
            <div class="api-col">
              <span class="api-default">{{ prop.default || '-' }}</span>
            </div>
            <div class="api-col">{{ prop.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Loading Overlays -->
    <LoadingOverlay v-model="fullScreenLoading" :contained="false" text="Loading application..." size="80" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { LoadingOverlay } from '@/components'

// Component state
const basicLoading = ref(false)
const textLoading = ref(false)
const fullScreenLoading = ref(false)
const formLoading = ref(false)
const dataLoading = ref(false)

// Size demo state
const sizeLoading = ref({
  32: false,
  64: false,
  96: false
})

// Color demo state
const colorLoading = ref({
  primary: false,
  success: false,
  warning: false,
  error: false,
  info: false,
  secondary: false
})

// Demo data
const sizes = [
  { label: 'Small (32px)', value: 32 },
  { label: 'Medium (64px)', value: 64 },
  { label: 'Large (96px)', value: 96 }
]

const colors = [
  { name: 'Primary', value: 'primary' },
  { name: 'Success', value: 'success' },
  { name: 'Warning', value: 'warning' },
  { name: 'Error', value: 'error' },
  { name: 'Info', value: 'info' },
  { name: 'Secondary', value: 'secondary' }
]

// Demo functions
const showSizeDemo = (size: number) => {
  sizeLoading.value[size] = true
  setTimeout(() => {
    sizeLoading.value[size] = false
  }, 2000)
}

const showColorDemo = (color: string) => {
  colorLoading.value[color] = true
  setTimeout(() => {
    colorLoading.value[color] = false
  }, 2000)
}

// Auto-hide demonstrations
watch(basicLoading, (val) => {
  if (val) {
    setTimeout(() => {
      basicLoading.value = false
    }, 3000)
  }
})

watch(textLoading, (val) => {
  if (val) {
    setTimeout(() => {
      textLoading.value = false
    }, 3000)
  }
})

watch(fullScreenLoading, (val) => {
  if (val) {
    setTimeout(() => {
      fullScreenLoading.value = false
    }, 3000)
  }
})

watch(formLoading, (val) => {
  if (val) {
    setTimeout(() => {
      formLoading.value = false
    }, 2500)
  }
})

watch(dataLoading, (val) => {
  if (val) {
    setTimeout(() => {
      dataLoading.value = false
    }, 2000)
  }
})

const loadingOverlayProps = [
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'false',
    description: 'Controls overlay visibility (v-model)'
  },
  {
    name: 'size',
    type: 'string | number',
    default: '64',
    description: 'Size of the loading spinner in pixels'
  },
  {
    name: 'color',
    type: 'string',
    default: 'primary',
    description: 'Color of the loading spinner'
  },
  {
    name: 'text',
    type: 'string',
    default: '-',
    description: 'Optional text to display below spinner'
  },
  {
    name: 'contained',
    type: 'boolean',
    default: 'true',
    description: 'Whether overlay is contained within parent'
  },
  {
    name: 'persistent',
    type: 'boolean',
    default: 'true',
    description: 'Prevent closing overlay by clicking outside'
  },
  {
    name: 'opacity',
    type: 'number',
    default: '-',
    description: 'Custom opacity for the overlay background'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>