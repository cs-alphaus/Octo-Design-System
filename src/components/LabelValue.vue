<script setup lang="ts">
const props = defineProps({
  label: [String, Number],
  noLabelBottomMargin: Boolean,
  lightLabel: Boolean,
  boldLabel: Boolean,
  smallLabel: Boolean,
  largeLabel: Boolean,
  value: [String, Number],
  lightValue: Boolean,
  boldValue: Boolean,
  smallValue: Boolean,
  largeValue: Boolean,
  noValue: Boolean,
  hide: Boolean
})
</script>

<template>
  <div v-if="!hide">
    <div
      :class="[
        'label-wrapper',
        { 'mb-0': noLabelBottomMargin },
        'text-truncate'
      ]"
    >
      <slot name="prepend-label" />

      <span
        :class="{
          light: lightLabel,
          bold: boldLabel,
          'text-body-2': smallLabel,
          'text-h6': largeLabel
        }"
        v-if="!$slots.label"
      >
        {{ label }}
      </span>

      <slot name="label" />

      <slot name="append-label" />
    </div>

    <div>
      <span
        :class="{
          light: lightValue,
          bold: boldValue,
          'text-body-2': smallValue,
          'text-h6': largeValue
        }"
        v-if="!$slots.default"
      >
        <template v-if="noValue"></template>

        <template v-else-if="value === undefined || value === ''"> - </template>

        <template v-else>
          <div v-html="value" />
        </template>
      </span>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.label-wrapper {
  line-height: 1.1;
  margin-bottom: 4px;
}

.light {
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.bold {
  font-weight: 600;
}
</style>