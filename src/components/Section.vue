<template>
  <section class='section'>
    <div class='section-illustration'>      
      <img 
        :src="require(`@/assets/img/${imgUrl}`)" 
        :alt="imgTextAlt"
      />
    </div>
    <div class='section-details'>
      <slot></slot>
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

<style>
  .section{
    display: flex;
    flex-direction: column;
    padding: 30px 5% 90px;
  }

  .section-illustration {
    align-self: center;
    margin-bottom: 40px;
  }

  .section-illustration img {
    width: 100%;
  }

  .section-details {
    text-align: center;
  }

  @media (min-width: 768px){
    .section {
      flex-direction: row-reverse;
      max-width: var(--desktop-width);
      margin: 0px auto;
      padding-top: 50px;
      padding-bottom: 100px;
      align-items: center;
    }

    .section-details {
      flex: 50%;
      text-align: start;
    }

    .section-illustration {
      flex: 50%;
    }
  }
</style>