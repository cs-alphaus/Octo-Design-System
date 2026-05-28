<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Typography System</h1>
      <p class="text-base mb-6">
        Octo's custom typography system based on Tailwind CSS, providing 13 consistent size variants.
        Framework-agnostic and version-independent, ensuring long-term stability.
      </p>
    </div>

    <!-- Tailwind Typography Scale -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Tailwind Typography Scale</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Custom typography scale with 13 size variants from xs (12px) to 9xl (128px).
        All classes use the format <code>text-{size}</code>.
      </p>

      <v-card>
        <v-card-text>
          <div class="mb-6" v-for="typo in tailwindTypography" :key="typo.class">
            <div class="d-flex align-center mb-2">
              <v-chip color="primary" variant="outlined" size="small" class="mr-4 font-mono">{{ typo.class }}</v-chip>
              <span class="text-sm text-medium-emphasis">{{ typo.size }} • {{ typo.usage }}</span>
            </div>
            <div :class="typo.class">{{ typo.sample }}</div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Font Weights -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Font Weights</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Vuetify provides 7 font weight utilities for typography emphasis and hierarchy.
      </p>

      <v-row>
        <v-col cols="12" md="6" v-for="weight in fontWeights" :key="weight.class">
          <v-card>
            <v-card-text>
              <div class="d-flex align-center mb-2">
                <v-chip variant="tonal" size="small" class="mr-2 font-mono">{{ weight.class }}</v-chip>
                <span class="text-sm text-medium-emphasis">{{ weight.value }}</span>
              </div>
              <p :class="`text-xl ${weight.class}`">{{ weight.sample }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Component Defaults -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Component Typography Defaults</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Vuetify components are configured with default typography classes for consistency.
      </p>

      <v-card>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Component</th>
              <th class="text-left">Default Class</th>
              <th class="text-left">Size</th>
              <th class="text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comp in componentDefaults" :key="comp.component">
              <td><code>{{ comp.component }}</code></td>
              <td><v-chip size="small" variant="tonal" color="primary">{{ comp.class }}</v-chip></td>
              <td class="text-sm">{{ comp.size }}</td>
              <td class="text-sm text-medium-emphasis">{{ comp.purpose }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>

    <!-- Usage Examples -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Usage Examples</h2>

      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Page Headers</v-card-title>
            <v-card-text>
              <div class="text-3xl font-weight-bold mb-2">Main Page Title</div>
              <div class="text-base text-medium-emphasis mb-4">Page subtitle or description</div>

              <div class="text-2xl font-weight-medium mb-2">Section Header</div>
              <div class="text-base mb-4">Section description with standard body text</div>

              <div class="text-xl font-weight-medium mb-1">Subsection</div>
              <div class="text-sm text-medium-emphasis">Subsection description</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Content Hierarchy</v-card-title>
            <v-card-text>
              <div class="text-xl font-weight-medium mb-2">Article Title</div>
              <div class="text-base mb-3">
                Standard paragraph text for reading content. This uses text-base
                which provides optimal readability at 16px.
              </div>
              <div class="text-sm text-medium-emphasis mb-2">
                Secondary information using text-sm with medium emphasis.
              </div>
              <div class="text-xs">
                Caption text for metadata, timestamps, or additional details.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Cards & Lists</v-card-title>
            <v-card-text>
              <v-card variant="tonal" class="mb-3">
                <v-card-title class="text-xl font-weight-medium">Card Title</v-card-title>
                <v-card-subtitle class="text-sm">Card Subtitle</v-card-subtitle>
                <v-card-text class="text-base">
                  Card body text with default text-base sizing for readability.
                </v-card-text>
              </v-card>

              <v-list>
                <v-list-item>
                  <v-list-item-title class="text-base">List Item Title</v-list-item-title>
                  <v-list-item-subtitle class="text-sm">List item subtitle</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Dialogs</v-card-title>
            <v-card-text>
              <div class="pa-4 bg-surface rounded">
                <div class="text-2xl font-weight-medium mb-3">Standard Dialog</div>
                <div class="text-base mb-4">
                  Dialog body text explaining the action or providing information.
                </div>
                <div class="text-xl font-weight-medium mb-2">Confirmation Dialog</div>
                <div class="text-base">
                  Are you sure you want to proceed with this action?
                </div>
              </div>
            </v-card-text>
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
            <h3 class="text-lg mb-3">Basic Usage</h3>
            <pre class="text-xs pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ basicUsageCode }}</pre>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-lg mb-3">With Font Weights</h3>
            <pre class="text-xs pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ fontWeightUsageCode }}</pre>
          </v-col>
        </v-row>

        <h3 class="text-lg mb-3 mt-4">Typography Guidelines</h3>
        <ul class="text-base">
          <li><strong>Hierarchy:</strong> Use larger sizes (2xl-4xl) for headlines, base/lg for body text</li>
          <li><strong>Readability:</strong> text-base (16px) is the optimal default for body content</li>
          <li><strong>Emphasis:</strong> Combine size classes with font-weight utilities for proper emphasis</li>
          <li><strong>Consistency:</strong> Use the same size for similar elements across the application</li>
          <li><strong>Color:</strong> Use text opacity utilities (text-high-emphasis, text-medium-emphasis) for content layers</li>
          <li><strong>Responsive:</strong> Consider adjusting typography sizes for mobile viewports</li>
        </ul>

        <h3 class="text-lg mb-3 mt-4">Migration from Vuetify Classes</h3>
        <p class="text-base mb-3">
          The Tailwind typography system replaces older Vuetify text classes with more predictable sizes:
        </p>
        <v-card variant="tonal">
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">Old Vuetify Classes</div>
                <ul class="text-sm">
                  <li><code>text-h6</code> (20px)</li>
                  <li><code>text-h5</code> (24px)</li>
                  <li><code>text-body-1</code> (16px)</li>
                  <li><code>text-body-2</code> (14px)</li>
                  <li><code>text-caption</code> (12px)</li>
                </ul>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">New Tailwind Classes</div>
                <ul class="text-sm">
                  <li><code>text-xl</code> (20px) → Similar to h6</li>
                  <li><code>text-2xl</code> (24px) → Similar to h5</li>
                  <li><code>text-base</code> (16px) → Similar to body-1</li>
                  <li><code>text-sm</code> (14px) → Similar to body-2</li>
                  <li><code>text-xs</code> (12px) → Similar to caption</li>
                </ul>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const tailwindTypography = [
  {
    class: 'text-xs',
    size: '0.75rem (12px)',
    usage: 'Captions, metadata, timestamps',
    sample: 'Extra small text for fine print and metadata'
  },
  {
    class: 'text-sm',
    size: '0.875rem (14px)',
    usage: 'Secondary body text, labels',
    sample: 'Small text for secondary content and descriptions'
  },
  {
    class: 'text-base',
    size: '1rem (16px)',
    usage: 'Default body text (recommended)',
    sample: 'Base text - optimal size for primary reading content'
  },
  {
    class: 'text-lg',
    size: '1.125rem (18px)',
    usage: 'Emphasized body text',
    sample: 'Large text for emphasized content'
  },
  {
    class: 'text-xl',
    size: '1.25rem (20px)',
    usage: 'Small headings, dialog titles',
    sample: 'Extra large text for small headings'
  },
  {
    class: 'text-2xl',
    size: '1.5rem (24px)',
    usage: 'Section headings, dialog headers',
    sample: '2XL text for section headings'
  },
  {
    class: 'text-3xl',
    size: '1.875rem (30px)',
    usage: 'Page titles, major headings',
    sample: '3XL text for page titles'
  },
  {
    class: 'text-4xl',
    size: '2.25rem (36px)',
    usage: 'Large page titles',
    sample: '4XL text for large titles'
  },
  {
    class: 'text-5xl',
    size: '3rem (48px)',
    usage: 'Hero headings',
    sample: '5XL Hero Text'
  },
  {
    class: 'text-6xl',
    size: '3.75rem (60px)',
    usage: 'Large hero headings',
    sample: '6XL Hero'
  },
  {
    class: 'text-7xl',
    size: '4.5rem (72px)',
    usage: 'Display text',
    sample: '7XL'
  },
  {
    class: 'text-8xl',
    size: '6rem (96px)',
    usage: 'Extra large display',
    sample: '8XL'
  },
  {
    class: 'text-9xl',
    size: '8rem (128px)',
    usage: 'Maximum display size',
    sample: '9XL'
  }
]

const fontWeights = [
  {
    class: 'font-weight-thin',
    value: '100',
    sample: 'Thin weight text'
  },
  {
    class: 'font-weight-light',
    value: '300',
    sample: 'Light weight text'
  },
  {
    class: 'font-weight-regular',
    value: '400',
    sample: 'Regular weight text'
  },
  {
    class: 'font-weight-medium',
    value: '500',
    sample: 'Medium weight text'
  },
  {
    class: 'font-weight-semibold',
    value: '600',
    sample: 'Semibold weight text'
  },
  {
    class: 'font-weight-bold',
    value: '700',
    sample: 'Bold weight text'
  },
  {
    class: 'font-weight-black',
    value: '900',
    sample: 'Black weight text'
  }
]

const componentDefaults = [
  { component: 'VCardTitle', class: 'text-xl font-weight-medium', size: '20px', purpose: 'Card headings' },
  { component: 'VCardSubtitle', class: 'text-sm', size: '14px', purpose: 'Card subtitles' },
  { component: 'VCardText', class: 'text-base', size: '16px', purpose: 'Card body text' },
  { component: 'VListItemTitle', class: 'text-base', size: '16px', purpose: 'List primary text' },
  { component: 'VListItemSubtitle', class: 'text-sm', size: '14px', purpose: 'List secondary text' },
  { component: 'VChip', class: 'text-sm', size: '14px', purpose: 'Compact labels' },
  { component: 'VDataTable', class: 'text-sm', size: '14px', purpose: 'Dense data display' },
  { component: 'VAlert', class: 'text-base', size: '16px', purpose: 'Alert messages' },
  { component: 'VBtn', class: 'text-sm', size: '14px', purpose: 'Button text' },
  { component: 'VTextField', class: 'text-base', size: '16px', purpose: 'Input field text' }
]

const basicUsageCode = `<!-- Tailwind Typography Classes -->
<h1 class="text-3xl font-weight-bold">Page Title</h1>
<p class="text-base text-medium-emphasis">Subtitle</p>
<p class="text-base">Primary content</p>
<p class="text-sm">Secondary content</p>
<span class="text-xs">Metadata</span>`

const fontWeightUsageCode = `<!-- Combined with Font Weights -->
<div class="text-2xl font-weight-bold">Bold Header</div>
<div class="text-xl font-weight-medium">Medium Header</div>
<div class="text-base font-weight-regular">Body Text</div>
<div class="text-sm font-weight-light">Light Text</div>

<!-- With Emphasis -->
<p class="text-base text-high-emphasis">Emphasized</p>
<p class="text-sm text-medium-emphasis">Medium</p>`
</script>

<style scoped>
code {
  background-color: rgba(var(--v-theme-surface-variant), 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.875em;
}

pre {
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-word;
}

.bg-surface {
  background-color: rgb(var(--v-theme-surface));
}
</style>
