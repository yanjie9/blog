<template>
  <div class="Blog">
    <Blogs class="Blogs" :blogsItem="item" v-for="(item,index) in dataShow" :key="index"></Blogs>
    <div class="pageTurning">
      <div class="pre" @click="prePage()">上一页</div>
      <div class="currentPage">{{currentPage+1}}</div>
      <div class="next" @click="nextPage()">下一页</div>
    </div>
    <router-view class="cs"></router-view>
  </div>
</template>
<script>
import Blogs from "./Blogs";
export default {
  data() {
    return {
      List: [], //后台传来的数据来源
      totalPage: [],
      pageSize: 3, // 每页显示数量
      pageNum: 1, // 共几页
      dataShow: "", // 当前显示的数据
      currentPage: 0 // 默认当前显示第一页
    };
  },
  methods: {
    //翻页
    prePage() {
      if (this.currentPage == 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    nextPage() {
      if (this.currentPage == this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    }
  },
  mounted() {
    console.log(this.$route.query.seeBlogs);
    if (this.$route.query.seeBlogs) {
      this.List = this.$route.query.seeBlogs;
    } else {
      this.$http
        .get("http://localhost:8090/admin/Blog")
        .then(res => {
          console.log(res.body);
          this.List = res.body;
          // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
          this.pageNum = Math.ceil(this.List.length / this.pageSize) || 1;
          for (let i = 0; i < this.pageNum; i++) {
            this.totalPage[i] = this.List.slice(
              this.pageSize * i,
              this.pageSize * (i + 1)
            );
          }
          // 当前显示的内容
          this.dataShow = this.totalPage[this.currentPage];
        })
        .catch(err => {
          console.log(err + "出错了");
        });
    }
  },
  components: {
    Blogs
  }
};
</script>
<style scoped>
.Blog {
  position: absolute;
  top: 100px;
  right: 0;
  width: 85%;
  height: 500px;
}
.Blogs {
  width: 30%;
  height: 400px;
  float: left;
  margin: 10px 1.666%;
}
.cs {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.pageTurning {
  cursor: pointer;
  position: absolute;
  left: 40%;
  bottom: 10px;
  width: 30%;
  height: 20px;
}

.pageTurning .pre:hover,
.pageTurning .next:hover {
  color: #fafafa;
  background-color: #a0d6b8;
}

.pageTurning .pre,
.pageTurning .next,
.pageTurning .currentPage {
  float: left;
  margin: 0 15px;
}
</style>