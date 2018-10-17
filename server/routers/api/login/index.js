import Router from 'koa-router';
import validate from 'koa2-validation';
import UserController from 'Controllers/api/user';
import EmailController from 'Controllers/api/email';
import loginSchema from 'Routers/schema/login';
import { signToken } from 'Utilities/createJwt';

const loginApi = new Router();

loginApi.post('/login', validate(loginSchema),async(ctx) => {
  try {
    const requestBody = ctx.request.query;
    const unidentifiedUser = await EmailController.getEmail(requestBody)
      .catch((e) => {
        throw e
      });
    if (unidentifiedUser.get('password') !== requestBody.password) {
      throw {statusCode: 400, message: '密码错误'}
    }
    if ( unidentifiedUser.get('state') !== 1 ) {
      throw {statusCode: 400, message: '账号没验证成功'}
    }
    await UserController.getUser(requestBody).then((user) => {
      ctx.body = {email: user.message.email, token: signToken({email: user.message.email})};
    }).catch((e) => {
      throw e
    });
  } catch(e) {
    console.log(e)
    ctx.status = e.statusCode;
    ctx.body = e;
  }
});

export default loginApi;