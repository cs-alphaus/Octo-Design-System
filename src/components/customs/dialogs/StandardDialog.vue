<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type WidthSize = 'medium' | 'large' | 'xlarge'
type ActionMode = 'standard' | 'single' | 'equal'

interface InfoChip {
  text: string
  icon: string
  href?: string
}

interface SecondaryAction {
  text: string
  icon: string
}

interface Props {
  modelValue: boolean

  // Size variants
  width?: WidthSize | number

  // Header
  title: string
  titleIcon?: string
  infoChip?: InfoChip
  closable?: boolean

  // Content
  scrollable?: boolean
  maxHeight?: string | number
  minHeight?: string | number

  // Action buttons
  actionMode?: ActionMode
  hideDefaultButtons?: boolean  // Hide default buttons when using custom actions slot

  // Standard mode props
  cancelText?: string
  cancelIcon?: string
  submitText?: string
  submitIcon?: string
  submitColor?: string
  submitDisabled?: boolean
  submitLoading?: boolean
  secondaryAction?: SecondaryAction

  // Single mode props
  singleButtonText?: string
  singleButtonIcon?: string
  singleButtonColor?: string
  singleButtonVariant?: 'flat' | 'tonal'

  // Behavior
  persistent?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 'medium',
  closable: true,
  scrollable: false,
  maxHeight: 400,
  actionMode: 'standard',
  cancelIcon: 'mdi-close',
  submitIcon: 'mdi-check',
  submitColor: 'primary',
  singleButtonIcon: 'mdi-close',
  singleButtonColor: 'secondary',
  singleButtonVariant: 'tonal',
  persistent: false,
  loading: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  submit: []
  cancel: []
  secondary: []
  'info-chip-click': []
}>()

// Computed properties
const dialog = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const dialogWidth = computed(() => {
  if (typeof props.width === 'number') return props.width

  const widthMap: Record<WidthSize, number> = {
    medium: 560,
    large: 800,
    xlarge: 1000
  }

  return widthMap[props.width] || 560
})

const contentStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}

  if (props.scrollable) {
    const maxH = typeof props.maxHeight === 'number'
      ? `${props.maxHeight}px`
      : props.maxHeight

    style.maxHeight = maxH
    style.overflowY = 'auto' as const
  }

  if (props.minHeight) {
    const minH = typeof props.minHeight === 'number'
      ? `${props.minHeight}px`
      : props.minHeight

    style.minHeight = minH
  }

  return style
})

const cancelLabel = computed(() => {
  return props.cancelText || t('common.cancel')
})

const submitLabel = computed(() => {
  return props.submitText || t('common.confirm')
})

const singleButtonLabel = computed(() => {
  return props.singleButtonText || t('common.ok')
})

// Event handlers
const handleClose = () => {
  if (!props.loading && !props.submitLoading) {
    dialog.value = false
  }
}

const handleCancel = () => {
  emit('cancel')
  dialog.value = false
}

const handleSubmit = () => {
  emit('submit')
  // Don't auto-close - let parent handle it after async operations
}

const handleSingleAction = () => {
  // For single action mode, close the dialog directly
  // This is used for info/display dialogs with just a "Close" button
  dialog.value = false
}

const handleSecondary = () => {
  emit('secondary')
}

const handleInfoChipClick = () => {
  if (props.infoChip?.href) {
    window.open(props.infoChip.href, '_blank')
  }
  emit('info-chip-click')
}
</script>

<template>
  <v-dialog v-model="dialog" :width="dialogWidth" :persistent="persistent">
    <v-card rounded="xl">
      <!-- Loading overlay -->
      <v-overlay
        v-if="loading"
        :model-value="true"
        contained
        class="align-center justify-center"
        persistent
      >
        <v-progress-circular indeterminate color="primary" size="64" />
      </v-overlay>

      <!-- Header -->
      <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
        <v-icon v-if="titleIcon" :icon="titleIcon" class="mr-3" />
        <span class="text-2xl">{{ title }}</span>
        <v-spacer />

        <!-- Optional info chip -->
        <v-chip
          v-if="infoChip"
          :prepend-icon="infoChip.icon"
          rounded="lg"
          color="secondary"
          variant="tonal"
          size="small"
          class="mr-2"
          :class="{ 'cursor-pointer': infoChip.href }"
          @click="handleInfoChipClick"
        >
          {{ infoChip.text }}
        </v-chip>

        <!-- Close button -->
        <v-btn
          v-if="closable"
          icon="$close"
          variant="text"
          :disabled="loading || submitLoading"
          @click="handleClose"
          data-cy="standard-dialog-close-btn"
        />
      </v-card-title>

      <v-divider />

      <!-- Content -->
      <v-card-text class="pa-6" :style="contentStyle">
        <slot />
      </v-card-text>

      <v-divider />

      <!-- Actions -->
      <v-card-actions class="py-4 px-6">
        <!-- Standard mode: Cancel + Optional Secondary + Submit -->
        <template v-if="!hideDefaultButtons && actionMode === 'standard'">
          <v-btn
            :prepend-icon="cancelIcon"
            :disabled="loading || submitLoading"
            @click="handleCancel"
            data-cy="standard-dialog-cancel-btn"
          >
            {{ cancelLabel }}
          </v-btn>
          <v-spacer />

          <!-- Optional secondary action -->
          <v-btn
            v-if="secondaryAction"
            :prepend-icon="secondaryAction.icon"
            variant="tonal"
            color="primary"
            :disabled="loading || submitLoading"
            @click="handleSecondary"
            data-cy="standard-dialog-secondary-btn"
          >
            {{ secondaryAction.text }}
          </v-btn>

          <v-btn
            :prepend-icon="submitIcon"
            variant="flat"
            :color="submitColor"
            :disabled="submitDisabled || loading"
            :loading="submitLoading"
            @click="handleSubmit"
            data-cy="standard-dialog-submit-btn"
          >
            {{ submitLabel }}
          </v-btn>
        </template>

        <!-- Single action mode: One block button -->
        <template v-if="!hideDefaultButtons && actionMode === 'single'">
          <v-btn
            block
            :prepend-icon="singleButtonIcon"
            :variant="singleButtonVariant"
            :color="singleButtonColor"
            :disabled="loading"
            @click="handleSingleAction"
            data-cy="standard-dialog-single-btn"
          >
            {{ singleButtonLabel }}
          </v-btn>
        </template>

        <!-- Equal mode: Two equal-width buttons -->
        <template v-if="!hideDefaultButtons && actionMode === 'equal'">
          <div class="w-100 d-flex ga-2">
            <div class="w-50">
              <v-btn
                :prepend-icon="cancelIcon"
                variant="tonal"
                :block="true"
                :disabled="loading || submitLoading"
                @click="handleCancel"
                data-cy="standard-dialog-equal-cancel-btn"
              >
                {{ cancelLabel }}
              </v-btn>
            </div>
            <div class="w-50">
              <v-btn
                :prepend-icon="submitIcon"
                variant="flat"
                :color="submitColor"
                :block="true"
                :disabled="submitDisabled || loading"
                :loading="submitLoading"
                @click="handleSubmit"
                data-cy="standard-dialog-equal-submit-btn"
              >
                {{ submitLabel }}
              </v-btn>
            </div>
          </div>
        </template>

        <!-- Custom actions slot -->
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
