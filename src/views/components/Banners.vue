<template>
    <div>
        <div class="mb-8">
            <h1 class="text-h4 font-weight-bold mb-4">Banners</h1>
            <p class="text-body-1 mb-6">
                Banners component utilizes the standard v-banner from Vuetify. It displays important, non-disruptive
                messages and related actions to users. Banners are typically used for contextual information that requires
                user acknowledgment or action, positioned prominently at the top of content areas. Banner action buttons
                use <code>variant="text"</code> by default for a subtle, non-intrusive appearance.
            </p>
        </div>

        <!-- Basic Banner -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Basic Banner</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                A simple banner with text content. Banners are typically displayed at the top of a page or section to
                communicate important information.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner>
                        <v-banner-text>
                            Welcome to the Octo Design System! Explore our components and foundations to build consistent
                            user interfaces.
                        </v-banner-text>
                    </v-banner>
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

        <!-- Banner Layout Patterns -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Banner Layout Patterns</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Banners support two layout patterns: <strong>horizontal</strong> (default) where actions appear on the
                right side, and <strong>stacked</strong> (using the <code>stacked</code> prop) where actions appear below
                the content.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <!-- Horizontal Banner Layout -->
                    <div class="mb-6">
                        <p class="text-caption font-weight-medium mb-2">Horizontal Banner (Default) - Actions on Right</p>
                        <v-banner icon="mdi-information" color="info" lines="one">
                            <v-banner-text>
                                New update available
                            </v-banner-text>

                            <template v-slot:actions>
                                <v-btn variant="text">Dismiss</v-btn>
                                <v-btn variant="text" color="info">Update</v-btn>
                            </template>
                        </v-banner>
                    </div>

                    <v-divider class="my-4" />

                    <!-- Stacked Banner Layout -->
                    <div>
                        <p class="text-caption font-weight-medium mb-2">Stacked Banner - Actions Below Content</p>
                        <v-banner stacked icon="mdi-cloud-upload" color="primary">
                            <v-banner-text>
                                Your files are ready to upload. This will sync 156 files to your cloud storage. You can
                                cancel this operation or schedule it for later.
                            </v-banner-text>

                            <template v-slot:actions>
                                <v-btn variant="text">Cancel</v-btn>
                                <v-btn variant="text">Upload Later</v-btn>
                                <v-btn variant="text" color="primary">Upload Now</v-btn>
                            </template>
                        </v-banner>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showLayoutCode = !showLayoutCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showLayoutCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showLayoutCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedLayoutCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Banner with Icon -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Banner with Icon</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Add visual emphasis with the <code>icon</code> prop. Icons help users quickly identify the type or
                importance of the message.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner icon="mdi-information" color="info" class="mb-3">
                        <v-banner-text>
                            This is an informational banner with an icon for better visual communication.
                        </v-banner-text>
                    </v-banner>

                    <v-banner icon="mdi-alert" color="warning" class="mb-3">
                        <v-banner-text>
                            Important: Scheduled maintenance is planned for this weekend.
                        </v-banner-text>
                    </v-banner>

                    <v-banner icon="mdi-check-circle" color="success">
                        <v-banner-text>
                            Your account has been verified successfully!
                        </v-banner-text>
                    </v-banner>
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

        <!-- Banner with Actions -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Banner with Actions</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Use the <code>actions</code> slot to add interactive buttons. Actions allow users to respond to the
                banner's message or dismiss it. Banner buttons should use <code>variant="text"</code> for consistency.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner icon="mdi-cookie" color="primary" class="mb-3">
                        <v-banner-text>
                            We use cookies to enhance your experience. By continuing to visit this site you agree to our use
                            of cookies.
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text">Learn More</v-btn>
                            <v-btn variant="text" color="primary">Accept</v-btn>
                        </template>
                    </v-banner>

                    <v-banner v-model="showBanner1" icon="mdi-update" color="info">
                        <v-banner-text>
                            A new version is available. Would you like to update now?
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text" @click="showBanner1 = false">Dismiss</v-btn>
                            <v-btn variant="text" color="info" @click="handleUpdate">Update Now</v-btn>
                        </template>
                    </v-banner>

                    <v-btn v-if="!showBanner1" @click="showBanner1 = true" variant="tonal" color="primary" size="small"
                        class="mt-3">
                        Show Update Banner
                    </v-btn>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showActionsCode = !showActionsCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showActionsCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showActionsCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedActionsCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Banner with Close Icon -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Banner with Close Icon</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                While banners don't have a built-in close button like alerts, you can add an icon button in the actions
                slot. Use <code>icon="mdi-close"</code> for a standard close icon.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner v-model="showBanner3" icon="mdi-information" color="info" class="mb-3">
                        <v-banner-text>
                            This banner has a close icon button
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn icon="mdi-close" variant="text" size="small" @click="showBanner3 = false" />
                        </template>
                    </v-banner>

                    <v-banner v-model="showBanner4" icon="mdi-alert" color="warning" class="mb-3">
                        <v-banner-text>
                            You can combine close icon with other action buttons
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text">View Details</v-btn>
                            <v-btn icon="mdi-close" variant="text" size="small" @click="showBanner4 = false" />
                        </template>
                    </v-banner>

                    <v-banner v-model="showBanner5" stacked icon="mdi-cloud-sync" color="primary">
                        <v-banner-text>
                            Close icon also works with stacked banners. The icon appears at the end of the actions row.
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text">Sync Now</v-btn>
                            <v-btn variant="text">Sync Later</v-btn>
                            <v-btn icon="mdi-close" variant="text" size="small" @click="showBanner5 = false" />
                        </template>
                    </v-banner>

                    <v-btn v-if="!showBanner3 || !showBanner4 || !showBanner5" @click="resetCloseBanners" variant="tonal"
                        color="primary" size="small" class="mt-3">
                        Reset Closed Banners
                    </v-btn>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showCloseIconCode = !showCloseIconCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showCloseIconCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showCloseIconCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedCloseIconCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Sticky Banner -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Sticky Banner</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Use the <code>sticky</code> prop to keep the banner visible at the top of the viewport as users scroll.
                Perfect for important persistent messages.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner sticky icon="mdi-bell" color="warning">
                        <v-banner-text>
                            This is a sticky banner that stays at the top when scrolling (within its container).
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text">Dismiss</v-btn>
                        </template>
                    </v-banner>

                    <div class="mt-4 pa-4" style="background: rgba(0,0,0,0.05); border-radius: 8px;">
                        <p class="text-caption">
                            Scroll content here... In a real application, the sticky banner would remain visible at the top
                            of the page.
                        </p>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showStickyCode = !showStickyCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showStickyCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showStickyCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedStickyCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Multi-line Banner -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Multi-line Banner</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Banners automatically handle longer content and can display multiple lines of text. Consider using stacked
                layout for better readability with longer messages.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner stacked icon="mdi-cloud-alert" color="error">
                        <v-banner-text>
                            <div>
                                <div class="font-weight-bold mb-1">Service Disruption Detected</div>
                                We are currently experiencing issues with our cloud infrastructure. Our team is actively
                                working to resolve this issue. We apologize for any inconvenience this may cause and
                                appreciate your patience.
                            </div>
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text">Status Page</v-btn>
                            <v-btn variant="text">Contact Support</v-btn>
                            <v-btn variant="text" color="error">Acknowledge</v-btn>
                        </template>
                    </v-banner>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showMultilineCode = !showMultilineCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showMultilineCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showMultilineCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedMultilineCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Color Variants -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Color Variants</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Customize banner colors using the <code>color</code> prop to match your message type or branding.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner color="primary" icon="mdi-information" class="mb-3">
                        <v-banner-text>Primary banner for general information</v-banner-text>
                    </v-banner>

                    <v-banner color="secondary" icon="mdi-star" class="mb-3">
                        <v-banner-text>Secondary banner for supporting information</v-banner-text>
                    </v-banner>

                    <v-banner color="success" icon="mdi-check-circle" class="mb-3">
                        <v-banner-text>Success banner for positive confirmations</v-banner-text>
                    </v-banner>

                    <v-banner color="info" icon="mdi-information" class="mb-3">
                        <v-banner-text>Info banner for helpful tips</v-banner-text>
                    </v-banner>

                    <v-banner color="warning" icon="mdi-alert" class="mb-3">
                        <v-banner-text>Warning banner for caution messages</v-banner-text>
                    </v-banner>

                    <v-banner color="error" icon="mdi-alert-circle">
                        <v-banner-text>Error banner for critical alerts</v-banner-text>
                    </v-banner>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showColorCode = !showColorCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showColorCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showColorCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedColorCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Dismissible Banner with v-model -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Dismissible Banner (v-model)</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Control banner visibility programmatically using <code>v-model</code>. This is useful for dismissible
                banners or showing/hiding based on user actions.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner v-model="showBanner2" icon="mdi-gift" color="success">
                        <v-banner-text>
                            🎉 Special offer! Get 20% off your first purchase. Limited time only!
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text" @click="showBanner2 = false">Dismiss</v-btn>
                            <v-btn variant="text" color="success">Shop Now</v-btn>
                        </template>
                    </v-banner>

                    <v-btn v-if="!showBanner2" @click="showBanner2 = true" variant="tonal" color="primary" size="small"
                        class="mt-3">
                        Show Promotional Banner
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

        <!-- Mobile Responsive Banner -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Mobile Responsive</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                Banners are automatically responsive. On mobile devices, actions stack vertically and the layout adjusts
                for smaller screens.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <v-banner icon="mdi-cellphone" color="info">
                        <v-banner-text>
                            This banner adjusts its layout for mobile screens. Try resizing your browser window to see the
                            responsive behavior.
                        </v-banner-text>

                        <template v-slot:actions>
                            <v-btn variant="text">Cancel</v-btn>
                            <v-btn variant="text">Learn More</v-btn>
                            <v-btn variant="text" color="info">Got It</v-btn>
                        </template>
                    </v-banner>
                </v-card-text>
            </v-card>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showMobileCode = !showMobileCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showMobileCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showMobileCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedMobileCode"></pre>
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
const showLayoutCode = ref(false)
const showIconCode = ref(false)
const showActionsCode = ref(false)
const showCloseIconCode = ref(false)
const showStickyCode = ref(false)
const showMultilineCode = ref(false)
const showColorCode = ref(false)
const showDismissibleCode = ref(false)
const showMobileCode = ref(false)

// Banner visibility state
const showBanner1 = ref(true)
const showBanner2 = ref(true)
const showBanner3 = ref(true)
const showBanner4 = ref(true)
const showBanner5 = ref(true)

const handleUpdate = () => {
    alert('Update initiated!')
    showBanner1.value = false
}

const resetCloseBanners = () => {
    showBanner3.value = true
    showBanner4.value = true
    showBanner5.value = true
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
const basicCodeExample = `<v-banner>
  <v-banner-text>
    Welcome to the Octo Design System! Explore our components and foundations.
  </v-banner-text>
</v-banner>`

const layoutCodeExample = `<!-- Horizontal Banner (Default) - Actions on Right -->
<v-banner icon="mdi-information" color="info" lines="one">
  <v-banner-text>
    New update available
  </v-banner-text>

  <template v-slot:actions>
    <v-btn variant="text">Dismiss</v-btn>
    <v-btn variant="text" color="info">Update</v-btn>
  </template>
</v-banner>

<!-- Stacked Banner - Actions Below Content -->
<v-banner stacked icon="mdi-cloud-upload" color="primary">
  <v-banner-text>
    Your files are ready to upload. This will sync 156 files to your cloud
    storage. You can cancel this operation or schedule it for later.
  </v-banner-text>

  <template v-slot:actions>
    <v-btn variant="text">Cancel</v-btn>
    <v-btn variant="text">Upload Later</v-btn>
    <v-btn variant="text" color="primary">Upload Now</v-btn>
  </template>
</v-banner>`

const iconCodeExample = `<v-banner icon="mdi-information" color="info">
  <v-banner-text>
    This is an informational banner with an icon.
  </v-banner-text>
</v-banner>

<v-banner icon="mdi-alert" color="warning">
  <v-banner-text>
    Important: Scheduled maintenance is planned for this weekend.
  </v-banner-text>
</v-banner>

<v-banner icon="mdi-check-circle" color="success">
  <v-banner-text>
    Your account has been verified successfully!
  </v-banner-text>
</v-banner>`

const actionsCodeExample = `<template>
  <v-banner v-model="showBanner" icon="mdi-update" color="info">
    <v-banner-text>
      A new version is available. Would you like to update now?
    </v-banner-text>

    <template v-slot:actions>
      <v-btn variant="text" @click="showBanner = false">Dismiss</v-btn>
      <v-btn variant="text" color="info" @click="handleUpdate">Update Now</v-btn>
    </template>
  </v-banner>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBanner = ref(true)

const handleUpdate = () => {
  // Handle update logic
  showBanner.value = false
}
<\/script>`

const closeIconCodeExample = `<template>
  <!-- Close icon only -->
  <v-banner v-model="showBanner" icon="mdi-information" color="info">
    <v-banner-text>
      This banner has a close icon button
    </v-banner-text>

    <template v-slot:actions>
      <v-btn
        icon="mdi-close"
        variant="text"
        size="small"
        @click="showBanner = false"
      />
    </template>
  </v-banner>

  <!-- Close icon with other actions -->
  <v-banner v-model="showBanner2" icon="mdi-alert" color="warning">
    <v-banner-text>
      You can combine close icon with other action buttons
    </v-banner-text>

    <template v-slot:actions>
      <v-btn variant="text">View Details</v-btn>
      <v-btn
        icon="mdi-close"
        variant="text"
        size="small"
        @click="showBanner2 = false"
      />
    </template>
  </v-banner>

  <!-- Stacked with close icon -->
  <v-banner v-model="showBanner3" stacked icon="mdi-cloud-sync" color="primary">
    <v-banner-text>
      Close icon also works with stacked banners.
    </v-banner-text>

    <template v-slot:actions>
      <v-btn variant="text">Sync Now</v-btn>
      <v-btn variant="text">Sync Later</v-btn>
      <v-btn
        icon="mdi-close"
        variant="text"
        size="small"
        @click="showBanner3 = false"
      />
    </template>
  </v-banner>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBanner = ref(true)
const showBanner2 = ref(true)
const showBanner3 = ref(true)
<\/script>`

const stickyCodeExample = `<v-banner sticky icon="mdi-bell" color="warning">
  <v-banner-text>
    This is a sticky banner that stays at the top when scrolling.
  </v-banner-text>

  <template v-slot:actions>
    <v-btn variant="text">Dismiss</v-btn>
  </template>
</v-banner>`

const multilineCodeExample = `<v-banner stacked icon="mdi-cloud-alert" color="error">
  <v-banner-text>
    <div>
      <div class="font-weight-bold mb-1">Service Disruption Detected</div>
      We are currently experiencing issues with our cloud infrastructure.
      Our team is actively working to resolve this issue.
    </div>
  </v-banner-text>

  <template v-slot:actions>
    <v-btn variant="text">Status Page</v-btn>
    <v-btn variant="text">Contact Support</v-btn>
    <v-btn variant="text" color="error">Acknowledge</v-btn>
  </template>
</v-banner>`

const colorCodeExample = `<v-banner color="primary" icon="mdi-information">
  <v-banner-text>Primary banner</v-banner-text>
</v-banner>

<v-banner color="success" icon="mdi-check-circle">
  <v-banner-text>Success banner</v-banner-text>
</v-banner>

<v-banner color="warning" icon="mdi-alert">
  <v-banner-text>Warning banner</v-banner-text>
</v-banner>

<v-banner color="error" icon="mdi-alert-circle">
  <v-banner-text>Error banner</v-banner-text>
</v-banner>`

const dismissibleCodeExample = `<template>
  <v-banner v-model="showBanner" icon="mdi-gift" color="success">
    <v-banner-text>
      🎉 Special offer! Get 20% off your first purchase.
    </v-banner-text>

    <template v-slot:actions>
      <v-btn variant="text" @click="showBanner = false">Dismiss</v-btn>
      <v-btn variant="text" color="success">Shop Now</v-btn>
    </template>
  </v-banner>

  <v-btn v-if="!showBanner" @click="showBanner = true">
    Show Banner
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBanner = ref(true)
<\/script>`

const mobileCodeExample = `<v-banner icon="mdi-cellphone" color="info">
  <v-banner-text>
    This banner adjusts its layout for mobile screens.
  </v-banner-text>

  <template v-slot:actions>
    <v-btn variant="text">Cancel</v-btn>
    <v-btn variant="text">Learn More</v-btn>
    <v-btn variant="text" color="info">Got It</v-btn>
  </template>
</v-banner>`

// Computed properties for syntax highlighting
const highlightedBasicCode = computed(() => {
  return highlightCode(basicCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedLayoutCode = computed(() => {
  return highlightCode(layoutCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedIconCode = computed(() => {
  return highlightCode(iconCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedActionsCode = computed(() => {
  return highlightCode(actionsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedCloseIconCode = computed(() => {
  return highlightCode(closeIconCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedStickyCode = computed(() => {
  return highlightCode(stickyCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedMultilineCode = computed(() => {
  return highlightCode(multilineCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedColorCode = computed(() => {
  return highlightCode(colorCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedDismissibleCode = computed(() => {
  return highlightCode(dismissibleCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedMobileCode = computed(() => {
  return highlightCode(mobileCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
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
