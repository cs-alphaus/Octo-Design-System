<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Avatar</h1>
      <p class="text-h6 text-medium-emphasis">
        Display user profile images, initials, or icons in a circular container.
      </p>
    </div>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        The default size is medium (40px).
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Avatar initial="JS" size="x-small" />
            <Avatar initial="JS" size="small" />
            <Avatar initial="JS" />
            <Avatar initial="JS" size="large" />
            <Avatar initial="JS" size="x-large" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Avatar initial="JS" size="x-small" /&gt;
&lt;Avatar initial="JS" size="small" /&gt;
&lt;Avatar initial="JS" /&gt;
&lt;Avatar initial="JS" size="large" /&gt;
&lt;Avatar initial="JS" size="x-large" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Types Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Types</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Avatars can display initials, icons, or images.
      </p>

      <!-- Type Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Avatar initial="AB" />
            <Avatar icon="mdi-account" />
            <Avatar image="https://cdn.vuetifyjs.com/images/john.jpg" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Avatar initial="AB" /&gt;
&lt;Avatar icon="mdi-account" /&gt;
&lt;Avatar image="https://cdn.vuetifyjs.com/images/john.jpg" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Colors</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use semantic colors to convey meaning or status.
      </p>

      <!-- Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <Avatar initial="P" color="primary" />
            <Avatar initial="S" color="secondary" />
            <Avatar initial="Su" color="success" />
            <Avatar initial="E" color="error" />
            <Avatar initial="W" color="warning" />
            <Avatar initial="I" color="info" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Avatar initial="P" color="primary" /&gt;
&lt;Avatar initial="S" color="secondary" /&gt;
&lt;Avatar initial="Su" color="success" /&gt;
&lt;Avatar initial="E" color="error" /&gt;
&lt;Avatar initial="W" color="warning" /&gt;
&lt;Avatar initial="I" color="info" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Combined Examples -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Combined Examples</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different combinations of size, type, and color.
      </p>

      <!-- Combined Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <Avatar icon="mdi-account-circle" color="primary" size="large" />
            <Avatar initial="JD" color="success" size="small" />
            <Avatar icon="mdi-star" color="warning" />
            <Avatar initial="AB" color="info" size="x-large" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Avatar icon="mdi-account-circle" color="primary" size="large" /&gt;
&lt;Avatar initial="JD" color="success" size="small" /&gt;
&lt;Avatar icon="mdi-star" color="warning" /&gt;
&lt;Avatar initial="AB" color="info" size="x-large" /&gt;</code></pre>
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

          <div class="api-row" v-for="prop in avatarProps" :key="prop.name">
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
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@/components'

const avatarProps = [
  {
    name: 'initial',
    type: 'string',
    default: '-',
    description: 'Text to display inside avatar'
  },
  {
    name: 'icon',
    type: 'string',
    default: '-',
    description: 'Icon name (MDI format) to display'
  },
  {
    name: 'image',
    type: 'string',
    default: '-',
    description: 'Image URL to display'
  },
  {
    name: 'color',
    type: 'string',
    default: 'surface-light',
    description: 'Background color of avatar'
  },
  {
    name: 'size',
    type: "'x-small' | 'small' | 'default' | 'large' | 'x-large'",
    default: 'default',
    description: 'Size of the avatar'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>