<script setup lang="ts">
// Extracted from Octo's CustomDialog component
// Standardized dialog with loading states, submit/cancel actions, and i18n support

import { computed, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  width: String,
  minWidth: String,
  maxWidth: String,
  height: String,
  title: String,
  titleIcon: String,
  closable: { type: Boolean, default: false },
  closeLabel: String,
  cancelLabel: String,
  cancelIcon: { type: String, default: 'mdi-close' },
  submittable: Boolean,
  submitLabel: String,
  submitIcon: String,
  submitLoading: Boolean,
  submitDisabled: Boolean,
  submitBlock: Boolean,
  loading: Boolean,
  scrollable: { type: Boolean, default: true },
  persistent: Boolean,
  customAction: Boolean,
  removeToolbarBg: Boolean,
  hideDefaultButtons: Boolean,
  retainFocus: { type: Boolean, default: true },
})

const emits = defineEmits(['update:modelValue', 'open', 'close', 'submit'])

const modelValueProp = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})

// Default labels - in a real implementation, use i18n
const submitLabelProp = computed(() => {
  if (props.submitLabel) return props.submitLabel
  return 'Submit'
})

const cancelLabelProp = computed(() => {
  if (props.cancelLabel) return props.cancelLabel
  return 'Cancel'
})

const closeLabelProp = computed(() => {
  if (props.closeLabel) return props.closeLabel
  return 'Close'
})

// Format height to px
const heightProp = computed(() => {
  if (!props.height) return undefined
  return props.height.includes('px') ? props.height : `${props.height}px`
})

watch(
  () => modelValueProp.value,
  (visible) => {
    if (visible) {
      onOpen()
    } else {
      onClose()
    }
  }
)

const onOpen = () => {
  emits('open')
}

const onClose = () => {
  emits('close')
}

const onSubmit = () => {
  emits('submit')
}
</script>

<template>
  <v-dialog
    v-model="modelValueProp"
    :width="width"
    :min-width="minWidth"
    :max-width="maxWidth"
    :persistent="persistent"
    :retain-focus="retainFocus"
  >
    <v-card :color="props.removeToolbarBg ? 'surface' : undefined">
      <!-- Loading overlay -->
      <v-overlay
        :model-value="props.loading"
        :contained="true"
        :persistent="true"
        class="align-center justify-center"
      >
        <v-progress-circular color="primary" indeterminate size="64" />
      </v-overlay>

      <!-- Header -->
      <v-toolbar
        :flat="true"
        density="comfortable"
        :color="props.removeToolbarBg ? 'surface' : undefined"
      >
        <template v-slot:prepend>
          <v-icon :icon="props.titleIcon" v-if="props.titleIcon" />
        </template>

        <template v-slot:title>
          {{ props.title }}
        </template>

        <template v-slot:append>
          <slot name="append"></slot>

          <v-btn
            icon="mdi-close"
            @click="modelValueProp = false"
            v-if="closable"
          />
        </template>
      </v-toolbar>

      <v-divider
        :color="!props.removeToolbarBg ? 'surface-light' : undefined"
      />

      <slot name="extension" />

      <!-- Content -->
      <div
        :class="[
          { 'overflow-y-auto': scrollable },
          { 'overflow-y-hidden': !scrollable },
          'overflow-x-hidden'
        ]"
        :style="{ height: heightProp }"
      >
        <slot />
      </div>

      <v-divider
        :color="!props.removeToolbarBg ? 'surface-light' : undefined"
      />

      <!-- Actions -->
      <v-card-actions class="pa-4">
        <slot name="actions" />

        <template v-if="!$slots.actions">
          <v-spacer />

          <!-- Submit/Cancel buttons -->
          <template v-if="props.submittable">
            <div
              :class="{
                'w-100': props.submitBlock,
                'd-flex': true
              }"
            >
              <div
                :class="[
                  'mr-2',
                  {
                    'w-50': props.submitBlock
                  }
                ]"
              >
                <v-btn
                  size="large"
                  :prepend-icon="cancelIcon"
                  variant="tonal"
                  :disabled="submitLoading"
                  :block="props.submitBlock"
                  @click="modelValueProp = false"
                >
                  {{ cancelLabelProp }}
                </v-btn>
              </div>

              <div
                :class="{
                  'w-50': props.submitBlock
                }"
              >
                <v-btn
                  color="primary"
                  :prepend-icon="submitIcon"
                  size="large"
                  variant="elevated"
                  :block="props.submitBlock"
                  :loading="submitLoading"
                  :disabled="submitDisabled"
                  @click="onSubmit"
                >
                  {{ submitLabelProp }}
                </v-btn>
              </div>
            </div>
          </template>

          <!-- Close button -->
          <v-btn
            prepend-icon="mdi-close"
            size="large"
            variant="tonal"
            :block="true"
            @click="modelValueProp = false"
            v-else-if="!props.hideDefaultButtons"
          >
            {{ closeLabelProp }}
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
:deep(.v-card-actions .v-btn) {
  padding: 0 16px;
}
</style>