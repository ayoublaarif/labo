<template>
  <div class="test-page">
    <div class="test-page__layout">
      <!-- Left Sidebar with Tabs -->
      <aside class="test-page__sidebar">
        <h1 class="test-page__title">Components</h1>
        <nav class="test-page__tabs">
          <button
            v-for="component in components"
            :key="component.id"
            class="test-page__tab"
            :class="{ 'test-page__tab--active': activeComponent === component.id }"
            @click="activeComponent = component.id"
          >
            {{ component.name }}
          </button>
        </nav>
      </aside>

      <!-- Right Content Area -->
      <main class="test-page__content">
        <div class="test-page__component-view">
          <!-- Modal Header -->
          <div v-if="activeComponent === 'modal-header'" class="test-page__component-wrapper">
            <h2 class="test-page__section-title">Modal Header</h2>
            <div class="test-page__component-display">
              <ModalHeader title="Canada Roller Team" />
            </div>
          </div>

          <!-- Placeholder -->
          <div v-if="activeComponent === 'placeholder'" class="test-page__component-wrapper">
            <h2 class="test-page__section-title">Placeholder</h2>
            <div class="test-page__component-display">
              <Placeholder />
            </div>
          </div>

          <!-- Modal Body -->
          <div v-if="activeComponent === 'modal-body'" class="test-page__component-wrapper">
            <h2 class="test-page__section-title">Modal Body</h2>
            <div class="test-page__component-display">
              <div style="background-color: var(--fox-background-base); border-radius: var(--fox-border-radius-lg);">
                <ModalBody />
              </div>
            </div>
          </div>

          <!-- Modal -->
          <div v-if="activeComponent === 'modal'" class="test-page__component-wrapper test-page__component-wrapper--full-width">
            <h2 class="test-page__section-title">Modal</h2>
            <div class="test-page__component-display">
              <Modal />
            </div>
          </div>

          <!-- Context Text -->
          <div v-if="activeComponent === 'context-text'" class="test-page__component-wrapper test-page__component-wrapper--full-width">
            <h2 class="test-page__section-title">Context Text</h2>
            <div class="test-page__component-display">
              <div style="background-color: var(--fox-background-base); padding: var(--fox-spacing-400);">
                <ContextText
                  :headline="true"
                  headline-text="Sifr - Creative Driven House"
                  body-text="Redesigning the website of a Multidisciplinary Creative Content Creation Studio based in Saudi Arabia. Sifr serves as a gateway to infinite creativity and imagination."
                />
              </div>
            </div>
          </div>

          <!-- Content Image -->
          <div v-if="activeComponent === 'content-image'" class="test-page__component-wrapper test-page__component-wrapper--full-width">
            <h2 class="test-page__section-title">Content Image</h2>
            <div class="test-page__component-display">
              <ContentImage amount="1" />
            </div>
            <div class="test-page__component-display">
              <ContentImage amount="2" />
            </div>
          </div>

          <!-- Work Sifr Frame -->
          <div v-if="activeComponent === 'work-sifr'" class="test-page__component-wrapper test-page__component-wrapper--full-width">
            <h2 class="test-page__section-title">Work Sifr Frame</h2>
            <div class="test-page__component-display">
              <div style="background-color: var(--fox-background-base); padding: var(--fox-spacing-400); min-height: 100vh;">
                <WorkSifr />
              </div>
            </div>
          </div>

          <!-- Work JustWatch Frame -->
          <div v-if="activeComponent === 'work-justwatch'" class="test-page__component-wrapper test-page__component-wrapper--full-width">
            <h2 class="test-page__section-title">Work JustWatch Frame</h2>
            <div class="test-page__component-display">
              <div style="background-color: var(--fox-background-base); padding: var(--fox-spacing-400); min-height: 100vh;">
                <WorkJustWatch />
              </div>
            </div>
          </div>

          <!-- Work Dixil Frame -->
          <div v-if="activeComponent === 'work-dixil'" class="test-page__component-wrapper test-page__component-wrapper--full-width">
            <h2 class="test-page__section-title">Work Dixil Frame</h2>
            <div class="test-page__component-display">
              <div style="background-color: var(--fox-background-base); padding: var(--fox-spacing-400); min-height: 100vh;">
                <WorkDixil />
              </div>
            </div>
          </div>

          <!-- Project Card -->
          <div v-if="activeComponent === 'project-card'" class="test-page__component-wrapper">
            <h2 class="test-page__section-title">Project Card</h2>
            <div class="test-page__component-display">
              <ProjectCard
                title="Project Title"
                subtitle="Project Subtitle"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const components = [
  { id: 'modal-header', name: 'Modal Header' },
  { id: 'placeholder', name: 'Placeholder' },
  { id: 'modal-body', name: 'Modal Body' },
  { id: 'modal', name: 'Modal' },
  { id: 'context-text', name: 'Context Text' },
  { id: 'content-image', name: 'Content Image' },
  { id: 'work-sifr', name: 'Work Sifr Frame' },
  { id: 'work-justwatch', name: 'Work JustWatch Frame' },
  { id: 'work-dixil', name: 'Work Dixil Frame' },
  { id: 'project-card', name: 'Project Card' },
]

const activeComponent = ref(components[0].id)
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  background-color: #000;
}

.test-page__layout {
  display: flex;
  min-height: 100vh;
}

/* Left Sidebar */
.test-page__sidebar {
  width: 280px;
  min-width: 280px;
  background-color: var(--fox-background-base);
  border-right: 1px solid var(--fox-neutral-600);
  padding: var(--fox-spacing-400);
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-400);
}

.test-page__title {
  /* Using headline-bold-small text style */
  font-family: var(--fox-font-family-main), sans-serif;
  font-weight: 800; /* Heavy weight value from text style */
  font-size: var(--fox-font-size-200);
  line-height: var(--fox-line-height-100);
  letter-spacing: 0;
  color: var(--fox-text-highlight);
  margin: 0;
}

.test-page__tabs {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-100);
}

.test-page__tab {
  background: none;
  border: none;
  padding: var(--fox-spacing-200) var(--fox-spacing-300);
  text-align: left;
  cursor: pointer;
  font-family: var(--fox-font-family-main), sans-serif;
  font-size: var(--fox-font-size-100);
  line-height: var(--fox-line-height-100);
  color: var(--fox-text-midlight);
  border-radius: var(--fox-border-radius-md);
  transition: all 0.2s ease;
}

.test-page__tab:hover {
  background-color: var(--fox-neutral-600);
  color: var(--fox-text-highlight);
}

.test-page__tab--active {
  background-color: var(--fox-neutral-700);
  color: var(--fox-text-highlight);
  font-weight: var(--fox-font-weight-200);
}

/* Right Content Area */
.test-page__content {
  flex: 1;
  overflow-y: auto;
  padding: var(--fox-spacing-400);
}

.test-page__component-view {
  max-width: 1200px;
  margin: 0 auto;
}

.test-page__component-wrapper {
  margin-bottom: var(--fox-spacing-800);
}

.test-page__component-wrapper--full-width {
  max-width: 100%;
}

.test-page__section-title {
  /* Using headline-bold-small text style */
  font-family: var(--fox-font-family-main), sans-serif;
  font-weight: 800; /* Heavy weight value from text style */
  font-size: var(--fox-font-size-200);
  line-height: var(--fox-line-height-100);
  letter-spacing: 0;
  color: var(--fox-text-highlight);
  margin-bottom: var(--fox-spacing-400);
}

.test-page__component-display {
  margin-bottom: var(--fox-spacing-600);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.test-page__component-wrapper--full-width .test-page__component-display {
  max-width: 100%;
}
</style>

