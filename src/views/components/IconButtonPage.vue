<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Icon Button</h1>
      <p class="text-h6 text-medium-emphasis">
        Icon-only button with optional tooltip for compact action triggers.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple icon buttons for common actions.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <IconButton icon="mdi-heart" />
            <IconButton icon="mdi-bookmark" />
            <IconButton icon="mdi-share" />
            <IconButton icon="mdi-download" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;IconButton icon="mdi-heart" /&gt;
&lt;IconButton icon="mdi-bookmark" /&gt;
&lt;IconButton icon="mdi-share" /&gt;
&lt;IconButton icon="mdi-download" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different sizes for various UI contexts.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <IconButton icon="mdi-cog" size="x-small" />
            <IconButton icon="mdi-cog" size="small" />
            <IconButton icon="mdi-cog" />
            <IconButton icon="mdi-cog" size="large" />
            <IconButton icon="mdi-cog" size="x-large" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;IconButton icon="mdi-cog" size="x-small" /&gt;
&lt;IconButton icon="mdi-cog" size="small" /&gt;
&lt;IconButton icon="mdi-cog" /&gt;
&lt;IconButton icon="mdi-cog" size="large" /&gt;
&lt;IconButton icon="mdi-cog" size="x-large" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Variants Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Variants</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different visual styles for various emphasis levels.
      </p>

      <!-- Variant Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <IconButton icon="mdi-plus" variant="elevated" color="primary" />
            <IconButton icon="mdi-plus" variant="flat" color="primary" />
            <IconButton icon="mdi-plus" variant="tonal" color="primary" />
            <IconButton icon="mdi-plus" variant="outlined" color="primary" />
            <IconButton icon="mdi-plus" variant="text" color="primary" />
            <IconButton icon="mdi-plus" variant="plain" color="primary" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;IconButton icon="mdi-plus" variant="elevated" color="primary" /&gt;
&lt;IconButton icon="mdi-plus" variant="flat" color="primary" /&gt;
&lt;IconButton icon="mdi-plus" variant="tonal" color="primary" /&gt;
&lt;IconButton icon="mdi-plus" variant="outlined" color="primary" /&gt;
&lt;IconButton icon="mdi-plus" variant="text" color="primary" /&gt;
&lt;IconButton icon="mdi-plus" variant="plain" color="primary" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Colors</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Semantic colors for different actions and states.
      </p>

      <!-- Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <IconButton icon="mdi-check" variant="tonal" color="success" />
            <IconButton icon="mdi-close" variant="tonal" color="error" />
            <IconButton icon="mdi-alert" variant="tonal" color="warning" />
            <IconButton icon="mdi-information" variant="tonal" color="info" />
            <IconButton icon="mdi-star" variant="tonal" color="primary" />
            <IconButton icon="mdi-cog" variant="tonal" color="secondary" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;IconButton icon="mdi-check" variant="tonal" color="success" /&gt;
&lt;IconButton icon="mdi-close" variant="tonal" color="error" /&gt;
&lt;IconButton icon="mdi-alert" variant="tonal" color="warning" /&gt;
&lt;IconButton icon="mdi-information" variant="tonal" color="info" /&gt;
&lt;IconButton icon="mdi-star" variant="tonal" color="primary" /&gt;
&lt;IconButton icon="mdi-cog" variant="tonal" color="secondary" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Tooltips Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">With Tooltips</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Add tooltips to provide context for icon actions.
      </p>

      <!-- Tooltip Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <IconButton
              icon="mdi-heart"
              tooltip-text="Add to favorites"
              variant="text"
              color="error"
            />
            <IconButton
              icon="mdi-bookmark"
              tooltip-text="Bookmark this item"
              variant="text"
              color="primary"
            />
            <IconButton
              icon="mdi-share"
              tooltip-text="Share with others"
              tooltip-location="bottom"
              variant="text"
              color="success"
            />
            <IconButton
              icon="mdi-download"
              tooltip-text="Download file"
              tooltip-location="left"
              variant="text"
              color="info"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;IconButton
  icon="mdi-heart"
  tooltip-text="Add to favorites"
  variant="text"
  color="error"
/&gt;

&lt;IconButton
  icon="mdi-share"
  tooltip-text="Share with others"
  tooltip-location="bottom"
  variant="text"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Loading and disabled states for different interaction scenarios.
      </p>

      <!-- State Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <IconButton
              icon="mdi-refresh"
              :loading="loading"
              variant="tonal"
              color="primary"
              tooltip-text="Refresh data"
              @click="simulateLoading"
            />
            <IconButton
              icon="mdi-delete"
              disabled
              variant="tonal"
              color="error"
              tooltip-text="Delete (disabled)"
            />
            <IconButton
              icon="mdi-edit"
              variant="tonal"
              color="secondary"
              tooltip-text="Edit item"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;IconButton
  icon="mdi-refresh"
  :loading="loading"
  variant="tonal"
  color="primary"
  @click="handleRefresh"
/&gt;

&lt;IconButton
  icon="mdi-delete"
  disabled
  variant="tonal"
  color="error"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Practical Examples Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Practical Examples</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Common usage patterns in application interfaces.
      </p>

      <!-- Practical Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-6">
            <!-- Toolbar Example -->
            <div>
              <h4 class="text-h6 mb-3">Toolbar Actions</h4>
              <div class="d-flex align-center gap-2 pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">
                <IconButton icon="mdi-menu" tooltip-text="Menu" />
                <v-spacer />
                <IconButton icon="mdi-magnify" tooltip-text="Search" />
                <IconButton icon="mdi-filter" tooltip-text="Filter" />
                <IconButton icon="mdi-dots-vertical" tooltip-text="More options" />
              </div>
            </div>

            <!-- Card Actions Example -->
            <div>
              <h4 class="text-h6 mb-3">Card Actions</h4>
              <v-card class="pa-4" variant="tonal">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <h5 class="text-h6">Document Title</h5>
                    <p class="text-body-2 text-medium-emphasis mb-0">Last modified 2 hours ago</p>
                  </div>
                  <div class="d-flex gap-1">
                    <IconButton icon="mdi-eye" size="small" tooltip-text="Preview" />
                    <IconButton icon="mdi-pencil" size="small" tooltip-text="Edit" />
                    <IconButton icon="mdi-download" size="small" tooltip-text="Download" />
                    <IconButton icon="mdi-delete" size="small" tooltip-text="Delete" color="error" />
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Toolbar Actions --&gt;
&lt;div class="d-flex align-center gap-2"&gt;
  &lt;IconButton icon="mdi-menu" tooltip-text="Menu" /&gt;
  &lt;v-spacer /&gt;
  &lt;IconButton icon="mdi-magnify" tooltip-text="Search" /&gt;
  &lt;IconButton icon="mdi-filter" tooltip-text="Filter" /&gt;
  &lt;IconButton icon="mdi-dots-vertical" tooltip-text="More options" /&gt;
&lt;/div&gt;

&lt;!-- Card Actions --&gt;
&lt;div class="d-flex gap-1"&gt;
  &lt;IconButton icon="mdi-eye" size="small" tooltip-text="Preview" /&gt;
  &lt;IconButton icon="mdi-pencil" size="small" tooltip-text="Edit" /&gt;
  &lt;IconButton icon="mdi-delete" size="small" color="error" /&gt;
&lt;/div&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-12">
      <h2 class="text-h4 mb-6">API Reference</h2>

      <!-- Props Table -->
      <div class="api-section mb-6">
        <h3 class="text-h5 mb-4">Props</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Prop</div>
            <div class="api-col">Type</div>
            <div class="api-col">Default</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="prop in iconButtonProps" :key="prop.name">
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

      <!-- Events Table -->
      <div class="api-section">
        <h3 class="text-h5 mb-4">Events</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Event</div>
            <div class="api-col">Payload</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row">
            <div class="api-col">
              <code>click</code>
            </div>
            <div class="api-col">
              <span class="api-type">MouseEvent</span>
            </div>
            <div class="api-col">Emitted when button is clicked</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconButton } from '@/components'

const loading = ref(false)

const simulateLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const iconButtonProps = [
  {
    name: 'icon',
    type: 'string',
    default: '-',
    description: 'Icon name (MDI format) - required'
  },
  {
    name: 'size',
    type: "'x-small' | 'small' | 'default' | 'large' | 'x-large'",
    default: 'default',
    description: 'Size of the button'
  },
  {
    name: 'color',
    type: 'string',
    default: '-',
    description: 'Button color theme'
  },
  {
    name: 'variant',
    type: "'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'",
    default: 'text',
    description: 'Visual style variant'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Show loading spinner'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disable button interaction'
  },
  {
    name: 'tooltipText',
    type: 'string',
    default: '-',
    description: 'Tooltip text to display'
  },
  {
    name: 'tooltipLocation',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: 'top',
    description: 'Tooltip position'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>