<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-family: 'Raleway', sans-serif;
    --desktop-width: 1440px;
    --mobile-width: 375px;
    /* Color Primary */
    --Very-Dark-Blue: hsl(243, 87%, 12%);
    --Desaturated-Blue: hsl(238, 22%, 44%);
    /* Color Accent */
    --Bright-Blue: hsl(224, 93%, 58%);
    --Moderate-Cyan: hsl(170, 45%, 43%);
    /* Color Neutral */
    --Light-Grayish-Blue: #f8f8fe;
    --Light-Gray: hsl(0, 0%, 75%);
  }
</style>
