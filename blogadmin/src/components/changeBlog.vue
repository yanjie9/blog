<template>
  <div class="Blog">
    标题:<input type="text" name="title" id="title" v-model="blogContent.title" /><br/>
    分类:<input v-model="blogContent.classify" type="text" name="classify" id="classify" />
    <br />内容：<br/>
    <textarea name="content" id="content" cols="30" rows="10" v-model="blogContent.content"></textarea><br/>
    <button @click="finish()" type="submit">完成</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogContent: {
        id: "",
        title: "",
        content: "",
        classify: ""
      }
    };
  },
  methods: {
    finish() {
      console.log(this.blogContent);
      this.$http
        .get("http://localhost:8090/admin/Blog/doChangeBlog", {
          params: this.blogContent
        })
        .then(res => {
          console.log("成功" + res.body);
          this.$router.push({ path: "/Home/Blog" });
          location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$http
      .get("http://localhost:8090/admin/Blog/changeBlog", {
        params: { id: this.$route.query.id }
      })
      .then(res => {
        console.log(res.body[0]);
        this.blogContent.id = res.body[0].id;
        this.blogContent.title = res.body[0].title;
        this.blogContent.content = res.body[0].content;
        this.blogContent.classify = res.body[0].classify;
      })
      .catch(err => {
        console.log(err + "失败");
      });
  }
};
</script>
<style scoped>
img {
  width: 30%;
  height: 300px;
}
.Blog{
  background-color: rgb(237, 248, 243);
  position: absolute;
  left: 16px;
}
input{
  margin-left: 2%;
}
button{
  width: 10%;
  height: 7%;
  margin-left: 5%;
}
textarea{
  margin-left: 5%;
}
</style>