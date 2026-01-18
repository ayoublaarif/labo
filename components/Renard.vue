<template>
  <div
    class="renard"
    data-name="Renard"
    :data-node-id="nodeId"
  >
    <div class="renard__container">
      <img
        alt=""
        class="renard__img"
        :src="renardImage"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  nodeId: '374:10664',
})

// Image from public/img folder
const renardImage = '/img/renard.png'
</script>

<style scoped>
.renard {
  position: relative;
  width: 104px;
  height: 104px;
}

.renard__container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.renard__img {
  position: absolute;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
}
</style>

