const Koa = require('koa');
const app = new Koa();

app.use(async(ctx,next) => {
    ctx.body = "1";
    //异步代码,在中间件1中读取ctx.body = "1";
    //后没有立即执行next(),因此只执行了中间件1就停止了,打印结果为12
    setTimeout(()=>{
        next();
    },2000);
    ctx.body += "2";
});

app.use(async(ctx,next) =>{
    ctx.body += "3";
    next();
    ctx.body += "4";
});

app.use(async(ctx,next) =>{
    ctx.body += "5";
    next();
    ctx.body += "6";
});

app.listen(3000);