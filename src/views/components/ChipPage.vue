<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Chip</h1>
      <p class="text-h6 text-medium-emphasis">
        Simple wrapper around Vuetify's <code>v-chip</code> with design system defaults.
      </p>

      <v-alert type="warning" variant="tonal" class="mt-4">
        <v-icon icon="mdi-information" class="mr-2" />
        This wrapper only provides default props. Consider using <code>v-chip</code> directly with global defaults instead.
      </v-alert>
    </div>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        The default size is medium. Chips can be displayed in various sizes.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Chip text="Extra Small" size="x-small" />
            <Chip text="Small" size="small" />
            <Chip text="Default" />
            <Chip text="Large" size="large" />
            <Chip text="Extra Large" size="x-large" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Design System Usage --&gt;
&lt;Chip text="Extra Small" size="x-small" /&gt;
&lt;Chip text="Small" size="small" /&gt;
&lt;Chip text="Default" /&gt;
&lt;Chip text="Large" size="large" /&gt;
&lt;Chip text="Extra Large" size="x-large" /&gt;

&lt;!-- Equivalent Vuetify Code --&gt;
&lt;v-chip text="Extra Small" size="x-small" color="primary" variant="tonal" /&gt;
&lt;v-chip text="Small" size="small" color="primary" variant="tonal" /&gt;
&lt;v-chip text="Default" color="primary" variant="tonal" /&gt;
&lt;v-chip text="Large" size="large" color="primary" variant="tonal" /&gt;
&lt;v-chip text="Extra Large" size="x-large" color="primary" variant="tonal" /&gt;</code></pre>
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
            <Chip text="Elevated" variant="elevated" color="primary" />
            <Chip text="Flat" variant="flat" color="primary" />
            <Chip text="Tonal" variant="tonal" color="primary" />
            <Chip text="Outlined" variant="outlined" color="primary" />
            <Chip text="Text" variant="text" color="primary" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Chip text="Elevated" variant="elevated" color="primary" /&gt;
&lt;Chip text="Flat" variant="flat" color="primary" /&gt;
&lt;Chip text="Tonal" variant="tonal" color="primary" /&gt;
&lt;Chip text="Outlined" variant="outlined" color="primary" /&gt;
&lt;Chip text="Text" variant="text" color="primary" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Colors</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Semantic colors for different states and categories.
      </p>

      <!-- Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Chip text="Primary" color="primary" />
            <Chip text="Secondary" color="secondary" />
            <Chip text="Success" color="success" />
            <Chip text="Error" color="error" />
            <Chip text="Warning" color="warning" />
            <Chip text="Info" color="info" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Chip text="Primary" color="primary" /&gt;
&lt;Chip text="Secondary" color="secondary" /&gt;
&lt;Chip text="Success" color="success" /&gt;
&lt;Chip text="Error" color="error" /&gt;
&lt;Chip text="Warning" color="warning" /&gt;
&lt;Chip text="Info" color="info" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Icons Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">With Icons</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Chips can include icons to provide additional visual context.
      </p>

      <!-- Icon Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Chip
              text="Account"
              prepend-icon="mdi-account"
              color="primary"
            />
            <Chip
              text="Email"
              prepend-icon="mdi-email"
              color="secondary"
              variant="outlined"
            />
            <Chip
              text="Settings"
              append-icon="mdi-cog"
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
            <pre class="code-block"><code>&lt;Chip
  text="Account"
  prepend-icon="mdi-account"
  color="primary"
/&gt;

&lt;Chip
  text="Email"
  prepend-icon="mdi-email"
  color="secondary"
  variant="outlined"
/&gt;

&lt;Chip
  text="Settings"
  append-icon="mdi-cog"
  color="info"
  variant="tonal"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Closable Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Closable</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Chips can be made closable with a close button.
      </p>

      <!-- Closable Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Chip
              v-for="(chip, index) in closableChips"
              :key="chip.id"
              :text="chip.text"
              :color="chip.color"
              closable
              @click:close="removeChip(index)"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Chip
  v-for="(chip, index) in chips"
  :key="chip.id"
  :text="chip.text"
  :color="chip.color"
  closable
  @click:close="removeChip(index)"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Filter</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Filter chips are typically used for filtering content and can be toggled.
      </p>

      <!-- Filter Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Chip
              v-for="filter in filters"
              :key="filter.id"
              :text="filter.text"
              :color="filter.active ? 'primary' : 'secondary'"
              :variant="filter.active ? 'flat' : 'outlined'"
              filter
              @click="toggleFilter(filter.id)"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Chip
  v-for="filter in filters"
  :key="filter.id"
  :text="filter.text"
  :color="filter.active ? 'primary' : 'secondary'"
  :variant="filter.active ? 'flat' : 'outlined'"
  filter
  @click="toggleFilter(filter.id)"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Shapes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Shapes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Chips can have different shapes: rounded (default), pill, or label.
      </p>

      <!-- Shape Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Chip text="Default Shape" color="primary" />
            <Chip text="Pill Shape" color="secondary" pill />
            <Chip text="Label Shape" color="info" label />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Chip text="Default Shape" color="primary" /&gt;
&lt;Chip text="Pill Shape" color="secondary" pill /&gt;
&lt;Chip text="Label Shape" color="info" label /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Chips can be disabled to prevent user interaction.
      </p>

      <!-- States Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-3 flex-wrap">
            <Chip text="Normal" color="primary" />
            <Chip text="Disabled" color="primary" disabled />
            <Chip text="Disabled Closable" color="secondary" disabled closable />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Chip text="Normal" color="primary" /&gt;
&lt;Chip text="Disabled" color="primary" disabled /&gt;
&lt;Chip text="Disabled Closable" color="secondary" disabled closable /&gt;</code></pre>
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

          <div class="api-row" v-for="prop in chipProps" :key="prop.name">
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
            <div class="api-col">Emitted when chip is clicked</div>
          </div>

          <div class="api-row">
            <div class="api-col">
              <code>click:close</code>
            </div>
            <div class="api-col">
              <span class="api-type">MouseEvent</span>
            </div>
            <div class="api-col">Emitted when close button is clicked</div>
          </div>
        </div>
      </div>

      <!-- Slots Table -->
      <div class="api-section mb-6">
        <h3 class="text-h5 mb-4">Slots</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Slot</div>
            <div class="api-col">Props</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row">
            <div class="api-col">
              <code>default</code>
            </div>
            <div class="api-col">-</div>
            <div class="api-col">Chip content (text)</div>
          </div>

          <div class="api-row">
            <div class="api-col">
              <code>prepend</code>
            </div>
            <div class="api-col">-</div>
            <div class="api-col">Content before the chip text</div>
          </div>

          <div class="api-row">
            <div class="api-col">
              <code>append</code>
            </div>
            <div class="api-col">-</div>
            <div class="api-col">Content after the chip text</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Chip } from '@/components'

const closableChips = ref([
  { id: 1, text: 'Removable', color: 'primary' },
  { id: 2, text: 'Closable', color: 'secondary' },
  { id: 3, text: 'Deletable', color: 'success' },
  { id: 4, text: 'Dismissible', color: 'info' }
])

const filters = ref([
  { id: 1, text: 'All', active: true },
  { id: 2, text: 'Active', active: false },
  { id: 3, text: 'Inactive', active: false },
  { id: 4, text: 'Pending', active: false }
])

const removeChip = (index: number) => {
  closableChips.value.splice(index, 1)
}

const toggleFilter = (id: number) => {
  const filter = filters.value.find(f => f.id === id)
  if (filter) {
    filter.active = !filter.active
  }
}

const chipProps = [
  {
    name: 'text',
    type: 'string',
    default: '-',
    description: 'Chip text content'
  },
  {
    name: 'color',
    type: 'string',
    default: 'primary',
    description: 'Chip color theme'
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
    description: 'Chip size'
  },
  {
    name: 'label',
    type: 'boolean',
    default: 'false',
    description: 'Applies label styling (square shape)'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: 'Shows close button'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disable chip interaction'
  },
  {
    name: 'filter',
    type: 'boolean',
    default: 'false',
    description: 'Enables filter styling'
  },
  {
    name: 'pill',
    type: 'boolean',
    default: 'false',
    description: 'Applies pill styling (rounded)'
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
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>