/**
 * Created by yanhaoqi on 2017/7/25.
 */
var koa = require('koa');
var app = koa();
app.use(async (ctx,next) => {
    await next();
   ctx.response.type = 'text/html';
   ctx.response.body = '<h1>hello koa=====================<h1>'
});
app.listen(3000);