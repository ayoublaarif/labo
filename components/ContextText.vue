<template>
  <div
    class="context-text"
    :data-node-id="nodeId"
    data-name="Context Text"
  >
    <p
      v-if="headline"
      class="fox-headline-small-bold context-text__headline"
      data-node-id="65:163"
    >
      {{ headlineText }}
    </p>
    <!-- Use slot for complex content, fallback to bodyText for simple text -->
    <slot>
      <p
        v-if="bodyText"
        class="fox-body-large-regular context-text__body"
        data-node-id="65:164"
      >
        {{ bodyText }}
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headline?: boolean
  headlineText?: string
  bodyText?: string
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  headline: true,
  headlineText: '',
  bodyText: '',
  nodeId: '65:166',
})
</script>

<style scoped>
.context-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--fox-spacing-200); /* 16px gap */
  position: relative;
  width: 100%;
  color: var(--fox-text-highlight); /* white text */
}

.context-text__headline {
  /* Component-specific styles - text style applied via utility class */
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  width: min-content;
  min-width: 100%;
  margin: 0;
}

.context-text__body {
  /* Component-specific styles - text style applied via utility class */
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  width: 520px;
  max-width: 100%;
  margin: 0;
}

/* Styles for complex content in slot */
.context-text :deep(.fox-body-large-regular) {
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  width: 100%;
  /* Don't override font-size and line-height - let the text style class handle it */
}

.context-text :deep(p) {
  margin: 0 0 0 0;
  /* Don't override font-size and line-height - let parent classes handle it */
}

.context-text :deep(.context-text__bold) {
  font-family: var(--fox-font-family-main), sans-serif;
  font-weight: var(--fox-font-weight-200); /* Heavy/Bold */
  font-style: normal;
  margin: 0;
  /* Inherit font-size and line-height from parent */
}

.context-text :deep(ul) {
  list-style-type: disc;
  margin: 0;
  padding-left: 24px;
}

.context-text :deep(ul li) {
  margin: 0 0 0 0;
  /* Inherit font-size and line-height from parent */
}
</style>

