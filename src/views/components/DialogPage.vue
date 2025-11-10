<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Dialog</h1>
      <p class="text-h6 text-medium-emphasis">
        A modal component for displaying content that requires user interaction or attention.
      </p>
    </div>

    <!-- Basic Dialog Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple dialog with customizable title and content.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Button text="Open Dialog" color="primary" @click="basicDialog = true" />
            <Button text="With Icon" color="secondary" @click="iconDialog = true" />
            <Button text="Closable" color="info" @click="closableDialog = true" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Button text="Open Dialog" @click="basicDialog = true" /&gt;

&lt;Dialog
  v-model="basicDialog"
  title="Basic Dialog"
  width="500"
&gt;
  &lt;div class="pa-4"&gt;
    &lt;p&gt;This is a basic dialog with minimal configuration.&lt;/p&gt;
  &lt;/div&gt;
&lt;/Dialog&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Submit Dialog Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Submit Pattern</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Dialog with submit and cancel actions for form-like interactions.
      </p>

      <!-- Submit Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Button text="Form Dialog" color="success" @click="formDialog = true" />
            <Button text="With Loading" color="primary" @click="loadingDialog = true" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Dialog
  v-model="formDialog"
  title="Form Dialog"
  title-icon="mdi-form-select"
  submittable
  submit-label="Save Changes"
  submit-icon="mdi-content-save"
  :submit-loading="submitLoading"
  width="600"
  @submit="handleSubmit"
&gt;
  &lt;div class="pa-4"&gt;
    &lt;v-text-field label="Name" variant="outlined" /&gt;
    &lt;v-textarea label="Description" variant="outlined" /&gt;
  &lt;/div&gt;
&lt;/Dialog&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Loading States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Loading States</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Show loading indicators for better user feedback during operations.
      </p>

      <!-- Loading Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Button text="Full Loading" color="warning" @click="showFullLoading" />
            <Button text="Submit Loading" color="error" @click="submitLoadingDialog = true" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Full dialog loading --&gt;
&lt;Dialog
  v-model="loadingDialog"
  title="Processing"
  :loading="true"
&gt;
  &lt;div class="pa-4"&gt;
    Content hidden during loading
  &lt;/div&gt;
&lt;/Dialog&gt;

&lt;!-- Submit button loading --&gt;
&lt;Dialog
  submittable
  :submit-loading="submitLoading"
  :submit-disabled="submitLoading"
&gt;
  Submit button shows loading spinner
&lt;/Dialog&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Custom Actions Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Custom Actions</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Replace default actions with custom button combinations.
      </p>

      <!-- Custom Actions Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4">
            <Button text="Custom Actions" color="purple" @click="customDialog = true" />
            <Button text="No Actions" color="teal" @click="noActionsDialog = true" />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Dialog v-model="customDialog" title="Custom Actions"&gt;
  &lt;template #actions&gt;
    &lt;v-btn color="error" @click="customDialog = false"&gt;
      Delete
    &lt;/v-btn&gt;
    &lt;v-btn color="warning" @click="customDialog = false"&gt;
      Archive
    &lt;/v-btn&gt;
    &lt;v-btn @click="customDialog = false"&gt;
      Cancel
    &lt;/v-btn&gt;
  &lt;/template&gt;

  &lt;div class="pa-4"&gt;
    Custom action buttons in footer
  &lt;/div&gt;
&lt;/Dialog&gt;</code></pre>
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

          <div class="api-row" v-for="prop in dialogProps" :key="prop.name">
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

          <div class="api-row" v-for="event in dialogEvents" :key="event.name">
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

      <!-- Slots Table -->
      <div class="api-section">
        <h3 class="text-h5 mb-4">Slots</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Slot</div>
            <div class="api-col">Props</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="slot in dialogSlots" :key="slot.name">
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

    <!-- All Dialog Examples -->
    <Dialog v-model="basicDialog" title="Basic Dialog" width="500">
      <div class="pa-4">
        <p>This is a basic dialog with minimal configuration.</p>
        <p>It demonstrates the simplest usage pattern.</p>
      </div>
    </Dialog>

    <Dialog
      v-model="iconDialog"
      title="Information Dialog"
      title-icon="mdi-information"
      closable
      width="500"
    >
      <div class="pa-4">
        <p>This dialog includes a title icon and close button.</p>
      </div>
    </Dialog>

    <Dialog v-model="closableDialog" title="Closable Dialog" closable width="500">
      <div class="pa-4">
        <p>This dialog can be closed multiple ways:</p>
        <ul>
          <li>Click the X button in header</li>
          <li>Click outside the dialog</li>
          <li>Press escape key</li>
        </ul>
      </div>
    </Dialog>

    <Dialog
      v-model="formDialog"
      title="Form Dialog"
      title-icon="mdi-form-select"
      submittable
      submit-label="Save Changes"
      submit-icon="mdi-content-save"
      :submit-loading="submitLoading"
      width="600"
      @submit="handleSubmit"
    >
      <div class="pa-4">
        <v-text-field label="Project Name" variant="outlined" density="compact" class="mb-3" />
        <v-textarea label="Description" variant="outlined" density="compact" rows="4" class="mb-3" />
        <v-select
          label="Status"
          :items="['Active', 'Inactive', 'Pending']"
          variant="outlined"
          density="compact"
        />
      </div>
    </Dialog>

    <Dialog v-model="fullLoadingDialog" title="Processing" :loading="true" width="500">
      <div class="pa-4">
        <p>This content is hidden when loading.</p>
      </div>
    </Dialog>

    <Dialog
      v-model="submitLoadingDialog"
      title="Submit Loading"
      submittable
      :submit-loading="submitLoading"
      :submit-disabled="submitLoading"
      width="500"
      @submit="simulateSubmit"
    >
      <div class="pa-4">
        <p>Click submit to see the loading state.</p>
      </div>
    </Dialog>

    <Dialog v-model="customDialog" title="Custom Actions" width="500">
      <template #actions>
        <v-btn color="error" @click="customDialog = false">Delete</v-btn>
        <v-btn color="warning" @click="customDialog = false">Archive</v-btn>
        <v-btn @click="customDialog = false">Cancel</v-btn>
      </template>
      <div class="pa-4">
        <p>This dialog uses custom action buttons instead of the standard pattern.</p>
      </div>
    </Dialog>

    <Dialog
      v-model="noActionsDialog"
      title="No Actions"
      hide-default-buttons
      closable
      width="500"
    >
      <div class="pa-4">
        <p>This dialog has no action buttons, only the close button in header.</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Dialog } from '@/components'

// Dialog states
const basicDialog = ref(false)
const iconDialog = ref(false)
const closableDialog = ref(false)
const formDialog = ref(false)
const fullLoadingDialog = ref(false)
const submitLoadingDialog = ref(false)
const customDialog = ref(false)
const noActionsDialog = ref(false)

const submitLoading = ref(false)

const showFullLoading = () => {
  fullLoadingDialog.value = true
  setTimeout(() => {
    fullLoadingDialog.value = false
  }, 3000)
}

const handleSubmit = () => {
  submitLoading.value = true
  setTimeout(() => {
    submitLoading.value = false
    formDialog.value = false
    if (window.showNotification) {
      window.showNotification('Form submitted successfully!')
    }
  }, 2000)
}

const simulateSubmit = () => {
  submitLoading.value = true
  setTimeout(() => {
    submitLoading.value = false
    submitLoadingDialog.value = false
    if (window.showNotification) {
      window.showNotification('Action completed!')
    }
  }, 1500)
}

const dialogProps = [
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'false',
    description: 'Controls dialog visibility'
  },
  {
    name: 'title',
    type: 'string',
    default: '-',
    description: 'Dialog title text'
  },
  {
    name: 'titleIcon',
    type: 'string',
    default: '-',
    description: 'Icon next to title'
  },
  {
    name: 'width',
    type: 'string | number',
    default: '-',
    description: 'Dialog width'
  },
  {
    name: 'height',
    type: 'string | number',
    default: '-',
    description: 'Content area height'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: 'Show close button in header'
  },
  {
    name: 'submittable',
    type: 'boolean',
    default: 'false',
    description: 'Show submit/cancel buttons'
  },
  {
    name: 'submitLabel',
    type: 'string',
    default: 'Submit',
    description: 'Submit button text'
  },
  {
    name: 'submitLoading',
    type: 'boolean',
    default: 'false',
    description: 'Submit button loading state'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Show loading overlay'
  },
  {
    name: 'persistent',
    type: 'boolean',
    default: 'false',
    description: 'Prevent outside click close'
  }
]

const dialogEvents = [
  {
    name: 'update:modelValue',
    payload: 'boolean',
    description: 'Emitted when dialog visibility changes'
  },
  {
    name: 'open',
    payload: '-',
    description: 'Emitted when dialog opens'
  },
  {
    name: 'close',
    payload: '-',
    description: 'Emitted when dialog closes'
  },
  {
    name: 'submit',
    payload: '-',
    description: 'Emitted when submit button clicked'
  }
]

const dialogSlots = [
  {
    name: 'default',
    props: '-',
    description: 'Main dialog content'
  },
  {
    name: 'actions',
    props: '-',
    description: 'Custom action buttons'
  },
  {
    name: 'append',
    props: '-',
    description: 'Content appended to header'
  },
  {
    name: 'extension',
    props: '-',
    description: 'Content below header'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>