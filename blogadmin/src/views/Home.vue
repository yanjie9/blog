<template>
  <div class="home">
    <div class="box">
      <div class="title">博客管理系统</div>
      <div class="addBlog" @click="addBlog()">+发布博客</div>
      <div class="content">
        <div class="left">
          <ul>
            <li class="one">
              <router-link to="/Home/Blog">博客</router-link>
            </li>
            <li class="one">
              <router-link to="/Home/Classify">分类</router-link>
            </li>
            <li class="one">
              <router-link to="/Home/Message">留言</router-link>
            </li>
            <!--   <li class="PersonInf one" @click="show()">个人信息</li>
            <li class="show" :style="showPersonInf">
              <ul>
                <li class="two">
                  <router-link to="/Home/PersonInf">*个人信息</router-link>
                </li>
                <li class="two">
                  <router-link to="/Home/About">*关于</router-link>
                </li>
                <li class="two">
                  <router-link to="/Home/Picture">*图集</router-link>
                </li>
              </ul>
            </li>-->
          </ul>
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //  showPersonInf: { display: "none" }
    };
  },
  methods: {
    addBlog() {
      this.$router.push({ path: "/Home/AddBlog" });
    } /* ,
    show() {
      if (this.showPersonInf.display == "none") {
        this.showPersonInf.display = "block";
      } else if (this.showPersonInf.display == "block") {
        this.showPersonInf.display = "none";
      }
    } */
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 600px;
  background-color: rgb(237, 248, 243);
}
.box .title {
  color: rgb(18, 83, 75);
  font-size: 28px;
  font-weight: bolder;
  text-align: center;
  width: 100%;
  height: 50px;
}
.box .addBlog {
  height: 50px;
  float: right;
  font-size: 21px;
  color: cadetblue;
}
.box .content {
  width: 100%;
  height: 500px;
  margin-top: 50px;
}
.box .content .left {
  float: left;
  width: 15%;
  font-size: 18px;
  height: 100%;
  border: 1px solid rgb(18, 83, 75);
}
.box .content .left ul {
  width: 100%;
  height: 100%;
  list-style: none;
}
.box .content .left ul.one,
.box .content .left ul .two {
  width: 100%;
  height: 30px;
  color: cadetblue;
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid black;
}
.box .content .left ul .one a {
  color: cadetblue;
  font-size: 18px;
  text-align: center;
}
.box .content .left ul .one:hover {
  background-color: rgb(68, 131, 105);
  color: #fff;
}
.box .content .left ul .one:hover a,
.box .content .left ul .two:hover a {
  color: #fff;
}

.box .content .left ul .two a {
  color: rgb(5, 56, 43);
  font-size: 18px;
}
.box .content .left ul .two:hover {
  background-color: rgb(18, 70, 63);
  color: #fff;
}

.box .content .right {
  float: left;
}
</style>