
// 设计一种机制：监听任何的异常







function func1() {
  try {
    func2();
  } catch(er) {
    throw er;
  }
}

async function func2() {
  try {
    await func3();
  } catch(err) {
    console.log('err');
  }

}

// console.log(func3());
function func3() {
  // await setTimeout(function() {
  //   // async 
  //   throw new Error('timeout')
  // }, 1000);
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const r = Math.random();
      if(r < 0.5) {
        reject('error - settimeout');
      }
    }, 1000);
  })
}

func1();

// 没有异常，正确返回结果
// 发生了异常

// 函数设计
// 判断出异常，return false, null
// throw new Error
