import Router from 'koa-router';
import homeRouter from './home';
import userApi from './api/user';

const router = new Router();

router.use('/', homeRouter.routes(), homeRouter.allowedMethods());
router.use('/api', userApi.routes(), userApi.allowedMethods());

export default router;