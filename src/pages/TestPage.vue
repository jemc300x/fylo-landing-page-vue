<template>
  <Main>
    <div class="container">
      <h1 >Test page 😅</h1>
    </div>
  </Main>
</template>

<script>
  import Main from '../Layout/Main.vue'
  export default {
    name: 'TestPage',
    components: {
      Main
    }
  }
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
</style>