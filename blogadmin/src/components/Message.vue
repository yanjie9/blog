<template>
  <div ref="Message" class="Message">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        用户名：{{item.name}}<br/>邮箱：{{item.email}}<br/>内容：{{item.content}}<br/>
        <button :key="index" @click="deleteMessage(index)">删除</button>
        <br/><hr/><br/>
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
    deleteMessage(index) {
      console.log(index);
      console.log(this.list[index].id);
      this.$http
        .get("http://localhost:8090/admin/Message/delete", {
          params: { id: this.list[index].id }
        })
        .then(res => {
          console.log(res.body);
          alert("删除成功");
          location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$http
      .get("http://localhost:8090/admin/Message")
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
.Message{
  margin-left: 3%;
}
</style>