<template>
    <div>
        <div class="mb-8">
            <h1 class="text-h4 font-weight-bold mb-4">Dialog</h1>
            <p class="text-body-1 mb-6">
                About dialog component
            </p>
        </div>

        <!-- Display Chips - All Available Props -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Confirmation dialogs</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                A confirmation message will be shown before user can execute any actions
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Colors (variant="tonal")</p>
                        <v-btn color="error" variant="tonal" @click="confirmationDialogDemo = true">
                            Open Confirmation Demo
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
            
            <!-- Dialog code -->
            <v-dialog v-model="confirmationDialogDemo" width="400">
                <v-card rounded="xl">
                    <v-card-title class="">Delete item</v-card-title>
                    <v-sheet class="d-flex align-center pa-4">
                        <div class="pr-4">
                            <v-icon icon="mdi-alert-circle" color="error" size="48"/>
                        </div>
                        <div>
                            <span>Are you sure you want to delete this item? This action cannot be undone.</span>
                        </div>
                    </v-sheet>
                    <v-card-actions class="pa-4">
                        <div class="w-100 d-flex">
                            <div class="mr-2 w-50">
                                <v-btn prepend-icon="$close" variant="tonal" :block="true" @click="confirmationDialogDemo = false">Cancel</v-btn>
                            </div>
                            <div class="w-50">
                                <v-btn prepend-icon="$trash" variant="tonal" color="error" :block="true" @click="confirmationDialogDemo = false">Delete</v-btn>
                            </div>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showDisplayCode = !showDisplayCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showDisplayCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showDisplayCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedDisplayCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Reactive variables for dialog and code display
const confirmationDialogDemo = ref(false)
const showDisplayCode = ref(false)

// Code example
const displayCodeExample = `<template>
  <v-btn color="error" variant="tonal" @click="dialog = true">
    Open Confirmation
  </v-btn>

  <v-dialog v-model="dialog" width="400">
    <v-card rounded="xl">
      <v-card-title>Delete item</v-card-title>
      <v-sheet class="d-flex align-center pa-6">
        <div class="pr-6">
          <v-icon icon="mdi-alert-circle" color="error" size="48"/>
        </div>
        <div>
          <span>Are you sure you want to delete this item? This action cannot be undone.</span>
        </div>
      </v-sheet>
      <v-card-actions>
        <div class="w-100 d-flex">
          <div class="mr-2 w-50">
            <v-btn prepend-icon="$close" variant="tonal" :block="true" @click="dialog = false">
              Cancel
            </v-btn>
          </div>
          <div class="w-50">
            <v-btn prepend-icon="$trash" variant="tonal" color="error" :block="true" @click="dialog = false">
              Delete
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// Computed property for code display
const highlightedDisplayCode = computed(() =>
  displayCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)
</script>

<style scoped>
.code-block {
  background: #1e1e1e !important;
  color: #d4d4d4;
  overflow-x: auto;
  border-radius: 8px;
}
</style>