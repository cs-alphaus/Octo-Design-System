<script setup lang="ts">
/**
 * CustomAvatar - A versatile avatar component
 * Supports provider logos, user initials, icons, and images
 */

interface Props {
  image?: string        // Image source URL
  initial?: string      // Text/initials to display
  icon?: string         // Icon name to display
  color?: string        // Background color
  size?: string | number // Size of the avatar
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: '40'
})
</script>

<template>
  <v-avatar
    :size="size"
    :color="color"
  >
    <!-- Image takes precedence -->
    <v-img
      v-if="image"
      :src="image"
      :alt="initial || 'Avatar'"
    />

    <!-- Icon if no image but icon is provided -->
    <v-icon
      v-else-if="icon"
      :icon="icon"
      size="24"
    />

    <!-- Text/initials if no image or icon -->
    <span v-else-if="initial">
      {{ initial }}
    </span>

    <!-- Fallback icon -->
    <v-icon v-else icon="mdi-account" />
  </v-avatar>
</template>