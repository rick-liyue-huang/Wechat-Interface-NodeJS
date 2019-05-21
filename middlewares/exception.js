
// create middleware for global exception
// const catchError = async (ctx, next) => {
//   try {
//     await next()
//   } catch (e) {
//     ctx.body = {
//       content: 'server is wrong'
//     };
//   }
// }

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    ctx.body = {
      content: 'server is wrong'
    };
  }
}

module.exports = catchError;