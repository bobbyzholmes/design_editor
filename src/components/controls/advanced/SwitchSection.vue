<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateSwitch(property: string, value: any) {
  themeStore.updateTheme({
    switch: {
      ...themeStore.currentTheme.switch,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="switch-section">
    <div class="control-group">
      <h4>Track Colors</h4>
      <ColorInput
        label="Track"
        v-model="themeStore.currentTheme.switch.trackColor"
        @update:modelValue="value => updateSwitch('trackColor', value)"
      />
      <ColorInput
        label="Selected Track"
        v-model="themeStore.currentTheme.switch.trackColorSelected"
        @update:modelValue="value => updateSwitch('trackColorSelected', value)"
      />
      <ColorInput
        label="Disabled Track"
        v-model="themeStore.currentTheme.switch.trackColorDisabled"
        @update:modelValue="value => updateSwitch('trackColorDisabled', value)"
      />
    </div>

    <div class="control-group">
      <h4>Thumb Colors</h4>
      <ColorInput
        label="Thumb"
        v-model="themeStore.currentTheme.switch.thumbColor"
        @update:modelValue="value => updateSwitch('thumbColor', value)"
      />
      <ColorInput
        label="Selected Thumb"
        v-model="themeStore.currentTheme.switch.thumbColorSelected"
        @update:modelValue="value => updateSwitch('thumbColorSelected', value)"
      />
      <ColorInput
        label="Disabled Thumb"
        v-model="themeStore.currentTheme.switch.thumbColorDisabled"
        @update:modelValue="value => updateSwitch('thumbColorDisabled', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Width"
        v-model="themeStore.currentTheme.switch.width"
        :min="40"
        :max="80"
        :step="2"
        unit="px"
        @update:modelValue="value => updateSwitch('width', value)"
      />
      <NumberInput
        label="Height"
        v-model="themeStore.currentTheme.switch.height"
        :min="20"
        :max="40"
        :step="2"
        unit="px"
        @update:modelValue="value => updateSwitch('height', value)"
      />
      <NumberInput
        label="Thumb Size"
        v-model="themeStore.currentTheme.switch.thumbSize"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateSwitch('thumbSize', value)"
      />
      <NumberInput
        label="Thumb Elevation"
        v-model="themeStore.currentTheme.switch.thumbElevation"
        :min="0"
        :max="8"
        :step="1"
        @update:modelValue="value => updateSwitch('thumbElevation', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.switch-section {
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
  .switch-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>