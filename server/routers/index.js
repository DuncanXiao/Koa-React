import Router from 'koa-router';
import fs from 'fs';

const router = new Router();

const routerPaths = [];

const getPathName = (path='') => {
  let pathNames = fs.readdirSync('./server/routers'+path);
  pathNames.forEach(function(pathName){
    if (!(/(\.js)/.test(pathName))) {
      getPathName(path+'/'+pathName);
    } else if (path) {
      routerPaths.push(path);
    } 
  });
}

getPathName();

const initRouter = () => {
  const routerPaths = [];
  routerPaths.forEach((routerPath) => {
    let routerName = require(`.${routerPath}`).default;
    if (/^(\/home)/.test(routerPath)) {
      router.use('/', routerName.routes(), routerName.allowedMethods());
    } else if (/^(\/api)/.test(routerPath)) {
      router.use('/api', routerName.routes(), routerName.allowedMethods());
    } else {
      router.use(routerPath, routerName.routes(), routerName.allowedMethods());
    }
  });
}

initRouter();

module.exports = router;