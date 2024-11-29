<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateRadio(property: string, value: any) {
  themeStore.updateTheme({
    radio: {
      ...themeStore.currentTheme.radio,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="radio-section">
    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Fill"
        v-model="themeStore.currentTheme.radio.fillColor"
        @update:modelValue="value => updateRadio('fillColor', value)"
      />
      <ColorInput
        label="Active"
        v-model="themeStore.currentTheme.radio.activeColor"
        @update:modelValue="value => updateRadio('activeColor', value)"
      />
      <ColorInput
        label="Disabled"
        v-model="themeStore.currentTheme.radio.disabledColor"
        @update:modelValue="value => updateRadio('disabledColor', value)"
      />
      <ColorInput
        label="Border"
        v-model="themeStore.currentTheme.radio.borderColor"
        @update:modelValue="value => updateRadio('borderColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Size"
        v-model="themeStore.currentTheme.radio.size"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateRadio('size', value)"
      />
      <NumberInput
        label="Border Width"
        v-model="themeStore.currentTheme.radio.borderWidth"
        :min="1"
        :max="4"
        :step="1"
        unit="px"
        @update:modelValue="value => updateRadio('borderWidth', value)"
      />
      <NumberInput
        label="Inner Size"
        v-model="themeStore.currentTheme.radio.innerSize"
        :min="8"
        :max="24"
        :step="2"
        unit="px"
        @update:modelValue="value => updateRadio('innerSize', value)"
      />
      <NumberInput
        label="Splash Radius"
        v-model="themeStore.currentTheme.radio.splashRadius"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateRadio('splashRadius', value)"
      />
      <NumberInput
        label="Elevation"
        v-model="themeStore.currentTheme.radio.elevation"
        :min="0"
        :max="8"
        :step="1"
        @update:modelValue="value => updateRadio('elevation', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-section {
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
  .radio-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>