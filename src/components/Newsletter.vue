<template>
  <section class='newsletter'>
    <div>
      <h2>Get early access today</h2>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous. if you have any questions, our support team would be happy to help you.</p>
   </div>
    <form>
      <input type="text" placeholder="email@example.com" />
      <button>Get Started For Free</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'Newsletter'
  }
</script>

<style scoped>
  .newsletter{
    background-color: var(--Desaturated-Blue);
    padding: 80px 0px;
    text-align: center;
    color: var(--Light-Grayish-Blue);
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .newsletter h2 {
    margin-bottom: 20px;
    font-family: var(--font-family);
  }

  .newsletter p {
    padding: 0px  50px;
    margin-bottom: 20px;
  }

  .newsletter form {
    width: 100%;
  }

  .newsletter input {
    width: 70%;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid var(--Very-Dark-Blue);
    font-family: var(--font-family);
    margin-bottom: 10px;
    font-size: 13.3333px;
  }

  ::placeholder {
    color: var(--Light-Gray);
  }

  .newsletter button {
    width: 70%;
    background-color: var(--Bright-Blue);
    padding: 10px;
    color: var(--Light-Grayish-Blue);
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 25px -12px var(--Very-Dark-Blue);
    font-family: var(--font-family);
    font-weight: bold;
  }

  @media (min-width: 768px) {
    .newsletter {
      flex-direction: row;
    }

    .newsletter div {
      flex: 60%;
    }

    .newsletter div p, h2 {
      text-align: start;
    }

    .newsletter div h2 {
      padding-left: 50px;
    }

    .newsletter div p {
      max-width: 540px;
    }

    .newsletter form {
      flex: 40%;
    }
  }
</style>