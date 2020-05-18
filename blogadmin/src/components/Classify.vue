<template>
  <div class="Blog">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span @click="seeBlogs(index,item.classifyName)">{{item.classifyName}}({{item.classifyNum}})</span>
        <button @click="deleteCalssify(index,item.classifyName)">删除</button>
        <button @click="reName(index,item.classifyName)">重命名</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    show() {
      this.$http
        .get("http://localhost:8090/admin/Classify")
        .then(res => {
          console.log("成功");
          this.list = res.body;
        })
        .catch(err => {
          console.log("失败" + err);
        });
    },
    seeBlogs(i,item){
        console.log(i,item);
         this.$http
        .get("http://localhost:8090/admin/Classify/seeBlogs",{
            params: { classifyName: item }
        })
        .then(res => {
          console.log("成功");
          console.log(res.body);
          this.$router.push({path:"/Home/Blog",query:{seeBlogs:res.body}});
        })
        .catch(err => {
          console.log("失败" + err);
        });
    },
    deleteCalssify(i, item) {
      console.log(i);
      let e = confirm("是否也删除其中的博客");
      if (e == true) {
        console.log("删除其中博客");
        this.$http
          .get("http://localhost:8090/admin/Classify/deleteBlog", {
            params: { classifyName: item }
          })
          .then(res => {
            console.log("删除成功" + res);
            this.show();
          })
          .catch(err => {
            console.log("删除失败" + err);
          });
      } else if (e == false) {
        console.log("保留其中博客");
        let n = prompt("请输入其中的博客要进去的分类名称");
        if (n) {
          this.$http
            .get("http://localhost:8090/admin/Classify/moveBlog", {
              params: {nowClassify:item, moveClassify: n }
            })
            .then(res => {
              console.log(res + "转移成功");
              this.show();
            })
            .catch(err => {
              console.log("转移失败" + err);
            });
        }
      }
    },
    reName(i, item) {
      console.log(i, item);
      let newName = prompt("请输入新名称：");
      if (newName) {
        console.log(newName);
        this.$http
          .get("http://localhost:8090/admin/Classify/changeName", {
            params: { oldName: item, newName }
          })
          .then(res => {
            console.log(res + "重命名成功");
            this.show();
          })
          .catch(err => {
            console.log("重命名失败" + err);
          });
      }
    }
  },
  mounted() {
    this.show();
  }
};
</script>
<style scoped>
.Blog{
  position: absolute;
  margin-left: 1%;
}
li{
  margin: 10px 0;
 
}
</style>