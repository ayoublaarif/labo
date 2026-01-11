<template>
  <div
    class="work-casablanca"
    :data-node-id="nodeId"
    data-name="Work Casablanca"
  >
    <!-- JustWatch's Title Page -->
    
    <ContextText
        :headline="true"
        headline-text="Casablanca"
        body-text="Casablanca is a city in Morocco. It is known for its beautiful architecture and its vibrant culture."
     />

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      image="/img/casablanca_1m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_2m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_4m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_5m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_6m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_7m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_8m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/casablanca_9m.webp"
    />  
    <ContentImage
      amount="1"
      image="/img/casablanca_10m.webp"
    />  
    <ContentImage
      amount="1"
      image="/img/casablanca_11m.webp"
    />  
    
    
  </div>
</template>

<script setup lang="ts">
interface Props {
  nodeId?: string
}

withDefaults(defineProps<Props>(), {
  nodeId: '187:1234',
})
</script>

<style scoped>
.work-casablanca {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-600); /* 48px gap */
  align-items: flex-start;
  max-width: 828px;
  width: 100%;
  min-width: 0;
  position: relative;
  margin: 0 auto;
  min-height: 200px;
}

</style>

