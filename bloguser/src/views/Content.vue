<template>
  <div class="content">
    <div class="introduce">
      <img src="https://pic.liesio.com/2020/05/10/e5a7783e50e35.jpg" />
      <div class="word">
        长时间沉浸于同一种生活状态里，真的会感觉时间变得越来越快，而且回忆起来全是一片空白。这种被单一感完全困住的感觉会让人觉得特别虚无。
        其实，对抗time flies的办法很简单，就是去变化和学习。哪怕像现在这样每天在同一处生活，也要尽力去选择一些不同的生活体验。
        总之，当人开始迷茫开始虚无开始混乱的时候，去学习一些新事物，去了解外面发生的事，保持情绪稳定，尽量让每一天都有迹可循。就像T.H.White说的那样，「这是唯一可以让心永不疲惫，永不疏离，永不后悔的事情」。
      </div>
    </div>
    <div class="inf">
      <div class="left">
        <ul>
          <li>
            <strong>电话：</strong>13992721625
          </li>
          <li>
            <strong>邮箱：</strong>yj3992721625@qq.com
          </li>
          <li>
            <strong>地址：</strong>西安邮电大学长安校区
          </li>
        </ul>
      </div>
      <div class="right">
        <form>
          <input type="text" v-model="infName" name="name" id="name" placeholder=" 姓名：" />
          <br />
          <input type="email" v-model="infEmail" name="email" id="email" placeholder=" 邮箱：" />
          <br />
          <textarea
            name="content"
            v-model="infContent"
            cols="30"
            rows="10"
            id="content"
            placeholder=" 内容:"
          ></textarea>
        </form>
        <div id="submit" type="submit" @click="submitInf()">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infName: "",
      infEmail: "",
      infContent: ""
    };
  },
  methods: {
    submitInf() {
      console.log(this.infName, this.infEmail, this.infContent);
      this.$http
        .post(
          "http://localhost:8090/user/UserInf",
          {
            name: this.infName,
            email: this.infEmail,
            content: this.infContent
          },
          { emulateJSON: true }
        )
        .then(res => {
          alert("提交成功");
          location.reload();
        })
        .catch(err => {
          alert("提交失败");
        });
    }
  }
};
</script>

<style>
ul {
  list-style: none;
}
.introduce {
  margin: 0 auto;
  width: 80%;
  height: 600px;
}
.introduce img {
  width: 100%;
  height: 70%;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  box-sizing: border-box;
}
.introduce .word {
  width: 100%;
  height: 30%;
  color: rgb(85, 85, 85);
  font-size: 13px;
  line-height: 3em;
}
.inf {
  margin: 0 auto;
  width: 80%;
  height: 300px;
}
.inf .left,
.right {
  float: left;
  width: 40%;
  height: 100%;
  margin: 0 5%;
}

.inf .left ul {
  width: 100%;
  height: 100%;
}
.inf .left ul li {
  color: gray;
  height: 25%;
  width: 100%;
  margin: 4.16% 0;
}
.inf .right form input,
textarea {
  border: 1px solid rgb(232, 232, 232);
  font-size: 14px;
  border-radius: 20px;
  outline: none;
  width: 100%;
  margin: 10px 0;
}
.inf .right form input {
  height: 50px;
}
.inf .right form textarea {
  height: 100px;
  resize: none;
}
.inf .right #submit {
  border: 1px solid rgb(232, 232, 232);
  font-size: 14px;
  border-radius: 20px;
  outline: none;
  margin: 10px 0;
  height: 50px;
  line-height: 50px;
  width: 100px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
}
</style>
