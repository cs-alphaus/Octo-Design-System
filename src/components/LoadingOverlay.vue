<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  size: { type: [String, Number], default: 64 },
  opacity: { type: Number },
  contained: { type: Boolean, default: true },
  persistent: { type: Boolean, default: true },
  color: { type: String, default: 'primary' },
  text: { type: String }
})

const emits = defineEmits(['update:modelValue'])

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val)
})

const strokeWidth = computed(() => {
  const size = typeof props.size === 'number' ? props.size : parseInt(props.size)
  if (size <= 16) return 2
  else if (size <= 32) return 3
  else return 4
})
</script>

<template>
  <v-overlay
    v-model="visible"
    class="align-center justify-center"
    :contained="contained"
    :persistent="persistent"
    :opacity="opacity"
    :scrim="color === 'surface' ? 'surface' : undefined"
  >
    <div class="d-flex flex-column align-center">
      <v-progress-circular
        :color="color"
        :size="size"
        :width="strokeWidth"
        indeterminate
      />

      <div
        v-if="text"
        class="text-body-2 mt-4"
        style="color: rgba(var(--v-theme-on-surface), 0.8)"
      >
        {{ text }}
      </div>
    </div>
  </v-overlay>
</template>