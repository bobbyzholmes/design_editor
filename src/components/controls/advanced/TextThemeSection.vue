<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '../../../stores/themeStore';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateTypography(property: string, value: string) {
  themeStore.updateTheme({
    typography: {
      ...themeStore.currentTheme.typography,
      [property]: value
    }
  });
}

const headlineLarge = computed(() => parseFloat(themeStore.currentTheme.typography.headlineLarge));
const headlineMedium = computed(() => parseFloat(themeStore.currentTheme.typography.headlineMedium));
const headlineSmall = computed(() => parseFloat(themeStore.currentTheme.typography.headlineSmall));
const bodyLarge = computed(() => parseFloat(themeStore.currentTheme.typography.bodyLarge));
const bodyMedium = computed(() => parseFloat(themeStore.currentTheme.typography.bodyMedium));
const bodySmall = computed(() => parseFloat(themeStore.currentTheme.typography.bodySmall));

const fontFamilies = [
  { value: 'Roboto, sans-serif', label: 'Roboto' },
  { value: 'Inter, sans-serif', label: 'Inter' },
  { value: "'Open Sans', sans-serif", label: 'Open Sans' },
  { value: "'Montserrat', sans-serif", label: 'Montserrat' },
  { value: "'Poppins', sans-serif", label: 'Poppins' },
  { value: "'Lato', sans-serif", label: 'Lato' },
];
</script>

<template>
  <div class="text-theme-section">
    <div class="control-group">
      <h4>Font Family</h4>
      <div class="font-family-select">
        <label>Primary Font</label>
        <select 
          :value="themeStore.currentTheme.typography.fontFamily"
          @change="e => updateTypography('fontFamily', e.target.value)"
        >
          <option v-for="font in fontFamilies" :key="font.value" :value="font.value">
            {{ font.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="control-group">
      <h4>Headlines</h4>
      <NumberInput
        label="Large"
        :modelValue="headlineLarge"
        :min="1.5"
        :max="4"
        :step="0.125"
        unit="rem"
        @update:modelValue="value => updateTypography('headlineLarge', `${value}rem`)"
      />
      <NumberInput
        label="Medium"
        :modelValue="headlineMedium"
        :min="1.25"
        :max="3"
        :step="0.125"
        unit="rem"
        @update:modelValue="value => updateTypography('headlineMedium', `${value}rem`)"
      />
      <NumberInput
        label="Small"
        :modelValue="headlineSmall"
        :min="1"
        :max="2.5"
        :step="0.125"
        unit="rem"
        @update:modelValue="value => updateTypography('headlineSmall', `${value}rem`)"
      />
    </div>

    <div class="control-group">
      <h4>Body Text</h4>
      <NumberInput
        label="Large"
        :modelValue="bodyLarge"
        :min="0.875"
        :max="1.5"
        :step="0.125"
        unit="rem"
        @update:modelValue="value => updateTypography('bodyLarge', `${value}rem`)"
      />
      <NumberInput
        label="Medium"
        :modelValue="bodyMedium"
        :min="0.75"
        :max="1.25"
        :step="0.125"
        unit="rem"
        @update:modelValue="value => updateTypography('bodyMedium', `${value}rem`)"
      />
      <NumberInput
        label="Small"
        :modelValue="bodySmall"
        :min="0.625"
        :max="1"
        :step="0.125"
        unit="rem"
        @update:modelValue="value => updateTypography('bodySmall', `${value}rem`)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-theme-section {
  padding: 1rem;

  .control-group {
    margin-bottom: 1.5rem;

    h4 {
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.75rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e2e8f0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .font-family-select {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;

    label {
      flex: 1;
      font-weight: 500;
      color: #475569;
    }

    select {
      flex: 2;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 0.875rem;
      color: #1a1a1a;
      background-color: white;
      cursor: pointer;

      &:focus {
        outline: none;
        border-color: #6200ee;
        box-shadow: 0 0 0 2px rgba(98, 0, 238, 0.1);
      }
    }
  }
}

:deep(.dark-mode) {
  .text-theme-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }

    .font-family-select {
      label {
        color: #cbd5e1;
      }

      select {
        background-color: #404040;
        border-color: #4a5568;
        color: #ffffff;

        &:focus {
          border-color: #6200ee;
          box-shadow: 0 0 0 2px rgba(98, 0, 238, 0.2);
        }
      }
    }
  }
}
</style>