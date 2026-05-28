<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Data Tables</h1>
      <p class="text-body-1 mb-6">
        Data tables utilize Vuetify's v-data-table component with standardized patterns for consistency across the application.
        This page documents the complete table design system including column alignment rules, element sizing, action patterns, and formatting standards.
      </p>
    </div>

    <!-- Column Alignment Rules -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Column Alignment Rules</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        <strong>CRITICAL:</strong> Column alignment must follow these three rules consistently across all tables.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-data-table
            :headers="alignmentHeaders"
            :items="alignmentItems"
            density="default"
            :items-per-page="5"
          >
            <template #item.provider="{ item }">
              <v-icon :icon="getProviderIcon(item.provider)" :color="getProviderColor(item.provider)" />
            </template>

            <template #item.cost="{ item }">
              <span class="font-weight-medium">{{ formatCurrency(item.cost) }}</span>
            </template>

            <template #item.prevCost="{ item }">
              <span class="font-weight-medium">{{ formatCurrency(item.prevCost) }}</span>
            </template>

            <template #item.change="{ item }">
              <div class="d-flex align-center ga-1 justify-end">
                <v-icon
                  :icon="item.change >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down'"
                  :color="item.change >= 0 ? 'success' : 'error'"
                  size="small"
                />
                <span
                  class="text-body-2 font-weight-medium"
                  :class="item.change >= 0 ? 'text-success' : 'text-error'"
                >
                  {{ formatPercentage(item.change) }}
                </span>
              </div>
            </template>

            <template #item.status="{ item }">
              <v-chip
                size="small"
                variant="tonal"
                rounded="lg"
                :color="item.status === 'Active' ? 'success' : 'error'"
              >
                {{ item.status }}
              </v-chip>
            </template>

            <template #item.actions>
              <div class="d-flex justify-center">
                <v-tooltip text="View" location="top">
                  <template #activator="{ props }">
                    <v-btn v-bind="props" icon="mdi-eye" variant="text" size="small" />
                  </template>
                </v-tooltip>
                <v-tooltip text="Edit" location="top">
                  <template #activator="{ props }">
                    <v-btn v-bind="props" icon="mdi-pencil" variant="text" size="small" color="primary" />
                  </template>
                </v-tooltip>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <!-- Rules List -->
      <v-alert variant="outlined" color="info" class="mb-4">
        <div class="font-weight-bold mb-2">The 3 Critical Alignment Rules:</div>
        <ol class="ml-4">
          <li><strong>Numerical values</strong> → Right-aligned (<code>align: 'end'</code>)</li>
          <li><strong>Actions column</strong> → Center-aligned (<code>align: 'center'</code>)</li>
          <li><strong>Everything else</strong> → Left-aligned (<code>align: 'start'</code>)</li>
        </ol>
      </v-alert>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showAlignmentCode = !showAlignmentCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showAlignmentCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showAlignmentCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedAlignmentCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Column Width Strategy -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Column Width Strategy</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Use <code>width</code> + <code>text-no-wrap</code> to create "hugging" columns that stay compact but expand if needed.
        This is different from <code>minWidth</code> which still allows columns to expand and fill space.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-data-table
            :headers="widthHeaders"
            :items="widthItems"
            density="default"
            :items-per-page="3"
          >
            <template #item.provider="{ item }">
              <v-icon :icon="getProviderIcon(item.provider)" :color="getProviderColor(item.provider)" />
            </template>

            <template #item.cost="{ item }">
              <span class="font-weight-medium">{{ formatCurrency(item.cost) }}</span>
            </template>

            <template #item.change="{ item }">
              <div class="d-flex align-center ga-1 justify-end">
                <v-icon
                  :icon="item.change >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down'"
                  :color="item.change >= 0 ? 'success' : 'error'"
                  size="small"
                />
                <span
                  class="text-body-2 font-weight-medium"
                  :class="item.change >= 0 ? 'text-success' : 'text-error'"
                >
                  {{ formatPercentage(item.change) }}
                </span>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <!-- Recommended Widths -->
      <v-alert variant="outlined" color="primary" class="mb-4">
        <div class="font-weight-bold mb-2">Recommended Column Widths:</div>
        <ul class="ml-4">
          <li>Icon-only (Provider): <code>100px</code></li>
          <li>Cost/Amount: <code>140px</code> + <code>text-no-wrap</code></li>
          <li>Previous Cost: <code>160px</code> + <code>text-no-wrap</code></li>
          <li>Percentage Change: <code>120px</code> + <code>text-no-wrap</code></li>
          <li>Actions: <code>120px</code> (fixed)</li>
          <li>Text/Name: No width (flexible)</li>
        </ul>
      </v-alert>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showWidthCode = !showWidthCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showWidthCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showWidthCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedWidthCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Status Chips in Tables -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Status Chips in Tables</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        All chips in tables use the standard sizing: <code>size="small"</code>, <code>variant="tonal"</code>, <code>rounded="lg"</code>
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-data-table
            :headers="chipHeaders"
            :items="chipItems"
            density="default"
            :items-per-page="5"
          >
            <template #item.status="{ item }">
              <v-chip
                size="small"
                variant="tonal"
                rounded="lg"
                :color="getStatusColor(item.status)"
                :prepend-icon="getStatusIcon(item.status)"
              >
                {{ item.status }}
              </v-chip>
            </template>

            <template #item.type="{ item }">
              <v-chip
                size="small"
                variant="tonal"
                rounded="lg"
              >
                {{ item.type }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showChipCode = !showChipCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showChipCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showChipCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedChipCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Action Button Patterns -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">4 Action Button Patterns</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Choose the appropriate pattern based on the number of actions and table layout.
      </p>

      <!-- Pattern 0: Clickable Name -->
      <div class="mb-6">
        <h3 class="text-h6 mb-3">Pattern 0: Clickable Name (No Actions Column)</h3>
        <p class="text-body-2 mb-3 text-medium-emphasis">
          Use when table has many columns and only one primary action. Saves horizontal space.
        </p>

        <v-card class="mb-4">
          <v-card-text>
            <v-data-table
              :headers="pattern0Headers"
              :items="pattern0Items"
              density="default"
              :items-per-page="3"
            >
              <template #item.name="{ item }">
                <v-btn
                  variant="text"
                  color="primary"
                  size="small"
                  class="font-weight-regular text-none"
                  @click="() => console.log(`Viewing ${item.name}`)"
                >
                  {{ item.name }}
                </v-btn>
              </template>

              <template #item.savings="{ item }">
                <span class="font-weight-medium">{{ formatCurrency(item.savings) }}</span>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-text class="pa-0">
            <v-btn
              @click="showPattern0Code = !showPattern0Code"
              variant="text"
              prepend-icon="mdi-code-tags"
              class="ma-4"
            >
              {{ showPattern0Code ? 'Hide code' : 'Show code' }}
            </v-btn>

            <v-expand-transition>
              <div v-if="showPattern0Code">
                <v-divider />
                <pre class="pa-4 text-caption code-block" v-html="highlightedPattern0Code"></pre>
              </div>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </div>

      <!-- Pattern 1: Text Button -->
      <div class="mb-6">
        <h3 class="text-h6 mb-3">Pattern 1: Text Button (Single Action)</h3>
        <p class="text-body-2 mb-3 text-medium-emphasis">
          Use for a single, simple action with dedicated actions column.
        </p>

        <v-card class="mb-4">
          <v-card-text>
            <v-data-table
              :headers="pattern1Headers"
              :items="pattern1Items"
              density="default"
              :items-per-page="3"
            >
              <template #item.actions>
                <div class="d-flex justify-center">
                  <v-btn variant="text" color="primary" size="small">
                    View Details
                  </v-btn>
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-text class="pa-0">
            <v-btn
              @click="showPattern1Code = !showPattern1Code"
              variant="text"
              prepend-icon="mdi-code-tags"
              class="ma-4"
            >
              {{ showPattern1Code ? 'Hide code' : 'Show code' }}
            </v-btn>

            <v-expand-transition>
              <div v-if="showPattern1Code">
                <v-divider />
                <pre class="pa-4 text-caption code-block" v-html="highlightedPattern1Code"></pre>
              </div>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </div>

      <!-- Pattern 2: Icon Buttons -->
      <div class="mb-6">
        <h3 class="text-h6 mb-3">Pattern 2: Icon Buttons (2-3 Actions)</h3>
        <p class="text-body-2 mb-3 text-medium-emphasis">
          Use for 2-3 actions. <strong>Tooltips are REQUIRED.</strong> Zero gaps between buttons.
        </p>

        <v-card class="mb-4">
          <v-card-text>
            <v-data-table
              :headers="pattern2Headers"
              :items="pattern2Items"
              density="default"
              :items-per-page="3"
            >
              <template #item.actions>
                <div class="d-flex justify-center">
                  <v-tooltip text="View" location="top">
                    <template #activator="{ props }">
                      <v-btn v-bind="props" icon="mdi-eye" variant="text" size="small" />
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Edit" location="top">
                    <template #activator="{ props }">
                      <v-btn v-bind="props" icon="mdi-pencil" variant="text" size="small" color="primary" />
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Delete" location="top">
                    <template #activator="{ props }">
                      <v-btn v-bind="props" icon="mdi-delete" variant="text" size="small" color="error" />
                    </template>
                  </v-tooltip>
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-text class="pa-0">
            <v-btn
              @click="showPattern2Code = !showPattern2Code"
              variant="text"
              prepend-icon="mdi-code-tags"
              class="ma-4"
            >
              {{ showPattern2Code ? 'Hide code' : 'Show code' }}
            </v-btn>

            <v-expand-transition>
              <div v-if="showPattern2Code">
                <v-divider />
                <pre class="pa-4 text-caption code-block" v-html="highlightedPattern2Code"></pre>
              </div>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </div>

      <!-- Pattern 3: Menu Button -->
      <div class="mb-6">
        <h3 class="text-h6 mb-3">Pattern 3: Menu Button (4+ Actions)</h3>
        <p class="text-body-2 mb-3 text-medium-emphasis">
          Use for 4 or more actions, or for contextual menus.
        </p>

        <v-card class="mb-4">
          <v-card-text>
            <v-data-table
              :headers="pattern3Headers"
              :items="pattern3Items"
              density="default"
              :items-per-page="3"
            >
              <template #item.actions>
                <div class="d-flex justify-center">
                  <v-menu>
                    <template #activator="{ props }">
                      <v-btn
                        v-bind="props"
                        icon="mdi-dots-vertical"
                        variant="text"
                        size="small"
                      />
                    </template>
                    <v-list>
                      <v-list-item @click="() => {}">
                        <v-list-item-title>View Details</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="() => {}">
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="() => {}">
                        <v-list-item-title>Duplicate</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="() => {}">
                        <v-list-item-title>Download</v-list-item-title>
                      </v-list-item>
                      <v-divider />
                      <v-list-item @click="() => {}">
                        <v-list-item-title class="text-error">Delete</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-text class="pa-0">
            <v-btn
              @click="showPattern3Code = !showPattern3Code"
              variant="text"
              prepend-icon="mdi-code-tags"
              class="ma-4"
            >
              {{ showPattern3Code ? 'Hide code' : 'Show code' }}
            </v-btn>

            <v-expand-transition>
              <div v-if="showPattern3Code">
                <v-divider />
                <pre class="pa-4 text-caption code-block" v-html="highlightedPattern3Code"></pre>
              </div>
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- Percentage Change Pattern -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Percentage Change Pattern</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Standard pattern: Icon + Colored Text with 2 decimal places. No % symbol in cell (put in header instead).
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-data-table
            :headers="percentageHeaders"
            :items="percentageItems"
            density="default"
            :items-per-page="5"
          >
            <template #item.cost="{ item }">
              <span class="font-weight-medium">{{ formatCurrency(item.cost) }}</span>
            </template>

            <template #item.change="{ item }">
              <div class="d-flex align-center ga-1 justify-end">
                <v-icon
                  :icon="item.change >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down'"
                  :color="item.change >= 0 ? 'success' : 'error'"
                  size="small"
                />
                <span
                  class="text-body-2 font-weight-medium"
                  :class="item.change >= 0 ? 'text-success' : 'text-error'"
                >
                  {{ formatPercentage(item.change) }}
                </span>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showPercentageCode = !showPercentageCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showPercentageCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showPercentageCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedPercentageCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Provider/Vendor Icon Pattern -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Provider/Vendor Icon Pattern</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Icon-only columns for instantly recognizable providers. Uses theme-aware colors that adapt to light/dark mode.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-data-table
            :headers="providerHeaders"
            :items="providerItems"
            density="default"
            :items-per-page="5"
          >
            <template #item.provider="{ item }">
              <v-icon
                :icon="getProviderIcon(item.provider)"
                :color="getProviderColor(item.provider)"
                size="default"
              />
            </template>

            <template #item.cost="{ item }">
              <span class="font-weight-medium">{{ formatCurrency(item.cost) }}</span>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showProviderCode = !showProviderCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showProviderCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showProviderCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedProviderCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getIconName } from '@/helpers/icon'
import { getColor } from '@/helpers/color'

// Code visibility toggles
const showAlignmentCode = ref(false)
const showWidthCode = ref(false)
const showChipCode = ref(false)
const showPattern0Code = ref(false)
const showPattern1Code = ref(false)
const showPattern2Code = ref(false)
const showPattern3Code = ref(false)
const showPercentageCode = ref(false)
const showProviderCode = ref(false)

// Helper functions
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

const formatPercentage = (value: number) => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}`
}

const getProviderIcon = (provider: string) => {
  // Use the actual icon helper that adds '$' prefix
  return getIconName(provider.toLowerCase())
}

const getProviderColor = (provider: string) => {
  // Use the actual color helper that returns hex colors based on theme
  return getColor(provider.toLowerCase())
}

const getStatusColor = (status: string) => {
  const normalized = status.toLowerCase()
  if (normalized === 'active') return 'success'
  if (normalized === 'inactive') return 'error'
  if (normalized === 'pending') return 'warning'
  return 'default'
}

const getStatusIcon = (status: string) => {
  const normalized = status.toLowerCase()
  if (normalized === 'active') return 'mdi-check-circle'
  if (normalized === 'inactive') return 'mdi-close-circle'
  if (normalized === 'pending') return 'mdi-clock-outline'
  return undefined
}

// Alignment example data
const alignmentHeaders = [
  { title: 'Account Name', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Provider', key: 'provider', align: 'start' as const, width: '100px' },
  { title: 'Cost', key: 'cost', align: 'end' as const, width: '140px', cellProps: { class: 'text-no-wrap' } },
  { title: 'Previous Cost', key: 'prevCost', align: 'end' as const, width: '160px', cellProps: { class: 'text-no-wrap' } },
  { title: '(%) Change', key: 'change', align: 'end' as const, width: '120px', cellProps: { class: 'text-no-wrap' } },
  { title: 'Status', key: 'status', align: 'start' as const, sortable: true },
  { title: '', key: 'actions', align: 'center' as const, sortable: false, width: '120px' }
]

const alignmentItems = [
  { name: 'Production Account', provider: 'AWS', cost: 12450.50, prevCost: 11230.00, change: 10.87, status: 'Active' },
  { name: 'Development Account', provider: 'GCP', cost: 3240.75, prevCost: 3890.25, change: -16.69, status: 'Active' },
  { name: 'Staging Account', provider: 'Azure', cost: 5670.00, prevCost: 5120.00, change: 10.74, status: 'Active' },
  { name: 'Testing Account', provider: 'AWS', cost: 1890.25, prevCost: 2340.50, change: -19.24, status: 'Inactive' },
  { name: 'Demo Account', provider: 'GCP', cost: 890.00, prevCost: 750.00, change: 18.67, status: 'Active' }
]

// Width strategy example data
const widthHeaders = [
  { title: 'Account Name', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Provider', key: 'provider', align: 'start' as const, width: '100px' },
  { title: 'Monthly Cost', key: 'cost', align: 'end' as const, width: '140px', cellProps: { class: 'text-no-wrap' } },
  { title: '(%) Change', key: 'change', align: 'end' as const, width: '120px', cellProps: { class: 'text-no-wrap' } }
]

const widthItems = [
  { name: 'Production Environment', provider: 'AWS', cost: 12450.50, change: 10.87 },
  { name: 'Development', provider: 'GCP', cost: 3240.75, change: -16.69 },
  { name: 'Staging', provider: 'Azure', cost: 5670.00, change: 10.74 }
]

// Chip example data
const chipHeaders = [
  { title: 'Service Name', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Status', key: 'status', align: 'start' as const, sortable: true },
  { title: 'Type', key: 'type', align: 'start' as const, sortable: true }
]

const chipItems = [
  { name: 'EC2 Instance', status: 'Active', type: 'Compute' },
  { name: 'S3 Bucket', status: 'Active', type: 'Storage' },
  { name: 'RDS Database', status: 'Pending', type: 'Database' },
  { name: 'Lambda Function', status: 'Inactive', type: 'Serverless' },
  { name: 'CloudFront Distribution', status: 'Active', type: 'CDN' }
]

// Pattern 0: Clickable Name
const pattern0Headers = [
  { title: 'Recommendation', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Category', key: 'category', align: 'start' as const, sortable: true },
  { title: 'Potential Savings', key: 'savings', align: 'end' as const, width: '160px', cellProps: { class: 'text-no-wrap' } }
]

const pattern0Items = [
  { name: 'Optimize EC2 instance types', category: 'Compute', savings: 2340.50 },
  { name: 'Remove unused EBS volumes', category: 'Storage', savings: 1890.25 },
  { name: 'Purchase Reserved Instances', category: 'Compute', savings: 5670.00 }
]

// Pattern 1: Text Button
const pattern1Headers = [
  { title: 'Forecast Name', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Period', key: 'period', align: 'start' as const, sortable: true },
  { title: '', key: 'actions', align: 'center' as const, sortable: false, width: '120px' }
]

const pattern1Items = [
  { name: 'Q1 2024 Forecast', period: 'Jan - Mar 2024' },
  { name: 'Q2 2024 Forecast', period: 'Apr - Jun 2024' },
  { name: 'Q3 2024 Forecast', period: 'Jul - Sep 2024' }
]

// Pattern 2: Icon Buttons
const pattern2Headers = [
  { title: 'Budget Name', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Amount', key: 'amount', align: 'end' as const, width: '140px' },
  { title: '', key: 'actions', align: 'center' as const, sortable: false, width: '120px' }
]

const pattern2Items = [
  { name: 'Production Budget 2024', amount: '$50,000' },
  { name: 'Development Budget 2024', amount: '$15,000' },
  { name: 'Marketing Budget 2024', amount: '$30,000' }
]

// Pattern 3: Menu Button
const pattern3Headers = [
  { title: 'Dashboard Name', key: 'name', align: 'start' as const, sortable: true },
  { title: 'Created', key: 'created', align: 'start' as const, sortable: true },
  { title: '', key: 'actions', align: 'center' as const, sortable: false, width: '120px' }
]

const pattern3Items = [
  { name: 'Executive Dashboard', created: '2024-01-15' },
  { name: 'Cost Analysis Dashboard', created: '2024-02-20' },
  { name: 'Resource Utilization', created: '2024-03-10' }
]

// Percentage change example
const percentageHeaders = [
  { title: 'Service', key: 'service', align: 'start' as const, sortable: true },
  { title: 'Current Cost', key: 'cost', align: 'end' as const, width: '140px', cellProps: { class: 'text-no-wrap' } },
  { title: '(%) Change', key: 'change', align: 'end' as const, width: '120px', cellProps: { class: 'text-no-wrap' } }
]

const percentageItems = [
  { service: 'EC2', cost: 5670.00, change: 15.50 },
  { service: 'S3', cost: 1230.25, change: -8.20 },
  { service: 'RDS', cost: 3450.75, change: 22.15 },
  { service: 'Lambda', cost: 890.00, change: -12.45 },
  { service: 'CloudFront', cost: 2340.50, change: 5.75 }
]

// Provider icon example
const providerHeaders = [
  { title: 'Account', key: 'account', align: 'start' as const, sortable: true },
  { title: 'Provider', key: 'provider', align: 'start' as const, width: '100px', sortable: true },
  { title: 'Monthly Cost', key: 'cost', align: 'end' as const, width: '140px', cellProps: { class: 'text-no-wrap' } }
]

const providerItems = [
  { account: 'Production', provider: 'AWS', cost: 12450.50 },
  { account: 'Development', provider: 'GCP', cost: 3240.75 },
  { account: 'Staging', provider: 'Azure', cost: 5670.00 },
  { account: 'Testing', provider: 'AWS', cost: 1890.25 },
  { account: 'Demo', provider: 'GCP', cost: 890.00 }
]

// Code examples
const alignmentCodeExample = `const headers = [
  // Text columns - Left aligned
  { title: 'Account Name', key: 'name', align: 'start', sortable: true },

  // Icon column - Left aligned, fixed width
  { title: 'Provider', key: 'provider', align: 'start', width: '100px' },

  // Numerical columns - Right aligned, hugging width
  {
    title: 'Cost',
    key: 'cost',
    align: 'end',
    width: '140px',
    cellProps: { class: 'text-no-wrap' }
  },
  {
    title: '(%) Change',
    key: 'change',
    align: 'end',
    width: '120px',
    cellProps: { class: 'text-no-wrap' }
  },

  // Status chips - Left aligned
  { title: 'Status', key: 'status', align: 'start', sortable: true },

  // Actions - Center aligned, no title, fixed width
  { title: '', key: 'actions', align: 'center', sortable: false, width: '120px' }
]`

const widthCodeExample = `// ❌ OLD WAY: Using minWidth (doesn't create hugging)
{
  title: 'Cost',
  key: 'cost',
  align: 'end',
  minWidth: '120px'  // Column still expands to fill space
}

// ✅ NEW WAY: Using width + text-no-wrap (creates hugging)
{
  title: 'Cost',
  key: 'cost',
  align: 'end',
  width: '140px',                      // Preferred width
  cellProps: { class: 'text-no-wrap' } // No wrapping
}

// Benefits:
// - Column stays compact (hugging)
// - Expands if content is larger (no truncation)
// - Never wraps to second line
// - More space for flexible columns`

const chipCodeExample = `<template #item.status="{ item }">
  <v-chip
    size="small"
    variant="tonal"
    rounded="lg"
    :color="getStatusColor(item.status)"
    :prepend-icon="getStatusIcon(item.status)"
  >
    {{ item.status }}
  </v-chip>
</template>

<script setup lang="ts">
const getStatusColor = (status: string) => {
  const normalized = status.toLowerCase()
  if (normalized === 'active') return 'success'
  if (normalized === 'inactive') return 'error'
  if (normalized === 'pending') return 'warning'
  return 'default'
}

const getStatusIcon = (status: string) => {
  const normalized = status.toLowerCase()
  if (normalized === 'active') return 'mdi-check-circle'
  if (normalized === 'inactive') return 'mdi-close-circle'
  if (normalized === 'pending') return 'mdi-clock-outline'
  return undefined
}
<\/script>`

const pattern0CodeExample = `<!-- Pattern 0: Clickable Name (No Actions Column) -->
<template #item.name="{ item }">
  <v-btn
    variant="text"
    color="primary"
    size="small"
    class="font-weight-regular text-none"
    @click="handleRowClick(item)"
  >
    {{ item.name }}
  </v-btn>
</template>

<!-- Header Configuration -->
const headers = [
  { title: 'Recommendation', key: 'name', align: 'start' },
  { title: 'Category', key: 'category', align: 'start' },
  { title: 'Potential Savings', key: 'savings', align: 'end', width: '160px' }
  // NO actions column needed!
]

// Use when:
// - Table has many columns (need horizontal space)
// - Only one primary action per row (view, open, navigate)
// - Common in recommendation listings, simple master-detail views`

const pattern1CodeExample = `<!-- Pattern 1: Text Button (Single Action) -->
<template #item.actions>
  <div class="d-flex justify-center">
    <v-btn variant="text" color="primary" size="small">
      View Details
    </v-btn>
  </div>
</template>

<!-- Header Configuration -->
{ title: '', key: 'actions', align: 'center', sortable: false, width: '120px' }`

const pattern2CodeExample = `<!-- Pattern 2: Icon Buttons (2-3 Actions) -->
<template #item.actions>
  <div class="d-flex justify-center">
    <v-tooltip text="View" location="top">
      <template #activator="{ props }">
        <v-btn v-bind="props" icon="mdi-eye" variant="text" size="small" />
      </template>
    </v-tooltip>
    <v-tooltip text="Edit" location="top">
      <template #activator="{ props }">
        <v-btn v-bind="props" icon="mdi-pencil" variant="text" size="small" color="primary" />
      </template>
    </v-tooltip>
    <v-tooltip text="Delete" location="top">
      <template #activator="{ props }">
        <v-btn v-bind="props" icon="mdi-delete" variant="text" size="small" color="error" />
      </template>
    </v-tooltip>
  </div>
</template>

<!-- CRITICAL:
  - ZERO gaps between buttons (no ga-* classes)
  - Tooltips are REQUIRED for accessibility
  - Maximum 3 icons (use menu pattern if more needed)
-->`

const pattern3CodeExample = `<!-- Pattern 3: Menu Button (4+ Actions) -->
<template #item.actions>
  <div class="d-flex justify-center">
    <v-menu>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-dots-vertical"
          variant="text"
          size="small"
        />
      </template>
      <v-list>
        <v-list-item @click="handleView">
          <v-list-item-title>View Details</v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleEdit">
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleDuplicate">
          <v-list-item-title>Duplicate</v-list-item-title>
        </v-list-item>
        <v-list-item @click="handleDownload">
          <v-list-item-title>Download</v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item @click="handleDelete">
          <v-list-item-title class="text-error">Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<!-- Use when: 4+ actions or contextual menu needed -->`

const percentageCodeExample = `<template #item.change="{ item }">
  <div class="d-flex align-center ga-1 justify-end">
    <v-icon
      :icon="item.change >= 0 ? 'mdi-arrow-up' : 'mdi-arrow-down'"
      :color="item.change >= 0 ? 'success' : 'error'"
      size="small"
    />
    <span
      class="text-body-2 font-weight-medium"
      :class="item.change >= 0 ? 'text-success' : 'text-error'"
    >
      {{ formatPercentage(item.change) }}
    </span>
  </div>
</template>

<script setup lang="ts">
const formatPercentage = (value: number) => {
  const sign = value >= 0 ? '+' : ''
  return \`\${sign}\${value.toFixed(2)}\`  // 2 decimal places, no % symbol
}

// Header Configuration (put % indicator in header)
{
  title: '(%) Change',  // or "Change (%)"
  key: 'change',
  align: 'end',
  width: '120px',
  cellProps: { class: 'text-no-wrap' }
}
<\/script>

<!-- Format Examples: +15.50, -8.20, +0.00 -->
<!-- NO % symbol in cell values! -->`

const providerCodeExample = `<script setup lang="ts">
import { getColor } from '@/helpers/color'
import { getIconName } from '@/helpers/icon'
<\/script>

<template>
  <v-data-table :headers="headers" :items="items">
    <template #item.provider="{ item }">
      <v-icon
        :icon="getIconName(item.provider.toLowerCase())"
        :color="getColor(item.provider.toLowerCase())"
        size="default"
      />
    </template>
  </v-data-table>
</template>

<!-- Header Configuration -->
{
  title: 'Provider',
  key: 'provider',
  align: 'start' as const,
  width: '100px',
  sortable: true
}

<!-- Key Properties:
  - REQUIRED: Import getIconName() and getColor() helpers
  - Icons: Custom SVG components (IconAws, IconGcp, IconAzure)
  - Colors: Theme-aware brand colors from vendorColors configuration
    - Light mode: aws=#FF9900, gcp=#34A853, azure=#0089D6
    - Dark mode: aws=#C48320, gcp=#34A853, azure=#4274B2
  - Size: 'default' (larger than 'small' for better visibility)
  - Vendor names MUST be lowercase ('aws', 'gcp', 'azure')
  - getIconName adds '$' prefix automatically ($aws, $gcp, $azure)
-->`

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

// Computed highlighted code
const highlightedAlignmentCode = computed(() => {
  return highlightCode(alignmentCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedWidthCode = computed(() => {
  return highlightCode(widthCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedChipCode = computed(() => {
  return highlightCode(chipCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedPattern0Code = computed(() => {
  return highlightCode(pattern0CodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedPattern1Code = computed(() => {
  return highlightCode(pattern1CodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedPattern2Code = computed(() => {
  return highlightCode(pattern2CodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedPattern3Code = computed(() => {
  return highlightCode(pattern3CodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedPercentageCode = computed(() => {
  return highlightCode(percentageCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedProviderCode = computed(() => {
  return highlightCode(providerCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
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

.code-block :deep(.attribute) {
  color: #92c5f7;
}

.code-block :deep(.directive) {
  color: #c586c0;
}

.code-block :deep(.string) {
  color: #ce9178;
}

.code-block :deep(.template) {
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
