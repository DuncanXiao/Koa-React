import Router from 'koa-router';
import validate from 'koa2-validation';
import loginSchema from 'Model/schema/loginSchema';

const loginApi = new Router();

loginApi.post('/login', validate(loginSchema), async(ctx) => {
	try {
		ctx.status = 200;
		ctx.body = 'yes';
	} catch (error) {
		ctx.status = 400;
		ctx.body = error.message;
	}
});

export default loginApi;
