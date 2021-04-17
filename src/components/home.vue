<template>
    <div>
        <section class="home-section" id="Home">
            <div class="home-outter">
                <b-row>
                    <b-col cols="12">
                        <div class="home-container">
                            <div class="glass-body">
                                <b-row class="home-mobile">
                                    <b-col cols="12" class="intro" md="6">
                                        <div class="d-flex justify-center-content align-items-center h-100">
                                            <div class="introduction">
                                                <h1 class="hello-aniq">Hy! I Am <br> <span class="text-primary">Amirudin Aniq</span> </h1>
                                                <span class="developer">Your <span class="text-primary">Front End Developer </span></span>
                                                <p class="mt-3 description">I love to create beautiful websites because it definitely makes me happy when they enjoy it. <br> <br>My other passions include: Gaming 🎮, Football ⚽, Movie 🍿 and Music 🎧. </p>
                                                <div class="button-wrapper">
                                                    <button type="button" class="btn button-primary" @click="hireMe">Get in Touch</button>
                                                    <div class="button-blur-bg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        
                                    </b-col>
                                    <b-col cols="12" class="aniq-image" md="6">
                                        <div class="my-img">
                                            <img src="../../public/images/programmer2.png" alt="aniq's image" class="img-fluid">
                                        </div>
                                    </b-col>
                                    <div class="circle1"></div>
                                    <div class="circle2"></div>
                                    <div class="circle3"></div>
                                    <div class="circle4"></div>

                                 </b-row>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
            

            <!-- <b-row class="home-mobile">
                <b-col cols="12" class="intro" md="6">
                    <div class="d-flex justify-center-content align-items-center h-100">
                         <div class="introduction">
                            <h1 class="hello-aniq">Hy! I Am <br> <span class="text-primary">Amirudin Aniq</span> </h1>
                            <span class="developer">Your <span class="text-primary">Front End Developer </span></span>
                            <p class="mt-3 description">who focuses on writing clean, elegant and efficient code.Feel free to hit me up if you are interested to drink coffee with me </p>
                            <div class="button-wrapper">
                                <button type="button" class="btn button-primary" @click="hireMe">Get in Touch</button>
                                <div class="button-blur-bg"></div>
                            </div>
                        </div>
                    </div>
                   
                    
                </b-col>
                <b-col cols="12" class="aniq-image" md="6">
                    <div class="my-img">
                        <img src="../../public/images/programmer2.png" alt="aniq's image" class="img-fluid">
                    </div>
                </b-col>
            </b-row> -->
        </section>
    </div>
</template>


<script>

export default {
  name: 'Home',
  data() {
    return{

    }
  },
  methods:{
      hireMe(){
          alert('hire me')
      }
  },
}
</script>
