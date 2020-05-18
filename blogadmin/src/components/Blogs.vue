<template>
  <div class="blogs">
    <div class="pic">
     
        <img :src="blogsItem.image" />
    
    </div>
    <div class="content">
      <div class="dateClassify">
        <div class="date">{{blogsItem.date}}</div>
        <div class="classify">
          <a href="#">{{blogsItem.classify}}</a>
        </div>
      </div>
      <div class="title">
      {{blogsItem.title}}
      </div>
      <div class="sub">{{blogsItem.content}}</div>
      <div class="operate">
          <button @click="changeBlog()">修改</button><br/>
          <button @click="deleteBlog()">删除</button><br/>
          <button @click="seeComment()">查看评论</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  methods: {
       changeBlog(){
          console.log("修改博客");
          this.$router.push({path:'/Home/Blog/changeBlog',query:{id:this.blogsItem.id}});
      },
      deleteBlog(){
          console.log("删除博客");
         let r = confirm("是否真的要删除该博客");
         if(r==true){
             console.log(this.blogsItem.id);
             this.$http.get("http://localhost:8090/admin/Blog/delete",{params:{"id":this.blogsItem.id}}).then(res=>{
                 console.log(res);
                 alert("删除成功");
                location.reload();
             }).catch(err=>{
                 console.log(err);
                 alert("删除失败")
             });
         }else{
             return;
         }
      },
      seeComment(){
          console.log("查看评论");
          this.$router.push({path:'/Home/Blog/seeComment',query:{id:this.blogsItem.id}});
      }
  },
  props: ["blogsItem"]
};
</script>

<style>
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
      position: relative;
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
.blogs .content .operate{
            position: absolute;
            right: 0;
            bottom: 40%;
           
   
}
.blogs .content .operate button{
               background-color: transparent;
               border: none;
               font-size: 16px;
               outline: none;
}

</style>
