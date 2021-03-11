const Koa = require('koa');
const app = new Koa();

//中间件1
app.use(async(ctx, next)=>{
    ctx.body = '1';

    //next作用:先打印1,再执行下一个中间件
    next();//next()不执行,则后面的中间件都不会打印,只会输出1,2
    ctx.body += '2';
})

//中间件2
app.use(async(ctx, next)=>{
    ctx.body += '3';
    //next作用:打印数字3,在执行下一个中间件
    next();
    ctx.body += '4';
})

// 中间件3
app.use(async(ctx, next)=>{
    ctx.body += '5';
    //next作用:打印数字5,再执行下一个中间件,没有中间件则打印6,然后由下至上打中间件2中的数据4
    //和中间件1中的数据2
    next();
    ctx.body += '6';
})

app.listen(3000); //监听3000端口,打印结果为135642