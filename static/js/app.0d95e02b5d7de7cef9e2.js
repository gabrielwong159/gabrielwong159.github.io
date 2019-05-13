webpackJsonp([1],{"3KUl":function(t,e){},"4BU/":function(t,e){},AcGh:function(t,e){},DyoL:function(t,e){t.exports={name:"buttercms",version:"1.1.1",description:"ButterCMS API Client",keywords:["buttercms","butter","cms","api"],engines:{node:">=0.10.32"},scripts:{build:"webpack && uglifyjs ./dist/butter.js -c -m -o ./dist/butter.min.js"},homepage:"https://github.com/buttercms/buttercms-js",author:"ButterCMS <support@buttercms.com>",repository:{type:"git",url:"git://github.com/buttercms/buttercms-js.git"},main:"lib/butter.js",dependencies:{axios:"0.9.1"},license:"MIT",devDependencies:{"uglify-js":"^2.8.22",webpack:"^2.5.0"}}},G0XI:function(t,e){t.exports={languages:["Python","HTML","CSS","JavaScript","Java","C","R","MySQL"],libraries:["TensorFlow","Keras","OpenCV","Selenium","Firebase","React","Vue","Jekyll"],misc:["Arduino","Processing","ROS","SolidWorks"]}},MESP:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("csSS");var a=i("7+uW"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{attrs:{id:"navbar"}},t._l(t.links,function(e){return i("router-link",{key:e.link,staticClass:"nav",attrs:{to:e.link}},[t._v("\n\t\t"+t._s(e.title)+"\n\t")])}))},staticRenderFns:[]};var n={name:"App",components:{NavBar:i("VU/8")({name:"NavBar",data:function(){return{links:[{title:"Home",link:"/"},{title:"About",link:"/about"},{title:"Projects",link:"/projects"},{title:"Blog",link:"/blog"}]}}},s,!1,function(t){i("4BU/")},null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(n,r,!1,function(t){i("TWun")},null,null).exports,c=i("/ocq");a.a.component("info-icon",{props:["icon","link"],template:'\n\t\t<a class="icon" :href="link" target="_blank">\n\t\t\t<i class="mdi" :class="icon" />\n\t\t</a>\n\t'});var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"home"}},[a("img",{attrs:{src:i("RDLH"),id:"face"}}),t._v(" "),a("h1",{attrs:{id:"title"}},[t._v("Hi! I'm Gabriel.")]),t._v(" "),t._m(0),t._v(" "),a("div",{attrs:{id:"icon-bar"}},t._l(t.info,function(t,e){return a("info-icon",{key:e,attrs:{icon:t.icon,link:t.link}})})),t._v(" "),a("p",[t._v("\n\t\tIn my spare time, I enjoy exploring various applications of computer vision, or building things with Arduinos and Raspberry Pis.\n\t")]),t._v(" "),a("router-link",{staticClass:"btn waves-effect waves-dark btn-flat",attrs:{id:"viewProjects",to:"/projects"}},[t._v("\n\t\tView selected projects\n\t")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{attrs:{id:"description"}},[this._v("\n\t\tI study AI and business analytics at the"),e("br"),this._v("Singapore University of Technology and Design.\n\t")])}]};var d=i("VU/8")({name:"Home",data:function(){return{info:[{icon:"mdi-github-circle",link:"https://github.com/gabrielwong159"},{icon:"mdi-linkedin-box",link:"https://linkedin.com/in/gabrielwong159"},{icon:"mdi-email",link:"mailto:gabrielwong159@gmail.com"},{icon:"mdi-file-document",link:"/static/resume.pdf"}]}}},l,!1,function(t){i("hmuQ")},"data-v-1fb02ce4",null).exports,p={name:"AwardIcon",props:["type","title","pos","year","date","link"],methods:{mouseOver:function(t,e,i){$("#award-title").html(t),$("#award-pos").html(e),$("#award-date").html(i),$("#award-banner").stop().fadeIn(400,"linear")},mouseLeave:function(){$("#award-banner").stop().fadeOut(400,"linear")}},mounted:function(){this.$parent.active===this.$vnode.key&&this.mouseOver(this.title,this.pos,this.date)}},u={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{staticClass:"mdi icon",class:[void 0!==t.type?"mdi-trophy":"mdi-medal",{"z-depth-1":t.$parent.active===t.$vnode.key},t.type],on:{mouseover:function(e){t.mouseOver(t.title,t.pos,t.date),t.$parent.active=t.$vnode.key},mouseleave:function(e){t.mouseLeave(),t.$parent.active=null}}})},staticRenderFns:[]};var m=i("VU/8")(p,u,!1,function(t){i("MESP")},"data-v-736e0cf0",null).exports,v={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"icon tooltipped",class:{"z-depth-1":t.compare(t.$vnode.key,t.$parent.active)},attrs:{"data-position":"bottom","data-tooltip":t.name,src:"/static/icons/"+t.name.toLowerCase()+".svg"},on:{mouseover:function(e){t.$parent.active=t.$vnode.key},mouseleave:function(e){t.$parent.active=null}}})},staticRenderFns:[]};var h=i("VU/8")({name:"SkillIcon",props:["name"],methods:{compare:function(t,e){if(t===e)return!0;var i={python:["tensorflow","keras","opencv","selenium","firebase","ros"],html:["react","vue","jekyll"],css:["react","vue","jekyll"],javascript:["firebase","react","vue","jekyll"],java:["processing"],c:["arduino"]};return!(!i.hasOwnProperty(e)||!i[e].includes(t))}}},v,!1,function(t){i("3KUl")},"data-v-6a4f900c",null).exports,g=i("nlNN"),f=i.n(g),b=i("G0XI"),y=i.n(b),_={name:"About",components:{AwardIcon:m,SkillIcon:h},data:function(){return{skills:y.a,awards:f.a,active:"swsg2018"}},mounted:function(){$(".tabs").tabs(),$(".tooltipped").tooltip()}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container row",attrs:{id:"about"}},[t._m(0),t._v(" "),i("div",{staticClass:"col s12",attrs:{id:"awards"}},[t._l(t.awards,function(e,a){return i("div",{staticClass:"icon-container"},[i("h2",[t._v(t._s(a))]),t._v(" "),t._l(e.slice().reverse(),function(t){return i("AwardIcon",{key:t.id,attrs:{type:t.type,title:t.title,pos:t.position,year:t.year,date:t.date}})})],2)}),t._v(" "),t._m(1)],2),t._v(" "),i("div",{staticClass:"col s12",attrs:{id:"skills"}},[i("div",{staticClass:"icon-container"},[i("h2",[t._v("Languages")]),t._v(" "),t._l(t.skills.languages,function(t){return i("SkillIcon",{key:t.toLowerCase(),attrs:{name:t}})})],2),t._v(" "),i("div",{staticClass:"icon-container"},[i("h2",[t._v("Libraries & Frameworks")]),t._v(" "),t._l(t.skills.libraries,function(t){return i("SkillIcon",{key:t.toLowerCase(),attrs:{name:t}})})],2),t._v(" "),i("div",{staticClass:"icon-container"},[i("h2",[t._v("Miscellaneous")]),t._v(" "),t._l(t.skills.misc,function(t){return i("SkillIcon",{key:t.toLowerCase(),attrs:{name:t}})})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col s12"},[e("ul",{staticClass:"tabs"},[e("li",{staticClass:"tab col s6"},[e("a",{staticClass:"active",attrs:{href:"#awards"}},[this._v("Awards")])]),this._v(" "),e("li",{staticClass:"tab col s6"},[e("a",{attrs:{href:"#skills"}},[this._v("Skills")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"z-depth-1",attrs:{id:"award-banner"}},[e("h4",{attrs:{id:"award-title"}}),this._v(" "),e("h5",{attrs:{id:"award-pos"}}),this._v(" "),e("h6",{attrs:{id:"award-date"}})])}]};var k=i("VU/8")(_,C,!1,function(t){i("wfC1")},"data-v-37862bb9",null).exports,w=i("a19Z"),S=i.n(w)()("f1bf34c7180ac07e1b3270f6ae877be3e5a663ee"),j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preloader-wrapper big active"},[e("div",{staticClass:"spinner-layer spinner-blue"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])]),this._v(" "),e("div",{staticClass:"spinner-layer spinner-red"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])]),this._v(" "),e("div",{staticClass:"spinner-layer spinner-yellow"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])]),this._v(" "),e("div",{staticClass:"spinner-layer spinner-green"},[e("div",{staticClass:"circle-clipper left"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"gap-patch"},[e("div",{staticClass:"circle"})]),e("div",{staticClass:"circle-clipper right"},[e("div",{staticClass:"circle"})])])])}]};var P=i("VU/8")({name:"Preloader"},j,!1,function(t){i("eOQF")},"data-v-6341802e",null).exports;a.a.component("blog-post",{props:["post"],template:'\n    <router-link class="blog-link card" :to="\'/blog/\' + post.slug">\n      <div class="card-image">\n        <img v-if="post.featured_image" :src="post.featured_image">\n      </div>\n      <div class="card-content">\n        <span class="card-title">{{ post.title }}</span>\n        <p>{{ post.summary }}</p>\n      </div>\n    </router-link>\n  '});var A={name:"Blog",components:{Preloader:P},data:function(){return{posts:[]}},methods:{fetchPosts:function(){var t=this;S.post.list({page:1,page_size:10}).then(function(e){t.posts=e.data.data,$("#blog-preloader").css("display","none")})}},created:function(){this.fetchPosts()}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section container",attrs:{id:"blog-home"}},[e("Preloader",{attrs:{id:"blog-preloader"}}),this._v(" "),e("div",{staticClass:"row"},this._l(this.posts,function(t,i){return e("div",{key:t.slug+"_"+i,staticClass:"blog-item-container col m4"},[e("blog-post",{attrs:{post:t}})],1)})),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("a",{attrs:{href:"https://buttercms.com/",target:"_blank"}},[e("img",{attrs:{id:"buttercms",src:"https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"}})])])}]};var E=i("VU/8")(A,x,!1,function(t){i("bfOz")},null,null).exports,D={name:"BlogPost",data:function(){return{post:{}}},methods:{getPost:function(){var t=this;S.post.retrieve(this.$route.params.slug).then(function(e){t.post=e.data}).catch(function(t){console.log(t)})}},watch:{$route:function(t,e){this.getPost()}},created:function(){this.getPost()}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section",attrs:{id:"blog-post"}},[i("div",{staticClass:"container"},[i("h1",[t._v(t._s(t.post.data.title))]),t._v(" "),i("div",{staticClass:"blog-post blog-content",domProps:{innerHTML:t._s(t.post.data.body)}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("a",{attrs:{href:"https://buttercms.com/",target:"_blank"}},[e("img",{attrs:{id:"buttercms",src:"https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"}})])])}]};var T=i("VU/8")(D,I,!1,function(t){i("lHIy")},null,null).exports,U=i("dHVI"),F=i.n(U);a.a.component("card",{props:["proj"],template:'\n\t\t<div class="card">\n\t\t\t\x3c!-- image --\x3e\n\t\t\t<div class="card-image waves-effect waves-block waves-light">\n\t\t\t\t<img class="activator" :src="proj.image">\n\t\t\t</div>\n\n\t\t\t\x3c!-- center content --\x3e\n\t\t\t<div class="card-content">\n\t\t\t\t<span class="card-title">\n\t\t\t\t\t{{ proj.title }}\n\t\t\t\t\t<i class="material-icons right activator">more_vert</i>\n\t\t\t\t</span>\n\t\t\t\t<div class="card-content" style="padding-left: 0px; padding-top: 0px;">\n\t\t\t\t\t{{ proj.short_description }}\n\t\t\t\t</div>\n\t\t\t\t<div class="card-icons">\n\t\t\t\t\t<img v-for="icon in proj.skills"\n\t\t\t\t\t\tclass="icon right tooltipped"\n\t\t\t\t\t\tdata-position="left"\n\t\t\t\t\t\tenterDelay="0"\n\t\t\t\t\t\toutDuration="1"\n\t\t\t\t\t\t:data-tooltip="icon"\n\t\t\t\t\t\t:src="\'/static/icons/\' + icon.toLowerCase() + \'.svg\'" />\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\x3c!-- bottom link --\x3e\n\t\t\t<div class="card-action">\n\t\t\t\t<a :href="proj.link.url" target="_blank">{{ proj.link.title }}</a>\n\t\t\t</div>\n\n\t\t\t\x3c!-- popup --\x3e\n\t\t\t<div class="card-reveal">\n\t\t\t\t<span class="card-title">\n\t\t\t\t\t{{ proj.title }}\n\t\t\t\t\t<i class="material-icons right">close</i>\n\t\t\t\t</span>\n\t\t\t\t<p v-html="proj.long_description"></p>\n\t\t\t</div>\n\t\t</div>\n\t'});var R={name:"Projects",data:function(){return{projects:F.a}},mounted:function(){$(".tooltipped").tooltip()}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container row",attrs:{id:"projects"}},this._l(this.projects,function(t,i){return e("div",{staticClass:"col m4"},[e("card",{key:i,attrs:{proj:t}})],1)}))},staticRenderFns:[]};var B=i("VU/8")(R,H,!1,function(t){i("AcGh")},null,null).exports;a.a.use(c.a);var L=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/about",name:"About",component:k},{path:"/projects",name:"Projects",component:B},{path:"/blog",name:"BlogHome",component:E},{path:"/blog/:slug",name:"BlogPost",component:T}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:L,components:{App:o},template:"<App/>"}),ga("set","page",L.currentRoute.path),ga("send","pageview"),L.afterEach(function(t,e){ga("set","page",t.path),ga("send","pageview")})},RDLH:function(t,e,i){t.exports=i.p+"static/img/face.8883cff.jpg"},TWun:function(t,e){},bfOz:function(t,e){},csSS:function(t,e){},dHVI:function(t,e){t.exports=[{title:"Automated Coffee Barista",image:"/static/projects/jessica.jpg",short_description:"Preparing and serving coffee automatically with a robot arm",skills:["Arduino","Python","ROS"],link:{title:"YouTube",url:"https://www.facebook.com/niryorobotics/videos/621264878315431"},long_description:"The project was completed as the main showcase for the EPD faculty in SUTD during Open House 2019.<br><br>Made modifications to open-source ROS library for robot simulation and control in Gazebo.<br><br>Programmed Raspberry Pi for sensor input and control of cup dispenser and Nespresso coffee machine.<br><br>Built Flask server for remote control and monitoring.",role:"Programming and Electronics",year:2018},{title:"Binary Sudoku",image:"/static/projects/binary_sudoku.jpg",short_description:"Building binary Sudoku with state machines on Mojo FPGA",skills:[],link:{title:"GitHub",url:"https://github.com/gabrielwong159/fpga"},long_description:"Built and programmed a binary Sudoku game, with a Mojo FPGA on Lucid, with a data-flow programming paradigm.<br><br>The game was created for a school project. I went on to create several light displays and two other mini-games after project completion.",role:"Programming and Electronics",year:2017},{title:"CNY Street Light-Up",image:"/static/projects/cny.jpg",short_description:"Web development for Chinese New Year festival decorations",skills:["JavaScript","CSS","HTML"],link:{title:"GitHub",url:"https://github.com/stanleynguyen/cny-interactive"},long_description:"The Street Light-Up in Chinatown is an annual event commemorating the Chinese New Year. As part of the festive decorations, an interactive display was set up along Eu Tong Sen Street.<br><br>Passers-by can send festive greetings through a public site, and their well wishes will be shown on the display.<br><br>Created the front-end web interface for members of the public, based on designs and feedback provided by Kreta Ayer-Kim Seng CCC.",role:"Front-end Development",year:2017},{title:"Interactive Wall",image:"/static/projects/wall.jpg",short_description:"Programming a large-scale interactive light structure with Arduino and addressable LEDs",skills:["C","Arduino"],link:{title:"YouTube",url:"https://youtu.be/JNHftu8IFnc"},long_description:"Built as a collaboration between two SUTD student clubs: SUTDio and Makerspace. The wall, spanning 3 meters, is lit up by 808 LEDs, across 14 separate LED strips.<br><br>Joined the project after construction with two others to work on Arduino programming. Added FFT to allow the wall to function as a music equalizer.<br><br>The Wall was showcased at Maker Faire Singapore 2016, SUTD Learning Celebration Carnival 2016, and WEEK7, SUTD's inaugural public music festival at Millian Singapore.",role:"Arduino Programming",year:2016},{title:"DIY Music Box",image:"/static/projects/box.jpg",short_description:"Designing, prototyping and building a laser-cut music box with SolidWorks",skills:["SolidWorks"],link:{title:"3D Assembly",url:"/static/projects/motion_study.gif"},long_description:"Designed and created a 3D model for a DIY music box. Used SolidWorks to produce the CAD for a finger joint box.<br><br>Created an assembly to visualize and verify design, and make adjustments to placement of components.<br><br>Exported files to Adobe Illustrator for laser cutting and physical assembly.",role:"Design and Assembly"}]},eOQF:function(t,e){},hmuQ:function(t,e){},lHIy:function(t,e){},nlNN:function(t,e){t.exports={"Recent Competitions and Hackathons":[{id:"swsg2018",title:"Startup Weekend Singapore Mega",position:"Most Impactful Idea",year:2018,date:"Sep 2018"},{id:"cddc2018",type:"gold",title:"DSTA Cyber Defenders Discovery Camp",position:"First Place",year:2018,date:"Jun 2018"},{id:"wth2017",title:"What The Hack @ SUTD",position:"Best Environment Idea, Best Hardware Hack",year:2017,date:"Sep 2017"},{id:"tfc2017",title:"Tech-Factor Challenge",position:"Grand Prize Winner",year:2017,date:"Nov 2016 - Sep 2017"},{id:"cddc2016",type:"gold",title:"DSTA Cyber Defenders Discovery Camp",position:"First Place",year:2016,date:"Jun 2016"}],"Past Achievements":[{id:"ssc2013",type:"silver",title:"Singapore Space Challenge",position:"First Runner Up",year:2013,date:"Aug 2013"},{id:"vex2013third",type:"bronze",title:"Singapore VEX Robotics Championship",position:"Third Place",year:2013,date:"Jun 2013"},{id:"vex2013build",title:"Singapore VEX Robotics Championship",position:"Judge Build Award",year:2013,date:"Jun 2013"},{id:"njrc2012",type:"gold",title:"National Junior Robotics Competition",position:"Best Programming Award (First Place)",year:2012,date:"Sep 2012"},{id:"cheme2012",type:"gold",title:"NUS Chemical Engineering Challenge",position:"Champion",year:2012,date:"Jul 2012"},{id:"cddc2012",type:"bronze",title:"Cyber Defenders Discovery Camp",position:"Third Place",year:2012,date:"Jun 2012"},{id:"ieee2012",type:"silver",title:"NUS IEEE Robotics Challenge",position:"Second Place",year:2012,date:"Mar 2012"},{id:"vex2011",type:"silver",title:"Singapore VEX Robotics Championship",position:"Second Place",year:2011,date:"Jun 2011"}]}},wfC1:function(t,e){}},["NHnr"]);