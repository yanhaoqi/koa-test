/**
 * Created by yanhaoqi on 2017/7/25.
 */
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx,next) => {
    //这种console.log的语法第一次见，不过没看出有啥好处，效果和我下面那句一样。。。
    // console.log(`${ctx.request.method} ${ctx.request.url}`);
    //ctx.request.method 简写 ctx.method   ctx.request.url 简写 ctx.url
    console.log(ctx.method,ctx.url);
    await next()
});
app.use(async (ctx,next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log('耗费时间: ',ms)
});
app.use(async (ctx,next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');