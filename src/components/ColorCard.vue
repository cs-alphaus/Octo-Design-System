<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { getColor, hexToRgb } from '@/tokens/colors'

const theme = useTheme()

const props = defineProps({
  color: { type: String },
  variant: { type: String },
  height: { type: [String, Number] },
  opacity: { type: Array, default: () => [] },
  noOpacity: { type: Boolean, default: false },
  elevation: { type: [String, Number] }
})

const backgroundColorStyle = computed(() => {
  if (!props.color) return undefined

  if (props.noOpacity) {
    return getColor(props.color, theme.global.current.value.dark ? 'dark' : 'light')
  }

  // Calculate opacity
  let opacity: number

  if (props.opacity.length > 0) {
    if (props.opacity.length === 1) {
      opacity = props.opacity[0]
    } else {
      opacity = theme.global.current.value.dark ? props.opacity[1] : props.opacity[0]
    }
  } else {
    opacity = theme.global.current.value.dark ? 0.2 : 0.1
  }

  const colorValue = getColor(props.color, theme.global.current.value.dark ? 'dark' : 'light')
  return colorValue ? hexToRgb(colorValue, opacity) : undefined
})
</script>

<template>
  <v-card
    :style="{
      'background-color': noOpacity ? undefined : backgroundColorStyle
    }"
    :color="noOpacity ? color : undefined"
    :variant="variant"
    :height="height"
    :elevation="elevation"
  >
    <slot />
  </v-card>
</template>