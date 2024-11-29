<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateIconTheme(property: string, value: any) {
  themeStore.updateTheme({
    iconTheme: {
      ...themeStore.currentTheme.iconTheme,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="icon-theme-section">
    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Default Color"
        v-model="themeStore.currentTheme.iconTheme.color"
        @update:modelValue="value => updateIconTheme('color', value)"
      />
      <ColorInput
        label="Selected Color"
        v-model="themeStore.currentTheme.iconTheme.selectedColor"
        @update:modelValue="value => updateIconTheme('selectedColor', value)"
      />
      <ColorInput
        label="Disabled Color"
        v-model="themeStore.currentTheme.iconTheme.disabledColor"
        @update:modelValue="value => updateIconTheme('disabledColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Size"
        v-model="themeStore.currentTheme.iconTheme.size"
        :min="16"
        :max="48"
        :step="2"
        unit="px"
        @update:modelValue="value => updateIconTheme('size', value)"
      />
    </div>

    <div class="control-group">
      <h4>States</h4>
      <NumberInput
        label="Default Opacity"
        v-model="themeStore.currentTheme.iconTheme.opacity"
        :min="0"
        :max="1"
        :step="0.01"
        @update:modelValue="value => updateIconTheme('opacity', value)"
      />
      <NumberInput
        label="Selected Opacity"
        v-model="themeStore.currentTheme.iconTheme.selectedOpacity"
        :min="0"
        :max="1"
        :step="0.01"
        @update:modelValue="value => updateIconTheme('selectedOpacity', value)"
      />
      <NumberInput
        label="Disabled Opacity"
        v-model="themeStore.currentTheme.iconTheme.disabledOpacity"
        :min="0"
        :max="1"
        :step="0.01"
        @update:modelValue="value => updateIconTheme('disabledOpacity', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-theme-section {
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
  .icon-theme-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>