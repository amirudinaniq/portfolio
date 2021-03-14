<template>
  <div>
    <main>
        <section class="glass">
          <Header></Header>
          <Home></Home>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>

        
        </section>
    </main>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
  </div>
</template>

<script>

import Header from "./header.vue"
import Home from "./home.vue"
import Projects from "./projects.vue"
import Skills from './Skills.vue'
import Contact from './contact.vue'





export default {
  name: 'MainPage',
  components:{
    Header,
    Home,
    Projects,
    Skills,
    Contact
  },
  data() {
    return{
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.try{
  font-size: 110px;
  color: blue;
}
</style>


  <!-- <div class="dashboard">
            <img src="../../public/images/avatar.png" alt="avatar">
            <h3>Amir Aniq</h3>
            <p>Pro Member</p>
          </div>
          <div class="links">
             <div class="link">
              <img src="../../public/images/twitch.png" alt="icon">
              <h2>Streams</h2>
            </div>
             <div class="link">
              <img src="../../public/images/steam.png" alt="icon">
              <h2>Games</h2>
            </div>
             <div class="link">
              <img src="../../public/images/upcoming.png" alt="icon">
              <h2>News</h2>
            </div>
             <div class="link">
              <img src="../../public/images/library.png" alt="icon">
              <h2>Library</h2>
            </div>
          </div>
          <div class="pro">
            <h2>Join pro for free games.</h2>
            <img src="../../public/images/controller.png" alt="">
          </div> -->