<template>
  <div class="blog">
    <div class="left">
      {{word}}
      <blogs class="blogs" v-for="(item,index) in dataShow" :key="index" :blogsItem="item"></blogs>
      <div class="pageTurning">
        <div class="pre" @click="prePage()">上一页</div>
        <div class="currentPage">{{currentPage+1}}</div>
        <div class="next" @click="nextPage()">下一页</div>
      </div>
    </div>
    <div class="right">
      <div class="search">
        <div class="title">搜索博客</div>
        <div class="searchContent">
          <input v-model="searchBlog" type="text" id="search" name="search" placeholder="你在找什么" />
          <button name="submit" id="submit" @click="search()">搜索</button>
        </div>
      </div>
      <div class="classify">
        <div class="classifyTitle">分类目录</div>
        <ul>
          <li @click="classifyContent(item.classifyName)" v-for="(item,index) in list" :key="index">
            {{item.classifyName}}
            <span class="itemNum">{{item.classifyNum}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import blogs from "../components/blogs.vue";
export default {
  data() {
    return {
      word: "",
      searchBlog: "",
      list: [],
      blogsList: [], //后台传来的数据来源
      totalPage: [],
      pageSize: 6, // 每页显示数量
      pageNum: 1, // 共几页
      dataShow: "", // 当前显示的数据
      currentPage: 0 // 默认当前显示第一页
    };
  },
  components: {
    blogs
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
    },
    //搜索
    search() {
      this.$http
        //    .get("http://loacalhost/8090/Blog/SearchBlog", { params: { "findContent": this.searchBlog }})
        .get("http://localhost:8090/user/Blog/SearchBlog", {
          params: { findContent: this.searchBlog }
        })
        .then(res => {
          console.log("查找成功");
          this.word = "";
          this.blogsList = res.body;
          console.log(res);
          // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
          this.pageNum = Math.ceil(this.blogsList.length / this.pageSize) || 1;
          for (let i = 0; i < this.pageNum; i++) {
            this.totalPage[i] = this.blogsList.slice(
              this.pageSize * i,
              this.pageSize * (i + 1)
            );
          }
          // 当前显示的内容
          this.dataShow = this.totalPage[this.currentPage];
          console.log(typeof this.dataShow[0].id);
        })
        .catch(err => {
          this.word = "没有有关博客";
        });
    },
    //分类查找
    classifyContent(name) {
      console.log(name);
      this.$http
        .get("http://localhost:8090/user/Blog/Classify", {
          params: { classify: name }
        })
        .then(res => {
          this.word = "";
          console.log(res.body);
          this.blogsList = res.body;
          // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
          this.pageNum = Math.ceil(this.blogsList.length / this.pageSize) || 1;
          for (let i = 0; i < this.pageNum; i++) {
            this.totalPage[i] = this.blogsList.slice(
              this.pageSize * i,
              this.pageSize * (i + 1)
            );
          }
          // 当前显示的内容
          this.dataShow = this.totalPage[this.currentPage];
          console.log(typeof this.dataShow[0].id);
        })
        .catch(err => {
          this.word = "没有有关博客";
        });
    }
  },
  mounted() {
    // 后台传过来的数据
    this.$http
      .get("http://localhost:8090/user/Blog")
      .then(res => {
        this.word = "";
        console.log(this.blogsList);
        this.blogsList = res.body;
        // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
        this.pageNum = Math.ceil(this.blogsList.length / this.pageSize) || 1;
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.blogsList.slice(
            this.pageSize * i,
            this.pageSize * (i + 1)
          );
        }
        // 当前显示的内容
        this.dataShow = this.totalPage[this.currentPage];
      })
      .catch(err => {
        console.log(err + "出错了");
        this.word = "还没有博客";
      });

    //分类
    this.$http
      .get("http://localhost:8090/user/Blog/showClassify")
      .then(res => {
        console.log(res.body);
        this.list = res.body;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.blog {
  height: 1650px;
  position: relative;
  left: 5%;
}
.left {
  position: relative;
  float: left;
  width: 65%;
  height: 100%;
}
.left .pageTurning {
  cursor: pointer;
  position: absolute;
  left: 40%;
  bottom: 0;
  width: 30%;
  height: 20px;
}

.left .pageTurning .pre:hover,
.left .pageTurning .next:hover {
  color: #fafafa;
  background-color: #d4a0d6;
}
.left .pageTurning .pre,
.left .pageTurning .next,
.left .pageTurning .currentPage {
  float: left;
  margin: 0 15px;
}
.left .blogs {
  width: 45%;
  height: 500px;
  margin: 20px 2.5%;
  float: left;
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100%;
}
.right .search {
  width: 80%;
  height: 150px;
  border: 1px solid #eee;
  margin: 20px auto;
}
.right .search .searchContent {
  width: 80%;
  margin: 0 10%;
}
.right .search .title {
  width: 80%;
  height: 30px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 20px 10%;
}
.right .search #search {
  width: 80%;
  height: 40px;
  line-height: 40px;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 0.95em;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  background: none;
  outline: none;
}
.right .search #submit {
  height: 40px;
  line-height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.right .classify {
  width: 80%;
  border: 1px solid #eee;
  margin: 20px auto;
}

.right .classify .classifyTitle {
  width: 80%;
  height: 30px;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  margin: 20px 10%;
}

.right .classify ul {
  width: 100%;
  height: 100%;
}
.right .classify ul li {
  height: 30px;
  width: 80%;
  margin: 10px 10%;
  background: #fafafa;
  padding: 10px;
  color: #777;
}
.right .classify ul li .itemNum {
  float: right;
}
</style>
