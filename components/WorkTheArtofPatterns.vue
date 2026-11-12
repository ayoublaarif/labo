<template>
  <div
    class="work-the-art-of-patterns"
    :data-node-id="nodeId"
    data-name="Work The Art of Patterns"
  >
    <!-- JustWatch's Title Page -->
    <div
      class="work-the-art-of-patterns__context-text"
      data-name="Context Text"
      data-node-id="187:1200"
    >
      <ContextText
        :headline="true"
        headline-text="The Art of Patterns"
        body-text="can you imagine that from this"
      />
    </div>

    <ContentImage
      amount="1"
      image="/img/taop_1.webp"
    />

    <ContextText
        :headline="false"
        body-text="You can make this?"
      />  


      <ContentImage
      amount="1"
      image="/img/taop_2.webp"
    />

    <!-- <WorkMetaInfo 
      role="Product Designer"
      timeline="2025"
      team="Me, PM, SEO Lead, 2 BI Developers, Engineer, and a Revnue Manager"
    /> -->

    <ContextText
        :headline="false"
        body-text="Let me walk you through it. All you need to do is, first, to take this fundamental domain put it on a lattice of equilateral triangles, then locate the rotation center at the top vertex, then rotate the cell 3 times."
      />  

      <ContentImage
      amount="2"
      image1="/img/taop_3.webp"
      image2="/img/taop_4.webp"
    />

    <ContextText
        :headline="false"
        body-text="Now duplicate this unit cell on the next one and reflect it vertically."
      />  
      
      <ContextText
        :headline="false"
        body-text="Then you can take these two cells down or up and reflect them vertically as well, and if you kept going with these transformations you will end up with this pattern."
      />  


      <ContentImage
      amount="2"
      image1="/img/taop_5.webp"
      image2="/img/taop_6.webp"
    />

    <ContextText
        :headline="false"
        body-text="You will end up creating a p31m wallpaper group and this is its cell structure diagram."
      />  

      <ContentImage
      amount="1"
      class-name="content-image--diagram"
      image="/img/p31m_diagram.svg"
    />


      <ContextText
        :headline="false"
        body-text="But wait what is a wallpaper group? and what is p31m?"
      />  

      <ContextText
        :headline="false"
        body-text="The concept of wallpaper groups is a mathematical categorization of patterns that examines characteristics like translations, mirroring, rotation, and gliding after mirroring. The interesting part is that mathematicians have found there only exist 17 Wallpaper Groups, so every pattern you ever encountered throughout your life falls into one of these groups. p31m is the crystallographic notation for one of these groups."
      />


      <ContextText
        :headline="true"
        headline-text="A little background"
      />  


      <ContextText
        :headline="false"
        body-text="Before we dive deeply into the recesses of the wallpaper groups, I want to give a little background about me: I was born and raised in Morocco, a place where patterns are principal aesthetic elements..."
      />


      <ContentImage
      amount="2"
      image1="/img/taop_5.webp"
      image2="/img/taop_6.webp"
    />

    <ContentImage
      amount="2"
      image1="/img/taop_5.webp"
      image2="/img/taop_6.webp"
    />

    <ContextText
        :headline="false"
        body-text="A few years ago I read about the Alhambra, and I was fascinated by its story how it turned from lost place to one of the most visited touristic attractions in the world, but what stroke me the most was the fact this place that was built back in 14th century has all the 17 wallpaper groups. that was the moment when I was sooo intrigued to explore the science behind these patterns that I’ve been seeing my whole life as a background element and here I am now excitedly sharing these explorations after a few months of learning and experimenting"
      />

    <ContextText
        :headline="true"
        headline-text="Wallpaper Groups"
        body-text="I won't go through all the 17 wallpaper groups neither into the details of each group here, but I will cover the characteristics of the most common groups and show their patterns that I created with the template I built. For any more details, please feel free to reach out to me."
      />  
      


      <ContextText
      :headline="false">
      <p class="context-text__bold">Group p1:</p>
      <ul>
        <li><strong>Lattice Type:</strong> Square, Rectangular, Oblique, Rhombic, or Hexagonal</li>
        <li>p1 is the simplest group, containing only translations no rotations, reflections, or glide reflections.</li>
      </ul>
    </ContextText>

    <ContentImage
      amount="1"
      image="/img/taop_p1.webp"
    />
    <ContentImage
      amount="1"
      image="/img/taop_p1_4.webp"
    />


    <ContextText
      :headline="false">
      <p class="context-text__bold">Group pmm:</p>  
      <ul>
        <li><strong>Lattice Type:</strong> Rectangular</li>
        <li><strong>Mirroring:</strong> Reflect the initial motif across a vertical axis, then reflect those two resulting pieces across a horizontal axis that is perpendicular to the first.</li>
        <li><strong>Rotation:</strong> These two perpendicular mirror lines automatically generate four 2-fold ($180^\circ$) rotation centers exactly at the points where the mirror lines intersect (the corners of the rectangular cell)</li>
      </ul>
    </ContextText>

    <ContentImage
      amount="2"
      class-name="content-image--diagram"
      image1="/img/pmm_diagram.png"
      image2="/img/pmm_diagram_1.svg"
    />

    <ContentImage
      amount="1"
      image="/img/taop_pmm_1.png"
    />
    <ContentImage
      amount="1"
      image="/img/taop_pmm_3_alt.png"
    />

    <ContextText
      :headline="false">
      <p class="">2 different styles but you can tell that they are from the same kind, right?!</p> 
    </ContextText>

    <ContextText
      :headline="false">
      <p class="context-text__bold">Group pmg:</p>
      <ul>
        <li><strong>Lattice Type:</strong> Rectangular</li>
        <li><strong>Mirroring:</strong> Reflect the fundamental domain across a single axis (only one direction, e.g., vertical). These mirror lines repeat parallel to each other.</li>
        <li><strong>Glide Reflection:</strong> Perform a "flip-and-slide" along axes that run perpendicular to your mirror lines. These glide axes sit exactly halfway between the mirror lines.</li>
        <li><strong>Rotation:</strong> This combination automatically generates two distinct types of 2-fold (180°) rotation centers.</li>
      </ul>
    </ContextText>

    <ContentImage
      amount="2"
      class-name="content-image--diagram"
      image1="/img/pmg_diagram.svg"
      image2="/img/pmg_diagram_1.svg"
    />
    <ContentImage
      amount="1"
      image="/img/taop_pmg_1_alt.png"
    />
    <ContentImage
      amount="1"
      image="/img/taop_pmg_2.png"
    />

    <ContextText
      :headline="false">
      <p class="context-text__bold">Group cm:</p>
      <ul>
        <li><strong>Lattice Type:</strong> Rhombic</li>
        <li><strong>Mirroring:</strong> Reflect the fundamental domain across a set of parallel mirror axes running in vertical or horiztonal direction</li>
        <li><strong>Glide Reflection:</strong> This automatically generates a set of glid reflections whose axes are parallel to the mirror lines and halfway between them</li>
      </ul>
    </ContextText>

    <ContentImage
      amount="2"
      class-name="content-image--diagram"
      image1="/img/cm_diagram.svg"
      image2="/img/cm_diagram_1.svg"
    />
    <ContentImage
      amount="1"
      image="/img/taop_cm_0.png"
    />
    <ContentImage
      amount="1"
      image="/img/taop_cm_2_alt.png"
    />

    <!-- Group cmm 
    <ContextText
      :headline="false">
      <p class="context-text__bold">Group cmm:</p>
      <p>This group is characterized by a vertical mirror line and a horizontal mirror line. It is the most symmetrical group and is often found in nature.</p>
    </ContextText>

    <ContentImage
      amount="2"
      image1="/img/placeholder_img.png"
      image2="/img/placeholder_img.png"
    />-->


    <ContextText
      :headline="false">
      <p class="context-text__bold">Group p3:</p>
      <ul>
        <li><strong>Lattice Type:</strong> Hexagonal (A grid of equilateral triangles).</li>
        <li><strong>Rotation:</strong> Pretty straightforward, Make any of the 3 vertices of the fundamental domain the rotation center and rotate the domain by 120° and then repeat</li>
      </ul>
    </ContextText>

    <ContentImage
      amount="1"
      class-name="content-image--diagram"
      image="/img/p3_diagram.svg"
    />

    <ContentImage
      amount="1"
      image="/img/toap_p3_2.webp"
    />

    <ContentImage
      amount="1"
      image="/img/toap_p3_3.png"
    />

    <ContextText
      :headline="false">
      <p class="context-text__bold">Group p3m1:</p>
      <ul>
        <li><strong>Lattice Type:</strong> Hexagonal (A grid of equilateral triangles).</li>
        <li><strong>Mirroring:</strong> Take your fundamental domain and mirror it across all three of its sides, then repeat this mirroring process endlessly with each new replica.</li>
        <li><strong>Rotation:</strong> This automatically generates three distinct types of 3-fold 120° rotation centers, which lie exactly at the three different vertices where the triangles meet.</li>
        <li><strong>Glide Reflection:</strong> This also automatically generates a set of glid reflections whose axes are parallel to the mirror lines and halfway between them.</li>
      </ul>
    </ContextText>

    <ContentImage
      amount="1"
      class-name="content-image--diagram"
      image="/img/p3m1_diagram.svg"
    />

    <ContentImage
      amount="1"
      image="/img/toap_p3m1.webp"
    />
    <ContentImage
      amount="1"
      image="/img/toap_p3m1_2.webp"
    />

    <ContextText
      :headline="false">
      <p class="context-text__bold">Group p6:</p>
      <ul>
        <li><strong>Lattice Type:</strong> Hexagonal (A grid of equilateral triangles).</li>
        <li><strong>Rotation:</strong> Take your fundamental domain and rotate it by 120° around its 120° vertex twice to build a full equilateral triangle. Then rotate the entire equilateral triangle by 60° to fill the grid.</li>
      </ul>
    </ContextText>  

    <ContentImage
      amount="1"
      class-name="content-image--diagram"
      image="/img/p6_diagram.svg"
    />

    <ContentImage
      amount="1"
      image="/img/taop_p6_1.webp"
    />

    <ContentImage
      amount="1"
      image="/img/taop_p6_6.webp"
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
.work-the-art-of-patterns {
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

.work-the-art-of-patterns__context-text {
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


.work-the-art-of-patterns__custom-image {
  background-color: var(--fox-neutral-600);
  height: 450.359px;
  border-radius: var(--fox-border-radius-lg);
  flex-shrink: 0;
  width: 100%;
  max-width: 799.776px;
}
</style>

