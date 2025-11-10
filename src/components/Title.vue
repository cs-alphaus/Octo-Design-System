<script setup lang="ts">
defineProps({
  title: [String, Number],
  subtitle: [String, Number],
  noBottomMargin: Boolean,
  noRightPadding: Boolean,
  light: Boolean,
  bold: Boolean,
  mediumBold: Boolean,
  small: Boolean,
  large: Boolean,
  xLarge: Boolean,
  xxLarge: Boolean
})
</script>

<template>
  <div
    :class="[
      'd-flex',
      'align-center',
      'title-wrapper',
      { 'mb-0': noBottomMargin }
    ]"
  >
    <slot name="prepend" />

    <div>
      <div class="d-flex align-center">
        <slot name="prepend-title" />

        <span
          :class="{
            'text-medium-emphasis': light,
            'font-weight-bold': bold,
            'font-weight-medium': mediumBold,
            'text-body-2': small,
            'text-h6': large,
            'text-h5': xLarge,
            'text-h4': xxLarge,
            'pr-4': !noRightPadding
          }"
          v-if="!$slots.default"
        >
          {{ title }}
        </span>

        <slot />

        <slot name="append-title" />
      </div>

      <div class="text-body-2 text-medium-emphasis" v-if="subtitle && !$slots.subtitle">
        {{ subtitle }}
      </div>

      <slot name="subtitle" />
    </div>

    <v-spacer />

    <div>
      <slot name="append" />
    </div>
  </div>
</template>

<style scoped>
.title-wrapper {
  margin-bottom: 8px;
}
</style>