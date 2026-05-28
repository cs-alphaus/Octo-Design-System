<template>
  <v-card class="h-100">
    <div class="pa-4">
      <div
        class="color-preview rounded mb-3"
        :style="{ backgroundColor: 'rgb(var(--v-theme-' + color + '))' }"
      ></div>
      <h3 class="text-lg mb-2">{{ title }}</h3>
      <p class="text-sm text-medium-emphasis mb-3">{{ description }}</p>
      <v-chip :color="color" variant="tonal" size="small" class="mb-2">{{ color }}</v-chip>
      <div class="text-xs mt-2">
        <div class="mb-1"><strong>Light:</strong> {{ lightHex }}</div>
        <div><strong>Dark:</strong> {{ darkHex }}</div>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  title: string
  description: string
  lightHex: string
  darkHex: string
}>()
</script>

<style scoped>
.color-preview {
  height: 80px;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.1);
}

.h-100 {
  height: 100%;
}
</style>
