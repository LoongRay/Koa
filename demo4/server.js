const Koa = require('koa');
const app = new Koa();

const koaLog = require('./koa-log');//引入koa-log.js,打印操作行为日志

app.use(koaLog);

app.use(async (ctx, next) => {
    console.log(ctx);//打印请求的上下文信息

    if(ctx.request.url == "/"){//如果输入地址为localhost:3000/,页面显示首页
        ctx.body='首页';
    }else if(ctx.request.url == "/detail"){//如果输入地址为localhost:3000/detail,页面显示详情页
        ctx.body='详情页';
    }else{//如果输入地址为localhost:3000/$%^#其他内容,页面显示首页404
        ctx.body='<h2>404 not found</h2>'
    }
})

app.listen(3000); //监听3000端口,打印结果跟进输入地址判断
