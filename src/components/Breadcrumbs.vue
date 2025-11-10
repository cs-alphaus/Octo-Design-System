<script setup lang="ts">
interface BreadcrumbItem {
  title: string
  href?: string
  disabled?: boolean
}

defineProps({
  items: { type: Array as () => BreadcrumbItem[], required: true },
  separator: { type: String, default: '/' },
  size: { type: String, default: 'default' }
})
</script>

<template>
  <nav class="breadcrumbs">
    <ol class="breadcrumbs-list">
      <li
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="breadcrumbs-item"
      >
        <!-- Separator (not for first item) -->
        <span
          v-if="index > 0"
          class="breadcrumbs-separator"
          :class="{ 'text-caption': size === 'small', 'text-body-1': size === 'large' }"
        >
          {{ separator }}
        </span>

        <!-- Link (if not disabled and has href) -->
        <router-link
          v-if="!item.disabled && item.href"
          :to="item.href"
          class="breadcrumbs-link"
          :class="{
            'text-caption': size === 'small',
            'text-body-1': size === 'large',
            'text-body-2': size === 'default'
          }"
        >
          {{ item.title }}
        </router-link>

        <!-- Plain text (if disabled or no href) -->
        <span
          v-else
          class="breadcrumbs-text"
          :class="{
            'text-caption': size === 'small',
            'text-body-1': size === 'large',
            'text-body-2': size === 'default'
          }"
        >
          {{ item.title }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  display: inline-block;
}

.breadcrumbs-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumbs-item {
  display: flex;
  align-items: center;
}

.breadcrumbs-separator {
  margin: 0 8px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  user-select: none;
}

.breadcrumbs-link {
  color: rgba(var(--v-theme-on-surface), 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumbs-link:hover {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
}

.breadcrumbs-text {
  color: rgba(var(--v-theme-on-surface), 0.6);
}

/* Current page (last item) styling */
.breadcrumbs-item:last-child .breadcrumbs-text {
  color: rgb(var(--v-theme-on-surface));
  font-weight: 500;
}
</style>