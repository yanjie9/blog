<template>
  <div class="Comment">
    {{blogComment.commentName}}<br/>
    {{blogComment.commentTime}}<br/>
    {{blogComment.commentContent}}<br/>
    <button @click="deleteComment()">删除</button>
    <br/><hr/><br/>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    deleteComment() {
      this.$http
        .get("http://localhost:8090/admin/Blog/deleteComment", {
          params: { commentId: this.blogComment.commentId ,id:this.blogId},
        })
        .then(res => {
          console.log(res.body + "成功");
         alert("删除成功");
         location.reload();
        })
        .catch(err => {
          console.log(err + "失败");
          alert("删除失败");
        });
    }
  },
  props: ["blogComment","blogId"]
};
</script>
<style scoped>
</style>