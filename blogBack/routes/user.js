const router = require("koa-router")();
const queryString = require("querystring");
const DB = require('../module/db.js');
router.get('/new', async (ctx, next) => {    // home  最新博客
    console.log('最新博客');
    let result = await DB.find("blogs", {},{"date":-1}, 3);
    ctx.body = result;


});
router.get('/Blog', async (ctx, next) => {   //所有博客
    console.log("所有博客");
    let result = await DB.find("blogs", {});
  //  console.log(result);
    ctx.body = result;
});
router.get('/Blog/BlogDetail', async (ctx, next) => {   //博客详情
    console.log('博客详情');
    let result = await DB.find("blogs", { "id": ctx.query.id});
    ctx.body = result;
});
router.get('/Blog/SearchBlog', async (ctx, next) => {    //关键字查找博客
    console.log("关键字查找博客");
    var reg = new RegExp(ctx.query.findContent); 
    let result = await DB.find("blogs", {"title":reg});
  //  console.log(result);
    ctx.body = result;
});
router.get('/Blog/showClassify', async (ctx, next) => {    //渲染分类
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
  //  console.log(classifyList);
    ctx.body = classifyList;
});
router.get('/Blog/Classify', async (ctx, next) => {    //分类查找博客
    console.log("分类查找博客");
    let result = await DB.find("blogs", { "classify": ctx.query.classify });
 //   console.log(result);
    ctx.body = result;
});
router.get('/Blog/DoCommit', async (ctx, next) => {    //提交博客评论
    console.log("提交博客评论");
    //console.log(ctx.query);
    let commentList = await DB.find("blogs", { "id":ctx.query.blogContentId});
   // console.log(commentList[0].comment);
    let insertComment = {
            commentId: commentList[0].comment.length+1,
            commentName: ctx.query.replyName,
            commentTime: new Date(),
            commentContent: ctx.query.replyText
          };
         // console.log(insertComment);
       //  console.log(Number(ctx.query.blogContentId));
       //  console.log(commentList[0].comment.concat(insertComment));
    let result = await DB.update("blogs", {"id":ctx.query.blogContentId},{"comment":commentList[0].comment.concat(insertComment)});
 //  console.log(result);
    ctx.body = result;
});
router.post('/UserInf', async (ctx, next) => {    //提交个人信息
    console.log("提交个人信息");
 //   console.log(ctx.request.body);
    let req = ctx.request.body;
    let result = await DB.find("userInf");
     req.id =result.length+1 ;
    // console.log(req);
    let resultEnd = await DB.insert("userInf",req);
    ctx.body = resultEnd;
});
module.exports = router;