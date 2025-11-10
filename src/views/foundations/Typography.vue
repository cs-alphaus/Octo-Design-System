<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Typography</h1>
      <p class="text-h6 text-medium-emphasis">
        Typography system using Vuetify's Material Design 3 type scale
      </p>
    </div>

    <!-- Type Scale -->
    <v-card class="mb-6">
      <v-card-title>Type Scale</v-card-title>
      <v-card-subtitle>Vuetify's Material Design 3 typography classes</v-card-subtitle>
      <v-card-text>
        <div class="typography-showcase">
          <div
            v-for="type in typeScale"
            :key="type.class"
            class="mb-4 pb-4"
            :class="{ 'border-b': type.class !== 'text-caption' }"
          >
            <div :class="type.class" class="mb-2">{{ type.sample }}</div>
            <div class="d-flex justify-between align-center">
              <span class="text-caption text-medium-emphasis">{{ type.name }}</span>
              <v-chip size="small" variant="outlined">{{ type.class }}</v-chip>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <!-- Font Weights -->
    <v-card class="mb-6">
      <v-card-title>Font Weights</v-card-title>
      <v-card-text>
        <div class="font-weight-showcase">
          <div
            v-for="weight in fontWeights"
            :key="weight.class"
            class="mb-3"
          >
            <div :class="[weight.class, 'text-h6', 'mb-1']">
              {{ weight.sample }}
            </div>
            <div class="d-flex justify-between align-center">
              <span class="text-caption text-medium-emphasis">{{ weight.name }}</span>
              <v-chip size="small" variant="outlined">{{ weight.class }}</v-chip>
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
&lt;p class="text-body-1"&gt;Body Large&lt;/p&gt;
&lt;span class="text-caption"&gt;Caption&lt;/span&gt;

&lt;!-- Font weights --&gt;
&lt;span class="font-weight-thin"&gt;Thin text&lt;/span&gt;
&lt;span class="font-weight-bold"&gt;Bold text&lt;/span&gt;
        </v-code>

        <h4 class="mb-3">Component Props</h4>
        <v-code>
&lt;v-card-title class="text-h5 font-weight-bold"&gt;
  Card Title
&lt;/v-card-title&gt;

&lt;v-btn class="text-none"&gt;
  Normal Case Button
&lt;/v-btn&gt;
        </v-code>
      </v-card-text>
    </v-card>

    <!-- Typography Guidelines -->
    <v-card>
      <v-card-title>Guidelines</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <h4 class="mb-3">Hierarchy</h4>
            <ul class="mb-4">
              <li><strong>Display Large (H1):</strong> Page titles, hero sections</li>
              <li><strong>Display Medium (H2):</strong> Section headers</li>
              <li><strong>Display Small (H3):</strong> Subsection headers</li>
              <li><strong>Headline (H4-H6):</strong> Component titles</li>
              <li><strong>Body:</strong> Main content, descriptions</li>
              <li><strong>Label:</strong> Form labels, buttons</li>
              <li><strong>Caption:</strong> Supplementary information</li>
            </ul>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="mb-3">Best Practices</h4>
            <ul>
              <li>Use semantic HTML heading tags (h1-h6) with appropriate classes</li>
              <li>Maintain consistent hierarchy throughout the application</li>
              <li>Use font-weight-medium or font-weight-bold for emphasis</li>
              <li>Consider readability and accessibility when choosing type sizes</li>
              <li>Use text-medium-emphasis for secondary text</li>
            </ul>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const typeScale = [
  {
    name: 'Display Large',
    class: 'text-h1',
    sample: 'Display Large'
  },
  {
    name: 'Display Medium',
    class: 'text-h2',
    sample: 'Display Medium'
  },
  {
    name: 'Display Small',
    class: 'text-h3',
    sample: 'Display Small'
  },
  {
    name: 'Headline Large',
    class: 'text-h4',
    sample: 'Headline Large'
  },
  {
    name: 'Headline Medium',
    class: 'text-h5',
    sample: 'Headline Medium'
  },
  {
    name: 'Headline Small',
    class: 'text-h6',
    sample: 'Headline Small'
  },
  {
    name: 'Body Large',
    class: 'text-body-1',
    sample: 'Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Body Medium',
    class: 'text-body-2',
    sample: 'Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Label Large',
    class: 'text-button',
    sample: 'Label Large'
  },
  {
    name: 'Label Small',
    class: 'text-caption',
    sample: 'Label Small'
  }
]

const fontWeights = [
  {
    name: 'Thin (100)',
    class: 'font-weight-thin',
    sample: 'The quick brown fox jumps'
  },
  {
    name: 'Light (300)',
    class: 'font-weight-light',
    sample: 'The quick brown fox jumps'
  },
  {
    name: 'Regular (400)',
    class: 'font-weight-regular',
    sample: 'The quick brown fox jumps'
  },
  {
    name: 'Medium (500)',
    class: 'font-weight-medium',
    sample: 'The quick brown fox jumps'
  },
  {
    name: 'Bold (700)',
    class: 'font-weight-bold',
    sample: 'The quick brown fox jumps'
  },
  {
    name: 'Black (900)',
    class: 'font-weight-black',
    sample: 'The quick brown fox jumps'
  }
]
</script>

<style scoped>
.typography-showcase .border-b {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>