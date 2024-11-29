<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';
import NumberInput from './shared/NumberInput.vue';

const themeStore = useThemeStore();

function updateInputDecoration(property: string, value: any) {
  themeStore.updateTheme({
    inputDecoration: {
      ...themeStore.currentTheme.inputDecoration,
      [property]: value
    }
  });
}

function updateInputPadding(dimension: string, value: number) {
  themeStore.updateTheme({
    inputDecoration: {
      ...themeStore.currentTheme.inputDecoration,
      padding: {
        ...themeStore.currentTheme.inputDecoration.padding,
        [dimension]: value
      }
    }
  });
}
</script>

<template>
  <div class="input-decoration-section">
    <div class="control-group">
      <h4>Fill Colors</h4>
      <ColorInput
        label="Fill Color"
        v-model="themeStore.currentTheme.inputDecoration.fillColor"
        @update:modelValue="value => updateInputDecoration('fillColor', value)"
      />
      <ColorInput
        label="Focused Fill"
        v-model="themeStore.currentTheme.inputDecoration.focusedFillColor"
        @update:modelValue="value => updateInputDecoration('focusedFillColor', value)"
      />
      <ColorInput
        label="Error Fill"
        v-model="themeStore.currentTheme.inputDecoration.errorFillColor"
        @update:modelValue="value => updateInputDecoration('errorFillColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Border Colors</h4>
      <ColorInput
        label="Border"
        v-model="themeStore.currentTheme.inputDecoration.borderColor"
        @update:modelValue="value => updateInputDecoration('borderColor', value)"
      />
      <ColorInput
        label="Focused Border"
        v-model="themeStore.currentTheme.inputDecoration.focusedBorderColor"
        @update:modelValue="value => updateInputDecoration('focusedBorderColor', value)"
      />
      <ColorInput
        label="Error Border"
        v-model="themeStore.currentTheme.inputDecoration.errorBorderColor"
        @update:modelValue="value => updateInputDecoration('errorBorderColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Label Colors</h4>
      <ColorInput
        label="Label"
        v-model="themeStore.currentTheme.inputDecoration.labelColor"
        @update:modelValue="value => updateInputDecoration('labelColor', value)"
      />
      <ColorInput
        label="Focused Label"
        v-model="themeStore.currentTheme.inputDecoration.focusedLabelColor"
        @update:modelValue="value => updateInputDecoration('focusedLabelColor', value)"
      />
      <ColorInput
        label="Error Label"
        v-model="themeStore.currentTheme.inputDecoration.errorLabelColor"
        @update:modelValue="value => updateInputDecoration('errorLabelColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Text Colors</h4>
      <ColorInput
        label="Text"
        v-model="themeStore.currentTheme.inputDecoration.textColor"
        @update:modelValue="value => updateInputDecoration('textColor', value)"
      />
      <ColorInput
        label="Hint"
        v-model="themeStore.currentTheme.inputDecoration.hintColor"
        @update:modelValue="value => updateInputDecoration('hintColor', value)"
      />
      <ColorInput
        label="Error Text"
        v-model="themeStore.currentTheme.inputDecoration.errorTextColor"
        @update:modelValue="value => updateInputDecoration('errorTextColor', value)"
      />
    </div>

    <div class="control-group">
      <h4>Dimensions</h4>
      <NumberInput
        label="Border Radius"
        v-model="themeStore.currentTheme.inputDecoration.borderRadius"
        :min="0"
        :max="24"
        :step="1"
        unit="px"
        @update:modelValue="value => updateInputDecoration('borderRadius', value)"
      />
      <NumberInput
        label="Border Width"
        v-model="themeStore.currentTheme.inputDecoration.borderWidth"
        :min="0"
        :max="4"
        :step="1"
        unit="px"
        @update:modelValue="value => updateInputDecoration('borderWidth', value)"
      />
      <NumberInput
        label="Focused Border Width"
        v-model="themeStore.currentTheme.inputDecoration.focusedBorderWidth"
        :min="0"
        :max="4"
        :step="1"
        unit="px"
        @update:modelValue="value => updateInputDecoration('focusedBorderWidth', value)"
      />
    </div>

    <div class="control-group">
      <h4>Padding</h4>
      <NumberInput
        label="Horizontal"
        v-model="themeStore.currentTheme.inputDecoration.padding.horizontal"
        :min="4"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateInputPadding('horizontal', value)"
      />
      <NumberInput
        label="Vertical"
        v-model="themeStore.currentTheme.inputDecoration.padding.vertical"
        :min="4"
        :max="32"
        :step="2"
        unit="px"
        @update:modelValue="value => updateInputPadding('vertical', value)"
      />
    </div>

    <div class="control-group">
      <h4>Typography</h4>
      <NumberInput
        label="Font Size"
        v-model="themeStore.currentTheme.inputDecoration.fontSize"
        :min="12"
        :max="24"
        :step="1"
        unit="px"
        @update:modelValue="value => updateInputDecoration('fontSize', value)"
      />
      <NumberInput
        label="Label Font Size"
        v-model="themeStore.currentTheme.inputDecoration.labelFontSize"
        :min="10"
        :max="16"
        :step="1"
        unit="px"
        @update:modelValue="value => updateInputDecoration('labelFontSize', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-decoration-section {
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
  .input-decoration-section {
    .control-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>