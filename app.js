/**
 * Created by yanhaoqi on 2017/7/25.
 */
const Koa = require('koa');
//注意require('koa-router')是一个函数，需要调用
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(async (ctx,next) => {
    //这种console.log的语法第一次见。es6模板字符串。
    // console.log(`${ctx.request.method} ${ctx.request.url}`);
    //ctx.request.method 简写 ctx.method   ctx.request.url 简写 ctx.url
    console.log(ctx.method,ctx.url);
    await next()
});
router.get('/',async (ctx,next) => {
    ctx.body=`<h1>首页 . index<h1>
              <!--action属性 请求的路径 method 请求的方法-->
              <form action="/signin" method="post">
                <!--name属性 post请求存放在请求体中的字段名-->
                <p>用户名：<input type="text" name="name"></p>
                <p>密码：<input type="password" name="password"></p>
                <p><input type="submit" value="提交"></p>
              <form/>`
});
router.post('/signin',async (ctx,next) => {
    var name = ctx.request.body.name || ''
    var password = ctx.request.body.password || ''
    console.log(`用户名------${name},密码---------${password}`)
    ctx.body=`<h1>welcome ${name}<h1>
             <a href="/">返回首页</a>`
});
//使用bodyPaser中间件 必须在router前面
app.use(bodyParser());
//使用router中间件
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');