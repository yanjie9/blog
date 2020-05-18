<template>
  <div class="blogDetails">
    <div class="main">
      <div class="title">{{blogContent.title}}</div>
      <div class="content">{{blogContent.content}}</div>
    </div>

    <div class="comment">
      <div class="title">评论区</div>
      <div class="content">
        <ul>
          <li v-for="item in blogContent.comment" :key="item.commentId">
            <div class="inf">
              <div class="image">
                <img src="https://pic.liesio.com/2020/05/18/e3a5333192120.png" />
              </div>
              <div class="nameTime">
                <strong>{{item.commentName}}</strong>
                <br />
                <span class="time">{{item.commentTime}}</span>
              </div>
            </div>
            <div class="infContent">{{item.commentContent}}</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="reply">
      <div class="yourReply">留下你的评论</div>
      <div class="replyContent">
        <input type="hidden" name="blogContentId" v-model="blogContent.id" />
        <input type="text" name="name" v-model="replyName" id="name" placeholder="姓名" />
        <input type="email" name="email" v-model="replyEmail" id="email" placeholder="电子邮箱" />
        <br />
        <textarea
          name="replyText"
          v-model="replyText"
          id="replyText"
          cols="30"
          rows="10"
          placeholder="请输入您的评论"
        ></textarea>
        <br />
        <button @click="submitReply()" type="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      replyName: "",
      replyEmail: "",
      replyText: "",
      blogContent: {}
    };
  },
  methods: {
    submitReply() {
      // console.log(this.replyName);
      //传给后台，存在数据库中
      if (
        this.replyText == "" ||
        this.replyName == "" ||
        this.replyEmail == ""
      ) {
        alert("该区域不能为空");
        return;
      }
      this.$http
        .get("http://localhost:8090/user/Blog/DoCommit", {
          params: {
            blogContentId: this.blogContent.id,
            replyName: this.replyName,
            replyEmail: this.replyEmail,
            replyText: this.replyText
          }
        })
        .then(res => {
          console.log(res.body[0]);
          this.blogContent = res.body[0];
          alert("评论成功");
          location.reload();
        })
        .catch(err => {
          alert("评论失败" + err);
        });
    }
  },
  mounted() {
    console.log(this.$route.params);
    let param = this.$route.params;
    //  console.log(typeof param.aid);
    this.$http
      .get("http://localhost:8090/user/Blog/BlogDetail", {
        params: { id: param.aid }
      })
      .then(res => {
        // console.log(res.body);
        this.blogContent = res.body[0];
      })
      .catch(err => {
        console.log(err + "出错了");
      });
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.blogDetails .main {
  margin: 0 auto;
  width: 90%;
}
.blogDetails .main .title {
  color: #444;
  line-height: 1.1em;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: inherit;
  font-weight: 700;
}
.blogDetails .main .content {
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: #212529;
  width: 100%; /*要显示文字的宽度*/
  word-wrap: break-word;
  word-break: break-all;
}
.blogDetails .comment {
  margin: 30px auto;
  width: 90%;
}
.blogDetails .comment .title {
  line-height: 1.1em;
  color: #222;
  margin-bottom: 30px;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
}
.blogDetails .comment .content ul {
  width: 100%;
  height: 100%;
}
.blogDetails .comment .content ul li {
  width: 80%;
  border-bottom: 1px solid rgb(177, 174, 174);
  padding: 20px 0;
}
.blogDetails .comment .content ul li .inf {
  height: 30px;
  margin-bottom: 20px;
}
.blogDetails .comment .content ul li .inf .image,
.nameTime {
  float: left;
}
.blogDetails .comment .content ul li .inf .nameTime {
  margin-left: 10px;
  font-size: 18px;
  font-weight: 400;
}
.blogDetails .nameTime .time {
  font-size: 12px;
  color: #999;
}
.blogDetails .content .infContent {
  margin-left: 50px;
  font-weight: 400;
  color: #555;
}
.blogDetails .reply {
  margin: 30px auto;
  width: 90%;
}
.blogDetails .reply .yourReply {
  line-height: 1.1em;
  color: #222;
  margin-bottom: 30px;
  font-size: 24px;
  font-family: inherit;
  font-weight: 700;
}
.blogDetails .reply .replyContent input {
  outline: none;
  margin: 10px 5%;
  width: 20%;
  background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  border-radius: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
}
.blogDetails .reply .replyContent textarea {
  margin: 10px 5%;
  width: 50%;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  border-radius: 0;
  font-family: "Open Sans", sans-serif;
  resize: none;
}
.blogDetails .reply .replyContent button {
  font-weight: normal;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.25;
  outline: none;
  margin: 10px 5%;
}
.blogDetails .reply .replyContent button:hover {
  background-color: #ccc;
}
</style>