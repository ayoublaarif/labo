<template>
  <div
    class="project-card"
    :class="{ 'project-card--clickable': (modalComponent && modalTitle) || externalLink }"
    data-name="Project Card"
    :data-node-id="nodeId"
    @click="handleClick"
  >
    <div
      class="project-card__image"
      data-name="Image"
      data-node-id="110:789"
    >
      <img
        alt=""
        class="project-card__img"
        :src="imageSrc"
      >
    </div>
    <div
      class="project-card__text-container"
      data-name="Text Container"
      data-node-id="110:790"
    >
      <p
        class="fox-body-large-bold project-card__title"
        data-node-id="110:791"
      >
        {{ headline }}
      </p>
      <p
        class="fox-label-medium-regular project-card__subtitle"
        data-node-id="110:792"
      >
        {{ subheadline }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'

interface Props {
  imageName?: string
  headline?: string
  subheadline?: string
  nodeId?: string
  modalComponent?: Component
  modalTitle?: string
  modalInitialX?: number
  modalInitialY?: number
  externalLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  imageName: 'placeholder_img.png',
  headline: 'Project Title',
  subheadline: 'Project Subtitle',
  nodeId: '110:794',
  modalComponent: undefined,
  modalTitle: undefined,
  modalInitialX: undefined,
  modalInitialY: undefined,
  externalLink: undefined,
})

const emit = defineEmits<{
  'open-modal': [data: {
    component: Component
    title: string
    initialX?: number
    initialY?: number
  }]
}>()

const handleClick = () => {
  // If external link is provided, open it in a new tab
  if (props.externalLink) {
    window.open(props.externalLink, '_blank', 'noopener,noreferrer')
    return
  }
  
  // Otherwise, open modal if modal props are provided
  if (props.modalComponent && props.modalTitle) {
    emit('open-modal', {
      component: props.modalComponent,
      title: props.modalTitle,
      initialX: props.modalInitialX,
      initialY: props.modalInitialY,
    })
  }
}

// Get image source from public/img folder
// Images should be placed in public/img/ and referenced by name (e.g., "image.webp")
const imageSrc = computed(() => {
  if (!props.imageName) {
    return '/img/placeholder_img.png'
  }
  
  // Construct path to public/img folder
  // If imageName already starts with /, use it as-is (absolute path)
  // Otherwise, assume it's in /img/ folder
  if (props.imageName.startsWith('/')) {
    return props.imageName
  }
  
  return `/img/${props.imageName}`
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-200);
  width: 100%;
  flex-shrink: 0;
}

.project-card--clickable {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.project-card--clickable:hover {
  opacity: 0.8;
}

.project-card__image {
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  flex-shrink: 0;
  border-radius: var(--fox-border-radius-md);
  overflow: hidden;
  background-color: var(--fox-neutral-600);
}

.project-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: var(--fox-border-radius-md);
}

.project-card__text-container {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-100);
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
  white-space: nowrap;
}

.project-card__title {
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  margin: 0;
}

.project-card__subtitle {
  color: var(--fox-text-midlight);
  position: relative;
  flex-shrink: 0;
  margin: 0;
}
</style>

// Now as we need to make sure if a Modal with WorkSifr is already opened, when I click on WorkSifr ProjectCard I don't open a new one