<template>
  <div>
    <div class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-4">Custom List Item</h1>
      <p class="text-body-1 mb-6">
        A unified, configurable list item component that replaces multiple specific list item variations.
        This component can be configured to handle any list pattern through a single configuration object.
      </p>
    </div>

    <!-- All Features Enabled -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">All Features Enabled</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        This example demonstrates every available feature of the CustomListItem component in a single configuration.
      </p>

      <!-- Live Example -->
      <v-card class="mb-4">
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="allFeaturesConfig"
              value="all-features-demo"
              @click="handleClick"
              @menuAction="handleMenuAction"
            />
          </v-list>
        </v-card-text>
      </v-card>

      <!-- Code Section -->
      <v-card>
        <v-card-text class="pa-0">
          <v-btn
            @click="showAllFeaturesCode = !showAllFeaturesCode"
            variant="text"
            prepend-icon="mdi-code-tags"
            class="ma-4"
          >
            {{ showAllFeaturesCode ? 'Hide code' : 'Show code' }}
          </v-btn>

          <v-expand-transition>
            <div v-if="showAllFeaturesCode">
              <v-divider />
              <pre class="pa-4 text-caption code-block" v-html="highlightedAllFeaturesCode"></pre>
            </div>
          </v-expand-transition>
        </v-card-text>
      </v-card>
    </div>

    <!-- Active/Selected States -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Active/Selected States</h2>
      <p class="text-body-2 mb-4 text-medium-emphasis">
        Demonstration of different selection and active states for list items.
      </p>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="normalStateConfig"
              @click="handleClick"
            />
            <CustomListItem
              :config="activeStateConfig"
              @click="handleClick"
            />
            <CustomListItem
              :config="normalStateConfig"
              @click="handleClick"
            /><CustomListItem
              :config="normalStateConfig"
              @click="handleClick"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- Basic Example -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Basic Example</h2>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="basicConfig"
              @click="handleClick"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- With Avatar -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">With Avatar</h2>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="avatarConfig"
              @click="handleClick"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- With Status Chips -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">With Status Chips</h2>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="chipConfig"
              @click="handleClick"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- With Metadata -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">With Metadata</h2>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="metadataConfig"
              @click="handleClick"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- With Action Menu -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">With Action Menu</h2>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              :config="menuConfig"
              @click="handleClick"
              @menuAction="handleMenuAction"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- Full Example -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Full Example</h2>
      <v-card>
        <v-card-text>
          <v-list>
            <CustomListItem
              v-for="(config, index) in fullExamples"
              :key="index"
              :config="config"
              @click="handleClick"
              @menuAction="handleMenuAction"
            />
          </v-list>
        </v-card-text>
      </v-card>
    </div>

    <!-- Configuration API -->
    <div class="mb-8">
      <h2 class="text-h5 font-weight-medium mb-4">Configuration API</h2>
      <v-card>
        <v-card-text>
          <pre class="text-caption">{{ configurationAPI }}</pre>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CustomListItem } from '@/components'

// Code visibility toggles
const showAllFeaturesCode = ref(false)

// Simple syntax highlighter function
const highlightCode = (code: string): string => {
  return code
    // Strings first (to avoid conflicts)
    .replace(/"([^"]*)"/g, '"<span class="string">$1</span>"')
    .replace(/'([^']*)'/g, '\'<span class="string">$1</span>\'')
    .replace(/`([^`]*)`/g, '`<span class="template">$1</span>`')
    // HTML tags (without creating nested spans)
    .replace(/&lt;(\/?[a-zA-Z][\w-]*)/g, '&lt;<span class="tag">$1</span>')
    .replace(/&gt;/g, '<span class="tag">&gt;</span>')
    // Vue directives and props (only if not already in a span)
    .replace(/([:@][\w-]+)(?![^<]*<\/span>)/g, '<span class="directive">$1</span>')
    // JavaScript keywords
    .replace(/\b(import|export|const|let|var|function|from|interface|type|true|false|null|undefined)\b/g, '<span class="keyword">$1</span>')
    // Comments
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
    // Numbers
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    // Types and interfaces
    .replace(/\b([A-Z][a-zA-Z]+)\b/g, '<span class="type">$1</span>')
}

const highlightedAllFeaturesCode = computed(() => {
  return highlightCode(allFeaturesCodeExample.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
})

const allFeaturesConfig = {
  // Avatar Configuration
  showAvatar: true,
  avatarType: 'provider' as const,
  avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  avatarText: 'AWS',
  avatarColor: 'orange',

  // Content
  title: 'AWS Production Environment',
  subtitle: 'Primary production infrastructure for web applications',

  // Metadata
  showMetadata: true,
  metadataItems: ['ID: aws-prod-001', 'Region: us-east-1', 'Monthly Cost: $2,450'] as [string, string, string],

  // Title Chips (beside title)
  showTitleChips: true,
  titleChipConfig: [
    {
      text: 'Critical',
      color: 'error',
      variant: 'tonal' as const
    },
    {
      text: 'Monitored',
      color: 'info',
      variant: 'outlined' as const
    }
  ],

  // Status Chips (right side)
  showStatusChip: true,
  chipConfig: [
    {
      text: 'Active',
      color: 'success',
      variant: 'tonal' as const
    },
    {
      text: 'Optimized',
      color: 'primary',
      variant: 'outlined' as const
    }
  ],

  // Action Menu
  showActionMenu: true,
  menuActions: [
    {
      title: 'View Dashboard',
      icon: 'mdi-monitor-dashboard',
      action: () => console.log('View dashboard clicked')
    },
    {
      title: 'Edit Configuration',
      icon: 'mdi-cog',
      action: () => console.log('Edit configuration clicked')
    },
    {
      title: 'View Costs',
      icon: 'mdi-currency-usd',
      action: () => console.log('View costs clicked')
    },
    {
      title: 'Generate Report',
      icon: 'mdi-file-document',
      action: () => console.log('Generate report clicked')
    }
  ],

  // Behavior
  showDivider: true,
  clickable: true,
  active: false
}

const normalStateConfig = {
  showAvatar: true,
  avatarType: 'user' as const,
  avatarText: 'JD',
  avatarColor: 'primary',
  title: 'John Doe - Normal State',
  subtitle: 'This item is in normal/default state',
  showStatusChip: true,
  chipConfig: {
    text: 'Available',
    color: 'success',
    variant: 'tonal' as const
  },
  active: false,
  showDivider: true
}

const activeStateConfig = {
  showAvatar: true,
  avatarType: 'user' as const,
  avatarText: 'AB',
  avatarColor: 'secondary',
  title: 'Alice Brown - Active State',
  subtitle: 'This item is currently active/selected',
  showStatusChip: true,
  chipConfig: {
    text: 'Online',
    color: 'info',
    variant: 'tonal' as const
  },
  active: true,
  showDivider: true
}

const selectedStateConfig = {
  showAvatar: true,
  avatarType: 'icon' as const,
  avatarIcon: 'folder',
  avatarColor: 'warning',
  title: 'Project Alpha - Selected State',
  subtitle: 'This item shows selected state with primary color highlight',
  showTitleChips: true,
  titleChipConfig: {
    text: 'Selected',
    color: 'primary',
    variant: 'flat' as const
  },
  showStatusChip: true,
  chipConfig: {
    text: 'In Progress',
    color: 'warning',
    variant: 'tonal' as const
  },
  active: true,
  showDivider: true
}

const basicConfig = {
  title: 'Basic List Item',
  subtitle: 'Simple list item with title and subtitle'
}

const avatarConfig = {
  showAvatar: true,
  avatarType: 'user' as const,
  avatarText: 'JD',
  avatarColor: 'primary',
  title: 'John Doe',
  subtitle: 'john.doe@example.com'
}

const chipConfig = {
  title: 'AWS Production Account',
  subtitle: 'Primary production environment',
  showStatusChip: true,
  chipConfig: {
    text: 'Active',
    color: 'success',
    variant: 'tonal' as const
  }
}

const metadataConfig = {
  showAvatar: true,
  avatarType: 'icon' as const,
  avatarIcon: 'cloud',
  title: 'Production Environment',
  subtitle: 'Main production cluster',
  showMetadata: true,
  metadataItems: ['ID: prod-001', 'Region: us-east-1', 'Type: Kubernetes'] as [string, string, string]
}

const menuConfig = {
  title: 'User Account',
  subtitle: 'Administrator access',
  showActionMenu: true,
  menuActions: [
    {
      title: 'Edit',
      icon: 'mdi-pencil',
      action: () => console.log('Edit clicked')
    },
    {
      title: 'Delete',
      icon: 'mdi-delete',
      action: () => console.log('Delete clicked')
    }
  ]
}

const fullExamples = [
  {
    showAvatar: true,
    avatarType: 'provider' as const,
    avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    title: 'AWS Production',
    subtitle: 'Production environment for web services',
    showMetadata: true,
    metadataItems: ['ID: aws-prod-001', 'Region: us-east-1', 'Cost: $1,234/month'] as [string, string, string],
    showStatusChip: true,
    chipConfig: {
      text: 'Active',
      color: 'success',
      variant: 'tonal' as const
    },
    showActionMenu: true,
    menuActions: [
      {
        title: 'View Details',
        icon: 'mdi-eye',
        action: () => console.log('View details')
      },
      {
        title: 'Edit Settings',
        icon: 'mdi-cog',
        action: () => console.log('Edit settings')
      }
    ],
    showDivider: true
  },
  {
    showAvatar: true,
    avatarType: 'user' as const,
    avatarText: 'AB',
    avatarColor: 'secondary',
    title: 'Alice Brown',
    subtitle: 'Senior Developer',
    showTitleChips: true,
    titleChipConfig: {
      text: 'Admin',
      color: 'warning',
      variant: 'tonal' as const
    },
    showMetadata: true,
    metadataItems: ['Department: Engineering', 'Location: San Francisco', 'Joined: 2021'] as [string, string, string],
    showActionMenu: true,
    menuActions: [
      {
        title: 'Send Message',
        icon: 'mdi-message',
        action: () => console.log('Send message')
      },
      {
        title: 'Remove Access',
        icon: 'mdi-account-remove',
        action: () => console.log('Remove access')
      }
    ],
    showDivider: true
  }
]

const configurationAPI = `interface ListItemConfig {
  // Avatar/Icon Configuration
  showAvatar?: boolean
  avatarType?: 'provider' | 'user' | 'icon'
  avatarSrc?: string
  avatarText?: string
  avatarIcon?: string
  avatarColor?: string

  // Primary Content
  title: string (required)
  subtitle?: string

  // Metadata
  showMetadata?: boolean
  metadataItems?: [string?, string?, string?]

  // Title Chips (beside title)
  showTitleChips?: boolean
  titleChipConfig?: ChipConfig | ChipConfig[]

  // Status Chips (right side)
  showStatusChip?: boolean
  chipConfig?: ChipConfig | ChipConfig[]

  // Action Menu
  showActionMenu?: boolean
  menuActions?: MenuAction[]

  // Behavior
  enableLazyLoading?: boolean
  showDivider?: boolean
  clickable?: boolean
  active?: boolean
  customRightContent?: boolean
}

interface ChipConfig {
  text: string
  color?: string
  variant?: 'flat' | 'tonal' | 'outlined' | 'text' | 'elevated'
}

interface MenuAction {
  title: string
  icon?: string
  action: () => void
}`

const handleClick = (value: any) => {
  console.log('List item clicked:', value)
}

const handleMenuAction = (actionTitle: string, value: any) => {
  console.log('Menu action:', actionTitle, 'for item:', value)
}

// Code examples for display
const allFeaturesCodeExample = `<template>
  <v-list>
    <CustomListItem
      :config="{
        showAvatar: true,
        avatarType: 'provider',
        avatarSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        avatarText: 'AWS',
        avatarColor: 'orange',
        title: 'AWS Production Environment',
        subtitle: 'Primary production infrastructure for web applications',
        showMetadata: true,
        metadataItems: ['ID: aws-prod-001', 'Region: us-east-1', 'Monthly Cost: $2,450'],
        showTitleChips: true,
        titleChipConfig: [
          {
            text: 'Critical',
            color: 'error',
            variant: 'tonal'
          },
          {
            text: 'Monitored',
            color: 'info',
            variant: 'outlined'
          }
        ],
        showStatusChip: true,
        chipConfig: [
          {
            text: 'Active',
            color: 'success',
            variant: 'tonal'
          },
          {
            text: 'Optimized',
            color: 'primary',
            variant: 'outlined'
          }
        ],
        showActionMenu: true,
        menuActions: [
          {
            title: 'View Dashboard',
            icon: 'mdi-monitor-dashboard',
            action: () => console.log('View dashboard clicked')
          },
          {
            title: 'Edit Configuration',
            icon: 'mdi-cog',
            action: () => console.log('Edit configuration clicked')
          }
        ],
        showDivider: true,
        clickable: true,
        active: false
      }"
      value="all-features-demo"
      @click="handleClick"
      @menuAction="handleMenuAction"
    />
  </v-list>
</template>

<script setup lang="ts">
import { CustomListItem } from '@/components'

const handleClick = (value: any) => {
  console.log('Clicked:', value)
}

const handleMenuAction = (actionTitle: string, value: any) => {
  console.log('Menu action:', actionTitle, 'for item:', value)
}
</script\>`
</script>

<style scoped>
.code-block {
  background: #1e1e1e !important;
  color: #d4d4d4;
  overflow-x: auto;
  border-radius: 8px;
}

.code-block :deep(.tag) {
  color: #569cd6; /* Blue for HTML tags */
}

.code-block :deep(.attribute) {
  color: #92c5f7; /* Light blue for attributes */
}

.code-block :deep(.directive) {
  color: #c586c0; /* Purple for Vue directives */
}

.code-block :deep(.string) {
  color: #ce9178; /* Orange for strings */
}

.code-block :deep(.template) {
  color: #ce9178; /* Orange for template literals */
}

.code-block :deep(.keyword) {
  color: #569cd6; /* Blue for JavaScript keywords */
}

.code-block :deep(.comment) {
  color: #6a9955; /* Green for comments */
}

.code-block :deep(.number) {
  color: #b5cea8; /* Light green for numbers */
}

.code-block :deep(.type) {
  color: #4ec9b0; /* Teal for types/interfaces */
}
</style>