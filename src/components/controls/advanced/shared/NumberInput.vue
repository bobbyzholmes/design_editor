<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();
</script>

<template>
  <div class="number-input">
    <label>{{ label }}</label>
    <div class="input-wrapper">
      <input
        type="number"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        @input="$emit('update:modelValue', +($event.target as HTMLInputElement).value)"
      />
      <span v-if="unit" class="unit">{{ unit }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.number-input {
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

  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input[type="number"] {
      width: 80px;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 0.875rem;
      color: #1a1a1a;
      
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        opacity: 1;
      }
    }

    .unit {
      color: #64748b;
      font-size: 0.875rem;
    }
  }
}

:deep(.dark-mode) {
  .number-input {
    label {
      color: #cbd5e1;
    }

    .input-wrapper {
      input[type="number"] {
        background-color: #404040;
        border-color: #4a5568;
        color: #ffffff;
      }

      .unit {
        color: #94a3b8;
      }
    }
  }
}
</style>