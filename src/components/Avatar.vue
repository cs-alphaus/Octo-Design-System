<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()

const props = defineProps({
  icon: String,
  initial: String,
  color: String,
  size: String,
  image: String
})

const sizeProps = computed(() => {
  switch (props.size) {
    case 'x-small':
      return {
        avatarSize: 22,
        iconSize: 19
      }
    case 'small':
      return {
        avatarSize: 24,
        iconSize: 20
      }
    case 'large':
      return {
        avatarSize: 48,
        iconSize: 36,
        textSize: 'text-h6'
      }
    case 'x-large':
      return {
        avatarSize: 64,
        iconSize: 48,
        textSize: 'text-h5'
      }
    default:
      return {
        avatarSize: 40,
        iconSize: 28,
        textSize: 'text-h6'
      }
  }
})

const variant = computed(() => {
  return theme.global.name.value === 'dark' ? 'tonal' : undefined
})

const iconColor = computed(() => {
  return theme.global.name.value === 'dark' ? undefined : 'on-background'
})

const backgroundColor = computed(() => {
  if (props.color) {
    return props.color
  } else {
    return theme.global.name.value === 'dark' ? 'surface-variant' : 'surface-light'
  }
})

const isImageUrl = (value: string | undefined) => {
  return typeof value === 'string' &&
         (value.startsWith('http') || value.startsWith('/'))
}

type AvatarType = 'image' | 'icon' | 'initial'

const avatarType = computed((): AvatarType => {
  if (props.image && isImageUrl(props.image)) {
    return 'image'
  }

  if (props.icon) {
    if (isImageUrl(props.icon)) {
      return 'image'
    }
    if (props.icon !== '') {
      return 'icon'
    }
  }

  return 'initial'
})
</script>

<template>
  <v-avatar
    :color="backgroundColor"
    :variant="variant"
    :size="sizeProps.avatarSize"
  >
    <v-img
      v-if="avatarType === 'image'"
      alt="Avatar"
      :src="image || icon"
      :width="sizeProps.avatarSize"
      :height="sizeProps.avatarSize"
      cover
    />

    <v-icon
      v-else-if="avatarType === 'icon'"
      :icon="icon"
      :size="sizeProps.iconSize"
      :color="iconColor"
    />

   <span
      v-else
      class="text-uppercase"
      :class="sizeProps.textSize"
    >
      {{ props.initial }}
    </span>
  </v-avatar>
</template>