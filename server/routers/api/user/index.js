import Router from 'koa-router';
import UserController from 'Controllers/api/user';

const userApi = new Router();

userApi.get('/user', async(ctx) => {
  
});

export default userApi;