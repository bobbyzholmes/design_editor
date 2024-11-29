<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from '../stores/themeStore';
import AppBar from './preview/AppBar.vue';

const themeStore = useThemeStore();
const theme = computed(() => themeStore.currentTheme);
</script>

<template>
  <div class="theme-preview" :class="{ 'dark-mode': theme.isDark }">
    <AppBar />
    <div class="preview-section">
      <h2>Buttons</h2>
      <button class="mdc-button mdc-button--raised">
        <span class="mdc-button__label">Raised Button</span>
      </button>
      <button class="mdc-button mdc-button--outlined">
        <span class="mdc-button__label">Outlined Button</span>
      </button>
      <button class="mdc-button">
        <span class="mdc-button__label">Text Button</span>
      </button>
    </div>

    <div class="preview-section">
      <h2>Typography</h2>
      <h1 class="headline-large">Headline Large</h1>
      <h2 class="headline-medium">Headline Medium</h2>
      <h3 class="headline-small">Headline Small</h3>
      <p class="body-large">Body Large Text</p>
      <p class="body-medium">Body Medium Text</p>
      <p class="body-small">Body Small Text</p>
    </div>

    <div class="preview-section">
      <h2>Cards</h2>
      <div class="mdc-card">
        <div class="mdc-card__content">
          <h2>Card Title</h2>
          <p>Card content with some sample text.</p>
        </div>
        <div class="mdc-card__actions">
          <button class="mdc-button mdc-card__action">
            <span class="mdc-button__label">Action</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-preview {
  padding: 5rem 1.5rem;
  background-color: v-bind('theme.colors.background');
  color: v-bind('theme.isDark ? "#ffffff" : "#000000"');
  border-radius: v-bind('theme.shape.borderRadius + "px"');
  font-family: v-bind('theme.typography.fontFamily');
  position: relative;

  .preview-section {
    margin-bottom: 2.5rem;
  }

  .mdc-button {
    margin: 0.5rem;
    background-color: v-bind('theme.colors.primary');
    border-radius: v-bind('theme.shape.borderRadius + "px"');
  }

  .mdc-card {
    padding: 1rem;
    background-color: v-bind('theme.colors.surface');
    border-radius: v-bind('theme.shape.borderRadius + "px"');
    box-shadow: 0 v-bind('theme.shape.elevation + "px"') v-bind('(theme.shape.elevation * 2) + "px"') rgba(0, 0, 0, 0.1);
  }
}
</style>