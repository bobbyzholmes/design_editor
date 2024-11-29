<script setup lang="ts">
import { useThemeStore } from './stores/themeStore';

const themeStore = useThemeStore();
</script>

<template>
  <div class="app" :class="{ 'dark-mode': themeStore.isDarkMode }">
    <nav class="main-nav">
      <div class="nav-content">
        <div class="nav-brand">
          <h1>Material Theme Editor</h1>
        </div>
        <div class="nav-links">
          <router-link to="/">Theme Editor</router-link>
          <router-link to="/saved">Saved Themes</router-link>
          <router-link to="/docs">Documentation</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  background-color: #f8fafc;
  
  &.dark-mode {
    background-color: #1a1a1a;
    color: #ffffff;
    
    .main-nav {
      background-color: #2d2d2d;
      border-bottom: 1px solid #404040;
      
      a {
        color: #ffffff;
        
        &.router-link-active {
          color: #7c3aed;
        }
        
        &:hover {
          color: #a78bfa;
        }
      }
    }
  }
}

.main-nav {
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  
  .nav-content {
    max-width: 1920px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-brand h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1a1a1a;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    
    a {
      text-decoration: none;
      color: #64748b;
      font-weight: 500;
      transition: all 0.2s ease;
      
      &.router-link-active {
        color: #6200ee;
      }
      
      &:hover {
        color: #7c3aed;
      }
    }
  }
}
</style>