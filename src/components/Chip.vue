<template>
  <v-chip
    v-bind="$attrs"
    :color="color"
    :variant="variant"
    :size="size"
    :label="label"
    :closable="closable"
    :disabled="disabled"
    :filter="filter"
    :pill="pill"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    @click="handleClick"
    @click:close="handleClose"
  >
    <template #prepend v-if="$slots.prepend">
      <slot name="prepend" />
    </template>

    <slot>{{ text }}</slot>

    <template #append v-if="$slots.append">
      <slot name="append" />
    </template>
  </v-chip>
</template>

<script setup lang="ts">
interface Props {
  text?: string
  color?: string
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  label?: boolean
  closable?: boolean
  disabled?: boolean
  filter?: boolean
  pill?: boolean
  prependIcon?: string
  appendIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  variant: 'tonal',
  size: 'default',
  label: false,
  closable: false,
  disabled: false,
  filter: false,
  pill: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  'click:close': [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const handleClose = (event: MouseEvent) => {
  emit('click:close', event)
}
</script>