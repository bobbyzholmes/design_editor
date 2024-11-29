<script setup lang="ts">
import type { Theme } from '../types/theme';
import { downloadJson } from '../utils/fileUtils';

const props = defineProps<{
  theme: Theme;
}>();

defineEmits<{
  (e: 'load'): void;
  (e: 'delete'): void;
}>();

function downloadTheme() {
  const filename = `${props.theme.name.toLowerCase().replace(/\s+/g, '-')}-theme.json`;
  downloadJson(props.theme, filename);
}
</script>

<template>
  <div class="theme-card" :style="{
    '--primary-color': theme.colors.primary,
    '--secondary-color': theme.colors.secondary,
    '--accent-color': theme.colors.accent
  }">
    <div class="theme-preview">
      <div class="color-strip primary"></div>
      <div class="color-strip secondary"></div>
      <div class="color-strip accent"></div>
    </div>
    <div class="theme-info">
      <h3>{{ theme.name }}</h3>
      <p class="theme-details">
        Font: {{ theme.typography.fontFamily.split(',')[0] }}<br>
        Radius: {{ theme.shape.borderRadius }}px
      </p>
      <div class="card-actions">
        <button class="load-button" @click="$emit('load')">Load Theme</button>
        <button class="download-button" @click="downloadTheme">
          <span class="download-icon">↓</span>
        </button>
        <button class="delete-button" @click="$emit('delete')">
          <span class="delete-icon">×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  .theme-preview {
    height: 100px;
    display: flex;
  }

  .color-strip {
    flex: 1;
    
    &.primary {
      background-color: var(--primary-color);
    }
    &.secondary {
      background-color: var(--secondary-color);
    }
    &.accent {
      background-color: var(--accent-color);
    }
  }

  .theme-info {
    padding: 1rem;

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.2rem;
    }

    .theme-details {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .card-actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      .load-button {
        flex: 1;
        padding: 0.5rem;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        
        &:hover {
          opacity: 0.9;
        }
      }

      .download-button,
      .delete-button {
        width: 36px;
        height: 36px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .download-button {
        background-color: #0ea5e9;
        
        &:hover {
          background-color: #0284c7;
        }

        .download-icon {
          font-size: 1.2rem;
          line-height: 1;
        }
      }

      .delete-button {
        background-color: #ef4444;

        &:hover {
          background-color: #dc2626;
        }

        .delete-icon {
          font-size: 1.5rem;
          line-height: 1;
        }
      }
    }
  }
}
</style>