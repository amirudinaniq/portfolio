<template>
    <div>
        <section id="Projects" class="project">
            <div class="container">
                <h2 class="title">Recent Project</h2>
                <b-row>
                    <b-col cols="12" class="d-flex justify-content-center"> 
                        <ul id="project-filter">
                            <li @click="updateFilter(type)" v-for="(type,index) in projectType" :key="index" :class="{'text-white' : currentFilter == type }">
                                {{type}}
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            

                <slide-up-down :active="isShow" :duration="500" >
                    <div  class="projects text-center">
                         <!--  -->
                        <b-col lg="4" class="project-item pb-3 pt-3"  :class="{ 'd-block' : currentFilter == 'all'}" v-show="currentFilter == project.type"  v-for="(project,index) in projects" :key="index">
                            <img class="project-img" :alt="project.title" :src="project.img">
                            <div class="project-info">
                                <h4 style="display:inline-block">{{project.title}}</h4>
                                <button class="see-project" type="button" @click="show(index)" ><i class="fa fa-search fa-lg pull-right primary-color"></i></button>
                                <div class="desc-wrapper">
                                    <p>{{project.shortdesc}}</p>
                                </div>
                                <a href="" data-gall="projectGallery" class="venobox preview-link vbox-item" title="App 1"><i class="bx bx-plus"></i></a>
                                <a href="" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                            </div>
                        </b-col>
                    </div>
                </slide-up-down>


                <!-- project details -->
                        <div class="project-details" :style="{maxHeight: project.height }"  v-for="(project,index) in projects" :key="index">
                            <!-- <div :ref="'projectInner'+index"> -->
                            <div>
                                <div class="position-relative">
                                    <carousel :per-page="1" >
                                        <slide v-for="(img,index) in projects" :key="index">
                                            <img :src="img.img" :alt="img.title"  class="project-image">
                                        </slide>
                                    </carousel>
                                    <button @click="show(index)" type="button" class="btn-close">CLOSE</button>
                                </div>
                                <div class="project-body text-center w-50 m-auto">
                                    <h1 class="project-title">{{project.title}}</h1>
                                    <p class="mb-5">{{project.desc}}</p>
                                    <a href="#" class="button"> <span class="btn-project">Visit Website</span> </a>
                                </div>
                            </div>
                        </div>


                        <!-- <transition-group class="testing d-flex" name="testing" >
                            <div class="test1" v-if="test1" key="1"> 
                                test1
                            </div>
                            <div class="test1" v-if="test2" key="2">
                                test2
                            </div>
                        </transition-group> -->
            </div>
        </section>
    </div>
</template>


<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Carousel, Slide } from 'vue-carousel';
import SlideUpDown from 'vue-slide-up-down'

library.add(faBars)



export default {
  name: 'Projects',
   components:{
    // FontAwesomeIcon,
    Carousel,
    Slide,
    SlideUpDown
  },
  data() {
    return{
        projects : [
             {
                img: 'https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg',
                title: 'Project Web',
                shortdesc: 'short descriptiondescripta das d askjdhasjk dhasjk hdjkah djksa hjkadh ajkhdjksa hjkadh ajkh jkadh sajkh djkahd jkah djkha jkshd jkadjksa hjkadh ajkh jkadh sajkh djkahd jkah djkha jkshd jka jkadh sajkh djkahd jkah djkha jkshd jka ',
                desc : 'descripta das d askjdhasjk dhasjk hdjkah djksa hjkadh ajkhdjksa hjkadh ajkh jkadh sajkh djkahd jkah djkha jkshd jkadjksa hjkadh ajkh jkadh sajkh djkahd jkah djkha jkshd jka jkadh sajkh djkahd jkah djkha jkshd jka',
                height: "0",
                type : "web"
            },
            {
                img: 'https://jeneration.info/wp-content/uploads/2020/04/web-design-seo-service-selangor.png',
                title: 'Project Mobile',
                shortdesc: 'short description ',
                desc : 'description hereeeeeee',
                height: "0",
                type : "mobile"

            },
            {
                img: 'https://structuretone.com/wp-content/uploads/2014/01/comcastITC-east-rendering_Foster-Partners-500x1000.jpg',
                title: 'Project Poster',
                shortdesc: 'short description ',
                desc : 'tur!asdadsasad',
                height: "0",
                type : "poster"
            },
            {
                img: 'https://structuretone.com/wp-content/uploads/2014/01/comcastITC-east-rendering_Foster-Partners-500x1000.jpg',
                title: 'Project Poster 2',
                shortdesc: 'short description ',
                desc : 'tur!asdadsasad',
                height: "0",
                type : "poster"
            },
                                
            
        ],
        projectType:["all","web","mobile","poster"],
        isShow:true,
        showProjectDetail:false,
        newValue:false,
        maxHeight:"0",
        projectInnerHeight : [],
        currentFilter:'all',
        test1:true,
        test2:false,
        min:"270px",
        max:"270px",
        // test:null,
    }
  },
  methods:{
      show(index){
            console.log(index)
             this.showProjectDetail = !this.showProjectDetail
             this.isShow = !this.isShow

                //  console.log('card-0: ' + this.$refs['card-'+0].clientHeight)
                // this.test=this.$refs.aniq.clientHeight
                // console.log('result:' + this.test )  

           for(let i = 0; i < this.projects.length; i++){
               if( i == index){
                    if(this.projects[i].height == "0"){
                        this.projects[i].height = 2000  + "px"
                    }else{
                        this.projects[i].height = "0"
                    }
               }
            }
        //   this.$set(this.newValue, this.isShow, this.isShow)
        //   this.$set(this.newValue, this.showProjectDetail, this.showProjectDetail)
      },
      updateFilter(type){
          this.currentFilter=type
          this.max="0"
          this.min="0"

      }

  },
  computed:{
  
  },
  watch:{
      showProjectDetail :function(){
          this.newValue = this.showProjectDetail
      }
  },
  mounted(){
            
  }
}
</script>
