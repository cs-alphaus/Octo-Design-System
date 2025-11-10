<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  icon: { type: String, required: true },
  size: { type: String, default: 'default' },
  color: { type: String },
  variant: { type: String, default: 'text' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  tooltipText: { type: String },
  tooltipLocation: { type: String, default: 'top' }
})

const emits = defineEmits(['click'])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emits('click', event)
  }
}
</script>

<template>
  <v-tooltip
    v-if="tooltipText"
    :text="tooltipText"
    :location="tooltipLocation"
    :open-delay="300"
  >
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn
        v-bind="tooltipProps"
        :icon="icon"
        :size="size"
        :color="color"
        :variant="variant"
        :loading="loading"
        :disabled="disabled"
        @click="handleClick"
      />
    </template>
  </v-tooltip>

  <v-btn
    v-else
    :icon="icon"
    :size="size"
    :color="color"
    :variant="variant"
    :loading="loading"
    :disabled="disabled"
    @click="handleClick"
  />
</template>