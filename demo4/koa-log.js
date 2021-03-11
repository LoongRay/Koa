module.exports = async (ctx, next) => {
    const start = new Date().getTime();
    await next();

    const end = new Date().getTime();
    //ctx.request.url 响应地址
    //end-start 请求过程消耗时间
    //ctx.body.length 整个网络请求的body体长度
    console.log(ctx.request.url, end-start, ctx.body.length);
}
