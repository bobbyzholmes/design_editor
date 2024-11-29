import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Theme } from '../types/theme';
import { generateDefaultTheme } from '../utils/themeUtils';

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref<Theme>(generateDefaultTheme());
  const savedThemes = ref<Theme[]>([]);

  const isDarkMode = computed(() => currentTheme.value.isDark);

  function updateTheme(updates: Partial<Theme>) {
    currentTheme.value = { ...currentTheme.value, ...updates };
  }

  function saveTheme() {
    const themeToSave = { ...currentTheme.value, id: crypto.randomUUID() };
    savedThemes.value.push(themeToSave);
  }

  function loadTheme(themeId: string) {
    const theme = savedThemes.value.find(t => t.id === themeId);
    if (theme) {
      currentTheme.value = { ...theme };
    }
  }

  function deleteTheme(themeId: string) {
    const index = savedThemes.value.findIndex(t => t.id === themeId);
    if (index !== -1) {
      savedThemes.value.splice(index, 1);
    }
  }

  function exportTheme(): string {
    return JSON.stringify(currentTheme.value);
  }

  function importTheme(themeJson: string) {
    try {
      const theme = JSON.parse(themeJson);
      currentTheme.value = theme;
    } catch (error) {
      console.error('Failed to import theme:', error);
      throw new Error('Invalid theme format');
    }
  }

  function resetToDefault() {
    currentTheme.value = generateDefaultTheme();
  }

  return {
    currentTheme,
    savedThemes,
    isDarkMode,
    updateTheme,
    saveTheme,
    loadTheme,
    deleteTheme,
    exportTheme,
    importTheme,
    resetToDefault,
  };
});