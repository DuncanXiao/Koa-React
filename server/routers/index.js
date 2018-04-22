import Router from 'koa-router';
import homeRouter from './home';

const router = new Router();

router.use('/', homeRouter.routes(), homeRouter.allowedMethods());

export default router;