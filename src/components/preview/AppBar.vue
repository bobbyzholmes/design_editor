<script setup lang="ts">
import { useThemeStore } from '../../stores/themeStore';

const themeStore = useThemeStore();
</script>

<template>
  <div 
    class="app-bar"
    :style="{
      backgroundColor: themeStore.currentTheme.appBar.backgroundColor,
      color: themeStore.currentTheme.appBar.foregroundColor,
      height: `${themeStore.currentTheme.appBar.height}px`,
      position: 'absolute',
      top: themeStore.currentTheme.appBar.position === 'top' ? 0 : 'auto',
      bottom: themeStore.currentTheme.appBar.position === 'bottom' ? 0 : 'auto',
      boxShadow: `0 ${themeStore.currentTheme.appBar.elevation}px ${themeStore.currentTheme.appBar.elevation * 2}px rgba(0, 0, 0, 0.1)`,
      transition: 'all 0.3s ease'
    }"
  >
    <div class="app-bar-content">
      <h1>Application Title</h1>
      <div class="actions">
        <button>Action 1</button>
        <button>Action 2</button>
        <button>Action 3</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-bar {
  width: 100%;
  z-index: 100;
  left: 0;
  right: 0;

  .app-bar-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    h1 {
      font-size: 1.25rem;
      font-weight: 500;
      margin: 0;
    }

    .actions {
      display: flex;
      gap: 1rem;

      button {
        background: none;
        border: none;
        color: inherit;
        padding: 0.5rem;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>