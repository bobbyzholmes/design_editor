<script setup lang="ts">
import BrowserUI from './BrowserUI.vue';

defineProps<{
  device: 'web' | 'tablet' | 'mobile';
  orientation: 'portrait' | 'landscape';
}>();
</script>

<template>
  <div 
    class="device-mockup"
    :class="[device, orientation]"
  >
    <template v-if="device === 'web'">
      <BrowserUI>
        <slot></slot>
      </BrowserUI>
    </template>
    <template v-else>
      <div class="device-frame">
        <div class="device-screen">
          <slot></slot>
        </div>
        <div class="device-home-button"></div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.device-mockup {
  position: relative;
  margin: 0 auto;
  
  &.mobile {
    width: 375px;
    
    &.portrait .device-frame {
      padding-bottom: 177.78%;
    }
    
    &.landscape .device-frame {
      padding-bottom: 56.25%;
    }
  }
  
  &.tablet {
    width: 768px;
    
    &.portrait .device-frame {
      padding-bottom: 133.33%;
    }
    
    &.landscape .device-frame {
      padding-bottom: 75%;
    }
  }
  
  &.web {
    width: 100%;
    max-width: 1920px;
  }

  .device-frame {
    position: relative;
    background: #ffffff;
    border: 2px solid #1a1a1a;
    border-radius: 32px;
    box-shadow: 0 0 0 10px #2d2d2d;
    
    .device-screen {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      border-radius: 24px;
      background: #ffffff;
    }
    
    .device-home-button {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border: 2px solid #1a1a1a;
      border-radius: 50%;
      background: #f8f9fa;
    }
  }
}

:deep(.dark-mode) {
  .device-mockup .device-frame {
    background: #ffffff;
    border-color: #000000;
    box-shadow: 0 0 0 10px #1a1a1a;

    .device-screen {
      background: #ffffff;
    }

    .device-home-button {
      border-color: #000000;
      background: #f8f9fa;
    }
  }
}
</style>