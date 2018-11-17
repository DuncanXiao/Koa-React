import Router from 'koa-router';
import EmailController from 'Controllers/api/email';
import sendMail from 'Utilities/emailClient';
import _ from 'underscore';
import verifyRequest from 'Utilities/verifyRequest';

const signupApi = new Router();

signupApi.post('/signup', async(ctx) => {
  const code = parseInt(Math.random()*1000);
  const request = Object.assign({}, ctx.request.body, {state: 0}, {code: code.toString()});
  try {
    verifyRequest().catch((e) => { throw e });
    const emailRequest = _.omit(request, 'name');
    const verifyUrl = `http://localhost:3000/api/email/${request.email}?code=${request.code}&name=${request.name}`;
    const mail = {
      to: request.email,
      html: '<a src="'+verifyUrl+'">点击验证</a>'
    };
    const existedEmail = await EmailController.getEmail(emailRequest).catch((e) => {
      throw e;
    });
    if (existedEmail === null) {
      await EmailController.create(emailRequest).catch((e)=> {
        throw e;
      });
    } else if (existedEmail.get('state') === 0) {
      await EmailController.update({email: request.email, code: request.code}).catch((e)=> {
        throw e;
      });
    } else if (existedEmail.get('state') === 1) {
      throw {"statusCode": 400, "message": 'email existed'};
    }
    sendMail(mail);
    ctx.body = 'send email to validate';
  } catch(err) {
    ctx.status = err.statusCode || 500;
    ctx.body = err.message;
  }
});

export default signupApi;