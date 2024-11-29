<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '../stores/themeStore';
import ColorControls from './ColorControls.vue';
import BasicControls from './controls/BasicControls.vue';
import AdvancedControls from './controls/AdvancedControls.vue';

const themeStore = useThemeStore();
const activeTab = ref('basic');
</script>

<template>
  <div class="theme-controls">
    <section>
      <h2>Theme Controls</h2>
      
      <div class="tabs">
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'basic' }"
          @click="activeTab = 'basic'"
        >
          Basic
        </button>
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'advanced' }"
          @click="activeTab = 'advanced'"
        >
          Advanced
        </button>
      </div>

      <div class="tab-content">
        <BasicControls v-if="activeTab === 'basic'" />
        <AdvancedControls v-else />
      </div>
    </section>

    <div class="actions">
      <button class="primary" @click="themeStore.saveTheme">Save Theme</button>
      <button class="secondary" @click="themeStore.resetToDefault">Reset</button>
      <button class="secondary" @click="themeStore.exportTheme">Export</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-controls {
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
  }

  section {
    margin-bottom: 2rem;
  }

  .tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }

  .tab-button {
    background: none;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      color: #6200ee;
      font-weight: 600;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #6200ee;
      }
    }

    &:hover:not(.active) {
      color: #334155;
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    
    button {
      flex: 1;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.2s ease;
      
      &.primary {
        background-color: #6200ee;
        color: white;
        
        &:hover {
          background-color: #7c3aed;
        }
      }
      
      &.secondary {
        background-color: #f1f5f9;
        color: #475569;
        
        &:hover {
          background-color: #e2e8f0;
        }
      }
    }
  }
}

:deep(.dark-mode) {
  .theme-controls {
    h2 {
      color: #ffffff;
    }
    
    .tabs {
      border-bottom-color: #404040;
    }

    .tab-button {
      color: #94a3b8;

      &:hover:not(.active) {
        color: #e2e8f0;
      }
    }
    
    .actions {
      button.secondary {
        background-color: #404040;
        color: #e2e8f0;
        
        &:hover {
          background-color: #4a5568;
        }
      }
    }
  }
}
</style>