<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Color Card</h1>
      <p class="text-h6 text-medium-emphasis">
        Themed card component with automatic color application and opacity control.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple colored cards with automatic opacity based on theme.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4 flex-wrap">
            <ColorCard color="primary" style="min-width: 150px; min-height: 100px;" class="d-flex align-center justify-center">
              <span class="text-body-1 font-weight-medium">Primary</span>
            </ColorCard>

            <ColorCard color="success" style="min-width: 150px; min-height: 100px;" class="d-flex align-center justify-center">
              <span class="text-body-1 font-weight-medium">Success</span>
            </ColorCard>

            <ColorCard color="warning" style="min-width: 150px; min-height: 100px;" class="d-flex align-center justify-center">
              <span class="text-body-1 font-weight-medium">Warning</span>
            </ColorCard>

            <ColorCard color="error" style="min-width: 150px; min-height: 100px;" class="d-flex align-center justify-center">
              <span class="text-body-1 font-weight-medium">Error</span>
            </ColorCard>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;ColorCard color="primary"&gt;
  &lt;div class="pa-4"&gt;
    &lt;h3&gt;Primary Card&lt;/h3&gt;
    &lt;p&gt;Content with primary color background&lt;/p&gt;
  &lt;/div&gt;
&lt;/ColorCard&gt;

&lt;ColorCard color="success"&gt;
  &lt;div class="pa-4"&gt;
    &lt;h3&gt;Success Card&lt;/h3&gt;
    &lt;p&gt;Content with success color background&lt;/p&gt;
  &lt;/div&gt;
&lt;/ColorCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Opacity Control Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Opacity Control</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Control background opacity or use solid colors.
      </p>

      <!-- Opacity Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <!-- Default opacity -->
            <div>
              <h4 class="text-subtitle-1 mb-2">Default opacity (theme-based)</h4>
              <div class="d-flex gap-4">
                <ColorCard color="primary" style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption">Default</span>
                </ColorCard>
                <ColorCard color="info" style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption">Default</span>
                </ColorCard>
              </div>
            </div>

            <!-- Custom opacity -->
            <div>
              <h4 class="text-subtitle-1 mb-2">Custom opacity</h4>
              <div class="d-flex gap-4">
                <ColorCard color="primary" :opacity="[0.3]" style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption">30%</span>
                </ColorCard>
                <ColorCard color="primary" :opacity="[0.6]" style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption">60%</span>
                </ColorCard>
                <ColorCard color="primary" :opacity="[0.9]" style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption">90%</span>
                </ColorCard>
              </div>
            </div>

            <!-- No opacity (solid) -->
            <div>
              <h4 class="text-subtitle-1 mb-2">Solid colors (no opacity)</h4>
              <div class="d-flex gap-4">
                <ColorCard color="primary" no-opacity style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption text-white">Solid</span>
                </ColorCard>
                <ColorCard color="success" no-opacity style="min-width: 120px; min-height: 80px;" class="d-flex align-center justify-center">
                  <span class="text-caption text-white">Solid</span>
                </ColorCard>
              </div>
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Default opacity (theme-based) --&gt;
&lt;ColorCard color="primary"&gt;
  Content with default opacity
&lt;/ColorCard&gt;

&lt;!-- Custom opacity --&gt;
&lt;ColorCard color="primary" :opacity="[0.3]"&gt;
  30% opacity for all themes
&lt;/ColorCard&gt;

&lt;!-- Different opacity for light/dark theme --&gt;
&lt;ColorCard color="primary" :opacity="[0.2, 0.4]"&gt;
  20% light theme, 40% dark theme
&lt;/ColorCard&gt;

&lt;!-- Solid color --&gt;
&lt;ColorCard color="primary" no-opacity&gt;
  Solid color background
&lt;/ColorCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Theme Responsiveness Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Theme Responsiveness</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        ColorCards automatically adapt to light and dark themes.
      </p>

      <!-- Theme Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4 flex-wrap">
            <ColorCard color="primary" :opacity="[0.1, 0.3]" style="min-width: 150px; min-height: 100px;" class="pa-4">
              <h4 class="text-h6 mb-2">Adaptive</h4>
              <p class="text-body-2 mb-0">Lighter in light theme, darker in dark theme</p>
            </ColorCard>

            <ColorCard color="info" :opacity="[0.2, 0.4]" style="min-width: 150px; min-height: 100px;" class="pa-4">
              <h4 class="text-h6 mb-2">Responsive</h4>
              <p class="text-body-2 mb-0">Adapts opacity to theme</p>
            </ColorCard>
          </div>

          <v-alert type="info" variant="tonal" class="mt-4">
            <v-icon icon="mdi-lightbulb" class="mr-2" />
            <strong>Try switching themes!</strong> Use the theme toggle in the top-right to see how these cards adapt.
          </v-alert>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Array: [lightThemeOpacity, darkThemeOpacity] --&gt;
&lt;ColorCard color="primary" :opacity="[0.1, 0.3]"&gt;
  Lighter in light theme, darker in dark theme
&lt;/ColorCard&gt;

&lt;ColorCard color="info" :opacity="[0.2, 0.4]"&gt;
  20% opacity in light, 40% in dark
&lt;/ColorCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Card Variants Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Card Variants</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use different Vuetify card variants for additional styling.
      </p>

      <!-- Variant Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex gap-4 flex-wrap">
            <ColorCard color="primary" variant="elevated" style="min-width: 150px; min-height: 100px;" class="pa-4">
              <h4 class="text-h6 mb-1">Elevated</h4>
              <p class="text-body-2 mb-0">With elevation shadow</p>
            </ColorCard>

            <ColorCard color="success" variant="tonal" style="min-width: 150px; min-height: 100px;" class="pa-4">
              <h4 class="text-h6 mb-1">Tonal</h4>
              <p class="text-body-2 mb-0">Tonal variant</p>
            </ColorCard>

            <ColorCard color="warning" variant="outlined" style="min-width: 150px; min-height: 100px;" class="pa-4">
              <h4 class="text-h6 mb-1">Outlined</h4>
              <p class="text-body-2 mb-0">With border only</p>
            </ColorCard>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;ColorCard color="primary" variant="elevated"&gt;
  Elevated card with shadow
&lt;/ColorCard&gt;

&lt;ColorCard color="success" variant="tonal"&gt;
  Tonal variant styling
&lt;/ColorCard&gt;

&lt;ColorCard color="warning" variant="outlined"&gt;
  Outlined card with border
&lt;/ColorCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Real-world Examples Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Real-world Examples</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Common usage patterns for ColorCards in applications.
      </p>

      <!-- Real-world Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <!-- Status Cards -->
            <div>
              <h4 class="text-h6 mb-3">Status Dashboard</h4>
              <div class="d-flex gap-4 flex-wrap">
                <ColorCard color="success" style="min-width: 180px;" class="pa-4">
                  <div class="d-flex align-center gap-3">
                    <v-icon icon="mdi-check-circle" color="success" size="32" />
                    <div>
                      <h4 class="text-h6 mb-1">Active</h4>
                      <p class="text-body-2 mb-0">127 services</p>
                    </div>
                  </div>
                </ColorCard>

                <ColorCard color="warning" style="min-width: 180px;" class="pa-4">
                  <div class="d-flex align-center gap-3">
                    <v-icon icon="mdi-alert-circle" color="warning" size="32" />
                    <div>
                      <h4 class="text-h6 mb-1">Warning</h4>
                      <p class="text-body-2 mb-0">3 issues</p>
                    </div>
                  </div>
                </ColorCard>

                <ColorCard color="error" style="min-width: 180px;" class="pa-4">
                  <div class="d-flex align-center gap-3">
                    <v-icon icon="mdi-close-circle" color="error" size="32" />
                    <div>
                      <h4 class="text-h6 mb-1">Error</h4>
                      <p class="text-body-2 mb-0">1 critical</p>
                    </div>
                  </div>
                </ColorCard>
              </div>
            </div>

            <!-- Feature Cards -->
            <div>
              <h4 class="text-h6 mb-3">Feature Highlights</h4>
              <div class="d-flex gap-4 flex-wrap">
                <ColorCard color="primary" variant="outlined" style="min-width: 200px;" class="pa-4">
                  <v-icon icon="mdi-rocket" color="primary" size="40" class="mb-3" />
                  <h4 class="text-h6 mb-2">Fast Performance</h4>
                  <p class="text-body-2 mb-0">Optimized for speed and efficiency</p>
                </ColorCard>

                <ColorCard color="info" variant="outlined" style="min-width: 200px;" class="pa-4">
                  <v-icon icon="mdi-shield-check" color="info" size="40" class="mb-3" />
                  <h4 class="text-h6 mb-2">Secure</h4>
                  <p class="text-body-2 mb-0">Enterprise-grade security</p>
                </ColorCard>
              </div>
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- Status Card --&gt;
&lt;ColorCard color="success"&gt;
  &lt;div class="pa-4 d-flex align-center gap-3"&gt;
    &lt;v-icon icon="mdi-check-circle" color="success" size="32" /&gt;
    &lt;div&gt;
      &lt;h4&gt;Active&lt;/h4&gt;
      &lt;p&gt;127 services&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/ColorCard&gt;

&lt;!-- Feature Card --&gt;
&lt;ColorCard color="primary" variant="outlined"&gt;
  &lt;div class="pa-4"&gt;
    &lt;v-icon icon="mdi-rocket" color="primary" size="40" /&gt;
    &lt;h4&gt;Fast Performance&lt;/h4&gt;
    &lt;p&gt;Optimized for speed&lt;/p&gt;
  &lt;/div&gt;
&lt;/ColorCard&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-12">
      <h2 class="text-h4 mb-6">API Reference</h2>

      <!-- Props Table -->
      <div class="api-section">
        <h3 class="text-h5 mb-4">Props</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Prop</div>
            <div class="api-col">Type</div>
            <div class="api-col">Default</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="prop in colorCardProps" :key="prop.name">
            <div class="api-col">
              <code>{{ prop.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ prop.type }}</span>
            </div>
            <div class="api-col">
              <span class="api-default">{{ prop.default || '-' }}</span>
            </div>
            <div class="api-col">{{ prop.description }}</div>
          </div>
        </div>

        <div class="mt-4">
          <v-alert type="info" variant="tonal">
            <v-icon icon="mdi-information" class="mr-2" />
            <strong>Note:</strong> This component extends v-card, so all v-card props are also available.
          </v-alert>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ColorCard } from '@/components'

const colorCardProps = [
  {
    name: 'color',
    type: 'string',
    default: '-',
    description: 'Color name from the theme (primary, success, etc.)'
  },
  {
    name: 'opacity',
    type: 'number[]',
    default: '[]',
    description: 'Opacity values [light, dark] or [both]. Empty uses theme defaults'
  },
  {
    name: 'noOpacity',
    type: 'boolean',
    default: 'false',
    description: 'Use solid color instead of opacity'
  },
  {
    name: 'variant',
    type: 'string',
    default: '-',
    description: 'v-card variant (elevated, tonal, outlined, etc.)'
  },
  {
    name: 'height',
    type: 'string | number',
    default: '-',
    description: 'Fixed height for the card'
  },
  {
    name: 'elevation',
    type: 'string | number',
    default: '-',
    description: 'Card elevation (0-24)'
  }
]
</script>

<style scoped>
/* Component-specific styles only */
</style>