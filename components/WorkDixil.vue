<template>
  <div
    class="work-dixil"
    :data-node-id="nodeId"
    data-name="Work Dixil"
  >
    <!-- JustWatch's Title Page -->
    
    <ContextText
        :headline="true"
        headline-text="Dixil Hotel"
        body-text="Dixil Hotel is a 4 stars hotel in Tanger that invites its guests to live the hotel experience differently through a vibrant fusion of Pop-Art design and traditional Moroccan hospitality"
     />

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      image="/img/dixil_5m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_2m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_3m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_4m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_6m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_7m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_8m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_9m.webp"
    />  
    <ContentImage
      amount="1"
      image="/img/dixil_10m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_11m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/dixil_12m.webp"
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
.work-dixil {
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

