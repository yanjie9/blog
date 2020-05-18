<template>
    <div class="Blog">
        <input type="text" v-model="aboutPic" name="aboutPic" id="aboutPic" placeholder="更换图片：输入图片地址"><br/>
        <input type="text" v-model="aboutWord" name="aboutWord" id="aboutWord" placeholder="更换介绍：输入新介绍"><br/>
        <button type="submit" @click="submitAdout()">提交</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aboutPic:'',
            aboutWord:''
        }
    },
    methods:{
        submitAdout(){
            console.log(this.aboutPic);
            console.log(this.aboutWord);
             this.$http
        .get("http://localhost:8090/admin/Inf",{params:{
            aboutPic:this.aboutPic,
            aboutWord:this.aboutWord
        }})
        .then(res => {
          console.log("成功"+res);
          //this.list = res.body;
        })
        .catch(err => {
          console.log("失败" + err);
        });
        }
    }

}
</script>
<style scoped>

</style>