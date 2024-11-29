<script setup lang="ts">
import { ref } from 'vue';
import ColorsSection from './advanced/ColorsSection.vue';
import AppBarSection from './advanced/AppBarSection.vue';
import TabBarSection from './advanced/TabBarSection.vue';
import BottomNavigationSection from './advanced/BottomNavigationSection.vue';
import FabSection from './advanced/FabSection.vue';
import ButtonsSection from './advanced/ButtonsSection.vue';
import IconThemeSection from './advanced/IconThemeSection.vue';
import InputDecorationSection from './advanced/InputDecorationSection.vue';
import SwitchSection from './advanced/SwitchSection.vue';
import CheckboxSection from './advanced/CheckboxSection.vue';
import RadioSection from './advanced/RadioSection.vue';
import SliderSection from './advanced/SliderSection.vue';
import TextThemeSection from './advanced/TextThemeSection.vue';

const expandedSections = ref<string[]>([]);

function toggleSection(section: string) {
  const index = expandedSections.value.indexOf(section);
  if (index === -1) {
    expandedSections.value.push(section);
  } else {
    expandedSections.value.splice(index, 1);
  }
}

const sections = [
  { id: 'colors', title: 'Colors', component: ColorsSection },
  { id: 'appBar', title: 'App Bar', component: AppBarSection },
  { id: 'tabBar', title: 'Tab Bar', component: TabBarSection },
  { id: 'bottomNav', title: 'Bottom Navigation', component: BottomNavigationSection },
  { id: 'fab', title: 'Floating Action Button', component: FabSection },
  { id: 'buttons', title: 'Buttons', component: ButtonsSection },
  { id: 'iconTheme', title: 'Icon Theme', component: IconThemeSection },
  { id: 'inputDecoration', title: 'Input Decoration', component: InputDecorationSection },
  { id: 'switch', title: 'Switch', component: SwitchSection },
  { id: 'checkbox', title: 'Checkbox', component: CheckboxSection },
  { id: 'radio', title: 'Radio', component: RadioSection },
  { id: 'slider', title: 'Slider', component: SliderSection },
  { id: 'textTheme', title: 'Text Theme', component: TextThemeSection },
];
</script>

<template>
  <div class="advanced-controls">
    <div 
      v-for="section in sections" 
      :key="section.id"
      class="section-wrapper"
    >
      <button 
        class="section-header" 
        @click="toggleSection(section.id)"
        :class="{ expanded: expandedSections.includes(section.id) }"
      >
        {{ section.title }}
        <span class="expand-icon">›</span>
      </button>
      <div 
        class="section-content"
        :class="{ expanded: expandedSections.includes(section.id) }"
      >
        <component :is="section.component" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advanced-controls {
  .section-wrapper {
    margin-bottom: 0.5rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
  }

  .section-header {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #475569;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f8fafc;
    }

    &.expanded {
      border-bottom: 1px solid #e2e8f0;
      
      .expand-icon {
        transform: rotate(90deg);
      }
    }

    .expand-icon {
      transition: transform 0.2s ease;
      font-size: 1.2rem;
    }
  }

  .section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;

    &.expanded {
      max-height: 1000px;
    }
  }
}

:deep(.dark-mode) {
  .advanced-controls {
    .section-wrapper {
      border-color: #404040;
    }

    .section-header {
      background-color: #2d2d2d;
      color: #e2e8f0;

      &:hover {
        background-color: #363636;
      }

      &.expanded {
        border-bottom-color: #404040;
      }
    }
  }
}
</style>