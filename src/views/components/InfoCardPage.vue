<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Info Card</h1>
      <p class="text-h6 text-medium-emphasis">
        Display information with an icon, title, and customizable content area.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple info card with icon, title, and content slot.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <InfoCard
              title="User Information"
              icon="mdi-account"
              icon-color="primary"
            >
              <template #content>
                <p class="text-body-2 mb-0">
                  This card displays user-related information with a clean, organized layout.
                </p>
              </template>
            </InfoCard>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;InfoCard
  title="User Information"
  icon="mdi-account"
  icon-color="primary"
&gt;
  &lt;template #content&gt;
    &lt;p&gt;This card displays user-related information.&lt;/p&gt;
  &lt;/template&gt;
&lt;/InfoCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Icon Colors Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Icon Colors</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use semantic colors for icons to convey meaning and context.
      </p>

      <!-- Icon Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <InfoCard
              title="Success Message"
              icon="mdi-check-circle"
              icon-color="success"
            >
              <template #content>
                <p class="text-body-2 mb-0">
                  Operation completed successfully.
                </p>
              </template>
            </InfoCard>

            <InfoCard
              title="Warning Notice"
              icon="mdi-alert"
              icon-color="warning"
            >
              <template #content>
                <p class="text-body-2 mb-0">
                  Please review this information carefully.
                </p>
              </template>
            </InfoCard>

            <InfoCard
              title="Error Details"
              icon="mdi-alert-circle"
              icon-color="error"
            >
              <template #content>
                <p class="text-body-2 mb-0">
                  An error occurred while processing your request.
                </p>
              </template>
            </InfoCard>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;InfoCard
  title="Success Message"
  icon="mdi-check-circle"
  icon-color="success"
&gt;
  &lt;template #content&gt;
    &lt;p&gt;Operation completed successfully.&lt;/p&gt;
  &lt;/template&gt;
&lt;/InfoCard&gt;

&lt;InfoCard
  title="Warning Notice"
  icon="mdi-alert"
  icon-color="warning"
&gt;
  &lt;template #content&gt;
    &lt;p&gt;Please review this information carefully.&lt;/p&gt;
  &lt;/template&gt;
&lt;/InfoCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different sizes for title text to establish information hierarchy.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <InfoCard
              title="Small Card Title"
              icon="mdi-information"
              icon-color="info"
              size="small"
            >
              <template #content>
                <p class="text-body-2 mb-0">
                  This card uses a smaller title size for secondary information.
                </p>
              </template>
            </InfoCard>

            <InfoCard
              title="Large Card Title"
              icon="mdi-star"
              icon-color="warning"
              size="large"
            >
              <template #content>
                <p class="text-body-2 mb-0">
                  This card uses a larger title size for important information.
                </p>
              </template>
            </InfoCard>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;InfoCard
  title="Small Card Title"
  icon="mdi-information"
  icon-color="info"
  size="small"
&gt;
  &lt;template #content&gt;
    &lt;p&gt;Secondary information content.&lt;/p&gt;
  &lt;/template&gt;
&lt;/InfoCard&gt;

&lt;InfoCard
  title="Large Card Title"
  icon="mdi-star"
  icon-color="warning"
  size="large"
&gt;
  &lt;template #content&gt;
    &lt;p&gt;Important information content.&lt;/p&gt;
  &lt;/template&gt;
&lt;/InfoCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Rich Content Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Rich Content</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        The content slot supports any Vue content including lists, actions, and other components.
      </p>

      <!-- Rich Content Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <InfoCard
            title="System Status"
            icon="mdi-server"
            icon-color="success"
          >
            <template #content>
              <div class="d-flex flex-column gap-2">
                <div class="d-flex align-center justify-space-between">
                  <span class="text-body-2">CPU Usage</span>
                  <v-chip size="small" color="success" variant="tonal">45%</v-chip>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <span class="text-body-2">Memory</span>
                  <v-chip size="small" color="warning" variant="tonal">78%</v-chip>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <span class="text-body-2">Storage</span>
                  <v-chip size="small" color="info" variant="tonal">60%</v-chip>
                </div>
                <div class="mt-2">
                  <v-btn size="small" variant="outlined" color="primary">
                    View Details
                  </v-btn>
                </div>
              </div>
            </template>
          </InfoCard>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;InfoCard
  title="System Status"
  icon="mdi-server"
  icon-color="success"
&gt;
  &lt;template #content&gt;
    &lt;div class="d-flex flex-column gap-2"&gt;
      &lt;div class="d-flex align-center justify-space-between"&gt;
        &lt;span&gt;CPU Usage&lt;/span&gt;
        &lt;v-chip size="small" color="success"&gt;45%&lt;/v-chip&gt;
      &lt;/div&gt;
      &lt;div class="mt-2"&gt;
        &lt;v-btn size="small" variant="outlined"&gt;View Details&lt;/v-btn&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/InfoCard&gt;</code></pre>
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

          <div class="api-row" v-for="prop in infoCardProps" :key="prop.name">
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

          <div class="api-row" v-for="slot in infoCardSlots" :key="slot.name">
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
import { InfoCard } from '@/components'

const infoCardProps = [
  {
    name: 'title',
    type: 'string',
    default: '-',
    description: 'Card title text'
  },
  {
    name: 'icon',
    type: 'string',
    default: '-',
    description: 'Icon name (MDI format)'
  },
  {
    name: 'iconColor',
    type: 'string',
    default: '-',
    description: 'Color of the icon'
  },
  {
    name: 'size',
    type: "'small' | 'large'",
    default: 'default',
    description: 'Size of the title text'
  }
]

const infoCardSlots = [
  {
    name: 'content',
    props: '-',
    description: 'Main content area of the card'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>