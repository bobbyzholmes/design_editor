<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateSlider(property: string, value: any) {
  themeStore.updateTheme({
    slider: {
      ...themeStore.currentTheme.slider,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="slider-section">
    <div class="control-group">
      <h4>Track Colors</h4>
      <ColorInput
        label="Track"
        v-model="themeStore.currentTheme.slider.trackColor"
        @update:modelValue="value => updateSlider('trackColor', value)"
      />
      <ColorInput
        label="Active Track"
        v-model="themeStore.currentTheme.slider.activeTrackColor"
        @update:modelValue="value => updateSlider('activeTrackColor', value)"
      />
      <ColorInput
        label="Inactive Track"
        v-model="themeStore.currentTheme.slider.inactiveTrackColor"
        @update:modelValue="value => updateSlider('inactiveTrackColor', value)"
      />
      <ColorInput
        label="Disabled Track"
        v-model="themeStore.currentTheme.slider.disabledTrackColor"
        @update:modelValue="value => updateSlider('disabledTrackColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Thumb Colors</h4>
      <ColorInput
        label="Thumb"
        v-model="themeStore.currentTheme.slider.thumbColor"
        @update:modelValue="value => updateSlider('thumbColor', value)"
      />
      <ColorInput
        label="Disabled Thumb"
        v-model="themeStore.currentTheme.slider.thumbColorDisabled"
        @update:modelValue="value => updateSlider('thumbColorDisabled', value)"
      />
      <ColorInput
        label="Overlay"
        v-model="themeStore.currentTheme.slider.overlayColor"
        @update:modelValue="value => updateSlider('overlayColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Track Height"
        v-model="themeStore.currentTheme.slider.trackHeight"
        :min="2"
        :max="8"
        :step="1"
        unit="px"
        @update:modelValue="value => updateSlider('trackHeight', value)"
      />
      <NumberInput
        label="Thumb Size"
        v-model="themeStore.currentTheme.slider.thumbSize"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateSlider('thumbSize', value)"
      />
      <NumberInput
        label="Thumb Elevation"
        v-model="themeStore.currentTheme.slider.thumbElevation"
        :min="0"
        :max="8"
        :step="1"
        @update:modelValue="value => updateSlider('thumbElevation', value)"
      />
      <NumberInput
        label="Overlay Radius"
        v-model="themeStore.currentTheme.slider.overlayRadius"
        :min="20"
        :max="40"
        :step="2"
        unit="px"
        @update:modelValue="value => updateSlider('overlayRadius', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-section {
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
  .slider-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>