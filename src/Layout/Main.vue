<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: 'Main',
    components: {
      Header,
      Footer
    }
  }
</script>