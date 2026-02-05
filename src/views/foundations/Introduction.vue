<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h3 font-weight-bold mb-4">Octo Design System</h1>
      <p class="text-h6 text-medium-emphasis">
        A comprehensive design system documentation extracted from the Octo UI project.
      </p>
    </div>

    <!-- Hero Section -->
    <v-card class="mb-8 pa-8 text-center" color="surface-light">
      <div class="d-flex justify-center mb-4">
        <v-icon size="80" color="primary">mdi-octopus</v-icon>
      </div>
      <h2 class="text-h4 mb-4">Building Consistent Experiences</h2>
      <p class="text-body-1 mb-6 mx-auto" style="max-width: 600px;">
        This design system reverse-engineers the excellent component work from Octo UI,
        creating a living documentation of patterns, components, and design tokens.
      </p>

      <div class="d-flex justify-center gap-4 flex-wrap">
        <v-btn color="primary" variant="elevated" size="large" to="/foundations/colors">
          Explore Colors
        </v-btn>
        <v-btn variant="outlined" size="large" to="/components/custom-list-item">
          View Components
        </v-btn>
      </div>
    </v-card>

    <v-row>
      <!-- Foundations -->
      <v-col cols="12" md="4">
        <v-card class="h-100">
          <v-card-text class="pa-6">
            <v-icon size="40" color="primary" class="mb-4">mdi-palette</v-icon>
            <h3 class="text-h5 mb-3">Foundations</h3>
            <p class="text-body-2 mb-4">
              Core design elements including colors, typography, and spacing extracted from Octo's codebase.
            </p>
            <ul class="text-body-2">
              <li>Octo's exact color palette</li>
              <li>Material Design 3 integration</li>
              <li>4px spacing grid system</li>
              <li>Light/dark theme support</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Components -->
      <v-col cols="12" md="4">
        <v-card class="h-100">
          <v-card-text class="pa-6">
            <v-icon size="40" color="info" class="mb-4">mdi-view-dashboard</v-icon>
            <h3 class="text-h5 mb-3">Components</h3>
            <p class="text-body-2 mb-4">
              Reusable UI components with TypeScript support and Vuetify integration.
            </p>
            <ul class="text-body-2">
              <li>Configuration-driven component patterns</li>
              <li>Unified List Item component</li>
              <li>Complete TypeScript definitions</li>
              <li>Octo's exact component logic</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Methodology -->
      <v-col cols="12" md="4">
        <v-card class="h-100">
          <v-card-text class="pa-6">
            <v-icon size="40" color="success" class="mb-4">mdi-cog</v-icon>
            <h3 class="text-h5 mb-3">Methodology</h3>
            <p class="text-body-2 mb-4">
              Reverse-engineered approach based on existing, proven component implementations.
            </p>
            <ul class="text-body-2">
              <li>Code-first design system</li>
              <li>Extract from working components</li>
              <li>Maintain original patterns</li>
              <li>Document real usage</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Technology Stack -->
    <v-card class="mt-8">
      <v-card-title>Technology Stack</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <div class="d-flex align-center mb-2">
              <v-icon color="success" class="mr-2">mdi-vuejs</v-icon>
              <span class="font-weight-medium">Vue 3</span>
            </div>
            <p class="text-body-2">Composition API & TypeScript</p>
          </v-col>
          <v-col cols="12" md="3">
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-material-design</v-icon>
              <span class="font-weight-medium">Vuetify 3</span>
            </div>
            <p class="text-body-2">Material Design 3 & Components</p>
          </v-col>
          <v-col cols="12" md="3">
            <div class="d-flex align-center mb-2">
              <v-icon color="warning" class="mr-2">mdi-lightning-bolt</v-icon>
              <span class="font-weight-medium">Vite</span>
            </div>
            <p class="text-body-2">Fast development & build</p>
          </v-col>
          <v-col cols="12" md="3">
            <div class="d-flex align-center mb-2">
              <v-icon color="info" class="mr-2">mdi-language-typescript</v-icon>
              <span class="font-weight-medium">TypeScript</span>
            </div>
            <p class="text-body-2">Type safety & IntelliSense</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Introduction page for the Octo Design System
</script>