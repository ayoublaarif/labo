<template>
  <div
    ref="fileRef"
    class="file"
    data-name="File"
    :data-node-id="nodeId"
    :style="fileStyle"
    @mousedown="startDrag"
  >
    <component
      :is="iconComponent"
      class="file__icon"
    />
    <p
      class="fox-label-large-bold file__label"
      :data-node-id="labelNodeId"
    >
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import FileIcon from './FileIcon.vue'

interface Props {
  label?: string
  nodeId?: string
  labelNodeId?: string
  iconComponent?: Component
  initialX?: number
  initialY?: number
}

const props = withDefaults(defineProps<Props>(), {
  label: 'About me',
  nodeId: '374:10649',
  labelNodeId: '374:10644',
  iconComponent: FileIcon,
  initialX: undefined,
  initialY: undefined,
})

const emit = defineEmits<{
  'open-modal': []
}>()

const fileRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const dragStartPosition = ref({ x: 0, y: 0 })

// Initialize position with props or defaults
const position = ref({
  x: props.initialX ?? 1056,
  y: props.initialY ?? 572,
})

const fileStyle = computed(() => ({
  left: `${position.value.x}px`,
  top: `${position.value.y}px`,
}))

const startDrag = (e: MouseEvent) => {
  if (!fileRef.value) return
  
  isDragging.value = true
  const rect = fileRef.value.getBoundingClientRect()
  dragStart.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
  dragStartPosition.value = {
    x: position.value.x,
    y: position.value.y,
  }
  
  e.preventDefault()
  e.stopPropagation()
}

const onMouseMove = (e: MouseEvent) => {
  if (isDragging.value && fileRef.value) {
    // Calculate new position - allow file to move freely except above top
    const newX = e.clientX - dragStart.value.x
    let newY = e.clientY - dragStart.value.y
    
    // Prevent file from going above the top of the body
    newY = Math.max(0, newY)
    
    position.value = {
      x: newX,
      y: newY,
    }
  }
}

const onMouseUp = () => {
  // Check if this was a click (no significant movement) or a drag
  if (isDragging.value) {
    const moved = Math.abs(position.value.x - dragStartPosition.value.x) > 5 || 
                  Math.abs(position.value.y - dragStartPosition.value.y) > 5
    
    // If it was just a click (no significant movement), emit open-modal event
    if (!moved) {
      emit('open-modal')
    }
  }
  
  isDragging.value = false
}

onMounted(() => {
  // Set initial position if provided
  if (props.initialX !== undefined) {
    position.value.x = props.initialX
  }
  if (props.initialY !== undefined) {
    position.value.y = props.initialY
  }
  
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>

<style scoped>
.file {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-100);
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 104px;
  user-select: none;
  cursor: pointer;
}

.file:hover {
  opacity: 0.8;
}
.file__icon {
  flex-shrink: 0;
}

.file__label {
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 0;
}
</style>

