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
        :image-name="projects[3].imageName"
        :headline="projects[3].headline"
        :subheadline="projects[3].subheadline"
        :modal-component="projects[3].modalComponent"
        :modal-title="projects[3].modalTitle"
        :modal-initial-x="projects[3].modalInitialX"
        :modal-initial-y="projects[3].modalInitialY"
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

    <!-- Decorative line separator
    <div class="works__separator">
      <div class="works__separator-inner">
        <img
          alt=""
          class="works__line"
          :src="lineImage"
          data-node-id="121:834"
        >
      </div>
    </div> -->

    <!-- Another row with 2 ProjectCards -->
    <div
      class="works__row"
      data-name="Container"
      data-node-id="121:841"
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

    <div
      class="works__row"
      data-name="Container"
      data-node-id="121:841"
    >
      <ProjectCard
        class="works__card"
        :image-name="projects[5].imageName"
        :headline="projects[5].headline"
        :subheadline="projects[5].subheadline"
        :modal-title="projects[5].modalTitle"
        :modal-initial-x="projects[5].modalInitialX"
        :modal-initial-y="projects[5].modalInitialY"
        :modal-component="projects[5].modalComponent"
        data-node-id="121:842"
        @open-modal="handleOpenModal"
      />
      <ProjectCard
        class="Sifr works__card"
        :image-name="projects[6].imageName"
        :headline="projects[6].headline"
        :subheadline="projects[6].subheadline"
        :modal-title="projects[6].modalTitle"
        :modal-initial-x="projects[6].modalInitialX"
        :modal-initial-y="projects[6].modalInitialY"
        :external-link="projects[6].externalLink"
        data-node-id="121:843"
        @open-modal="handleOpenModal"
      />
    </div>

    <div
      class="works__row"
      data-name="Container"
      data-node-id="121:841"
    >
      <ProjectCard
        class="works__card"
        :image-name="projects[7].imageName"
        :headline="projects[7].headline"
        :subheadline="projects[7].subheadline"
        :modal-title="projects[7].modalTitle"
        :modal-initial-x="projects[7].modalInitialX"
        :modal-initial-y="projects[7].modalInitialY"
        :external-link="projects[7].externalLink"
        data-node-id="121:842"
        @open-modal="handleOpenModal"
      />
      <ProjectCard
        class="Sifr works__card"
        :image-name="projects[8].imageName"
        :headline="projects[8].headline"
        :subheadline="projects[8].subheadline"
        :modal-title="projects[8].modalTitle"
        :modal-initial-x="projects[8].modalInitialX"
        :modal-initial-y="projects[8].modalInitialY"
        :external-link="projects[8].externalLink"
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
import WorkSaray from './WorkSaray.vue'
import WorkCasablanca from './WorkCasablanca.vue'
import WorkTooBigToHandle from './WorkTooBigToHandle.vue'
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
    imageName: 'justwatch_title.webp',
    headline: 'JustWatch - Title Page Redesign',
    subheadline: 'Case study - 2024',
    modalComponent: WorkJustWatch as Component,
    modalTitle: 'JustWatch',
    modalInitialX: 480,
    modalInitialY: 20,
  },
  {
    imageName: 'sifr_t.gif',
    headline: 'Sifr - Creative Driven House',
    subheadline: 'Showcase - 2021',
    modalComponent: WorkSifr as Component,
    modalTitle: 'Sifr - Creative Driven House',
    modalInitialX: 480,
    modalInitialY: 20,
  },
  {
    imageName: 'dixil.webp',
    headline: 'Dixil Hotels & Resorts',
    subheadline: 'Showcase - 2022',
    modalComponent: WorkDixil as Component,
    modalTitle: 'Dixil Hotels & Resorts',
    modalInitialX: 480,
    modalInitialY: 20,
  },
  {
    imageName: 'saray_thumbnail.webp',
    headline: 'Saray Casablanca - Website Design',
    subheadline: 'Case study - 2022',
    modalComponent: WorkSaray as Component,
    modalTitle: 'Saray Casablanca',
    modalInitialX: 440,
    modalInitialY: 20,
    // No modal props = card won't open a modal when clicked
  },
  {
    imageName: 'casablanca.webp',
    headline: 'Visit Casablanca - Website Redesign',
    subheadline: 'Showcase - 2021',
    modalComponent: WorkCasablanca as Component,
    modalTitle: 'Visit Casablanca',
    modalInitialX: 480,
    modalInitialY: 20,
    // No initialX/initialY = will use default centered position
  },
  {
    imageName: 'tbth_1.webp',
    headline: 'Too Big To Handle - Visual Identity',
    subheadline: 'Showcase - 2024',
    modalComponent: WorkTooBigToHandle as Component,
    modalTitle: 'Too Big To Handle',
    modalInitialX: 480,
    modalInitialY: 20,
    // No initialX/initialY = will use default centered position
  },
  {
    imageName: 'follow_your_football_club.webp',
    headline: 'Follow Your Football Club - Mobile App',
    subheadline: 'Case study - 2020',
    modalTitle: 'Follow Your Football Club',
    externalLink: 'https://www.behance.net/gallery/98382065/Follow-your-football-club-mobile-app'
    // No initialX/initialY = will use default centered position
  },
  {
    imageName: 'quuevo_3.webp',
    headline: 'Quuevo AI - Concept Design',
    subheadline: 'Case study - 2021',
    externalLink: 'https://www.behance.net/gallery/117729295/Quuevo-Saas-Application',
    modalTitle: 'Quuevo AI',
    // No initialX/initialY = will use default centered position
  },
  {
    imageName: 'canada_1.webp',
    headline: 'Canada Roller Team - Redesign',
    subheadline: 'Showcase - 2020',
    modalTitle: 'Canada Roller Team',
    externalLink: 'https://www.behance.net/gallery/107549989/Canda-Roller-Derby-Website-Redesign'
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

