<template>
  <div
    class="work-meta-info"
    data-name="Work Meta Info"
    data-node-id="394:12075"
  >
    <div
      class="work-meta-info__item"
      data-node-id="394:12065"
    >
      <p
        class="fox-label-medium-regular work-meta-info__label"
        data-node-id="394:12066"
      >
        Role:
      </p>
      <p
        class="fox-body-large-regular work-meta-info__value"
        data-node-id="394:12067"
      >
        {{ role }}
      </p>
    </div>
    <div
      class="work-meta-info__item"
      data-node-id="394:12071"
    >
      <p
        class="fox-label-medium-regular work-meta-info__label"
        data-node-id="394:12072"
      >
        Team:
      </p>
      <p
        class="fox-body-large-regular work-meta-info__value"
        data-node-id="394:12073"
      >
        {{ team }}
      </p>
    </div>
    <div
      class="work-meta-info__item"
      data-node-id="394:12068"
    >
      <p
        class="fox-label-medium-regular work-meta-info__label"
        data-node-id="394:12069"
      >
        Timeline:
      </p>
      <p
        class="fox-body-large-regular work-meta-info__value"
        data-node-id="394:12070"
      >
        {{ timeline }}
      </p>
    </div>
    
  </div>
</template>

<script setup lang="ts">
interface Props {
  role?: string
  timeline?: string
  team?: string
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  role: 'Product Designer',
  timeline: '3 months',
  team: '1 PM, 1 Designer, & 2 Engineers',
  nodeId: '394:12075',
})
</script>

<style scoped>
.work-meta-info {
  display: flex;
  gap: var(--fox-spacing-300); /* 48px gap */
  align-items: flex-start;
  position: relative;
  width: 100%;
}

.work-meta-info__item {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-100); /* 8px gap */
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
}

.work-meta-info__label {
  color: var(--fox-text-midlight);
  position: relative;
  flex-shrink: 0;
  margin: 0;
}

.work-meta-info__value {
  color: var(--fox-text-highlight);
  position: relative;
  flex-shrink: 0;
  margin: 0;
}
</style>

