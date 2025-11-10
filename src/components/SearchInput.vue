<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Search...' },
  block: { type: Boolean, default: false },
  expandByDefault: { type: Boolean, default: false },
  clearable: { type: Boolean, default: true },
  density: { type: String, default: 'comfortable' },
  variant: { type: String, default: 'outlined' },
  disabled: { type: Boolean, default: false }
})

const emits = defineEmits(['update:modelValue', 'active', 'clear', 'submit'])

const isExpanded = ref(props.expandByDefault || props.block)

const searchValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val || '')
  }
})

watch(
  () => isExpanded.value,
  (val) => {
    emits('active', val)
    if (!val && !props.block) {
      searchValue.value = ''
    }
  }
)

const toggleExpanded = () => {
  if (!props.block) {
    isExpanded.value = !isExpanded.value
  }
}

const onClear = () => {
  searchValue.value = ''
  emits('clear')
  if (!props.block) {
    isExpanded.value = false
  }
}

const onSubmit = () => {
  emits('submit', searchValue.value)
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    onSubmit()
  }
  if (event.key === 'Escape' && !props.block) {
    isExpanded.value = false
  }
}
</script>

<template>
  <!-- Block variant - always visible -->
  <div v-if="block" class="search-input-block">
    <v-text-field
      v-model="searchValue"
      :placeholder="placeholder"
      :density="density"
      :variant="variant"
      :disabled="disabled"
      :clearable="clearable"
      prepend-inner-icon="mdi-magnify"
      hide-details
      single-line
      @click:clear="onClear"
      @keydown="onKeydown"
    />
  </div>

  <!-- Expandable variant -->
  <div v-else class="search-input-expandable">
    <div class="d-flex align-center">
      <!-- Search button (left side) -->
      <v-btn
        icon="mdi-magnify"
        variant="text"
        :color="isExpanded ? 'primary' : undefined"
        @click="toggleExpanded"
        v-show="!isExpanded"
      />

      <!-- Expandable input -->
      <v-expand-x-transition>
        <v-text-field
          v-if="isExpanded"
          v-model="searchValue"
          :placeholder="placeholder"
          :density="density"
          :variant="variant"
          :disabled="disabled"
          :clearable="clearable"
          style="width: 330px"
          hide-details
          single-line
          autofocus
          @click:clear="onClear"
          @keydown="onKeydown"
          @blur="() => { if (!searchValue) isExpanded = false }"
        />
      </v-expand-x-transition>

      <!-- Search button (right side when expanded) -->
      <v-btn
        v-if="isExpanded"
        icon="mdi-magnify"
        variant="text"
        color="primary"
        @click="onSubmit"
      />
    </div>
  </div>
</template>

<style scoped>
.search-input-block {
  width: 100%;
}

.search-input-expandable {
  display: inline-flex;
  align-items: center;
}
</style>