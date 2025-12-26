<template>
  <div
    ref="modalRef"
    class="modal"
    :data-node-id="nodeId"
    data-name="Modal"
    :style="modalStyle"
    @mousedown="handleModalMouseDown"
  >
    <div
      ref="dragHandleRef"
      class="modal__drag-handle"
      @mousedown="handleHeaderMouseDown"
    >
      <ModalHeader
        :title="title"
        @close="handleClose"
      />
    </div>
    <ModalBody
      :component="component"
      @open-modal="$emit('open-modal', $event)"
    />
    <!-- Resize handles for all edges and corners -->
    <div
      class="modal__resize-handle modal__resize-handle--top"
      @mousedown="(e) => startResize(e, 'top')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--right"
      @mousedown="(e) => startResize(e, 'right')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--bottom"
      @mousedown="(e) => startResize(e, 'bottom')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--left"
      @mousedown="(e) => startResize(e, 'left')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--top-left"
      @mousedown="(e) => startResize(e, 'top-left')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--top-right"
      @mousedown="(e) => startResize(e, 'top-right')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--bottom-left"
      @mousedown="(e) => startResize(e, 'bottom-left')"
    />
    <div
      class="modal__resize-handle modal__resize-handle--bottom-right"
      @mousedown="(e) => startResize(e, 'bottom-right')"
    />
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import Placeholder from './Placeholder.vue'
import ModalHeader from './ModalHeader.vue'
import ModalBody from './ModalBody.vue'
import { getNextZIndex, updateGlobalHighestZIndex, scanHighestZIndex } from '~/utils/zIndexTracker'

interface Props {
  nodeId?: string
  title?: string
  component?: Component
  initialX?: number
  initialY?: number
}

const props = withDefaults(defineProps<Props>(), {
  nodeId: '68:255',
  title: 'Canada Roller Team',
  component: Placeholder,
  initialX: undefined,
  initialY: undefined,
})

const emit = defineEmits<{
  'open-modal': [data: {
    component: Component
    title: string
    initialX?: number
    initialY?: number
  }]
  'close': []
}>()

const handleClose = () => {
  emit('close')
}

const modalRef = ref<HTMLElement | null>(null)
const dragHandleRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const isResizing = ref(false)
const resizeDirection = ref<string>('')
const dragStart = ref({ x: 0, y: 0 })
const resizeStart = ref({ x: 0, y: 0, width: 0, height: 0, left: 0, top: 0, centerX: 0, topY: 0 })
// Initialize position with props or defaults
const position = ref({ 
  x: props.initialX ?? 0, 
  y: props.initialY ?? 120 
}) // Start at top: 120px, centered (or use initialX/initialY if provided)
const size = ref({ width: 920, height: 600 })

// Get initial z-index from global tracker
// This ensures new modals always get a z-index higher than any existing element
const zIndex = ref(getNextZIndex())

const bringToFront = () => {
  // Get next z-index from tracker (scans page and increments)
  const nextZIndex = getNextZIndex()
  zIndex.value = nextZIndex
  updateGlobalHighestZIndex(nextZIndex)
}

const modalStyle = computed(() => ({
  left: `${position.value.x}px`,
  top: `${position.value.y}px`,
  transform: 'translateX(-50%)',
  width: `${size.value.width}px`,
  height: `${size.value.height}px`,
  zIndex: zIndex.value,
}))

const handleHeaderMouseDown = (e: MouseEvent) => {
  // Always bring to front when clicking on header
  bringToFront()
  startDrag(e)
}

const handleModalMouseDown = (e: MouseEvent) => {
  // Bring to front when clicking anywhere on modal
  // But don't interfere with scrolling - check if clicking on scrollable content
  const target = e.target as HTMLElement
  const modalBody = target.closest('.modal-body')
  
  // If clicking on modal body, still bring to front but don't prevent anything
  // Scrolling will work normally with wheel/touch events
  if (modalBody) {
    bringToFront()
    // Don't prevent default or stop propagation - allow normal scroll behavior
    return
  }
  
  // For other areas (like modal background), bring to front
  bringToFront()
}


const startDrag = (e: MouseEvent) => {
  if (!modalRef.value) return
  
  isDragging.value = true
  const rect = modalRef.value.getBoundingClientRect()
  dragStart.value = {
    x: e.clientX - rect.left - rect.width / 2,
    y: e.clientY - rect.top,
  }
  
  e.preventDefault()
  e.stopPropagation()
}

const startResize = (e: MouseEvent, direction: string) => {
  if (!modalRef.value) return
  
  bringToFront()
  
  isResizing.value = true
  resizeDirection.value = direction
  const rect = modalRef.value.getBoundingClientRect()
  resizeStart.value = {
    x: e.clientX,
    y: e.clientY,
    width: rect.width,
    height: rect.height,
    left: rect.left,
    top: rect.top,
    centerX: position.value.x, // Store center X position
    topY: position.value.y, // Store top Y position
  }
  
  e.preventDefault()
  e.stopPropagation()
}

const onMouseMove = (e: MouseEvent) => {
  if (isResizing.value && modalRef.value) {
    const deltaX = e.clientX - resizeStart.value.x
    const deltaY = e.clientY - resizeStart.value.y
    
    let newWidth = resizeStart.value.width
    let newHeight = resizeStart.value.height
    let newX = position.value.x
    let newY = position.value.y
    
    // Handle different resize directions
    const direction = resizeDirection.value
    
    if (direction.includes('right')) {
      newWidth = resizeStart.value.width + deltaX
    }
    if (direction.includes('left')) {
      newWidth = resizeStart.value.width - deltaX
      // Adjust center position (since we use translateX(-50%), left is the center)
      // When resizing from left, center moves right by deltaX/2
      newX = resizeStart.value.centerX + deltaX / 2
    }
    if (direction.includes('bottom')) {
      newHeight = resizeStart.value.height + deltaY
    }
    if (direction.includes('top')) {
      newHeight = resizeStart.value.height - deltaY
      // Adjust top position - when resizing from top, top edge moves down by deltaY
      // Keep bottom edge fixed
      newY = resizeStart.value.topY + deltaY
    }
    
    // Minimum size constraints only - allow modal to be larger than viewport
    const minWidth = 400
    const minHeight = 300
    
    newWidth = Math.max(minWidth, newWidth)
    newHeight = Math.max(minHeight, newHeight)
    
    // Prevent modal from going above the top of the body when resizing from top
    if (direction.includes('top')) {
      newY = Math.max(0, newY)
    }
    
    size.value = {
      width: newWidth,
      height: newHeight,
    }
    
    position.value = {
      x: newX,
      y: newY,
    }
    
    return
  }
  
  if (isDragging.value && modalRef.value) {
    // Calculate new position - allow modal to move freely except above top
    const newX = e.clientX - dragStart.value.x
    let newY = e.clientY - dragStart.value.y
    
    // Prevent modal from going above the top of the body
    newY = Math.max(0, newY)
    
    position.value = {
      x: newX,
      y: newY,
    }
  }
}

const onMouseUp = () => {
  isDragging.value = false
  isResizing.value = false
  resizeDirection.value = ''
}

onMounted(async () => {
  // Update tracker with this modal's z-index (ensures global is up to date)
  // This modal's z-index should be the highest, so update the global
  updateGlobalHighestZIndex(zIndex.value)
  
  // Don't scan immediately - it might find dev tools with high z-index
  // Only scan on initial page load, not when modals mount
  
  // Set initial position: use initialX if provided, otherwise center horizontally
  if (modalRef.value) {
    const bodyRect = document.body.getBoundingClientRect()
    if (props.initialX !== undefined) {
      position.value.x = props.initialX
    } else {
      position.value.x = bodyRect.width / 2
    }
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
.modal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(44, 44, 46, 0.8);
  backdrop-filter: blur(8px);
  border-radius: var(--fox-border-radius-lg);
  overflow: hidden;
  position: absolute;
  min-width: 400px;
  min-height: 300px;
  flex-shrink: 0;
  cursor: default;
}

.modal__drag-handle {
  width: 100%;
  cursor: move;
  user-select: none;
}

.modal__drag-handle:active {
  cursor: grabbing;
}


.modal__resize-handle {
  position: absolute;
  z-index: 1000;
  pointer-events: auto;
  touch-action: none;
  background-color: transparent;
}

/* Edge handles */
.modal__resize-handle--top {
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  cursor: ns-resize;
}

.modal__resize-handle--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 4px;
  cursor: ew-resize;
}

.modal__resize-handle--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  cursor: ns-resize;
}

.modal__resize-handle--left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  cursor: ew-resize;
}

/* Corner handles */
.modal__resize-handle--top-left {
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  cursor: nwse-resize;
}

.modal__resize-handle--top-right {
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  cursor: nesw-resize;
}

.modal__resize-handle--bottom-left {
  bottom: 0;
  left: 0;
  width: 12px;
  height: 12px;
  cursor: nesw-resize;
}

.modal__resize-handle--bottom-right {
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  cursor: nwse-resize;
}

/* Visual indicator for corner handles */
.modal__resize-handle--top-left::before,
.modal__resize-handle--bottom-right::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.modal__resize-handle--top-left::before {
  top: 0;
  left: 0;
  border-width: 0 0 8px 8px;
  border-color: transparent transparent var(--fox-neutral-600) transparent;
  opacity: 0.6;
}

.modal__resize-handle--bottom-right::before {
  bottom: 0;
  right: 0;
  border-width: 0 0 8px 8px;
  border-color: transparent transparent var(--fox-neutral-600) transparent;
  opacity: 0.6;
}

.modal__resize-handle--top-right::before,
.modal__resize-handle--bottom-left::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.modal__resize-handle--top-right::before {
  top: 0;
  right: 0;
  border-width: 0 8px 8px 0;
  border-color: transparent var(--fox-neutral-600) transparent transparent;
  opacity: 0.6;
}

.modal__resize-handle--bottom-left::before {
  bottom: 0;
  left: 0;
  border-width: 8px 0 0 8px;
  border-color: var(--fox-neutral-600) transparent transparent transparent;
  opacity: 0.6;
}

.modal__resize-handle:hover::before {
  opacity: 1;
  border-color: transparent transparent var(--fox-neutral-400) transparent;
}

.modal__resize-handle--top-right:hover::before {
  border-color: transparent var(--fox-neutral-400) transparent transparent;
}

.modal__resize-handle--bottom-left:hover::before {
  border-color: var(--fox-neutral-400) transparent transparent transparent;
}
</style>

