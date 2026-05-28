<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Card Patterns</h1>
      <p class="text-body-1 mb-6">
        Common compositional patterns using cards. These patterns demonstrate how to combine cards
        with other components to create reusable, consistent layouts throughout Octo.
        For complete page templates, see <strong>Card Templates</strong>.
      </p>
    </div>

    <!-- Stat Cards -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Stat Cards</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards displaying key metrics or statistics. Commonly used in dashboards to present
        important numbers with context and trend indicators.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <!-- Total Users Stat -->
            <v-card rounded="xl" width="220" variant="tonal" color="primary">
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon icon="mdi-account-group" size="small" class="mr-2" />
                  <span class="text-caption text-medium-emphasis">Total Users</span>
                </div>
                <p class="text-h4 font-weight-bold mb-1">12,453</p>
                <div class="d-flex align-center">
                  <v-chip size="x-small" color="success" variant="flat" class="mr-2">
                    <v-icon icon="mdi-arrow-up" size="x-small" class="mr-1" />
                    12.5%
                  </v-chip>
                  <span class="text-caption">vs last month</span>
                </div>
              </v-card-text>
            </v-card>

            <!-- Revenue Stat -->
            <v-card rounded="xl" width="220" variant="tonal" color="success">
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon icon="mdi-currency-usd" size="small" class="mr-2" />
                  <span class="text-caption text-medium-emphasis">Revenue</span>
                </div>
                <p class="text-h4 font-weight-bold mb-1">$24,560</p>
                <div class="d-flex align-center">
                  <v-chip size="x-small" color="success" variant="flat" class="mr-2">
                    <v-icon icon="mdi-arrow-up" size="x-small" class="mr-1" />
                    8.3%
                  </v-chip>
                  <span class="text-caption">vs last month</span>
                </div>
              </v-card-text>
            </v-card>

            <!-- Active Sessions Stat -->
            <v-card rounded="xl" width="220" variant="tonal" color="info">
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon icon="mdi-chart-line" size="small" class="mr-2" />
                  <span class="text-caption text-medium-emphasis">Active Sessions</span>
                </div>
                <p class="text-h4 font-weight-bold mb-1">1,284</p>
                <div class="d-flex align-center">
                  <v-chip size="x-small" color="error" variant="flat" class="mr-2">
                    <v-icon icon="mdi-arrow-down" size="x-small" class="mr-1" />
                    3.2%
                  </v-chip>
                  <span class="text-caption">vs last month</span>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showStatCardsCode = !showStatCardsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showStatCardsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showStatCardsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedStatCardsCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Info Cards -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Info Cards</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards for displaying informational content with optional actions. Useful for feature
        highlights, announcements, or contextual help.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <!-- Feature Card -->
            <v-card rounded="xl" width="300">
              <v-card-text>
                <div class="d-flex align-center mb-3">
                  <v-avatar color="primary" size="40" class="mr-3">
                    <v-icon icon="mdi-rocket-launch" color="white" />
                  </v-avatar>
                  <h3 class="text-h6">New Feature</h3>
                </div>
                <p class="text-body-2 mb-3">
                  We've launched advanced analytics to help you understand your data better.
                </p>
                <v-btn variant="tonal" color="primary" size="small" block>
                  Learn More
                </v-btn>
              </v-card-text>
            </v-card>

            <!-- Announcement Card -->
            <v-card rounded="xl" width="300" variant="outlined">
              <v-card-text>
                <v-chip color="warning" variant="flat" size="small" class="mb-3">
                  Scheduled Maintenance
                </v-chip>
                <h3 class="text-h6 mb-2">System Update</h3>
                <p class="text-body-2 mb-3">
                  Our system will be under maintenance on March 15, 2026 from 2:00 AM to 4:00 AM UTC.
                </p>
                <div class="d-flex ga-2">
                  <v-btn variant="text" color="secondary" size="small">Dismiss</v-btn>
                  <v-btn variant="tonal" color="warning" size="small">Set Reminder</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showInfoCardsCode = !showInfoCardsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showInfoCardsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showInfoCardsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedInfoCardsCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- List Cards -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">List Cards</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards containing lists of items. Use these for displaying collections of related
        information in a compact, scannable format.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-card rounded="xl" width="400">
            <v-card-title>Recent Activity</v-card-title>
            <v-divider />
            <v-list>
              <v-list-item
                prepend-icon="mdi-account-plus"
                title="New user registered"
                subtitle="2 minutes ago"
              >
                <template v-slot:append>
                  <v-chip color="success" variant="tonal" size="small">New</v-chip>
                </template>
              </v-list-item>

              <v-divider />

              <v-list-item
                prepend-icon="mdi-file-document"
                title="Report generated"
                subtitle="15 minutes ago"
              >
                <template v-slot:append>
                  <v-btn icon="mdi-download" variant="text" size="small" />
                </template>
              </v-list-item>

              <v-divider />

              <v-list-item
                prepend-icon="mdi-cog"
                title="Settings updated"
                subtitle="1 hour ago"
              />

              <v-divider />

              <v-list-item
                prepend-icon="mdi-email"
                title="Email sent to 1,234 users"
                subtitle="3 hours ago"
              />
            </v-list>
            <v-divider />
            <v-card-actions>
              <v-btn variant="text" color="primary" block>View All Activity</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showListCardsCode = !showListCardsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showListCardsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showListCardsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedListCardsCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Action Cards -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Action Cards</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards focused on prompting user actions. These cards clearly present a task or option
        with a prominent call-to-action button.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <!-- Create Project Card -->
            <v-card rounded="xl" width="280" variant="outlined">
              <v-card-text class="text-center">
                <v-avatar color="primary" size="60" class="mb-4">
                  <v-icon icon="mdi-plus" size="large" color="white" />
                </v-avatar>
                <h3 class="text-h6 mb-2">Create Project</h3>
                <p class="text-body-2 mb-4">
                  Start a new project and invite your team members.
                </p>
                <v-btn variant="flat" color="primary" block>
                  Get Started
                </v-btn>
              </v-card-text>
            </v-card>

            <!-- Import Data Card -->
            <v-card rounded="xl" width="280" variant="outlined">
              <v-card-text class="text-center">
                <v-avatar color="secondary" size="60" class="mb-4">
                  <v-icon icon="mdi-upload" size="large" color="white" />
                </v-avatar>
                <h3 class="text-h6 mb-2">Import Data</h3>
                <p class="text-body-2 mb-4">
                  Upload your existing data to get started quickly.
                </p>
                <v-btn variant="flat" color="secondary" block>
                  Upload Files
                </v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showActionCardsCode = !showActionCardsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showActionCardsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showActionCardsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedActionCardsCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Resource Cards -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Resource Cards</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards representing cloud resources or services. Commonly used in Octo to display
        accounts, projects, or infrastructure components.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <!-- AWS Resource Card -->
            <v-card rounded="xl" width="320">
              <v-card-text>
                <div class="d-flex align-center mb-3">
                  <v-avatar color="warning" size="40" class="mr-3">
                    <v-icon icon="mdi-aws" color="white" />
                  </v-avatar>
                  <div class="flex-grow-1">
                    <h3 class="text-h6">AWS Production</h3>
                    <p class="text-caption text-medium-emphasis">Account ID: 123456789012</p>
                  </div>
                  <v-chip color="success" variant="tonal" size="small">Active</v-chip>
                </div>

                <v-divider class="my-3" />

                <div class="d-flex justify-space-between mb-2">
                  <span class="text-caption">Region</span>
                  <span class="text-caption font-weight-medium">us-east-1</span>
                </div>
                <div class="d-flex justify-space-between mb-2">
                  <span class="text-caption">Resources</span>
                  <span class="text-caption font-weight-medium">1,234</span>
                </div>
                <div class="d-flex justify-space-between mb-3">
                  <span class="text-caption">Monthly Cost</span>
                  <span class="text-caption font-weight-medium">$12,345</span>
                </div>

                <div class="d-flex ga-2">
                  <v-btn variant="tonal" color="primary" size="small" class="flex-grow-1">
                    View Details
                  </v-btn>
                  <v-btn icon="mdi-dots-vertical" variant="text" size="small" />
                </div>
              </v-card-text>
            </v-card>

            <!-- Azure Resource Card -->
            <v-card rounded="xl" width="320">
              <v-card-text>
                <div class="d-flex align-center mb-3">
                  <v-avatar color="info" size="40" class="mr-3">
                    <v-icon icon="mdi-microsoft-azure" color="white" />
                  </v-avatar>
                  <div class="flex-grow-1">
                    <h3 class="text-h6">Azure Development</h3>
                    <p class="text-caption text-medium-emphasis">Subscription: dev-sub-001</p>
                  </div>
                  <v-chip color="warning" variant="tonal" size="small">Pending</v-chip>
                </div>

                <v-divider class="my-3" />

                <div class="d-flex justify-space-between mb-2">
                  <span class="text-caption">Region</span>
                  <span class="text-caption font-weight-medium">East US</span>
                </div>
                <div class="d-flex justify-space-between mb-2">
                  <span class="text-caption">Resources</span>
                  <span class="text-caption font-weight-medium">456</span>
                </div>
                <div class="d-flex justify-space-between mb-3">
                  <span class="text-caption">Monthly Cost</span>
                  <span class="text-caption font-weight-medium">$5,678</span>
                </div>

                <div class="d-flex ga-2">
                  <v-btn variant="tonal" color="primary" size="small" class="flex-grow-1">
                    View Details
                  </v-btn>
                  <v-btn icon="mdi-dots-vertical" variant="text" size="small" />
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showResourceCardsCode = !showResourceCardsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showResourceCardsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showResourceCardsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedResourceCardsCode"></pre>
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
              <h3 class="text-h6 mb-2">Pattern Selection</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2"><strong>Stat Cards</strong> - Dashboard metrics, KPIs, analytics summaries</li>
                <li class="text-body-2 mb-2"><strong>Info Cards</strong> - Feature highlights, announcements, contextual help</li>
                <li class="text-body-2 mb-2"><strong>List Cards</strong> - Activity feeds, notifications, grouped items</li>
                <li class="text-body-2 mb-2"><strong>Action Cards</strong> - Empty states, onboarding steps, quick actions</li>
                <li class="text-body-2 mb-2"><strong>Resource Cards</strong> - Cloud accounts, projects, infrastructure</li>
              </ul>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">Composition Tips</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2">Keep card width consistent within the same pattern type</li>
                <li class="text-body-2 mb-2">Use <code>ga-4</code> (16px gap) between cards in a grid</li>
                <li class="text-body-2 mb-2">Always use <code>rounded="xl"</code> for consistency</li>
                <li class="text-body-2 mb-2">Use dividers to separate distinct sections within cards</li>
                <li class="text-body-2 mb-2">Limit actions to 2-3 buttons per card to avoid clutter</li>
              </ul>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">Responsive Behavior</h3>
              <p class="text-body-2 mb-2">
                When displaying cards in grids, use Vuetify's <code>v-row</code> and <code>v-col</code>
                with responsive breakpoints to ensure cards stack appropriately on mobile devices.
              </p>
              <pre class="pa-3 bg-grey-lighten-4 rounded text-caption mt-2">
&lt;v-row&gt;
  &lt;v-col cols="12" sm="6" md="4"&gt;
    &lt;v-card&gt;...&lt;/v-card&gt;
  &lt;/v-col&gt;
&lt;/v-row&gt;</pre>
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
const showStatCardsCode = ref(false)
const showInfoCardsCode = ref(false)
const showListCardsCode = ref(false)
const showActionCardsCode = ref(false)
const showResourceCardsCode = ref(false)

// Code examples
const statCardsCodeExample = `<template>
  <v-card rounded="xl" width="220" variant="tonal" color="primary">
    <v-card-text>
      <!-- Label with Icon -->
      <div class="d-flex align-center mb-2">
        <v-icon icon="mdi-account-group" size="small" class="mr-2" />
        <span class="text-caption text-medium-emphasis">Total Users</span>
      </div>

      <!-- Main Metric -->
      <p class="text-h4 font-weight-bold mb-1">12,453</p>

      <!-- Trend Indicator -->
      <div class="d-flex align-center">
        <v-chip size="x-small" color="success" variant="flat" class="mr-2">
          <v-icon icon="mdi-arrow-up" size="x-small" class="mr-1" />
          12.5%
        </v-chip>
        <span class="text-caption">vs last month</span>
      </div>
    </v-card-text>
  </v-card>
</template>`

const infoCardsCodeExample = `<template>
  <v-card rounded="xl" width="300">
    <v-card-text>
      <!-- Icon + Title -->
      <div class="d-flex align-center mb-3">
        <v-avatar color="primary" size="40" class="mr-3">
          <v-icon icon="mdi-rocket-launch" color="white" />
        </v-avatar>
        <h3 class="text-h6">New Feature</h3>
      </div>

      <!-- Description -->
      <p class="text-body-2 mb-3">
        We've launched advanced analytics to help you understand your data better.
      </p>

      <!-- Action Button -->
      <v-btn variant="tonal" color="primary" size="small" block>
        Learn More
      </v-btn>
    </v-card-text>
  </v-card>
</template>`

const listCardsCodeExample = `<template>
  <v-card rounded="xl" width="400">
    <v-card-title>Recent Activity</v-card-title>
    <v-divider />

    <v-list>
      <v-list-item
        prepend-icon="mdi-account-plus"
        title="New user registered"
        subtitle="2 minutes ago"
      >
        <template v-slot:append>
          <v-chip color="success" variant="tonal" size="small">New</v-chip>
        </template>
      </v-list-item>

      <v-divider />

      <v-list-item
        prepend-icon="mdi-file-document"
        title="Report generated"
        subtitle="15 minutes ago"
      >
        <template v-slot:append>
          <v-btn icon="mdi-download" variant="text" size="small" />
        </template>
      </v-list-item>

      <!-- More items... -->
    </v-list>

    <v-divider />
    <v-card-actions>
      <v-btn variant="text" color="primary" block>View All Activity</v-btn>
    </v-card-actions>
  </v-card>
</template>`

const actionCardsCodeExample = `<template>
  <v-card rounded="xl" width="280" variant="outlined">
    <v-card-text class="text-center">
      <!-- Icon -->
      <v-avatar color="primary" size="60" class="mb-4">
        <v-icon icon="mdi-plus" size="large" color="white" />
      </v-avatar>

      <!-- Title -->
      <h3 class="text-h6 mb-2">Create Project</h3>

      <!-- Description -->
      <p class="text-body-2 mb-4">
        Start a new project and invite your team members.
      </p>

      <!-- Call-to-Action -->
      <v-btn variant="flat" color="primary" block>
        Get Started
      </v-btn>
    </v-card-text>
  </v-card>
</template>`

const resourceCardsCodeExample = `<template>
  <v-card rounded="xl" width="320">
    <v-card-text>
      <!-- Header: Icon + Title + Status -->
      <div class="d-flex align-center mb-3">
        <v-avatar color="warning" size="40" class="mr-3">
          <v-icon icon="mdi-aws" color="white" />
        </v-avatar>
        <div class="flex-grow-1">
          <h3 class="text-h6">AWS Production</h3>
          <p class="text-caption text-medium-emphasis">Account ID: 123456789012</p>
        </div>
        <v-chip color="success" variant="tonal" size="small">Active</v-chip>
      </div>

      <v-divider class="my-3" />

      <!-- Metadata -->
      <div class="d-flex justify-space-between mb-2">
        <span class="text-caption">Region</span>
        <span class="text-caption font-weight-medium">us-east-1</span>
      </div>
      <div class="d-flex justify-space-between mb-2">
        <span class="text-caption">Resources</span>
        <span class="text-caption font-weight-medium">1,234</span>
      </div>
      <div class="d-flex justify-space-between mb-3">
        <span class="text-caption">Monthly Cost</span>
        <span class="text-caption font-weight-medium">$12,345</span>
      </div>

      <!-- Actions -->
      <div class="d-flex ga-2">
        <v-btn variant="tonal" color="primary" size="small" class="flex-grow-1">
          View Details
        </v-btn>
        <v-btn icon="mdi-dots-vertical" variant="text" size="small" />
      </div>
    </v-card-text>
  </v-card>
</template>`

// Simple syntax highlighter function
const highlightCode = (code: string): string => {
  return code
    .replace(/"([^"]*)"/g, '"<span class="string">$1</span>"')
    .replace(/'([^']*)'/g, '\'<span class="string">$1</span>\'')
    .replace(/`([^`]*)`/g, '`<span class="template">$1</span>`')
    .replace(/&lt;(\/?[a-zA-Z][\w-]*)/g, '&lt;<span class="tag">$1</span>')
    .replace(/&gt;/g, '<span class="tag">&gt;</span>')
    .replace(/([:@][\w-]+)(?![^<]*<\/span>)/g, '<span class="directive">$1</span>')
    .replace(/\b(import|export|const|let|var|function|from|interface|type|true|false|null|undefined)\b/g, '<span class="keyword">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="comment">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    .replace(/\b([A-Z][a-zA-Z]+)\b/g, '<span class="type">$1</span>')
}

// Computed properties for syntax highlighting
const highlightedStatCardsCode = computed(() => {
  return highlightCode(statCardsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedInfoCardsCode = computed(() => {
  return highlightCode(infoCardsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedListCardsCode = computed(() => {
  return highlightCode(listCardsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedActionCardsCode = computed(() => {
  return highlightCode(actionCardsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedResourceCardsCode = computed(() => {
  return highlightCode(resourceCardsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
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
