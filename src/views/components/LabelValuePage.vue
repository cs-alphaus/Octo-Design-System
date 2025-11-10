<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Label Value</h1>
      <p class="text-h6 text-medium-emphasis">
        Display label-value pairs with flexible styling and layout options.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple label-value display for showing data pairs.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <LabelValue label="Name" value="John Doe" />
            <LabelValue label="Email" value="john.doe@example.com" />
            <LabelValue label="Status" value="Active" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LabelValue label="Name" value="John Doe" /&gt;
&lt;LabelValue label="Email" value="john.doe@example.com" /&gt;
&lt;LabelValue label="Status" value="Active" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Label Styles Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Label Styles</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Customize label appearance with different style options.
      </p>

      <!-- Label Style Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <LabelValue label="Default Label" value="Regular style" />
            <LabelValue label="Bold Label" value="Emphasized label" bold-label />
            <LabelValue label="Light Label" value="Subtle label style" light-label />
            <LabelValue label="Small Label" value="Compact text size" small-label />
            <LabelValue label="Large Label" value="Prominent label" large-label />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LabelValue label="Default Label" value="Regular style" /&gt;
&lt;LabelValue label="Bold Label" value="Emphasized label" bold-label /&gt;
&lt;LabelValue label="Light Label" value="Subtle label style" light-label /&gt;
&lt;LabelValue label="Small Label" value="Compact text size" small-label /&gt;
&lt;LabelValue label="Large Label" value="Prominent label" large-label /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Value Styles Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Value Styles</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Style values independently from labels for better hierarchy.
      </p>

      <!-- Value Style Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <LabelValue label="Total Amount" value="$1,234.56" bold-value />
            <LabelValue label="Description" value="Additional information text" light-value />
            <LabelValue label="Code" value="ABC-123" small-value />
            <LabelValue label="Title" value="Important Document" large-value />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LabelValue label="Total Amount" value="$1,234.56" bold-value /&gt;
&lt;LabelValue label="Description" value="Additional information text" light-value /&gt;
&lt;LabelValue label="Code" value="ABC-123" small-value /&gt;
&lt;LabelValue label="Title" value="Important Document" large-value /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Empty States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Empty States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Handle missing or empty values gracefully.
      </p>

      <!-- Empty State Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <LabelValue label="Optional Field" value="" />
            <LabelValue label="Not Provided" :value="undefined" />
            <LabelValue label="Hidden Value" no-value />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LabelValue label="Optional Field" value="" /&gt;
&lt;LabelValue label="Not Provided" :value="undefined" /&gt;
&lt;LabelValue label="Hidden Value" no-value /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Slots Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Custom Content</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use slots for complex labels or values with rich content.
      </p>

      <!-- Slots Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <LabelValue>
              <template #label>
                <div class="d-flex align-center">
                  <v-icon icon="mdi-account" size="small" class="mr-1" />
                  <span>User Name</span>
                </div>
              </template>
              <template #default>
                <v-chip size="small" color="success" variant="tonal">
                  Admin User
                </v-chip>
              </template>
            </LabelValue>

            <LabelValue label="Actions">
              <template #default>
                <div class="d-flex gap-2">
                  <v-btn size="small" variant="outlined" color="primary">Edit</v-btn>
                  <v-btn size="small" variant="outlined" color="error">Delete</v-btn>
                </div>
              </template>
            </LabelValue>

            <LabelValue>
              <template #prepend-label>
                <v-icon icon="mdi-star" color="warning" size="small" class="mr-2" />
              </template>
              <template #label>
                <span>Rating</span>
              </template>
              <template #append-label>
                <v-icon icon="mdi-information" size="small" class="ml-1" />
              </template>
              <template #default>
                <div class="d-flex align-center">
                  <v-rating v-model="rating" size="small" density="compact" readonly />
                  <span class="ml-2 text-body-2">(4.5/5)</span>
                </div>
              </template>
            </LabelValue>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;LabelValue&gt;
  &lt;template #label&gt;
    &lt;div class="d-flex align-center"&gt;
      &lt;v-icon icon="mdi-account" size="small" class="mr-1" /&gt;
      &lt;span&gt;User Name&lt;/span&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;v-chip size="small" color="success"&gt;Admin User&lt;/v-chip&gt;
  &lt;/template&gt;
&lt;/LabelValue&gt;

&lt;LabelValue label="Actions"&gt;
  &lt;template #default&gt;
    &lt;div class="d-flex gap-2"&gt;
      &lt;v-btn size="small" variant="outlined"&gt;Edit&lt;/v-btn&gt;
      &lt;v-btn size="small" variant="outlined"&gt;Delete&lt;/v-btn&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/LabelValue&gt;</code></pre>
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

          <div class="api-row" v-for="prop in labelValueProps" :key="prop.name">
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

          <div class="api-row" v-for="slot in labelValueSlots" :key="slot.name">
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
import { ref } from 'vue'
import { LabelValue } from '@/components'

const rating = ref(4.5)

const labelValueProps = [
  {
    name: 'label',
    type: 'string | number',
    default: '-',
    description: 'Label text to display'
  },
  {
    name: 'value',
    type: 'string | number',
    default: '-',
    description: 'Value text to display'
  },
  {
    name: 'lightLabel',
    type: 'boolean',
    default: 'false',
    description: 'Apply light styling to label'
  },
  {
    name: 'boldLabel',
    type: 'boolean',
    default: 'false',
    description: 'Apply bold styling to label'
  },
  {
    name: 'smallLabel',
    type: 'boolean',
    default: 'false',
    description: 'Use smaller text size for label'
  },
  {
    name: 'largeLabel',
    type: 'boolean',
    default: 'false',
    description: 'Use larger text size for label'
  },
  {
    name: 'lightValue',
    type: 'boolean',
    default: 'false',
    description: 'Apply light styling to value'
  },
  {
    name: 'boldValue',
    type: 'boolean',
    default: 'false',
    description: 'Apply bold styling to value'
  },
  {
    name: 'smallValue',
    type: 'boolean',
    default: 'false',
    description: 'Use smaller text size for value'
  },
  {
    name: 'largeValue',
    type: 'boolean',
    default: 'false',
    description: 'Use larger text size for value'
  },
  {
    name: 'noValue',
    type: 'boolean',
    default: 'false',
    description: 'Hide the value completely'
  },
  {
    name: 'noLabelBottomMargin',
    type: 'boolean',
    default: 'false',
    description: 'Remove bottom margin from label'
  },
  {
    name: 'hide',
    type: 'boolean',
    default: 'false',
    description: 'Hide the entire component'
  }
]

const labelValueSlots = [
  {
    name: 'default',
    props: '-',
    description: 'Custom value content'
  },
  {
    name: 'label',
    props: '-',
    description: 'Custom label content'
  },
  {
    name: 'prepend-label',
    props: '-',
    description: 'Content before the label'
  },
  {
    name: 'append-label',
    props: '-',
    description: 'Content after the label'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>