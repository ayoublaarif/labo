<template>
  <div
    class="work-too-big-to-handle"
    :data-node-id="nodeId"
    data-name="Work Too Big To Handle"
  >
    <!-- JustWatch's Title Page -->
    
    <ContextText
        :headline="true"
        headline-text="Too Big To Handle"
        body-text="Too Big To Handle is a software company that helps businesses manage their projects and tasks."
     />

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      image="/img/tbth_1.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_2.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_3.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_4.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_6.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_7.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_8.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_9.webp"
    />  
    <ContentImage
      amount="1"
      image="/img/tbth_10.webp"
    />
    <ContentImage
      amount="1"
      image="/img/tbth_11.webp"
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
.work-too-big-to-handle {
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

