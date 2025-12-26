<template>
  <div
    class="index-page"
    data-name="index"
    data-node-id="51:143"
  >
    <!-- Background with overlay -->
    <div
      aria-hidden="true"
      class="index-page__background"
    >
      <img
        alt=""
        class="index-page__bg-image"
        :src="backgroundImage"
      >
    </div>


    <!-- Modal Works - Always visible -->
    <Modal
      class="index-page__modal"
      title="Works"
      :component="Works"
      @open-modal="handleOpenModal"
    />

    <!-- Dynamically created modals -->
    <Modal
      v-for="(modal, index) in openModals"
      :key="index"
      class="index-page__modal"
      :title="modal.title"
      :component="modal.component"
      :initial-x="modal.initialX"
      :initial-y="modal.initialY"
      @open-modal="handleOpenModal"
      @close="handleCloseModal(index)"
    />
     
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, onMounted } from 'vue'
import Modal from '~/components/Modal.vue'
import Works from '~/components/Works.vue'
import bgDali from '~/assets/img/bg_dali.jpg'
import { scanHighestZIndex } from '~/utils/zIndexTracker'

const backgroundImage = bgDali

// Initialize z-index tracker on page load
onMounted(() => {
  // Scan for highest z-index after a short delay to ensure all elements are rendered
  setTimeout(() => {
    scanHighestZIndex()
  }, 100)
})

interface ModalData {
  component: Component
  title: string
  initialX?: number
  initialY?: number
}

const openModals = ref<ModalData[]>([])

const handleOpenModal = (data: ModalData) => {
  // Add new modal to the list - it will automatically appear on top due to z-index management
  openModals.value.push(data)
}

const handleCloseModal = (index: number) => {
  // Remove the modal at the specified index
  openModals.value.splice(index, 1)
}
</script>

<style scoped>
.index-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.index-page__background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: var(--fox-background-base); /* #2c2c2e */
}

.index-page__bg-image {
  position: absolute;
  inset: 0;
  max-width: none;
  mix-blend-mode: luminosity;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
}

.index-page__modal {
  position: absolute;
  z-index: 2;
}
</style>
