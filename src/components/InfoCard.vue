<script setup lang="ts">
const props = defineProps({
  title: String,
  icon: String,
  iconColor: String,
  size: {
    type: String,
    validator: (value: string) => ['small', 'large'].includes(value)
  }
})
</script>

<template>
  <v-sheet variant="tonal" color="surface-light" class="rounded-lg pa-4">
    <div class="d-flex">
      <v-icon :icon="props.icon" :color="props.iconColor" />

      <div class="ml-4">
        <h3
          :class="[
            'font-weight-medium',
            'mb-2',
            {
              'text-h6': props.size === 'large',
              'text-body-1': props.size === 'small' || !props.size
            }
          ]"
        >
          {{ props.title }}
        </h3>

        <slot name="content" />
      </div>
    </div>
  </v-sheet>
</template>