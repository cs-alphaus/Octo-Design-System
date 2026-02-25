<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'
import { getIconName } from '@/helpers/icon'
import { getColor, hexToRgb } from '@/tokens/colors'

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
        textSize: 'text-xl'
      }
    case 'x-large':
      return {
        avatarSize: 64,
        iconSize: 48,
        textSize: 'text-xxl'
      }
    default:
      return {
        avatarSize: 40,
        iconSize: 28,
        textSize: 'text-xl'
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
    return getColor(props.color)
  } else {
    const color = getColor('on-background') || '#000000'

    let alpha
    if (theme.global.name.value === 'dark') {
      alpha = 0.8
    } else {
      alpha = 0.1
    }

    return hexToRgb(color, alpha)
  }
})

const isOctoAvatar = (icon: string | undefined) => {
  if (icon === undefined) return false

  return icon.indexOf('octo_') !== -1
}

/**
 * Determines the type of avatar based on the provided props.
 *
 * @returns {string} The type of avatar. Either 'icon' or 'initial'.
 */
type AvatarType = 'image' | 'icon' | 'initial'

const isImageUrl = (value: string | undefined) => {
  return typeof value === 'string' &&
         (value.startsWith('http') || value.startsWith('/'))
}

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
    :color="isOctoAvatar(icon) ? 'background' : backgroundColor"
    :variant="variant"
    :size="sizeProps.avatarSize"
  >
    <v-img
      v-if="avatarType === 'image'"
      alt="Avatar"
      :src="image || icon"
      :width="sizeProps.avatarSize"
      :height="sizeProps.avatarSize"
      :cover="false"
      contain
    />

    <v-icon
      v-else-if="avatarType === 'icon'"
      :icon="getIconName(icon || '')"
      :size="isOctoAvatar(icon) ? sizeProps.avatarSize : sizeProps.iconSize"
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

<style scoped></style>
