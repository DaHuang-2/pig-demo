// module.exports = {
//   deveServer : {
//     proxy:{
//       '/m.hua':{
//         target:'http://m.hua.com',
//         pathRewrite:{
//           '/m.hua':''
//         },
//         changeOrigin:''
//       }
//     }
//   }
// }
const proxy = require ('http-proxy-middleware')
module.exports = function(app){
   app(use)(
     proxy('/m.hua',
     {target:'http://m.hua.com',
      pathRewrite:{
          '/m.hua':''
       },
       changeOrigin :''
      }
     )
   )
}