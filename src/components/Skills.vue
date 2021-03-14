<template>
  <div>
      <section id="Skills" class="skills-section">
         <div class="container">
        <div class="row mb-3">
            <div class="col-12 col-md-6">
              <div class="content-wrapper">
                  <div class="content-header">
                        <div class="row">
                            <!-- <i class='title-icon fas fa-graduation-cap'></i> -->
                            <font-awesome-icon icon="graduation-cap" class="header-icon"/>
                            <h2>Education Background</h2>
                        </div>
                  </div>
                  <hr class="w-60 ml-0 bg-white">
                  <div class="content-body">
                      <div class="education">
                        <div v-for="(education,index) in educations" :key="'index'+index">
                          <div class="education-inner" >
                            <div class="col-12 col-md-9">
                              <div class="period">
                                <font-awesome-icon icon="clock" class="work-icon"/>
                                  {{education.startDate + ' - ' + education.endDate}}
                                </div>
                              <div class="institute-name">
                                <font-awesome-icon icon="university" class="work-icon"/>
                                  {{education.name}}
                            </div>
                              <ul>
                                  <li v-for="(desc,index) in education.description" :key="index">{{desc}}</li>
                              </ul>
                            </div>
                            <div class="col-12 col-md-3">
                              <img class="organization-logo" :src="education.logo" alt="">
                            </div>
                          </div>
                          <hr v-if="(index+1) != educations.length" class="bg-black" style="border-top:2px solid rgba(0, 0, 0, 0.1);">
                           
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="content-wrapper">
                  <div class="content-header">
                        <div class="row">
                            <font-awesome-icon icon="briefcase"  class="header-icon"/>
                            <h2>Work Experience</h2>
                        </div>
                  </div>
                  <hr class="w-60 ml-0 bg-white">
                  <div class="content-body">
                      <div class="education">
                        <div v-for="(work,index) in works" :key="'index'+index">
                          <div class="education-inner" >
                            <div class="col-12 col-md-9">
                              <div class="period">
                                <font-awesome-icon icon="clock" class="work-icon"/>
                                {{work.startDate + ' - ' + work.endDate}}
                                </div>
                              <div class="institute-name">
                                <font-awesome-icon icon="store" class="work-icon"/>
                                {{work.name}}
                            </div>
                              <ul>
                                <li v-for="(desc,index) in work.description" :key="index">{{desc}}</li>
                              </ul>
                            </div>
                            <div class="col-12 col-md-3 m-auto">
                              <img class="organization-logo" :src="work.logo" alt="">
                            </div>
                          
                          </div>
                          <hr v-if="(index+1) != works.length"  class="bg-black"  style="border-top:2px solid rgba(0, 0, 0, 0.1);">
                         
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-md-6">
            <div class="content-wrapper">
                <div class="content-header">
                      <div class="row">
                          <font-awesome-icon icon="laptop" class="header-icon"/>
                          <h2>Software Skills</h2>
                      </div>
                </div>
                <hr class="w-60 ml-0 bg-white">
                <div class="content-body">
                    <div class="education">
                      <div class="">
                        <ul>
                            <li v-for="(software,index) in softwareSkills" :key="index">
                                <div class="skill-name">
                                  <img class="skill-icon" :src="software.icon" :alt="software.name"><span>{{software.name}}</span><span class="float-right"><strong>{{software.level}}</strong><span :style="{ color : software.color}">%</span></span>
                                </div>
                                <div class="skill-level">
                                    <div class="skill-level-bar"  :style="{ width : software.level+'%' , background : software.color }"></div>    
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="content-wrapper">
                <div class="content-header">
                      <div class="row">
                          <font-awesome-icon icon="code" class="header-icon"/>
                          <h2>Programming Skills</h2>
                      </div>
                </div>
                <hr class="w-60 ml-0 bg-white">
                <div class="content-body">
                  <div class="education">
                    <div class="">
                      <ul>
                          <li v-for="(programming,index) in programmingSkills" :key="index">
                              <div class="skill-name">
                                <img class="skill-icon" :src="programming.icon" :alt="programming.name"><span>{{programming.name}}</span><span class="float-right"><strong>{{programming.level}}</strong><span :style="{ color : programming.color}">%</span></span>
                              </div>
                              <div class="skill-level">
                                  <div class="skill-level-bar"  :style="{ width : programming.level+'%' , background : programming.color }"></div>    
                              </div>
                          </li>
                        </ul>
                  </div>
                  </div>
                
                </div>
            </div>
          </div>
      </div>
      <div class="row mb-3">
        <div class="col-12">
          <div class="content-wrapper">
              <div class="content-header">
                    <div class="row">
                        <i class='title-icon fas fa-futbol'></i>
                        <h2>Hobbies and Interests</h2>
                    </div>
              </div>
              <hr class="w-60 ml-0 bg-white">
              <div class="content-body">
                  <div class="education">
                    <div class="row justify-content-center">
                      <div class="col-6 col-md-3 text-center" v-for="(hobby,index) in hobbies" :key="'hobby'+index">
                        <div class="hobby-wrapper">
                          <img class="hobby-icon" :src="hobby.icon" :alt="hobby.name">
                        </div>
                        <h4>{{hobby.name}}</h4>
                      </div>
                      <!-- <div class="col-12 col-md-3 text-center">
                        <div class="hobby-wrapper">
                          <img class="hobby-icon" src="https://cdn.iconscout.com/icon/free/png-512/football-playing-sports-man-soccer-game-play-46412.png" alt="">
                        </div>
                        <h4>Music</h4>
                      </div>
                      <div class="col-12 col-md-3 text-center">
                        <div class="hobby-wrapper">
                          <img class="hobby-icon" src="https://cdn.iconscout.com/icon/free/png-512/football-playing-sports-man-soccer-game-play-46412.png" alt="">
                        </div>
                        <h4>Football</h4>
                      </div>
                      <div class="col-12 col-md-3 text-center">
                        <div class="hobby-wrapper">
                          <img class="hobby-icon" src="https://cdn.iconscout.com/icon/free/png-512/football-playing-sports-man-soccer-game-play-46412.png" alt="">
                        </div>
                        <h4>Game</h4>
                      </div> -->
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    </div>
      </section>
  </div>
</template>

<script>

// import linear_icon from 'linear-icon';
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUserSecret,
  faGraduationCap,
  faBriefcase,
  faStore,
  faClock,
  faUniversity,
  faLaptop,
  faCode,
  } 
  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUserSecret,
  faGraduationCap,
  faBriefcase,
  faStore,
  faClock,
  faUniversity,
  faLaptop,
  faCode,
  )


export default {
  name: 'Skills',
  components:{
    FontAwesomeIcon,
  },
  data() {
    return{
      name :'',
      educations : [
        {
          startDate : 2018,
          endDate : 2020,
          name : "UTHM",
          description:[
            "description 1",
            "description 2",
            "description 3",
            "description 4",
            "description 5",
            "description 6",
          ],
          logo : "https://4.bp.blogspot.com/-8TuQM1sBiuk/T110f45OR4I/AAAAAAAAAuY/y_6bCOHCYOw/s1600/Universiti+tun+hussein+onn+malaysia.gif",
        },
        {
          startDate : 2013,
          endDate : 2017,
          name : "SMK Sungai Pusu",
          description:[
            "description 1",
            "description 2",
            "description 3",
          ],
          logo : "https://vectorise.net/logo/wp-content/uploads/2013/04/SMK-Sg-Pusu.png",
        },
      ],
       works : [
        {
          startDate : 2020,
          endDate : "Present",
          name : "Bluevy PLT",
          description:[
            "description 1",
          ],
          logo : "https://media-exp1.licdn.com/dms/image/C4D0BAQGS8I9Aog7P0Q/company-logo_200_200/0/1519887384300?e=2159024400&v=beta&t=heNiVdXzXJ6yUaVDPh4c_S-YJY_gFLNUiKQbxtPC7Uc",
        },
      ],
      softwareSkills: [
        {
          icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
          name: "Adobe Illustrator",
          level: "60" ,
          color:"orange"
        },
        {
          icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/788px-Adobe_Photoshop_CC_icon.svg.png",
          name: "Photoshop",
          level: "40" ,
          color: "#3787ff"
        },
      ],
      programmingSkills: [
        {
          icon : "https://img.pngio.com/other-html-5-icon-plex-iconset-cornmanthe3rd-html-png-256_256.png",
          name: "HTML",
          level: "80" ,
          color:"#ed7034"
        },
        {
          icon : "https://mpng.subpng.com/20180420/xwe/kisspng-web-development-cascading-style-sheets-css3-comput-css-5ada20be146fc2.8807141415242446700837.jpg",
          name: "CSS",
          level: "80" ,
          color:"skyblue"
        },
         {
          icon : "https://quiksite.com/wp-content/uploads/2016/09/Javascript.png",
          name: "Javascript",
          level: "60" ,
          color:"#ede60d"
        },
         {
          icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
          name: "VueJS",
          level: "50" ,
          color:"#36c436"
        },
      ],
      hobbies :[
        {
          name : "Football",
          icon : "/images/hobby/football.jpg",
        },
         {
          name : "Music",
          icon : "/images/hobby/music.jpg",
        },
         {
          name : "Movie",
          icon : "/images/hobby/movie.jpg",
        },
         {
          name : "Game",
          icon : "/images/hobby/game.jpg",
        },
      ]
    }
  }
}
</script>

// <style lang="scss">

// $primary : blue;

// p{color:$primary;}
// </style>

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
