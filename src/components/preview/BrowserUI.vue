<script setup lang="ts">
import { ref } from 'vue';

const url = ref('https://example.com');
</script>

<template>
  <div class="browser-ui">
    <div class="browser-header">
      <div class="window-controls">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
      <div class="address-bar">
        <div class="actions">
          <button class="nav-button">←</button>
          <button class="nav-button">→</button>
          <button class="nav-button">↻</button>
        </div>
        <div class="url-input">
          <span class="protocol">https://</span>
          <input type="text" v-model="url" readonly>
        </div>
      </div>
    </div>
    <div class="browser-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.browser-ui {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .browser-header {
    background: #f1f5f9;
    padding: 0.5rem;
    border-bottom: 1px solid #e2e8f0;

    .window-controls {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;

      .control {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &.close { background: #ef4444; }
        &.minimize { background: #fbbf24; }
        &.maximize { background: #22c55e; }
      }
    }

    .address-bar {
      display: flex;
      gap: 0.5rem;
      padding: 0.25rem;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;

      .actions {
        display: flex;
        gap: 0.25rem;

        .nav-button {
          padding: 0.25rem 0.5rem;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;

          &:hover {
            background: #f8fafc;
            border-radius: 4px;
          }
        }
      }

      .url-input {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0.25rem 0.5rem;
        background: #f8fafc;
        border-radius: 4px;

        .protocol {
          color: #64748b;
          font-size: 0.875rem;
        }

        input {
          flex: 1;
          border: none;
          background: none;
          color: #0f172a;
          font-size: 0.875rem;
          padding: 0 0.25rem;
          cursor: default;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  .browser-content {
    min-height: 400px;
  }
}

:deep(.dark-mode) {
  .browser-ui {
    background: #1a1a1a;

    .browser-header {
      background: #2d2d2d;
      border-bottom-color: #404040;

      .address-bar {
        background: #404040;
        border-color: #4a5568;

        .nav-button {
          color: #94a3b8;

          &:hover {
            background: #4a5568;
          }
        }

        .url-input {
          background: #2d2d2d;

          .protocol {
            color: #94a3b8;
          }

          input {
            color: #e2e8f0;
          }
        }
      }
    }
  }
}
</style>