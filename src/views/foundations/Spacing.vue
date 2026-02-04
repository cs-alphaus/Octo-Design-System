<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Spacing</h1>
      <p class="text-h6 text-medium-emphasis">
        4px-based spacing system extracted from Octo's design patterns
      </p>
    </div>

    <!-- Spacing Scale -->
    <v-card class="mb-6">
      <v-card-title>Spacing Scale</v-card-title>
      <v-card-subtitle>Based on 4px base unit (0.25rem)</v-card-subtitle>
      <v-card-text>
        <div class="spacing-showcase">
          <div
            v-for="(size, key) in spacingScale"
            :key="key"
            class="spacing-item mb-4"
          >
            <div class="d-flex align-center">
              <div class="spacing-visual mr-4">
                <div
                  class="spacing-bar"
                  :style="{ width: size, height: '20px', backgroundColor: 'rgb(var(--v-theme-primary))' }"
                />
              </div>
              <div class="flex-grow-1">
                <div class="d-flex justify-between align-center">
                  <div>
                    <v-chip size="small" variant="outlined" class="mr-2">{{ key }}</v-chip>
                    <span class="text-body-2">{{ size }}</span>
                  </div>
                  <span class="text-caption text-medium-emphasis">
                    {{ parseInt(size) / 4 }}rem
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Vuetify Classes -->
    <v-card class="mb-6">
      <v-card-title>Vuetify Spacing Classes</v-card-title>
      <v-card-subtitle>Utility classes for margins and padding</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="mb-3">Margin Classes</h4>
            <div class="spacing-classes">
              <div
                v-for="example in marginExamples"
                :key="example.class"
                class="mb-2 d-flex justify-between align-center"
              >
                <code class="text-caption">{{ example.class }}</code>
                <span class="text-caption text-medium-emphasis">{{ example.description }}</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="mb-3">Padding Classes</h4>
            <div class="spacing-classes">
              <div
                v-for="example in paddingExamples"
                :key="example.class"
                class="mb-2 d-flex justify-between align-center"
              >
                <code class="text-caption">{{ example.class }}</code>
                <span class="text-caption text-medium-emphasis">{{ example.description }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Common Patterns -->
    <v-card class="mb-6">
      <v-card-title>Common Spacing Patterns</v-card-title>
      <v-card-subtitle>Extracted from Octo components</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col
            v-for="pattern in spacingPatterns"
            :key="pattern.name"
            cols="12"
            md="4"
          >
            <div class="pattern-example pa-4 mb-4" style="border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
              <h4 class="text-h6 mb-2">{{ pattern.name }}</h4>
              <p class="text-body-2 mb-2">{{ pattern.description }}</p>
              <v-chip size="small" variant="tonal">{{ pattern.value }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Usage Examples -->
    <v-card class="mb-6">
      <v-card-title>Usage Examples</v-card-title>
      <v-card-text>
        <h4 class="mb-3">CSS Custom Properties</h4>
        <v-code class="mb-4">
/* Using design tokens */
.card {
  padding: var(--spacing-4); /* 16px */
  margin-bottom: var(--spacing-6); /* 24px */
}

/* Using helper function */
.component {
  padding: {{ '{' }} formatToPx(spacing[4]) {{ '}' }}; /* "16px" */
}
        </v-code>

        <h4 class="mb-3">Vuetify Classes</h4>
        <v-code class="mb-4">
&lt;!-- Padding --&gt;
&lt;v-card class="pa-4"&gt;16px padding all sides&lt;/v-card&gt;
&lt;v-card class="px-6 py-2"&gt;24px horizontal, 8px vertical&lt;/v-card&gt;

&lt;!-- Margin --&gt;
&lt;div class="ma-3"&gt;12px margin all sides&lt;/div&gt;
&lt;div class="mb-6"&gt;24px bottom margin&lt;/div&gt;

&lt;!-- Gaps --&gt;
&lt;div class="d-flex ga-2"&gt;8px gap between items&lt;/div&gt;
        </v-code>

        <h4 class="mb-3">TypeScript</h4>
        <v-code>
import { spacing, formatToPx } from '@/tokens'

// Access spacing values
const cardPadding = spacing[4] // "16px"
const sectionSpacing = spacing[6] // "24px"

// Format dynamic values
const dynamicSpacing = formatToPx(someValue) // Ensures px unit
        </v-code>
      </v-card-text>
    </v-card>

    <!-- Interactive Demo -->
    <v-card>
      <v-card-title>Interactive Demo</v-card-title>
      <v-card-text>
        <div class="mb-4">
          <v-slider
            v-model="demoSpacing"
            :min="0"
            :max="12"
            :step="1"
            thumb-label
            label="Spacing Level"
            class="mb-4"
          />
        </div>

        <div class="demo-container pa-4" style="border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)); border-radius: 8px;">
          <div
            class="demo-box"
            :style="{
              padding: (spacing as any)[demoSpacing],
              backgroundColor: 'rgba(var(--v-theme-primary), 0.1)',
              border: '2px solid rgb(var(--v-theme-primary))',
              borderRadius: '8px'
            }"
          >
            <div class="text-center">
              <div class="text-h6 mb-2">Demo Box</div>
              <div class="text-body-2">
                Padding: <strong>{{ (spacing as any)[demoSpacing] }}</strong>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { spacing } from '@/tokens'

const demoSpacing = ref(4)

const spacingScale = {
  0: spacing[0],
  1: spacing[1],
  2: spacing[2],
  3: spacing[3],
  4: spacing[4],
  5: spacing[5],
  6: spacing[6],
  8: spacing[8],
  10: spacing[10],
  12: spacing[12],
  16: spacing[16],
  20: spacing[20]
}

const marginExamples = [
  { class: 'ma-0', description: 'No margin' },
  { class: 'ma-2', description: '8px all sides' },
  { class: 'mt-4', description: '16px top' },
  { class: 'mb-6', description: '24px bottom' },
  { class: 'mx-3', description: '12px horizontal' },
  { class: 'my-auto', description: 'Auto vertical' }
]

const paddingExamples = [
  { class: 'pa-0', description: 'No padding' },
  { class: 'pa-4', description: '16px all sides' },
  { class: 'px-6', description: '24px horizontal' },
  { class: 'py-2', description: '8px vertical' },
  { class: 'pt-8', description: '32px top' },
  { class: 'pb-3', description: '12px bottom' }
]

const spacingPatterns = [
  {
    name: 'Card Padding',
    description: 'Standard padding for cards and containers',
    value: spacing[4]
  },
  {
    name: 'Dialog Padding',
    description: 'Padding for dialog content',
    value: spacing[4]
  },
  {
    name: 'Section Spacing',
    description: 'Space between major sections',
    value: spacing[6]
  },
  {
    name: 'Component Spacing',
    description: 'Space between related components',
    value: spacing[4]
  },
  {
    name: 'List Item Padding',
    description: 'Padding for list items',
    value: spacing[3]
  },
  {
    name: 'Button Padding',
    description: 'Internal button padding',
    value: `${spacing[2]} ${spacing[4]}`
  }
]
</script>

<style scoped>
.spacing-visual {
  min-width: 100px;
}

.spacing-bar {
  border-radius: 2px;
  transition: all 0.2s ease;
}

.spacing-item:hover .spacing-bar {
  opacity: 0.8;
}
</style>