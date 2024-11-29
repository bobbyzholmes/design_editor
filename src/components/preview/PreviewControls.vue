<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'update:device', value: 'web' | 'tablet' | 'mobile'): void;
  (e: 'update:orientation', value: 'portrait' | 'landscape'): void;
}>();

const selectedDevice = ref<'web' | 'tablet' | 'mobile'>('web');
const orientation = ref<'portrait' | 'landscape'>('portrait');

function updateDevice(device: 'web' | 'tablet' | 'mobile') {
  selectedDevice.value = device;
  emit('update:device', device);
}

function updateOrientation(newOrientation: 'portrait' | 'landscape') {
  orientation.value = newOrientation;
  emit('update:orientation', newOrientation);
}
</script>

<template>
  <div class="preview-controls">
    <div class="device-selector">
      <button
        v-for="device in ['web', 'tablet', 'mobile']"
        :key="device"
        :class="['device-button', { active: selectedDevice === device }]"
        @click="updateDevice(device as 'web' | 'tablet' | 'mobile')"
      >
        <span class="icon">
          {{ device === 'web' ? '🌐' : device === 'tablet' ? '📱' : '📱' }}
        </span>
        {{ device.charAt(0).toUpperCase() + device.slice(1) }}
      </button>
    </div>
    
    <div v-if="selectedDevice !== 'web'" class="orientation-selector">
      <button
        v-for="orient in ['portrait', 'landscape']"
        :key="orient"
        :class="['orientation-button', { active: orientation === orient }]"
        @click="updateOrientation(orient as 'portrait' | 'landscape')"
      >
        <span class="icon">{{ orient === 'portrait' ? '📱' : '📱' }}</span>
        {{ orient.charAt(0).toUpperCase() + orient.slice(1) }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview-controls {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .device-selector,
  .orientation-selector {
    display: flex;
    gap: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background-color: white;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background-color: #6200ee;
      color: white;
      border-color: #6200ee;
    }

    &:hover:not(.active) {
      background-color: #f8fafc;
    }

    .icon {
      font-size: 1.2rem;
    }
  }
}

:deep(.dark-mode) {
  .preview-controls {
    background-color: #2d2d2d;

    button {
      background-color: #404040;
      border-color: #4a5568;
      color: #94a3b8;

      &.active {
        background-color: #6200ee;
        color: white;
        border-color: #6200ee;
      }

      &:hover:not(.active) {
        background-color: #4a5568;
      }
    }
  }
}
</style>