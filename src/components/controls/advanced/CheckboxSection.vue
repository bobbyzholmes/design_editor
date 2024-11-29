<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateCheckbox(property: string, value: any) {
  themeStore.updateTheme({
    checkbox: {
      ...themeStore.currentTheme.checkbox,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="checkbox-section">
    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Fill"
        v-model="themeStore.currentTheme.checkbox.fillColor"
        @update:modelValue="value => updateCheckbox('fillColor', value)"
      />
      <ColorInput
        label="Active"
        v-model="themeStore.currentTheme.checkbox.activeColor"
        @update:modelValue="value => updateCheckbox('activeColor', value)"
      />
      <ColorInput
        label="Disabled"
        v-model="themeStore.currentTheme.checkbox.disabledColor"
        @update:modelValue="value => updateCheckbox('disabledColor', value)"
      />
      <ColorInput
        label="Check"
        v-model="themeStore.currentTheme.checkbox.checkColor"
        @update:modelValue="value => updateCheckbox('checkColor', value)"
      />
      <ColorInput
        label="Border"
        v-model="themeStore.currentTheme.checkbox.borderColor"
        @update:modelValue="value => updateCheckbox('borderColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Size"
        v-model="themeStore.currentTheme.checkbox.size"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateCheckbox('size', value)"
      />
      <NumberInput
        label="Border Width"
        v-model="themeStore.currentTheme.checkbox.borderWidth"
        :min="1"
        :max="4"
        :step="1"
        unit="px"
        @update:modelValue="value => updateCheckbox('borderWidth', value)"
      />
      <NumberInput
        label="Border Radius"
        v-model="themeStore.currentTheme.checkbox.borderRadius"
        :min="0"
        :max="8"
        :step="1"
        unit="px"
        @update:modelValue="value => updateCheckbox('borderRadius', value)"
      />
      <NumberInput
        label="Splash Radius"
        v-model="themeStore.currentTheme.checkbox.splashRadius"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateCheckbox('splashRadius', value)"
      />
      <NumberInput
        label="Elevation"
        v-model="themeStore.currentTheme.checkbox.elevation"
        :min="0"
        :max="8"
        :step="1"
        @update:modelValue="value => updateCheckbox('elevation', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-section {
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
}

:deep(.dark-mode) {
  .checkbox-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>