<script setup lang="ts">
import { useThemeStore } from '../stores/themeStore';

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
  <div class="color-controls">
    <!-- Primary Colors -->
    <div class="color-section">
      <h3>Primary Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Primary</label>
          <input type="color" :value="themeStore.currentTheme.colors.primary" @input="e => updateColor('primary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Primary Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.primaryContainer" @input="e => updateColor('primaryContainer', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Primary</label>
          <input type="color" :value="themeStore.currentTheme.colors.onPrimary" @input="e => updateColor('onPrimary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Primary Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.onPrimaryContainer" @input="e => updateColor('onPrimaryContainer', e.target.value)" />
        </div>
      </div>
    </div>

    <!-- Secondary Colors -->
    <div class="color-section">
      <h3>Secondary Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Secondary</label>
          <input type="color" :value="themeStore.currentTheme.colors.secondary" @input="e => updateColor('secondary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Secondary Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.secondaryContainer" @input="e => updateColor('secondaryContainer', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Secondary</label>
          <input type="color" :value="themeStore.currentTheme.colors.onSecondary" @input="e => updateColor('onSecondary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Secondary Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.onSecondaryContainer" @input="e => updateColor('onSecondaryContainer', e.target.value)" />
        </div>
      </div>
    </div>

    <!-- Tertiary Colors -->
    <div class="color-section">
      <h3>Tertiary Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Tertiary</label>
          <input type="color" :value="themeStore.currentTheme.colors.tertiary" @input="e => updateColor('tertiary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Tertiary Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.tertiaryContainer" @input="e => updateColor('tertiaryContainer', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Tertiary</label>
          <input type="color" :value="themeStore.currentTheme.colors.onTertiary" @input="e => updateColor('onTertiary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Tertiary Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.onTertiaryContainer" @input="e => updateColor('onTertiaryContainer', e.target.value)" />
        </div>
      </div>
    </div>

    <!-- Error Colors -->
    <div class="color-section">
      <h3>Error Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Error</label>
          <input type="color" :value="themeStore.currentTheme.colors.error" @input="e => updateColor('error', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Error Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.errorContainer" @input="e => updateColor('errorContainer', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Error</label>
          <input type="color" :value="themeStore.currentTheme.colors.onError" @input="e => updateColor('onError', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Error Container</label>
          <input type="color" :value="themeStore.currentTheme.colors.onErrorContainer" @input="e => updateColor('onErrorContainer', e.target.value)" />
        </div>
      </div>
    </div>

    <!-- Neutral Colors -->
    <div class="color-section">
      <h3>Neutral Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Surface</label>
          <input type="color" :value="themeStore.currentTheme.colors.surface" @input="e => updateColor('surface', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Surface</label>
          <input type="color" :value="themeStore.currentTheme.colors.onSurface" @input="e => updateColor('onSurface', e.target.value)" />
        </div>
      </div>
    </div>

    <!-- Neutral Variant Colors -->
    <div class="color-section">
      <h3>Neutral Variant Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Surface Container Highest</label>
          <input type="color" :value="themeStore.currentTheme.colors.surfaceContainerHighest" @input="e => updateColor('surfaceContainerHighest', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Outline</label>
          <input type="color" :value="themeStore.currentTheme.colors.outline" @input="e => updateColor('outline', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Surface Variant</label>
          <input type="color" :value="themeStore.currentTheme.colors.onSurfaceVariant" @input="e => updateColor('onSurfaceVariant', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Shadow</label>
          <input type="color" :value="themeStore.currentTheme.colors.shadow" @input="e => updateColor('shadow', e.target.value)" />
        </div>
      </div>
    </div>

    <!-- Inverse Colors -->
    <div class="color-section">
      <h3>Inverse Colors</h3>
      <div class="color-group">
        <div class="color-input">
          <label>Inverse Surface</label>
          <input type="color" :value="themeStore.currentTheme.colors.inverseSurface" @input="e => updateColor('inverseSurface', e.target.value)" />
        </div>
        <div class="color-input">
          <label>Inverse Primary</label>
          <input type="color" :value="themeStore.currentTheme.colors.inversePrimary" @input="e => updateColor('inversePrimary', e.target.value)" />
        </div>
        <div class="color-input">
          <label>On Inverse Surface</label>
          <input type="color" :value="themeStore.currentTheme.colors.onInverseSurface" @input="e => updateColor('onInverseSurface', e.target.value)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-controls {
  .color-section {
    margin-bottom: 2rem;
    background-color: #f8fafc;
    padding: 1.5rem;
    border-radius: 12px;

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #64748b;
    }
  }

  .color-group {
    display: grid;
    gap: 1rem;
  }

  .color-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    label {
      flex: 1;
      font-weight: 500;
      color: #475569;
    }

    input[type="color"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 40px;
      height: 40px;
      padding: 0;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background: none;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 6px;
      }

      &::-moz-color-swatch {
        border: none;
        border-radius: 6px;
      }
    }
  }
}

:deep(.dark-mode) {
  .color-section {
    background-color: #2d2d2d;

    h3 {
      color: #94a3b8;
    }
  }

  .color-input label {
    color: #cbd5e1;
  }
}
</style>