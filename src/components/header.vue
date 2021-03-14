<template>
  <div>
      <header>
        <nav class="navigation-bar">
            <ul class="navbar-custom">
                <div class="logo-name">
                  <a href="#"  class="bg-white p-3">Aniq's <span class="text-primary">Portfolio.</span></a>
                </div>
                <div class="d-flex ml-auto">
                  <li v-for="(page,index) in pageName" :key="index"><a :href=" '#' + page.name" :ref="page.ref">{{page.name}}<div class="underlined" ></div></a></li>
                  <li><div class="button-wrapper">
                          <a href="#Contact"><button type="button" class="btn button-primary">Contact Me </button></a>
                          <div class="button-blur-bg"></div>
                      </div>
                  </li>
                </div>
                <!-- <li><a href="" ref="aboutme">About me<div class="underlined"></div></a></li> -->
                <!-- <li><a href="" ref="projects">Projects<div class="underlined"></div></a></li> -->
                <!-- <li><a href="" ref="skills">Skills and Experiences<div class="underlined"></div></a> </li> -->
                <!-- <li><a href="" ref="contactme">Contact Me<div class="underlined"></div></a></li> -->
            </ul>
        </nav>

        <nav class="navigation-bar-mobile">
          <div class="p-3 w-100" style="margin-right:-3rem !important;">
            <b-row>
              <b-col cols="3">
                <!-- <div class="d-flex align-items-center"> -->
                  <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
                <!-- </div> -->
              </b-col>
              <b-col cols="9">
                 <div class="logo-name">
                  <a href="#"  class="bg-white p-3">Aniq's <span class="text-primary">Portfolio.</span></a>
                </div>
              </b-col>
            </b-row>
          </div>
        </nav>
      </header>
  </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)

export default {
  name: 'Header',
  components:{
    FontAwesomeIcon
  },
  data() {
    return{
      pageName:[
        {
          name: 'Home',
        },
        //  {
        //   name: 'About Me',
        // },
         {
          name: 'Projects',
        },
         {
          name: 'Skills',
        },
        //  {
        //   name: 'Contact Me',
        // },
      ],  
    }
  },
  methods:{
  },
  mounted(){
    // console.log(this.$refs.aboutme.clientWidth)
    // this.pageName[0].width = 20
      // this.$set(this.pageName.width, 'this.pageName.name', 1)
      // this.$set(this.pageName.width, 1, this.$refs.aboutme.clientWidth)
      // this.$set(this.pageName.width, 2, this.$refs.projects.clientWidth)
      // this.$set(this.pageName.width, 3, this.$refs.skills.clientWidth)
      // this.$set(this.pageName.width, 4, this.$refs.contactme.clientWidth)
  }
}
</script>
