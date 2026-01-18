<template>
  <div
    class="work-saray"
    :data-node-id="nodeId"
    data-name="Work Saray"
  >
    <!-- JustWatch's Title Page -->
    
    <ContextText
        :headline="true"
        headline-text="Saray Casablanca"
        body-text="Saray is a sanctuary where the elegance of urban living meets the serenity of nature."
     />

    <!-- First Content Image -->
    <ContentImage
      amount="1"
      image="/img/saray_2m.webp"
    />
    <ContextText
      :headline="true"
      headline-text="Observations:"
      body-text="As the architecture conception come to an end, a need for a digital presence that reflects Saray's brand's identity and generate qualified leads was identified."
    />

    <ContentImage
      amount="1"
      image="/img/saray_3m2.webp"
    />

    <ContextText
    :headline="true"
    headline-text="Research:">
      <p>I started my research with two objectives in mind, first to identify key visual elements of a real estate website, and second to build an information architecture that's easy to naviagte for potential clients to find key information</p>
      <p>To achieve this, I initiated two methods, developers interviews to leverage their extensive experience in the field, and competitive audit to map out industry standards.</p>
    </ContextText>

    <ContextText
      :headline="false"
    >
    <p class="context-text__bold">Insights:</p>
      <p>By analyzing competitors (Alexander Millett, Douglas Elliman, Al Akaria...), I identified some specific visual elements used to signal luxury:</p>
      <ul>
        <li>Ample negative space: Used to convey abundance</li>
        <li>Visual sharpness: Crisp typography and corners to convey precision and seriousness.</li>
        <li>Center alignment: A deliberate nod to traditional editorial layouts.</li> 
        <li>Immersive imagery: Photography that acts as a portal, taking the user "inside the space" immediately.</li>
      </ul>
    </ContextText>

    <ContextText
      :headline="false"
      body-text="After a few iterations, and feedback implementations we settled with this final Information Architecture:"
    />
    
    <ContentImage
      amount="1"
      image="/img/saray_ia.webp"
    />

    <!--<ContextText
      :headline="true"
      headline-text="Hypothesis:"
      body-text="We hypothesized that a digital presence that reflected the brand's identity and generate qualified leads would be a success."
    />-->
    
    <ContextText
      :headline="true"
      headline-text="Design:"
      body-text="Guided the 5th principle of my Design Personality inspired by Sister Corita Kent: 'Don’t try to create and analyze at the same time', I began with divergent exploration, generating a wide breadth of visual directions driven by a creative freedom without any judgment. I then shifted to convergent analysis, filtering these concepts against our research insights to ensure they met the strategic goals. Following a series of feedback loops with stakeholders, we refined the strongest direction to settle with this final design."
    />

    
    <ContentImage
      amount="1"
      image="/img/saray_4m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/saray_5m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/saray_6m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/saray_7m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/saray_8m.webp"
    />
    <ContentImage
      amount="1"
      image="/img/saray_9m.webp"
    />  
    <ContentImage
      amount="1"
      image="/img/saray_10m.webp"
    />  


    <ContextText
      :headline="true"
      headline-text="Conclude:"
    >
      <p>The results provided strong quantitative validation for my design:</p>
      <ul>
        <li>We achieved a 4.8/5 score on the Semantic Differential Scale</li>
        <li>The website generated 4% more qualified leads than the set target</li>
      </ul>
    </ContextText>

    <!--statistically proving that the design conveyed the desired brand's identity-->
    
    
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
.work-saray {
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

