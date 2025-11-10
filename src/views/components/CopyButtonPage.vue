<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Copy Button</h1>
      <p class="text-h6 text-medium-emphasis">
        Copy text to clipboard with visual feedback and tooltip confirmation.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple copy button with customizable text and visual feedback.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <CopyButton text="Hello, World!" />
            <CopyButton text="Copy this text" label="Copy Text" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;CopyButton text="Hello, World!" /&gt;
&lt;CopyButton text="Copy this text" label="Copy Text" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Icon Button Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Icon Button</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Icon-only variant for compact layouts and inline usage.
      </p>

      <!-- Icon Button Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <CopyButton text="API Key: sk-1234567890" icon-button />
            <CopyButton text="User ID: 12345" icon-button icon-size="small" />
            <CopyButton text="Token: abc123xyz" icon-button icon-size="default" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;CopyButton text="API Key: sk-1234567890" icon-button /&gt;
&lt;CopyButton text="User ID: 12345" icon-button icon-size="small" /&gt;
&lt;CopyButton text="Token: abc123xyz" icon-button icon-size="default" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Practical Examples Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Practical Examples</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Real-world usage patterns with different content types.
      </p>

      <!-- Practical Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <!-- Code snippet -->
            <div class="d-flex align-center justify-space-between pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">
              <code class="text-body-2">npm install @octo/design-system</code>
              <CopyButton text="npm install @octo/design-system" icon-button />
            </div>

            <!-- API endpoint -->
            <div class="d-flex align-center justify-space-between pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">
              <code class="text-body-2">https://api.example.com/v1/users</code>
              <CopyButton text="https://api.example.com/v1/users" icon-button />
            </div>

            <!-- Hash/ID -->
            <div class="d-flex align-center justify-space-between pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">
              <code class="text-body-2">7f8a3b2e1c9d4f6e8a5b2c3d4e5f6789</code>
              <CopyButton text="7f8a3b2e1c9d4f6e8a5b2c3d4e5f6789" icon-button />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Code snippet --&gt;
&lt;div class="d-flex align-center justify-space-between"&gt;
  &lt;code&gt;npm install @octo/design-system&lt;/code&gt;
  &lt;CopyButton text="npm install @octo/design-system" icon-button /&gt;
&lt;/div&gt;

&lt;!-- API endpoint --&gt;
&lt;div class="d-flex align-center justify-space-between"&gt;
  &lt;code&gt;https://api.example.com/v1/users&lt;/code&gt;
  &lt;CopyButton text="https://api.example.com/v1/users" icon-button /&gt;
&lt;/div&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Interactive States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Click any copy button to see the feedback animation and tooltip.
      </p>

      <v-alert type="info" variant="tonal" class="mb-6">
        <v-icon icon="mdi-information" class="mr-2" />
        <strong>Tip:</strong> Click the buttons above to test the copy functionality. You'll see the tooltip change to "Copied!" for visual feedback.
      </v-alert>
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

          <div class="api-row" v-for="prop in copyButtonProps" :key="prop.name">
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
      <div class="api-section mb-6">
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
import { CopyButton } from '@/components'

const copyButtonProps = [
  {
    name: 'text',
    type: 'string | number',
    default: '-',
    description: 'Text to copy to clipboard'
  },
  {
    name: 'iconButton',
    type: 'boolean',
    default: 'false',
    description: 'Show as icon-only button'
  },
  {
    name: 'iconSize',
    type: 'string',
    default: 'x-small',
    description: 'Size of the icon when using icon button'
  },
  {
    name: 'label',
    type: 'string',
    default: 'Copy',
    description: 'Button text label'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>