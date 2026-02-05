<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Typography</h1>
      <p class="text-body-1 mb-6">
        Typography system based on Material Design 3 with custom utility classes for enhanced flexibility.
        All typography scales and weights are optimized for both web and mobile interfaces.
      </p>
    </div>

    <!-- Vuetify Typography Scale -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Vuetify Typography Scale</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Material Design 3 typography scale integrated with Vuetify's text utility classes.
      </p>

      <v-card>
        <v-card-text>
          <div class="mb-6" v-for="typo in vuetifyTypography" :key="typo.class">
            <div class="d-flex align-center mb-2">
              <v-chip variant="outlined" size="small" class="mr-4 font-mono">{{ typo.class }}</v-chip>
              <span class="text-body-2 text-medium-emphasis">{{ typo.size }} • {{ typo.usage }}</span>
            </div>
            <div :class="typo.class">{{ typo.sample }}</div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Custom Typography Utilities -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Custom Typography Utilities</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Additional typography utilities defined in the design system for more granular control.
      </p>

      <v-card>
        <v-card-text>
          <div class="mb-6" v-for="custom in customTypography" :key="custom.class">
            <div class="d-flex align-center mb-2">
              <v-chip color="primary" variant="outlined" size="small" class="mr-4 font-mono">{{ custom.class }}</v-chip>
              <span class="text-body-2 text-medium-emphasis">{{ custom.size }} • {{ custom.usage }}</span>
            </div>
            <div :class="custom.class">{{ custom.sample }}</div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Font Weights -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Font Weights</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Available font weight utilities for emphasis and hierarchy.
      </p>

      <v-row>
        <v-col cols="12" md="6" v-for="weight in fontWeights" :key="weight.class">
          <v-card>
            <v-card-text>
              <div class="d-flex align-center mb-2">
                <v-chip variant="tonal" size="small" class="mr-2 font-mono">{{ weight.class }}</v-chip>
                <span class="text-body-2 text-medium-emphasis">{{ weight.value }}</span>
              </div>
              <p :class="`text-h6 ${weight.class}`">{{ weight.sample }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Usage Examples -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Usage Examples</h2>

      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Page Headers</v-card-title>
            <v-card-text>
              <div class="text-h3 font-weight-bold mb-2">Main Page Title</div>
              <div class="text-h6 text-medium-emphasis mb-4">Page subtitle or description</div>

              <div class="text-h4 font-weight-medium mb-2">Section Header</div>
              <div class="text-body-1 mb-4">Section description with standard body text</div>

              <div class="text-h5 font-weight-medium mb-1">Subsection</div>
              <div class="text-body-2 text-medium-emphasis">Subsection description</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Content Hierarchy</v-card-title>
            <v-card-text>
              <div class="text-h6 font-weight-medium mb-2">Article Title</div>
              <div class="text-body-1 mb-3">
                Standard paragraph text for reading content. This uses text-body-1
                which provides optimal readability for longer form content.
              </div>
              <div class="text-body-2 text-medium-emphasis mb-2">
                Secondary information using text-body-2 with medium emphasis.
              </div>
              <div class="text-caption">
                Caption text for metadata, timestamps, or additional details.
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
            <h3 class="text-h6 mb-3">Basic Usage</h3>
            <pre class="text-caption pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ basicUsageCode }}</pre>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-h6 mb-3">Custom Utilities</h3>
            <pre class="text-caption pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ customUtilitiesCode }}</pre>
          </v-col>
        </v-row>

        <h3 class="text-h6 mb-3 mt-4">Typography Guidelines</h3>
        <ul class="text-body-2">
          <li><strong>Hierarchy:</strong> Use heading scales (h1-h6) to establish clear content hierarchy</li>
          <li><strong>Readability:</strong> Use text-body-1 for primary content, text-body-2 for secondary</li>
          <li><strong>Emphasis:</strong> Combine with font-weight utilities for proper emphasis</li>
          <li><strong>Color:</strong> Use text opacity utilities (text-high-emphasis, text-medium-emphasis) for content layers</li>
          <li><strong>Custom Sizes:</strong> Use custom utilities (text-xxs to text-xxl) for specific design needs</li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const vuetifyTypography = [
  {
    class: 'text-h1',
    size: '6rem (96px)',
    usage: 'Large display headlines',
    sample: 'Display Large'
  },
  {
    class: 'text-h2',
    size: '3.75rem (60px)',
    usage: 'Display medium headlines',
    sample: 'Display Medium'
  },
  {
    class: 'text-h3',
    size: '3rem (48px)',
    usage: 'Display small, page titles',
    sample: 'Display Small'
  },
  {
    class: 'text-h4',
    size: '2.125rem (34px)',
    usage: 'Headlines large',
    sample: 'Headline Large'
  },
  {
    class: 'text-h5',
    size: '1.5rem (24px)',
    usage: 'Headlines medium',
    sample: 'Headline Medium'
  },
  {
    class: 'text-h6',
    size: '1.25rem (20px)',
    usage: 'Headlines small, section titles',
    sample: 'Headline Small'
  },
  {
    class: 'text-subtitle-1',
    size: '1rem (16px)',
    usage: 'Subtitles, emphasized body',
    sample: 'Subtitle 1'
  },
  {
    class: 'text-subtitle-2',
    size: '0.875rem (14px)',
    usage: 'Subtitles small, labels',
    sample: 'Subtitle 2'
  },
  {
    class: 'text-body-1',
    size: '1rem (16px)',
    usage: 'Primary body text',
    sample: 'Body 1 - Primary reading content'
  },
  {
    class: 'text-body-2',
    size: '0.875rem (14px)',
    usage: 'Secondary body text',
    sample: 'Body 2 - Secondary content and descriptions'
  },
  {
    class: 'text-button',
    size: '0.875rem (14px)',
    usage: 'Button text, calls to action',
    sample: 'BUTTON TEXT'
  },
  {
    class: 'text-caption',
    size: '0.75rem (12px)',
    usage: 'Captions, metadata, timestamps',
    sample: 'Caption text for details'
  },
  {
    class: 'text-overline',
    size: '0.75rem (12px)',
    usage: 'Overlines, section labels',
    sample: 'OVERLINE TEXT'
  }
]

const customTypography = [
  {
    class: 'text-xxs',
    size: '0.5rem (8px)',
    usage: 'Micro text, badges',
    sample: 'Extra extra small text'
  },
  {
    class: 'text-xs',
    size: '0.65rem (10.4px)',
    usage: 'Small labels, fine print',
    sample: 'Extra small text'
  },
  {
    class: 'text-sm',
    size: '0.85rem (13.6px)',
    usage: 'Small body text',
    sample: 'Small text content'
  },
  {
    class: 'text-md',
    size: '1rem (16px)',
    usage: 'Medium body text (same as body-1)',
    sample: 'Medium text content'
  },
  {
    class: 'text-lg',
    size: '1.2rem (19.2px)',
    usage: 'Large body text',
    sample: 'Large text content'
  },
  {
    class: 'text-xl',
    size: '1.5rem (24px)',
    usage: 'Extra large text',
    sample: 'Extra large text content'
  },
  {
    class: 'text-xxl',
    size: '1.85rem (29.6px)',
    usage: 'Display text',
    sample: 'Extra extra large text'
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

const basicUsageCode = `<!-- Vuetify Typography Classes -->
<h1 class="text-h3 font-weight-bold">Page Title</h1>
<p class="text-h6 text-medium-emphasis">Subtitle</p>
<p class="text-body-1">Primary content</p>
<p class="text-body-2">Secondary content</p>
<span class="text-caption">Metadata</span>`

const customUtilitiesCode = `<!-- Custom Typography Utilities -->
<span class="text-xxs">Micro text</span>
<span class="text-xs">Small text</span>
<span class="text-lg font-weight-medium">Large text</span>
<span class="text-xxl">Display text</span>

<!-- Combined with emphasis -->
<p class="text-md text-high-emphasis">Emphasized</p>
<p class="text-sm text-medium-emphasis">Medium</p>`
</script>