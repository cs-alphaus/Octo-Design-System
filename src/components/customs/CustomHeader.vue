<script setup lang="ts">
import { computed, ref } from 'vue'
import CustomAvatar from '@/components/customs/CustomAvatar.vue'

const props = defineProps({
  // Title & Subtitle
  title: String,
  subtitle: String,

  // Avatar/Icon
  avatar: String,
  image: String,
  icon: String,
  colorTheme: String,
  initial: String,

  // Chip/Badge
  chipTitle: String,
  chipColor: { type: String, default: 'secondary' },
  chipVariant: {
    type: String as () => 'flat' | 'tonal' | 'text' | 'elevated' | 'outlined' | 'plain',
    default: 'tonal'
  },

  // Back button
  showBackButton: { type: Boolean, default: true },

  // Navigation arrows
  showNavigation: { type: Boolean, default: false },
  disablePrev: { type: Boolean, default: false },
  disableNext: { type: Boolean, default: false },
  prevTooltip: String, // Tooltip text for previous button (e.g., previous item name)
  nextTooltip: String  // Tooltip text for next button (e.g., next item name)
})

const emit = defineEmits(['back', 'edit', 'prev', 'next'])

const handleBack = () => emit('back')
const handleEdit = () => emit('edit')
const handlePrev = () => emit('prev')
const handleNext = () => emit('next')

const currentTitle = computed(() => {
  if (props.title === undefined || props.title === '') return '-'
  return props.title
})

// Navigation tooltip state
const navHoverActive = ref(false)
const currentNavTooltip = ref('')

const handleNavEnter = (tooltip: string) => {
  currentNavTooltip.value = tooltip
  navHoverActive.value = true
}

const handleNavLeave = () => {
  navHoverActive.value = false
  currentNavTooltip.value = ''
}
</script>

<template>
  <v-sheet color="background">
    <div class="d-flex align-center py-4 px-4">
      <!-- Back button (far left) -->
      <v-btn
        v-if="showBackButton"
        icon="$arrow_left"
        variant="text"
        @click="handleBack"
      />

      <!-- Middle container: Avatar + Title + Subtitle + Chip + Edit button -->
      <div class="d-flex align-center flex-grow-1">
        <!-- Avatar (optional) -->
        <div v-if="image || icon || initial || $slots.avatar" class="mr-4">
          <slot name="avatar">
            <CustomAvatar
              :image="image"
              :icon="icon"
              :initial="initial"
              :color="colorTheme"
              size="large"
            />
          </slot>
        </div>

        <!-- Title + Subtitle container -->
        <div class="d-flex flex-column flex-grow-1">
          <!-- Title row with chip and edit icon -->
          <div class="d-flex align-center">
            <!-- Title -->
            <slot name="title">
              <span class="text-xl font-weight-bold">
                {{ currentTitle }}
              </span>
            </slot>

            <!-- Small edit icon button -->
            <slot name="title-action" />

            <!-- Chip (after title) -->
            <v-chip
              v-if="chipTitle"
              :color="chipColor"
              :variant="chipVariant"
              density="comfortable"
              size="small"
              rounded="md"
              :text="chipTitle"
              class="ml-2"
            />
          </div>

          <!-- Subtitle row -->
          <div
            class="text-sm text-medium-emphasis text-truncate"
            style="max-width: 480px"
            v-if="subtitle || $slots.subtitle"
          >
            <slot name="subtitle">
              {{ subtitle }}
            </slot>
          </div>
        </div>

        <!-- Right container: Action buttons + Navigation arrows -->
        <div class="d-flex align-center">
          <!-- Action buttons slot (up to 3 buttons, default size) -->
          <div class="d-flex align-center gap-2">
            <slot name="actions" />
          </div>

          <!--
            Navigation arrows group

            KNOWN LIMITATION:
            When user clicks on an arrow while hovering, the tooltip content does NOT update
            to show the new item name until the user hovers out and back in again.
            This is a slight visual limitation that we're accepting for now.

            To fix this properly, we would need to:
            - Update tooltip content reactively when route/data changes
            - Force tooltip to re-render on navigation
            - More complex state management for tooltip content
          -->
          <v-tooltip
            v-if="showNavigation"
            v-model="navHoverActive"
            :text="currentNavTooltip"
            location="bottom"
            :disabled="!currentNavTooltip"
          >
            <template v-slot:activator="{ props: tooltipProps }">
              <div
                v-bind="tooltipProps"
                class="d-flex align-center ml-2"
                @mouseleave="handleNavLeave"
              >
                <v-btn
                  icon="$arrow_left"
                  variant="text"
                  :disabled="disablePrev"
                  @click="handlePrev"
                  @mouseenter="!disablePrev && prevTooltip ? handleNavEnter(prevTooltip) : null"
                />
                <v-btn
                  icon="$arrow_right"
                  variant="text"
                  :disabled="disableNext"
                  @click="handleNext"
                  @mouseenter="!disableNext && nextTooltip ? handleNavEnter(nextTooltip) : null"
                />
              </div>
            </template>
          </v-tooltip>
        </div>
      </div>
    </div>

    <v-divider />
  </v-sheet>
</template>

