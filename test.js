
// 设计一种机制，监听任何的异常

async function f1() {
  // try {
  //   await f2()
  // } catch (e) {
  //   throw new Error('f1 e');
  // }
  f2()
}

async function f2() {
  try {
    await f3()
  } catch (e) {
    console.log('f2 e');
  }
}

async function f3() {
  // await setTimeout(function() {
  //   throw new Error('f3 e'); // async run
  // }, 1000)
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const r = Math.random();
      if(r < 0.8) {
        reject('f3 e');
      } 
    }, 1000);
  })
}
// console.log(f3());
f1();




// 函数设计
// 判断出异常 return fasle null
// throw new Error(): preferred 

// 当调用 别人的库的时候就需要try catch

// KOA 库 包 axios sequelize 都是返回 promise

