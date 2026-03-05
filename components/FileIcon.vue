<template>
  <div
    class="file-icon"
    data-name="File Icon"
    :data-node-id="nodeId"
  >
    <div
      class="file-icon__container"
      :data-node-id="containerNodeId"
    >
      <div class="file-icon__background">
        <img
          alt=""
          class="file-icon__img"
          :src="ellipseImage"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  nodeId?: string
  containerNodeId?: string
}

withDefaults(defineProps<Props>(), {
  nodeId: '374:10653',
  containerNodeId: '374:10654',
})

// Image asset from Figma localhost server
const ellipseImage = 'http://localhost:3845/assets/f75fb362cf567fda9a971afc0ef8e4922d93b5b5.svg'
</script>

<style scoped>
.file-icon {
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
}

.file-icon__container {
  position: relative;
  width: 104px;
  height: 104px;
  flex-shrink: 0;
}

.file-icon__background {
  position: absolute;
  inset: 0;
}

.file-icon__img {
  display: block;
  max-width: none;
  width: 100%;
  height: 100%;
}
</style>








