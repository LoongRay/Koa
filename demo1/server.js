const koa = require('koa');//引用koa
const app = new koa();//创建koa实例

app.use(async(ctx) =>{
    //ctx是整个应用的上下文，包含常用的request、response
    //ctx.response代表 HTTP Response。同样地，ctx.request代表 HTTP Request。
    //ctx.response.body可以简写成ctx.body
    ctx.body = "hello koa"
});

app.listen(3000);//监听3000端口