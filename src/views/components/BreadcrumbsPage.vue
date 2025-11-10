<template>
  <div>
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Breadcrumbs</h1>
      <p class="text-h6 text-medium-emphasis">
        Navigation breadcrumbs to show the user's location within a hierarchy.
      </p>
    </div>

    <!-- Basic Usage Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Basic Usage</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Simple breadcrumb navigation with clickable links.
      </p>

      <!-- Basic Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <Breadcrumbs :items="basicItems" />
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Breadcrumbs :items="breadcrumbItems" /&gt;

&lt;script setup&gt;
const breadcrumbItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Web App', href: '/projects/web-app' },
  { title: 'Settings' } // Current page (no href)
]
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Sizes</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Different text sizes for various UI contexts.
      </p>

      <!-- Size Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <div>
              <h4 class="text-subtitle-1 mb-2">Small</h4>
              <Breadcrumbs :items="basicItems" size="small" />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Default</h4>
              <Breadcrumbs :items="basicItems" />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Large</h4>
              <Breadcrumbs :items="basicItems" size="large" />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Breadcrumbs :items="items" size="small" /&gt;
&lt;Breadcrumbs :items="items" /&gt;
&lt;Breadcrumbs :items="items" size="large" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Custom Separators Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Custom Separators</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Use different separators between breadcrumb items.
      </p>

      <!-- Separator Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-4">
            <div>
              <h4 class="text-subtitle-1 mb-2">Default (slash)</h4>
              <Breadcrumbs :items="basicItems" />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Arrow</h4>
              <Breadcrumbs :items="basicItems" separator="→" />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Greater than</h4>
              <Breadcrumbs :items="basicItems" separator=">" />
            </div>
            <div>
              <h4 class="text-subtitle-1 mb-2">Dot</h4>
              <Breadcrumbs :items="basicItems" separator="•" />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Breadcrumbs :items="items" /&gt;
&lt;Breadcrumbs :items="items" separator="→" /&gt;
&lt;Breadcrumbs :items="items" separator="&gt;" /&gt;
&lt;Breadcrumbs :items="items" separator="•" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Disabled States Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Disabled Items</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Some breadcrumb items can be disabled to prevent navigation.
      </p>

      <!-- Disabled Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <Breadcrumbs :items="disabledItems" />
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;Breadcrumbs :items="breadcrumbItems" /&gt;

&lt;script setup&gt;
const breadcrumbItems = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Restricted Area', disabled: true },
  { title: 'Accessible Page', href: '/accessible' },
  { title: 'Current Page' }
]
&lt;/script&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Real-world Examples Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Real-world Examples</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Common usage patterns in different application contexts.
      </p>

      <!-- Real-world Examples -->
      <div class="component-example mb-4">
        <div class="example-preview">
          <div class="d-flex flex-column gap-6">
            <!-- E-commerce -->
            <div>
              <h4 class="text-h6 mb-3">E-commerce Navigation</h4>
              <Breadcrumbs :items="ecommerceItems" />
            </div>

            <!-- File System -->
            <div>
              <h4 class="text-h6 mb-3">File System Path</h4>
              <Breadcrumbs :items="fileSystemItems" separator="/" />
            </div>

            <!-- Admin Dashboard -->
            <div>
              <h4 class="text-h6 mb-3">Admin Dashboard</h4>
              <Breadcrumbs :items="adminItems" separator="→" />
            </div>

            <!-- Documentation -->
            <div>
              <h4 class="text-h6 mb-3">Documentation</h4>
              <Breadcrumbs :items="docsItems" size="small" />
            </div>
          </div>
        </div>

        <details class="code-section">
          <summary class="code-toggle">
            <v-icon size="16" class="mr-2">mdi-chevron-right</v-icon>
            <span>View code</span>
          </summary>
          <div class="code-content">
            <pre class="code-block"><code>&lt;!-- E-commerce --&gt;
&lt;Breadcrumbs :items="[
  { title: 'Home', href: '/' },
  { title: 'Electronics', href: '/electronics' },
  { title: 'Laptops', href: '/electronics/laptops' },
  { title: 'MacBook Pro' }
]" /&gt;

&lt;!-- File System --&gt;
&lt;Breadcrumbs :items="[
  { title: 'Users', href: '/users' },
  { title: 'john', href: '/users/john' },
  { title: 'Documents', href: '/users/john/documents' },
  { title: 'project.pdf' }
]" separator="/" /&gt;</code></pre>
          </div>
        </details>
      </div>
    </section>

    <!-- Integration with Router Section -->
    <section class="mb-12">
      <h2 class="text-h4 mb-4">Integration Tips</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Best practices for integrating breadcrumbs into your application.
      </p>

      <div class="d-flex flex-column gap-4">
        <v-alert type="info" variant="tonal">
          <v-icon icon="mdi-lightbulb" class="mr-2" />
          <strong>Router Integration:</strong> Breadcrumbs work seamlessly with Vue Router. Use route paths as href values.
        </v-alert>

        <v-alert type="success" variant="tonal">
          <v-icon icon="mdi-check-circle" class="mr-2" />
          <strong>Accessibility:</strong> The component uses semantic HTML with <code>&lt;nav&gt;</code> and <code>&lt;ol&gt;</code> elements for better screen reader support.
        </v-alert>

        <v-alert type="warning" variant="tonal">
          <v-icon icon="mdi-alert" class="mr-2" />
          <strong>Current Page:</strong> The last breadcrumb item (current page) should not have an href to indicate it's not clickable.
        </v-alert>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-12">
      <h2 class="text-h4 mb-6">API Reference</h2>

      <!-- Props Table -->
      <div class="api-section mb-6">
        <h3 class="text-h5 mb-4">Props</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Prop</div>
            <div class="api-col">Type</div>
            <div class="api-col">Default</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="prop in breadcrumbsProps" :key="prop.name">
            <div class="api-col">
              <code>{{ prop.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ prop.type }}</span>
            </div>
            <div class="api-col">
              <span class="api-default">{{ prop.default || '-' }}</span>
            </div>
            <div class="api-col">{{ prop.description }}</div>
          </div>
        </div>
      </div>

      <!-- BreadcrumbItem Type -->
      <div class="api-section">
        <h3 class="text-h5 mb-4">BreadcrumbItem Type</h3>
        <div class="api-table">
          <div class="api-row api-header">
            <div class="api-col">Property</div>
            <div class="api-col">Type</div>
            <div class="api-col">Required</div>
            <div class="api-col">Description</div>
          </div>

          <div class="api-row" v-for="prop in breadcrumbItemProps" :key="prop.name">
            <div class="api-col">
              <code>{{ prop.name }}</code>
            </div>
            <div class="api-col">
              <span class="api-type">{{ prop.type }}</span>
            </div>
            <div class="api-col">
              <span class="api-default">{{ prop.required }}</span>
            </div>
            <div class="api-col">{{ prop.description }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Breadcrumbs } from '@/components'

// Example data
const basicItems = [
  { title: 'Home', href: '/foundations/introduction' },
  { title: 'Components', href: '/components/button' },
  { title: 'Navigation', href: '/components/breadcrumbs' },
  { title: 'Breadcrumbs' }
]

const disabledItems = [
  { title: 'Dashboard', href: '/foundations/introduction' },
  { title: 'Restricted Area', disabled: true },
  { title: 'Accessible Page', href: '/components/button' },
  { title: 'Current Page' }
]

const ecommerceItems = [
  { title: 'Home', href: '/' },
  { title: 'Electronics', href: '/electronics' },
  { title: 'Laptops', href: '/electronics/laptops' },
  { title: 'MacBook Pro 16"' }
]

const fileSystemItems = [
  { title: 'Users', href: '/users' },
  { title: 'john', href: '/users/john' },
  { title: 'Documents', href: '/users/john/documents' },
  { title: 'project.pdf' }
]

const adminItems = [
  { title: 'Admin', href: '/admin' },
  { title: 'User Management', href: '/admin/users' },
  { title: 'Permissions', href: '/admin/users/permissions' },
  { title: 'Role Settings' }
]

const docsItems = [
  { title: 'Documentation', href: '/docs' },
  { title: 'Components', href: '/docs/components' },
  { title: 'Navigation', href: '/docs/components/navigation' },
  { title: 'Breadcrumbs API' }
]

const breadcrumbsProps = [
  {
    name: 'items',
    type: 'BreadcrumbItem[]',
    default: '-',
    description: 'Array of breadcrumb items - required'
  },
  {
    name: 'separator',
    type: 'string',
    default: '/',
    description: 'Character(s) used to separate breadcrumb items'
  },
  {
    name: 'size',
    type: "'small' | 'default' | 'large'",
    default: 'default',
    description: 'Text size for breadcrumb items'
  }
]

const breadcrumbItemProps = [
  {
    name: 'title',
    type: 'string',
    required: 'Yes',
    description: 'Display text for the breadcrumb item'
  },
  {
    name: 'href',
    type: 'string',
    required: 'No',
    description: 'Router path for navigation (omit for current page)'
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: 'No',
    description: 'Disable the item (prevents clicking even with href)'
  }
]
</script>

<style scoped>
code {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
}
</style>