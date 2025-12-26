<template>
  <div
    class="work-sifr"
    :data-node-id="nodeId"
    data-name="Work Sifr"
  >
    <!-- JustWatch's Title Page -->
    
    <ContextText
        :headline="true"
        headline-text="Sifr - Creative Driven House"
        body-text="Sifr is a creative driven house. They are known for their unique design and their commitment to sustainability."
     />

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      image="/img/sifr_1m.webp"
    />
    <ContentImage
      amount="2"
      image1="/img/sifr_2m.webp"
      image2="/img/sifr_2m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/sifr_3m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/sifr_4m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/sifr_5m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/sifr_6m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/sifr_7m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/sifr_8m.webp"
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
.work-sifr {
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

