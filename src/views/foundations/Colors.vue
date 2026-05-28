<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Color System</h1>
      <p class="text-base mb-6">
        Octo's complete color system with Tailwind-style palettes (50-950/1000) and automatic light/dark theme support.
        All colors are defined in the theme configuration and accessible via Vuetify color props and CSS variables.
      </p>
    </div>

    <!-- Color Palettes -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Color Palettes</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Seven main color palettes with shades from 50 (lightest) to 950/1000 (darkest), following Tailwind CSS naming conventions.
      </p>

      <v-tabs v-model="paletteTab" color="primary" class="mb-4">
        <v-tab value="neutral">Neutral</v-tab>
        <v-tab value="purple">Purple</v-tab>
        <v-tab value="purpleDark">Purple Dark</v-tab>
        <v-tab value="blue">Blue</v-tab>
        <v-tab value="green">Green</v-tab>
        <v-tab value="red">Red</v-tab>
        <v-tab value="yellow">Yellow</v-tab>
      </v-tabs>

      <v-window v-model="paletteTab">
        <!-- Neutral Palette -->
        <v-window-item value="neutral">
          <v-card>
            <v-card-title>Neutral Palette (Grayscale)</v-card-title>
            <v-card-subtitle class="text-sm">
              12 shades for backgrounds, surfaces, and text. Used throughout the application for neutral elements.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in neutralPalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`neutral-${shade}`"
                    :shade="shade"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Purple Palette -->
        <v-window-item value="purple">
          <v-card>
            <v-card-title>Purple Palette (Primary Brand)</v-card-title>
            <v-card-subtitle class="text-sm">
              10 shades. Purple-500 (#5E53A7) is the primary brand color in light mode.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in purplePalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`purple-${shade}`"
                    :shade="shade"
                    :isPrimary="shade === '500'"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Purple Dark Palette -->
        <v-window-item value="purpleDark">
          <v-card>
            <v-card-title>Purple Dark Palette (Secondary)</v-card-title>
            <v-card-subtitle class="text-sm">
              10 shades. PurpleDark-500 (#5F5C71) is the secondary brand color.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in purpleDarkPalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`purpleDark-${shade}`"
                    :shade="shade"
                    :isSecondary="shade === '500'"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Blue Palette -->
        <v-window-item value="blue">
          <v-card>
            <v-card-title>Blue Palette (Info)</v-card-title>
            <v-card-subtitle class="text-sm">
              9 shades. Blue-400 (#0086E7) is used for info/informational messaging.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in bluePalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`blue-${shade}`"
                    :shade="shade"
                    :isInfo="shade === '400'"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Green Palette -->
        <v-window-item value="green">
          <v-card>
            <v-card-title>Green Palette (Success)</v-card-title>
            <v-card-subtitle class="text-sm">
              9 shades. Green-400 (#39962B) is used for success states and positive actions.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in greenPalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`green-${shade}`"
                    :shade="shade"
                    :isSuccess="shade === '400'"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Red Palette -->
        <v-window-item value="red">
          <v-card>
            <v-card-title>Red Palette (Error)</v-card-title>
            <v-card-subtitle class="text-sm">
              9 shades. Red-400 (#EC4746) is used for error states and destructive actions.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in redPalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`red-${shade}`"
                    :shade="shade"
                    :isError="shade === '400'"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Yellow Palette -->
        <v-window-item value="yellow">
          <v-card>
            <v-card-title>Yellow Palette (Warning)</v-card-title>
            <v-card-subtitle class="text-sm">
              9 shades. Yellow-400 (#AE7A00) is used for warning states and caution messaging.
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col v-for="(hex, shade) in yellowPalette" :key="shade" cols="6" md="3" lg="2">
                  <ColorSwatch
                    :color="hex"
                    :label="`yellow-${shade}`"
                    :shade="shade"
                    :isWarning="shade === '400'"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>

    <!-- Theme Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Theme Colors</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Semantic colors that adapt automatically between light and dark themes.
      </p>

      <v-row>
        <!-- Primary Colors -->
        <v-col cols="12">
          <h3 class="text-lg font-weight-medium mb-3">Brand Colors</h3>
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <ThemeColorCard
            color="primary"
            title="Primary"
            description="Main brand color for primary actions and emphasis"
            :lightHex="themeColors.light.primary"
            :darkHex="themeColors.dark.primary"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <ThemeColorCard
            color="secondary"
            title="Secondary"
            description="Secondary brand color for supporting actions"
            :lightHex="themeColors.light.secondary"
            :darkHex="themeColors.dark.secondary"
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <ThemeColorCard
            color="mute"
            title="Mute"
            description="Muted color for disabled or de-emphasized content"
            :lightHex="themeColors.light.mute"
            :darkHex="themeColors.dark.mute"
          />
        </v-col>

        <!-- Semantic Colors -->
        <v-col cols="12" class="mt-4">
          <h3 class="text-lg font-weight-medium mb-3">Semantic Colors</h3>
        </v-col>
        <v-col cols="12" md="6" lg="3" v-for="semantic in semanticColors" :key="semantic.name">
          <ThemeColorCard
            :color="semantic.name"
            :title="semantic.title"
            :description="semantic.description"
            :lightHex="themeColors.light[semantic.name]"
            :darkHex="themeColors.dark[semantic.name]"
          />
        </v-col>

        <!-- Surface Colors -->
        <v-col cols="12" class="mt-4">
          <h3 class="text-lg font-weight-medium mb-3">Surface Colors</h3>
        </v-col>
        <v-col cols="12" md="6" lg="4" v-for="surface in surfaceColors" :key="surface.name">
          <ThemeColorCard
            :color="surface.name"
            :title="surface.title"
            :description="surface.description"
            :lightHex="themeColors.light[surface.name]"
            :darkHex="themeColors.dark[surface.name]"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Vendor Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Vendor Colors</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Cloud provider brand colors with theme-aware variations.
      </p>

      <v-row>
        <v-col cols="12" md="4" v-for="vendor in vendorColors" :key="vendor.name">
          <ThemeColorCard
            :color="vendor.name"
            :title="vendor.title"
            :description="vendor.description"
            :lightHex="vendor.lightHex"
            :darkHex="vendor.darkHex"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Usage Guide -->
    <v-card class="mb-8">
      <v-card-title>Usage Guidelines</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="text-lg mb-3">Color Usage Principles</h3>
            <ul class="text-base">
              <li><strong>Primary:</strong> Use for main actions, links, and key brand elements</li>
              <li><strong>Secondary:</strong> Use for secondary actions and accents</li>
              <li><strong>Error:</strong> Use for destructive actions, errors, and critical alerts</li>
              <li><strong>Success:</strong> Use for positive actions and success states</li>
              <li><strong>Warning:</strong> Use for caution and pending states</li>
              <li><strong>Info:</strong> Use for informational content and neutral actions</li>
              <li><strong>Mute:</strong> Use for disabled states and de-emphasized content</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="text-lg mb-3">Implementation</h3>
            <pre class="text-xs pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ implementationCode }}</pre>

            <h3 class="text-lg mb-3 mt-4">Accessing Palette Colors</h3>
            <pre class="text-xs pa-3" style="background: rgba(var(--v-theme-surface-variant), 0.3); border-radius: 8px;">{{ paletteAccessCode }}</pre>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Theme Toggle Demo -->
    <v-card>
      <v-card-title>
        Live Theme Preview
        <v-spacer />
        <v-btn
          :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="text"
          @click="toggleTheme"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        />
      </v-card-title>
      <v-card-text>
        <p class="text-base mb-4">
          All colors automatically adapt between light and dark themes. Toggle the theme to see the colors change dynamically.
        </p>
        <v-row>
          <v-col cols="12" md="6" lg="3" v-for="demo in themeDemoColors" :key="demo">
            <v-chip :color="demo" variant="tonal" class="mb-2" block>{{ demo }}</v-chip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'
import { colorPalettes, lightThemeColors, darkThemeColors, vendorColors as vendorColorData } from '../../plugins/vuetifyCustomThemes'
import ColorSwatch from '../../components/ColorSwatch.vue'
import ThemeColorCard from '../../components/ThemeColorCard.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
const paletteTab = ref('neutral')

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

// Color Palettes
const neutralPalette = colorPalettes.neutral
const purplePalette = colorPalettes.purple
const purpleDarkPalette = colorPalettes.purpleDark
const bluePalette = colorPalettes.blue
const greenPalette = colorPalettes.green
const redPalette = colorPalettes.red
const yellowPalette = colorPalettes.yellow

// Theme Colors
const themeColors = {
  light: lightThemeColors,
  dark: darkThemeColors
}

const semanticColors = [
  {
    name: 'success',
    title: 'Success',
    description: 'Positive actions, confirmations, and success states'
  },
  {
    name: 'warning',
    title: 'Warning',
    description: 'Caution, pending states, and attention-needed items'
  },
  {
    name: 'error',
    title: 'Error',
    description: 'Destructive actions, errors, and critical alerts'
  },
  {
    name: 'info',
    title: 'Info',
    description: 'Informational content and neutral messaging'
  }
]

const surfaceColors = [
  {
    name: 'background',
    title: 'Background',
    description: 'Main application background'
  },
  {
    name: 'surface',
    title: 'Surface',
    description: 'Card and component backgrounds'
  },
  {
    name: 'surface-variant',
    title: 'Surface Variant',
    description: 'Alternative surface for differentiation'
  }
]

const vendorColors = [
  {
    name: 'aws',
    title: 'AWS',
    description: 'Amazon Web Services brand color',
    lightHex: vendorColorData.light.aws,
    darkHex: vendorColorData.dark.aws
  },
  {
    name: 'azure',
    title: 'Azure',
    description: 'Microsoft Azure brand color',
    lightHex: vendorColorData.light.azure,
    darkHex: vendorColorData.dark.azure
  },
  {
    name: 'gcp',
    title: 'GCP',
    description: 'Google Cloud Platform brand color',
    lightHex: vendorColorData.light.gcp,
    darkHex: vendorColorData.dark.gcp
  }
]

const themeDemoColors = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'mute']

const implementationCode = `// Using theme colors in components
<v-btn color="primary">Primary Action</v-btn>
<v-chip color="success" variant="tonal">Success</v-chip>
<v-card color="surface">Content</v-card>

// Accessing theme colors programmatically
import { useTheme } from 'vuetify'
const theme = useTheme()
const primaryColor = theme.current.value.colors.primary`

const paletteAccessCode = `// Palette colors are available via direct color names
<v-chip color="neutral-50">Lightest Gray</v-chip>
<v-chip color="purple-500">Primary Purple</v-chip>
<v-chip color="green-400">Success Green</v-chip>

// Or via CSS variables
background-color: rgb(var(--v-theme-neutral-100));
color: rgb(var(--v-theme-purple-500));`
</script>

<style scoped>
pre {
  font-family: 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
