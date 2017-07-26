/**
 * Created by yanhaoqi on 2017/7/25.
 */
const Koa = require('koa');
//注意require('koa-router')是一个函数，需要调用
const router = require('koa-router')();

const app = new Koa();
app.use(async (ctx,next) => {
    //这种console.log的语法第一次见。es6字符串模板。
    // console.log(`${ctx.request.method} ${ctx.request.url}`);
    //ctx.request.method 简写 ctx.method   ctx.request.url 简写 ctx.url
    console.log(ctx.method,ctx.url);
    await next()
});
//:name 动态路由
router.get('/hello/:name',async (ctx,next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello,${name}<h1/>`
});
router.get('/',async (ctx,next) => {
    ctx.response.body = `<h1>index . 首页<h1>`
});
//使用router中间件
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');