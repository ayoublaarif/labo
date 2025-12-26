<template>
  <div
    class="modal-body"
    :class="className"
    :data-node-id="nodeId"
    data-name="Modal Body"
  >
    <component
      :is="component"
      class="modal-body__content"
      @open-modal="$emit('open-modal', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import WorkSifr from './WorkSifr.vue'

interface Props {
  className?: string
  nodeId?: string
  component?: Component
}

withDefaults(defineProps<Props>(), {
  nodeId: '68:238',
  component: WorkSifr,
})

defineEmits<{
  'open-modal': [data: {
    component: Component
    title: string
    initialX?: number
    initialY?: number
  }]
}>()
</script>

<style scoped>
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--fox-spacing-600);
  padding: var(--fox-spacing-600);
  position: relative;
  width: 100%;
  flex: 1 1 0;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal-body__content {
  flex-shrink: 0;
  width: 100%;
}
</style>

