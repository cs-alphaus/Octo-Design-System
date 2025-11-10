<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  text: { type: [String, Number] },
  iconButton: { type: Boolean, default: false },
  iconSize: { type: String, default: 'x-small' },
  label: { type: String, default: 'Copy' }
})

const tooltipVisible = ref(false)
const isCopied = ref(false)

const message = computed(() => {
  if (isCopied.value) {
    return 'Copied!'
  } else {
    return props.label
  }
})

watch(
  () => tooltipVisible.value,
  async (val) => {
    if (!val) {
      setTimeout(() => {
        isCopied.value = false
      }, 200)
    }
  }
)

const onCopy = async () => {
  if (!props.text) return

  try {
    await navigator.clipboard.writeText(String(props.text))
    tooltipVisible.value = true
    isCopied.value = true

    // Auto-hide tooltip after 1.5 seconds
    setTimeout(() => {
      tooltipVisible.value = false
    }, 1500)
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}
</script>

<template>
  <v-tooltip
    v-model="tooltipVisible"
    :open-delay="500"
    :close-delay="200"
    location="top"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-if="iconButton"
        icon="mdi-content-copy"
        :size="iconSize"
        variant="text"
        v-bind="props"
        @click.stop="onCopy()"
      />

      <v-btn
        v-else
        prepend-icon="mdi-content-copy"
        size="small"
        variant="outlined"
        v-bind="props"
        @click.stop="onCopy()"
      >
        {{ label }}
      </v-btn>
    </template>
    <span>{{ message }}</span>
  </v-tooltip>
</template>