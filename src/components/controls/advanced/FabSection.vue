<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateFab(property: string, value: any) {
  themeStore.updateTheme({
    fab: {
      ...themeStore.currentTheme.fab,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="fab-section">
    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Background"
        v-model="themeStore.currentTheme.fab.backgroundColor"
        @update:modelValue="value => updateFab('backgroundColor', value)"
      />
      <ColorInput
        label="Foreground"
        v-model="themeStore.currentTheme.fab.foregroundColor"
        @update:modelValue="value => updateFab('foregroundColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Size"
        v-model="themeStore.currentTheme.fab.size"
        :min="40"
        :max="96"
        :step="8"
        unit="px"
        @update:modelValue="value => updateFab('size', value)"
      />
      <NumberInput
        label="Elevation"
        v-model="themeStore.currentTheme.fab.elevation"
        :min="0"
        :max="24"
        :step="1"
        @update:modelValue="value => updateFab('elevation', value)"
      />
      <NumberInput
        label="Extended Padding"
        v-model="themeStore.currentTheme.fab.extendedPadding"
        :min="8"
        :max="32"
        :step="4"
        unit="px"
        @update:modelValue="value => updateFab('extendedPadding', value)"
      />
      <NumberInput
        label="Icon Size"
        v-model="themeStore.currentTheme.fab.iconSize"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateFab('iconSize', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fab-section {
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
  .fab-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>