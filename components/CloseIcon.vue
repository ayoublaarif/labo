<template>
  <div
    class="close-icon"
    data-name="Close Button"
    :data-node-id="nodeId"
  >
    <img
      alt=""
      class="close-icon__image"
      :src="closeIconSrc"
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  nodeId: '51:146',
})

// Image asset from Figma localhost server
const closeIconSrc = 'http://localhost:3845/assets/2fd53a2169cf50b045d48e2d2d4e196ad8ea7262.svg'
</script>

<style scoped>
.close-icon {
  position: relative;
  width: 100%;
  height: 100%;
}

.close-icon__image {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}
</style>

