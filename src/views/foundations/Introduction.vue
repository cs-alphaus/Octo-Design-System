<template>
  <div>
    <!-- Hero Section -->
    <v-card class="hero-section mb-12 pa-12 text-center" elevation="2">
      <!-- Animated Octopus -->
      <div class="octopus-container mb-6">
        <v-icon class="octopus-icon floating" size="120" color="primary">mdi-octopus</v-icon>
      </div>

      <!-- Hero Text -->
      <h1 class="text-h2 font-weight-bold mb-4">
        Welcome to Octo Design System
      </h1>
      <p class="text-h5 mb-2">
        Eight tentacles, infinite possibilities
      </p>
      <p class="text-body-1 mb-8 mx-auto text-medium-emphasis" style="max-width: 700px;">
        Dive deep into our living design system — reverse-engineered from real production code,
        documented with love, and ready to power your next project. No fluff, just the good stuff.
      </p>

      <!-- CTA Buttons -->
      <div class="d-flex justify-center gap-4 flex-wrap mb-8">
        <v-btn
          color="primary"
          variant="elevated"
          size="x-large"
          to="/foundations/colors"
          class="px-8 cta-button"
        >
          <v-icon start>mdi-palette</v-icon>
          Explore Foundations
        </v-btn>
        <v-btn
          color="primary"
          variant="outlined"
          size="x-large"
          to="/components/custom-list-item"
          class="px-8 cta-button"
        >
          <v-icon start>mdi-view-dashboard</v-icon>
          Browse Components
        </v-btn>
      </div>

      <!-- Quick Stats -->
      <v-row class="stats-row justify-center">
        <v-col cols="6" sm="3">
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Components</div>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">Design Tokens</div>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">Themes</div>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">TypeScript</div>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- What's Inside Section -->
    <div class="mb-12">
      <h2 class="text-h3 font-weight-bold mb-2 text-center">What's Inside</h2>
      <p class="text-center text-body-1 text-medium-emphasis mb-8">
        Everything you need to build consistent, beautiful interfaces
      </p>

      <v-row>
        <!-- Foundations Card -->
        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" hover>
            <v-card-text class="pa-8">
              <div class="feature-icon-wrapper mb-4">
                <v-icon size="48" color="primary">mdi-palette</v-icon>
              </div>
              <h3 class="text-h4 mb-3 font-weight-bold">Foundations</h3>
              <p class="text-body-1 mb-4 text-medium-emphasis">
                The building blocks that make everything work together seamlessly
              </p>
              <v-list density="compact" class="feature-list bg-transparent">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Complete color system with light & dark modes
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Material Design 3 typography scale
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    4px grid spacing system
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Semantic color tokens
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <v-btn
                color="primary"
                variant="text"
                to="/foundations/colors"
                class="mt-4"
                append-icon="mdi-arrow-right"
              >
                Explore Foundations
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Components Card -->
        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" hover>
            <v-card-text class="pa-8">
              <div class="feature-icon-wrapper mb-4">
                <v-icon size="48" color="info">mdi-view-dashboard</v-icon>
              </div>
              <h3 class="text-h4 mb-3 font-weight-bold">Components</h3>
              <p class="text-body-1 mb-4 text-medium-emphasis">
                Production-ready components extracted from real projects
              </p>
              <v-list density="compact" class="feature-list bg-transparent">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Configuration-driven patterns
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Full TypeScript definitions
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Vuetify 3 integration
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Copy-paste ready examples
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <v-btn
                color="info"
                variant="text"
                to="/components/custom-list-item"
                class="mt-4"
                append-icon="mdi-arrow-right"
              >
                Browse Components
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Methodology Card -->
        <v-col cols="12" md="4">
          <v-card class="feature-card h-100" hover>
            <v-card-text class="pa-8">
              <div class="feature-icon-wrapper mb-4">
                <v-icon size="48" color="success">mdi-cog</v-icon>
              </div>
              <h3 class="text-h4 mb-3 font-weight-bold">Our Approach</h3>
              <p class="text-body-1 mb-4 text-medium-emphasis">
                Code-first methodology that captures what actually works
              </p>
              <v-list density="compact" class="feature-list bg-transparent">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Reverse-engineered from production
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Battle-tested patterns
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Living documentation
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    Real-world examples
                  </v-list-item-title>
                </v-list-item>
              </v-list>
              <v-btn
                color="success"
                variant="text"
                href="https://github.com/alphaus-cloud/octo-ui"
                target="_blank"
                class="mt-4"
                append-icon="mdi-open-in-new"
              >
                View on GitHub
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Technology Stack -->
    <v-card class="mb-12" elevation="2">
      <v-card-text class="pa-8">
        <h2 class="text-h3 font-weight-bold mb-2 text-center">Built With Modern Tech</h2>
        <p class="text-center text-body-1 text-medium-emphasis mb-8">
          Standing on the shoulders of giants
        </p>

        <v-row>
          <v-col cols="6" md="3">
            <div class="tech-item text-center">
              <v-icon size="64" color="success" class="mb-3">mdi-vuejs</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Vue 3</h4>
              <p class="text-body-2 text-medium-emphasis">
                Composition API & Reactivity
              </p>
            </div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="tech-item text-center">
              <v-icon size="64" color="primary" class="mb-3">mdi-material-design</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Vuetify 3</h4>
              <p class="text-body-2 text-medium-emphasis">
                Material Design 3 Components
              </p>
            </div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="tech-item text-center">
              <v-icon size="64" color="warning" class="mb-3">mdi-lightning-bolt</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">Vite</h4>
              <p class="text-body-2 text-medium-emphasis">
                Lightning-Fast HMR
              </p>
            </div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="tech-item text-center">
              <v-icon size="64" color="info" class="mb-3">mdi-language-typescript</v-icon>
              <h4 class="text-h6 font-weight-bold mb-2">TypeScript</h4>
              <p class="text-body-2 text-medium-emphasis">
                Type Safety & IntelliSense
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Getting Started CTA -->
    <v-card class="pa-12 text-center" color="surface-variant" elevation="2">
      <v-icon size="64" color="primary" class="mb-4 floating-slow">mdi-rocket-launch</v-icon>
      <h2 class="text-h3 font-weight-bold mb-4">Ready to Dive In?</h2>
      <p class="text-h6 mb-8 mx-auto text-medium-emphasis" style="max-width: 600px;">
        Start exploring our foundations, browse components, or jump straight into code examples
      </p>
      <div class="d-flex justify-center gap-4 flex-wrap">
        <v-btn
          color="primary"
          variant="elevated"
          size="x-large"
          to="/foundations/colors"
          class="px-8"
        >
          Get Started
        </v-btn>
        <v-btn
          color="primary"
          variant="outlined"
          size="x-large"
          href="https://github.com/alphaus-cloud/octo-ui"
          target="_blank"
          class="px-8"
        >
          View Source
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Enhanced Introduction page with personality and animations
</script>

<style scoped>
/* Hero Section Styles */
.hero-section {
  border-radius: 16px !important;
}

/* Octopus Animation */
.octopus-container {
  position: relative;
  display: inline-block;
}

.floating {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floating-slow {
  animation: float 4s ease-in-out infinite;
}

/* CTA Buttons */
.cta-button {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

/* Stats Section */
.stats-row {
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid rgb(var(--v-theme-surface-variant));
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 8px;
  color: rgb(var(--v-theme-primary));
}

.stat-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface-variant));
}

/* Feature Cards */
.feature-card {
  transition: all 0.3s ease;
  border-radius: 12px !important;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgb(var(--v-theme-surface-variant));
  border-radius: 20px;
}

.feature-list .v-list-item {
  padding-left: 0 !important;
  min-height: 36px !important;
}

/* Tech Stack */
.tech-item {
  padding: 16px;
  transition: transform 0.2s ease;
}

.tech-item:hover {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .hero-section {
    padding: 48px 24px !important;
  }

  .stat-number {
    font-size: 2rem;
  }

  .text-h2 {
    font-size: 2.5rem !important;
  }

  .text-h3 {
    font-size: 2rem !important;
  }
}

@media (max-width: 600px) {
  .stats-row {
    margin-top: 32px;
    padding-top: 32px;
  }

  .stat-number {
    font-size: 1.75rem;
  }
}
</style>