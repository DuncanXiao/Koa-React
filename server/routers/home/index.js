import Router from 'koa-router';
import HomeController from 'Controllers/home';

const home = new Router();
home.get('/', async(ctx) => {
  const homeController = new HomeController();
  await homeController.login(ctx.cookies.get('token')).catch(()=>{console.log('未登录状态.')});
  await ctx.render(homeController.template, homeController.templateOptions);
});

export default home;