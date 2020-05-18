<template>
  <div class="aboutMe">
    <hr />
    <br />
    <ul>
      <li>
        <div class="about">
          <div class="aboutTitle">关于</div>
          <div class="aboutPic">
            <img :src="aboutPic" />
          </div>
          <div class="aboutWord">{{aboutWord}} ​​​​</div>
        </div>
      </li>
      <li>
        <div class="inf">
          <div class="infTitle">个人信息</div>
          <div class="infContent">
            <ul>
              <li>
                <strong>姓名：</strong>yanjie
              </li>
              <li>
                <strong>年龄：</strong>2000.08.09
              </li>
              <li>
                <strong>学校：</strong>西安邮电大学
              </li>
              <li>
                <strong>邮箱:</strong>&nbsp;&nbsp;yj13992721625@163.com
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div class="pic">
          <div class="picTitle">图集</div>
          <div class="picContent">
            <div class="pics">
              <img src="https://pic.liesio.com/2020/05/10/fcbd809d2fc55.jpg" />
            </div>
            <div class="pics">
              <img src="https://pic.liesio.com/2020/05/10/5dc6aa6e8f5f9.jpg" />
            </div>
            <div class="pics">
              <img src="https://pic.liesio.com/2020/05/09/bd1edf54fcfb0.jpg" />
            </div>
            <div class="pics">
              <img src="https://pic.liesio.com/2020/05/10/92a86db9dc1c9.jpg" />
            </div>
            <div class="pics">
              <img src="https://pic.liesio.com/2020/05/10/b51d04801fd50.jpg" />
            </div>
            <div class="pics">
              <img src="https://pic.liesio.com/2020/05/10/fce316236136e.jpg" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutPic: "https://pic.liesio.com/2020/05/17/4a9355b9ef197.jpg",
      aboutWord:
        "偷过得懒，走过得捷径，最后都会加倍向你讨要回来。当下认真对待，立即着手去做是最有效最简洁最省事的解决办法"
    };
  }
};
</script>

<style>
.aboutMe {
  width: 90%;
  height: 400px;
  margin: 50px auto 0;
}
.aboutMe ul {
  width: 100%;
  height: 100%;
  list-style: none;
}

.aboutMe li {
  width: 30%;
  height: 100%;
  margin: 0 1.666%;
  float: left;
}

.aboutMe li .inf,
.aboutMe li .pic {
  width: 100%;
  height: 100%;
}
.aboutMe .about {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.about .aboutTitle {
  font-size: 20px;
}
.about .aboutPic {
  margin: 20px 0;
  width: 90%;
  height: 60%;
}
.about .aboutPic img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.about .aboutWord {
  width: 90%;
  height: 30%;
  color: rgb(85, 85, 85);
  font-family: 微软雅黑;
  font-size: 14px;
}
.inf .infTitle {
  font-size: 20px;
}

.inf .infContent ul {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  list-style: none;
}
.inf .infContent ul li {
  margin: 10px 0;
  width: 100%;
  height: 20%;
}
.pic .picTitle {
  font-size: 20px;
  margin-left: 3.333%;
}
.pic .picContent {
  width: 100%;
  height: 90%;
  margin-top: 15px;
}
.pic .picContent .pics {
  float: left;
  width: 40%;
  height: 30%;
  margin: 1.6666% 5%;
}
.pic .picContent .pics img {
  width: 100%;
  height: 100%;
}
</style>
