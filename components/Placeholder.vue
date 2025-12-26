<template>
  <div
    class="placeholder"
    :class="className"
    :data-node-id="nodeId"
    data-name="Placeholder"
  >
    <p
      class="placeholder__text"
      data-node-id="68:239"
    >
      Placeholder
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  nodeId: '68:241',
})
</script>

<style scoped>
.placeholder {
  position: relative;
  width: 122px;
  height: 24px;
}

.placeholder__text {
  position: absolute;
  inset: 0;
  /* Using headline-bold-small text style */
  font-family: var(--fox-font-family-main), sans-serif;
  font-weight: var(--fox-font-weight-200);
  font-size: var(--fox-font-size-200);
  line-height: var(--fox-line-height-100);
  color: var(--fox-text-highlight);
  white-space: nowrap;
  margin: 0;
}
</style>

