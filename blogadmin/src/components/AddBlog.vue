<template>
  <div class="AddBlog">
    发布微博
    标题：
    <input type="text" name="title" id="title" v-model="blogContent.title" />分类：
    <input v-model="blogContent.classify" type="text" name="classify" id="classify" />
    <br />内容：
    <textarea name="content" id="content" cols="30" rows="10" v-model="blogContent.content"></textarea>
    图片：
    <input type="text" name="image" v-model="blogContent.image" id="image" />
    <br />
    <button @click="finish()" type="submit">完成</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogContent: {
        title: "",
        content: "",
        image:'',
        classify: ""
      }
    };
  },
  methods: {
    finish() {
      console.log(this.blogContent);
        this.$http
        .get("http://localhost:8090/admin/Blog/addBlog", {
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
  }
};
</script>
<style scoped>
</style>