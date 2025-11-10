<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Button</h1>
      <p class="text-h6 text-medium-emphasis">
        Trigger an action or event, such as submitting a form or displaying a dialog.
      </p>
    </div>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        The default size is medium.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Button text="Upload" size="x-small" />
            <Button text="Upload" size="small" />
            <Button text="Upload" />
            <Button text="Upload" size="large" />
            <Button text="Upload" size="x-large" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button text="Upload" size="x-small" /&gt;
&lt;Button text="Upload" size="small" /&gt;
&lt;Button text="Upload" /&gt;
&lt;Button text="Upload" size="large" /&gt;
&lt;Button text="Upload" size="x-large" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Variants Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Variants</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different visual styles for various use cases.
      </p>

      <!-- Variant Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Button text="Elevated" variant="elevated" color="primary" />
            <Button text="Filled" variant="flat" color="primary" />
            <Button text="Tonal" variant="tonal" color="primary" />
            <Button text="Outlined" variant="outlined" color="primary" />
            <Button text="Text" variant="text" color="primary" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button text="Elevated" variant="elevated" color="primary" /&gt;
&lt;Button text="Filled" variant="flat" color="primary" /&gt;
&lt;Button text="Tonal" variant="tonal" color="primary" /&gt;
&lt;Button text="Outlined" variant="outlined" color="primary" /&gt;
&lt;Button text="Text" variant="text" color="primary" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Colors</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Semantic colors for different states and actions.
      </p>

      <!-- Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Button text="Primary" color="primary" variant="flat" />
            <Button text="Secondary" color="secondary" variant="flat" />
            <Button text="Success" color="success" variant="flat" />
            <Button text="Error" color="error" variant="flat" />
            <Button text="Warning" color="warning" variant="flat" />
            <Button text="Info" color="info" variant="flat" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button text="Primary" color="primary" variant="flat" /&gt;
&lt;Button text="Secondary" color="secondary" variant="flat" /&gt;
&lt;Button text="Success" color="success" variant="flat" /&gt;
&lt;Button text="Error" color="error" variant="flat" /&gt;
&lt;Button text="Warning" color="warning" variant="flat" /&gt;
&lt;Button text="Info" color="info" variant="flat" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Icons Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">With Icons</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Buttons can include icons to provide additional context.
      </p>

      <!-- Icon Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Button
              text="Download"
              prepend-icon="mdi-download"
              color="primary"
              variant="flat"
            />
            <Button
              text="Share"
              append-icon="mdi-share"
              color="secondary"
              variant="outlined"
            />
            <Button
              icon="mdi-heart"
              color="error"
              variant="tonal"
              tooltip-text="Like this"
            />
            <Button
              icon="mdi-bookmark"
              color="primary"
              variant="text"
              tooltip-text="Bookmark"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button
  text="Download"
  prepend-icon="mdi-download"
  color="primary"
  variant="flat"
/&gt;

&lt;Button
  text="Share"
  append-icon="mdi-share"
  color="secondary"
  variant="outlined"
/&gt;

&lt;Button
  icon="mdi-heart"
  color="error"
  variant="tonal"
  tooltip-text="Like this"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Responsive Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Responsive Behavior</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Buttons can automatically switch to icon-only at smaller breakpoints.
      </p>

      <!-- Responsive Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Button
              text="Mobile Responsive"
              prepend-icon="mdi-cellphone"
              break-point="sm"
              color="primary"
              variant="flat"
            />
            <Button
              text="Tablet Responsive"
              prepend-icon="mdi-tablet"
              break-point="md"
              color="secondary"
              variant="outlined"
            />
            <Button
              text="Desktop Only"
              prepend-icon="mdi-laptop"
              break-point="lg"
              color="info"
              variant="tonal"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button
  text="Mobile Responsive"
  prepend-icon="mdi-cellphone"
  break-point="sm"
  color="primary"
  variant="flat"
/&gt;

&lt;Button
  text="Tablet Responsive"
  prepend-icon="mdi-tablet"
  break-point="md"
  color="secondary"
  variant="outlined"
/&gt;</code></pre>
          </div>
        </details>
      </div>

      <v-alert type="info" variant="tonal" class="mb-6">
        <v-icon icon="mdi-information" class="mr-2" />
        <strong>Tip:</strong> Resize your browser window to see the responsive behavior in action. Buttons will switch to icon-only mode at the specified breakpoint.
      </v-alert>
    </section>

    <!-- States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Loading and disabled states provide user feedback.
      </p>

      <!-- States Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Button
              text="Loading"
              :loading="loading"
              color="primary"
              variant="flat"
              @click="simulateLoading"
            />
            <Button
              text="Disabled"
              disabled
              color="secondary"
              variant="flat"
            />
            <Button
              text="Block Button"
              block
              color="success"
              variant="flat"
              class="mt-3"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button
  text="Loading"
  :loading="loading"
  color="primary"
  variant="flat"
  @click="simulateLoading"
/&gt;

&lt;Button
  text="Disabled"
  disabled
  color="secondary"
  variant="flat"
/&gt;

&lt;Button
  text="Block Button"
  block
  color="success"
  variant="flat"
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

          <div class="api-row" v-for="prop in buttonProps" :key="prop.name">
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
import { ref } from 'vue'
import { Button } from '@/components'

const loading = ref(false)

const simulateLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const buttonProps = [
  {
    name: 'text',
    type: 'string',
    default: '-',
    description: 'Button text content'
  },
  {
    name: 'icon',
    type: 'string',
    default: '-',
    description: 'Icon name (MDI format)'
  },
  {
    name: 'prependIcon',
    type: 'string',
    default: '-',
    description: 'Icon before text'
  },
  {
    name: 'appendIcon',
    type: 'string',
    default: '-',
    description: 'Icon after text'
  },
  {
    name: 'color',
    type: 'string',
    default: 'secondary',
    description: 'Button color theme'
  },
  {
    name: 'variant',
    type: "'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'",
    default: 'tonal',
    description: 'Visual style variant'
  },
  {
    name: 'size',
    type: "'x-small' | 'small' | 'default' | 'large' | 'x-large'",
    default: 'default',
    description: 'Button size'
  },
  {
    name: 'breakPoint',
    type: "'xs' | 'sm' | 'md' | 'lg'",
    default: '-',
    description: 'Breakpoint for responsive icon switching'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Show loading state'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disable button interaction'
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: 'Make button full width'
  },
  {
    name: 'tooltipText',
    type: 'string',
    default: '-',
    description: 'Custom tooltip text'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>