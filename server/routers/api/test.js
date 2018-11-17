import Router from 'koa-router';
import { signToken, verifyToken } from 'Utilities/createJwt';

const testApi = new Router();

testApi.get('/test', async(ctx) => {
	const data = { title: 'hello word.' };
	const token = ctx.cookies.get('token');
	let custom = {};
	if(token) { custom = verifyToken(token);}
	await ctx.render('test.ejs', Object.assign({}, data, custom));
});

testApi.post('/test', async(ctx) => {
	const token = signToken({title: 'yes'});
	ctx.body = {token: token};
});

export default testApi;