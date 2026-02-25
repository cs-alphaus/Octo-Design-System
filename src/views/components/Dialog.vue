<template>
    <div>
        <div class="mb-8">
            <h1 class="text-h4 font-weight-bold mb-4">Dialog</h1>
            <p class="text-body-1 mb-6">
                About dialog component
            </p>
        </div>

        <!-- Confirmational dialog -->
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
                    <div class="d-flex justify-center pt-4">
                        <v-icon icon="mdi-alert-circle" color="error" size="64"></v-icon>
                    </div>
                    <v-sheet class="d-flex flex-column text-center pa-4">
                        <p class="text-h6">Delete item</p>
                        <p class="text-body-1">Are you sure you want to delete this item? This action cannot be undone.</p>
                    </v-sheet>
                    <v-card-actions class="pa-4 ga-2">
                        <v-btn class="flex-grow-1" prepend-icon="mdi-close" variant="tonal" @click="confirmationDialogDemo = false">Cancel</v-btn>
                        <v-btn class="flex-grow-1" prepend-icon="mdi-trash-can" variant="flat" color="error" @click="confirmationDialogDemo = false">Delete</v-btn>
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

        <!-- Form Modal Dialog -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Medium size dialogs</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                A 560px width form dialog with header, content area, and action buttons. Suitable for forms with multiple fields and complex actions.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Medium dialog (560px width)</p>
                        <v-btn color="primary" variant="tonal" @click="formDialogDemo = true">
                            Open Medium Dialog
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Medium sized dialog -->
            <v-dialog v-model="formDialogDemo" width="560">
                <v-card rounded="xl">
                    <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
                        <v-icon icon="mdi-account-edit" class="mr-3" />
                        <span class="text-h5">Edit Profile</span>
                        <v-spacer />
                        <v-chip prepend-icon="mdi-book-open-variant" rounded="lg" color="secondary" variant="tonal" size="small" density="default">
                            Read about how this optimization works
                        </v-chip>
                        <v-btn icon="$close" variant="text" @click="formDialogDemo = false" />
                    </v-card-title>

                    <v-divider />

                    <v-card-text class="pa-6">
                        <v-text-field label="Name" placeholder="Enter your name" class="mb-4" />
                        <v-text-field label="Email" placeholder="Enter your email" class="mb-4" />
                        <v-textarea label="Bio" placeholder="Tell us about yourself" rows="3" />
                    </v-card-text>

                    <v-divider />

                    <v-card-actions class="py-4 px-6">
                        <v-btn class="" @click="formDialogDemo = false" prepend-icon="mdi-close">Cancel</v-btn>
                        <v-spacer />
                        <v-btn class="" variant="tonal" color="primary" @click="formDialogDemo = false" prepend-icon="mdi-reload">Reset data</v-btn>
                        <v-btn class="" variant="flat" color="primary" @click="formDialogDemo = false" prepend-icon="mdi-check">Confirm</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showFormCode = !showFormCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showFormCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showFormCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedFormCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Large Dialog -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Large dialogs</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                An 800px width dialog for complex forms with multiple sections or detailed content.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Large dialog (800px width)</p>
                        <v-btn color="primary" variant="tonal" @click="largeDialogDemo = true">
                            Open Large Dialog
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Large sized dialog -->
            <v-dialog v-model="largeDialogDemo" width="800">
                <v-card rounded="xl">
                    <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
                        <v-icon icon="mdi-cog" class="mr-3" />
                        <span class="text-h5">Settings</span>
                        <v-spacer />
                        <v-btn icon="$close" variant="text" @click="largeDialogDemo = false" />
                    </v-card-title>

                    <v-divider />

                    <v-card-text class="pa-6">
                        <div class="mb-6">
                            <h3 class="text-h6 mb-4">Account Settings</h3>
                            <v-text-field label="Username" placeholder="Enter username" class="mb-4" />
                            <v-text-field label="Email" placeholder="Enter email" class="mb-4" />
                            <v-text-field label="Phone" placeholder="Enter phone number" />
                        </div>
                        <div class="mb-6">
                            <h3 class="text-h6 mb-4">Preferences</h3>
                            <v-select label="Language" :items="['English', 'Japanese', 'Chinese']" class="mb-4" />
                            <v-select label="Timezone" :items="['UTC', 'JST', 'PST']" class="mb-4" />
                            <v-select label="Theme" :items="['Light', 'Dark', 'Auto']" />
                        </div>
                    </v-card-text>

                    <v-divider />

                    <v-card-actions class="py-4 px-6">
                        <v-btn prepend-icon="mdi-close" @click="largeDialogDemo = false">Cancel</v-btn>
                        <v-spacer />
                        <v-btn prepend-icon="mdi-reload" variant="tonal" color="primary" @click="largeDialogDemo = false">
                            Reset
                        </v-btn>
                        <v-btn prepend-icon="mdi-check" variant="flat" color="primary" @click="largeDialogDemo = false">
                            Save Changes
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showLargeCode = !showLargeCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showLargeCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showLargeCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedLargeCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- X-Large Dialog -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">X-Large dialogs</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                A 1000px width dialog for comprehensive forms with multi-column layouts or extensive content.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">X-Large dialog (1000px width)</p>
                        <v-btn color="primary" variant="tonal" @click="xlargeDialogDemo = true">
                            Open X-Large Dialog
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>

            <!-- X-Large sized dialog -->
            <v-dialog v-model="xlargeDialogDemo" width="1000">
                <v-card rounded="xl">
                    <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
                        <v-icon icon="mdi-file-document-edit" class="mr-3" />
                        <span class="text-h5">Create New Project</span>
                        <v-spacer />
                        <v-btn icon="$close" variant="text" @click="xlargeDialogDemo = false" />
                    </v-card-title>

                    <v-divider />

                    <v-card-text class="pa-6">
                        <v-row>
                            <v-col cols="6">
                                <h3 class="text-h6 mb-4">Project Details</h3>
                                <v-text-field label="Project Name" placeholder="Enter project name" class="mb-4" />
                                <v-text-field label="Project Code" placeholder="Enter project code" class="mb-4" />
                                <v-select label="Category" :items="['Development', 'Design', 'Marketing']" class="mb-4" />
                                <v-select label="Priority" :items="['Low', 'Medium', 'High']" />
                            </v-col>
                            <v-col cols="6">
                                <h3 class="text-h6 mb-4">Configuration</h3>
                                <v-text-field label="Budget" placeholder="Enter budget" class="mb-4" />
                                <v-text-field label="Start Date" type="date" class="mb-4" />
                                <v-text-field label="End Date" type="date" class="mb-4" />
                                <v-select label="Team Size" :items="['1-5', '6-10', '11-20', '20+']" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea label="Description" placeholder="Enter project description" rows="4" />
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider />

                    <v-card-actions class="py-4 px-6">
                        <v-btn prepend-icon="mdi-close" @click="xlargeDialogDemo = false">Cancel</v-btn>
                        <v-spacer />
                        <v-btn prepend-icon="mdi-content-save-outline" variant="tonal" color="primary" @click="xlargeDialogDemo = false">
                            Save as Draft
                        </v-btn>
                        <v-btn prepend-icon="mdi-check-circle" variant="flat" color="primary" @click="xlargeDialogDemo = false">
                            Create Project
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showXLargeCode = !showXLargeCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showXLargeCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showXLargeCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedXLargeCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Overflow Dialog -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Overflow dialogs</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                A dialog with scrollable content area when content exceeds the viewport height. Uses max-height and overflow-y for scrolling.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Dialog with overflow content (560px width)</p>
                        <v-btn color="primary" variant="tonal" @click="overflowDialogDemo = true">
                            Open Overflow Dialog
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Overflow dialog -->
            <v-dialog v-model="overflowDialogDemo" width="560">
                <v-card rounded="xl">
                    <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
                        <v-icon icon="mdi-file-document" class="mr-3" />
                        <span class="text-h5">Terms and Conditions</span>
                        <v-spacer />
                        <v-btn icon="$close" variant="text" @click="overflowDialogDemo = false" />
                    </v-card-title>

                    <v-divider />

                    <v-card-text class="pa-6" style="max-height: 400px; overflow-y: auto;">
                        <h3 class="text-h6 mb-3">1. Introduction</h3>
                        <p class="text-body-2 mb-4">
                            Welcome to our service. By using our platform, you agree to these terms and conditions.
                            Please read them carefully before proceeding.
                        </p>

                        <h3 class="text-h6 mb-3">2. User Responsibilities</h3>
                        <p class="text-body-2 mb-4">
                            Users are responsible for maintaining the confidentiality of their account credentials.
                            You must notify us immediately of any unauthorized access to your account.
                        </p>

                        <h3 class="text-h6 mb-3">3. Privacy Policy</h3>
                        <p class="text-body-2 mb-4">
                            We collect and process your personal data in accordance with applicable data protection laws.
                            Your information is used solely for providing our services and will not be shared with third parties
                            without your consent.
                        </p>

                        <h3 class="text-h6 mb-3">4. Service Usage</h3>
                        <p class="text-body-2 mb-4">
                            Our service is provided "as is" without warranties of any kind. We reserve the right to modify,
                            suspend, or discontinue any part of our service at any time.
                        </p>

                        <h3 class="text-h6 mb-3">5. Intellectual Property</h3>
                        <p class="text-body-2 mb-4">
                            All content, trademarks, and data on this platform are the property of our company or our licensors.
                            Unauthorized use is strictly prohibited.
                        </p>

                        <h3 class="text-h6 mb-3">6. Limitation of Liability</h3>
                        <p class="text-body-2 mb-4">
                            We shall not be liable for any indirect, incidental, or consequential damages arising from your use
                            of our service.
                        </p>

                        <h3 class="text-h6 mb-3">7. Termination</h3>
                        <p class="text-body-2 mb-4">
                            We reserve the right to terminate or suspend your account at our discretion if you violate these terms.
                        </p>
                    </v-card-text>

                    <v-divider />

                    <v-card-actions class="py-4 px-6">
                        <v-btn prepend-icon="mdi-close" @click="overflowDialogDemo = false">Decline</v-btn>
                        <v-spacer />
                        <v-btn prepend-icon="mdi-check" variant="flat" color="primary" @click="overflowDialogDemo = false">
                            Accept
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showOverflowCode = !showOverflowCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showOverflowCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showOverflowCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedOverflowCode"></pre>
                        </div>
                    </v-expand-transition>
                </v-card-text>
            </v-card>
        </div>

        <!-- Single Button Dialog -->
        <div class="mb-8">
            <h2 class="text-h5 font-weight-medium mb-4">Single action dialogs</h2>
            <p class="text-body-2 mb-4 text-medium-emphasis">
                A dialog with a single action button, typically used for notifications or information displays.
            </p>

            <!-- Live Example -->
            <v-card class="mb-4">
                <v-card-text>
                    <div class="mb-4">
                        <p class="text-caption font-weight-medium mb-2">Dialog with single action (560px width)</p>
                        <v-btn color="primary" variant="tonal" @click="singleButtonDialogDemo = true">
                            Open Single Action Dialog
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>

            <!-- Single button dialog -->
            <v-dialog v-model="singleButtonDialogDemo" width="560">
                <v-card rounded="xl">
                    <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
                        <v-icon icon="mdi-information" class="mr-3" />
                        <span class="text-h5">System Update</span>
                        <v-spacer />
                        <v-btn icon="$close" variant="text" @click="singleButtonDialogDemo = false" />
                    </v-card-title>

                    <v-divider />

                    <v-card-text class="pa-6">
                        <p class="text-body-1 mb-4">
                            A new system update is available. This update includes performance improvements,
                            security patches, and new features.
                        </p>
                        <v-alert color="info" variant="tonal" class="mb-0">
                            <p class="text-body-2 mb-2"><strong>Version:</strong> 2.5.0</p>
                            <p class="text-body-2 mb-2"><strong>Release Date:</strong> February 25, 2026</p>
                            <p class="text-body-2 mb-0"><strong>Size:</strong> 125 MB</p>
                        </v-alert>
                    </v-card-text>

                    <v-divider />

                    <v-card-actions class="py-4 px-6">
                        <v-btn block prepend-icon="mdi-check" variant="tonal" color="secondary" @click="singleButtonDialogDemo = false">
                            Got it
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Code Section -->
            <v-card>
                <v-card-text class="pa-0">
                    <v-btn @click="showSingleButtonCode = !showSingleButtonCode" variant="text" prepend-icon="mdi-code-tags"
                        class="ma-4">
                        {{ showSingleButtonCode ? 'Hide code' : 'Show code' }}
                    </v-btn>

                    <v-expand-transition>
                        <div v-if="showSingleButtonCode">
                            <v-divider />
                            <pre class="pa-4 text-caption code-block" v-html="highlightedSingleButtonCode"></pre>
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
const formDialogDemo = ref(false)
const showFormCode = ref(false)
const largeDialogDemo = ref(false)
const showLargeCode = ref(false)
const xlargeDialogDemo = ref(false)
const showXLargeCode = ref(false)
const overflowDialogDemo = ref(false)
const showOverflowCode = ref(false)
const singleButtonDialogDemo = ref(false)
const showSingleButtonCode = ref(false)

// Code example
const displayCodeExample = `<template>
  <v-btn color="error" variant="tonal" @click="dialog = true">
    Open Confirmation Demo
  </v-btn>

  <v-dialog v-model="dialog" width="400">
    <v-card rounded="xl">
      <div class="d-flex justify-center pt-4">
        <v-icon icon="mdi-alert-circle" color="error" size="64"></v-icon>
      </div>
      <v-sheet class="d-flex flex-column text-center pa-4">
        <p class="text-h6 font-weight-medium mb-2">Delete item</p>
        <p class="text-body-2">Are you sure you want to delete this item? This action cannot be undone.</p>
      </v-sheet>
      <v-card-actions class="pa-4 ga-2">
        <v-btn class="flex-grow-1" prepend-icon="mdi-close" variant="tonal" @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn class="flex-grow-1" prepend-icon="mdi-trash-can" variant="flat" color="error" @click="dialog = false">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// Medium size dialog code example
const formCodeExample = `<template>
  <v-btn color="primary" variant="tonal" @click="dialog = true">
    Open Medium Dialog
  </v-btn>

  <v-dialog v-model="dialog" width="560">
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
        <v-icon icon="mdi-account-edit" class="mr-3" />
        <span class="text-h5">Edit Profile</span>
        <v-spacer />
        <v-chip
          prepend-icon="mdi-book-open-variant"
          rounded="lg"
          color="secondary"
          variant="tonal"
          size="small"
        >
          Read about how this optimization works
        </v-chip>
        <v-btn icon="$close" variant="text" @click="dialog = false" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-6">
        <v-text-field label="Name" placeholder="Enter your name" class="mb-4" />
        <v-text-field label="Email" placeholder="Enter your email" class="mb-4" />
        <v-textarea label="Bio" placeholder="Tell us about yourself" rows="3" />
      </v-card-text>

      <v-divider />

      <v-card-actions class="py-4 px-4">
        <v-btn prepend-icon="mdi-close" @click="dialog = false">Cancel</v-btn>
        <v-spacer />
        <v-btn prepend-icon="mdi-reload" variant="tonal" color="primary" @click="dialog = false">
          Reset data
        </v-btn>
        <v-btn prepend-icon="mdi-check" variant="flat" color="primary" @click="dialog = false">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// Large dialog code example
const largeCodeExample = `<template>
  <v-btn color="primary" variant="tonal" @click="dialog = true">
    Open Large Dialog
  </v-btn>

  <v-dialog v-model="dialog" width="800">
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
        <v-icon icon="mdi-cog" class="mr-3" />
        <span class="text-h5">Settings</span>
        <v-spacer />
        <v-btn icon="$close" variant="text" @click="dialog = false" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-6">
        <div class="mb-6">
          <h3 class="text-h6 mb-4">Account Settings</h3>
          <v-text-field label="Username" placeholder="Enter username" class="mb-4" />
          <v-text-field label="Email" placeholder="Enter email" class="mb-4" />
          <v-text-field label="Phone" placeholder="Enter phone number" />
        </div>
        <div class="mb-6">
          <h3 class="text-h6 mb-4">Preferences</h3>
          <v-select label="Language" :items="['English', 'Japanese', 'Chinese']" class="mb-4" />
          <v-select label="Timezone" :items="['UTC', 'JST', 'PST']" class="mb-4" />
          <v-select label="Theme" :items="['Light', 'Dark', 'Auto']" />
        </div>
      </v-card-text>

      <v-divider />

      <v-card-actions class="py-4 px-4">
        <v-btn prepend-icon="mdi-close" @click="dialog = false">Cancel</v-btn>
        <v-spacer />
        <v-btn prepend-icon="mdi-reload" variant="tonal" color="primary" @click="dialog = false">
          Reset
        </v-btn>
        <v-btn prepend-icon="mdi-check" variant="flat" color="primary" @click="dialog = false">
          Save Changes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// X-Large dialog code example
const xlargeCodeExample = `<template>
  <v-btn color="primary" variant="tonal" @click="dialog = true">
    Open X-Large Dialog
  </v-btn>

  <v-dialog v-model="dialog" width="1000">
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
        <v-icon icon="mdi-file-document-edit" class="mr-3" />
        <span class="text-h5">Create New Project</span>
        <v-spacer />
        <v-btn icon="$close" variant="text" @click="dialog = false" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-6">
        <v-row>
          <v-col cols="6">
            <h3 class="text-h6 mb-4">Project Details</h3>
            <v-text-field label="Project Name" placeholder="Enter project name" class="mb-4" />
            <v-text-field label="Project Code" placeholder="Enter project code" class="mb-4" />
            <v-select label="Category" :items="['Development', 'Design', 'Marketing']" class="mb-4" />
            <v-select label="Priority" :items="['Low', 'Medium', 'High']" />
          </v-col>
          <v-col cols="6">
            <h3 class="text-h6 mb-4">Configuration</h3>
            <v-text-field label="Budget" placeholder="Enter budget" class="mb-4" />
            <v-text-field label="Start Date" type="date" class="mb-4" />
            <v-text-field label="End Date" type="date" class="mb-4" />
            <v-select label="Team Size" :items="['1-5', '6-10', '11-20', '20+']" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea label="Description" placeholder="Enter project description" rows="4" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />

      <v-card-actions class="py-4 px-4">
        <v-btn prepend-icon="mdi-close" @click="dialog = false">Cancel</v-btn>
        <v-spacer />
        <v-btn prepend-icon="mdi-content-save-outline" variant="tonal" color="primary" @click="dialog = false">
          Save as Draft
        </v-btn>
        <v-btn prepend-icon="mdi-check-circle" variant="flat" color="primary" @click="dialog = false">
          Create Project
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// Overflow dialog code example
const overflowCodeExample = `<template>
  <v-btn color="primary" variant="tonal" @click="dialog = true">
    Open Overflow Dialog
  </v-btn>

  <v-dialog v-model="dialog" width="560">
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
        <v-icon icon="mdi-file-document" class="mr-3" />
        <span class="text-h5">Terms and Conditions</span>
        <v-spacer />
        <v-btn icon="$close" variant="text" @click="dialog = false" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-6" style="max-height: 400px; overflow-y: auto;">
        <h3 class="text-h6 mb-3">1. Introduction</h3>
        <p class="text-body-2 mb-4">
          Welcome to our service. By using our platform, you agree to these terms and conditions.
        </p>

        <h3 class="text-h6 mb-3">2. User Responsibilities</h3>
        <p class="text-body-2 mb-4">
          Users are responsible for maintaining the confidentiality of their account credentials.
        </p>

        <!-- Additional sections... -->
      </v-card-text>

      <v-divider />

      <v-card-actions class="py-4 px-6">
        <v-btn prepend-icon="mdi-close" @click="dialog = false">Decline</v-btn>
        <v-spacer />
        <v-btn prepend-icon="mdi-check" variant="flat" color="primary" @click="dialog = false">
          Accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// Single button dialog code example
const singleButtonCodeExample = `<template>
  <v-btn color="primary" variant="tonal" @click="dialog = true">
    Open Single Action Dialog
  </v-btn>

  <v-dialog v-model="dialog" width="560">
    <v-card rounded="xl">
      <v-card-title class="d-flex align-center py-4 pr-3 pl-6">
        <v-icon icon="mdi-information" class="mr-3" />
        <span class="text-h5">System Update</span>
        <v-spacer />
        <v-btn icon="$close" variant="text" @click="dialog = false" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-6">
        <p class="text-body-1 mb-4">
          A new system update is available. This update includes performance improvements,
          security patches, and new features.
        </p>
        <v-alert color="info" variant="tonal" class="mb-0">
          <p class="text-body-2 mb-2"><strong>Version:</strong> 2.5.0</p>
          <p class="text-body-2 mb-2"><strong>Release Date:</strong> February 25, 2026</p>
          <p class="text-body-2 mb-0"><strong>Size:</strong> 125 MB</p>
        </v-alert>
      </v-card-text>

      <v-divider />

      <v-card-actions class="py-4 px-6">
        <v-btn block prepend-icon="mdi-check" variant="flat" color="primary" @click="dialog = false">
          Got it
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
<\/script>`

// Computed properties for code display
const highlightedDisplayCode = computed(() =>
  displayCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedFormCode = computed(() =>
  formCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedLargeCode = computed(() =>
  largeCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedXLargeCode = computed(() =>
  xlargeCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedOverflowCode = computed(() =>
  overflowCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
)

const highlightedSingleButtonCode = computed(() =>
  singleButtonCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;')
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