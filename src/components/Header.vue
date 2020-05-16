<template>
  <header class="header">
    <img class="header-logo" src="../assets/img/logo.svg" alt="Logo">
    <ul class="header-navbar">
      <li><a class="header-navbar__link" href="/">Features</a></li>
      <li><a class="header-navbar__link" href="/">Team</a></li>
      <li><a class="header-navbar__link" href="/">Sing In</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header{
    max-width: var(--desktop-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin: 0px auto;
    padding: 0 5%;
  }

  .header-logo{
    width: 90px;
  }

  .header-navbar{
    list-style: none;
    display: inline-flex;
    font-family: var(--font-family);
    padding: 0;
  }

  .header-navbar li {
    margin-right: 10px;
  }

  .header-navbar__link {
    text-decoration: none;
  }

  @media (min-width: 768px){
    .header-navbar li {
      margin-right: 25px;
    }

    .header-logo{
      width: initial;
    }  
  }
</style>