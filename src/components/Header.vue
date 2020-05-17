<template>
  <header class="header">
    <router-link to="/">
      <img class="header-logo" src="../assets/img/logo.svg" alt="Logo" />
    </router-link>
    <ul class="header-navbar">
      <li><router-link class="header-navbar__link" to="/features">Features</router-link></li>
      <li><router-link class="header-navbar__link" to="/team">Team</router-link></li>
      <li><router-link class="header-navbar__link" to="/singin">Sing In</router-link></li>
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