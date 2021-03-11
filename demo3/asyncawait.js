//1.callback 传统回调模式,易产生回调地狱

//1)
// function ajax(){
//     setTimeout(()=>{
//         console.log("你好!");
//     },1000);
// }

// ajax();
// console.log('执行结束');//先打印"执行结束" ,再打印"你好"

//2)
// function ajax(fn){
//     setTimeout(()=>{
//         console.log("你好!");
//         fn()
//     },1000);
// }

// ajax(() =>{
//     console.log("执行结束!");
// });

// 2.Promise方式
// function delay(word){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve(word);
//         },2000)
//     })
// }

// delay('张三')
//     .then((word)=>{
//         console.log(word);
//         return delay('李四');
//     })
//     .then((word)=>{
//         console.log(word);
//         return delay('赵x');
//     })
//     .then((word)=>{
//         console.log(word);
//     })

//3.async+await 使用

function delay(word){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(word);
        },2000)
    })
}

async function start(){
    const word1 = await delay('张三');
    console.log(word1);
    const word2 = await delay('李四');
    console.log(word2);
    const word3 = await delay('赵X');
    console.log(word3);
    const word4 = await delay('肖n');
    console.log(word4);
}

start();

