<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateBottomNavigation(property: string, value: any) {
  themeStore.updateTheme({
    bottomNavigation: {
      ...themeStore.currentTheme.bottomNavigation,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="bottom-navigation-section">
    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Background"
        v-model="themeStore.currentTheme.bottomNavigation.backgroundColor"
        @update:modelValue="value => updateBottomNavigation('backgroundColor', value)"
      />
      <ColorInput
        label="Selected Item"
        v-model="themeStore.currentTheme.bottomNavigation.selectedItemColor"
        @update:modelValue="value => updateBottomNavigation('selectedItemColor', value)"
      />
      <ColorInput
        label="Unselected Item"
        v-model="themeStore.currentTheme.bottomNavigation.unselectedItemColor"
        @update:modelValue="value => updateBottomNavigation('unselectedItemColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Height"
        v-model="themeStore.currentTheme.bottomNavigation.height"
        :min="48"
        :max="80"
        :step="4"
        unit="px"
        @update:modelValue="value => updateBottomNavigation('height', value)"
      />
      <NumberInput
        label="Elevation"
        v-model="themeStore.currentTheme.bottomNavigation.elevation"
        :min="0"
        :max="24"
        :step="1"
        @update:modelValue="value => updateBottomNavigation('elevation', value)"
      />
      <NumberInput
        label="Icon Size"
        v-model="themeStore.currentTheme.bottomNavigation.iconSize"
        :min="16"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateBottomNavigation('iconSize', value)"
      />
      <NumberInput
        label="Label Font Size"
        v-model="themeStore.currentTheme.bottomNavigation.labelFontSize"
        :min="10"
        :max="16"
        :step="1"
        unit="px"
        @update:modelValue="value => updateBottomNavigation('labelFontSize', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bottom-navigation-section {
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
  .bottom-navigation-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>