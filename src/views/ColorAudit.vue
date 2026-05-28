<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Color System Overview</h1>
      <p class="text-base mb-2">
        Comprehensive overview of Octo's color system with Tailwind-style palettes and theme colors.
      </p>
      <p class="text-xs text-medium-emphasis">
        Last Updated: May 12, 2026 • Source: Octo UI Color System
      </p>
    </div>

    <!-- Summary Statistics -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">📊 Color System Summary</h2>

      <v-row>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="primary">
            <v-card-text>
              <div class="text-h3 font-weight-bold">7</div>
              <div class="text-sm">Color Palettes</div>
              <div class="text-xs text-medium-emphasis">66 total shades</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="success">
            <v-card-text>
              <div class="text-h3 font-weight-bold">11</div>
              <div class="text-sm">Theme Colors</div>
              <div class="text-xs text-medium-emphasis">Light + Dark variants</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="info">
            <v-card-text>
              <div class="text-h3 font-weight-bold">3</div>
              <div class="text-sm">Vendor Colors</div>
              <div class="text-xs text-medium-emphasis">AWS, Azure, GCP</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="secondary">
            <v-card-text>
              <div class="text-h3 font-weight-bold">21</div>
              <div class="text-sm">Extended Colors</div>
              <div class="text-xs text-medium-emphasis">Material Design palette</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-alert color="success" variant="tonal" class="mt-4">
        <div class="text-lg mb-2">✅ Tailwind-Style Color System</div>
        <p class="text-base mb-2">
          Octo uses a <strong>Tailwind CSS-inspired color system</strong> with shades from 50-950/1000,
          providing granular control and predictable color progression.
        </p>
      </v-alert>
    </div>

    <!-- Color Palettes Overview -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">🎨 Color Palettes</h2>

      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="palette in palettes" :key="palette.name">
          <v-card>
            <v-card-title>{{ palette.title }}</v-card-title>
            <v-card-subtitle class="text-sm">{{ palette.description }}</v-card-subtitle>
            <v-card-text>
              <div class="palette-grid">
                <div
                  v-for="(hex, shade) in palette.colors"
                  :key="shade"
                  class="palette-swatch"
                  :style="{ backgroundColor: hex }"
                  :title="`${palette.name}-${shade}: ${hex}`"
                >
                  <span class="shade-label">{{ shade }}</span>
                </div>
              </div>
              <div class="text-xs text-medium-emphasis mt-2">
                <strong>{{ Object.keys(palette.colors).length }} shades</strong> • {{ palette.usage }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Theme Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">✨ Theme Colors</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Semantic colors that automatically adapt between light and dark themes.
      </p>

      <v-tabs v-model="themeTab" color="primary" class="mb-4">
        <v-tab value="brand">Brand (3)</v-tab>
        <v-tab value="semantic">Semantic (4)</v-tab>
        <v-tab value="surface">Surface (7)</v-tab>
      </v-tabs>

      <v-window v-model="themeTab">
        <!-- Brand Colors -->
        <v-window-item value="brand">
          <v-row>
            <v-col cols="12" md="6">
              <h3 class="text-lg mb-3">Light Mode</h3>
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="color in brandColors"
                    :key="color.name"
                  >
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: themeColors.light[color.name] }"
                        style="width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                        class="mr-3"
                      ></div>
                    </template>
                    <v-list-item-title>{{ color.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ themeColors.light[color.name] }} • {{ color.source }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <h3 class="text-lg mb-3">Dark Mode</h3>
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="color in brandColors"
                    :key="color.name"
                  >
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: themeColors.dark[color.name] }"
                        style="width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                        class="mr-3"
                      ></div>
                    </template>
                    <v-list-item-title>{{ color.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ themeColors.dark[color.name] }} • {{ color.sourceDark }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- Semantic Colors -->
        <v-window-item value="semantic">
          <v-row>
            <v-col cols="12" md="6">
              <h3 class="text-lg mb-3">Light Mode</h3>
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="color in semanticColorsData"
                    :key="color.name"
                  >
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: themeColors.light[color.name] }"
                        style="width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                        class="mr-3"
                      ></div>
                    </template>
                    <v-list-item-title>{{ color.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ themeColors.light[color.name] }} • {{ color.source }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <h3 class="text-lg mb-3">Dark Mode</h3>
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="color in semanticColorsData"
                    :key="color.name"
                  >
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: themeColors.dark[color.name] }"
                        style="width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                        class="mr-3"
                      ></div>
                    </template>
                    <v-list-item-title>{{ color.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ themeColors.dark[color.name] }} • {{ color.sourceDark }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- Surface Colors -->
        <v-window-item value="surface">
          <v-row>
            <v-col cols="12" md="6">
              <h3 class="text-lg mb-3">Light Mode</h3>
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="color in surfaceColorsData"
                    :key="color.name"
                  >
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: themeColors.light[color.name] }"
                        style="width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                        class="mr-3"
                      ></div>
                    </template>
                    <v-list-item-title>{{ color.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ themeColors.light[color.name] }} • {{ color.source }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <h3 class="text-lg mb-3">Dark Mode</h3>
              <v-card>
                <v-list>
                  <v-list-item
                    v-for="color in surfaceColorsData"
                    :key="color.name"
                  >
                    <template #prepend>
                      <div
                        :style="{ backgroundColor: themeColors.dark[color.name] }"
                        style="width: 40px; height: 40px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                        class="mr-3"
                      ></div>
                    </template>
                    <v-list-item-title>{{ color.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ themeColors.dark[color.name] }} • {{ color.sourceDark }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </div>

    <!-- Vendor Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">☁️ Vendor Colors</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Cloud provider brand colors with theme-aware variations.
      </p>

      <v-row>
        <v-col cols="12" md="4" v-for="vendor in vendorColorsData" :key="vendor.name">
          <v-card>
            <v-card-title>{{ vendor.title }}</v-card-title>
            <v-card-text>
              <div class="d-flex mb-3">
                <div class="mr-3">
                  <div
                    :style="{ backgroundColor: vendor.lightHex }"
                    style="width: 60px; height: 60px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                  ></div>
                  <div class="text-xs mt-1 text-center">Light</div>
                </div>
                <div>
                  <div
                    :style="{ backgroundColor: vendor.darkHex }"
                    style="width: 60px; height: 60px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1)"
                  ></div>
                  <div class="text-xs mt-1 text-center">Dark</div>
                </div>
              </div>
              <div class="text-xs">
                <div class="mb-1"><strong>Light:</strong> {{ vendor.lightHex }}</div>
                <div><strong>Dark:</strong> {{ vendor.darkHex }}</div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Color Usage Guide -->
    <v-card class="mb-8">
      <v-card-title>Implementation Guide</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-lg mb-3">Using Theme Colors</h3>
            <pre class="text-xs pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ themeColorCode }}</pre>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-lg mb-3">Using Palette Colors</h3>
            <pre class="text-xs pa-3 mb-4" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ paletteColorCode }}</pre>
          </v-col>
        </v-row>

        <h3 class="text-lg mb-3 mt-4">Color System Benefits</h3>
        <ul class="text-base">
          <li><strong>Tailwind-Style Naming:</strong> Familiar 50-950/1000 shade progression</li>
          <li><strong>Theme Aware:</strong> Automatic light/dark mode adaptation</li>
          <li><strong>Semantic Colors:</strong> Clear meaning (success, error, warning, info)</li>
          <li><strong>Direct Access:</strong> All palette shades available as individual colors</li>
          <li><strong>Vendor Support:</strong> Cloud provider brand colors included</li>
        </ul>
      </v-card-text>
    </v-card>

    <!-- Color Architecture -->
    <v-card>
      <v-card-title>Color System Architecture</v-card-title>
      <v-card-text>
        <div class="mb-4">
          <h3 class="text-lg mb-2">File Structure</h3>
          <v-list density="compact">
            <v-list-item>
              <v-list-item-title><code>src/plugins/vuetifyCustomThemes.ts</code></v-list-item-title>
              <v-list-item-subtitle>Central color definition file with all palettes and theme colors</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><code>src/helpers/color.ts</code></v-list-item-title>
              <v-list-item-subtitle>getColor() helper function for programmatic color access</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><code>src/helpers/colors.getColorHex.ts</code></v-list-item-title>
              <v-list-item-subtitle>Color name to hex conversion with theme support</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </div>

        <div class="mb-4">
          <h3 class="text-lg mb-2">Color Hierarchy</h3>
          <pre class="text-xs pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ architectureCode }}</pre>
        </div>

        <v-alert color="info" variant="tonal">
          <div class="text-sm">
            <strong>Note:</strong> The color system is integrated into Vuetify's theme configuration,
            making all colors available through Vuetify's color prop system and CSS variables.
          </div>
        </v-alert>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { colorPalettes, lightThemeColors, darkThemeColors, vendorColors } from '../plugins/vuetifyCustomThemes'

const themeTab = ref('brand')

const palettes = [
  {
    name: 'neutral',
    title: 'Neutral (Grayscale)',
    description: '12 shades for backgrounds, surfaces, and text',
    colors: colorPalettes.neutral,
    usage: 'Primary structural colors'
  },
  {
    name: 'purple',
    title: 'Purple (Primary)',
    description: '10 shades, purple-500 is primary brand color',
    colors: colorPalettes.purple,
    usage: 'Brand identity, primary actions'
  },
  {
    name: 'purpleDark',
    title: 'Purple Dark (Secondary)',
    description: '10 shades, purpleDark-500 is secondary',
    colors: colorPalettes.purpleDark,
    usage: 'Secondary actions, accents'
  },
  {
    name: 'blue',
    title: 'Blue (Info)',
    description: '9 shades, blue-400 is info color',
    colors: colorPalettes.blue,
    usage: 'Informational messaging'
  },
  {
    name: 'green',
    title: 'Green (Success)',
    description: '9 shades, green-400 is success color',
    colors: colorPalettes.green,
    usage: 'Success states, positive actions'
  },
  {
    name: 'red',
    title: 'Red (Error)',
    description: '9 shades, red-400 is error color',
    colors: colorPalettes.red,
    usage: 'Error states, destructive actions'
  },
  {
    name: 'yellow',
    title: 'Yellow (Warning)',
    description: '9 shades, yellow-400 is warning color',
    colors: colorPalettes.yellow,
    usage: 'Warning states, caution messaging'
  }
]

const themeColors = {
  light: lightThemeColors,
  dark: darkThemeColors
}

const brandColors = [
  { name: 'primary', title: 'Primary', source: 'purple-500', sourceDark: 'purple-300' },
  { name: 'secondary', title: 'Secondary', source: 'purpleDark-500', sourceDark: 'purpleDark-300' },
  { name: 'mute', title: 'Mute', source: 'neutral-600', sourceDark: 'purpleDark-400' }
]

const semanticColorsData = [
  { name: 'success', title: 'Success', source: 'green-400', sourceDark: 'green-200' },
  { name: 'error', title: 'Error', source: 'red-400', sourceDark: 'red-200' },
  { name: 'warning', title: 'Warning', source: 'yellow-400', sourceDark: 'yellow-200' },
  { name: 'info', title: 'Info', source: 'blue-400', sourceDark: 'blue-200' }
]

const surfaceColorsData = [
  { name: 'background', title: 'Background', source: 'neutral-50', sourceDark: 'neutral-1000' },
  { name: 'surface', title: 'Surface', source: 'neutral-100', sourceDark: 'neutral-950' },
  { name: 'surface-variant', title: 'Surface Variant', source: 'neutral-900', sourceDark: 'neutral-100' },
  { name: 'surface-light', title: 'Surface Light', source: 'neutral-300', sourceDark: 'neutral-900' },
  { name: 'surface-bright', title: 'Surface Bright', source: 'neutral-400', sourceDark: 'neutral-800' },
  { name: 'on-background', title: 'On Background', source: 'neutral-950', sourceDark: 'neutral-100' },
  { name: 'on-surface', title: 'On Surface', source: 'neutral-950', sourceDark: 'neutral-100' }
]

const vendorColorsData = [
  {
    name: 'aws',
    title: 'AWS',
    lightHex: vendorColors.light.aws,
    darkHex: vendorColors.dark.aws
  },
  {
    name: 'azure',
    title: 'Azure',
    lightHex: vendorColors.light.azure,
    darkHex: vendorColors.dark.azure
  },
  {
    name: 'gcp',
    title: 'GCP',
    lightHex: vendorColors.light.gcp,
    darkHex: vendorColors.dark.gcp
  }
]

const themeColorCode = `// Using semantic theme colors in components
<v-btn color="primary">Primary Action</v-btn>
<v-chip color="success" variant="tonal">Success</v-chip>
<v-alert color="error">Error Message</v-alert>

// CSS variables
background-color: rgb(var(--v-theme-primary));
color: rgb(var(--v-theme-on-surface));`

const paletteColorCode = `// Direct palette color access
<v-chip color="purple-500">Purple 500</v-chip>
<v-chip color="neutral-100">Neutral 100</v-chip>
<v-btn color="green-400">Green 400</v-btn>

// CSS variables for any palette shade
background-color: rgb(var(--v-theme-neutral-50));
color: rgb(var(--v-theme-purple-300));`

const architectureCode = `Color System Hierarchy:
├── Color Palettes (7)
│   ├── neutral (12 shades: 50-1000)
│   ├── purple (10 shades: 50-950)
│   ├── purpleDark (10 shades: 50-950)
│   ├── blue (9 shades: 50-900)
│   ├── green (9 shades: 50-900)
│   ├── red (9 shades: 50-900)
│   └── yellow (9 shades: 50-900)
├── Theme Colors (11)
│   ├── Brand: primary, secondary, mute
│   ├── Semantic: success, error, warning, info
│   └── Surface: background, surface, surface-variant, etc.
├── Vendor Colors (3)
│   └── aws, azure, gcp
└── Extended Colors (21)
    └── Material Design color palette`
</script>

<style scoped>
.palette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  gap: 4px;
}

.palette-swatch {
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.1);
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
}

.palette-swatch:hover {
  transform: scale(1.1);
  z-index: 1;
}

.shade-label {
  position: absolute;
  bottom: 2px;
  right: 2px;
  font-size: 8px;
  font-weight: 600;
  background: rgba(255,255,255,0.8);
  padding: 1px 3px;
  border-radius: 2px;
  color: #000;
}

pre {
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
