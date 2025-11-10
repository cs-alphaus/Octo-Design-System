<script setup lang="ts">
// Extracted from Octo's CustomButton component
// Enhanced Vuetify button with responsive icon/text switching and tooltip

import { useDisplay } from 'vuetify'
import type { VBtn } from 'vuetify/components'
import type { VTooltip } from 'vuetify/components'
import { computed, type ComputedRef, type PropType } from 'vue'

// Type definitions based on Vuetify VBtn props
type Width = VBtn['$props']['width']
type MinWidth = VBtn['$props']['minWidth']
type MaxWidth = VBtn['$props']['maxWidth']
type Text = VBtn['$props']['text']
type Variant = VBtn['$props']['variant']
type Color = VBtn['$props']['color']
type Size = VBtn['$props']['size']
type Block = VBtn['$props']['block']
type Icon = VBtn['$props']['icon']
type PrependIcon = VBtn['$props']['prependIcon']
type AppendIcon = VBtn['$props']['appendIcon']
type Loading = VBtn['$props']['loading']
type Disabled = VBtn['$props']['disabled']
type TooltipLocation = VTooltip['$props']['location']

const display = useDisplay()

const emits = defineEmits(['click'])

const props = defineProps({
  width: { type: String as PropType<Width> },
  minWidth: { type: String as PropType<MinWidth> },
  maxWidth: { type: String as PropType<MaxWidth> },
  text: { type: String as PropType<Text> },
  variant: { type: String as PropType<Variant> },
  color: { type: String as PropType<Color> },
  size: { type: String as PropType<Size> },
  block: { type: Boolean as PropType<Block> },
  icon: { type: String as PropType<Icon> },
  prependIcon: { type: String as PropType<PrependIcon> },
  appendIcon: { type: String as PropType<AppendIcon> },
  loading: { type: Boolean as PropType<Loading> },
  disabled: { type: Boolean as PropType<Disabled> },
  breakPoint: {
    type: String,
    validator(value: string) {
      return ['xs', 'sm', 'md', 'lg'].includes(value)
    }
  },
  tooltipText: { type: String },
  tooltipLocation: {
    type: String as PropType<TooltipLocation>,
    default: 'bottom'
  }
})

// Icon logic - prioritize icon prop, then prepend, then append
const iconProp: ComputedRef<Icon> = computed(() => {
  let useIcon = undefined

  if (props.icon !== undefined) {
    useIcon = props.icon
  } else if (props.prependIcon !== undefined) {
    useIcon = props.prependIcon
  } else if (props.appendIcon !== undefined) {
    useIcon = props.appendIcon
  }

  if (props.icon !== undefined) {
    return useIcon
  }

  if (isIconBtn.value) {
    return useIcon
  }
})

// Responsive icon button logic based on breakpoints
const isIconBtn: ComputedRef<boolean> = computed(() => {
  if (props.breakPoint === 'xs') {
    return !display.smAndUp.value
  } else if (props.breakPoint === 'sm') {
    return !display.mdAndUp.value
  } else if (props.breakPoint === 'md') {
    return !display.lgAndUp.value
  } else if (props.breakPoint === 'lg') {
    return !display.xlAndUp.value
  } else {
    return false
  }
})

// Tooltip text management
const tooltipTextProp = computed(() => {
  if (props.tooltipText === undefined) {
    if (isIconBtn.value) {
      return props.text
    } else {
      return undefined
    }
  } else {
    return props.tooltipText
  }
})
</script>

<template>
  <v-tooltip
    :text="tooltipTextProp"
    :open-delay="500"
    :close-delay="200"
    :location="tooltipLocation"
    :disabled="tooltipTextProp === undefined"
  >
    <template v-slot:activator="{ props: tooltipProps }">
      <v-btn
        v-bind="tooltipProps"
        class="text-capitalize"
        :width="width"
        :min-width="minWidth"
        :max-width="maxWidth"
        :text="text"
        :variant="variant"
        :color="color"
        :size="size"
        :block="block"
        :loading="loading"
        :disabled="disabled"
        :icon="iconProp"
        :prepend-icon="!isIconBtn ? prependIcon : undefined"
        :append-icon="!isIconBtn ? appendIcon : undefined"
        @click="emits('click')"
      />
    </template>
  </v-tooltip>
</template>

<style scoped></style>