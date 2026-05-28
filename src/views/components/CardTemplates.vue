<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Card Templates</h1>
      <p class="text-body-1 mb-6">
        Standardized, production-ready card templates for common UI patterns in Octo.
        These templates provide consistent spacing, layout, and interaction patterns across all creation flows,
        settings pages, and multi-step wizards.
      </p>
    </div>

    <!-- Creation Flow Card Template -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Creation Flow Card Template</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        A standardized card template used for all multi-step creation flows, registration processes,
        and settings pages in Octo. Features a centered layout with defined header, content, and footer sections.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4" variant="flat">
        <v-card-text>
          <div class="d-flex flex-column align-center mt-5">
            <v-card flat rounded="xl" color="surface" width="620">
              <!-- Header Section -->
              <div class="px-6 pt-4">
                <h3 class="text-h5 font-weight-medium">Create New Account</h3>
              </div>

              <!-- Content Section -->
              <div class="px-6 py-6 d-flex flex-column ga-6">
                <!-- Banner Section -->
                <v-banner
                  stacked
                  icon="mdi-information-outline"
                  color="primary"
                >
                  <v-banner-text>
                    <p class="font-weight-bold">Account Setup</p>
                    <p>Fill in your account details to get started with Octo.</p>
                  </v-banner-text>
                </v-banner>

                <!-- Form Fields Group -->
                <div class="d-flex flex-column ga-4">
                  <v-text-field
                    label="Account Name"
                    hint="Enter a unique name for your account"
                    persistent-hint
                    placeholder="My Account"
                  />

                  <v-text-field
                    label="Email Address"
                    hint="We'll use this for notifications"
                    persistent-hint
                    placeholder="user@example.com"
                    type="email"
                  />

                  <v-select
                    label="Account Type"
                    :items="['Personal', 'Team', 'Enterprise']"
                    hint="Choose the type that best fits your needs"
                    persistent-hint
                  />
                </div>

                <!-- Alert Section -->
                <v-alert
                  rounded="small"
                  type="success"
                  variant="outlined"
                  title="Validation Passed"
                  text="All fields are valid. You can proceed to the next step."
                />
              </div>

              <!-- Divider -->
              <v-divider />

              <!-- Footer Section -->
              <div class="d-flex py-4 px-6">
                <v-btn
                  variant="text"
                  color="secondary"
                  text="Cancel"
                />
                <v-spacer />
                <v-btn
                  color="primary"
                  variant="flat"
                  text="Next"
                />
              </div>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showCreationFlowCode = !showCreationFlowCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showCreationFlowCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showCreationFlowCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedCreationFlowCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Spacing System Reference -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Spacing System</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        The creation flow template follows a strict spacing hierarchy to ensure visual consistency
        across all flows. Understanding this system is crucial when customizing templates.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-column ga-4">
            <div class="d-flex align-center ga-3">
              <v-chip color="primary" variant="tonal" size="small">px-6 (24px)</v-chip>
              <span class="text-body-2">Horizontal padding for all sections</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-chip color="secondary" variant="tonal" size="small">pt-4 (16px)</v-chip>
              <span class="text-body-2">Header top padding only</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-chip color="success" variant="tonal" size="small">py-6 (24px)</v-chip>
              <span class="text-body-2">Content vertical padding</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-chip color="warning" variant="tonal" size="small">ga-6 (24px)</v-chip>
              <span class="text-body-2">Gap between major content sections</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-chip color="error" variant="tonal" size="small">ga-4 (16px)</v-chip>
              <span class="text-body-2">Gap between related form fields</span>
            </div>
            <div class="d-flex align-center ga-3">
              <v-chip color="info" variant="tonal" size="small">py-4 (16px)</v-chip>
              <span class="text-body-2">Footer vertical padding</span>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showSpacingCode = !showSpacingCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showSpacingCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showSpacingCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedSpacingCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Minimal Template (No Banner/Alerts) -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Minimal Creation Flow</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        A simplified version without banners or alerts, suitable for straightforward forms
        or when you want to minimize visual clutter.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4" variant="flat">
        <v-card-text>
          <div class="d-flex flex-column align-center mt-5">
            <v-card flat rounded="xl" color="surface" width="620">
              <!-- Header Section -->
              <div class="px-6 pt-4">
                <h3 class="text-h5 font-weight-medium">Quick Setup</h3>
              </div>

              <!-- Content Section -->
              <div class="px-6 py-6 d-flex flex-column ga-6">
                <!-- Form Fields Only -->
                <div class="d-flex flex-column ga-4">
                  <v-text-field
                    label="Project Name"
                    placeholder="Enter project name"
                  />

                  <v-text-field
                    label="Description"
                    placeholder="Brief description"
                  />

                  <v-select
                    label="Region"
                    :items="['US East', 'US West', 'EU Central', 'Asia Pacific']"
                  />
                </div>
              </div>

              <!-- Divider -->
              <v-divider />

              <!-- Footer Section -->
              <div class="d-flex py-4 px-6">
                <v-btn
                  variant="text"
                  color="secondary"
                  text="Cancel"
                />
                <v-spacer />
                <v-btn
                  color="primary"
                  variant="flat"
                  text="Create"
                />
              </div>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showMinimalCode = !showMinimalCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showMinimalCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showMinimalCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedMinimalCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Multi-Action Footer -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Multi-Action Footer</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Template with multiple action buttons in the footer, commonly used for forms
        that support draft saving, resetting, or other secondary actions.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4" variant="flat">
        <v-card-text>
          <div class="d-flex flex-column align-center mt-5">
            <v-card flat rounded="xl" color="surface" width="620">
              <!-- Header Section -->
              <div class="px-6 pt-4">
                <h3 class="text-h5 font-weight-medium">Configure Settings</h3>
              </div>

              <!-- Content Section -->
              <div class="px-6 py-6 d-flex flex-column ga-6">
                <div class="d-flex flex-column ga-4">
                  <v-text-field
                    label="API Endpoint"
                    placeholder="https://api.example.com"
                  />

                  <v-text-field
                    label="API Key"
                    type="password"
                    placeholder="Enter your API key"
                  />

                  <v-text-field
                    label="Timeout (seconds)"
                    type="number"
                    placeholder="30"
                  />
                </div>
              </div>

              <!-- Divider -->
              <v-divider />

              <!-- Footer Section with Multiple Actions -->
              <div class="d-flex py-4 px-6">
                <v-btn
                  variant="text"
                  color="secondary"
                  text="Cancel"
                />
                <v-spacer />
                <v-btn
                  variant="tonal"
                  color="secondary"
                  text="Reset to Default"
                  class="mr-2"
                />
                <v-btn
                  variant="tonal"
                  color="primary"
                  text="Save as Draft"
                  class="mr-2"
                />
                <v-btn
                  color="primary"
                  variant="flat"
                  text="Apply Changes"
                />
              </div>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showMultiActionCode = !showMultiActionCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showMultiActionCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showMultiActionCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedMultiActionCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- With Error State -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Error State Template</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Template demonstrating proper error handling with outlined error alerts.
        Use this pattern when validation fails or when you need to communicate issues to the user.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4" variant="flat">
        <v-card-text>
          <div class="d-flex flex-column align-center mt-5">
            <v-card flat rounded="xl" color="surface" width="620">
              <!-- Header Section -->
              <div class="px-6 pt-4">
                <h3 class="text-h5 font-weight-medium">Connection Failed</h3>
              </div>

              <!-- Content Section -->
              <div class="px-6 py-6 d-flex flex-column ga-6">
                <!-- Form Fields -->
                <div class="d-flex flex-column ga-4">
                  <v-text-field
                    label="Database URL"
                    placeholder="postgresql://localhost:5432"
                    error
                  />

                  <v-text-field
                    label="Username"
                    placeholder="admin"
                  />

                  <v-text-field
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>

                <!-- Error Alerts -->
                <div class="d-flex flex-column ga-4">
                  <v-alert
                    rounded="small"
                    type="error"
                    variant="outlined"
                    title="Connection Error"
                    text="Unable to establish connection to the database. Please check your credentials and network settings."
                  />

                  <v-alert
                    rounded="small"
                    type="warning"
                    variant="outlined"
                    title="Security Warning"
                    text="Using an unencrypted connection may expose sensitive data."
                  />
                </div>
              </div>

              <!-- Divider -->
              <v-divider />

              <!-- Footer Section -->
              <div class="d-flex py-4 px-6">
                <v-btn
                  variant="text"
                  color="secondary"
                  text="Cancel"
                />
                <v-spacer />
                <v-btn
                  color="primary"
                  variant="flat"
                  text="Retry Connection"
                />
              </div>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showErrorCode = !showErrorCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showErrorCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showErrorCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedErrorCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Usage Guidelines -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Usage Guidelines</h2>
      <v-card>
        <v-card-text>
          <div class="d-flex flex-column ga-4">
            <div>
              <h3 class="text-h6 mb-2">When to Use</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2">Multi-step registration or onboarding flows</li>
                <li class="text-body-2 mb-2">Settings and configuration pages</li>
                <li class="text-body-2 mb-2">Resource creation wizards (accounts, projects, etc.)</li>
                <li class="text-body-2 mb-2">Any form requiring structured input with clear progression</li>
              </ul>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">Card Width</h3>
              <p class="text-body-2 mb-2">
                Always use <code class="px-2 py-1 bg-grey-lighten-3 rounded">width="620"</code> for consistency.
                This width provides optimal readability while maintaining a focused layout.
              </p>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">Content Sections</h3>
              <p class="text-body-2 mb-2">
                Use <code class="px-2 py-1 bg-grey-lighten-3 rounded">ga-6</code> (24px gap) between major sections
                like banners, form groups, and alert groups.
                Use <code class="px-2 py-1 bg-grey-lighten-3 rounded">ga-4</code> (16px gap) between related items
                within the same group.
              </p>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">Footer Actions</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2"><strong>Cancel/Back:</strong> Left-aligned, text variant, secondary color</li>
                <li class="text-body-2 mb-2"><strong>Secondary Actions:</strong> Right-aligned, tonal variant (optional)</li>
                <li class="text-body-2 mb-2"><strong>Primary Action:</strong> Right-most, flat variant, primary color</li>
              </ul>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive variables for code display
const showCreationFlowCode = ref(false)
const showSpacingCode = ref(false)
const showMinimalCode = ref(false)
const showMultiActionCode = ref(false)
const showErrorCode = ref(false)

// Code examples
const creationFlowCodeExample = `<template>
  <!-- ProcessCard Component -->
  <ProcessCard
    title="Create New Account"
    width="md"
    cancel-text="Cancel"
    :on-cancel="handleCancel"
    :action-buttons="[
      {
        text: 'Next',
        variant: 'flat',
        onClick: handleNext
      }
    ]"
  >
    <!-- Banner Section (Optional) -->
    <v-banner
      stacked
      icon="mdi-information-outline"
      color="primary"
      class="mb-6"
    >
      <v-banner-text>
        <p class="font-weight-bold">Account Setup</p>
        <p>Fill in your account details to get started with Octo.</p>
      </v-banner-text>
    </v-banner>

    <!-- Form Fields Group -->
    <div class="d-flex flex-column ga-4 mb-6">
      <v-text-field
        label="Account Name"
        hint="Enter a unique name for your account"
        persistent-hint
        placeholder="My Account"
      />

      <v-text-field
        label="Email Address"
        hint="We'll use this for notifications"
        persistent-hint
        placeholder="user@example.com"
        type="email"
      />

      <v-select
        label="Account Type"
        :items="['Personal', 'Team', 'Enterprise']"
        hint="Choose the type that best fits your needs"
        persistent-hint
      />
    </div>

    <!-- Alert Section -->
    <v-alert
      rounded="small"
      type="success"
      variant="outlined"
      title="Validation Passed"
      text="All fields are valid. You can proceed to the next step."
    />
  </ProcessCard>
</template>

<script setup lang="ts">
import { ProcessCard } from '@/components'

const handleCancel = () => {
  console.log('Cancel clicked')
}

const handleNext = () => {
  console.log('Next clicked')
}
<\/script>`

const spacingCodeExample = `<!-- Spacing Hierarchy -->

<!-- Header Section -->
<div class="px-6 pt-4">           <!-- 24px horizontal, 16px top -->
  <h3>Title</h3>
</div>

<!-- Content Section -->
<div class="px-6 py-6 d-flex flex-column ga-6">  <!-- 24px all around, 24px gap -->

  <!-- Major Section 1 (e.g., Banner) -->
  <v-banner>...</v-banner>

  <!-- Major Section 2 (e.g., Form Fields) -->
  <div class="d-flex flex-column ga-4">  <!-- 16px gap between related fields -->
    <v-text-field />
    <v-text-field />
    <v-select />
  </div>

  <!-- Major Section 3 (e.g., Alerts) -->
  <div class="d-flex flex-column ga-4">  <!-- 16px gap between alerts -->
    <v-alert />
    <v-alert />
  </div>

</div>

<!-- Footer Section -->
<div class="d-flex py-4 px-6">    <!-- 16px vertical, 24px horizontal -->
  <v-btn />
  <v-spacer />
  <v-btn />
</div>`

const minimalCodeExample = `<template>
  <!-- ProcessCard Component (Minimal - no banner/alerts) -->
  <ProcessCard
    title="Quick Setup"
    width="md"
    cancel-text="Cancel"
    :on-cancel="handleCancel"
    :action-buttons="[
      {
        text: 'Create',
        variant: 'flat',
        onClick: handleCreate
      }
    ]"
  >
    <!-- Form Fields Only -->
    <div class="d-flex flex-column ga-4">
      <v-text-field
        label="Project Name"
        placeholder="Enter project name"
      />

      <v-text-field
        label="Description"
        placeholder="Brief description"
      />

      <v-select
        label="Region"
        :items="['US East', 'US West', 'EU Central', 'Asia Pacific']"
      />
    </div>
  </ProcessCard>
</template>

<script setup lang="ts">
import { ProcessCard } from '@/components'

const handleCancel = () => {
  console.log('Cancel clicked')
}

const handleCreate = () => {
  console.log('Create clicked')
}
<\/script>`

const multiActionCodeExample = `<template>
  <!-- ProcessCard Component (Multiple Actions) -->
  <ProcessCard
    title="Configure Settings"
    width="md"
    cancel-text="Cancel"
    :on-cancel="handleCancel"
    :action-buttons="[
      {
        text: 'Reset to Default',
        variant: 'tonal',
        onClick: handleReset
      },
      {
        text: 'Save as Draft',
        variant: 'tonal',
        onClick: handleSaveDraft
      },
      {
        text: 'Apply Changes',
        variant: 'flat',
        onClick: handleApply
      }
    ]"
  >
    <!-- Form Fields -->
    <div class="d-flex flex-column ga-4">
      <v-text-field
        label="API Endpoint"
        placeholder="https://api.example.com"
      />

      <v-text-field
        label="API Key"
        type="password"
        placeholder="Enter your API key"
      />

      <v-text-field
        label="Timeout (seconds)"
        type="number"
        placeholder="30"
      />
    </div>
  </ProcessCard>
</template>

<script setup lang="ts">
import { ProcessCard } from '@/components'

const handleCancel = () => {
  console.log('Cancel clicked')
}

const handleReset = () => {
  console.log('Reset to default')
}

const handleSaveDraft = () => {
  console.log('Save as draft')
}

const handleApply = () => {
  console.log('Apply changes')
}
<\/script>`

const errorCodeExample = `<template>
  <!-- ProcessCard Component (With Error States) -->
  <ProcessCard
    title="Connection Failed"
    width="md"
    cancel-text="Cancel"
    :on-cancel="handleCancel"
    :action-buttons="[
      {
        text: 'Retry Connection',
        variant: 'flat',
        onClick: handleRetry
      }
    ]"
  >
    <!-- Form Fields -->
    <div class="d-flex flex-column ga-4 mb-6">
      <v-text-field
        label="Database URL"
        placeholder="postgresql://localhost:5432"
        error
      />

      <v-text-field label="Username" placeholder="admin" />

      <v-text-field
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </div>

    <!-- Error Alerts -->
    <div class="d-flex flex-column ga-4">
      <v-alert
        rounded="small"
        type="error"
        variant="outlined"
        title="Connection Error"
        text="Unable to establish connection. Please check your credentials."
      />

      <v-alert
        rounded="small"
        type="warning"
        variant="outlined"
        title="Security Warning"
        text="Using an unencrypted connection may expose sensitive data."
      />
    </div>
  </ProcessCard>
</template>

<script setup lang="ts">
import { ProcessCard } from '@/components'

const handleCancel = () => {
  console.log('Cancel clicked')
}

const handleRetry = () => {
  console.log('Retry connection')
}
<\/script>`

// Simple syntax highlighter function
const highlightCode = (code: string): string => {
  return code
    // Strings first (to avoid conflicts)
    .replace(/"([^"]*)"/g, '"<span class="string">$1</span>"')
    .replace(/'([^']*)'/g, '\'<span class="string">$1</span>\'')
    .replace(/`([^`]*)`/g, '`<span class="template">$1</span>`')
    // HTML tags (without creating nested spans)
    .replace(/&lt;(\/?[a-zA-Z][\w-]*)/g, '&lt;<span class="tag">$1</span>')
    .replace(/&gt;/g, '<span class="tag">&gt;</span>')
    // Vue directives and props (only if not already in a span)
    .replace(/([:@][\w-]+)(?![^<]*<\/span>)/g, '<span class="directive">$1</span>')
    // JavaScript keywords
    .replace(/\b(import|export|const|let|var|function|from|interface|type|true|false|null|undefined)\b/g, '<span class="keyword">$1</span>')
    // Comments
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="comment">$1</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    // Types and interfaces
    .replace(/\b([A-Z][a-zA-Z]+)\b/g, '<span class="type">$1</span>')
}

// Computed properties for syntax highlighting
const highlightedCreationFlowCode = computed(() => {
  return highlightCode(creationFlowCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedSpacingCode = computed(() => {
  return highlightCode(spacingCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedMinimalCode = computed(() => {
  return highlightCode(minimalCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedMultiActionCode = computed(() => {
  return highlightCode(multiActionCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedErrorCode = computed(() => {
  return highlightCode(errorCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})
</script>

<style scoped>
.code-block {
  background: #1e1e1e !important;
  color: #d4d4d4;
  overflow-x: auto;
  border-radius: 8px;
}

.code-block :deep(.tag) {
  color: #569cd6;
}

.code-block :deep(.directive) {
  color: #c586c0;
}

.code-block :deep(.string) {
  color: #ce9178;
}

.code-block :deep(.keyword) {
  color: #569cd6;
}

.code-block :deep(.comment) {
  color: #6a9955;
}

.code-block :deep(.number) {
  color: #b5cea8;
}

.code-block :deep(.type) {
  color: #4ec9b0;
}

.code-block :deep(.template) {
  color: #ce9178;
}
</style>
