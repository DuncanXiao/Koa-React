import Router from 'koa-router';
import homeRouter from './home';
import userApi from './api/user';
import emailApi from './api/email';

const router = new Router();

router.use('/', homeRouter.routes(), homeRouter.allowedMethods());
router.use('/api', userApi.routes(), userApi.allowedMethods());
router.use('/api', emailApi.routes(), emailApi.allowedMethods());

export default router;