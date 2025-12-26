<template>
  <div
    class="work-justwatch"
    :data-node-id="nodeId"
    data-name="Work JustWatch"
  >
    <!-- JustWatch's Title Page -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1200"
    >
      <ContextText
        :headline="true"
        headline-text="JustWatch's Title Page"
        body-text="JustWatch is a Streaming Guide, helping more than 60 millions users monthly to find where to watch movies, TV shows, and Sports matches, "
      />
    </div>

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      data-node-id="187:1201"
      image="/img/dixil_2m.webp"
    />

    <!-- Observations -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1202"
    >
      <ContextText
        :headline="true"
        headline-text="Observations:"
        body-text="The Title Page was suffering from a high bounce rate. The design hadn't been updated in 7 years, leading to accumulated design debt and user feedback."
      />
    </div>

    <!-- Second Content Image -->
    <ContentImage
      amount="1"
      data-node-id="187:1203"
    />

    <!-- Research -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1204"
    >
      <ContextText
        :headline="true"
        headline-text="Research:"
        node-id="187:1204"
      >
        <div
          class="fox-body-large-regular"
          data-node-id="I187:1204;65:164"
        >
          <p>The goal of the research was to describe the main pain points the users face when using the title page and how is it affecting the bounce rate.</p>
          <p>I did this by compiling all the feedback in our feedback channel related to the title page, pulling and analyzing data with the Business Intelligence team, and conducting 8 semi-structured user interviews</p>
          <p>&nbsp;</p>
          <p class="context-text__bold">Insights: </p>
          <p>Using Jobs to be Done mapping, we identified that users hire the title page to:</p>
          <ul>
            <li>Find if a specific title on their existing services</li>
            <li>Find where to watch a title on a service they don't have</li>
            <li>Find where to watch a title for free</li>
            <li>Decide if a title is worth watching</li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <span class="context-text__bold">Pain points:</span>
          </p>
          <p>To achieve these goals, users faced significant obstacles:</p>
          <ul>
            <li>Users had to click through multiple services to compare prices</li>
            <li>Users could not easily verify if a title was available in their preferred language</li>
            <li>Users had to scroll back and forth to find a specific info (Trailer, Cast, Trivia...)</li>
            <li>TV Show users had to scroll excessively to find the episode list</li>
            <li>Many users didn't consider start watching through the streaming services icons </li>
          </ul>
        </div>
      </ContextText>
    </div>

    <!-- Third Content Image -->
    <ContentImage
      amount="1"
      data-node-id="187:1205"
    />

    <!-- Hypothesis -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1206"
    >
      <ContextText
        :headline="true"
        headline-text="Hypothesis:"
        node-id="187:1206"
      >
        <div
          class="fox-body-large-regular"
          data-node-id="I187:1206;65:164"
        >
          <p>We hypothesized that the bounce rates would decrease if we:</p>
          <ul>
            <li>Sorted the buybox by price, showing the cheapest options first</li>
            <li>Showed the supported languages within the offers</li>
            <li>Improved content discoverability by using jumplinks (anchors)</li>
            <li>Streamlined the path to the latest episodes</li>
            <li>Increased the prominence of the "Start Watching" CTA</li>
          </ul>
        </div>
      </ContextText>
    </div>

    <!-- Design -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1207"
    >
      <ContextText
        :headline="true"
        headline-text="Design:"
        body-text="I kicked off the design phase by exploring widely different iterations, Going horizontal rather than vertical, quantity over quality, to avoid the &quot;anchoring bias&quot; in the beginning. Then I started to be more analytical by filtering out the first iterations based on our research insights and technical feasibility (here I included our engineering team), and then I explored more into the selected verticals"
      />
    </div>

    <!-- Fourth Content Image -->
    <ContentImage
      amount="1"
      data-node-id="187:1208"
    />

    <!-- Design continuation -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1209"
    >
      <ContextText
        :headline="false"
        body-text="Our approach followed an iterative feedback loop before we settled with this final design where we added relevant information to each offers including languages and prices, then sorted the list by the cheapest."
      />
    </div>

    <!-- Custom height image 1 -->
    <div
      class="work-justwatch__custom-image"
      data-name="Content Image"
      data-node-id="187:1210"
    />

    <!-- Design continuation 2 -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1211"
    >
      <ContextText
        :headline="false"
        body-text="We moved the episode list to the second position and defaulted to 'Newest' to match user intent. Then put a clear &quot;Watch now&quot; CTA on each offer so it's easier for users to start watching their title."
      />
    </div>

    <!-- Custom height image 2 -->
    <div
      class="work-justwatch__custom-image"
      data-name="Content Image"
      data-node-id="187:1212"
    />

    <!-- Test -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1213"
    >
      <ContextText
        :headline="true"
        headline-text="Test:"
        body-text="As this experiment impacted a core section of the platform, we decided to run an A/B test comparing the new design (Variant) against the old one (Control). We ran the test for 2 weeks in the US on 25% of our traffic to validate our hypothesis."
      />
    </div>

    <!-- Conclude -->
    <div
      class="work-justwatch__context-text"
      data-name="Context Text"
      data-node-id="187:1214"
    >
      <ContextText
        :headline="true"
        headline-text="Conclude:"
        node-id="187:1214"
      >
        <div
          class="fox-body-large-regular"
          data-node-id="I187:1214;65:164"
        >
          <p>The experiment validated our hypothesis with strong results across all key metrics:</p>
          <ul>
            <li>Revenue: 10% total revenue uplift.</li>
            <li>Engagement: +40% increase in streaming services clickouts.</li>
            <li>Bounce Rate: Reduced bounce rate by 16% (Season pages) and 11% (Show pages).</li>
          </ul>
        </div>
      </ContextText>
    </div>
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
.work-justwatch {
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

.work-justwatch__context-text {
  display: flex;
  flex-direction: column;
  gap: var(--fox-spacing-200); /* 16px gap */
  align-items: flex-start;
  padding-right: var(--fox-spacing-1100); /* 88px padding right */
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  color: var(--fox-text-highlight);
}


.work-justwatch__custom-image {
  background-color: var(--fox-neutral-600);
  height: 450.359px;
  border-radius: var(--fox-border-radius-lg);
  flex-shrink: 0;
  width: 100%;
  max-width: 799.776px;
}
</style>

