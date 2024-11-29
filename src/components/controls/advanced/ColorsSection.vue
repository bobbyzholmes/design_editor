<script setup lang="ts">
import { useThemeStore } from '../../../stores/themeStore';
import ColorInput from './shared/ColorInput.vue';

const themeStore = useThemeStore();

function updateColor(colorType: string, value: string) {
  themeStore.updateTheme({
    colors: {
      ...themeStore.currentTheme.colors,
      [colorType]: value
    }
  });
}
</script>

<template>
  <div class="colors-section">
    <!-- Primary Colors -->
    <div class="color-group">
      <h4>Primary Colors</h4>
      <ColorInput
        label="Primary"
        v-model="themeStore.currentTheme.colors.primary"
        @update:modelValue="value => updateColor('primary', value)"
      />
      <ColorInput
        label="Primary Container"
        v-model="themeStore.currentTheme.colors.primaryContainer"
        @update:modelValue="value => updateColor('primaryContainer', value)"
      />
      <ColorInput
        label="On Primary"
        v-model="themeStore.currentTheme.colors.onPrimary"
        @update:modelValue="value => updateColor('onPrimary', value)"
      />
      <ColorInput
        label="On Primary Container"
        v-model="themeStore.currentTheme.colors.onPrimaryContainer"
        @update:modelValue="value => updateColor('onPrimaryContainer', value)"
      />
    </div>

    <!-- Secondary Colors -->
    <div class="color-group">
      <h4>Secondary Colors</h4>
      <ColorInput
        label="Secondary"
        v-model="themeStore.currentTheme.colors.secondary"
        @update:modelValue="value => updateColor('secondary', value)"
      />
      <ColorInput
        label="Secondary Container"
        v-model="themeStore.currentTheme.colors.secondaryContainer"
        @update:modelValue="value => updateColor('secondaryContainer', value)"
      />
      <ColorInput
        label="On Secondary"
        v-model="themeStore.currentTheme.colors.onSecondary"
        @update:modelValue="value => updateColor('onSecondary', value)"
      />
      <ColorInput
        label="On Secondary Container"
        v-model="themeStore.currentTheme.colors.onSecondaryContainer"
        @update:modelValue="value => updateColor('onSecondaryContainer', value)"
      />
    </div>

    <!-- Tertiary Colors -->
    <div class="color-group">
      <h4>Tertiary Colors</h4>
      <ColorInput
        label="Tertiary"
        v-model="themeStore.currentTheme.colors.tertiary"
        @update:modelValue="value => updateColor('tertiary', value)"
      />
      <ColorInput
        label="Tertiary Container"
        v-model="themeStore.currentTheme.colors.tertiaryContainer"
        @update:modelValue="value => updateColor('tertiaryContainer', value)"
      />
      <ColorInput
        label="On Tertiary"
        v-model="themeStore.currentTheme.colors.onTertiary"
        @update:modelValue="value => updateColor('onTertiary', value)"
      />
      <ColorInput
        label="On Tertiary Container"
        v-model="themeStore.currentTheme.colors.onTertiaryContainer"
        @update:modelValue="value => updateColor('onTertiaryContainer', value)"
      />
    </div>

    <!-- Error Colors -->
    <div class="color-group">
      <h4>Error Colors</h4>
      <ColorInput
        label="Error"
        v-model="themeStore.currentTheme.colors.error"
        @update:modelValue="value => updateColor('error', value)"
      />
      <ColorInput
        label="Error Container"
        v-model="themeStore.currentTheme.colors.errorContainer"
        @update:modelValue="value => updateColor('errorContainer', value)"
      />
      <ColorInput
        label="On Error"
        v-model="themeStore.currentTheme.colors.onError"
        @update:modelValue="value => updateColor('onError', value)"
      />
      <ColorInput
        label="On Error Container"
        v-model="themeStore.currentTheme.colors.onErrorContainer"
        @update:modelValue="value => updateColor('onErrorContainer', value)"
      />
    </div>

    <!-- Neutral Colors -->
    <div class="color-group">
      <h4>Neutral Colors</h4>
      <ColorInput
        label="Surface"
        v-model="themeStore.currentTheme.colors.surface"
        @update:modelValue="value => updateColor('surface', value)"
      />
      <ColorInput
        label="On Surface"
        v-model="themeStore.currentTheme.colors.onSurface"
        @update:modelValue="value => updateColor('onSurface', value)"
      />
    </div>

    <!-- Neutral Variant Colors -->
    <div class="color-group">
      <h4>Neutral Variant Colors</h4>
      <ColorInput
        label="Surface Container Highest"
        v-model="themeStore.currentTheme.colors.surfaceContainerHighest"
        @update:modelValue="value => updateColor('surfaceContainerHighest', value)"
      />
      <ColorInput
        label="Outline"
        v-model="themeStore.currentTheme.colors.outline"
        @update:modelValue="value => updateColor('outline', value)"
      />
      <ColorInput
        label="On Surface Variant"
        v-model="themeStore.currentTheme.colors.onSurfaceVariant"
        @update:modelValue="value => updateColor('onSurfaceVariant', value)"
      />
      <ColorInput
        label="Shadow"
        v-model="themeStore.currentTheme.colors.shadow"
        @update:modelValue="value => updateColor('shadow', value)"
      />
    </div>

    <!-- Inverse Colors -->
    <div class="color-group">
      <h4>Inverse Colors</h4>
      <ColorInput
        label="Inverse Surface"
        v-model="themeStore.currentTheme.colors.inverseSurface"
        @update:modelValue="value => updateColor('inverseSurface', value)"
      />
      <ColorInput
        label="Inverse Primary"
        v-model="themeStore.currentTheme.colors.inversePrimary"
        @update:modelValue="value => updateColor('inversePrimary', value)"
      />
      <ColorInput
        label="On Inverse Surface"
        v-model="themeStore.currentTheme.colors.onInverseSurface"
        @update:modelValue="value => updateColor('onInverseSurface', value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.colors-section {
  padding: 1rem;

  .color-group {
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
  .colors-section {
    .color-group h4 {
      color: #94a3b8;
      border-bottom-color: #404040;
    }
  }
}
</style>