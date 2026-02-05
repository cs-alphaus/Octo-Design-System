<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Spacing</h1>
      <p class="text-body-1 mb-6">
        Consistent spacing system based on a 4px grid with Vuetify's built-in spacing utilities.
        All spacing values follow Material Design 3 principles for visual rhythm and hierarchy.
      </p>
    </div>

    <!-- Spacing Scale -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Spacing Scale</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Our spacing system is based on a 4px grid. Each unit represents 4px of space.
      </p>

      <v-card>
        <v-card-text>
          <div v-for="space in spacingScale" :key="space.value" class="mb-6">
            <div class="d-flex align-center mb-2">
              <v-chip variant="outlined" size="small" class="mr-4 font-mono">{{ space.value }}</v-chip>
              <span class="text-body-2 text-medium-emphasis">{{ space.pixels }} • {{ space.usage }}</span>
            </div>
            <div class="d-flex align-center">
              <div
                class="spacing-demo-box"
                :style="{ width: `${space.size}px`, height: '24px' }"
              ></div>
              <span class="text-caption ml-2">{{ space.size }}px</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Margin Utilities -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Margin Utilities</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Margin utilities for external spacing. Use 'm' for all sides, or directional utilities.
      </p>

      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>All Sides</v-card-title>
            <v-card-text>
              <div v-for="margin in marginUtilities" :key="margin.class" class="mb-3">
                <v-chip variant="outlined" size="small" class="font-mono mb-2">{{ margin.class }}</v-chip>
                <div class="demo-container">
                  <div class="demo-outer">
                    <div :class="`demo-inner ${margin.class}`">Content</div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Directional</v-card-title>
            <v-card-text>
              <div v-for="direction in marginDirections" :key="direction.class" class="mb-3">
                <v-chip variant="outlined" size="small" class="font-mono mb-2">{{ direction.class }}</v-chip>
                <p class="text-caption text-medium-emphasis">{{ direction.description }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Padding Utilities -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Padding Utilities</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Padding utilities for internal spacing. Use 'p' for all sides, or directional utilities.
      </p>

      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>All Sides</v-card-title>
            <v-card-text>
              <div v-for="padding in paddingUtilities" :key="padding.class" class="mb-3">
                <v-chip variant="outlined" size="small" class="font-mono mb-2">{{ padding.class }}</v-chip>
                <div :class="`demo-padding-box ${padding.class}`">
                  <div class="demo-padding-content">Content</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Directional</v-card-title>
            <v-card-text>
              <div v-for="direction in paddingDirections" :key="direction.class" class="mb-3">
                <v-chip variant="outlined" size="small" class="font-mono mb-2">{{ direction.class }}</v-chip>
                <p class="text-caption text-medium-emphasis">{{ direction.description }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Gap Utilities -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Gap Utilities</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Gap utilities for spacing between flex and grid items.
      </p>

      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Flex Gap</v-card-title>
            <v-card-text>
              <div v-for="gap in gapUtilities" :key="gap.class" class="mb-4">
                <v-chip variant="outlined" size="small" class="font-mono mb-2">{{ gap.class }}</v-chip>
                <div :class="`d-flex flex-wrap ${gap.class}`">
                  <div class="gap-demo-item">Item 1</div>
                  <div class="gap-demo-item">Item 2</div>
                  <div class="gap-demo-item">Item 3</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Responsive Usage</v-card-title>
            <v-card-text>
              <pre class="text-caption pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ responsiveCode }}</pre>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Real-world Examples -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Real-world Examples</h2>

      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-6">
            <h3 class="text-h6 mb-4">Card Example</h3>
            <p class="text-body-2 mb-4">
              This card uses pa-6 for internal padding and mb-4 for margins between content elements.
            </p>
            <v-btn color="primary" class="mt-2">Action</v-btn>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-card-title class="pb-2">List Example</v-card-title>
            <v-card-text class="pt-0">
              <div class="py-3 border-b">
                <div class="text-subtitle-2 mb-1">Item Title</div>
                <div class="text-body-2 text-medium-emphasis">Item description with py-3 spacing</div>
              </div>
              <div class="py-3 border-b">
                <div class="text-subtitle-2 mb-1">Item Title</div>
                <div class="text-body-2 text-medium-emphasis">Item description with py-3 spacing</div>
              </div>
              <div class="py-3">
                <div class="text-subtitle-2 mb-1">Item Title</div>
                <div class="text-body-2 text-medium-emphasis">Item description with py-3 spacing</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-4">
            <h3 class="text-h6 mb-3">Button Group</h3>
            <div class="d-flex gap-3 flex-wrap">
              <v-btn color="primary">Primary</v-btn>
              <v-btn variant="outlined">Secondary</v-btn>
              <v-btn variant="text">Tertiary</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Implementation Guide -->
    <v-card>
      <v-card-title>Implementation Guide</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-3">Basic Usage</h3>
            <pre class="text-caption pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ basicUsageCode }}</pre>

            <h3 class="text-h6 mb-3">Best Practices</h3>
            <ul class="text-body-2">
              <li>Use consistent spacing values from the 4px grid</li>
              <li>Prefer smaller values (2, 3, 4) for tight layouts</li>
              <li>Use larger values (8, 12, 16) for section separation</li>
              <li>Combine with responsive classes for mobile optimization</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-3">Common Patterns</h3>
            <pre class="text-caption pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ commonPatternsCode }}</pre>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const spacingScale = [
  { value: '0', pixels: '0px', size: 0, usage: 'No spacing' },
  { value: '1', pixels: '4px', size: 4, usage: 'Minimal spacing' },
  { value: '2', pixels: '8px', size: 8, usage: 'Small spacing' },
  { value: '3', pixels: '12px', size: 12, usage: 'Medium spacing' },
  { value: '4', pixels: '16px', size: 16, usage: 'Standard spacing' },
  { value: '5', pixels: '20px', size: 20, usage: 'Large spacing' },
  { value: '6', pixels: '24px', size: 24, usage: 'Extra large spacing' },
  { value: '8', pixels: '32px', size: 32, usage: 'Section spacing' },
  { value: '10', pixels: '40px', size: 40, usage: 'Large section spacing' },
  { value: '12', pixels: '48px', size: 48, usage: 'Extra large section spacing' },
  { value: '16', pixels: '64px', size: 64, usage: 'Maximum spacing' }
]

const marginUtilities = [
  { class: 'm-1', size: '4px' },
  { class: 'm-2', size: '8px' },
  { class: 'm-4', size: '16px' },
  { class: 'm-6', size: '24px' }
]

const marginDirections = [
  { class: 'mt-4', description: 'Margin top' },
  { class: 'mr-4', description: 'Margin right' },
  { class: 'mb-4', description: 'Margin bottom' },
  { class: 'ml-4', description: 'Margin left' },
  { class: 'mx-4', description: 'Margin horizontal (left + right)' },
  { class: 'my-4', description: 'Margin vertical (top + bottom)' }
]

const paddingUtilities = [
  { class: 'pa-1', size: '4px' },
  { class: 'pa-2', size: '8px' },
  { class: 'pa-4', size: '16px' },
  { class: 'pa-6', size: '24px' }
]

const paddingDirections = [
  { class: 'pt-4', description: 'Padding top' },
  { class: 'pr-4', description: 'Padding right' },
  { class: 'pb-4', description: 'Padding bottom' },
  { class: 'pl-4', description: 'Padding left' },
  { class: 'px-4', description: 'Padding horizontal (left + right)' },
  { class: 'py-4', description: 'Padding vertical (top + bottom)' }
]

const gapUtilities = [
  { class: 'gap-2', size: '8px' },
  { class: 'gap-3', size: '12px' },
  { class: 'gap-4', size: '16px' },
  { class: 'gap-6', size: '24px' }
]

const basicUsageCode = `<!-- Margin utilities -->
<div class="m-4">All margins</div>
<div class="mt-2 mb-4">Top and bottom margins</div>
<div class="mx-auto">Centered horizontally</div>

<!-- Padding utilities -->
<div class="pa-6">All padding</div>
<div class="px-4 py-2">Different x/y padding</div>

<!-- Gap utilities -->
<div class="d-flex gap-3">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`

const responsiveCode = `<!-- Responsive spacing -->
<div class="pa-2 pa-sm-4 pa-md-6">
  Responsive padding
</div>

<div class="gap-2 gap-md-4">
  Responsive gap
</div>

<div class="mb-4 mb-lg-8">
  Responsive margins
</div>`

const commonPatternsCode = `<!-- Card content -->
<v-card class="pa-6">
  <h2 class="mb-4">Title</h2>
  <p class="mb-6">Content</p>
  <v-btn>Action</v-btn>
</v-card>

<!-- Form layout -->
<form class="d-flex flex-column gap-4">
  <v-text-field />
  <v-text-field />
  <div class="d-flex gap-3">
    <v-btn>Submit</v-btn>
    <v-btn>Cancel</v-btn>
  </div>
</form>

<!-- List items -->
<div class="py-3 px-4">
  <h3 class="mb-2">Item</h3>
  <p class="mb-1">Description</p>
</div>`
</script>

<style scoped>
.spacing-demo-box {
  background: rgb(var(--v-theme-primary));
  border-radius: 4px;
}

.demo-container {
  background: rgba(var(--v-theme-surface-variant), 0.3);
  border-radius: 8px;
  padding: 8px;
  margin: 8px 0;
}

.demo-outer {
  background: rgba(var(--v-theme-warning), 0.2);
  border-radius: 4px;
  display: inline-block;
}

.demo-inner {
  background: rgba(var(--v-theme-primary), 0.8);
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
}

.demo-padding-box {
  background: rgba(var(--v-theme-warning), 0.2);
  border-radius: 4px;
  margin: 8px 0;
  display: inline-block;
}

.demo-padding-content {
  background: rgba(var(--v-theme-primary), 0.8);
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
}

.gap-demo-item {
  background: rgba(var(--v-theme-primary), 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
}

.border-b {
  border-bottom: 1px solid rgba(var(--v-theme-outline-variant), 0.2);
}
</style>