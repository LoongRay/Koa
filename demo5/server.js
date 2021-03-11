const Koa = require('koa');
const Router = require('koa-router');

// const koaLog = require('./koa-log');//引入koa-log.js,打印操作行为日志

const app = new Koa();
const router = new Router();


router.get('/', (ctx, next) => {
    // ctx.router available
    console.log(ctx);
    ctx.body = "首页";
  });

  router.get('/list', (ctx, next) => {
    // ctx.router available
    console.log(ctx);
    ctx.body = "列表";
  });

  router.get('/detail', (ctx, next) => {
    // ctx.router available
    console.log(ctx);
    ctx.body = "详情";
  });
  
  // app.use(koaLog)
  app
    .use(router.routes())//将所有的路由注册进来
    .use(router.allowedMethods());//将get/post方法注册进来

app.listen(3000);