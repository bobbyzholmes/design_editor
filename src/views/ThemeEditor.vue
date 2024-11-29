<script setup lang="ts">
import { ref } from 'vue';
import ThemePreview from '../components/ThemePreview.vue';
import ThemeControls from '../components/ThemeControls.vue';
import PreviewControls from '../components/preview/PreviewControls.vue';
import DeviceMockup from '../components/preview/DeviceMockup.vue';

const selectedDevice = ref<'web' | 'tablet' | 'mobile'>('web');
const orientation = ref<'portrait' | 'landscape'>('portrait');
</script>

<template>
  <div class="theme-editor">
    <div class="editor-layout">
      <aside class="controls-panel">
        <ThemeControls />
      </aside>
      <main class="preview-panel">
        <PreviewControls
          @update:device="selectedDevice = $event"
          @update:orientation="orientation = $event"
        />
        <DeviceMockup
          :device="selectedDevice"
          :orientation="orientation"
        >
          <ThemePreview />
        </DeviceMockup>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-editor {
  height: calc(100vh - 73px); // Subtract navbar height
  
  .editor-layout {
    display: grid;
    grid-template-columns: 400px 1fr;
    height: 100%;
    max-width: 1920px;
    margin: 0 auto;
    
    .controls-panel {
      background-color: white;
      border-right: 1px solid #e2e8f0;
      overflow-y: auto;
      padding: 1.5rem;
      
      :deep(.theme-controls) {
        background-color: transparent;
        padding: 0;
      }
    }
    
    .preview-panel {
      padding: 2rem;
      overflow-y: auto;
      background-color: #f8fafc;
    }
  }
}

:deep(.dark-mode) {
  .editor-layout {
    .controls-panel {
      background-color: #2d2d2d;
      border-right-color: #404040;
    }
    
    .preview-panel {
      background-color: #1a1a1a;
    }
  }
}
</style>