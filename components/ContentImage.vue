<template>
  <!-- amount="1" variant -->
  <div
    v-if="amount === '1'"
    class="content-image content-image--single"
    :class="className"
    :data-node-id="nodeId"
    data-name="amount=1"
  >
    <img
      v-if="image"
      alt=""
      class="content-image__img"
      :src="image"
    >
  </div>

  <!-- amount="2" variant -->
  <div
    v-else
    class="content-image content-image--double"
    :class="className"
    :data-node-id="nodeId"
    data-name="amount=2"
  >
    <div
      class="content-image__item"
      data-name="Image"
      data-node-id="68:191"
    >
      <img
        v-if="image1"
        alt=""
        class="content-image__img"
        :src="image1"
      >
    </div>
    <div
      class="content-image__item"
      data-name="Image"
      data-node-id="68:192"
    >
      <img
        v-if="image2"
        alt=""
        class="content-image__img"
        :src="image2"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  amount?: '1' | '2'
  className?: string
  nodeId?: string
  image?: string // For amount="1": image path (e.g., "/img/file.jpg")
  image1?: string // For amount="2": first image path
  image2?: string // For amount="2": second image path
}

withDefaults(defineProps<Props>(), {
  amount: '1',
  nodeId: '68:182',
  image: undefined,
  image1: undefined,
  image2: undefined,
})
</script>

<style scoped>
.content-image {
  position: relative;
  width: 100%;
  flex-shrink: 0;
}

.content-image--single {
  height: 464px;
  width: 100%;
  max-width: 824px;
  border-radius: var(--fox-border-radius-lg);
  background-color: var(--fox-neutral-800);
}

.content-image--double {
  display: flex;
  gap: var(--fox-spacing-200);
  height: 480px;
  align-items: flex-start;
  width: 100%;
  max-width: 824px;
}

.content-image__item {
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  height: 100%;
  border-radius: var(--fox-border-radius-lg);
  background-color: var(--fox-neutral-800);
  position: relative;
  overflow: hidden;
}

.content-image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: var(--fox-border-radius-lg);
}

.content-image--single {
  position: relative;
  overflow: hidden;
}

.content-image--single .content-image__img {
  position: absolute;
  inset: 0;
}
</style>

