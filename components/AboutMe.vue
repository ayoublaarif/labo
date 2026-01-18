<template>
  <div
    class="about-me"
    data-name="About me"
  >
    <ContextText
      class="about-me__text"
      :headline="false"
      :body-text="'I am a Product Designer, or rather, an experimenter with 6+ years of experience in researching, hypothesizing, and testing. I solve everything from absurd to complex problems with the aim of making people\'s lives easier and better. Coming from a tech and marketing background helps me see the bigger picture, allowing me to align user empathy with business goals and engineering constraints.'"
    />
    <ContentImage
      class="about-me__image"
      amount="1"
      :image="'/img/ayoub.webp'"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  bodyText?: string
  image?: string
}


</script>

<style scoped>
.about-me {
  display: flex;
  gap: var(--fox-spacing-200); /* 32px gap */
  align-items: flex-start;
  position: relative;
  width: 568px;
}

.about-me__text {
  flex: 1 0 0;
  min-width: 0;
}

.about-me__image {
  flex-shrink: 0;
  width: 232px;
  height: 232px;
}

.about-me__image :deep(.content-image--single) {
  width: 232px;
  height: 232px;
  border-radius: var(--fox-border-radius-lg);
  background-color: var(--fox-neutral-800);
  position: relative;
  overflow: hidden;
}

.about-me__image :deep(.content-image__img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>

