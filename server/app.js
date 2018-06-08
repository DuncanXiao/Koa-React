import Koa from 'koa';
import routers from 'Routers';
import views from 'koa-views';
import path from 'path';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';

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

app.use(routers.routes()).use(routers.allowedMethods());

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
});