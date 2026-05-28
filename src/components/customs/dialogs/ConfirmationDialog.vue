<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
  modelValue: boolean
  icon?: string
  iconColor?: string
  iconSize?: string | number
  title: string
  message: string
  cancelText?: string
  cancelIcon?: string
  confirmText?: string
  confirmIcon?: string
  confirmColor?: string
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'mdi-alert-circle',
  iconColor: 'error',
  iconSize: 64,
  cancelIcon: 'mdi-close',
  confirmIcon: 'mdi-check',
  confirmColor: 'error'
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
  cancel: []
}>()

const dialog = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const cancelLabel = computed(() => {
  return props.cancelText || t('common.cancel')
})

const confirmLabel = computed(() => {
  return props.confirmText || t('common.confirm')
})

const handleCancel = () => {
  emit('cancel')
  dialog.value = false
}

const handleConfirm = () => {
  emit('confirm')
  // Don't auto-close on confirm - let parent handle it after async operations
}
</script>

<template>
  <v-dialog v-model="dialog" width="400" persistent>
    <v-card rounded="xl">
      <!-- Title & Message -->
      <div class="d-flex flex-column pa-6">
        <p class="text-xl font-weight-medium mb-2">{{ title }}</p>
        <p class="text-base message-text">{{ message }}</p>
      </div>

      <!-- Actions: Flexible equal width buttons (confirm takes priority if text is longer) -->
      <v-card-actions class="pa-4 ga-2">
        <v-btn
          class="confirm-cancel-btn"
          variant="tonal"
          :disabled="loading"
          @click="handleCancel"
          data-cy="confirmation-cancel-btn"
        >
          {{ cancelLabel }}
        </v-btn>
        <v-btn
          class="confirm-primary-btn"
          variant="flat"
          :color="confirmColor"
          :loading="loading"
          @click="handleConfirm"
          data-cy="confirmation-confirm-btn"
        >
          {{ confirmLabel }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.message-text {
  white-space: pre-line; /* Preserve line breaks from \n */
}

/* Flexible button sizing: Equal by default, cancel shrinks if primary is longer */
.confirm-cancel-btn {
  flex: 1 2 0; /* flex-grow: 1, flex-shrink: 2 (shrinks more easily) */
  min-width: 0; /* Allow shrinking below content width */
  white-space: normal; /* Allow text wrapping */
}

.confirm-primary-btn {
  flex: 1 0 0; /* flex-grow: 1, flex-shrink: 0 (doesn't shrink) */
  min-width: 0;
  white-space: normal; /* Allow text wrapping */
}

/* Allow button content to wrap to multiple lines */
.confirm-cancel-btn :deep(.v-btn__content),
.confirm-primary-btn :deep(.v-btn__content) {
  white-space: normal;
  text-align: center;
  line-height: 1.2;
}
</style>
