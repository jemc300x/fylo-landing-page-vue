<template>
  <div ></div>
</template>

<script>
  export default {
    name: 'Curve',
  }
</script>

<style scoped>
  div{
    background-image: url(../assets/img/bg-curve-mobile.svg);
    background-size: cover;
    background-position: center;
    height: 115px;
  }

  @media(min-width: 768px) {
    div{
      background-image: url(../assets/img/bg-curve-desktop.svg);
    }
  }
</style>