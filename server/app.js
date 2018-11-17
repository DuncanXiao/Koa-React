import Koa from 'koa';
import routers from 'Routers';
import views from 'koa-views';
import path from 'path';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import http from 'http';
// import jwtKoa from 'koa-jwt';
// import { SECREAT } from './constant/config';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || err.code;
    ctx.body = {
      success: false,
      message: err.message,
    };
  }
});

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
server.listen(3000, function(){
  console.log('part: 3000');
});
export default server;