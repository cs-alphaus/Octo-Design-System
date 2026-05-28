<script setup lang="ts">
/**
 * ProcessCard - Standardized card component for creation/registration flows
 *
 * Based on AWS Integration V2 pattern (update-cfn-template branch).
 * Provides consistent layout, spacing, and styling for process steps.
 *
 * @example
 * <ProcessCard title="Basic Details" subtitle="Optional subtitle" :loading="isLoading">
 *   <v-text-field v-model="name" label="Name" />
 *
 *   <!-- Optional chip (recommended: size="small", clickable) -->
 *   <template #chip>
 *     <v-chip size="small" clickable color="primary">Action</v-chip>
 *   </template>
 *
 *   <template #actions>
 *     <v-btn variant="text" color="secondary" :text="t('common.cancel')" @click="cancel" />
 *     <v-spacer />
 *     <v-btn color="primary" :variant="valid ? 'flat' : undefined" :text="t('common.next')" @click="next" />
 *   </template>
 * </ProcessCard>
 */
import { computed } from 'vue'

type CardSize = 'sm' | 'md' | 'lg'

interface ActionButton {
  /** Button text (uses :text prop) */
  text: string
  /** Click handler */
  onClick: () => void
  /** Button variant: 'flat', 'tonal', 'outlined', or undefined */
  variant?: 'flat' | 'tonal' | 'outlined'
  /** Disable button */
  disabled?: boolean
  /** Show loading spinner */
  loading?: boolean
  /** Data-cy attribute for testing */
  dataCy?: string
}

interface Props {
  title?: string /** Card title (optional, can use #title slot instead) */
  subtitle?: string /** Card subtitle (optional, can use #subtitle slot instead) */
  chipText?: string /** Chip text - if provided, renders a chip with fixed styling (size="small", rounded="lg", clickable) */
  chipIcon?: string /** Optional icon for the chip (e.g., 'mdi-code-json' or '$code_json') */
  onChipClick?: () => void /** Chip click handler */
  width?: CardSize | string | number /** Card width: 'sm' (550px), 'md' (620px), 'lg' (720px), or custom number/string. Standard sizes: sm=compact forms, md=basic details (DEFAULT), lg=complex forms */
  centered?: boolean /** Center card horizontally (default: true) */
  loading?: boolean /** Show loading state (default: false) */
  hideFooter?: boolean /** Hide footer section (default: false) */
  bottomMargin?: boolean /** Add bottom margin mb-5 (default: false) */
  cancelText?: string /** Cancel button text */
  onCancel?: () => void /** Cancel button click handler */
  actionButtons?: ActionButton[] /** Action buttons on the right (max 3 buttons, enforces EXACT pattern) */
}

const props = withDefaults(defineProps<Props>(), {
  width: 'md',
  centered: true,
  hideFooter: false,
  bottomMargin: false
})

// Map size names to responsive width values using clamp()
// Format: clamp(min, preferred, max) - scales between min and max based on viewport
// All values are multiples of 8 for design system consistency
const sizeMap: Record<CardSize, string> = {
  sm: 'clamp(480px, 50vw, 640px)', // 60×8 to 80×8 - Compact forms, single-column inputs
  md: 'clamp(560px, 60vw, 720px)', // 70×8 to 90×8 - Basic details, standard forms (DEFAULT)
  lg: 'clamp(640px, 70vw, 800px)'  // 80×8 to 100×8 - Complex forms, multi-field layouts
}

// Compute actual width value
const computedWidth = computed(() => {
  if (typeof props.width === 'string' && props.width in sizeMap) {
    return sizeMap[props.width as CardSize]
  }
  return props.width
})

// Compute outer wrapper classes - EXACT pattern from AWS integration
const outerClasses = computed(() => {
  const classes = ['d-flex', 'flex-column', 'mt-5']
  if (props.centered) classes.push('align-center')
  if (props.bottomMargin) classes.push('mb-5')
  return classes.join(' ')
})
</script>

<template>
  <!-- Outer wrapper - EXACT classes from AWS pattern -->
  <div :class="outerClasses">
    <!-- Main card - EXACT props -->
    <v-card
      flat
      rounded="xl"
      color="surface"
      :width="centered ? computedWidth : undefined"
      :loading="loading"
    >
      <!-- Title/Subtitle section with optional chip -->
      <div class="d-flex align-center px-6 pt-4">
        <!-- Title and subtitle wrapper -->
        <div class="flex-grow-1">
          <v-card-title v-if="title" class="pa-0">
            {{ title }}
          </v-card-title>
          <slot name="title" />

          <v-card-subtitle v-if="subtitle" class="pa-0 mt-1">
            {{ subtitle }}
          </v-card-subtitle>
          <slot name="subtitle" />
        </div>

        <!-- Spacer between title and chip -->
        <v-spacer />

        <!-- Fixed-style chip (controlled by component) -->
        <v-chip
          v-if="chipText"
          size="small"
          rounded="lg"
          variant="tonal"
          clickable
          :prepend-icon="chipIcon"
          @click="onChipClick"
        >
          {{ chipText }}
        </v-chip>
      </div>

      <!-- Content wrapper - EXACT classes -->
      <div class="px-6 py-6">
        <slot />
      </div>

      <!-- Footer section - EXACT pattern (enforced) -->
      <template v-if="!hideFooter && (onCancel || actionButtons)">
        <v-divider />
        <v-card-actions class="py-6 px-6">
          <!-- Left: Cancel button (FIXED styling) -->
          <v-btn
            v-if="onCancel"
            variant="text"
            color="secondary"
            :text="cancelText"
            @click="onCancel"
            data-cy="cancel-btn"
          />

          <!-- Center: Spacer -->
          <v-spacer />

          <!-- Right: Action buttons (max 3, EXACT pattern with gap) -->
          <div v-if="actionButtons" class="d-flex ga-3">
            <v-btn
              v-for="(button, index) in actionButtons.slice(0, 3)"
              :key="index"
              color="primary"
              :variant="button.variant ?? (button.disabled ? undefined : 'flat')"
              :disabled="button.disabled"
              :loading="button.loading"
              :text="button.text"
              :data-cy="button.dataCy"
              @click="button.onClick"
            />
          </div>
        </v-card-actions>
      </template>
    </v-card>
  </div>
</template>

<style scoped>
/*
  ProcessCard Component

  Standardized card component for creation/registration flows based on AWS Integration V2 pattern.

  STANDARD SIZES (based on analysis of all creation flows):
  - sm (550px): Compact forms, single-column inputs, permission steps
  - md (620px): Basic details, edit dialogs, standard forms (DEFAULT)
  - lg (720px): Complex forms, multi-field layouts, data entry

  USAGE EXAMPLES:

  <!-- Default medium size (620px) -->
  <ProcessCard :title="t('step.basicDetails')">
    <v-text-field v-model="accountId" :label="t('account.id')" />
    <v-text-field v-model="accountName" :label="t('account.name')" />
    <template #actions>
      <v-btn variant="text" color="secondary" :text="t('common.cancel')" @click="cancel" />
      <v-spacer />
      <v-btn color="primary" variant="flat" :text="t('common.next')" @click="next" />
    </template>
  </ProcessCard>

  <!-- Small size (550px) for compact forms -->
  <ProcessCard width="sm" :title="t('step.apiAccess')">
    <v-text-field v-model="apiKey" :label="t('api.key')" />
    <template #actions>
      <v-btn variant="text" color="secondary" :text="t('common.cancel')" @click="cancel" />
      <v-spacer />
      <v-btn color="primary" variant="flat" :text="t('common.verify')" @click="verify" />
    </template>
  </ProcessCard>

  <!-- Large size (720px) for complex forms -->
  <ProcessCard width="lg" :title="t('step.unitMetrics')">
    <v-row>
      <v-col><v-text-field v-model="metric1" /></v-col>
      <v-col><v-text-field v-model="metric2" /></v-col>
    </v-row>
    <template #actions>
      <v-btn variant="text" color="secondary" :text="t('common.cancel')" @click="cancel" />
      <v-spacer />
      <v-btn color="primary" :variant="valid ? 'flat' : undefined" :text="t('common.next')" @click="next" />
    </template>
  </ProcessCard>

  CRITICAL BUTTON PATTERN (from update-cfn-template branch):
  - Use :text prop for button text (NOT slot content)
  - Left button: variant="text" color="secondary"
  - Always <v-spacer /> in middle
  - Right buttons: color="primary" with conditional variant
  - Variant: undefined (disabled) or 'flat'/'tonal'/'outlined' (enabled)
  - NO extra classes like mr-2

  CRITICAL: DO NOT modify the following:
  - Outer wrapper classes: d-flex flex-column align-center mt-5
  - v-card props: flat rounded="xl" color="surface"
  - Title classes: text-h5 px-6 pt-4
  - Subtitle wrapper: px-6, text: text-body-2 mt-2
  - Content wrapper classes: px-6 py-6 d-flex flex-column ga-6
  - Footer classes: py-4 px-6

  Reference files (update-cfn-template branch):
  - src/views/ProviderAccount/ConnectToVendorV2/BasicDetailsV2.vue
  - src/views/ProviderAccount/ConnectToVendorV2/AWS/ApiAccessV2.vue
  - src/views/ProviderAccount/ConnectToVendorV2/AWS/StackSetV2.vue
*/
</style>
