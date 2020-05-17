<template>
  <Main>
    <div class="container">
      <h1>Page Not Found 😱</h1>
    </div>
  </Main>
</template>

<script>
  import Main from '../Layout/Main.vue'
  export default {
    name: 'NotFound',
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