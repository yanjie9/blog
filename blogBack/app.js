const koa = require('koa');
const mongoClient = require('mongodb').mongoClient;
const DB = require('./module/db.js');
const router = require("koa-router")();
const bodypaser = require('koa-bodyparser');
const static = require('koa-static');
const path = require('path');
const user = require('./routes/user');
const admin = require('./routes/admin');

const app = new koa();
app.use(bodypaser());


// 处理跨域
app.use(async (ctx, next) => {
        ctx.set("Access-Control-Allow-Origin", "*")
        await next()
})

// 请求数据的接口 -路由 
router.use('/user', user.routes());  //用户登录
router.use('/admin', admin.routes());  //管理员登录
//启动路由
app.use(router.routes()).use(router.allowedMethods());
app.listen(8090);






