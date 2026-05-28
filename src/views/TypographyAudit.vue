<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Typography Migration Report</h1>
      <p class="text-base mb-2">
        Analysis of typography migration from Vuetify classes to Tailwind-based system in Octo UI.
      </p>
      <p class="text-xs text-medium-emphasis">
        Migration Date: May 12, 2026 • Status: Completed via PR #1404
      </p>
    </div>

    <!-- Summary Statistics -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">📊 Migration Summary</h2>

      <v-row>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="success">
            <v-card-text>
              <div class="text-h3 font-weight-bold">✓</div>
              <div class="text-sm">Migration Complete</div>
              <div class="text-xs text-medium-emphasis">Tailwind system live</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="primary">
            <v-card-text>
              <div class="text-h3 font-weight-bold">13</div>
              <div class="text-sm">Size Variants</div>
              <div class="text-xs text-medium-emphasis">xs → 9xl scale</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="info">
            <v-card-text>
              <div class="text-h3 font-weight-bold">100%</div>
              <div class="text-sm">Framework Agnostic</div>
              <div class="text-xs text-medium-emphasis">Vuetify independent</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card variant="tonal" color="secondary">
            <v-card-text>
              <div class="text-h3 font-weight-bold">7</div>
              <div class="text-sm">Font Weights</div>
              <div class="text-xs text-medium-emphasis">Vuetify utilities</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-alert color="success" variant="tonal" class="mt-4">
        <div class="text-lg mb-2">✅ Tailwind Typography System Implemented</div>
        <p class="text-base mb-2">
          Successfully migrated to a <strong>Tailwind CSS-based typography system</strong> that is framework-agnostic
          and won't break with Vuetify version updates.
        </p>
        <p class="text-sm mb-0">
          <strong>Key Benefits:</strong> Predictable sizing, version independence, better developer experience
        </p>
      </v-alert>
    </div>

    <!-- New Typography Scale -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">🎨 Tailwind Typography Scale</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Complete typography scale from xs (12px) to 9xl (128px) with consistent line heights.
      </p>

      <v-card>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Class</th>
              <th class="text-left">Size</th>
              <th class="text-left">Line Height</th>
              <th class="text-left">Preview</th>
              <th class="text-left">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="typo in typographyScale" :key="typo.class">
              <td><v-chip size="small" variant="tonal" color="primary">{{ typo.class }}</v-chip></td>
              <td class="text-sm font-mono">{{ typo.fontSize }}</td>
              <td class="text-sm font-mono">{{ typo.lineHeight }}</td>
              <td>
                <span :class="typo.class">Aa</span>
              </td>
              <td class="text-xs text-medium-emphasis">{{ typo.usage }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>

    <!-- Component Updates -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">🔄 Updated Components</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Components migrated to use the new typography system (as of PR #1404).
      </p>

      <v-row>
        <v-col cols="12" md="6">
          <v-card color="success" variant="tonal">
            <v-card-title>CustomHeader.vue</v-card-title>
            <v-card-text>
              <div class="mb-3">
                <div class="text-sm font-weight-medium mb-1">Migration:</div>
                <div class="text-xs mb-1"><code>text-h6</code> → <code>text-xl font-weight-bold</code></div>
              </div>
              <div class="text-xs text-medium-emphasis">
                Page headers now use consistent text-xl sizing across the application.
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card color="success" variant="tonal">
            <v-card-title>StandardDialog.vue</v-card-title>
            <v-card-text>
              <div class="mb-3">
                <div class="text-sm font-weight-medium mb-1">Migration:</div>
                <div class="text-xs mb-1"><code>text-h5</code> → <code>text-2xl</code></div>
              </div>
              <div class="text-xs text-medium-emphasis">
                Dialog titles use text-2xl (24px) for prominence.
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card color="success" variant="tonal">
            <v-card-title>ConfirmationDialog.vue</v-card-title>
            <v-card-text>
              <div class="mb-3">
                <div class="text-sm font-weight-medium mb-1">Migration:</div>
                <div class="text-xs mb-1"><code>text-h6</code> → <code>text-xl font-weight-medium</code></div>
                <div class="text-xs mb-1"><code>text-body-2</code> → <code>text-base</code></div>
              </div>
              <div class="text-xs text-medium-emphasis">
                Confirmation dialogs now use text-xl titles and text-base body.
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card color="success" variant="tonal">
            <v-card-title>AdvanceListItem.vue</v-card-title>
            <v-card-text>
              <div class="mb-3">
                <div class="text-sm font-weight-medium mb-1">Migration:</div>
                <div class="text-xs mb-1"><code>text-caption</code> → <code>text-xs</code></div>
              </div>
              <div class="text-xs text-medium-emphasis">
                Metadata text uses text-xs (12px) for consistency.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Vuetify Component Defaults -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">⚙️ Vuetify Component Defaults</h2>
      <p class="text-sm mb-4 text-medium-emphasis">
        Default typography classes applied to Vuetify components via configuration.
      </p>

      <v-card>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Component</th>
              <th class="text-left">Default Class</th>
              <th class="text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comp in componentDefaults" :key="comp.component">
              <td><code>{{ comp.component }}</code></td>
              <td><v-chip size="small" variant="tonal">{{ comp.class }}</v-chip></td>
              <td class="text-sm">{{ comp.purpose }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>

    <!-- Migration Guide -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">📖 Migration Guide</h2>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="d-flex align-center">
              <v-chip color="primary" size="small" class="mr-2">Mapping</v-chip>
              <span class="font-weight-medium">Vuetify → Tailwind Class Mapping</span>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-table density="compact">
              <thead>
                <tr>
                  <th>Old Vuetify Class</th>
                  <th>New Tailwind Class</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mapping in classMappings" :key="mapping.old">
                  <td><code>{{ mapping.old }}</code></td>
                  <td><code>{{ mapping.new }}</code></td>
                  <td class="text-sm">{{ mapping.size }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="d-flex align-center">
              <v-chip color="info" size="small" class="mr-2">Benefits</v-chip>
              <span class="font-weight-medium">Why Tailwind Typography?</span>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="success" />
                </template>
                <v-list-item-title>Framework Agnostic</v-list-item-title>
                <v-list-item-subtitle>Won't break with Vuetify version updates</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="success" />
                </template>
                <v-list-item-title>Predictable Sizing</v-list-item-title>
                <v-list-item-subtitle>Clear size progression from xs to 9xl</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="success" />
                </template>
                <v-list-item-title>Better Developer Experience</v-list-item-title>
                <v-list-item-subtitle>Familiar Tailwind naming convention</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="success" />
                </template>
                <v-list-item-title>Consistent Line Heights</v-list-item-title>
                <v-list-item-subtitle>Built-in optimal line heights for each size</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="success" />
                </template>
                <v-list-item-title>Type Safe</v-list-item-title>
                <v-list-item-subtitle>TypeScript types exported for programmatic usage</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            <div class="d-flex align-center">
              <v-chip color="secondary" size="small" class="mr-2">Code</v-chip>
              <span class="font-weight-medium">Implementation Details</span>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="mb-4">
              <div class="text-sm font-weight-medium mb-2">File: <code>src/plugins/vuetifyCustomTypography.ts</code></div>
              <pre class="text-xs pa-3 bg-surface-light rounded">{{ implementationCode }}</pre>
            </div>

            <div class="mb-4">
              <div class="text-sm font-weight-medium mb-2">Integration in Vuetify Plugin</div>
              <pre class="text-xs pa-3 bg-surface-light rounded">{{ integrationCode }}</pre>
            </div>

            <v-alert color="info" variant="tonal">
              <div class="text-sm">
                <strong>Note:</strong> The typography CSS is dynamically injected into the document head on app initialization.
                This ensures the classes are available before component rendering.
              </div>
            </v-alert>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <!-- Remaining Work -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">🚧 Future Improvements</h2>

      <v-card class="mb-3">
        <v-card-title>Gradual Migration of Legacy Components</v-card-title>
        <v-card-text>
          <p class="text-sm mb-2">
            While core components have been updated, some legacy components still use Vuetify typography classes.
            These can be gradually migrated as those components are touched for other reasons.
          </p>
          <div class="text-xs text-medium-emphasis">
            <strong>Status:</strong> Non-critical, can proceed incrementally
          </div>
        </v-card-text>
      </v-card>

      <v-card class="mb-3">
        <v-card-title>Custom Utility Classes</v-card-title>
        <v-card-text>
          <p class="text-sm mb-2">
            Consider adding specific utility classes for common patterns found in the codebase:
          </p>
          <ul class="text-sm">
            <li><code>.text-metric-large</code> - For dashboard metric numbers (2rem)</li>
            <li><code>.text-micro</code> - For extremely small text (9px)</li>
          </ul>
          <div class="text-xs text-medium-emphasis mt-2">
            <strong>Status:</strong> Optional enhancement, can be added if patterns persist
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!-- Reference -->
    <v-alert color="primary" variant="tonal">
      <div class="text-lg mb-2">📚 Reference Documentation</div>
      <p class="text-sm mb-2">
        For detailed typography guidelines and usage examples, see:
      </p>
      <code class="text-xs">Design System → Foundations → Typography</code>
    </v-alert>
  </div>
</template>

<script setup lang="ts">
const typographyScale = [
  { class: 'text-xs', fontSize: '0.75rem (12px)', lineHeight: '1rem (16px)', usage: 'Captions, metadata' },
  { class: 'text-sm', fontSize: '0.875rem (14px)', lineHeight: '1.25rem (20px)', usage: 'Secondary text' },
  { class: 'text-base', fontSize: '1rem (16px)', lineHeight: '1.5rem (24px)', usage: 'Body text (default)' },
  { class: 'text-lg', fontSize: '1.125rem (18px)', lineHeight: '1.75rem (28px)', usage: 'Emphasized body' },
  { class: 'text-xl', fontSize: '1.25rem (20px)', lineHeight: '1.75rem (28px)', usage: 'Small headings' },
  { class: 'text-2xl', fontSize: '1.5rem (24px)', lineHeight: '2rem (32px)', usage: 'Section headings' },
  { class: 'text-3xl', fontSize: '1.875rem (30px)', lineHeight: '2.25rem (36px)', usage: 'Page titles' },
  { class: 'text-4xl', fontSize: '2.25rem (36px)', lineHeight: '2.5rem (40px)', usage: 'Large titles' },
  { class: 'text-5xl', fontSize: '3rem (48px)', lineHeight: '1', usage: 'Hero headings' },
  { class: 'text-6xl', fontSize: '3.75rem (60px)', lineHeight: '1', usage: 'Large hero' },
  { class: 'text-7xl', fontSize: '4.5rem (72px)', lineHeight: '1', usage: 'Display text' },
  { class: 'text-8xl', fontSize: '6rem (96px)', lineHeight: '1', usage: 'XL display' },
  { class: 'text-9xl', fontSize: '8rem (128px)', lineHeight: '1', usage: 'Maximum size' }
]

const componentDefaults = [
  { component: 'VCardTitle', class: 'text-xl font-weight-medium', purpose: 'Card headings (20px)' },
  { component: 'VCardSubtitle', class: 'text-sm', purpose: 'Card subtitles (14px)' },
  { component: 'VCardText', class: 'text-base', purpose: 'Card body text (16px)' },
  { component: 'VListItemTitle', class: 'text-base', purpose: 'List primary text (16px)' },
  { component: 'VListItemSubtitle', class: 'text-sm', purpose: 'List secondary text (14px)' },
  { component: 'VChip', class: 'text-sm', purpose: 'Chip labels (14px)' },
  { component: 'VDataTable', class: 'text-sm', purpose: 'Table data (14px)' },
  { component: 'VAlert', class: 'text-base', purpose: 'Alert messages (16px)' },
  { component: 'VBtn', class: 'text-sm', purpose: 'Button text (14px)' },
  { component: 'VTextField', class: 'text-base', purpose: 'Input text (16px)' }
]

const classMappings = [
  { old: 'text-h6', new: 'text-xl', size: '20px' },
  { old: 'text-h5', new: 'text-2xl', size: '24px' },
  { old: 'text-h4', new: 'text-3xl or text-4xl', size: '30-36px' },
  { old: 'text-body-1', new: 'text-base', size: '16px' },
  { old: 'text-body-2', new: 'text-sm', size: '14px' },
  { old: 'text-caption', new: 'text-xs', size: '12px' },
  { old: 'text-subtitle-1', new: 'text-base or text-lg', size: '16-18px' },
  { old: 'text-subtitle-2', new: 'text-sm', size: '14px' }
]

const implementationCode = `export const typographyScale = {
  xs: { fontSize: '0.75rem', lineHeight: '1rem' },     // 12px
  sm: { fontSize: '0.875rem', lineHeight: '1.25rem' }, // 14px
  base: { fontSize: '1rem', lineHeight: '1.5rem' },    // 16px
  lg: { fontSize: '1.125rem', lineHeight: '1.75rem' }, // 18px
  xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },  // 20px
  '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },   // 24px
  // ... up to 9xl (128px)
} as const

export function injectTypographyStyles(): void {
  // Dynamically generate and inject CSS utilities
  const css = generateTypographyCSS()
  const styleTag = document.createElement('style')
  styleTag.textContent = css
  document.head.appendChild(styleTag)
}`

const integrationCode = `// In src/plugins/vuetify.ts
import { injectTypographyStyles } from './vuetifyCustomTypography'

// Inject typography styles on initialization
injectTypographyStyles()

const vuetify = createVuetify({
  // ... vuetify config with component defaults
  defaults: {
    VCardTitle: { class: 'text-xl font-weight-medium' },
    VCardText: { class: 'text-base' },
    // ...
  }
})`
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
  overflow-x: auto;
}

.bg-surface-light {
  background-color: rgba(var(--v-theme-surface-light), 0.5);
}
</style>
