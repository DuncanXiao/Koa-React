import Router from 'koa-router';
import UserController from 'Controllers/api/user';
const userApi = new Router();

userApi.post('/user', async(ctx) => {
  await UserController.create(ctx.request.body).then((v)=>{
    ctx.body = v
  }).catch((e)=> {
    ctx.status = e.status;
    ctx.body = e;
  });
});

export default userApi;