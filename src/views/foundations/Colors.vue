<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Colors</h1>
      <p class="text-h6 text-medium-emphasis mb-4">
        Learn how to work with our color system. Right click to copy raw values.
      </p>

      <!-- Theme Info -->
      <v-alert type="info" variant="tonal" class="mb-6">
        <div class="d-flex align-center">
          <v-icon :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'" class="mr-2" />
          <span>Currently viewing <strong>{{ isDark ? 'Dark' : 'Light' }}</strong> theme colors. Use the theme toggle in the top-right to switch.</span>
        </div>
      </v-alert>
    </div>

    <!-- Scales Section -->
    <div class="mb-8">
      <h2 class="text-h4 mb-4">Scales</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Octo's semantic color system with light and dark theme variants. Based on Material Design 3 principles.
      </p>

      <!-- Core Theme Colors -->
      <div class="mb-8">
        <h3 class="text-h5 mb-4">Core Theme</h3>
        <p class="text-body-2 text-medium-emphasis mb-4">
          Primary semantic colors that define the overall theme and brand identity. Surface variants provide different elevation levels and subtle contrast for layered components.
        </p>

        <div class="color-scale-row">
          <div class="scale-label">Primary</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.primary }"
              @click="copyColor(themeColors.primary)"
              :title="`primary: ${themeColors.primary}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['on-primary'] }"
              @click="copyColor(themeColors['on-primary'])"
              :title="`on-primary: ${themeColors['on-primary']}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Secondary</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.secondary }"
              @click="copyColor(themeColors.secondary)"
              :title="`secondary: ${themeColors.secondary}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['on-secondary'] }"
              @click="copyColor(themeColors['on-secondary'])"
              :title="`on-secondary: ${themeColors['on-secondary']}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Surface</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.surface }"
              @click="copyColor(themeColors.surface)"
              :title="`surface: ${themeColors.surface}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['surface-light'] }"
              @click="copyColor(themeColors['surface-light'])"
              :title="`surface-light: ${themeColors['surface-light']}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['surface-bright'] }"
              @click="copyColor(themeColors['surface-bright'])"
              :title="`surface-bright: ${themeColors['surface-bright']}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['surface-variant'] }"
              @click="copyColor(themeColors['surface-variant'])"
              :title="`surface-variant: ${themeColors['surface-variant']}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['on-surface-variant'] }"
              @click="copyColor(themeColors['on-surface-variant'])"
              :title="`on-surface-variant: ${themeColors['on-surface-variant']}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Background</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.background }"
              @click="copyColor(themeColors.background)"
              :title="`background: ${themeColors.background}`"
            ></div>
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors['on-background'] }"
              @click="copyColor(themeColors['on-background'])"
              :title="`on-background: ${themeColors['on-background']}`"
            ></div>
          </div>
        </div>
      </div>

      <!-- Semantic Colors -->
      <div class="mb-8">
        <h3 class="text-h5 mb-4">Semantic Colors</h3>
        <p class="text-body-2 text-medium-emphasis mb-4">
          Colors that convey meaning and state in the interface. Includes status colors and utility colors like mute for subdued content.
        </p>

        <div class="color-scale-row">
          <div class="scale-label">Success</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.success }"
              @click="copyColor(themeColors.success)"
              :title="`success: ${themeColors.success}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Error</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.error }"
              @click="copyColor(themeColors.error)"
              :title="`error: ${themeColors.error}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Warning</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.warning }"
              @click="copyColor(themeColors.warning)"
              :title="`warning: ${themeColors.warning}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Info</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.info }"
              @click="copyColor(themeColors.info)"
              :title="`info: ${themeColors.info}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Mute</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: themeColors.mute }"
              @click="copyColor(themeColors.mute)"
              :title="`mute: ${themeColors.mute}`"
            ></div>
          </div>
        </div>
      </div>

      <!-- Extended Palette -->
      <div class="mb-8">
        <h3 class="text-h5 mb-4">Extended Palette</h3>
        <p class="text-body-2 text-medium-emphasis mb-4">
          Additional colors for data visualization, charts, and custom components.
        </p>

        <div class="color-scale-row" v-for="(colorValue, colorName) in extendedColorGroups" :key="colorName">
          <div class="scale-label">{{ formatColorName(colorName) }}</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: colorValue }"
              @click="copyColor(colorValue)"
              :title="`${colorName}: ${colorValue}`"
            ></div>
          </div>
        </div>
      </div>

      <!-- Vendor Colors -->
      <div class="mb-8">
        <h3 class="text-h5 mb-4">Vendor Colors</h3>
        <p class="text-body-2 text-medium-emphasis mb-4">
          Brand colors for cloud providers and external services.
        </p>

        <div class="color-scale-row">
          <div class="scale-label">AWS</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: vendorColorsThemed.aws }"
              @click="copyColor(vendorColorsThemed.aws)"
              :title="`aws: ${vendorColorsThemed.aws}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Azure</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: vendorColorsThemed.azure }"
              @click="copyColor(vendorColorsThemed.azure)"
              :title="`azure: ${vendorColorsThemed.azure}`"
            ></div>
          </div>
        </div>

        <div class="color-scale-row">
          <div class="scale-label">Google Cloud</div>
          <div class="color-boxes">
            <div
              class="color-box"
              :style="{ backgroundColor: vendorColorsThemed.gcp }"
              @click="copyColor(vendorColorsThemed.gcp)"
              :title="`gcp: ${vendorColorsThemed.gcp}`"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Usage Examples -->
    <div class="mb-8">
      <h2 class="text-h4 mb-4">Usage Examples</h2>

      <v-card class="mb-6">
        <v-card-title>Component Backgrounds</v-card-title>
        <v-card-subtitle>These colors are designed for UI component backgrounds</v-card-subtitle>
        <v-card-text>
          <div class="usage-examples mb-4">
            <div class="usage-row">
              <div class="usage-label">Default background</div>
              <div class="usage-description">Main container backgrounds</div>
              <div class="usage-swatch" :style="{ backgroundColor: themeColors.background }"></div>
            </div>
            <div class="usage-row">
              <div class="usage-label">Surface</div>
              <div class="usage-description">Card and panel backgrounds</div>
              <div class="usage-swatch" :style="{ backgroundColor: themeColors.surface }"></div>
            </div>
            <div class="usage-row">
              <div class="usage-label">Surface Light</div>
              <div class="usage-description">Elevated surfaces, hover states</div>
              <div class="usage-swatch" :style="{ backgroundColor: themeColors['surface-light'] }"></div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Interactive Examples -->
      <v-card class="mb-6">
        <v-card-title>Interactive Examples</v-card-title>
        <v-card-text>
          <div class="interactive-examples">
            <!-- Card Example -->
            <div class="example-section mb-6">
              <h4 class="mb-3">Card Components</h4>
              <div class="d-flex gap-4 flex-wrap">
                <v-card
                  :color="themeColors.surface"
                  class="pa-4"
                  style="min-width: 200px;"
                  elevation="2"
                >
                  <div class="text-body-2 mb-2">Default Surface</div>
                  <v-btn color="primary" size="small">Action</v-btn>
                </v-card>

                <v-card
                  :color="themeColors['surface-light']"
                  class="pa-4"
                  style="min-width: 200px;"
                  elevation="2"
                >
                  <div class="text-body-2 mb-2">Surface Light</div>
                  <v-btn color="secondary" size="small">Action</v-btn>
                </v-card>
              </div>
            </div>

            <!-- Button Examples -->
            <div class="example-section mb-6">
              <h4 class="mb-3">Semantic Actions</h4>
              <div class="d-flex gap-2 flex-wrap">
                <v-btn color="primary">Primary</v-btn>
                <v-btn color="secondary">Secondary</v-btn>
                <v-btn color="success">Success</v-btn>
                <v-btn color="error">Error</v-btn>
                <v-btn color="warning">Warning</v-btn>
                <v-btn color="info">Info</v-btn>
              </div>
            </div>

            <!-- Vendor Examples -->
            <div class="example-section">
              <h4 class="mb-3">Cloud Providers</h4>
              <div class="d-flex gap-2 flex-wrap">
                <v-chip color="aws" size="large">
                  <v-icon start>mdi-aws</v-icon>
                  AWS
                </v-chip>
                <v-chip color="azure" size="large">
                  <v-icon start>mdi-microsoft-azure</v-icon>
                  Azure
                </v-chip>
                <v-chip color="gcp" size="large">
                  <v-icon start>mdi-google-cloud</v-icon>
                  GCP
                </v-chip>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Usage -->
      <v-card>
        <v-card-title>Code Usage</v-card-title>
        <v-card-text>
          <h4 class="mb-3">Vue Templates</h4>
          <v-code class="mb-4">
&lt;!-- Semantic colors --&gt;
&lt;v-btn color="primary"&gt;Primary Action&lt;/v-btn&gt;
&lt;v-alert color="error"&gt;Error Message&lt;/v-alert&gt;
&lt;v-card color="surface"&gt;Card Content&lt;/v-card&gt;

&lt;!-- Vendor colors --&gt;
&lt;v-icon color="aws"&gt;mdi-aws&lt;/v-icon&gt;
&lt;v-chip color="azure"&gt;Azure Service&lt;/v-chip&gt;
          </v-code>

          <h4 class="mb-3">TypeScript</h4>
          <v-code>
import { getColor, allColors } from '@/tokens'

// Get specific color
const primaryColor = getColor('primary', 'light') // #5E53A7

// Access theme colors
const currentColors = allColors.light
const darkColors = allColors.dark

// Vendor colors
const awsColor = getColor('aws', 'light') // #FF9900
          </v-code>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { allColors, lightThemeColors, darkThemeColors, extraColors, vendorColors } from '@/tokens'

// Color swatch component
const ColorSwatch = {
  props: ['color', 'label', 'isMain'],
  emits: ['copy'],
  template: `
    <div
      class="color-swatch"
      :class="{ 'is-main': isMain }"
      :style="{ backgroundColor: color }"
      @click="copyColor"
      @contextmenu.prevent="copyColor"
      :title="'Click to copy: ' + color"
    >
      <div class="swatch-content" :style="{ color: getTextColor(color) }">
        <div class="swatch-label" v-if="isMain">{{ label }}</div>
        <div class="swatch-hex">{{ color }}</div>
      </div>
    </div>
  `,
  methods: {
    getTextColor(backgroundColor: string) {
      // Simple contrast calculation
      const hex = backgroundColor.replace('#', '')
      const r = parseInt(hex.substr(0, 2), 16)
      const g = parseInt(hex.substr(2, 2), 16)
      const b = parseInt(hex.substr(4, 2), 16)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000
      return brightness > 128 ? '#000000' : '#ffffff'
    },
    async copyColor() {
      try {
        await navigator.clipboard.writeText(this.color)
        if (window.showNotification) {
          window.showNotification(`Copied ${this.color}`)
        }
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }
}

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const themeColors = computed(() => {
  return isDark.value ? darkThemeColors : lightThemeColors
})

const extendedColorGroups = computed(() => {
  const colors = isDark.value ? extraColors.dark : extraColors.light
  // Group main colors (excluding variations)
  const mainColors = {
    red: colors.red,
    blue: colors.blue,
    green: colors.green,
    orange: colors.orange,
    purple: colors.purple,
    teal: colors.teal,
    amber: colors.amber,
    grey: colors.grey
  }
  return mainColors
})

const vendorColorsThemed = computed(() => {
  return isDark.value ? vendorColors.dark : vendorColors.light
})

const formatColorName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

// Copy color function
const copyColor = async (color: string) => {
  try {
    await navigator.clipboard.writeText(color)
    if (window.showNotification) {
      window.showNotification(`Copied ${color}`)
    }
  } catch (err) {
    console.error('Failed to copy color:', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = color
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      if (window.showNotification) {
        window.showNotification(`Copied ${color}`)
      }
    } catch (fallbackErr) {
      console.error('Fallback copy failed:', fallbackErr)
    }
    document.body.removeChild(textArea)
  }
}
</script>

<style scoped>
.color-scale-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
}

.scale-label {
  min-width: 120px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
}

.color-boxes {
  display: flex;
  gap: 4px;
  align-items: center;
}

.color-box {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(var(--v-border-color), 0.3);
  position: relative;
  overflow: hidden;
}

.color-box:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border-color: rgba(var(--v-border-color), 0.5);
}

.color-box:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.usage-examples {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.usage-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(var(--v-border-color), 0.1);
}

.usage-row:last-child {
  border-bottom: none;
}

.usage-label {
  min-width: 140px;
  font-weight: 500;
  font-size: 14px;
}

.usage-description {
  flex: 1;
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 14px;
}

.usage-swatch {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(var(--v-border-color), 0.2);
}

.example-section h4 {
  color: rgb(var(--v-theme-on-surface));
  font-weight: 600;
}

.interactive-examples .example-section:not(:last-child) {
  border-bottom: 1px solid rgba(var(--v-border-color), 0.1);
  padding-bottom: 24px;
}
</style>