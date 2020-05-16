<template>
  <section class='section'>
    <div class='section-illustration'>
      <img src={imgUrl} alt={imgTextAlt}/>
    </div>
    <div class='section-details'>
      <!-- <slot></slot> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    imgUrl: String,
    imgTextAlt: String
  }
}
</script>