<template>
        <div class="menu-sidebar" :style="{width : updateSidebar() }">
            <div class="sidebar-inner">
                <div class="sidebar-item" v-for="(page,index) in pageName" :key="index" @click="updateCurrentPage(page.name)" :class="{ 'bg-primary text-white' : currentPage == page.name }">
                    <b-row>
                        <b-col cols="3" class="text-right pr-1">
                            <font-awesome-icon :icon="page.icon"/>
                        </b-col>
                        <b-col cols="9">
                            <label>
                                <a :href=" '#' + page.name" :ref="page.ref">{{page.name}}</a>
                            </label>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
</template>


<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faHeadSideVirus,
  faHome, faTasks
  } 
  from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faTasks,
  faHeadSideVirus
  )


export default {
  name: 'sidebar',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return{
        pageName:[
        {
          name: 'Home',
          icon:'home'
        },
        //  {
        //   name: 'About Me',
        // },
         {
          name: 'Projects',
          icon:'tasks'
        },
         {
          name: 'Skills',
          icon:'head-side-virus'
        },
        //  {
        //   name: 'Contact Me',
        // },
      ], 
      currentPage : 'Home',
    }
  },
  props: ['isActive'],
  methods:{
      updateSidebar(){
          return this.isActive ? '80%' : '0%' ;
      },
      updateCurrentPage(val){
          this.currentPage = val
      }
  },
}
</script>
