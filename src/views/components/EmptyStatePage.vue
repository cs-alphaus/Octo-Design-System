<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Empty State</h1>
      <p class="text-h6 text-medium-emphasis">
        Display when there's no content to show, with icon, message, and optional actions.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple empty state with icon and message.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div style="height: 300px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
            <EmptyState
              icon="mdi-inbox"
              message="No items found"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;EmptyState
  icon="mdi-inbox"
  message="No items found"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Different Icons Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Different Scenarios</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Various empty states for different contexts.
      </p>

      <!-- Different Icons Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4">
            <div class="flex-1" style="height: 200px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
              <EmptyState
                icon="mdi-magnify"
                icon-color="info"
                message="No search results"
                icon-size="80"
              />
            </div>
            <div class="flex-1" style="height: 200px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
              <EmptyState
                icon="mdi-cloud-off"
                icon-color="warning"
                message="No internet connection"
                icon-size="80"
              />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;EmptyState
  icon="mdi-magnify"
  icon-color="info"
  message="No search results"
  icon-size="80"
/&gt;

&lt;EmptyState
  icon="mdi-cloud-off"
  icon-color="warning"
  message="No internet connection"
  icon-size="80"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- With Actions Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">With Actions</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Include action buttons to guide users on next steps.
      </p>

      <!-- With Actions Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div style="height: 300px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
            <EmptyState
              icon="mdi-file-plus"
              icon-color="success"
              message="No documents yet"
            >
              <template #actions>
                <v-btn color="primary" variant="flat" class="mr-2">
                  Create Document
                </v-btn>
                <v-btn color="secondary" variant="outlined">
                  Import Files
                </v-btn>
              </template>
            </EmptyState>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;EmptyState
  icon="mdi-file-plus"
  icon-color="success"
  message="No documents yet"
&gt;
  &lt;template #actions&gt;
    &lt;v-btn color="primary" variant="flat"&gt;
      Create Document
    &lt;/v-btn&gt;
    &lt;v-btn color="secondary" variant="outlined"&gt;
      Import Files
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/EmptyState&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Custom Content Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Custom Content</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use slots for custom icons, messages, and content.
      </p>

      <!-- Custom Content Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div style="height: 350px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
            <EmptyState>
              <template #icon>
                <div class="mb-4">
                  <v-avatar size="120" color="primary" variant="tonal">
                    <v-icon icon="mdi-rocket" size="60" color="primary" />
                  </v-avatar>
                </div>
              </template>
              <template #message>
                <div class="text-center">
                  <h3 class="text-h5 mb-2">Get Started</h3>
                  <p class="text-body-1 text-medium-emphasis mb-0">
                    Welcome! Create your first project to begin your journey.
                  </p>
                </div>
              </template>
              <template #actions>
                <v-btn color="primary" variant="flat" size="large" class="mt-2">
                  <v-icon start icon="mdi-plus" />
                  Create Project
                </v-btn>
              </template>
            </EmptyState>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;EmptyState&gt;
  &lt;template #icon&gt;
    &lt;div class="mb-4"&gt;
      &lt;v-avatar size="120" color="primary" variant="tonal"&gt;
        &lt;v-icon icon="mdi-rocket" size="60" color="primary" /&gt;
      &lt;/v-avatar&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;template #message&gt;
    &lt;div class="text-center"&gt;
      &lt;h3 class="text-h5 mb-2"&gt;Get Started&lt;/h3&gt;
      &lt;p class="text-body-1 text-medium-emphasis"&gt;
        Welcome! Create your first project.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;template #actions&gt;
    &lt;v-btn color="primary" variant="flat" size="large"&gt;
      &lt;v-icon start icon="mdi-plus" /&gt;
      Create Project
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/EmptyState&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Common Use Cases Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Common Use Cases</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Real-world examples for different application scenarios.
      </p>

      <!-- Use Cases Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-6">
            <!-- Data Tables -->
            <div>
              <h4 class="text-h6 mb-3">Data Table</h4>
              <div style="height: 200px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
                <EmptyState
                  icon="mdi-table"
                  icon-size="60"
                  message="No data available"
                >
                  <template #actions>
                    <v-btn color="primary" variant="text" size="small">
                      Refresh Data
                    </v-btn>
                  </template>
                </EmptyState>
              </div>
            </div>

            <!-- Error State -->
            <div>
              <h4 class="text-h6 mb-3">Error State</h4>
              <div style="height: 200px; border: 1px dashed rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
                <EmptyState
                  icon="mdi-alert-circle"
                  icon-color="error"
                  icon-size="60"
                  message="Failed to load content"
                >
                  <template #actions>
                    <v-btn color="error" variant="outlined" size="small">
                      Try Again
                    </v-btn>
                  </template>
                </EmptyState>
              </div>
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Data Table --&gt;
&lt;EmptyState
  icon="mdi-table"
  icon-size="60"
  message="No data available"
&gt;
  &lt;template #actions&gt;
    &lt;v-btn color="primary" variant="text" size="small"&gt;
      Refresh Data
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/EmptyState&gt;

&lt;!-- Error State --&gt;
&lt;EmptyState
  icon="mdi-alert-circle"
  icon-color="error"
  icon-size="60"
  message="Failed to load content"
&gt;
  &lt;template #actions&gt;
    &lt;v-btn color="error" variant="outlined"&gt;
      Try Again
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/EmptyState&gt;</code></pre>
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

          <div class="api-row" v-for="prop in emptyStateProps" :key="prop.name">
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

      <!-- Slots Table -->
      <div class="api-section">
        <h3 class="text-h5 mb-4">Slots</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Slot</div>
            <div class="api-col">Props</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="slot in emptyStateSlots" :key="slot.name">
            <div class="api-col">
              <code>{{ slot.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ slot.props || '-' }}</span>
            </div>
            <div class="api-col">{{ slot.description }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { EmptyState } from '@/components'

const emptyStateProps = [
  {
    name: 'icon',
    type: 'string',
    default: '-',
    description: 'Icon name (MDI format) to display'
  },
  {
    name: 'iconColor',
    type: 'string',
    default: 'primary',
    description: 'Color of the icon'
  },
  {
    name: 'iconSize',
    type: 'string | number',
    default: '160',
    description: 'Size of the icon in pixels'
  },
  {
    name: 'message',
    type: 'string',
    default: '-',
    description: 'Message text to display'
  },
  {
    name: 'height',
    type: 'string',
    default: '-',
    description: 'Fixed height for the container'
  },
  {
    name: 'autoHeight',
    type: 'boolean',
    default: 'false',
    description: 'Auto-calculate height based on viewport'
  },
  {
    name: 'heightToExclude',
    type: 'number[]',
    default: '[]',
    description: 'Heights to subtract when using autoHeight'
  }
]

const emptyStateSlots = [
  {
    name: 'default',
    props: '-',
    description: 'Default content slot'
  },
  {
    name: 'icon',
    props: '-',
    description: 'Custom icon content'
  },
  {
    name: 'message',
    props: '-',
    description: 'Custom message content'
  },
  {
    name: 'actions',
    props: '-',
    description: 'Action buttons or other interactive elements'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>