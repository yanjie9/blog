const koa = require('koa');
const mongoClient = require('mongodb').mongoClient;
const DB = require('./module/db.js');
const router = require("koa-router")();
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const path = require('path');
const render = require("koa-art-template");
const user = require('./routes/user');
const admin = require('./routes/admin');

const app = new koa();
app.use(bodyParser({
        formLimit: '1mb'
      }));
app.use(static("views"))

// 处理跨域
app.use(async (ctx, next) => {
        ctx.set("Access-Control-Allow-Origin", "*")
        await next()
})

//配置art-template中间件
render(app, {
        root: path.join(__dirname, 'views'),
        extname: '.html',
        debug: process.env.NODE_ENV !== 'production'
});


//art-template使用
router.get("/user", async (ctx) => {
        await ctx.render("user/index");
})
router.get("/admin", async (ctx) => {
        await ctx.render("admin/index");
})

// 请求数据的接口 -路由 
router.use('/user', user.routes());  //用户登录
router.use('/admin', admin.routes());  //管理员登录 
//启动路由
app.use(router.routes()).use(router.allowedMethods());
app.listen(8090);






