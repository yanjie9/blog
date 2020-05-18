<template>
  <div class="login">
    <div class="title">博客管理系统</div>
    <div class="loginForm">
      <input type="text" name="loginName" v-model="loginName" placeholder="管理员名称" />
      <br />
      <input type="password" name="loginPassword" v-model="loginPassword" placeholder="密码" />
      <br />
      <button type="submit" @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginName: "",
      loginPassword: ""
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          "http://localhost:8090/admin/login",
          {
            name: this.loginName,
            password: this.loginPassword
          },
          { emulateJSON: true }
        )
        .then(res => {
          console.log(res + "登陆成功");
          if (
            this.loginName == res.body[0].name &&
            this.loginPassword == res.body[0].password
          ) {
            alert("登陆成功");
            this.$router.push({ path: "/Home" });
          } else {
            alert("登录失败,用户名或密码错误");
          }
        })
        .catch(err => {
          console.log(err + "登录失败");
          alert("登录失败");
        });
    }
  }
  /*  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  } */
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.login {
  width: 30%;
  height: 200px;
  margin: auto;
  margin-top: 150px;
  background: rgb(237, 248, 243);
}
.login .title {
  text-align: center;
  color: rgb(18, 83, 75);
  font-size: 24px;
  font-weight: bold;
}
.login .loginForm input {
  outline: none;
  width: 90%;
  margin: 15px auto;
  font-size: 18px;
}
.login .loginForm button {
  outline: none;
  width: 30%;
  margin: 15px auto;
  font-size: 18px;
}
</style> 