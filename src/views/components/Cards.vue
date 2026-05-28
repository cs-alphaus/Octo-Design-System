<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Cards</h1>
      <p class="text-body-1 mb-6">
        Cards are surfaces that display content and actions on a single topic. They are the primary
        building block for layouts in Octo. For pre-built templates and patterns, see
        <strong>Card Patterns</strong> and <strong>Card Templates</strong>.
      </p>
    </div>

    <!-- Basic Card -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Basic Card</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        A simple card with default styling. Cards in Octo use <code>rounded="xl"</code> by default
        for extra-large rounded corners, following Material Design 3 principles.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-card rounded="xl" width="400">
            <v-card-text>
              <h3 class="text-h6 mb-2">Card Title</h3>
              <p class="text-body-2">
                This is a basic card with some content. Cards are versatile containers
                that can hold text, images, actions, and more.
              </p>
            </v-card-text>
          </v-card>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showBasicCode = !showBasicCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showBasicCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showBasicCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedBasicCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Card Variants -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Card Variants</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards support different visual styles through the <code>variant</code> prop.
        The most common variants are <code>flat</code>, <code>elevated</code>, <code>tonal</code>, and <code>outlined</code>.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <v-card variant="flat" rounded="xl" width="200">
              <v-card-text>
                <p class="text-caption font-weight-medium mb-1">Flat</p>
                <p class="text-caption">No elevation, no border</p>
              </v-card-text>
            </v-card>

            <v-card variant="elevated" rounded="xl" width="200">
              <v-card-text>
                <p class="text-caption font-weight-medium mb-1">Elevated</p>
                <p class="text-caption">Shadow elevation</p>
              </v-card-text>
            </v-card>

            <v-card variant="tonal" rounded="xl" width="200">
              <v-card-text>
                <p class="text-caption font-weight-medium mb-1">Tonal</p>
                <p class="text-caption">Colored background</p>
              </v-card-text>
            </v-card>

            <v-card variant="outlined" rounded="xl" width="200">
              <v-card-text>
                <p class="text-caption font-weight-medium mb-1">Outlined</p>
                <p class="text-caption">Border, no elevation</p>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showVariantsCode = !showVariantsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showVariantsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showVariantsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedVariantsCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Card Anatomy -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Card Anatomy</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Cards are composed of several optional sections: title, subtitle, text, actions, and media.
        Each section serves a specific purpose in organizing content.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-card rounded="xl" width="400">
            <v-card-title class="d-flex align-center">
              <v-icon icon="mdi-information" class="mr-2" />
              Card Title
            </v-card-title>
            <v-card-subtitle>
              Optional subtitle for additional context
            </v-card-subtitle>
            <v-card-text>
              <p class="text-body-2">
                The main content area of the card. This is where you place your primary
                information, forms, or other content.
              </p>
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-btn variant="text" color="secondary">Cancel</v-btn>
              <v-spacer />
              <v-btn variant="flat" color="primary">Confirm</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showAnatomyCode = !showAnatomyCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showAnatomyCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showAnatomyCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedAnatomyCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Rounded Corners -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Rounded Corners</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Control corner radius with the <code>rounded</code> prop. In Octo, we use <code>rounded="xl"</code>
        for most cards to match Material Design 3 aesthetics.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <v-card rounded="0" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">rounded="0"</p>
                <p class="text-caption">No rounding</p>
              </v-card-text>
            </v-card>

            <v-card rounded="sm" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">rounded="sm"</p>
                <p class="text-caption">Small</p>
              </v-card-text>
            </v-card>

            <v-card rounded="lg" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">rounded="lg"</p>
                <p class="text-caption">Large</p>
              </v-card-text>
            </v-card>

            <v-card rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">rounded="xl"</p>
                <p class="text-caption">Extra Large ⭐</p>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showRoundedCode = !showRoundedCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showRoundedCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showRoundedCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedRoundedCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Card Colors -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Card Colors</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Apply color themes to cards using the <code>color</code> prop. Works best with
        <code>variant="tonal"</code> or <code>variant="outlined"</code>.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <v-card color="primary" variant="tonal" rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">Primary</p>
              </v-card-text>
            </v-card>

            <v-card color="secondary" variant="tonal" rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">Secondary</p>
              </v-card-text>
            </v-card>

            <v-card color="success" variant="tonal" rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">Success</p>
              </v-card-text>
            </v-card>

            <v-card color="error" variant="tonal" rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">Error</p>
              </v-card-text>
            </v-card>

            <v-card color="warning" variant="tonal" rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">Warning</p>
              </v-card-text>
            </v-card>

            <v-card color="info" variant="tonal" rounded="xl" width="150">
              <v-card-text class="text-center">
                <p class="text-caption font-weight-medium">Info</p>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showColorsCode = !showColorsCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showColorsCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showColorsCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedColorsCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- v-sheet vs v-card -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">v-sheet vs v-card</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        <code>v-sheet</code> is a basic container with color and elevation support, while <code>v-card</code>
        extends v-sheet with semantic sections (title, text, actions). Use v-sheet for simple containers
        and v-card for structured content.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <div class="d-flex flex-wrap ga-4">
            <v-sheet rounded="xl" color="surface-variant" width="250" class="pa-4">
              <p class="text-caption font-weight-medium mb-2">v-sheet</p>
              <p class="text-caption">
                A simple container. No built-in sections. Use for basic layouts or custom structures.
              </p>
            </v-sheet>

            <v-card rounded="xl" width="250">
              <v-card-text>
                <p class="text-caption font-weight-medium mb-2">v-card</p>
                <p class="text-caption">
                  Semantic sections built-in. Use for structured content with titles, text, and actions.
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showSheetVsCardCode = !showSheetVsCardCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showSheetVsCardCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showSheetVsCardCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedSheetVsCardCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Best Practices -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Best Practices</h2>
      <v-card>
        <v-card-text>
          <div class="d-flex flex-column ga-4">
            <div>
              <h3 class="text-h6 mb-2">✅ Do</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2">Use <code>rounded="xl"</code> for cards in Octo to match MD3</li>
                <li class="text-body-2 mb-2">Use <code>flat</code> variant for most content cards</li>
                <li class="text-body-2 mb-2">Use <code>outlined</code> variant to emphasize boundaries</li>
                <li class="text-body-2 mb-2">Keep card content focused on a single topic</li>
                <li class="text-body-2 mb-2">Use dividers to separate distinct sections within a card</li>
              </ul>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">❌ Don't</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2">Don't nest cards more than one level deep</li>
                <li class="text-body-2 mb-2">Don't use excessive elevation (keep it minimal)</li>
                <li class="text-body-2 mb-2">Don't overcrowd cards with too much content</li>
                <li class="text-body-2 mb-2">Don't use colored cards for every element (use sparingly)</li>
              </ul>
            </div>

            <v-divider />

            <div>
              <h3 class="text-h6 mb-2">When to Use What</h3>
              <ul class="ml-6">
                <li class="text-body-2 mb-2"><strong>Basic Cards</strong> - Simple content containers</li>
                <li class="text-body-2 mb-2"><strong>Card Patterns</strong> - Reusable compositions (stats, lists, info)</li>
                <li class="text-body-2 mb-2"><strong>Card Templates</strong> - Full-page templates (creation flows, settings)</li>
              </ul>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive variables for code display
const showBasicCode = ref(false)
const showVariantsCode = ref(false)
const showAnatomyCode = ref(false)
const showRoundedCode = ref(false)
const showColorsCode = ref(false)
const showSheetVsCardCode = ref(false)

// Code examples
const basicCodeExample = `<template>
  <v-card rounded="xl" width="400">
    <v-card-text>
      <h3 class="text-h6 mb-2">Card Title</h3>
      <p class="text-body-2">
        This is a basic card with some content.
      </p>
    </v-card-text>
  </v-card>
</template>`

const variantsCodeExample = `<template>
  <v-card variant="flat" rounded="xl" width="200">
    <v-card-text>Flat - No elevation</v-card-text>
  </v-card>

  <v-card variant="elevated" rounded="xl" width="200">
    <v-card-text>Elevated - Shadow</v-card-text>
  </v-card>

  <v-card variant="tonal" rounded="xl" width="200">
    <v-card-text>Tonal - Colored background</v-card-text>
  </v-card>

  <v-card variant="outlined" rounded="xl" width="200">
    <v-card-text>Outlined - Border only</v-card-text>
  </v-card>
</template>`

const anatomyCodeExample = `<template>
  <v-card rounded="xl" width="400">
    <!-- Title Section -->
    <v-card-title class="d-flex align-center">
      <v-icon icon="mdi-information" class="mr-2" />
      Card Title
    </v-card-title>

    <!-- Subtitle Section (Optional) -->
    <v-card-subtitle>
      Optional subtitle for additional context
    </v-card-subtitle>

    <!-- Main Content -->
    <v-card-text>
      <p class="text-body-2">
        The main content area of the card.
      </p>
    </v-card-text>

    <!-- Divider (Optional) -->
    <v-divider />

    <!-- Actions Section -->
    <v-card-actions>
      <v-btn variant="text" color="secondary">Cancel</v-btn>
      <v-spacer />
      <v-btn variant="flat" color="primary">Confirm</v-btn>
    </v-card-actions>
  </v-card>
</template>`

const roundedCodeExample = `<template>
  <v-card rounded="0">No rounding</v-card>
  <v-card rounded="sm">Small</v-card>
  <v-card rounded="lg">Large</v-card>
  <v-card rounded="xl">Extra Large (Octo Standard)</v-card>
</template>`

const colorsCodeExample = `<template>
  <v-card color="primary" variant="tonal" rounded="xl">Primary</v-card>
  <v-card color="secondary" variant="tonal" rounded="xl">Secondary</v-card>
  <v-card color="success" variant="tonal" rounded="xl">Success</v-card>
  <v-card color="error" variant="tonal" rounded="xl">Error</v-card>
  <v-card color="warning" variant="tonal" rounded="xl">Warning</v-card>
  <v-card color="info" variant="tonal" rounded="xl">Info</v-card>
</template>`

const sheetVsCardCodeExample = `<template>
  <!-- v-sheet: Simple container, custom structure -->
  <v-sheet rounded="xl" color="surface-variant" class="pa-4">
    <p>Custom content structure</p>
    <p>No built-in sections</p>
  </v-sheet>

  <!-- v-card: Semantic sections built-in -->
  <v-card rounded="xl">
    <v-card-title>Title</v-card-title>
    <v-card-text>Content with semantic structure</v-card-text>
    <v-card-actions>
      <v-btn>Action</v-btn>
    </v-card-actions>
  </v-card>
</template>`

// Simple syntax highlighter function
const highlightCode = (code: string): string => {
  return code
    .replace(/"([^"]*)"/g, '"<span class="string">$1</span>"')
    .replace(/'([^']*)'/g, '\'<span class="string">$1</span>\'')
    .replace(/`([^`]*)`/g, '`<span class="template">$1</span>`')
    .replace(/&lt;(\/?[a-zA-Z][\w-]*)/g, '&lt;<span class="tag">$1</span>')
    .replace(/&gt;/g, '<span class="tag">&gt;</span>')
    .replace(/([:@][\w-]+)(?![^<]*<\/span>)/g, '<span class="directive">$1</span>')
    .replace(/\b(import|export|const|let|var|function|from|interface|type|true|false|null|undefined)\b/g, '<span class="keyword">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    .replace(/(&lt;!--.*?--&gt;)/g, '<span class="comment">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    .replace(/\b([A-Z][a-zA-Z]+)\b/g, '<span class="type">$1</span>')
}

// Computed properties for syntax highlighting
const highlightedBasicCode = computed(() => {
  return highlightCode(basicCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedVariantsCode = computed(() => {
  return highlightCode(variantsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedAnatomyCode = computed(() => {
  return highlightCode(anatomyCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedRoundedCode = computed(() => {
  return highlightCode(roundedCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedColorsCode = computed(() => {
  return highlightCode(colorsCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const highlightedSheetVsCardCode = computed(() => {
  return highlightCode(sheetVsCardCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})
</script>

<style scoped>
.code-block {
  background: #1e1e1e !important;
  color: #d4d4d4;
  overflow-x: auto;
  border-radius: 8px;
}

.code-block :deep(.tag) {
  color: #569cd6;
}

.code-block :deep(.directive) {
  color: #c586c0;
}

.code-block :deep(.string) {
  color: #ce9178;
}

.code-block :deep(.keyword) {
  color: #569cd6;
}

.code-block :deep(.comment) {
  color: #6a9955;
}

.code-block :deep(.number) {
  color: #b5cea8;
}

.code-block :deep(.type) {
  color: #4ec9b0;
}

.code-block :deep(.template) {
  color: #ce9178;
}
</style>
