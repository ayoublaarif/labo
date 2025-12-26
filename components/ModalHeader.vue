<template>
  <div
    class="modal-header"
    data-name="Modal Header"
    :data-node-id="nodeId"
  >
    <div
      class="modal-header__close-button"
      @click="handleClose"
    >
      <img
        alt=""
        class="modal-header__icon"
        :src="closeIcon"
      >
    </div>
    <p
      class="fox-label-bold-large modal-header__title"
      data-node-id="51:148"
    >
      {{ title }}
    </p>
    <div
      class="modal-header__right-icon"
      data-node-id="51:149"
    >
      <img
        alt=""
        class="modal-header__icon"
        :src="rightIcon"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import closeIconAsset from '~/assets/icon/Close Icon.svg'

interface Props {
  title: string
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  nodeId: '51:145',
})

const emit = defineEmits<{
  close: []
}>()

const closeIcon = closeIconAsset

// Image asset from Figma localhost server
const rightIcon = 'http://localhost:3845/assets/22f37ddbaae8455894ad05aaccdbe9818abfdc6b.svg'

const handleClose = (e: MouseEvent) => {
  e.stopPropagation() // Prevent triggering drag
  emit('close')
}
</script>

<style scoped>
.modal-header {
  background-color: var(--fox-background-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--fox-spacing-200);
  position: relative;
  width: 100%;
}

.modal-header__close-button,
.modal-header__right-icon {
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.modal-header__right-icon {
  opacity: 0;
}

.modal-header__icon {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}

.modal-header__title {
  /* Using label-bold-large text style - applied via utility class */
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  white-space: nowrap;
  margin: 0;
}
</style>

