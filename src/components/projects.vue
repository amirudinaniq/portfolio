<template>
    <div>
        <section id="Projects" class="project">
            <div class="container">
                <div class="project-inner">
<h2 class="title" @click="test()">Recent Project</h2>
                <b-row>
                    <b-col cols="12" class="d-flex justify-content-center"> 
                        <ul id="project-filter">
                            <li @click="updateFilter(type)" v-for="(type,index) in projectType" :key="index" >
                                {{type}}
                            </li>
                            <div class="filter-underline" :style="{ left : setPosition()}"></div>
                        </ul>
                    </b-col>
                </b-row>
            

                <slide-up-down :active="isShow" :duration="500" >
                    <div  class="projects text-center">

               
                          
                      <!--   <b-col lg="4" class="project-item pb-3 pt-3"  :class="{ 'd-block' : currentFilter == 'all'}" v-show="currentFilter == project.type"  v-for="(project,index) in projects" :key="index"> :class="{ 'display-project' : currentFilter == project.type}-->
                           <!--    <b-col lg="4" class="project-item hide-project pb-3 pt-3" v-for="(project,index) in projects" :key="index" :style="{transform : checkFilter(project.type) , position: checkPosition(project.type)}">-->
                      <b-col lg="4" class="project-item all pb-3 pt-3" :class="project.type" v-for="(project,index) in projects" :key="index"  :ref="'project'+project.id">

                       <!--  <b-col lg="4" class="project-item pb-3 pt-3" v-for="(project,index) in projects" :key="index" :ref="'project'">>-->
                            <div class="p-3 project-inner">
                                <img class="project-img" :alt="project.title" :src="project.img">
                            </div>
                            <div class="project-info">
                                <h4 style="display:inline-block;font-weight:bold;">{{project.title}}</h4>
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
            </div>
        </section>
    </div>
</template>

 <style>
                 .display-project{
                     transform:scale(1) !important;
                     position:initial !important;
                 }

                 .hide-project{
                     transform:scale(0);position:absolute;
             }

                @keyframes scaleToBig {
                    0% {
                        position:absolute;
                        transform:scale(0);
                    }
                    50% {
                        position:initial;
                        transform:scale(0);
                    }
                    100%{
                         position:initial;
                        transform:scale(1);
                    }
                }

                @keyframes scaleToSmall {
                    0% {
                        position:initial;
                        transform:scale(1);
                    }
                    50% {
                        position:initial;
                        transform:scale(0)
                    }

                    100%{
                        position:absolute;
                        transform:scale(0)
                    }
                }

                
                 @keyframes smallAndBig {
                    0% {
                        position:initial;
                        transform:scale(1);
                    }
                    20% {
                        position:initial;
                        transform:scale(0)
                    }

                    40%{
                        position:absolute;
                        transform:scale(0)
                    }
                    60% {
                        position:absolute;
                        transform:scale(0);
                    }
                    80% {
                        position:initial;
                        transform:scale(0);
                    }
                    100%{
                         position:initial;
                        transform:scale(1);
                    }
                }

                </style>


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
                type : "poster",
                id:1,
            },
            {
                img: 'https://jeneration.info/wp-content/uploads/2020/04/web-design-seo-service-selangor.png',
                title: 'Project Mobile',
                shortdesc: 'short description ',
                desc : 'description hereeeeeee',
                height: "0",
                type : "mobile",
                id:2,

            },
            {
                img: 'https://structuretone.com/wp-content/uploads/2014/01/comcastITC-east-rendering_Foster-Partners-500x1000.jpg',
                title: 'Project Poster',
                shortdesc: 'short description ',
                desc : 'tur!asdadsasad',
                height: "0",
                type : "poster",
                id:3,
            },
            {
                img: 'https://structuretone.com/wp-content/uploads/2014/01/comcastITC-east-rendering_Foster-Partners-500x1000.jpg',
                title: 'Project Poster 2',
                shortdesc: 'short description ',
                desc : 'tur!asdadsasad',
                height: "0",
                type : "poster",
                id:4,
            },
             {
                img: 'https://structuretone.com/wp-content/uploads/2014/01/comcastITC-east-rendering_Foster-Partners-500x1000.jpg',
                title: 'Project Poster 2',
                shortdesc: 'short description ',
                desc : 'tur!asdadsasad',
                height: "0",
                type : "web",
                id:5,
            },
            {
                img: 'https://structuretone.com/wp-content/uploads/2014/01/comcastITC-east-rendering_Foster-Partners-500x1000.jpg',
                title: 'Mobile2',
                shortdesc: 'short description ',
                desc : 'tur!asdadsasad',
                height: "0",
                type : "mobile",
                id:5,
            },
        ],
        projectType:["all","web","mobile","poster"],
        isShow:true,
        showProjectDetail:false,
        newValue:false,
        maxHeight:"0",
        projectInnerHeight : [],
        currentFilter:'all',
        oldFilter:null,
        test1:true,
        test2:false,
        min:"270px",
        max:"270px",
        scale:'scale(0)',
        position:'absolute',
        webCategory: [],
        posterCategory:[],
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
          this.oldFilter = this.currentFilter
          this.currentFilter=type 
          this.max="0"
          this.min="0"
      },
    displayAll(val){
            let oldFilter = document.getElementsByClassName(this.oldFilter)
            let projectItem = document.getElementsByClassName(val)

            //hide all projects
            for(let i = 0; i < oldFilter.length; i++){
                oldFilter[i].style.transform = "scale(0)";
            }
            setTimeout(function(){
                for(let i = 0; i < oldFilter.length; i++){
                    oldFilter[i].style.position = "absolute";
                }
            }, 400);

            //display selected project
            setTimeout(function(){
                for(let i = 0; i < projectItem.length; i++){
                    projectItem[i].style.position = "initial";
                }
                //inner setimout
                setTimeout(function(){
                    for(let i = 0; i < projectItem.length; i++){
                        projectItem[i].style.transform = "scale(1)";
                    }
                }, 50);
            }, 400); 
    },
    setPosition(){
        if(this.currentFilter=='all'){
            return "14px"
        }else if(this.currentFilter=='web'){
            return "65px"
        }
        else if(this.currentFilter=='poster'){
            return "217px"
        }else{
            return "135px"
        }
    }
  },
  computed:{
  
  },
  watch:{
      showProjectDetail :function(){
          this.newValue = this.showProjectDetail
      },

      currentFilter :function(val){
        //   this.runAnimation(val)
        this.displayAll(val)
      }
  },
  mounted(){

      this.displayAll('all')
     

      for(let i = 0; i < this.projects.length; i++){
        if(this.projects[i].type=='poster'){
         this.posterCategory.push( 'project'+this.projects[i].id );
        }

        if(this.projects[i].type=='web'){
         this.webCategory.push( 'project'+this.projects[i].id );
        }
      }

      

    //   for(let i = 0; i < this.webCategory.length; i++){
    //   console.log('index '+ i +': '+this.webCategory[i])
    //   }

            
  }
}
</script>
