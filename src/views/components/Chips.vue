<template>
    <div>
        <div class="mb-8">
            <h1 class="text-h4 font-weight-bold mb-4">Chips</h1>
            <p class="text-body-1 mb-6">
                Chips component utilizes the standard v-chip from Vuetify. It informs the user through simple text about
                a scenario. All chips use <code>rounded="lg"</code> and <code>variant="tonal"</code> by default for
                consistency.
            </p>
        </div>

        <!-- Display Chips - All Available Props -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Display Chips - Available Props</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                This example demonstrates the various props available for chips including colors, sizes, icons, and
                variants. These chips are for display purposes only (non-interactive).
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <!-- Colors -->
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Colors (variant="tonal")</p>
                        <v-chip-group>
                            <v-chip variant="tonal" rounded="lg" color="primary">Primary</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="secondary">Secondary</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="success">Success</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="error">Error</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="warning">Warning</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="info">Info</v-chip>
                        </v-chip-group>
                    </div>

                    <v-divider class="my-4" />

                    <!-- With Icons -->
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">With Icons</p>
                        <v-chip-group>
                            <v-chip variant="tonal" rounded="lg" color="success" prepend-icon="mdi-check-circle">
                                Active
                            </v-chip>
                            <v-chip variant="tonal" rounded="lg" color="error" prepend-icon="mdi-alert-circle">
                                Inactive
                            </v-chip>
                            <v-chip variant="tonal" rounded="lg" color="info" append-icon="mdi-information">
                                Info
                            </v-chip>
                            <v-chip variant="tonal" rounded="lg" color="warning" prepend-icon="mdi-alert"
                                append-icon="mdi-chevron-right">
                                Warning
                            </v-chip>
                        </v-chip-group>
                    </div>

                    <v-divider class="my-4" />

                    <!-- Sizes -->
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Sizes</p>
                        <v-chip-group>
                            <v-chip variant="tonal" rounded="lg" color="primary" size="x-small">X-Small</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="primary" size="small">Small</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="primary" size="default">Default</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="primary" size="large">Large</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="primary" size="x-large">X-Large</v-chip>
                        </v-chip-group>
                    </div>

                    <v-divider class="my-4" />

                    <!-- Variants -->
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Variants</p>
                        <v-chip-group>
                            <v-chip variant="tonal" rounded="lg" color="primary">Tonal (Default)</v-chip>
                            <v-chip variant="flat" rounded="lg" color="primary">Flat</v-chip>
                            <v-chip variant="outlined" rounded="lg" color="primary">Outlined</v-chip>
                            <v-chip variant="elevated" rounded="lg" color="primary">Elevated</v-chip>
                        </v-chip-group>
                    </div>

                    <v-divider class="my-4" />

                    <!-- Closable -->
                    <div>
                        <p class="text-caption font-weight-medium mb-2">Closable (for tags/filters)</p>
                        <v-chip-group>
                            <v-chip variant="tonal" rounded="lg" color="primary" closable>Closable Tag</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="secondary" closable>Filter: Active</v-chip>
                            <v-chip variant="tonal" rounded="lg" color="info" closable>Category: Cloud</v-chip>
                        </v-chip-group>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showDisplayCode = !showDisplayCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showDisplayCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showDisplayCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedDisplayCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Multi-Selection Chips -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Multi-Selection Chips</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Interactive chips that allow multiple selections. Use <code>v-model</code> with the <code>multiple</code>
                prop. The <code>filter</code> prop adds checkmark icons to selected chips. Selected chips automatically
                receive a flat variant with the specified color.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-6">
                        <p class="text-caption font-weight-medium mb-2">Select Categories (Multiple Selection)</p>
                        <v-chip-group v-model="selectedCategories" column multiple>
                            <v-chip variant="tonal" rounded="lg" filter value="cloud">Cloud</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="security">Security</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="analytics">Analytics</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="compute">Compute</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="storage">Storage</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="network">Network</v-chip>
                        </v-chip-group>
                        <p class="text-caption mt-3 text-medium-emphasis">
                            Selected: {{ selectedCategories.length > 0 ? selectedCategories.join(', ') : 'None' }}
                        </p>
                    </div>

                    <v-divider class="my-4" />

                    <div>
                        <p class="text-caption font-weight-medium mb-2">Select Providers (Custom Color)</p>
                        <v-chip-group v-model="selectedProviders" color="success" column multiple>
                            <v-chip variant="tonal" rounded="lg" filter value="aws"
                                prepend-icon="mdi-aws">AWS</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="azure"
                                prepend-icon="mdi-microsoft-azure">Azure</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="gcp"
                                prepend-icon="mdi-google-cloud">GCP</v-chip>
                        </v-chip-group>
                        <p class="text-caption mt-3 text-medium-emphasis">
                            Selected: {{ selectedProviders.length > 0 ? selectedProviders.join(', ') : 'None' }}
                        </p>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showMultiSelectionCode = !showMultiSelectionCode" variant="text"
                        prepend-icon="mdi-code-tags" class="ma-4">
                        {{ showMultiSelectionCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showMultiSelectionCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedMultiSelectionCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Single Selection Chips -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Single Selection Chips</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Interactive chips that allow only one selection at a time. Use <code>mandatory</code> to require a
                selection.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-6">
                        <p class="text-caption font-weight-medium mb-2">Select Priority (Single, Mandatory)</p>
                        <v-chip-group v-model="selectedPriority" mandatory>
                            <v-chip variant="tonal" rounded="lg" value="low" color="info">Low</v-chip>
                            <v-chip variant="tonal" rounded="lg" value="medium" color="warning">Medium</v-chip>
                            <v-chip variant="tonal" rounded="lg" value="high" color="error">High</v-chip>
                            <v-chip variant="tonal" rounded="lg" value="critical" color="error">Critical</v-chip>
                        </v-chip-group>
                        <p class="text-caption mt-3 text-medium-emphasis">
                            Selected: {{ selectedPriority }}
                        </p>
                    </div>

                    <v-divider class="my-4" />

                    <div>
                        <p class="text-caption font-weight-medium mb-2">Select Status (Single, Optional)</p>
                        <v-chip-group v-model="selectedStatus" color="primary">
                            <v-chip variant="tonal" rounded="lg" filter value="active">Active</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="pending">Pending</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="completed">Completed</v-chip>
                            <v-chip variant="tonal" rounded="lg" filter value="archived">Archived</v-chip>
                        </v-chip-group>
                        <p class="text-caption mt-3 text-medium-emphasis">
                            Selected: {{ selectedStatus ?? 'None' }}
                        </p>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showSingleSelectionCode = !showSingleSelectionCode" variant="text"
                        prepend-icon="mdi-code-tags" class="ma-4">
                        {{ showSingleSelectionCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showSingleSelectionCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedSingleSelectionCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Code visibility toggles
const showDisplayCode = ref(false)
const showMultiSelectionCode = ref(false)
const showSingleSelectionCode = ref(false)

// Multi-selection reactive data
const selectedCategories = ref<string[]>([])
const selectedProviders = ref<string[]>([])

// Single selection reactive data
const selectedPriority = ref('medium')
const selectedStatus = ref<string | null>(null)

// Code examples with proper formatting
const displayCodeExample = `<!-- Colors -->
<v-chip-group>
  <v-chip variant="tonal" rounded="lg" color="primary">Primary</v-chip>
  <v-chip variant="tonal" rounded="lg" color="success">Success</v-chip>
  <v-chip variant="tonal" rounded="lg" color="error">Error</v-chip>
</v-chip-group>

<!-- With Icons -->
<v-chip-group>
  <v-chip variant="tonal" rounded="lg" color="success" prepend-icon="mdi-check-circle">
    Active
  </v-chip>
  <v-chip variant="tonal" rounded="lg" color="info" append-icon="mdi-information">
    Info
  </v-chip>
</v-chip-group>

<!-- Sizes -->
<v-chip-group>
  <v-chip variant="tonal" rounded="lg" color="primary" size="small">Small</v-chip>
  <v-chip variant="tonal" rounded="lg" color="primary" size="default">Default</v-chip>
  <v-chip variant="tonal" rounded="lg" color="primary" size="large">Large</v-chip>
</v-chip-group>

<!-- Variants -->
<v-chip-group>
  <v-chip variant="tonal" rounded="lg" color="primary">Tonal</v-chip>
  <v-chip variant="flat" rounded="lg" color="primary">Flat</v-chip>
  <v-chip variant="outlined" rounded="lg" color="primary">Outlined</v-chip>
</v-chip-group>

<!-- Closable -->
<v-chip-group>
  <v-chip variant="tonal" rounded="lg" color="primary" closable>Closable Tag</v-chip>
</v-chip-group>`

const multiSelectionCodeExample = `<template>
  <v-chip-group v-model="selectedCategories" column multiple>
    <v-chip variant="tonal" rounded="lg" filter value="cloud">Cloud</v-chip>
    <v-chip variant="tonal" rounded="lg" filter value="security">Security</v-chip>
    <v-chip variant="tonal" rounded="lg" filter value="analytics">Analytics</v-chip>
  </v-chip-group>

  <p>Selected: {{ selectedCategories.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCategories = ref<string[]>([])
<\/script>`

const singleSelectionCodeExample = `<template>
  <!-- Mandatory selection (always has one selected) -->
  <v-chip-group v-model="selectedPriority" mandatory>
    <v-chip variant="tonal" rounded="lg" value="low" color="info">Low</v-chip>
    <v-chip variant="tonal" rounded="lg" value="medium" color="warning">Medium</v-chip>
    <v-chip variant="tonal" rounded="lg" value="high" color="error">High</v-chip>
  </v-chip-group>

  <p>Selected: {{ selectedPriority }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedPriority = ref('medium')
<\/script>`

// Simple computed properties that just return escaped HTML
const highlightedDisplayCode = computed(() =>
    displayCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedMultiSelectionCode = computed(() =>
    multiSelectionCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedSingleSelectionCode = computed(() =>
    singleSelectionCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)
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
    /* Blue for HTML tags */
}

.code-block :deep(.attribute) {
    color: #92c5f7;
    /* Light blue for attributes */
}

.code-block :deep(.directive) {
    color: #c586c0;
    /* Purple for Vue directives */
}

.code-block :deep(.string) {
    color: #ce9178;
    /* Orange for strings */
}

.code-block :deep(.template) {
    color: #ce9178;
    /* Orange for template literals */
}

.code-block :deep(.keyword) {
    color: #569cd6;
    /* Blue for JavaScript keywords */
}

.code-block :deep(.comment) {
    color: #6a9955;
    /* Green for comments */
}

.code-block :deep(.number) {
    color: #b5cea8;
    /* Light green for numbers */
}

.code-block :deep(.type) {
    color: #4ec9b0;
    /* Teal for types/interfaces */
}
</style>
