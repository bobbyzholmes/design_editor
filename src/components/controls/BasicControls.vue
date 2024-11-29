<script setup lang="ts">
import { useThemeStore } from '../../stores/themeStore';
import ColorControls from '../ColorControls.vue';

const themeStore = useThemeStore();

function updateTypography(property: string, value: string) {
  themeStore.updateTheme({
    typography: {
      ...themeStore.currentTheme.typography,
      [property]: value
    }
  });
}

function updateShape(property: string, value: number) {
  themeStore.updateTheme({
    shape: {
      ...themeStore.currentTheme.shape,
      [property]: value
    }
  });
}
</script>

<template>
  <div class="basic-controls">
    <!-- Colors Section -->
    <ColorControls />

    <!-- Typography Section -->
    <div class="section-content">
      <h3>Typography</h3>
      <div class="control-group">
        <label>Font Family</label>
        <select @change="e => updateTypography('fontFamily', e.target.value)" class="select-input">
          <option value="Roboto, sans-serif">Roboto</option>
          <option value="Inter, sans-serif">Inter</option>
          <option value="'Open Sans', sans-serif">Open Sans</option>
        </select>
      </div>
    </div>

    <!-- Shape Section -->
    <div class="section-content">
      <h3>Shape</h3>
      <div class="control-group">
        <label>Border Radius</label>
        <div class="range-control">
          <input type="range" min="0" max="24" :value="themeStore.currentTheme.shape.borderRadius" @input="e => updateShape('borderRadius', +e.target.value)" />
          <span class="range-value">{{ themeStore.currentTheme.shape.borderRadius }}px</span>
        </div>
      </div>
      <div class="control-group">
        <label>Elevation</label>
        <div class="range-control">
          <input type="range" min="0" max="24" :value="themeStore.currentTheme.shape.elevation" @input="e => updateShape('elevation', +e.target.value)" />
          <span class="range-value">{{ themeStore.currentTheme.shape.elevation }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basic-controls {
  .section-content {
    background-color: #f8fafc;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #64748b;
    }
  }

  .control-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    label {
      min-width: 120px;
      font-weight: 500;
      color: #475569;
    }
  }

  .range-control {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    input[type="range"] {
      flex: 1;
    }
    
    .range-value {
      min-width: 40px;
      text-align: right;
      color: #64748b;
    }
  }

  .select-input {
    flex: 1;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background-color: white;
    color: #1a1a1a;
  }
}

:deep(.dark-mode) {
  .basic-controls {
    .section-content {
      background-color: #2d2d2d;
      
      h3 {
        color: #94a3b8;
      }
    }
    
    .control-group label {
      color: #cbd5e1;
    }
    
    .select-input {
      background-color: #404040;
      border-color: #4a5568;
      color: #ffffff;
    }
  }
}
</style>