<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Title</h1>
      <p class="text-h6 text-medium-emphasis">
        Flexible title component with subtitle and customizable styling options.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple title with optional subtitle.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <Title title="Page Title" />
            <Title title="Section Title" subtitle="A brief description of this section" />
            <Title title="Component Demo" subtitle="Interactive examples and documentation" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Title title="Page Title" /&gt;

&lt;Title
  title="Section Title"
  subtitle="A brief description of this section"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different text sizes to establish information hierarchy.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <Title title="Small Title" subtitle="Small size text" small />
            <Title title="Default Title" subtitle="Default size text" />
            <Title title="Large Title" subtitle="Large size text" large />
            <Title title="Extra Large Title" subtitle="Extra large size text" x-large />
            <Title title="Extra Extra Large" subtitle="Maximum size text" xx-large />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Title title="Small Title" small /&gt;
&lt;Title title="Default Title" /&gt;
&lt;Title title="Large Title" large /&gt;
&lt;Title title="Extra Large Title" x-large /&gt;
&lt;Title title="Extra Extra Large" xx-large /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Font Weights Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Font Weights</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Control the visual emphasis with different font weights.
      </p>

      <!-- Weight Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <Title title="Light Title" subtitle="Light weight text" light />
            <Title title="Regular Title" subtitle="Default weight text" />
            <Title title="Medium Bold Title" subtitle="Medium weight text" medium-bold />
            <Title title="Bold Title" subtitle="Bold weight text" bold />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Title title="Light Title" light /&gt;
&lt;Title title="Regular Title" /&gt;
&lt;Title title="Medium Bold Title" medium-bold /&gt;
&lt;Title title="Bold Title" bold /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- With Actions Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">With Actions</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Add action buttons or other content using slots.
      </p>

      <!-- Actions Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-6">
            <Title title="User Management" subtitle="Manage user accounts and permissions">
              <template #append>
                <v-btn color="primary" variant="flat" size="small">
                  <v-icon start icon="mdi-plus" />
                  Add User
                </v-btn>
              </template>
            </Title>

            <Title title="Project Settings" subtitle="Configure project parameters">
              <template #append>
                <div class="d-flex gap-2">
                  <IconButton icon="mdi-refresh" tooltip-text="Refresh" />
                  <IconButton icon="mdi-cog" tooltip-text="Settings" />
                </div>
              </template>
            </Title>

            <Title title="Dashboard" subtitle="Overview of key metrics">
              <template #append>
                <Menu
                  :items="dashboardActions"
                  activator-icon="mdi-dots-vertical"
                  @select="handleAction"
                />
              </template>
            </Title>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Title title="User Management" subtitle="Manage users"&gt;
  &lt;template #append&gt;
    &lt;v-btn color="primary" variant="flat" size="small"&gt;
      &lt;v-icon start icon="mdi-plus" /&gt;
      Add User
    &lt;/v-btn&gt;
  &lt;/template&gt;
&lt;/Title&gt;

&lt;Title title="Project Settings"&gt;
  &lt;template #append&gt;
    &lt;div class="d-flex gap-2"&gt;
      &lt;IconButton icon="mdi-refresh" tooltip-text="Refresh" /&gt;
      &lt;IconButton icon="mdi-cog" tooltip-text="Settings" /&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/Title&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Custom Content Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Custom Content</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use slots for complex titles with icons, badges, or custom content.
      </p>

      <!-- Custom Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-6">
            <Title>
              <template #prepend>
                <v-icon icon="mdi-star" color="warning" class="mr-3" />
              </template>
              <template #default>
                <span>Featured Project</span>
                <v-chip size="small" color="success" variant="tonal" class="ml-2">
                  New
                </v-chip>
              </template>
              <template #subtitle>
                <div class="d-flex align-center gap-2">
                  <span>Last updated 2 hours ago</span>
                  <v-chip size="x-small" color="primary" variant="outlined">
                    v2.1.0
                  </v-chip>
                </div>
              </template>
            </Title>

            <Title>
              <template #prepend-title>
                <v-avatar size="24" class="mr-2">
                  <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                </v-avatar>
              </template>
              <template #default>John Doe's Profile</template>
              <template #append-title>
                <v-chip size="small" color="success" variant="tonal">
                  Online
                </v-chip>
              </template>
              <template #subtitle>
                Senior Developer • Last seen 5 minutes ago
              </template>
            </Title>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Title&gt;
  &lt;template #prepend&gt;
    &lt;v-icon icon="mdi-star" color="warning" class="mr-3" /&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;span&gt;Featured Project&lt;/span&gt;
    &lt;v-chip size="small" color="success" class="ml-2"&gt;New&lt;/v-chip&gt;
  &lt;/template&gt;
  &lt;template #subtitle&gt;
    &lt;div class="d-flex align-center gap-2"&gt;
      &lt;span&gt;Last updated 2 hours ago&lt;/span&gt;
      &lt;v-chip size="x-small" color="primary"&gt;v2.1.0&lt;/v-chip&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/Title&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Layout Control Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Layout Control</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Control spacing and padding of title elements.
      </p>

      <!-- Layout Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <div>
              <h4 class="text-subtitle-1 mb-2">No bottom margin</h4>
              <Title title="Compact Title" subtitle="No space below" no-bottom-margin />
              <p class="text-body-2 mb-0">This text appears right after the title.</p>
            </div>

            <div class="mt-4">
              <h4 class="text-subtitle-1 mb-2">No right padding</h4>
              <Title title="Full Width Title" no-right-padding />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Title
  title="Compact Title"
  subtitle="No space below"
  no-bottom-margin
/&gt;

&lt;Title
  title="Full Width Title"
  no-right-padding
/&gt;</code></pre>
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

          <div class="api-row" v-for="prop in titleProps" :key="prop.name">
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

          <div class="api-row" v-for="slot in titleSlots" :key="slot.name">
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
import { Title, IconButton, Menu } from '@/components'

// Example data
const dashboardActions = [
  { title: 'Refresh', value: 'refresh', icon: 'mdi-refresh' },
  { title: 'Export', value: 'export', icon: 'mdi-download' },
  { title: 'Settings', value: 'settings', icon: 'mdi-cog' }
]

const handleAction = (action: string) => {
  console.log('Action selected:', action)
}

const titleProps = [
  {
    name: 'title',
    type: 'string | number',
    default: '-',
    description: 'Main title text'
  },
  {
    name: 'subtitle',
    type: 'string | number',
    default: '-',
    description: 'Subtitle text'
  },
  {
    name: 'light',
    type: 'boolean',
    default: 'false',
    description: 'Apply light text color'
  },
  {
    name: 'bold',
    type: 'boolean',
    default: 'false',
    description: 'Apply bold font weight'
  },
  {
    name: 'mediumBold',
    type: 'boolean',
    default: 'false',
    description: 'Apply medium font weight'
  },
  {
    name: 'small',
    type: 'boolean',
    default: 'false',
    description: 'Use small text size'
  },
  {
    name: 'large',
    type: 'boolean',
    default: 'false',
    description: 'Use large text size (h6)'
  },
  {
    name: 'xLarge',
    type: 'boolean',
    default: 'false',
    description: 'Use extra large text size (h5)'
  },
  {
    name: 'xxLarge',
    type: 'boolean',
    default: 'false',
    description: 'Use extra extra large text size (h4)'
  },
  {
    name: 'noBottomMargin',
    type: 'boolean',
    default: 'false',
    description: 'Remove bottom margin from component'
  },
  {
    name: 'noRightPadding',
    type: 'boolean',
    default: 'false',
    description: 'Remove right padding from title'
  }
]

const titleSlots = [
  {
    name: 'default',
    props: '-',
    description: 'Main title content (overrides title prop)'
  },
  {
    name: 'subtitle',
    props: '-',
    description: 'Subtitle content (overrides subtitle prop)'
  },
  {
    name: 'prepend',
    props: '-',
    description: 'Content before the entire title block'
  },
  {
    name: 'prepend-title',
    props: '-',
    description: 'Content before the title text'
  },
  {
    name: 'append-title',
    props: '-',
    description: 'Content after the title text'
  },
  {
    name: 'append',
    props: '-',
    description: 'Content at the end (typically actions)'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>