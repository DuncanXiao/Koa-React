const Koa = require('koa');
const routers = require('./routers');
const views = require('koa-views');
const path = require('path');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const http = require('http');
const jwtKoa = require('koa-jwt');
const { SECREAT } = require('./constant/config');

const app = new Koa();

app.use(bodyParser());

app.use(serve(
  path.join( __dirname, './static')
));

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs',
  map: {
    ejs: 'ejs'
  }
}));

// app.use(jwtKoa({ secret: SECREAT }).unless({
//   path: [/^\/api\/login/]
// }));

app.use(routers.routes()).use(routers.allowedMethods());
const server = http.createServer(app.callback());
export default server;
// server.listen(3000, function(){
//   console.log('part: 3000');
// })