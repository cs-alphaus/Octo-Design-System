<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Calendar</h1>
      <p class="text-h6 text-medium-emphasis">
        A comprehensive date range selector with quick presets, fiscal quarters, and extensible ranges.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        The Calendar component provides an advanced date range selection interface with pre-built quick ranges.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <Calendar
              v-model:dateRange="basicRange"
              color="primary"
            />
            <Calendar
              v-model:dateRange="secondaryRange"
              color="secondary"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Calendar
  v-model:dateRange="dateRange"
  color="primary"
/&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Calendar } from '@/components'

const dateRange = ref([])
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Dual Calendar View Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Dual Calendar View</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        A more advanced calendar interface with side-by-side month views and preset options.
      </p>

      <!-- Dual Calendar Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <CalendarDual
              v-model:dateRange="dualRange"
              color="primary"
              title="Date picker/ dual calendar view"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;CalendarDual
  v-model:dateRange="dateRange"
  color="primary"
  title="Date picker/ dual calendar view"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Color Variants Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Color Variants</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Both calendar components support different color themes.
      </p>

      <!-- Color Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex align-center gap-4 flex-wrap">
            <Calendar
              v-model:dateRange="colorRange"
              color="info"
            />
            <Calendar
              v-model:dateRange="warningRange"
              color="warning"
            />
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Calendar
  v-model:dateRange="dateRange"
  color="info"
/&gt;
&lt;Calendar
  v-model:dateRange="dateRange"
  color="warning"
/&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Quick Range Presets Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Quick Range Presets</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        The Calendar component includes comprehensive quick range presets for common date selections.
      </p>

      <div class="mb-6">
        <h3 class="text-h6 mb-3">Available Presets</h3>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="text-subtitle-1 mb-2">Daily Ranges</h4>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title>Last 7 days</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Last 30 days</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Last 90 days</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Last 180 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="text-subtitle-1 mb-2">Monthly Ranges</h4>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title>Last 3 months</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Last 6 months</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Last 9 months</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Last 12 months</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>

        <v-row class="mt-4">
          <v-col cols="12" md="6">
            <h4 class="text-subtitle-1 mb-2">Period Ranges</h4>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title>This month</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>This year</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Month to date</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Year to date</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="text-subtitle-1 mb-2">Quarterly Ranges</h4>
            <v-list density="compact">
              <v-list-item>
                <v-list-item-title>Q1 (Quarter 1)</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Q2 (Quarter 2)</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Q3 (Quarter 3)</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Q4 (Quarter 4)</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </section>

    <!-- Props Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Props</h2>

      <div class="api-table">
        <div class="api-row api-header">
          <div class="api-col">Prop</div>
          <div class="api-col">Type</div>
          <div class="api-col">Default</div>
          <div class="api-col">Description</div>
        </div>

        <div class="api-row">
          <div class="api-col" data-label="Prop:">
            <code>dateRange</code>
          </div>
          <div class="api-col" data-label="Type:">
            <span class="api-type">string[]</span>
          </div>
          <div class="api-col" data-label="Default:">
            <span class="api-default">[]</span>
          </div>
          <div class="api-col" data-label="Description:">
            Array of date strings representing the selected range in YYYY-MM-DD format
          </div>
        </div>


        <div class="api-row">
          <div class="api-col" data-label="Prop:">
            <code>color</code>
          </div>
          <div class="api-col" data-label="Type:">
            <span class="api-type">string</span>
          </div>
          <div class="api-col" data-label="Default:">
            <span class="api-default">"primary"</span>
          </div>
          <div class="api-col" data-label="Description:">
            Button color theme (primary, secondary, info, warning, error, success)
          </div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Events</h2>

      <div class="api-table">
        <div class="api-row api-header">
          <div class="api-col">Event</div>
          <div class="api-col">Type</div>
          <div class="api-col">Description</div>
          <div class="api-col">Payload</div>
        </div>

        <div class="api-row">
          <div class="api-col" data-label="Event:">
            <code>update:dateRange</code>
          </div>
          <div class="api-col" data-label="Type:">
            <span class="api-type">function</span>
          </div>
          <div class="api-col" data-label="Description:">
            Emitted when the date range changes
          </div>
          <div class="api-col" data-label="Payload:">
            <code>string[]</code> - Array of start and end dates
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Key Features</h2>

      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <v-icon icon="mdi-calendar-clock" color="primary" class="mr-3" />
                <h3 class="text-h6">Quick Presets</h3>
              </div>
              <p class="text-body-2">
                Comprehensive set of common date range presets including daily, monthly, and period-based selections.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <v-icon icon="mdi-calendar-multiselect" color="primary" class="mr-3" />
                <h3 class="text-h6">Fiscal Quarters</h3>
              </div>
              <p class="text-body-2">
                Built-in quarterly date selection with configurable fiscal year support and year selection.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <v-icon icon="mdi-calendar-plus" color="primary" class="mr-3" />
                <h3 class="text-h6">Extendable Ranges</h3>
              </div>
              <p class="text-body-2">
                Add additional days or months to the end date for flexible date range extensions.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card elevation="2" class="h-100">
            <v-card-text>
              <div class="d-flex align-center mb-3">
                <v-icon icon="mdi-pin" color="primary" class="mr-3" />
                <h3 class="text-h6">Fixed End Date</h3>
              </div>
              <p class="text-body-2">
                Option to fix the end date and calculate relative ranges from that fixed endpoint.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Dependencies Section -->
    <section>
      <h2 class="text-h4 mb-4">Dependencies</h2>
      <p class="text-body-1 text-medium-emphasis mb-4">
        This component uses the following dependencies:
      </p>

      <v-list>
        <v-list-item prepend-icon="mdi-package-variant">
          <v-list-item-title><code>dayjs</code></v-list-item-title>
          <v-list-item-subtitle>Date manipulation and formatting library</v-list-item-subtitle>
        </v-list-item>
        <v-list-item prepend-icon="mdi-package-variant">
          <v-list-item-title><code>lodash</code></v-list-item-title>
          <v-list-item-subtitle>Utility functions (cloneDeep)</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </section>

    <!-- Usage Examples -->
    <section class="mt-12">
      <h2 class="text-h4 mb-4">Complete Example</h2>

      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <Calendar
              v-model:dateRange="completeExample"
              color="primary"
            />
            <div v-if="completeExample.length === 2" class="mt-4">
              <v-alert color="info" variant="tonal">
                <strong>Selected Range:</strong> {{ completeExample[0] }} to {{ completeExample[1] }}
              </v-alert>
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block">
&lt;template&gt;
  &lt;Calendar
    v-model:dateRange="dateRange"
    color="primary"
  /&gt;

  &lt;div v-if="dateRange.length === 2" class="mt-4"&gt;
    &lt;v-alert color="info" variant="tonal"&gt;
      Selected Range: dateRange[0] to dateRange[1]
    &lt;/v-alert&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { Calendar } from '@/components'

const dateRange = ref([])
&lt;/script&gt;
</pre>
          </div>
        </details>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Calendar from '@/components/Calendar/Calendar.vue'
import CalendarDual from '@/components/Calendar/CalendarDual.vue'

// Component state
const basicRange = ref<string[]>([])
const secondaryRange = ref<string[]>([])
const dualRange = ref<string[]>([])
const colorRange = ref<string[]>([])
const warningRange = ref<string[]>([])
const completeExample = ref<string[]>([])
</script>