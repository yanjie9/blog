<template>
  <div id="app">
    <div class="nav">
      <img src="https://pic.liesio.com/2020/05/18/41863213bbfe5.png" />
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/Blog">博客</router-link>
        </li>
        <li>
          <router-link to="/Content">联系</router-link>
        </li>
      </ul>
    </div>
    <hr />
    <br />
    <router-view></router-view>
    <aboutMe></aboutMe>
  </div>
</template>



<script>
import aboutMe from "./components/aboutMe.vue";
export default {
  data() {
    return {};
  },
  components: {
    aboutMe
  }
};
</script>




<style>
* {
  margin: 0;
  padding: 0;
  color: #000;
}
body {
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
.nav {
  width: 100%;
  height: 110px;
}

.nav img {
  margin-left: 10%;
}

.nav ul {
  margin-right: 10%;
  list-style: none;
  float: right;
  width: 30%;
  height: 110px;
}
.nav ul li {
  font-family: Georgia;
  font-size: 23px;
  float: left;
  width: 30%;
  height: 110px;
  line-height: 110px;
  text-align: center;
}
</style>
