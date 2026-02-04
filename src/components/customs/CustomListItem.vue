<script setup lang="ts">
/**
 * UnifiedListItem - A configurable wrapper around v-list-item
 *
 * This component unifies all listing patterns across the application by providing
 * a single configurable component that can replicate any list item variation
 * through configuration objects rather than separate components.
 */

import { computed } from 'vue'
import CustomAvatar from '@/components/customs/CustomAvatar.vue'
import { getIconName } from '@/helpers/icon'

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

/**
 * Configuration for status chips
 * Supports single chip or array of chips with different colors/variants
 */
interface ChipConfig {
  text: string
  color?: string
  variant?: 'flat' | 'tonal' | 'outlined' | 'text' | 'elevated'
}


/**
 * Configuration for action menu items
 * Each action has a title, optional icon, and callback function
 */
interface MenuAction {
  title: string
  icon?: string
  action: () => void
}

/**
 * Main configuration interface
 * Controls all aspects of the list item appearance and behavior
 */
interface ListItemConfig {
  // Avatar/Icon Configuration
  showAvatar?: boolean                    // Toggle avatar display
  avatarType?: 'provider' | 'user' | 'icon'  // Type determines rendering method
  avatarSrc?: string                      // Image source for provider/user avatars
  avatarText?: string                     // Text/initials for user avatars
  avatarIcon?: string                     // Icon name for icon-type avatars
  avatarColor?: string                    // Color theme for avatar background

  // Primary Content
  title: string                           // Main text (required)
  subtitle?: string                       // Secondary text below title

  // Tertiary metadata line (appears below subtitle)
  showMetadata?: boolean                  // Toggle metadata display
  metadataItems?: [string?, string?, string?] // Array of up to 3 strings separated by dots

  // Status Chips beside title (inline with title text)
  showTitleChips?: boolean                // Toggle title chips display
  titleChipConfig?: ChipConfig | ChipConfig[]  // Single chip or array of chips beside title

  // Status Chips in append slot (right side)
  showStatusChip?: boolean                // Toggle status chip display
  chipConfig?: ChipConfig | ChipConfig[]  // Single chip or array of chips in append

  // Action Menu (used in members, some provider accounts)
  showActionMenu?: boolean                // Toggle action menu button
  menuActions?: MenuAction[]              // Array of menu actions

  // Behavior Controls
  enableLazyLoading?: boolean             // Wrap in v-lazy component
  showDivider?: boolean                   // Show divider after item
  clickable?: boolean                     // Enable/disable click events
  active?: boolean                        // Set active state

  // Extensibility
  customRightContent?: boolean            // Enable custom slot for right content
}

// =============================================================================
// COMPONENT SETUP
// =============================================================================

const props = defineProps<{
  config: ListItemConfig    // Configuration object controls entire appearance
  value?: any              // Value emitted on click events
}>()

const emit = defineEmits<{
  click: [value: any]                    // Emitted when item is clicked
  menuAction: [action: string, value: any]  // Emitted when menu action is selected
}>()

// =============================================================================
// COMPUTED PROPERTIES
// =============================================================================

/**
 * Converts chip configuration to array format for consistent handling
 * Supports both single chip and multiple chips (for append slot)
 */
const chipArray = computed(() => {
  if (!props.config.chipConfig) return []

  // If it's already an array, return as-is
  // If it's a single chip, wrap in array
  return Array.isArray(props.config.chipConfig)
    ? props.config.chipConfig
    : [props.config.chipConfig]
})

/**
 * Converts title chip configuration to array format for consistent handling
 * Supports both single chip and multiple chips (for beside title)
 */
const titleChipArray = computed(() => {
  if (!props.config.titleChipConfig) return []

  // If it's already an array, return as-is
  // If it's a single chip, wrap in array
  return Array.isArray(props.config.titleChipConfig)
    ? props.config.titleChipConfig
    : [props.config.titleChipConfig]
})

/**
 * Creates formatted metadata string from array
 * Filters out empty/null values and joins with dots
 */
const formattedMetadata = computed(() => {
  if (!props.config.showMetadata || !props.config.metadataItems) return ''

  // Filter out empty/null/undefined values and join with dots
  return props.config.metadataItems
    .filter(item => item && item.trim() !== '')
    .join(' • ')
})

// =============================================================================
// EVENT HANDLERS
// =============================================================================

/**
 * Handles item click events
 * Only emits if clickable is not explicitly set to false
 */
const handleClick = () => {
  if (props.config.clickable !== false) {
    emit('click', props.value)
  }
}

/**
 * Handles menu action selection
 * Executes the action function and emits event for parent component
 */
const handleMenuAction = (action: MenuAction) => {
  action.action()  // Execute the action callback
  emit('menuAction', action.title, props.value)  // Notify parent component
}
</script>

<template>
  <!-- ============================================================================= -->
  <!-- LAZY LOADING VERSION                                                         -->
  <!-- Used when enableLazyLoading=true (performance optimization for long lists)  -->
  <!-- ============================================================================= -->
  <template v-if="config.enableLazyLoading">
    <!-- v-lazy wraps the list item for performance - only renders when in viewport -->
    <v-lazy
      :min-height="config.showMetadata ? 80 : 64"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <v-list-item
        :value="value"
        :active="config.active"
        :height="config.showMetadata ? 80 : 64"
        class="py-4"
        @click="handleClick"
      >
        <!-- ================================ -->
        <!-- LEFT SIDE: Avatar/Icon Section  -->
        <!-- ================================ -->
        <template v-if="config.showAvatar" v-slot:prepend>
          <!-- Provider Avatar: Used for AWS/GCP/Azure accounts -->
          <CustomAvatar
            v-if="config.avatarType === 'provider'"
            :image="config.avatarSrc"
            :initial="config.avatarText"
            :color="config.avatarColor"
            size="40"
            class="mr-1"
          />

          <!-- User Avatar: Used for member management with initials -->
          <CustomAvatar
            v-else-if="config.avatarType === 'user'"
            :initial="config.avatarText"
            :image="config.avatarSrc"
            :icon="config.avatarIcon"
            :color="config.avatarColor"
            size="40"
            class="mr-1"
          />

          <!-- Generic Icon: Used for cost groups, allocations, etc. -->
          <v-icon
            v-else-if="config.avatarType === 'icon'"
            :icon="getIconName(config.avatarIcon || 'box_open')"
            size="40"
            class="mr-1"
          />
        </template>

        <!-- ================================ -->
        <!-- CENTER: Title, Subtitle & Metadata -->
        <!-- ================================ -->
        <div>
          <div class="d-flex align-center">
            <v-list-item-title class="mr-2">
              {{ config.title }}
            </v-list-item-title>

            <!-- Status Chips beside title: First chip is default style, additional chips are customizable -->
            <template v-if="config.showTitleChips && titleChipArray.length">
              <!-- First chip - default styling -->
              <v-chip
                :color="titleChipArray[0].color || 'primary'"
                :variant="titleChipArray[0].variant || 'tonal'"
                size="x-small"
                rounded="lg"
                class="mr-1"
                style="height: 20px; font-size: 11px;"
              >
                {{ titleChipArray[0].text }}
              </v-chip>

              <!-- Additional chips - fully customizable -->
              <v-chip
                v-for="(chip, index) in titleChipArray.slice(1)"
                :key="index + 1"
                :color="chip.color || 'secondary'"
                :variant="chip.variant || 'outlined'"
                size="x-small"
                rounded="lg"
                style="height: 20px; font-size: 11px;"
              >
                {{ chip.text }}
              </v-chip>
            </template>
          </div>
        </div>

        <v-list-item-subtitle v-if="config.subtitle">
          {{ config.subtitle }}
        </v-list-item-subtitle>

        <!-- Tertiary metadata line (ID • Region • Type, etc.) -->
        <div
          v-if="config.showMetadata && formattedMetadata"
          class="text-caption text-medium-emphasis mt-1"
        >
          {{ formattedMetadata }}
        </div>

        <!-- ================================ -->
        <!-- RIGHT SIDE: Status & Actions     -->
        <!-- ================================ -->
        <template v-slot:append>
          <!-- Status Chips: Used for account status, user roles, etc. -->
          <template v-if="config.showStatusChip && chipArray.length">
            <v-chip
              v-for="(chip, index) in chipArray"
              :key="index"
              :color="chip.color || 'primary'"
              :variant="chip.variant || 'tonal'"
              size="small"
              rounded="lg"
              class="mr-2"
              style="height: 20px;"
            >
              {{ chip.text }}
            </v-chip>
          </template>


          <!-- Custom Slot: For edge cases requiring custom right-side content -->
          <slot v-if="config.customRightContent" name="right-content" />

          <!-- Action Menu: Used in member management, some account patterns -->
          <v-menu v-if="config.showActionMenu && config.menuActions?.length">
            <template v-slot:activator="{ props: menuProps }">
              <v-btn
                v-bind="menuProps"
                icon="mdi-dots-vertical"
                variant="text"
                size="small"
                class="ml-2"
              />
            </template>

            <v-list>
              <v-list-item
                v-for="(action, index) in config.menuActions"
                :key="index"
                @click="handleMenuAction(action)"
              >
                <template v-if="action.icon" v-slot:prepend>
                  <v-icon :icon="action.icon" />
                </template>
                <v-list-item-title>{{ action.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-lazy>
  </template>

  <!-- ============================================================================= -->
  <!-- STANDARD VERSION                                                             -->
  <!-- Used when enableLazyLoading=false (default) - renders immediately          -->
  <!-- ============================================================================= -->
  <template v-else>
    <v-list-item
      :value="value"
      :active="config.active"
      :height="config.showMetadata || config.showAvatar ? 80 : 64"
      class="py-4"
      @click="handleClick"
    >
      <!-- Same structure as lazy version but without v-lazy wrapper -->

      <!-- LEFT SIDE: Avatar/Icon Section -->
      <template v-if="config.showAvatar" v-slot:prepend>
        <!-- Provider Avatar -->
        <CustomAvatar
          v-if="config.avatarType === 'provider'"
          :image="config.avatarSrc"
          :initial="config.avatarText"
          :color="config.avatarColor"
          size="40"
          class="mr-1"
        />

        <!-- User Avatar -->
        <CustomAvatar
          v-else-if="config.avatarType === 'user'"
          :initial="config.avatarText"
          :image="config.avatarSrc"
          :icon="config.avatarIcon"
          :color="config.avatarColor"
          size="40"
          class="mr-1"
        />

        <!-- Generic Icon -->
        <v-icon
          v-else-if="config.avatarType === 'icon'"
          :icon="getIconName(config.avatarIcon || 'box_open')"
          size="24"
          class="mr-1"
        />
      </template>

      <!-- CENTER: Title, Subtitle & Metadata -->
      <div>
        <div class="d-flex align-center mb-1">
          <v-list-item-title class="mr-2">
            {{ config.title }}
          </v-list-item-title>

          <!-- Status Chips beside title: First chip is default style, additional chips are customizable -->
          <template v-if="config.showTitleChips && titleChipArray.length">
            <!-- First chip - default styling -->
            <v-chip
              :color="titleChipArray[0].color || 'primary'"
              :variant="titleChipArray[0].variant || 'tonal'"
              size="small"
              rounded="lg"
              class="mr-1"
              style="height: 20px;"
            >
              {{ titleChipArray[0].text }}
            </v-chip>

            <!-- Additional chips - fully customizable -->
            <v-chip
              v-for="(chip, index) in titleChipArray.slice(1)"
              :key="index + 1"
              :color="chip.color || 'secondary'"
              :variant="chip.variant || 'outlined'"
              size="small"
              rounded="lg"
              class="mr-1"
              style="height: 20px;"
            >
              {{ chip.text }}
            </v-chip>
          </template>
        </div>
      </div>
      <v-list-item-subtitle v-if="config.subtitle">
        {{ config.subtitle }}
      </v-list-item-subtitle>

      <!-- Tertiary metadata line (ID • Region • Type, etc.) -->
      <div
        v-if="config.showMetadata && formattedMetadata"
        class="text-caption text-medium-emphasis mt-1"
      >
        {{ formattedMetadata }}
      </div>

      <!-- RIGHT SIDE: Status & Actions -->
      <template v-slot:append>
        <!-- Status Chips -->
        <template v-if="config.showStatusChip && chipArray.length">
          <v-chip
            v-for="(chip, index) in chipArray"
            :key="index"
            :color="chip.color || 'primary'"
            :variant="chip.variant || 'tonal'"
            size="default"
            rounded="lg"
            class="mr-2"
          >
            {{ chip.text }}
          </v-chip>
        </template>


        <!-- Custom Slot -->
        <slot v-if="config.customRightContent" name="right-content" />

        <!-- Action Menu -->
        <v-menu v-if="config.showActionMenu && config.menuActions?.length">
          <template v-slot:activator="{ props: menuProps }">
            <v-btn
              v-bind="menuProps"
              icon="mdi-dots-vertical"
              variant="text"
              size="small"
              class="ml-2"
            />
          </template>

          <v-list>
            <v-list-item
              v-for="(action, index) in config.menuActions"
              :key="index"
              @click="handleMenuAction(action)"
            >
              <template v-if="action.icon" v-slot:prepend>
                <v-icon :icon="action.icon" />
              </template>
              <v-list-item-title>{{ action.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-list-item>
  </template>

  <!-- ============================================================================= -->
  <!-- DIVIDER                                                                      -->
  <!-- Optional divider between list items (used in most patterns)                 -->
  <!-- ============================================================================= -->
  <v-divider v-if="config.showDivider" />
</template>