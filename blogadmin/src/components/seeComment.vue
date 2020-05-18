<template>
  <div class="seeComment">
    <Comment :blogId="id" :blogComment="item" v-for="(item,index) in list" :key="index"></Comment>
  </div>
</template>
<script>
import Comment from "./Comment.vue";
export default {
  data() {
    return {
      list: [],
      id: ""
    };
  },
  components: {
    Comment
  },
  mounted() {
    this.$http
      .get("http://localhost:8090/admin/Blog/seeComment", {
        params: { id: this.$route.query.id }
      })
      .then(res => {
        console.log(res.body + "成功");
        this.list = res.body.comment;
        this.id = res.body.id;
      })
      .catch(err => {
        console.log(err + "失败");
      });
  }
};
</script>
<style scoped>
.seeComment {
  background-color: rgb(237, 248, 243);
  position: absolute;
  left: 16px;
}
</style>