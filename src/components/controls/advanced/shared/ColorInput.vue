<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="color-input">
    <label>{{ label }}</label>
    <input
      type="color"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
.color-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;

  label {
    flex: 1;
    font-weight: 500;
    color: #475569;
  }

  input[type="color"] {
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: none;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
      border-radius: 6px;
    }

    &::-moz-color-swatch {
      border: none;
      border-radius: 6px;
    }
  }
}

:deep(.dark-mode) {
  .color-input label {
    color: #cbd5e1;
  }
}
</style>