<template>
  <div class="home">
    <div class="homeOnePic">
      <img src="https://pic.liesio.com/2020/05/16/21c9a9b210efa.webp" />
    </div>
    <div class="introduction">
      <div class="indContent">
        <div class="title">一些介绍</div>&nbsp; &nbsp;网络工程专业学生，热爱互联网，关注互联网业内的众多产品，不断扩充对行业发展趋势的认识；
        <br />除了互联网，我还热爱电影、音乐、旅游；
        <br />其实，人的一生中都是在不断的学习，不管是技术还是做人，
        都应该以一颗“谦卑的心态来学习，秉持利他之心来帮助他人。”
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="wordLeft">
          <br />
          <br />
          <span class="title">关于JavaScript</span>
          <br />
          <br />
          <div class="content">
            JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。
            虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，
            JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
            JavaScript是一种属于网络的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。
          </div>
        </div>
        <div class="picRight">
          <img src="https://pic.liesio.com/2020/05/09/6dcb73f8cc176.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="picLeft">
          <img src="https://pic.liesio.com/2020/05/09/ae513b8763a99.jpg" />
        </div>

        <div class="wordRight">
          <br />
          <br />
          <span class="title">关于vue</span>
          <br />
          <br />
          <div class="content">
            Vue 是一套用于构建用户界面的渐进式JavaScript框架。
            与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，方便与第三方库或既有项目整合。
            Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件.
            Vue.js 自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。
            另一方面，在与相关工具和支持库一起使用时 ，Vue.js 也能完美地驱动复杂的单页应用。
          </div>
        </div>
      </div>
      <div class="row">
        <div class="wordLeft">
          <br />
          <br />
          <span class="title">关于node.js</span>
          <br />
          <br />
          <div class="content">
            Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。
            Node 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为与PHP、Python、Perl、Ruby 等服务端语言平起平坐的脚本语言。
            V8引擎执行Javascript的速度非常快，性能非常好。Node是一个基于Chrome JavaScript运行时建立的平台， 用于方便地搭建响应速度快、易于扩展的网络应用。
            Node 使用事件驱动， 非阻塞I/O 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用。
          </div>
        </div>
        <div class="picRight">
          <img src="https://pic.liesio.com/2020/05/09/ad4947b4696a3.jpg" />
        </div>
      </div>
    </div>
    <div id="dis">
      <!-- 图片分割 -->
      <div>
        <h2>攀登科学文化的同峰，就要冲破不利条件限制，利用生活所提供的有利条件，并去创造新的条件。</h2>
        <h2>
          To climb the same peak of science and culture, we must break through the restrictions of unfavorable conditions,
          make use of the favorable conditions provided by life, and create new conditions.
        </h2>
      </div>
    </div>
    <div id="newBlogs">
      <div class="title">
        ~最新博客
        <br />new blogs~
      </div>
      <div class="content">
        <blogs class="blogs" v-for="item in blogsList" :key="item.id" :blogsItem="item"></blogs>
      </div>
    </div>
  </div>
</template>

<script>
import blogs from "../components/blogs.vue";
export default {
  data() {
    return {
      blogsList: [], //最新博客
    };
  },
  components: {
    blogs
  },
  mounted(){
    this.$http.get("http://localhost:8090/user").then((res)=>{
      console.log(res.body);
      this.blogsList=res.body;
    }).catch((err)=>{
      console.log(err+"出错了");
    })
  }
};
</script>

<style  scoped>
.homeOnePic {
  margin: 0 auto;
  width: 100%;
  height: 600px;
}
.homeOnePic img {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
  
}
.introduction {
  margin: 50px auto 0 auto;
  width: 90%;
  height: 300px;
}
.introduction .indContent {
    width: 70%;
    height: 100%;
    font-size: 1.4em;
    font-weight: 300;
    line-height: 1.8em;
  
}

.introduction .title {
    font-size: 1.75rem;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.1;
    color: inherit;
    margin: 10px 0;
  
}
.container {
  width: 90%;
  margin: 0 auto;
  height: 1038px;
}
.container .row {
    box-sizing: border-box;
    width: 100%;
    height: 33.3333%;
    background-color: rgb(243, 241, 231);
  
}
.container .row .picLeft,
   .container .row  .wordLeft,
   .container .row  .picRight,
   .container .row  .wordRight {
      float: left;
    
}

.container .row .picLeft,
   .container .row  .picRight {
      height: 100%;
      width: 40%;
  
}
.container .row .wordLeft,
   .container .row .wordRight {
      height: 100%;
      width: 50%;
      margin: 0 5%;
  
}
.container .row .picLeft img,.container .row .picRight img {
      width: 100%;
      height: 100%;
  
}
.container .row .wordLeft .content ,
.container .row .wordRight .content{
        font-weight: 400;
        color: #777;
        font-size: 18px;
 
}
.container .row .wordLeft .title
.wordRight .title {
        font-size: 1.75rem;
        font-family: inherit;
        font-weight: 700;
        line-height: 1.3;
        color: #000;
        margin: 10px 0;

}
#dis {
  overflow: hidden;
  margin: 40px 0;
  background: url(https://pic.liesio.com/2020/05/10/690af212d9969.jpg) left -291.833px / cover;
  width: 100%;
  height: 300px;
}
#dis div {
    margin: 50px 0 0 30px;
    width: 60%;
  
}
#dis div h2 {
      color: #fff;
  
}
#newBlogs {
  width: 90%;
  height: 500px;
  margin: 20px auto 0 auto;
}
#newBlogs .title {
    font-family: "Open Sans", sans-serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.5;
    color: #212529;
    margin: 0 1.6% 20px 1.6%;
  }

#newBlogs .content {
    width: 100%;
    height: 400px;
    overflow: hidden;
  
}
#newBlogs .content .blogs {
      width: 30%;
      height: 100%;
      margin: 0 1.6666%;
      float: left;
    
}
</style>
