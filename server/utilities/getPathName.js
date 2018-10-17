import fs from 'fs';

const getFileName = (path) => {
  let fileNames = fs.readdirSync(path);
  fileNames.forEach(function(fileName){
    if (!(/(\.js)/.test(fileName))) {
      getPathName(path+'/'+fileName);
    } else if (fileName) {
      routerPaths.push(fileName);
    } 
  });
}