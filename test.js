// const fs = require('fs');

// // const names = fs.readdirSync('./server/routers');
// // const names = fs.realpathSync('./server/routers');

// // console.log(names);

// (function (){
//   let names = []
//   function getPathName (path='') {
//     let pathNames = fs.readdirSync('./server/routers'+path);
//     pathNames.forEach(function(pathName){
//       if (!(/(\.js)/.test(pathName))) {
//         getPathName(path+'/'+pathName);
//       } else if (path) {
//         names.push(path);
//       } 
//     });
//   }
//   getPathName();
//   console.log(names);
// })();