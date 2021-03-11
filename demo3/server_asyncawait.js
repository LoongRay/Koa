const Koa = require('koa');
const app = new Koa();

//创建promise实例
function delay(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve();
        },1000)
    })
}

//1)打印:12
app.use(async(ctx,next)=>{
    ctx.body = '1';
    next();
    ctx.body += "2";
})

app.use(async(ctx,next)=>{
    ctx.body += '3';
    await delay();
    next();
    ctx.body += "4";
})

app.use(async(ctx,next)=>{
    ctx.body += '5';
    next();
    ctx.body += "6";
})

app.listen(3000);


//2)打印:135462
// app.use(async(ctx,next)=>{
//         ctx.body = '1';
//         await next();
//         ctx.body += "2";
//     })
    
//     app.use(async(ctx,next)=>{
//         ctx.body += '3';
//         await delay();
//         next();
//         ctx.body += "4";
//     })
    
//     app.use(async(ctx,next)=>{
//         ctx.body += '5';
//         await next();
//         ctx.body += "6";
//     })
    
//     app.listen(3000);


//3)打印:135642
    // app.use(async(ctx,next)=>{
    //     ctx.body = '1';
    //     await next();
    //     ctx.body += "2";
    // })
    
    // app.use(async(ctx,next)=>{
    //     ctx.body += '3';
    //     await delay();
    //     await next();
    //     ctx.body += "4";
    // })
    
    // app.use(async(ctx,next)=>{
    //     ctx.body += '5';
    //     await next();
    //     ctx.body += "6";
    // })
    
    // app.listen(3000);