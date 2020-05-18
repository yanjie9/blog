<template>
  <div class="blogs">
    <div class="pic">
      <router-link :to="'/BlogDetails/'+blogsItem.id">
        <img :src="blogsItem.image" />
      </router-link>
    </div>
    <div class="content">
      <div class="dateClassify">
        <div class="date">{{blogsItem.date}}</div>
        <div class="classify">
          <a href="#">{{blogsItem.classify}}</a>
        </div>
      </div>
      <div class="title">
        <router-link :to="'/BlogDetails/'+blogsItem.id">{{blogsItem.title}}</router-link>
      </div>
      <div class="sub">{{blogsItem.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: ["blogsItem"]
};
</script>

<style >
.blogs {
  box-sizing: border-box;
}
.blogs .pic {
    width: 100%;
    height: 65%;
    margin: 0 auto;
  
}
.blogs .pic img {
      width: 100%;
      height: 100%;
 
}
.blogs .content {
    width: 100%;
    height: 35%;
  
}
.blogs .content .dateClassify {
      margin: 10px 0;
      width: 100%;
      height: 15%;
 
}
.blogs .content .dateClassify .date {
        float: left;
        font-weight: 400;
        color: #999;
        text-transform: capitalize;
    
}
.blogs .content .dateClassify .classify {
        float: right;
 
}
.blogs .content .dateClassify .classify a {
          color: #999;
          letter-spacing: 0.05em;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
}
.blogs .content .title {
      line-height: 1.1em;
      color: #222;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 10px;
}
.blogs .content .sub {
      color: #6c757d;
      line-height: 1.5;
      font-weight: 400;
      text-align: left;
      font-size: 0.95em;
      width: 100%; /*要显示文字的宽度*/
      text-overflow: ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
      white-space: nowrap; /*让文字不换行*/
      overflow: hidden; /*超出要隐藏*/

}
</style>
