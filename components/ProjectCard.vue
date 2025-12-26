<template>
  <div
    class="project-card"
    :class="{ 'project-card--clickable': modalComponent && modalTitle }"
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
  if (props.modalComponent && props.modalTitle) {
    emit('open-modal', {
      component: props.modalComponent,
      title: props.modalTitle,
      initialX: props.modalInitialX,
      initialY: props.modalInitialY,
    })
  }
}

// Placeholder image as fallback
import placeholderImage from '~/assets/img/placeholder_img.png'

// Image mapping - add your images here by importing them statically
// Example:
// import projectImage1 from '~/assets/img/project1.jpg'
// import projectImage2 from '~/assets/img/project2.jpg'
// Then add them to the imageMap below
const imageMap: Record<string, string> = {
  'placeholder_img.png': placeholderImage,
  // Add your images here:
  // 'project1.jpg': projectImage1,
  // 'project2.jpg': projectImage2,
}

// Get image source from assets/img folder
const imageSrc = computed(() => {
  if (!props.imageName) {
    return placeholderImage
  }
  
  // Check if image exists in the map
  if (imageMap[props.imageName]) {
    return imageMap[props.imageName]
  }
  
  // Fallback to placeholder if image not found in map
  // To add new images:
  // 1. Import them at the top: import myImage from '~/assets/img/myImage.jpg'
  // 2. Add to imageMap: 'myImage.jpg': myImage
  return placeholderImage
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