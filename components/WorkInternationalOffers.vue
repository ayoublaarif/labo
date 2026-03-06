<template>
  <div
    class="work-international-offers"
    :data-node-id="nodeId"
    data-name="Work International Offers"
  >
    <!-- JustWatch's Title Page -->
    <div
      class="work-international-offers__context-text"
      data-name="Context Text"
      data-node-id="187:1200"
    >
      <ContextText
        :headline="true"
        headline-text="International Offers"
        body-text="Making it possible for users to watch their favourite titles that are not available in their country from different countries."
      />
    </div>

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      data-node-id="187:1201"
      image="/img/io_1.webp"
    />

    <WorkMetaInfo 
      role="Product Designer"
      timeline="2025"
      team="Me, PM, SEO Lead, BI Developer, Engineer, and a Revnue Manager"
    />

    <!-- Observations -->
      <ContextText
        :headline="true"
        headline-text="Observations:"
        body-text="More than 1.6m pages were identified to be empty (don’t have any offers) leaving the users with the frustration of not finding what they are looking and hurting our overall SEO performance."
      />  

    <!-- Second Content Image -->
    <ContentImage
      amount="1"
      data-node-id="187:1203"
      image="/img/io_2.webp"
    />

    <!-- Research -->
    <div
      class="work-international-offers__context-text"
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
          <p>I dived into the different strings of the topic through talking to users to identify what positive alternative actions can be done other than the notify me CTA which data shows that very few users actually click it, because JustWatch is usually used at watching experience, so the setup is already set for a watch during that time not later, and also through talking to industry experts to understand… </p>
          <p>&nbsp;</p>
          <p>The main insight was the concept of Geographical Licensing, basically some movies are available in certain countries and not others.</p>
          <p>&nbsp;</p>
          <p>Other insights like some people turn to illegal streaming and some try to watch something else when the desired title is not available were also noted.</p>
          <p>&nbsp;</p>
          <p>But I was intrigued by the main insight so before I moved ahead and shaped my thesis I wanted to know how common is Geographical Licensing so I reached out to our beloved BI team again and ask them to quantify the percentage of empty titles pages that have offers in at least another country. The results ranged between 44% and 73% depending on the market which proved the scale of the concept.</p>
    
        </div>
      </ContextText>
    </div>

    

    <!-- Hypothesis -->
    <div
      class="work-international-offers__context-text"
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
          <p>I hypothesized that providing users the option to watch these titles from a different country through a VPN would increase user satisfaction and engagement (represented by clickouts) which would consequently decrease the bounce rate and drive higher revenue.</p>
         
        </div>
      </ContextText>
    </div>

    <!-- Design -->
    
      <ContextText
        :headline="true"
        headline-text="Design:"
        body-text="Following my 3rd design ethos “Improve upon by up to 4%” and as I had a clear visualization of how it should look, I went straight into to it and with a few couple of iterations mainly utilizing our components I found myself already settling on the final design:"
      />

      <ContextText
        :headline="false"
        body-text="I compacted it to 2 countries served in an accordion where the only first one is open and with a show more CTA in case the users want to see more mainly to not have super long offerings box and to not hurt much the performance of the promoted placement."
      />
    
      <ContentImage
        amount="1"
        data-node-id="187:1208"
        image="/img/io_3.webp"
      />

      <ContextText
        :headline="false"
        body-text="I added a language filter as the languages with which the titles can be streamed differ from one country to another, and then a streaming service filter, for users to quickly isolate platforms they already subscribe to"
      />

      <ContentImage
        amount="1"
        data-node-id="187:1208"
        image="/img/io_4.webp"
      />

    <!-- Design continuation -->
   
    <ContextText
        :headline="false"
        body-text="As the list of countries could go sometimes forever, we sorted it by the first language of the geo location of the users"
    />

    <ContentImage
      amount="1"
      data-node-id="187:1208"
      image="/img/io_5.webp"
    />
    

    <!-- Test -->
    <div
      class="work-international-offers__context-text"
      data-name="Context Text"
      data-node-id="187:1213"
    >
      <ContextText
        :headline="true"
        headline-text="Test:"
        body-text="To keep the efforts minimal for the experiment I decided to go with the movie pages only those that have offers in at least one another country. I introduced the experiment to our revenue manager and we managed to close a CPA deal with a VPN provider to test with. Once all was set we went ahead and ran the experiment for 2 weeks in the US on 20% of our traffic."
      />
    </div>

    <!-- Conclude -->
    <div
      class="work-international-offers__context-text"
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
          <p>While the bounce rate didn't change much, the clickouts increased by 10% and the revenue increased by 300%.</p>
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
.work-international-offers {
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

.work-international-offers__context-text {
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


.work-international-offers__custom-image {
  background-color: var(--fox-neutral-600);
  height: 450.359px;
  border-radius: var(--fox-border-radius-lg);
  flex-shrink: 0;
  width: 100%;
  max-width: 799.776px;
}
</style>

