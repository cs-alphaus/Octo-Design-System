<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  icon: { type: String },
  iconColor: { type: String, default: 'primary' },
  iconSize: { type: [String, Number], default: 160 },
  message: { type: String },
  height: { type: String },
  heightToExclude: { type: Array, default: () => [] },
  autoHeight: { type: Boolean, default: false }
})

const containerHeight = ref<string | undefined>(undefined)

const computedHeight = computed(() => {
  if (props.height) return props.height
  if (props.autoHeight) return containerHeight.value
  return undefined
})

onMounted(() => {
  if (props.autoHeight) {
    calculateHeight()
    window.addEventListener('resize', calculateHeight)
  }
})

const calculateHeight = () => {
  let windowHeight = window.innerHeight

  if (props.heightToExclude.length) {
    props.heightToExclude.forEach((h: number) => {
      windowHeight -= h
    })
  }

  containerHeight.value = `${windowHeight}px`
}
</script>

<template>
  <div
    class="d-flex align-center justify-center"
    :style="{ height: computedHeight }"
  >
    <div class="text-center">
      <v-icon
        v-if="icon"
        :icon="icon"
        :size="iconSize"
        :color="iconColor"
        class="mb-4"
      />

      <slot name="icon" />

      <div v-if="!$slots.message && message" class="text-h6 text-medium-emphasis">
        {{ message }}
      </div>

      <slot name="message" />

      <div class="mt-4">
        <slot name="actions" />
      </div>

      <slot />
    </div>
  </div>
</template>