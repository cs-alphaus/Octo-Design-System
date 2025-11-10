<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Menu</h1>
      <p class="text-h6 text-medium-emphasis">
        Dropdown menu component with customizable items and actions.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple dropdown menu with text or icon activator.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Menu
              :items="basicItems"
              activator-text="Options"
              @select="handleSelect"
            />

            <Menu
              :items="basicItems"
              activator-icon="mdi-dots-vertical"
              @select="handleSelect"
            />

            <Menu
              :items="basicItems"
              activator-icon="mdi-cog"
              @select="handleSelect"
            />
          </div>

          <div v-if="lastSelected" class="mt-4">
            <v-chip size="small" color="primary" variant="tonal">
              Last selected: {{ lastSelected }}
            </v-chip>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Menu
  :items="menuItems"
  activator-text="Options"
  @select="handleSelect"
/&gt;

&lt;Menu
  :items="menuItems"
  activator-icon="mdi-dots-vertical"
  @select="handleSelect"
/&gt;

&lt;script setup&gt;
const menuItems = [
  { title: 'Edit', value: 'edit', icon: 'mdi-pencil' },
  { title: 'Copy', value: 'copy', icon: 'mdi-content-copy' },
  { title: 'Delete', value: 'delete', icon: 'mdi-delete', color: 'error' }
]

const handleSelect = (value) =&gt; {
  console.log('Selected:', value)
}
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Menu Structure Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Menu Structure</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Organize menu items with dividers and subheaders.
      </p>

      <!-- Structure Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Menu
              :items="structuredItems"
              activator-text="File Menu"
              @select="handleSelect"
            />

            <Menu
              :items="editItems"
              activator-text="Edit Menu"
              @select="handleSelect"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Menu :items="structuredItems" activator-text="File Menu" /&gt;

&lt;script setup&gt;
const structuredItems = [
  { title: 'New', value: 'new', icon: 'mdi-file-plus' },
  { title: 'Open', value: 'open', icon: 'mdi-folder-open' },
  { type: 'divider' },
  { type: 'subheader', title: 'Recent Files' },
  { title: 'document.pdf', value: 'recent1', icon: 'mdi-file-pdf' },
  { title: 'spreadsheet.xlsx', value: 'recent2', icon: 'mdi-file-excel' },
  { type: 'divider' },
  { title: 'Exit', value: 'exit', icon: 'mdi-exit-to-app' }
]
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Item States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Item States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Menu items can be disabled, hidden, or have different colors.
      </p>

      <!-- States Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <Menu
            :items="stateItems"
            activator-text="Actions"
            @select="handleSelect"
          />
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Menu :items="stateItems" activator-text="Actions" /&gt;

&lt;script setup&gt;
const stateItems = [
  { title: 'Save', value: 'save', icon: 'mdi-content-save' },
  { title: 'Save As', value: 'save-as', icon: 'mdi-content-save-edit', disabled: true },
  { title: 'Hidden Item', value: 'hidden', hide: true },
  { type: 'divider' },
  { title: 'Delete', value: 'delete', icon: 'mdi-delete', color: 'error' },
  { title: 'Archive', value: 'archive', icon: 'mdi-archive', color: 'warning' }
]
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Toolbar Integration Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Toolbar Integration</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Common usage patterns in application toolbars and interfaces.
      </p>

      <!-- Toolbar Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <!-- App Toolbar -->
            <div class="d-flex align-center justify-space-between pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">
              <div class="d-flex align-center gap-3">
                <v-icon icon="mdi-view-dashboard" />
                <span class="text-h6">Dashboard</span>
              </div>
              <div class="d-flex align-center gap-2">
                <Menu
                  :items="viewItems"
                  activator-icon="mdi-view-module"
                  @select="handleSelect"
                />
                <Menu
                  :items="userItems"
                  activator-icon="mdi-account"
                  @select="handleSelect"
                />
                <Menu
                  :items="settingsItems"
                  activator-icon="mdi-cog"
                  @select="handleSelect"
                />
              </div>
            </div>

            <!-- Data Table Row Actions -->
            <div class="pa-3" style="border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
              <div class="d-flex align-center justify-space-between">
                <div>
                  <h4 class="text-h6">John Doe</h4>
                  <p class="text-body-2 text-medium-emphasis mb-0">john.doe@example.com</p>
                </div>
                <Menu
                  :items="userActions"
                  activator-icon="mdi-dots-vertical"
                  @select="handleUserAction"
                />
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
            <pre class="code-block"><code>&lt;!-- Toolbar --&gt;
&lt;div class="d-flex align-center gap-2"&gt;
  &lt;Menu :items="viewItems" activator-icon="mdi-view-module" /&gt;
  &lt;Menu :items="userItems" activator-icon="mdi-account" /&gt;
  &lt;Menu :items="settingsItems" activator-icon="mdi-cog" /&gt;
&lt;/div&gt;

&lt;!-- Row Actions --&gt;
&lt;Menu
  :items="userActions"
  activator-icon="mdi-dots-vertical"
  @select="handleUserAction"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Configuration Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Configuration</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Customize menu behavior and appearance.
      </p>

      <!-- Configuration Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4 align-center">
            <Menu
              :items="basicItems"
              activator-text="Stay Open"
              :close-on-content-click="false"
              @select="handleSelect"
            />

            <Menu
              :items="basicItems"
              activator-text="Wide Menu"
              min-width="300px"
              @select="handleSelect"
            />

            <Menu
              :items="basicItems"
              activator-text="Top Menu"
              location="top"
              @select="handleSelect"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Menu stays open after selection --&gt;
&lt;Menu
  :items="items"
  :close-on-content-click="false"
  activator-text="Stay Open"
/&gt;

&lt;!-- Custom width --&gt;
&lt;Menu
  :items="items"
  min-width="300px"
  activator-text="Wide Menu"
/&gt;

&lt;!-- Different position --&gt;
&lt;Menu
  :items="items"
  location="top"
  activator-text="Top Menu"
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

          <div class="api-row" v-for="prop in menuProps" :key="prop.name">
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

      <!-- MenuItem Type -->
      <div class="api-section mb-6">
        <h3 class="text-h5 mb-4">MenuItem Type</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Property</div>
            <div class="api-col">Type</div>
            <div class="api-col">Required</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="prop in menuItemProps" :key="prop.name">
            <div class="api-col">
              <code>{{ prop.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ prop.type }}</span>
            </div>
            <div class="api-col">
              <span class="api-default">{{ prop.required }}</span>
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
              <code>select</code>
            </div>
            <div class="api-col">
              <span class="api-type">string</span>
            </div>
            <div class="api-col">Emitted when menu item is selected</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from '@/components'

// Component state
const lastSelected = ref('')

// Example data
const basicItems = [
  { title: 'Edit', value: 'edit', icon: 'mdi-pencil' },
  { title: 'Copy', value: 'copy', icon: 'mdi-content-copy' },
  { title: 'Delete', value: 'delete', icon: 'mdi-delete', color: 'error' }
]

const structuredItems = [
  { title: 'New', value: 'new', icon: 'mdi-file-plus' },
  { title: 'Open', value: 'open', icon: 'mdi-folder-open' },
  { type: 'divider' },
  { type: 'subheader', title: 'Recent Files' },
  { title: 'document.pdf', value: 'recent1', icon: 'mdi-file-pdf' },
  { title: 'spreadsheet.xlsx', value: 'recent2', icon: 'mdi-file-excel' },
  { type: 'divider' },
  { title: 'Exit', value: 'exit', icon: 'mdi-exit-to-app' }
]

const editItems = [
  { title: 'Undo', value: 'undo', icon: 'mdi-undo' },
  { title: 'Redo', value: 'redo', icon: 'mdi-redo' },
  { type: 'divider' },
  { title: 'Cut', value: 'cut', icon: 'mdi-content-cut' },
  { title: 'Copy', value: 'copy', icon: 'mdi-content-copy' },
  { title: 'Paste', value: 'paste', icon: 'mdi-content-paste' }
]

const stateItems = [
  { title: 'Save', value: 'save', icon: 'mdi-content-save' },
  { title: 'Save As', value: 'save-as', icon: 'mdi-content-save-edit', disabled: true },
  { title: 'Hidden Item', value: 'hidden', hide: true },
  { type: 'divider' },
  { title: 'Delete', value: 'delete', icon: 'mdi-delete', color: 'error' },
  { title: 'Archive', value: 'archive', icon: 'mdi-archive', color: 'warning' }
]

const viewItems = [
  { title: 'List View', value: 'list', icon: 'mdi-view-list' },
  { title: 'Grid View', value: 'grid', icon: 'mdi-view-grid' },
  { title: 'Card View', value: 'card', icon: 'mdi-view-module' }
]

const userItems = [
  { title: 'Profile', value: 'profile', icon: 'mdi-account' },
  { title: 'Settings', value: 'settings', icon: 'mdi-cog' },
  { type: 'divider' },
  { title: 'Logout', value: 'logout', icon: 'mdi-logout' }
]

const settingsItems = [
  { title: 'Preferences', value: 'preferences', icon: 'mdi-tune' },
  { title: 'Theme', value: 'theme', icon: 'mdi-palette' },
  { title: 'Language', value: 'language', icon: 'mdi-translate' }
]

const userActions = [
  { title: 'View Details', value: 'view', icon: 'mdi-eye' },
  { title: 'Edit User', value: 'edit', icon: 'mdi-pencil' },
  { title: 'Reset Password', value: 'reset', icon: 'mdi-lock-reset' },
  { type: 'divider' },
  { title: 'Deactivate', value: 'deactivate', icon: 'mdi-account-off', color: 'warning' },
  { title: 'Delete User', value: 'delete', icon: 'mdi-delete', color: 'error' }
]

// Event handlers
const handleSelect = (value: string) => {
  lastSelected.value = value
  console.log('Menu selection:', value)
}

const handleUserAction = (action: string) => {
  console.log('User action:', action)
  lastSelected.value = `User action: ${action}`
}

// API documentation data
const menuProps = [
  {
    name: 'items',
    type: 'MenuItem[]',
    default: '-',
    description: 'Array of menu items - required'
  },
  {
    name: 'activatorText',
    type: 'string',
    default: '-',
    description: 'Text for button activator'
  },
  {
    name: 'activatorIcon',
    type: 'string',
    default: 'mdi-dots-vertical',
    description: 'Icon for button activator'
  },
  {
    name: 'closeOnContentClick',
    type: 'boolean',
    default: 'true',
    description: 'Close menu when item is clicked'
  },
  {
    name: 'minWidth',
    type: 'string',
    default: '200px',
    description: 'Minimum width of menu'
  },
  {
    name: 'maxWidth',
    type: 'string',
    default: '420px',
    description: 'Maximum width of menu'
  },
  {
    name: 'location',
    type: 'string',
    default: 'bottom end',
    description: 'Position of menu relative to activator'
  }
]

const menuItemProps = [
  {
    name: 'title',
    type: 'string',
    required: 'No',
    description: 'Display text for the item'
  },
  {
    name: 'value',
    type: 'string',
    required: 'No',
    description: 'Value emitted when item is selected'
  },
  {
    name: 'icon',
    type: 'string',
    required: 'No',
    description: 'Icon to display (MDI format)'
  },
  {
    name: 'color',
    type: 'string',
    required: 'No',
    description: 'Color for icon and text'
  },
  {
    name: 'type',
    type: "'divider' | 'subheader'",
    required: 'No',
    description: 'Special item types'
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: 'No',
    description: 'Disable the menu item'
  },
  {
    name: 'hide',
    type: 'boolean',
    required: 'No',
    description: 'Hide the menu item completely'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>