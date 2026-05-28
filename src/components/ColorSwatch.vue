<template>
  <div class="color-swatch-container">
    <div
      class="color-swatch rounded"
      :style="{ backgroundColor: color }"
    >
      <div v-if="isPrimary || isSecondary || isSuccess || isError || isWarning || isInfo"
           class="badge">
        <span v-if="isPrimary">Primary</span>
        <span v-if="isSecondary">Secondary</span>
        <span v-if="isSuccess">Success</span>
        <span v-if="isError">Error</span>
        <span v-if="isWarning">Warning</span>
        <span v-if="isInfo">Info</span>
      </div>
    </div>
    <div class="mt-2">
      <div class="text-xs font-weight-medium">{{ label }}</div>
      <div class="text-xs text-medium-emphasis">{{ color }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: string
  label: string
  shade?: string | number
  isPrimary?: boolean
  isSecondary?: boolean
  isSuccess?: boolean
  isError?: boolean
  isWarning?: boolean
  isInfo?: boolean
}>()
</script>

<style scoped>
.color-swatch-container {
  position: relative;
}

.color-swatch {
  height: 80px;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.1);
  position: relative;
}

.badge {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: rgba(255,255,255,0.9);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #000;
}
</style>
