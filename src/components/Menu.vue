<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
  title?: string
  value?: string
  icon?: string
  color?: string
  type?: 'divider' | 'subheader'
  disabled?: boolean
  hide?: boolean
}

const props = defineProps({
  items: { type: Array as () => MenuItem[], required: true },
  activatorText: { type: String },
  activatorIcon: { type: String, default: 'mdi-dots-vertical' },
  closeOnContentClick: { type: Boolean, default: true },
  minWidth: { type: String, default: '200px' },
  maxWidth: { type: String, default: '420px' },
  location: { type: String, default: 'bottom end' }
})

const emits = defineEmits(['select'])

const visible = ref(false)

const handleItemClick = (item: MenuItem) => {
  if (!item.disabled) {
    emits('select', item.value || item.title)
    if (props.closeOnContentClick) {
      visible.value = false
    }
  }
}
</script>

<template>
  <v-menu
    v-model="visible"
    :location="location"
    :close-on-content-click="closeOnContentClick"
  >
    <!-- Activator -->
    <template v-slot:activator="{ props: menuProps }">
      <v-btn
        v-if="activatorText"
        v-bind="menuProps"
        variant="outlined"
      >
        {{ activatorText }}
        <v-icon end icon="mdi-chevron-down" />
      </v-btn>

      <v-btn
        v-else
        v-bind="menuProps"
        :icon="activatorIcon"
        variant="text"
      />
    </template>

    <!-- Menu Content -->
    <v-card :min-width="minWidth" :max-width="maxWidth">
      <v-list>
        <template v-for="(item, index) in items" :key="`menu-item-${index}`">
          <!-- Divider -->
          <v-divider v-if="item.type === 'divider'" />

          <!-- Subheader -->
          <v-list-subheader v-else-if="item.type === 'subheader'">
            {{ item.title }}
          </v-list-subheader>

          <!-- Regular Item -->
          <v-list-item
            v-else-if="!item.hide"
            :disabled="item.disabled"
            @click="handleItemClick(item)"
          >
            <template v-if="item.icon" v-slot:prepend>
              <v-icon :icon="item.icon" :color="item.color" />
            </template>

            <v-list-item-title :class="item.color ? `text-${item.color}` : undefined">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>

      <slot />
    </v-card>
  </v-menu>
</template>