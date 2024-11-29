<script setup lang="ts">
defineProps<{
  code: string;
  language?: string;
}>();
</script>

<template>
  <pre class="code-block"><code :class="language">{{ code.trim() }}</code></pre>
</template>

<style lang="scss" scoped>
.code-block {
  background: #f8f8f8;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
  
  code {
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  }
}
</style>