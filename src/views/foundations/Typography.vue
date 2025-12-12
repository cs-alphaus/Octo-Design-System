<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Typography</h1>
      <p class="text-h6 text-medium-emphasis">
        Complete Vuetify Material Design 3 typography system with CSS specifications
      </p>
    </div>

    <!-- Type Scale with CSS Specifications -->
    <v-card class="mb-6">
      <v-card-title>Type Scale</v-card-title>
      <v-card-subtitle>Complete Material Design 3 typography classes with CSS values</v-card-subtitle>
      <v-card-text>
        <div class="typography-showcase">
          <div
            v-for="type in typographyScale"
            :key="type.class"
            class="mb-6 pb-4"
            :class="{ 'border-b': type !== typographyScale[typographyScale.length - 1] }"
          >
            <!-- Typography Sample -->
            <div :class="type.class" class="mb-3">{{ type.sample }}</div>

            <!-- Typography Details -->
            <div class="mb-3">
              <div class="d-flex justify-between align-center mb-2">
                <div>
                  <span class="text-subtitle-2 font-weight-medium">{{ type.name }}</span>
                  <div class="text-caption text-medium-emphasis">{{ type.usage }}</div>
                </div>
                <v-chip
                  size="small"
                  variant="outlined"
                  @click="copyToClipboard(type.class)"
                  append-icon="mdi-content-copy"
                >
                  {{ type.class }}
                </v-chip>
              </div>

              <!-- CSS Specifications -->
              <v-expansion-panels variant="accordion">
                <v-expansion-panel>
                  <v-expansion-panel-title class="text-caption font-weight-medium">
                    CSS Specifications
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <div class="css-specs">
                      <v-row dense>
                        <v-col cols="6" md="3">
                          <div class="text-caption text-medium-emphasis">Font Size</div>
                          <div class="text-body-2 font-weight-medium">{{ type.fontSize }}</div>
                          <div class="text-caption text-disabled">{{ convertRemToPx(type.fontSize) }}</div>
                        </v-col>
                        <v-col cols="6" md="3">
                          <div class="text-caption text-medium-emphasis">Font Weight</div>
                          <div class="text-body-2 font-weight-medium">{{ type.fontWeight }}</div>
                        </v-col>
                        <v-col cols="6" md="3">
                          <div class="text-caption text-medium-emphasis">Line Height</div>
                          <div class="text-body-2 font-weight-medium">{{ type.lineHeight }}</div>
                        </v-col>
                        <v-col cols="6" md="3">
                          <div class="text-caption text-medium-emphasis">Letter Spacing</div>
                          <div class="text-body-2 font-weight-medium">{{ type.letterSpacing || 'normal' }}</div>
                        </v-col>
                      </v-row>
                      <div v-if="type.textTransform" class="mt-2">
                        <div class="text-caption text-medium-emphasis">Text Transform</div>
                        <div class="text-body-2 font-weight-medium">{{ type.textTransform }}</div>
                      </div>

                      <!-- Complete CSS -->
                      <div class="mt-3">
                        <div class="text-caption text-medium-emphasis mb-1">Complete CSS</div>
                        <v-code class="text-caption" @click="copyToClipboard(formatCSSSpec(type))">
                          {{ formatCSSSpec(type) }}
                        </v-code>
                      </div>
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Font Weights -->
    <v-card class="mb-6">
      <v-card-title>Font Weights</v-card-title>
      <v-card-subtitle>Material Design supported font weights</v-card-subtitle>
      <v-card-text>
        <div class="font-weight-showcase">
          <div
            v-for="weight in fontWeights"
            :key="weight.class"
            class="mb-4"
          >
            <div :class="[weight.class, 'text-h6', 'mb-2']">
              {{ weight.sample }}
            </div>
            <div class="d-flex justify-between align-center">
              <div>
                <span class="text-body-2 font-weight-medium">{{ weight.name }}</span>
                <span class="text-caption text-medium-emphasis ml-2">({{ weight.value }})</span>
              </div>
              <v-chip
                size="small"
                variant="outlined"
                @click="copyToClipboard(weight.class)"
                append-icon="mdi-content-copy"
              >
                {{ weight.class }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Text Utility Classes -->
    <v-card class="mb-6">
      <v-card-title>Text Utility Classes</v-card-title>
      <v-card-subtitle>Complete text styling utilities with CSS specifications</v-card-subtitle>
      <v-card-text>
        <div v-for="(utilities, category) in groupedUtilities" :key="category" class="mb-6">
          <h4 class="text-subtitle-1 font-weight-medium mb-4">{{ category }}</h4>
          <v-row class="utility-grid">
            <v-col
              v-for="utility in utilities"
              :key="utility.class"
              cols="12"
              md="6"
            >
              <div class="utility-example">
                <div :class="utility.class" class="mb-2 text-body-1">
                  {{ utility.sample }}
                </div>
                <div class="d-flex justify-between align-center mb-2">
                  <div>
                    <div class="text-body-2 font-weight-medium">{{ utility.name }}</div>
                    <div class="text-caption text-medium-emphasis">{{ utility.description }}</div>
                  </div>
                  <v-chip
                    size="small"
                    variant="outlined"
                    @click="copyToClipboard(utility.class)"
                    append-icon="mdi-content-copy"
                  >
                    {{ utility.class }}
                  </v-chip>
                </div>
                <div class="text-caption">
                  <strong>CSS:</strong> {{ utility.cssProperty }}: {{ utility.cssValue }}
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>

    <!-- Responsive Typography -->
    <v-card class="mb-6">
      <v-card-title>Responsive Typography</v-card-title>
      <v-card-subtitle>Typography that adapts to different screen sizes</v-card-subtitle>
      <v-card-text>
        <div class="mb-4">
          <p class="text-body-1 mb-2">
            All typography classes support responsive breakpoints using the format:
            <v-code class="mx-1">.text-{style}-{breakpoint}</v-code>
          </p>
          <p class="text-body-2 text-medium-emphasis">
            Breakpoints: xs, sm, md, lg, xl
          </p>
        </div>

        <div v-for="example in responsiveExamples" :key="example.classes" class="mb-4">
          <div class="responsive-demo">
            <div :class="example.classes" class="mb-2">
              {{ example.sample }}
            </div>
            <div class="d-flex justify-between align-center">
              <div class="text-caption text-medium-emphasis">{{ example.description }}</div>
              <v-chip
                size="small"
                variant="outlined"
                @click="copyToClipboard(example.classes)"
                append-icon="mdi-content-copy"
              >
                {{ example.classes }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Usage Examples -->
    <v-card class="mb-6">
      <v-card-title>Usage Examples</v-card-title>
      <v-card-text>
        <h4 class="mb-3">HTML Classes</h4>
        <v-code class="mb-4">
&lt;h1 class="text-h1"&gt;Display Large&lt;/h1&gt;
&lt;h2 class="text-h2"&gt;Display Medium&lt;/h2&gt;
&lt;h3 class="text-subtitle-1"&gt;Title Medium&lt;/h3&gt;
&lt;p class="text-body-1"&gt;Body Large&lt;/p&gt;
&lt;span class="text-caption"&gt;Caption&lt;/span&gt;

&lt;!-- Font weights --&gt;
&lt;span class="font-weight-thin"&gt;Thin text&lt;/span&gt;
&lt;span class="font-weight-bold"&gt;Bold text&lt;/span&gt;

&lt;!-- Text utilities --&gt;
&lt;p class="text-center text-uppercase"&gt;Centered uppercase&lt;/p&gt;
&lt;div class="text-truncate"&gt;Truncated text...&lt;/div&gt;
        </v-code>

        <h4 class="mb-3">Component Integration</h4>
        <v-code class="mb-4">
&lt;v-card&gt;
  &lt;v-card-title class="text-h5 font-weight-medium"&gt;
    Card Title
  &lt;/v-card-title&gt;
  &lt;v-card-subtitle class="text-subtitle-2"&gt;
    Card Subtitle
  &lt;/v-card-subtitle&gt;
  &lt;v-card-text class="text-body-1"&gt;
    Card content with proper typography
  &lt;/v-card-text&gt;
&lt;/v-card&gt;

&lt;v-btn class="text-button"&gt;
  Button Text
&lt;/v-btn&gt;
        </v-code>

        <h4 class="mb-3">Design Tokens Usage</h4>
        <v-code>
// Import typography tokens
import { typographyScale, getTypographyStyle } from '@/tokens'

// Get typography specifications
const h1Style = getTypographyStyle('text-h1')
console.log(h1Style?.fontSize) // '6rem'
        </v-code>
      </v-card-text>
    </v-card>

    <!-- Typography Guidelines -->
    <v-card class="mb-6">
      <v-card-title>Guidelines & Best Practices</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="mb-3">Typography Hierarchy</h4>
            <ul class="mb-4">
              <li><strong>Display (H1-H3):</strong> Page titles, hero sections, major headers</li>
              <li><strong>Headline (H4-H5):</strong> Section headers, component titles</li>
              <li><strong>Title (H6, Subtitle):</strong> Small headers, card titles</li>
              <li><strong>Body:</strong> Main content, paragraphs, descriptions</li>
              <li><strong>Label:</strong> Form labels, buttons, captions</li>
            </ul>

            <h4 class="mb-3">Accessibility</h4>
            <ul class="mb-4">
              <li>Maintain 4.5:1 contrast ratio for body text</li>
              <li>Use 3:1 contrast ratio for large text (18px+)</li>
              <li>Line height minimum 1.5x font size</li>
              <li>Use semantic HTML with appropriate CSS classes</li>
              <li>Test typography at 200% zoom</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="mb-3">Implementation Tips</h4>
            <ul class="mb-4">
              <li>Use Vuetify classes instead of custom CSS</li>
              <li>Follow consistent hierarchy throughout application</li>
              <li>Use responsive typography for mobile optimization</li>
              <li>Leverage design tokens for programmatic access</li>
              <li>Test across different screen sizes and devices</li>
            </ul>

            <h4 class="mb-3">Design-Engineering Handoff</h4>
            <ul>
              <li><strong>Designers:</strong> Use exact class names in design specs</li>
              <li><strong>Engineers:</strong> Reference CSS specifications for custom implementations</li>
              <li><strong>Both:</strong> Maintain consistent naming and hierarchy</li>
              <li>Document any custom typography extensions</li>
            </ul>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Snackbar for copy feedback -->
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      color="success"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  typographyScale,
  fontWeights,
  textUtilities,
  formatCSSSpec,
  type TextUtility
} from '@/tokens'
import { useTheme } from 'vuetify'

const theme = useTheme()
const snackbar = ref(false)
const snackbarText = ref('')

// Group text utilities by category
const groupedUtilities = textUtilities.reduce((groups, utility) => {
  if (!groups[utility.category]) {
    groups[utility.category] = []
  }
  groups[utility.category].push(utility)
  return groups
}, {} as Record<string, TextUtility[]>)

// Responsive example data
const responsiveExamples = [
  {
    description: 'Responsive heading - h3 on small, h2 on medium+',
    classes: 'text-h3 text-md-h2',
    sample: 'Responsive Headline'
  },
  {
    description: 'Responsive alignment - center on small, left on large',
    classes: 'text-center text-lg-left',
    sample: 'Responsive alignment example text'
  },
  {
    description: 'Responsive body text - body-2 on small, body-1 on medium+',
    classes: 'text-body-2 text-md-body-1',
    sample: 'Responsive body text that changes size based on screen width for optimal readability.'
  }
]

// Copy to clipboard function
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).then(() => {
    snackbarText.value = `Copied "${text}" to clipboard`
    snackbar.value = true
  }).catch(() => {
    snackbarText.value = 'Failed to copy to clipboard'
    snackbar.value = true
  })
}

// Convert rem to px (assuming 16px base)
function convertRemToPx(fontSize: string): string {
  if (fontSize.includes('rem')) {
    const rem = parseFloat(fontSize.replace('rem', ''))
    const px = rem * 16
    return `${px}px`
  }
  return fontSize
}
</script>

<style scoped>
.typography-showcase .border-b {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.css-specs {
  background-color: rgba(var(--v-theme-surface-variant), 0.1);
  padding: 12px;
  border-radius: 4px;
}

.utility-grid {
  gap: 16px;
}

.utility-example {
  padding: 16px;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 4px;
  background-color: rgba(var(--v-theme-surface), 1);
}

.responsive-demo {
  padding: 16px;
  border: 2px dashed rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 8px;
  background-color: rgba(var(--v-theme-surface-variant), 0.05);
}

v-code {
  cursor: pointer;
  user-select: all;
}

v-code:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>