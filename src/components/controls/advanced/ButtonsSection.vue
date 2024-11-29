<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();
const activeButtonType = ref('filled');

function updateButton(type: string, property: string, value: any) {
  const updatedButtons = {
    ...themeStore.currentTheme.buttons,
    [type]: {
      ...themeStore.currentTheme.buttons[type as keyof typeof themeStore.currentTheme.buttons],
      [property]: value
    }
  };
  
  themeStore.updateTheme({ buttons: updatedButtons });
}

function updateButtonPadding(type: string, dimension: string, value: number) {
  const updatedButtons = {
    ...themeStore.currentTheme.buttons,
    [type]: {
      ...themeStore.currentTheme.buttons[type as keyof typeof themeStore.currentTheme.buttons],
      padding: {
        ...themeStore.currentTheme.buttons[type as keyof typeof themeStore.currentTheme.buttons].padding,
        [dimension]: value
      }
    }
  };
  
  themeStore.updateTheme({ buttons: updatedButtons });
}
</script>

<template>
  <div class="buttons-section">
    <div class="button-type-selector">
      <button 
        v-for="type in ['filled', 'outlined', 'text']" 
        :key="type"
        :class="{ active: activeButtonType === type }"
        @click="activeButtonType = type"
      >
        {{ type.charAt(0).toUpperCase() + type.slice(1) }}
      </button>
    </div>

    <div class="control-group">
      <h4>Colors</h4>
      <ColorInput
        label="Background"
        v-model="themeStore.currentTheme.buttons[activeButtonType].backgroundColor"
        @update:modelValue="value => updateButton(activeButtonType, 'backgroundColor', value)"
      />
      <ColorInput
        label="Foreground"
        v-model="themeStore.currentTheme.buttons[activeButtonType].foregroundColor"
        @update:modelValue="value => updateButton(activeButtonType, 'foregroundColor', value)"
      />
      <ColorInput
        v-if="activeButtonType === 'outlined'"
        label="Border"
        v-model="themeStore.currentTheme.buttons.outlined.borderColor"
        @update:modelValue="value => updateButton('outlined', 'borderColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Horizontal Padding"
        v-model="themeStore.currentTheme.buttons[activeButtonType].padding.horizontal"
        :min="4"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateButtonPadding(activeButtonType, 'horizontal', value)"
      />
      <NumberInput
        label="Vertical Padding"
        v-model="themeStore.currentTheme.buttons[activeButtonType].padding.vertical"
        :min="4"
        :max="24"
        :step="2"
        unit="px"
        @update:modelValue="value => updateButtonPadding(activeButtonType, 'vertical', value)"
      />
      <NumberInput
        label="Font Size"
        v-model="themeStore.currentTheme.buttons[activeButtonType].fontSize"
        :min="12"
        :max="20"
        :step="1"
        unit="px"
        @update:modelValue="value => updateButton(activeButtonType, 'fontSize', value)"
      />
      <NumberInput
        v-if="activeButtonType === 'filled'"
        label="Elevation"
        v-model="themeStore.currentTheme.buttons.filled.elevation"
        :min="0"
        :max="24"
        :step="1"
        @update:modelValue="value => updateButton('filled', 'elevation', value)"
      />
      <NumberInput
        v-if="activeButtonType === 'outlined'"
        label="Border Width"
        v-model="themeStore.currentTheme.buttons.outlined.borderWidth"
        :min="1"
        :max="4"
        :step="1"
        unit="px"
        @update:modelValue="value => updateButton('outlined', 'borderWidth', value)"
      />
    </div>

    <div class="control-group">
      <h4>States</h4>
      <NumberInput
        label="Hover Opacity"
        v-model="themeStore.currentTheme.buttons[activeButtonType].hoverOpacity"
        :min="0"
        :max="1"
        :step="0.02"
        @update:modelValue="value => updateButton(activeButtonType, 'hoverOpacity', value)"
      />
      <NumberInput
        label="Pressed Opacity"
        v-model="themeStore.currentTheme.buttons[activeButtonType].pressedOpacity"
        :min="0"
        :max="1"
        :step="0.02"
        @update:modelValue="value => updateButton(activeButtonType, 'pressedOpacity', value)"
      />
      <NumberInput
        label="Disabled Opacity"
        v-model="themeStore.currentTheme.buttons[activeButtonType].disabledOpacity"
        :min="0"
        :max="1"
        :step="0.02"
        @update:modelValue="value => updateButton(activeButtonType, 'disabledOpacity', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons-section {
  padding: 1rem;

  .button-type-selector {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    
    button {
      flex: 1;
      padding: 0.5rem;
      background: #f1f5f9;
      border: none;
      border-radius: 6px;
      color: #64748b;
      font-size: 0.875rem;
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
  .buttons-section {
    .button-type-selector button {
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

    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>