<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateTabBar(property: string, value: any) {
  themeStore.updateTheme({
    tabBar: {
      ...themeStore.currentTheme.tabBar,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="tab-bar-section">
    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Background"
        v-model="themeStore.currentTheme.tabBar.backgroundColor"
        @update:modelValue="value => updateTabBar('backgroundColor', value)"
      />
      <ColorInput
        label="Indicator"
        v-model="themeStore.currentTheme.tabBar.indicatorColor"
        @update:modelValue="value => updateTabBar('indicatorColor', value)"
      />
      <ColorInput
        label="Label"
        v-model="themeStore.currentTheme.tabBar.labelColor"
        @update:modelValue="value => updateTabBar('labelColor', value)"
      />
      <ColorInput
        label="Unselected Label"
        v-model="themeStore.currentTheme.tabBar.unselectedLabelColor"
        @update:modelValue="value => updateTabBar('unselectedLabelColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Height"
        v-model="themeStore.currentTheme.tabBar.height"
        :min="0"
        :step="1"
        unit="px"
        @update:modelValue="value => updateTabBar('height', value)"
      />
      <NumberInput
        label="Indicator Height"
        v-model="themeStore.currentTheme.tabBar.indicatorHeight"
        :min="0"
        :max="8"
        :step="1"
        unit="px"
        @update:modelValue="value => updateTabBar('indicatorHeight', value)"
      />
      <NumberInput
        label="Indicator Weight"
        v-model="themeStore.currentTheme.tabBar.indicatorWeight"
        :min="1"
        :max="4"
        :step="1"
        unit="px"
        @update:modelValue="value => updateTabBar('indicatorWeight', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-bar-section {
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
  .tab-bar-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>