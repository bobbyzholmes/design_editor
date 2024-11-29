<script setup lang="ts">
import { useThemeStore } from '../stores/themeStore';
import ThemeCard from '../components/ThemeCard.vue';

const themeStore = useThemeStore();
</script>

<template>
  <div class="saved-themes">
    <h1 class="page-title">Saved Themes</h1>
    <div class="themes-grid">
      <div v-if="themeStore.savedThemes.length === 0" class="no-themes">
        <p>No saved themes yet. Create and save a theme from the editor!</p>
      </div>
      <ThemeCard
        v-for="theme in themeStore.savedThemes"
        :key="theme.id"
        :theme="theme"
        @load="themeStore.loadTheme(theme.id)"
        @delete="themeStore.deleteTheme(theme.id)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.saved-themes {
  padding: 2rem;

  .page-title {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }

  .themes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .no-themes {
    text-align: center;
    padding: 3rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    grid-column: 1 / -1;
  }
}

:deep(.dark-mode) {
  .page-title {
    color: #e2e8f0;
  }

  .no-themes {
    background-color: #2d2d2d;
    color: #e2e8f0;
  }
}
</style>