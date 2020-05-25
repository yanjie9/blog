const router = require("koa-router")();
const ObjectId = require('mongodb');
const DB = require('../module/db.js'); 
router.post('/login', async (ctx, next) => {    //提交个人信息
    console.log("管理员登录");
 //   console.log(ctx.request.body);
    let result =await DB.find("admin");
  //  console.log(result);
    ctx.body = result;
});
router.get('/Blog', async (ctx, next) => {    //渲染博客
    console.log("博客");
    let result = await DB.find("blogs");
    ctx.body = result;
});
router.post('/Blog/addBlog', async (ctx, next) => {    //添加博客
    console.log("添加博客");
     let req = ctx.request.body;
  //   console.log(req);
     //   id: "",    date: new Date(""),     comment: []
     let result = await DB.find("blogs");
     req.id =(result.length+1).toString();
     req.date = new Date();
     req.comment = [];
     let endResult = await DB.insert("blogs",req);
     ctx.body = endResult;

   
});
router.get('/Blog/delete', async (ctx, next) => {    //删除博客
    console.log("删除博客");
   // console.log(typeof(ctx.query.id));
    let result = await DB.remove("blogs",{"id":ctx.query.id});
  //  console.log(result);
    ctx.body = result;  
});
router.get('/Blog/changeBlog', async (ctx, next) => {    //修改博客
    console.log("修改博客");
  //  console.log(typeof(ctx.query.id));
    let result = await DB.find("blogs",{"id":ctx.query.id});
   // console.log(result);
    ctx.body = result;  
});
router.get('/Blog/doChangeBlog', async (ctx, next) => {    //提交修改博客
    console.log("提交修改博客");
   // console.log(ctx.query.id);
    let result = await DB.update("blogs",{"id":ctx.query.id},ctx.query);
  //  console.log(result);
    ctx.body = result;  
});
router.get('/Blog/seeComment', async (ctx, next) => {    //查看博客评论
    console.log("查看博客评论");
    //console.log(ctx.query.id);
    let result = await DB.find("blogs",{"id":ctx.query.id});
   // console.log(result[0]);
    ctx.body = result[0];  
});
router.get('/Blog/deleteComment', async (ctx, next) => {    //删除博客评论
    console.log("删除博客评论");
  //  console.log(ctx.query.commentId);
    //console.log(ctx.query.id);
    let result = await DB.find("blogs",{"id":ctx.query.id});
  //  console.log(result[0].comment);
    let newComment;
    let i;
    for(i=0;i<result[0].comment.length;i++){
        if(result[0].comment[i].commentId==ctx.query.commentId){
            //console.log(i);
            result[0].comment.splice(i,1);
        }
    };
  //  console.log(result[0].comment);
    let resultEnd= await DB.update("blogs",{"id":ctx.query.id},{"comment":result[0].comment});
    ctx.body = resultEnd; 
});
router.get('/Message', async (ctx, next) => {    //渲染留言
    console.log("留言");
    let result = await DB.find("userInf");
    ctx.body = result;
});
router.get('/Message/delete', async (ctx, next) => {    //删除留言
    console.log("删除留言");
    let result = await DB.remove("userInf",{"id":Number(ctx.query.id)});
    ctx.body = result;  
});
router.get('/Classify', async (ctx, next) => {    //渲染分类
    console.log("分类");
    let result = await DB.find("blogs");
   // console.log(result);
    let classifyList=[];
    for(let i=0;i<result.length;i++){
        if(result[i].classify){
            let flag=0;
            for(let j=0;j<classifyList.length;j++){
                if(result[i].classify==classifyList[j].classifyName){
                    flag=1;
                    break;
                }
            }
            if(flag==0){
                classifyList.push({classifyName:result[i].classify,classifyNum:0});
            }
        }
    }
    let resultNum = await DB.find("blogs");
    for(let i=0;i<resultNum.length;i++){
        for(let j=0;j<classifyList.length;j++){
            if(resultNum[i].classify==classifyList[j].classifyName){
                classifyList[j].classifyNum++;
            }
        }
 
    }
    console.log(classifyList);
    ctx.body = classifyList;
});
router.get('/Classify/seeBlogs', async (ctx, next) => {    //查看该分类博客
    console.log("查看该分类博客");
 //   console.log(ctx.query.classifyName);
    let result = await DB.find("blogs",{"classify":ctx.query.classifyName});
   
  //  console.log(result);
    ctx.body = result;  
});
router.get('/Classify/changeName', async (ctx, next) => {    //重命名分类
    console.log("重命名分类");
   // console.log(ctx.query.oldName,ctx.query.newName);
    let result = await DB.find("blogs");
    let endResult;
    for(let i=0;i<result.length;i++){
        if(result[i].classify==ctx.query.oldName){
            //result[i].classify=ctx.query.newName;
            endResult = await DB.update("blogs",{"classify":ctx.query.oldName},{"classify":ctx.query.newName});
        }
    }
   // console.log(endResult);
    ctx.body = endResult;  
});
router.get('/Classify/deleteBlog', async (ctx, next) => {    //删除分类及其中博客
    console.log("删除分类及其中博客");
  //  console.log(ctx.query.classifyName);
    let result = await DB.remove("blogs",{"classify":ctx.query.classifyName});
    ctx.body = result;  
});
router.get('/Classify/moveBlog', async (ctx, next) => {    //删除分类不删除其中博客
    console.log("删除分类不删除其中博客");
   // console.log(ctx.query.nowClassify);
   // console.log(ctx.query.moveClassify);
    let result = await DB.update("blogs",{"classify":ctx.query.nowClassify},{"classify":ctx.query.moveClassify});
    ctx.body = result;  
});
/* router.get('/Inf', async (ctx, next) => {    //提交个人介绍
    console.log("提交个人介绍");
    console.log(ctx.query.aboutPic);
    console.log(ctx.query.aboutWord);
    let result = await DB.update("blogs",{"classify":ctx.query.nowClassify},{"classify":ctx.query.moveClassify});
    ctx.body = result;  
}); */

module.exports = router;