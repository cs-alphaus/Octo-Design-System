<template>
  <div>
    <v-btn
      variant="tonal"
      prepend-icon="mdi-calendar-range"
      :color="color"
      @click="showDialog = true"
    >
      {{ displayText }}
    </v-btn>

    <v-dialog v-model="showDialog" width="500">
      <v-card>
        <v-card-title>Select Date Range</v-card-title>
        <v-card-text>
          <v-tabs v-model="activeTab" class="mb-4">
            <v-tab value="calendar">Calendar</v-tab>
            <v-tab value="presets">Quick Ranges</v-tab>
          </v-tabs>

          <v-tabs-window v-model="activeTab">
            <v-tabs-window-item value="calendar">
              <v-date-picker
                v-model="selectedDates"
                multiple="range"
                color="primary"
                class="mx-auto"
                @update:model-value="updateDateRange"
              />
            </v-tabs-window-item>

            <v-tabs-window-item value="presets">
              <h4 class="mb-3">Quick Ranges</h4>
              <v-row dense>
                <v-col cols="4" v-for="preset in presets" :key="preset.label">
                  <v-btn
                    size="small"
                    variant="outlined"
                    block
                    @click="selectPreset(preset)"
                  >
                    {{ preset.label }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="applyRange">Apply</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

const props = defineProps({
  dateRange: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => []
  },
  color: {
    type: String,
    default: "primary"
  }
})

const emits = defineEmits(['update:dateRange'])

const showDialog = ref(false)
const activeTab = ref('calendar')
const selectedDates = ref([])

const displayText = computed(() => {
  if (props.dateRange.length === 2) {
    return `${props.dateRange[0]} - ${props.dateRange[1]}`
  }
  return 'Select Date Range'
})

const presets = [
  { label: '7d', days: 7 },
  { label: '30d', days: 30 },
  { label: '90d', days: 90 },
  { label: '3m', months: 3 },
  { label: '6m', months: 6 },
  { label: '12m', months: 12 }
]

const updateDateRange = (dates: any) => {
  if (dates && dates.length === 2) {
    const range = dates.map((date: Date) => date.toISOString().split('T')[0])
    emits('update:dateRange', range)
    showDialog.value = false
  }
}

const selectPreset = (preset: any) => {
  const today = new Date()
  const endDate = new Date(today)
  let startDate = new Date(today)

  if (preset.days) {
    startDate.setDate(today.getDate() - preset.days)
  } else if (preset.months) {
    startDate.setMonth(today.getMonth() - preset.months)
  }

  const range = [
    startDate.toISOString().split('T')[0],
    endDate.toISOString().split('T')[0]
  ]

  emits('update:dateRange', range)
  showDialog.value = false
}

const applyRange = () => {
  if (selectedDates.value && selectedDates.value.length === 2) {
    const range = selectedDates.value.map((date: any) => date.toISOString().split('T')[0])
    emits('update:dateRange', range)
  }
  showDialog.value = false
}
</script>