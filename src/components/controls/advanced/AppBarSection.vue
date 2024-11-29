<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateAppBar(property: string, value: any) {
  themeStore.updateTheme({
    appBar: {
      ...themeStore.currentTheme.appBar,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="app-bar-section">
    <div class="control-group">
      <h4>Position</h4>
      <div class="position-selector">
        <button 
          :class="{ active: themeStore.currentTheme.appBar.position === 'top' }"
          @click="updateAppBar('position', 'top')"
        >
          Top
        </button>
        <button 
          :class="{ active: themeStore.currentTheme.appBar.position === 'bottom' }"
          @click="updateAppBar('position', 'bottom')"
        >
          Bottom
        </button>
      </div>
    </div>

    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Background"
        v-model="themeStore.currentTheme.appBar.backgroundColor"
        @update:modelValue="value => updateAppBar('backgroundColor', value)"
      />
      <ColorInput
        label="Foreground"
        v-model="themeStore.currentTheme.appBar.foregroundColor"
        @update:modelValue="value => updateAppBar('foregroundColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Height"
        v-model="themeStore.currentTheme.appBar.height"
        :min="48"
        :max="96"
        :step="4"
        unit="px"
        @update:modelValue="value => updateAppBar('height', value)"
      />
      <NumberInput
        label="Elevation"
        v-model="themeStore.currentTheme.appBar.elevation"
        :min="0"
        :max="24"
        :step="1"
        @update:modelValue="value => updateAppBar('elevation', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-bar-section {
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

    .position-selector {
      display: flex;
      gap: 0.5rem;

      button {
        flex: 1;
        padding: 0.5rem;
        background: #f1f5f9;
        border: none;
        border-radius: 6px;
        color: #64748b;
        cursor: pointer;
        transition: all 0.2s ease;

        &.active {
          background: #6200ee;
          color: white;
        }

        &:hover:not(.active) {
          background: #e2e8f0;
        }
      }
    }
  }
}

:deep(.dark-mode) {
  .app-bar-section {
    .control-group {
      h4 {
        color: #94a3b8;
        border-bottom-color: #404040;
      }

      .position-selector button {
        background: #2d2d2d;
        color: #94a3b8;

        &.active {
          background: #6200ee;
          color: white;
        }

        &:hover:not(.active) {
          background: #404040;
        }
      }
    }
  }
}
</style>