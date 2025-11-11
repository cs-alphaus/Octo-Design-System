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

    <v-dialog v-model="showDialog" width="920" persistent>
      <v-card class="calendar-dialog">
        <v-card-title class="text-subtitle-1 pa-6 pb-0 text-medium-emphasis">
          {{ title || 'date picker/ dual calendar view' }}
        </v-card-title>

        <v-card-text class="pa-6 pt-4">
          <v-row class="calendar-container">
            <!-- Left side: Calendar views -->
            <v-col cols="8" class="pr-0">
              <!-- Date input dropdowns -->
              <v-row class="mb-6" no-gutters>
                <v-col cols="6" class="pr-3">
                  <v-text-field
                    v-model="startDateDisplay"
                    label="Start date"
                    variant="outlined"
                    density="compact"
                    readonly
                    append-inner-icon="mdi-chevron-down"
                    class="date-input"
                  />
                </v-col>
                <v-col cols="6" class="pl-3">
                  <v-text-field
                    v-model="endDateDisplay"
                    label="End date"
                    variant="outlined"
                    density="compact"
                    readonly
                    append-inner-icon="mdi-chevron-down"
                    class="date-input"
                  />
                </v-col>
              </v-row>

              <!-- Dual calendar view -->
              <v-row no-gutters>
                <v-col cols="6" class="pr-4">
                  <div class="calendar-month">
                    <div class="d-flex align-center justify-space-between mb-4 month-header">
                      <v-btn
                        icon="mdi-chevron-left"
                        variant="text"
                        size="small"
                        class="nav-btn"
                        @click="previousMonth"
                      />
                      <h3 class="text-h6 month-title">{{ leftMonthTitle }}</h3>
                      <v-btn
                        icon="mdi-chevron-right"
                        variant="text"
                        size="small"
                        class="nav-btn"
                        @click="nextMonth"
                      />
                    </div>

                    <div class="calendar-grid">
                      <!-- Weekday headers -->
                      <div class="calendar-weekdays">
                        <div v-for="day in weekdays" :key="day" class="calendar-weekday">{{ day }}</div>
                      </div>

                      <!-- Calendar days -->
                      <div class="calendar-days">
                        <div
                          v-for="day in leftMonthDays"
                          :key="`left-${day.date}`"
                          :class="getDayClasses(day, 'left')"
                          @click="selectDate(day)"
                        >
                          {{ day.day }}
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>

                <v-col cols="6" class="pl-4">
                  <div class="calendar-month">
                    <div class="d-flex align-center justify-center mb-4 month-header">
                      <h3 class="text-h6 month-title">{{ rightMonthTitle }}</h3>
                    </div>

                    <div class="calendar-grid">
                      <!-- Weekday headers -->
                      <div class="calendar-weekdays">
                        <div v-for="day in weekdays" :key="day" class="calendar-weekday">{{ day }}</div>
                      </div>

                      <!-- Calendar days -->
                      <div class="calendar-days">
                        <div
                          v-for="day in rightMonthDays"
                          :key="`right-${day.date}`"
                          :class="getDayClasses(day, 'right')"
                          @click="selectDate(day)"
                        >
                          {{ day.day }}
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>

            <!-- Right side: Presets -->
            <v-col cols="4" class="pl-6">
              <div class="preset-list">
                <v-list density="compact" class="preset-menu">
                  <v-list-item
                    v-for="preset in presets"
                    :key="preset.label"
                    :active="isPresetActive(preset)"
                    :ripple="true"
                    class="preset-list-item"
                    @click="selectPreset(preset)"
                  >
                    <v-list-item-title class="preset-title">
                      {{ preset.label }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="px-6 pb-6 pt-4">
          <v-spacer />
          <v-btn
            variant="outlined"
            class="mr-3"
            @click="showDialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            variant="flat"
            :disabled="!canConfirm"
            @click="confirmSelection"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, type PropType } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  dateRange: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => []
  },
  color: {
    type: String,
    default: "primary"
  },
  title: {
    type: String,
    default: ""
  }
})

const emits = defineEmits(['update:dateRange'])

const showDialog = ref(false)
const currentMonth = ref(dayjs())
const tempStartDate = ref('')
const tempEndDate = ref('')
const activePreset = ref('')

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const displayText = computed(() => {
  if (props.dateRange.length === 2) {
    return `${dayjs(props.dateRange[0]).format('MMM D, YYYY')} - ${dayjs(props.dateRange[1]).format('MMM D, YYYY')}`
  }
  return 'Select Date Range'
})

const startDateDisplay = computed(() => {
  return tempStartDate.value ? dayjs(tempStartDate.value).format('DD/MM/YYYY') : ''
})

const endDateDisplay = computed(() => {
  return tempEndDate.value ? dayjs(tempEndDate.value).format('DD/MM/YYYY') : ''
})

const leftMonthTitle = computed(() => {
  return currentMonth.value.format('MMMM YYYY')
})

const rightMonthTitle = computed(() => {
  return currentMonth.value.add(1, 'month').format('MMMM YYYY')
})

const leftMonthDays = computed(() => {
  return generateMonthDays(currentMonth.value)
})

const rightMonthDays = computed(() => {
  return generateMonthDays(currentMonth.value.add(1, 'month'))
})

const canConfirm = computed(() => {
  return tempStartDate.value && tempEndDate.value
})

const presets = [
  { label: 'Month to date', key: 'mtd' },
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 3 months', months: 3 },
  { label: 'Last 6 months', months: 6 },
  { label: 'Last 9 months', months: 9 },
  { label: 'Last 12 months', months: 12 },
  { label: 'Custom range', key: 'custom' }
]

const generateMonthDays = (month: any) => {
  const startOfMonth = month.startOf('month')
  const endOfMonth = month.endOf('month')
  const startOfWeek = startOfMonth.startOf('week')

  const days = []
  let current = startOfWeek

  for (let i = 0; i < 42; i++) { // 6 rows * 7 days
    days.push({
      day: current.date(),
      date: current.format('YYYY-MM-DD'),
      isCurrentMonth: current.month() === month.month(),
      dayjs: current
    })
    current = current.add(1, 'day')
  }

  return days
}

const getDayClasses = (day: any, side: string) => {
  const classes = ['calendar-day']

  if (!day.isCurrentMonth) {
    classes.push('calendar-day--disabled')
  }

  if (tempStartDate.value === day.date) {
    classes.push('calendar-day--start')
  }

  if (tempEndDate.value === day.date) {
    classes.push('calendar-day--end')
  }

  if (tempStartDate.value && tempEndDate.value) {
    const start = dayjs(tempStartDate.value)
    const end = dayjs(tempEndDate.value)
    const current = dayjs(day.date)

    if (current.isAfter(start) && current.isBefore(end)) {
      classes.push('calendar-day--in-range')
    }
  }

  return classes
}

const selectDate = (day: any) => {
  if (!day.isCurrentMonth) return

  // Clear active preset when manually selecting dates
  activePreset.value = 'Custom range'

  if (!tempStartDate.value || (tempStartDate.value && tempEndDate.value)) {
    // Start new selection
    tempStartDate.value = day.date
    tempEndDate.value = ''
  } else if (tempStartDate.value && !tempEndDate.value) {
    // Set end date
    if (dayjs(day.date).isBefore(dayjs(tempStartDate.value))) {
      // If selected date is before start, swap them
      tempEndDate.value = tempStartDate.value
      tempStartDate.value = day.date
    } else {
      tempEndDate.value = day.date
    }
  }
}

const isPresetActive = (preset: any) => {
  return activePreset.value === preset.label
}

const selectPreset = (preset: any) => {
  const today = dayjs()
  activePreset.value = preset.label

  if (preset.key === 'mtd') {
    tempStartDate.value = today.startOf('month').format('YYYY-MM-DD')
    tempEndDate.value = today.format('YYYY-MM-DD')
  } else if (preset.days) {
    tempStartDate.value = today.subtract(preset.days - 1, 'day').format('YYYY-MM-DD')
    tempEndDate.value = today.format('YYYY-MM-DD')
  } else if (preset.months) {
    tempStartDate.value = today.subtract(preset.months, 'month').format('YYYY-MM-DD')
    tempEndDate.value = today.format('YYYY-MM-DD')
  } else if (preset.key === 'custom') {
    // Don't change dates, just mark as active for manual selection
    return
  }
}

const previousMonth = () => {
  currentMonth.value = currentMonth.value.subtract(1, 'month')
}

const nextMonth = () => {
  currentMonth.value = currentMonth.value.add(1, 'month')
}

const confirmSelection = () => {
  if (tempStartDate.value && tempEndDate.value) {
    emits('update:dateRange', [tempStartDate.value, tempEndDate.value])
  }
  showDialog.value = false
}

// Initialize temp dates when dialog opens
const initializeDates = () => {
  if (props.dateRange.length === 2) {
    tempStartDate.value = props.dateRange[0]
    tempEndDate.value = props.dateRange[1]
    activePreset.value = ''
  } else {
    tempStartDate.value = ''
    tempEndDate.value = ''
    activePreset.value = ''
  }
}

// Watch dialog changes
watch(() => showDialog.value, (newVal) => {
  if (newVal) {
    initializeDates()
  }
})
</script>

<style scoped>
.calendar-dialog {
  border-radius: 16px;
  overflow: hidden;
}

.calendar-container {
  margin: 0 !important;
}

.date-input {
  font-size: 14px;
}

.month-header {
  height: 48px;
  min-height: 48px;
}

.month-title {
  font-weight: 500;
  font-size: 1.125rem;
  margin: 0;
}

.nav-btn {
  width: 32px;
  height: 32px;
  min-width: 32px;
}

.calendar-grid {
  width: 100%;
  user-select: none;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 12px;
}

.calendar-weekday {
  padding: 12px 4px;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  color: rgb(var(--v-theme-on-surface-variant));
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  min-height: 40px;
}

.calendar-day:hover:not(.calendar-day--disabled) {
  background-color: rgba(var(--v-theme-primary), 0.08);
  transform: scale(1.05);
}

.calendar-day--disabled {
  color: rgba(var(--v-theme-on-surface), 0.38);
  cursor: not-allowed;
}

.calendar-day--disabled:hover {
  background-color: transparent;
  transform: none;
}

.calendar-day--start,
.calendar-day--end {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(var(--v-theme-primary), 0.3);
}

.calendar-day--start:hover,
.calendar-day--end:hover {
  background-color: rgb(var(--v-theme-primary));
  transform: scale(1.05);
}

.calendar-day--in-range {
  background-color: rgba(var(--v-theme-primary), 0.12);
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
}

.calendar-day--in-range:hover {
  background-color: rgba(var(--v-theme-primary), 0.16);
}

.preset-list {
  border-left: 1px solid rgba(var(--v-border-color), 0.12);
  padding-left: 24px;
  height: 100%;
}

.preset-menu {
  background: transparent !important;
  padding: 0;
}

.preset-list-item {
  border-radius: 8px !important;
  margin-bottom: 2px !important;
  min-height: 44px !important;
  padding: 0 12px !important;
}

.preset-title {
  font-size: 14px !important;
  font-weight: 400 !important;
  color: rgb(var(--v-theme-on-surface)) !important;
}

/* Override Vuetify's active state */
:deep(.preset-list-item.v-list-item--active) {
  background-color: rgba(var(--v-theme-primary), 0.08) !important;
  color: rgb(var(--v-theme-primary)) !important;
}

:deep(.preset-list-item.v-list-item--active .preset-title) {
  color: rgb(var(--v-theme-primary)) !important;
  font-weight: 500 !important;
}

:deep(.preset-list-item:hover) {
  background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
}

:deep(.preset-list-item.v-list-item--active:hover) {
  background-color: rgba(var(--v-theme-primary), 0.12) !important;
}

/* Fix for text field label */
:deep(.date-input .v-field__input) {
  font-size: 14px;
}

:deep(.date-input .v-label) {
  font-size: 14px;
}
</style>