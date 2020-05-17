<template>
  <Main>

    <Section imgUrl="illustration-1.svg" imgTextAlt="Illustration 1" >
    
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores your most important files in one secure location. Access them wherever your need, shere and collaborate with friends, family, and co-workers.</p>
      <form>
        <input type="text" name="email" id="email" placeholder="Enter your email..." />
        <button>Get Started</button>
      </form>
    </Section>

    <Curve />
    <Container color="--Light-Grayish-Blue">
      <Section imgUrl="illustration-1.svg" imgTextAlt="Illustration 1" >
        <h2>Stay productive, wherever your are</h2>
        <p class='text-aling-start'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p class='text-aling-start'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
        <div class="section-details-call-to-action">
          <a href="/">See how Fylo works <img src='../assets/img/icon-arrow.svg' alt="Icon Arrow" /></a>
        </div>
        <Card 
          avatar='avatar-testimonial.jpg'
          userName='Kyle Burton'
          userDetails='Founder & CEO, Huddle'
          content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-olled collaboration machine.'
        />
      </Section>
    </Container>

    <Container>
      <Newsletter />
    </Container>

  </Main>
</template>

<script>
  import Main from '../Layout/Main.vue'
  import Section from '../components/Section.vue'
  import Curve from '../components/Curve.vue'
  import Container from '../components/Container.vue'
  import Card from '../components/Card.vue'
  import Newsletter from '../components/Newsletter.vue'

  export default {
    name: 'Home',
    components: {
      Main,
      Section,
      Curve,
      Container,
      Card,
      Newsletter,
    }
  }
</script>

<style scoped>
 h1 {
    margin-bottom: 25px;
    font-size: 1.7rem;
  }

  h2 {
    margin-bottom: 25px;
    font-size: 1.2rem;
    font-family: var(--font-family)
  }

  p {
    margin-bottom: 20px;
  }

  input {
    width: 90%;
    padding: 10px;
    font-family: var(--font-family);
    border-radius: 3px;
    border: 1px solid var(--Very-Dark-Blue);
    margin-bottom: 10px;
    font-size: 13.3333px;
  }

  button {
    width: 90%;
    background-color: var(--Bright-Blue);
    padding: 10px;
    color: var(--Light-Grayish-Blue);
    border: none;
    border-radius: 3px;
    box-shadow: 2px 2px 5px 0px var(--Light-Gray);
    font-family: var(--font-family);
    font-weight: bold;
  }

  .section-details-call-to-action {
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .section-details-call-to-action img{
    width: 25px;
    margin-left: 5px;
  }

  a {
    color: var(--Moderate-Cyan);
    text-decoration: none;
    border-bottom: 1.5px solid;
    padding: 5px;
    margin: 20px 0;
    display: inline-flex;
  }
  
  .text-aling-start {
    text-align: start;
  }

  @media (min-width: 768px){
    h1 {
      font-size: 2.5rem;
      font-family: var(--font-family);
    }

    h2 {
      font-size: 2rem;
    }

    p {
      padding: 0;
      max-width: 540px;
    }

    input {
      width: 55%;
      margin-right: 10px;
    }

    button {
      width: 30%;
    }
  }
</style>