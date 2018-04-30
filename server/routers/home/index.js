import Router from 'koa-router';
import homeController from 'Controllers/home';

const home = new Router();

home.get('/', async(ctx) => {
  await ctx.render(homeController.template, homeController.templateOptions);
});

export default home;