<template>
  <div
    class="works"
    data-name="Works"
    data-node-id="121:852"
  >
    <!-- Single full-width ProjectCard at top -->
    <ProjectCard
      class="works__card works__card--full"
      :image-name="projects[0].imageName"
      :headline="projects[0].headline"
      :subheadline="projects[0].subheadline"
      :modal-component="projects[0].modalComponent"
      :modal-title="projects[0].modalTitle"
      :modal-initial-x="projects[0].modalInitialX"
      :modal-initial-y="projects[0].modalInitialY"
      data-node-id="121:816"
      @open-modal="handleOpenModal"
    />

    <!-- Row with 2 ProjectCards -->
    <div
      class="works__row"
      data-name="Container"
      data-node-id="121:827"
    >
      <ProjectCard
        class="works__card"
        :image-name="projects[1].imageName"
        :headline="projects[1].headline"
        :subheadline="projects[1].subheadline"
        :modal-component="projects[1].modalComponent"
        :modal-title="projects[1].modalTitle"
        :modal-initial-x="projects[1].modalInitialX"
        :modal-initial-y="projects[1].modalInitialY"
        data-node-id="121:822"
        @open-modal="handleOpenModal"
      />
      <ProjectCard
        class="works__card"
        :image-name="projects[2].imageName"
        :headline="projects[2].headline"
        :subheadline="projects[2].subheadline"
        :modal-component="projects[2].modalComponent"
        :modal-title="projects[2].modalTitle"
        :modal-initial-x="projects[2].modalInitialX"
        :modal-initial-y="projects[2].modalInitialY"
        data-node-id="121:828"
        @open-modal="handleOpenModal"
      />
    </div>

    <!-- Decorative line separator -->
    <div class="works__separator">
      <div class="works__separator-inner">
        <img
          alt=""
          class="works__line"
          :src="lineImage"
          data-node-id="121:834"
        >
      </div>
    </div>

    <!-- Another row with 2 ProjectCards -->
    <div
      class="works__row"
      data-name="Container"
      data-node-id="121:841"
    >
      <ProjectCard
        class="works__card"
        :image-name="projects[3].imageName"
        :headline="projects[3].headline"
        :subheadline="projects[3].subheadline"
        :modal-component="projects[3].modalComponent"
        :modal-title="projects[3].modalTitle"
        :modal-initial-x="projects[3].modalInitialX"
        :modal-initial-y="projects[3].modalInitialY"
        data-node-id="121:842"
        @open-modal="handleOpenModal"
      />
      <ProjectCard
        class="Sifr works__card"
        :image-name="projects[4].imageName"
        :headline="projects[4].headline"
        :subheadline="projects[4].subheadline"
        :modal-component="projects[4].modalComponent"
        :modal-title="projects[4].modalTitle"
        :modal-initial-x="projects[4].modalInitialX"
        :modal-initial-y="projects[4].modalInitialY"
        data-node-id="121:843"
        @open-modal="handleOpenModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import WorkJustWatch from './WorkJustWatch.vue'
import WorkSifr from './WorkSifr.vue'
import WorkDixil from './WorkDixil.vue'

// Image asset from Figma localhost server
const lineImage = 'http://localhost:3845/assets/411c0251516e4d899a5f90f26eec98d5bbf328af.svg'

const emit = defineEmits<{
  'open-modal': [data: {
    component: Component
    title: string
    initialX?: number
    initialY?: number
  }]
}>()

const handleOpenModal = (data: {
  component: Component
  title: string
  initialX?: number
  initialY?: number
}) => {
  emit('open-modal', data)
}

// Project data - you can customize these with your actual image names, headlines, and subheadlines
// Add modalComponent, modalTitle, modalInitialX, modalInitialY to specify which modal opens
const projects = [
  {
    imageName: 'placeholder_img.png',
    headline: 'Project Title 1',
    subheadline: 'Project Subtitle 1',
    modalComponent: WorkJustWatch as Component,
    modalTitle: 'Project Title 1',
    modalInitialX: 20,
    modalInitialY: 180,
  },
  {
    imageName: 'sifr_1m.webp',
    headline: 'Project Title 2',
    subheadline: 'Project Subtitle 2',
    modalComponent: WorkSifr as Component,
    modalTitle: 'Sifr - Creative Driven House',
    modalInitialX: 440,
    modalInitialY: 440,
    // No modal props = card won't open a modal when clicked
  },
  {
    imageName: 'placeholder_img.png',
    headline: 'Dixil - Digital Agency',
    subheadline: 'Website Design',
    // No modal props = card won't open a modal when clicked
  },
  {
    imageName: 'placeholder_img.png',
    headline: 'Dixil Hotels',
    subheadline: 'Project Subtitle 4',
    modalComponent: WorkDixil as Component,
    modalTitle: 'Dixil Hotels',
    modalInitialX: 440,
    modalInitialY: 440,
    // No modal props = card won't open a modal when clicked
  },
  {
    imageName: 'placeholder_img.png',
    headline: 'Sifr - Creative Driven House',
    subheadline: 'Website Design & Development',
    modalComponent: WorkSifr as Component,
    modalTitle: 'Sifr - Creative Driven House',
    // No initialX/initialY = will use default centered position
  },
]
</script>

<style scoped>
.works {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-400);
  align-items: flex-start;
  position: relative;
  width: 100%;
}

.works__card {
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
}

.works__card--full {
  width: 100%;
  flex: none;
}

.works__row {
  display: flex;
  gap: var(--fox-spacing-400);
  align-items: flex-start;
  position: relative;
  width: 100%;
  flex-shrink: 0;
}

.works__separator {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
}

.works__separator-inner {
  flex: none;
  transform: rotate(180deg);
  position: relative;
  width: 592px;
  height: 0;
}

.works__line {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: -1px 0 0 0;
}
</style>

