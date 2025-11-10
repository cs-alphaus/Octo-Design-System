<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Search Input</h1>
      <p class="text-h6 text-medium-emphasis">
        Expandable and static search input component with keyboard navigation and clear functionality.
      </p>
    </div>

    <!-- Block Variant Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Block Variant</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Always visible search input that takes full width of container.
      </p>

      <!-- Block Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <SearchInput
              v-model="blockSearch"
              placeholder="Search documents..."
              block
            />
            <p v-if="blockSearch" class="text-body-2 text-medium-emphasis">
              Searching for: "{{ blockSearch }}"
            </p>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;SearchInput
  v-model="searchQuery"
  placeholder="Search documents..."
  block
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Expandable Variant Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Expandable Variant</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Compact search that expands when clicked, perfect for toolbars.
      </p>

      <!-- Expandable Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-6">
            <div class="d-flex align-center justify-space-between pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">
              <div class="d-flex align-center gap-3">
                <v-icon icon="mdi-menu" />
                <span class="text-h6">Page Title</span>
              </div>
              <div class="d-flex align-center gap-2">
                <SearchInput
                  v-model="expandableSearch"
                  placeholder="Search..."
                  @submit="handleSearchSubmit"
                />
                <v-btn icon="mdi-filter" variant="text" />
                <v-btn icon="mdi-dots-vertical" variant="text" />
              </div>
            </div>
            <p v-if="expandableSearch" class="text-body-2 text-medium-emphasis">
              Current search: "{{ expandableSearch }}"
            </p>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;div class="d-flex align-center gap-2"&gt;
  &lt;SearchInput
    v-model="searchQuery"
    placeholder="Search..."
    @submit="handleSearchSubmit"
  /&gt;
  &lt;v-btn icon="mdi-filter" variant="text" /&gt;
&lt;/div&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Expand by Default Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Pre-expanded</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Expandable input that starts in expanded state.
      </p>

      <!-- Pre-expanded Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <span class="text-body-1">Filter results:</span>
            <SearchInput
              v-model="preExpandedSearch"
              placeholder="Type to filter..."
              expand-by-default
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;SearchInput
  v-model="searchQuery"
  placeholder="Type to filter..."
  expand-by-default
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Variants Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Input Variants</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different visual styles for the text field.
      </p>

      <!-- Variants Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <div>
              <h4 class="text-subtitle-1 mb-2">Outlined (default)</h4>
              <SearchInput
                v-model="variantSearch1"
                placeholder="Search with outlined style..."
                block
                variant="outlined"
              />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Filled</h4>
              <SearchInput
                v-model="variantSearch2"
                placeholder="Search with filled style..."
                block
                variant="filled"
              />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Plain</h4>
              <SearchInput
                v-model="variantSearch3"
                placeholder="Search with plain style..."
                block
                variant="plain"
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
            <pre class="code-block"><code>&lt;SearchInput variant="outlined" block /&gt;
&lt;SearchInput variant="filled" block /&gt;
&lt;SearchInput variant="plain" block /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Interactive Features Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Interactive Features</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Keyboard shortcuts and event handling.
      </p>

      <!-- Interactive Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <SearchInput
              v-model="interactiveSearch"
              placeholder="Try typing and pressing Enter..."
              block
              @submit="handleSubmit"
              @clear="handleClear"
              @active="handleActive"
            />

            <div v-if="events.length" class="mt-4">
              <h4 class="text-subtitle-1 mb-2">Events Log:</h4>
              <div class="pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.1); border-radius: 8px; max-height: 150px; overflow-y: auto;">
                <div v-for="(event, index) in events" :key="index" class="text-body-2 mb-1">
                  <span class="font-weight-medium">{{ event.type }}:</span> {{ event.data }}
                </div>
              </div>
              <v-btn size="small" variant="text" @click="events = []" class="mt-2">
                Clear Events
              </v-btn>
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;SearchInput
  v-model="searchQuery"
  placeholder="Try typing and pressing Enter..."
  block
  @submit="handleSubmit"
  @clear="handleClear"
  @active="handleActive"
/&gt;

&lt;script setup&gt;
const handleSubmit = (query) =&gt; {
  console.log('Search submitted:', query)
}

const handleClear = () =&gt; {
  console.log('Search cleared')
}

const handleActive = (isActive) =&gt; {
  console.log('Search active state:', isActive)
}
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>

      <v-alert type="info" variant="tonal" class="mt-4">
        <v-icon icon="mdi-keyboard" class="mr-2" />
        <strong>Keyboard shortcuts:</strong> Press <kbd>Enter</kbd> to submit, <kbd>Escape</kbd> to collapse expandable search.
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

          <div class="api-row" v-for="prop in searchInputProps" :key="prop.name">
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

          <div class="api-row" v-for="event in searchInputEvents" :key="event.name">
            <div class="api-col">
              <code>{{ event.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ event.payload }}</span>
            </div>
            <div class="api-col">{{ event.description }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchInput } from '@/components'

// Component state
const blockSearch = ref('')
const expandableSearch = ref('')
const preExpandedSearch = ref('')
const variantSearch1 = ref('')
const variantSearch2 = ref('')
const variantSearch3 = ref('')
const interactiveSearch = ref('')

// Events tracking
const events = ref<Array<{ type: string; data: string }>>([])

// Event handlers
const handleSearchSubmit = (query: string) => {
  console.log('Search submitted:', query)
}

const handleSubmit = (query: string) => {
  events.value.unshift({ type: 'submit', data: query || 'empty' })
}

const handleClear = () => {
  events.value.unshift({ type: 'clear', data: 'search cleared' })
}

const handleActive = (isActive: boolean) => {
  events.value.unshift({ type: 'active', data: isActive ? 'expanded' : 'collapsed' })
}

const searchInputProps = [
  {
    name: 'modelValue',
    type: 'string',
    default: "''",
    description: 'The search query value (v-model)'
  },
  {
    name: 'placeholder',
    type: 'string',
    default: 'Search...',
    description: 'Placeholder text for the input'
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    description: 'Always show input in block layout'
  },
  {
    name: 'expandByDefault',
    type: 'boolean',
    default: 'false',
    description: 'Start in expanded state'
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'true',
    description: 'Show clear button'
  },
  {
    name: 'density',
    type: 'string',
    default: 'comfortable',
    description: 'Input field density'
  },
  {
    name: 'variant',
    type: "'outlined' | 'filled' | 'plain'",
    default: 'outlined',
    description: 'Visual variant of the input'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disable the input'
  }
]

const searchInputEvents = [
  {
    name: 'update:modelValue',
    payload: 'string',
    description: 'Emitted when search value changes'
  },
  {
    name: 'submit',
    payload: 'string',
    description: 'Emitted when Enter is pressed or search button clicked'
  },
  {
    name: 'clear',
    payload: '-',
    description: 'Emitted when clear button is clicked'
  },
  {
    name: 'active',
    payload: 'boolean',
    description: 'Emitted when expandable search state changes'
  }
]
</script>

<style scoped>
kbd {
  background: rgba(var(--v-theme-surface-variant), 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: monospace;
}
</style>