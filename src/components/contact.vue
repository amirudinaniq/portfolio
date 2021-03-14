<template>
    <div>
        <section id="Contact" class="contact-section">
            <!-- <div class="container">
            <b-row>
                <b-col cols="12">
                    <div class="contact-container glass-body">
                        <b-row>
                            <b-col cols="6">
                                <div class="p-3">
                                    <div class="text-center">
                                        Follow and say hi
                                        <div class="socmed">
                                            logo here
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                             <b-col cols="6">
                                 <div class="p-3">
                                    <div class="text-center">
                                        <h3>Contact Me</h3>
                                        <b-form>
                                            <b-form-group>
                                                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                     </div>
                                 </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
            </div> -->
           

           <div class="container">
               <div class="contact-wrapper glass-body">
                    <div class="row">
                        <!-- contact details -->
                        <div class="col-12 col-md-6">
                            <div class="get-in-touch-wrapper">
                                <div class="get-in-touch">
                                    <h2 class="text-uppercase">Get In Touch</h2>
                                    <hr>
                                    <ul class="get-in-touch-items list-unstyled">
                                        <li><i class="fa fa-map-marker mr-3" aria-hidden="true" style="font-size: 23px"></i><span>Batu 7, Jalan Gombak <br> Selangor,Malaysia</span></li>
                                        <li><i class="fa fa-phone mr-3" aria-hidden="true" style="font-size: 23px"></i><span>+6011374456780</span></li>
                                        <li><i class="fa fa-envelope mr-3" aria-hidden="true" style="font-size: 23px"></i><span>amiraniq17@gmail.com</span></li>
                                    </ul>
                                    <br>
                                    <div class="row">
                                        <div class="col-4" v-for="(icon,index) in socmed" :key="'icon'+index">
                                           <a :href="icon.url" target="_blank"><img :src="icon.pathIcon" :alt="icon.name" class="socmed-icon" draggable="false"></a>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <!-- contact form -->
                        <div class="col-12 col-md-6">
                            <div class=" d-flex justify-content-start">
                            <form action="#">
                            <div class="row">
                                <div class="col-6 form-group pr-1">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" name="name">
                                    </div>
                                    <div class="col-6 form-group pl-1">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" name="email">
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" name="subject">
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                            </div>

                            <button type="submit" class="btn btn-Submit"><span class="submit-text">Submit</span></button>

                            </form>
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
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { 
  
//   } 
//   from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(
//   )

export default {
  name: 'example',
  components:{
    //  FontAwesomeIcon
  },
  data() {
    return{
        socmed : [
            {
                name:"facebook",
                pathIcon:"/images/facebook.png",
                url:"https://www.facebook.com/muhamadamirudin.aniq",
            },
            // {
            //     name:"twitter",
            //     pathIcon:"/images/twitter.png",
            //     url:"#",
            // },
            {
                name:"instagram",
                pathIcon:"/images/instagram.png",
                url:"https://www.instagram.com/amiraniqq/",
            },
            {
                name:"linkedlink",
                pathIcon:"/images/linkedlink.png",
                url:"https://www.linkedin.com/in/amirudin-aniq-414725147/",
            },
         
        ]
    }
  },
  methods:{

  },
}
</script>
