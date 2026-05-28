<template>
    <div>
        <div class="mb-8">
            <h1 class="text-h4 font-weight-bold mb-4">Alerts</h1>
            <p class="text-body-1 mb-6">
                Alerts component utilizes the standard v-alert from Vuetify. It communicates important messages to users
                and provides contextual feedback. Alerts support different types, colors, variants, and can include icons,
                titles, and actions.
            </p>
        </div>

        <!-- Basic Alerts -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Basic Alerts - Type & Color Variations</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Alerts can use different types (success, info, warning, error) or custom colors. The default variant is
                "tonal" which provides a subtle background color that adapts to both light and dark themes.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <!-- Type-based alerts -->
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Type-based Alerts</p>
                        <v-alert type="success" class="mb-3">
                            This is a success alert with type="success"
                        </v-alert>
                        <v-alert type="info" class="mb-3">
                            This is an info alert with type="info"
                        </v-alert>
                        <v-alert type="warning" class="mb-3">
                            This is a warning alert with type="warning"
                        </v-alert>
                        <v-alert type="error">
                            This is an error alert with type="error"
                        </v-alert>
                    </div>

                    <v-divider class="my-4" />

                    <!-- Color-based alerts -->
                    <div>
                        <p class="text-caption font-weight-medium mb-2">Color-based Alerts</p>
                        <v-alert color="primary" class="mb-3">
                            This is a primary colored alert
                        </v-alert>
                        <v-alert color="secondary" class="mb-3">
                            This is a secondary colored alert
                        </v-alert>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showBasicCode = !showBasicCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showBasicCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showBasicCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedBasicCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Alerts with Titles -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Alerts with Titles</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Use the <code>title</code> prop to add a bold heading to your alert. This helps users quickly understand
                the message category or importance.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert type="success" title="Success!" class="mb-3">
                        Your changes have been saved successfully.
                    </v-alert>
                    <v-alert type="info" title="Information" class="mb-3">
                        Please review the updated terms and conditions before proceeding.
                    </v-alert>
                    <v-alert type="warning" title="Warning" class="mb-3">
                        Your session will expire in 5 minutes. Please save your work.
                    </v-alert>
                    <v-alert type="error" title="Error">
                        Unable to process your request. Please try again later.
                    </v-alert>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showTitleCode = !showTitleCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showTitleCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showTitleCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedTitleCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Alerts with Icons -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Alerts with Custom Icons</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Customize alert icons using the <code>icon</code> prop. You can also hide the icon with
                <code>icon="false"</code>.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert type="success" icon="mdi-cloud-check" title="Cloud Sync Complete" class="mb-3">
                        All your files have been synchronized to the cloud.
                    </v-alert>
                    <v-alert type="info" icon="mdi-lightbulb-on" title="Pro Tip" class="mb-3">
                        You can use keyboard shortcuts to speed up your workflow.
                    </v-alert>
                    <v-alert type="warning" icon="mdi-shield-alert" title="Security Notice" class="mb-3">
                        Your password will expire in 3 days. Please update it soon.
                    </v-alert>
                    <v-alert type="error" icon="false" class="mb-3">
                        This alert has no icon (icon="false")
                    </v-alert>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showIconCode = !showIconCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showIconCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showIconCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedIconCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Dismissible Alerts -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Dismissible Alerts</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Use <code>v-model</code> with the <code>closable</code> prop to make alerts dismissible. Users can close
                the alert by clicking the close button.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert v-model="showAlert1" type="success" closable title="Dismissible Success" class="mb-3">
                        Click the X button to dismiss this alert.
                    </v-alert>
                    <v-alert v-model="showAlert2" type="info" closable class="mb-3">
                        This info alert can be closed.
                    </v-alert>

                    <v-btn v-if="!showAlert1 || !showAlert2" @click="resetAlerts" variant="tonal" color="primary"
                        size="small">
                        Reset Dismissed Alerts
                    </v-btn>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showDismissibleCode = !showDismissibleCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showDismissibleCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showDismissibleCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedDismissibleCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Alert Variants -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Alert Variants</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Alerts support different visual variants: <code>tonal</code> (default), <code>flat</code>,
                <code>outlined</code>, <code>elevated</code>, and <code>plain</code>.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert type="info" variant="tonal" title="Tonal Variant (Default)" class="mb-3">
                        Subtle background color with good contrast.
                    </v-alert>
                    <v-alert type="info" variant="flat" title="Flat Variant" class="mb-3">
                        Solid background color without elevation.
                    </v-alert>
                    <v-alert type="info" variant="outlined" title="Outlined Variant" class="mb-3">
                        Border-only style with transparent background.
                    </v-alert>
                    <v-alert type="info" variant="elevated" title="Elevated Variant" class="mb-3">
                        Includes shadow elevation for depth.
                    </v-alert>
                    <v-alert type="info" variant="plain" title="Plain Variant">
                        Minimal styling with just the icon and text.
                    </v-alert>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showVariantCode = !showVariantCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showVariantCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showVariantCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedVariantCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Border Variants -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Alert Border Variants</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Add emphasis to alerts using the <code>border</code> prop with values: <code>start</code>,
                <code>end</code>, <code>top</code>, or <code>bottom</code>.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert type="success" border="start" title="Start Border" class="mb-3">
                        Alert with border on the left side (start).
                    </v-alert>
                    <v-alert type="info" border="end" title="End Border" class="mb-3">
                        Alert with border on the right side (end).
                    </v-alert>
                    <v-alert type="warning" border="top" title="Top Border" class="mb-3">
                        Alert with border on the top.
                    </v-alert>
                    <v-alert type="error" border="bottom" title="Bottom Border">
                        Alert with border on the bottom.
                    </v-alert>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showBorderCode = !showBorderCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showBorderCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showBorderCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedBorderCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Prominent Alerts -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Prominent Alerts</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Use the <code>prominent</code> prop to increase the alert's visual prominence with a larger icon.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert type="success" prominent title="Deployment Successful" class="mb-3">
                        Your application has been deployed to production successfully.
                    </v-alert>
                    <v-alert type="error" prominent title="Critical Error" class="mb-3">
                        A critical error occurred. Please contact support immediately.
                    </v-alert>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showProminentCode = !showProminentCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showProminentCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showProminentCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedProminentCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Density Variants -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Alert Density</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Control vertical spacing with the <code>density</code> prop: <code>default</code>, <code>comfortable</code>,
                or <code>compact</code>.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-alert type="info" density="default" class="mb-3">
                        Default density alert
                    </v-alert>
                    <v-alert type="info" density="comfortable" class="mb-3">
                        Comfortable density alert
                    </v-alert>
                    <v-alert type="info" density="compact">
                        Compact density alert
                    </v-alert>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showDensityCode = !showDensityCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showDensityCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showDensityCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedDensityCode"></pre>
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
const showBasicCode = ref(false)
const showTitleCode = ref(false)
const showIconCode = ref(false)
const showDismissibleCode = ref(false)
const showVariantCode = ref(false)
const showBorderCode = ref(false)
const showProminentCode = ref(false)
const showDensityCode = ref(false)

// Dismissible alert state
const showAlert1 = ref(true)
const showAlert2 = ref(true)

const resetAlerts = () => {
    showAlert1.value = true
    showAlert2.value = true
}

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
    // Numbers
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    // Types and interfaces
    .replace(/\b([A-Z][a-zA-Z]+)\b/g, '<span class="type">$1</span>')
}

// Code examples
const basicCodeExample = `<!-- Type-based alerts -->
<v-alert type="success">
  This is a success alert with type="success"
</v-alert>
<v-alert type="info">
  This is an info alert with type="info"
</v-alert>
<v-alert type="warning">
  This is a warning alert with type="warning"
</v-alert>
<v-alert type="error">
  This is an error alert with type="error"
</v-alert>

<!-- Color-based alerts -->
<v-alert color="primary">
  This is a primary colored alert
</v-alert>
<v-alert color="secondary">
  This is a secondary colored alert
</v-alert>`

const titleCodeExample = `<v-alert type="success" title="Success!">
  Your changes have been saved successfully.
</v-alert>

<v-alert type="info" title="Information">
  Please review the updated terms and conditions.
</v-alert>

<v-alert type="warning" title="Warning">
  Your session will expire in 5 minutes.
</v-alert>

<v-alert type="error" title="Error">
  Unable to process your request.
</v-alert>`

const iconCodeExample = `<v-alert type="success" icon="mdi-cloud-check" title="Cloud Sync Complete">
  All your files have been synchronized to the cloud.
</v-alert>

<v-alert type="info" icon="mdi-lightbulb-on" title="Pro Tip">
  You can use keyboard shortcuts to speed up your workflow.
</v-alert>

<v-alert type="warning" icon="mdi-shield-alert" title="Security Notice">
  Your password will expire in 3 days.
</v-alert>

<v-alert type="error" icon="false">
  This alert has no icon (icon="false")
</v-alert>`

const dismissibleCodeExample = `<template>
  <v-alert v-model="showAlert1" type="success" closable title="Dismissible Success">
    Click the X button to dismiss this alert.
  </v-alert>

  <v-alert v-model="showAlert2" type="info" closable>
    This info alert can be closed.
  </v-alert>

  <v-btn v-if="!showAlert1 || !showAlert2" @click="resetAlerts">
    Reset Dismissed Alerts
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showAlert1 = ref(true)
const showAlert2 = ref(true)

const resetAlerts = () => {
  showAlert1.value = true
  showAlert2.value = true
}
<\/script>`

const variantCodeExample = `<v-alert type="info" variant="tonal" title="Tonal Variant (Default)">
  Subtle background color with good contrast.
</v-alert>

<v-alert type="info" variant="flat" title="Flat Variant">
  Solid background color without elevation.
</v-alert>

<v-alert type="info" variant="outlined" title="Outlined Variant">
  Border-only style with transparent background.
</v-alert>

<v-alert type="info" variant="elevated" title="Elevated Variant">
  Includes shadow elevation for depth.
</v-alert>

<v-alert type="info" variant="plain" title="Plain Variant">
  Minimal styling with just the icon and text.
</v-alert>`

const borderCodeExample = `<v-alert type="success" border="start" title="Start Border">
  Alert with border on the left side (start).
</v-alert>

<v-alert type="info" border="end" title="End Border">
  Alert with border on the right side (end).
</v-alert>

<v-alert type="warning" border="top" title="Top Border">
  Alert with border on the top.
</v-alert>

<v-alert type="error" border="bottom" title="Bottom Border">
  Alert with border on the bottom.
</v-alert>`

const prominentCodeExample = `<v-alert type="success" prominent title="Deployment Successful">
  Your application has been deployed to production successfully.
</v-alert>

<v-alert type="error" prominent title="Critical Error">
  A critical error occurred. Please contact support immediately.
</v-alert>`

const densityCodeExample = `<v-alert type="info" density="default">
  Default density alert
</v-alert>

<v-alert type="info" density="comfortable">
  Comfortable density alert
</v-alert>

<v-alert type="info" density="compact">
  Compact density alert
</v-alert>`

// Computed properties for syntax highlighting
const highlightedBasicCode = computed(() => {
  return highlightCode(basicCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedTitleCode = computed(() => {
  return highlightCode(titleCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedIconCode = computed(() => {
  return highlightCode(iconCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedDismissibleCode = computed(() => {
  return highlightCode(dismissibleCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedVariantCode = computed(() => {
  return highlightCode(variantCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedBorderCode = computed(() => {
  return highlightCode(borderCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedProminentCode = computed(() => {
  return highlightCode(prominentCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedDensityCode = computed(() => {
  return highlightCode(densityCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
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
</style>
